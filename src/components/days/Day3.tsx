import DayLayout from "../DayLayout";
import Data from "../../types/data";

const data: Data = [
  // AWS Practice
  {
    menu: "AWS Practice",
    content: [
      {
        subMenu: "Comments",
        items: [
          {
            text: [
              "I'm not going to break down nearly every question I've analyzed today to avoid eating into my study time and to prevent redundancy with concepts I've already grasped. Nevertheless, I still want it to be shown that I'm proactively practicing, reviewing, and learning material for the AWS Solutions Architect Professional exam.",
            ],
          },
        ],
      },
      {
        subMenu:
          "AWS Solutions Architect Professional Practice Exam Questions" as "Objective",
        items: [
          {
            images: ["/day3/3.png"],
          },
          {
            text: [
              "^ This is the first question I tackled today which addressed database options for semi-structured data to create high availability which could handle both load spikes and a regional AWS outage. Semi-structured data means JSON, XML, or other formats that don't fit neatly into traditional relational database schemas but still have some organizational properties, so I could immediately rule out the answer containing Aurora as a suitable solution. The alternatives considered were DocumentDB, S3, and DynamoDB. S3, being a storage service rather than a true database, lacks the query capabilities and consistency needed for real-time data handling, making it less ideal despite its ability to store semi-structured data. DocumentDB, while better suited for semi-structured data, lacks straightforward multi-region replication, presenting challenges for quick recovery in a regional outage.",
              "DynamoDB emerged as the standout choice due to its robust support for semi-structured data and native multi-region replication via global tables. This capability ensures high availability and resilience to regional failures, aligning perfectly with the need for fault tolerance and scalability during load spikes. Additionally, DynamoDB’s on-demand capacity optimizes resource allocation in response to traffic variations, offering a streamlined, low-management solution. Hence, DynamoDB is the optimal database service for achieving high availability, effective management of semi-structured data, and seamless scaling to address system load demands.",
            ],
          },
          {
            images: ["/day3/4.png"],
          },
          {
            text: [
              "^ This question's requirements are centered around deploying a new version of a three-tier web application using AWS CloudFormation, aiming for zero downtime during the process. It necessitates updating the CloudFormation template to incorporate a new AMI within the Auto Scaling group of EC2 instances. The deployment strategy involves seamlessly replacing old instances with new ones launched from the updated AMI, utilizing the UpdateStack API for a smooth transition.",
              "The solution is to update the CloudFormation template's AWS::AutoScaling::AutoScalingGroup resource section by specifying an UpdatePolicy attribute with an AutoScalingRollingUpdate policy. This strategic approach facilitates a zero-downtime deployment by ensuring a controlled and gradual replacement of instances. This policy is key to maintaining uninterrupted service availability, enabling the application to stay online while the new instances are phased in and the old ones are decommissioned.",
            ],
          },
          {
            language: "yaml",
            text: [
              "When deploying a new version of an application that requires an updated AMI, you would typically:",
              "1. Update the Launch Configuration or Launch Template: Modify the AWS::AutoScaling::LaunchConfiguration or AWS::AutoScaling::LaunchTemplate resource in your CloudFormation template to specify the new AMI ID. This action indicates to CloudFormation that instances launched by the Auto Scaling group should use the new AMI.",
              "2. Trigger an UpdateStack Operation: Apply the updated CloudFormation template by executing the UpdateStack API operation. CloudFormation recognizes the change in the launch configuration or template—specifically, the new AMI ID—as a signal to update the Auto Scaling group.",
              "3. AutoScalingRollingUpdate in Action: With an AutoScalingRollingUpdate policy defined in the UpdatePolicy for the Auto Scaling group, CloudFormation manages the update process according to the policy’s parameters. This means CloudFormation will gradually replace the existing instances with new instances launched with the updated AMI. The policy ensures there are always a minimum number of healthy instances in service (as defined by MinInstancesInService), limiting disruption and ensuring zero downtime.",
            ],
            code: `
Resources:
MyLaunchConfiguration:
  Type: AWS::AutoScaling::LaunchConfiguration
  Properties:
    ImageId: ami-0abcd1234example # New AMI ID
    InstanceType: t2.micro
    # Other configurations like security groups, key pairs, etc.

MyAutoScalingGroup:
  Type: AWS::AutoScaling::AutoScalingGroup
  Properties:
    LaunchConfigurationName: !Ref MyLaunchConfiguration
    MinSize: '1'
    MaxSize: '3'
    DesiredCapacity: '2'
    AvailabilityZones:
      - us-east-1a
      - us-east-1b
  UpdatePolicy:
    AutoScalingRollingUpdate:
      MinInstancesInService: '1' # Ensure at least one instance is always in service
      MaxBatchSize: '1'          # Update one instance at a time
      PauseTime: 'PT5M'          # Wait time between batch updates
      WaitOnResourceSignals: 'true' # Wait for signal before continuing
            `,
          },
          {
            text: [
              "^ In the above yaml example:",
              "The MyLaunchConfiguration resource specifies the configuration for EC2 instances in the Auto Scaling group, including the new AMI ID (ami-0abcd1234example) to use for new instances.",
              "The MyAutoScalingGroup resource defines the Auto Scaling group, referencing MyLaunchConfiguration for its launch configuration. It also specifies the UpdatePolicy of type AutoScalingRollingUpdate, which controls how instances are updated when the launch configuration changes (e.g., when deploying a new AMI).",
            ],
          },
          {
            images: ["/day3/5.png"],
          },
          {
            text: [
              "^ This question I happened to get right because it made the most logical sense for the given situation but the nuances of implimenting TLS/SSL certificates with various AWS services along with the more advanced aspects CloudFront are things I cramed for the exams I passed and need to revisit. Tomorrow for my AWS practice, I'll be focusing on these areas.",
            ],
          },
        ],
      },
    ],
  },
  // Learning Assignment
  {
    menu: "Learning Assignment",
    description: "C Memory Management: malloc and free",
    content: [
      {
        subMenu: "Objective",
        items: [
          {
            text: [
              "Learning about dynamic memory allocation with malloc and memory deallocation with free is crucial for managing memory manually in C, a task that is automatic in higher-level languages.",
            ],
          },
        ],
      },
      {
        subMenu: "Requirement",
        items: [
          {
            text: [
              "Research how to use malloc and free for dynamic memory allocation. Experiment with creating and destroying dynamic data structures, such as dynamic arrays, and monitor memory usage.",
            ],
          },
        ],
      },
      {
        subMenu: "Knowledge Learned",
        items: [
          {
            text: [
              "Today we are moving on to reviewing malloc and free for for dynamic memory allocation in C",
              `"malloc" is used to allocate a block of memory on the heap and returns a pointer to the beginning of the block.`,
              `"free" is used to deallocate memory previously allocated by a call to malloc.`,
              "We will need to include the stdlib.h header file to use both malloc and free which is another standard library in C just like stdio.h.",
            ],
            language: "c",
            code: `
#include <stdlib.h>
            `,
          },
          {
            text: [
              "Before we look at how to use the malloc function effectively, let's review the concept of type casting. Type casting is used to convert a variable of one data type to another data type and is done by placing the type in parentheses before a pointer or variable such as (int) (float variable) or (int *) (void variable).",
              "Integer to Floating Point:",
            ],
            language: "c",
            code: `
int i = 5;
int j = 2;
float result;

// Without casting, the division would be integer division
result = i / j;  // Result would be 2 in this case, not 2.5

// With casting
result = (float) i / j;  

// result is 2.5
            `,
          },
          {
            language: "c",
            text: ["Floating Point to Integer:"],
            code: `
float f = 3.14;
int i;

i = (int) f;  

// i is now 3

            `,
          },
          {
            text: [
              "The malloc function allocates a block of memory and returns a void pointer to the beginning of the block. The void pointer can be cast to any data type.",
              "The malloc function takes a single argument, the number of bytes to allocate, so it is important to know the size of the data type you are allocating memory for, for example, if you are allocating memory for an array of integers, you would use sizeof(int) * number_of_elements.",
              "The malloc function returns a NULL pointer if the memory allocation fails, so it is important to check if the pointer is NULL before using the allocated memory.",
              "In C, NULL is used to signify that a pointer does not point to any valid memory location, making it essential for checking the success of memory allocation operations and for safe pointer operations.",
              "The free function is used to deallocate memory previously allocated by a call to malloc. The pointer passed to free must point to the beginning of a block of memory previously allocated by malloc.",
              "After calling free, the memory block that the pointer refers to is deallocated and should no longer be accessed. While the pointer itself remains valid as a variable, it now points to deallocated memory, making its dereference unsafe. To avoid errors, it's advisable to set the pointer to NULL after freeing its memory, ensuring it doesn't become a dangling pointer.",
              "It is important to note that the pointer passed to free must be either NULL or a pointer previously returned by malloc, otherwise, the behavior is undefined.",
            ],
            language: "c",
            code: `
#include <stdlib.h>

// Declare a pointer to an integer and initialize it to NULL
int *p = NULL;

// Allocate memory for 5 integers and type cast the void pointer returned by malloc to an integer pointer
p = (int *) malloc(sizeof(int) * 5);

// Check if memory allocation was successful
if (p == NULL) {
  printf("Memory allocation failed");
  return 1;
}

// Use the allocated memory
p[0] = 10;
p[1] = 20;
p[2] = 30;
p[3] = 40;
p[4] = 50;

// Deallocate memory
free(p); // Free the allocated memory

// Set the pointer to NULL to avoid using a dangling pointer
p = NULL;
            `,
          },
          {
            text: [
              "In C when we create any variable, it is stored in the stack memory, which is a small memory that is used to store local variables and function calls. The stack memory is managed by the compiler and is automatically allocated and deallocated. So after a function call is over, the memory is automatically deallocated.",
              "However, when we allowically allocate memory using malloc, it is stored in the heap memory, which is a large memory that is used to store global variables and dynamic memory allocation. The heap memory is managed by the programmer and is manually allocated and deallocated. So after a function call is over, the memory is not automatically deallocated and must be manually deallocated using free.",
              "Creating a function to allocate and return a malloc array:",
            ],
            language: "c",
            code: `
#include <stdio.h> // For printf and NULL
#include <stdlib.h> // For malloc and free

// Function to create an array of a given size and return a pointer to it
int* createArray(int size) {
    int* arr = (int*) malloc(size * sizeof(int)); // Allocate memory
    if (arr == NULL) {
        // Allocation failed, return NULL to indicate failure
        return NULL;
    }

    // Initialize the array with some values (e.g., index values)
    for (int i = 0; i < size; i++) {
        arr[i] = i;
    }

    return arr; // Return the pointer to the allocated memory
}
            `,
          },
          {
            text: ["Calling the function, using the array, and freeing it:"],
            language: "c",
            code: `
int main() {
  int size = 10; // Specify the size of the array you want
  int* myArray = createArray(size); // Call the function

  if (myArray == NULL) {
      printf("Memory allocation failed.\\n");
      return 1;
  }

  // Use the array (e.g., print its contents)
  printf("Array elements: ");
  for (int i = 0; i < size; i++) {
      printf("%d ", myArray[i]);
  }
  printf("\\n");

  free(myArray); // Free the allocated memory
  myArray = NULL; // Avoid dangling pointer

  return 0;
}
          `,
          },
        ],
      },
    ],
  },
  // LeetCode
  {
    menu: "LeetCode",
    content: [
      {
        subMenu: "125. Valid Palindrome: TypeScript - Regex" as "Objective",
        items: [
          {
            text: [
              "A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.",
              "Given a string s, return true if it is a palindrome, or false otherwise.",
              "This can be solved entirely with String methods in TypeScript.",
            ],
            language: "typescript",
            code: `
  function isPalindrome(s: string): boolean {
    s = s
      .toLowerCase() // Convert all uppercase letters into lowercase letters
      .replace(/[^a-z0-9]/g, ""); // Use a regular expression to remove all non-alphanumeric characters
      
    // Check if the string is the same forward and backward by comparing it to its reverse
    return s.split("").reverse().join("") === s;
  }
              `,
          },
        ],
      },
      {
        subMenu: "125. Valid Palindrome: TypeScript - No Regex" as "Objective",
        items: [
          {
            text: [
              "Solved the same problem without using regex. Manually filtered out non-alphanumeric characters and checked if the string is the same forward and backward by comparing it to its reverse.",
            ],
            language: "typescript",
            code: `
  function isPalindrome(s: string): boolean {
    s = s.toLowerCase(); // Convert all uppercase letters into lowercase letters
  
    // Initialize an empty string to filter the string and remove all non-alphanumeric characters
    let filteredString = "";
  
    // Manually filter out non-alphanumeric characters
    for (let char of s) {
      if ((char >= 'a' && char <= 'z') || (char >= '0' && char <= '9')) {
        filteredString += char;
      }
    }
  
    // Check if the string is the same forward and backward by comparing it to its reverse
    return filteredString.split("").reverse().join("") === filteredString;
  }
              `,
          },
        ],
      },
      {
        subMenu: "125. Valid Palindrome: C" as "Objective",
        items: [
          {
            text: [
              "Figured since I'm learning C, I'd try to understand how to solve the same problem in C. I'm having ChatGPT walk me through the process of solving the problem in C to build on what I've learned so far.",
              "C learned to date: Syntax, control structures, functions, arrays, pointers, and memory management.",
              "Concepts:",
              "1. We will need to use the stdbool.h header file to use the bool data type in C, which is a standard library just like stdio.h and is used to define the bool data type and the true and false constants.",
              "2. Because the length of the string is not known, we will loop through the string until we react the null terminator '\\0' while incrementing a length variable",
              "3. We will use two pointers, one at the beginning of the string and one at the end, to compare characters.",
              '4. Using the standard library ctype.h, we will use the "isalnum" function to check if a character is alphanumeric and the "tolower" function to convert a character to lowercase as we move the pointers.',
            ],
            language: "c",
            code: `
  #include <stdbool.h> // For bool type
  #include <ctype.h>   // For isalnum and tolower
  
  bool isPalindrome(char* s) {
  
    // Initialize start and end indexs of the string
    int start = 0, end = 0;
  
    // Find the length of the string
    while (s[end] != '\\0') end++;
  
    // Adjust 'end' to point to the last valid character of the string
    end--;
  
    // Loop through the string and compare characters
    while (start < end) {
  
      // Skip non-alphanumeric characters
      while (start < end && !isalnum(s[start])) start++;
      while (start < end && !isalnum(s[end])) end--;
  
      // If pointers have crossed, all checks are done
      if (start >= end) break;
  
      // Check if characters are equal (case-insensitive)
      if (tolower(s[start]) != tolower(s[end])) return false;
  
      // Move towards the middle
      start++;
      end--;
    }
  
    return true;
  }            
              `,
          },
        ],
      },
      {
        subMenu: "Comments",
        items: [
          {
            text: [
              "The TypeScript code finished in 72ms while the C code finished in a blazing fast 0ms!",
              "Note: It's really cool to physically see the drastic performance difference between the two languages.",
            ],
            images: ["/day3/1.png", "/day3/2.png"],
          },
        ],
      },
    ],
  },
  // Portfolio Work
  {
    menu: "Portfolio Work",
    description: "Code Display Overflowing",
    content: [
      {
        subMenu: "Comments",
        items: [
          {
            text: [
              "I know I said I wan't going to comment much on the development of this website but I noticed whe dynamically creating code snippets, the code containers can overflowing their parent containers. One thing I try to do when prototyping and creating layouts is to make sure that every element is responsive, tested, and created correctly to minimize the amount of time needed to spend on it later. There is alot of jsx nested between a few different components and flexbox is primarily used for layout. I attempted to quickly perform a hot fix for this but it appears I'm going to have to go up the DOM tree or JSX if you will and throughly traverse down through the elements one at a time to determine what css issue.",
            ],
            images: ["/day3/7.png", "/day3/8.png"],
          },
        ],
      },
    ],
  },
  {
    menu: "Portfolio Work",
    description: "SocketChat",
    content: [
      {
        subMenu: "Comments",
        items: [
          {
            text: [""],
          },
        ],
      },
    ],
  },
];

const Day = () => {
  return <DayLayout data={data} />;
};

export default Day;
