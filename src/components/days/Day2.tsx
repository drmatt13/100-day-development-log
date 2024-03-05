import DayLayout from "../DayLayout";
import Data from "../../types/data";

const data: Data = [
  // LeetCode
  {
    title: "LeetCode",
    content: [
      {
        contentTitle: "347. Top K Frequent Elements" as "Objective",
        code: [
          {
            language: "typescript",
            description: [
              "Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.",
              `This function, topKFrequent, finds the k most frequent elements in an array of numbers and returns them in descending order of frequency. Here's a breakdown of how I solved it:`,
              "1. Create a Frequency Object: First, we create an empty object freq to keep track of how many times each number appears in the input array nums. The keys of this object are the numbers from the array (converted to strings), and the values are the counts of how often each number appears.",
              "2. Count Frequencies: We iterate through each number in the nums array. For each number, we either initialize its count to 1 (if it hasn't been seen before) or increment its existing count (if it has been seen). This step builds the freq object with the correct counts for each number.",
              "3. Sort by Frequency: We then get all the keys (the numbers from the original array) of the freq object and sort them. The sorting is done based on their frequency (the values in the freq object), in descending order. This means the number with the highest frequency will be the first in the sorted array, and so on.",
              "4. Select Top k Frequent Elements: After sorting, we take the first k elements from this sorted array of keys. These are the k most frequent elements in the original array. Since these elements are currently in string form (because object keys are always strings), we convert them back into numbers using parseInt.",
              "5. Return the Result: Finally, the function returns this array of the k most frequent elements, now correctly identified and in descending order of their frequencies.",
            ],
            text: `
function topKFrequent(nums: number[], k: number): number[] {
  // Create a frequency map
  const freq: { [num: string]: number } = {};

  // Count the frequency of each number
  for (let num of nums) {
    // If the number is not in the map, set it to 1
    freq[num] = (freq[num] || 0) + 1;
  }

  // Sort the keys by frequency
  const sortedKeys = Object.keys(freq).sort((a, b) => freq[b] - freq[a]);

  // After sorting, return the first k keys
  return sortedKeys.slice(0, k).map((num) => parseInt(num));
}
            `,
          },
        ],
      },
      {
        contentTitle: "238. Product of Array Except Self" as "Objective",
        code: [
          {
            language: "typescript",
            description: [
              "Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].",
              "What this is essentially asking for is to take an array of numbers and return a new array where each element is the product of all the numbers in the original array except the number at that index.",
              "Here's how to solve it:",
              "You can optionally use 2 arrays to store the product of all the elements to the left and right of any given element. Then, you can multiply the elements at the same index in both arrays to get the product of all the elements except the current element.",
              "Instead you can use a single array to store the product of all the elements to the left of any given element. Then, you can create a pointer variable to store the product of all the elements to the right of any given element. This pointer variable is updated as we iterate through the array from right to left, and we multiply it by the corresponding element in the left product array to get the final result.",
            ],
            text: `
function productExceptSelf(nums: number[]): number[] {
  // Create an array to store the product of all elements to the left of each element
  const arr = new Array(nums.length).fill(1);
  // Go through the array and calculate the product of all elements to the left of each element
  // We skip the first element since there are no elements to the left of it
  for (let i = 1; i < nums.length; i++) {
    arr[i] = arr[i - 1] * nums[i - 1];
  }
  // Create a pointer variable to store the product of all elements to the right of each element
  let p = 1;
  // Go through the array in reverse and calculate the product of all elements to the right of each element, we use the pointer variable to store the product this time
  // We skip the last element since there are no elements to the right of it
  for (let i = nums.length - 1; i >= 0; i--) {
    arr[i] *= p;
    p *= nums[i];
  }
  // Return the array
  return arr;
}
            `,
          },
        ],
      },
    ],
  },
  // AWS Practice
  {
    title: "AWS Practice",
    content: [
      {
        contentTitle:
          "AWS Solutions Architect Professional Practice Exam Questions" as "Objective",
        text: [
          `Ran through a bunch of AWS Solutions Architect Professional practice exam questions. Used ChatGPT to throughly break down the questions and answers after attempting them.`,
        ],
        images: [
          "/day2/1.png",
          "/day2/2.png",
          "/day2/3.png",
          "/day2/4.png",
          "/day2/5.png",
          "/day2/6.png",
          "/day2/7.png",
        ],
      },
      {
        contentTitle: "Concepts Explored",
        text: [
          "Decoupling an application layer from a database layer using Amazon SQS to handle unpredictable write-heavy traffic without changing the underlying data model. Problems arose when presented with other options than SQS for this scenario. There was one suggested answer to migrate to DynamoDB but this would result in changing the Data Model. Another Answer suggested implementing Elasticache but Elasticache can only help with reducing read operations, not Wtire operations which is specified in the questions scenario. The final incorrect answer explored manually scaling the RDS instance which in theory could provide temporary relief to a write-heavy DB but that wouldn't solve the issue of “unpredictable spikes in traffic”, would consistently require manual intervention, and with every manual scaling of an RDS instance would result in the DB being down while the instance change operation took place.",
          "------",
          "Asked a question about a scenario that concerns performing a Total Cost of Ownership (TCO) analysis. I knew the correct answer was AWS Application Discovery Service but it tried to hit me with Application Migration Service (MGN) as a trick answer so I decided to break down that service as well.",
          "AWS Application Discovery Service",
          "Purpose: The AWS Application Discovery Service helps enterprises plan migration projects by gathering information about their on-premises data centers. Before migrating workloads to AWS, it's vital to understand the existing environment, including dependencies, to ensure a smooth and efficient transition.",
          "How It Works: The service can operate in either an agentless or agent-based mode, depending on the level of detail required and the specific environment.",
          "Agent-Based Data Collection: Involves installing lightweight agents on on-premises servers. These agents collect various data points, such as CPU utilization, network I/O, system performance, running processes, and more. This detailed data helps in assessing the workloads thoroughly for planning migrations.",
          "Agentless Data Collection: Designed for VMware environments, it gathers similar data without requiring agents to be installed on each VM. It utilizes the VMware vCenter to collect information.",
          "Data Collected: Information includes server specifications (CPU, memory, storage), performance data, process running, network dependencies, and more. This data is essential for TCO analysis as it provides insights into resource utilization and dependencies, allowing for a more accurate estimation of costs and needs in the AWS cloud.",
          "AWS Application Migration Service (MGN)",
          "Purpose: AWS Application Migration Service, formerly known as CloudEndure Migration, is a service designed to simplify the migration of applications from on-premises or other clouds to AWS. It minimizes downtime and aims to achieve a seamless migration experience.",
          "How It Works: MGN replicates your source servers into a staging area in AWS without causing downtime or impacting performance. Once the replication is complete and you are ready to migrate, it orchestrates the cutover to AWS with minimal downtime. It supports a wide range of source environments, including physical servers, virtual servers, and other cloud platforms.",
          "Integration with Application Discovery Service: While the Application Discovery Service is focused on the initial assessment and planning phase of a migration, MGN is about the actual migration execution. The data collected by the Application Discovery Service can inform the migration plan executed by MGN, ensuring a data-driven approach that considers the specific characteristics and needs of the workloads being migrated.",
          "Workflow and Integration: Assessment with Application Discovery Service: Start with assessing your on-premises environment using the Application Discovery Service. This step involves collecting detailed information about your workloads, including dependencies and performance metrics.",
          "Planning: Use the collected data to perform a TCO analysis and plan your migration strategy. This includes deciding which workloads to migrate, in what order, and identifying any necessary changes or optimizations before the migration.",
          "Migration with AWS Application Migration Service (MGN): Once the plan is in place, use MGN to replicate and migrate your workloads to AWS. MGN allows for minimal downtime, ensuring business continuity during the migration process.",
          `Finally, there is the "AWS Migration Hub" which acts as a central hub or a management service for monitoring and orchestrating migrations to AWS. It provides a single location to track the progress of applications being migrated to AWS across multiple AWS services and partner tools including AWS Application Discovery Service, AWS Application Migration Service (MGN), and AWS Database Migration Service (DMS).`,
          "------",
          "Pre-signed S3 URLs are special links to an S3 bucket that include authentication information in the query string parameters. This lets people without AWS credentials either view or upload content, such as images. The use of pre-signed S3 URLs for viewing helps safeguard your website's images from being scraped. Since these URLs expire after a set time, it prevents others from simply copying the link to an image for use elsewhere. Moreover, bucket policies can control who is able to generate these pre-signed URLs. When it comes to uploads, pre-signed URLs let clients upload files directly to S3, bypassing the need for a server to relay the files. This approach significantly reduces the workload on the server responsible for handling uploads.",
          "------",
          "One of the questions tried to trip me up regarding where EC2 instances store the temporary security credentials with one answer saying temporary security credentials and the other saying instance user data “Very easy question, I knew the answer immediately.” EC2 instance user data is designed for initial configuration tasks, allowing you to automate the setup process by running scripts at the instance's first start. This could involve installing software, updating settings, or performing other custom setup tasks to ensure the instance is ready for its specific role. However, for custom setups, a preferred approach might be to alternatively create an (AMI) tailored to specific needs. requiring a more bespoke environment, creating a custom Amazon Machine Image (AMI) tailored to meet particular operational requirements.",
          "In contrast, EC2 instance metadata serves a different purpose, acting as a repository for storing and accessing instance-specific information, including temporary security credentials, the instance's public IP address, and more. These credentials are crucial for providing secure, temporary access to AWS services and are dynamically assigned to the instance by AWS through the Security Token Service (STS) at boot time. Unlike user data, which is executed only at launch, metadata and its included credentials can be queried at any time during the instance's lifecycle. To access this metadata, one can make a request to a special endpoint available from within the instance itself, typically through the URL http://169.254.169.254/latest/meta-data/. This mechanism ensures that temporary security credentials are automatically rotated and managed by AWS, offering a secure and efficient method to grant instances the necessary permissions to access other AWS resources.",
          "------",
          "The last question I dealt with today was focused on dealing with Microsoft AD with specific needs, including high availability (interpreted within AWS as spanning multiple Availability Zones), Active Directory (AD) integration for EC2 instances, and a shared filesystem that supports Windows ACLs. AWS offers several options for shared filesystems, including EBS multi-attach, EFS, and FSx. Given that EFS is tailored for Linux instances and doesn't meet our Windows-based needs, and EBS volumes, despite supporting Windows ACLs, can only be attached within the same AZ (limiting their use for high availability requirements), FSx for Windows File Server emerged as the key solution. This service meets all the listed requirements by providing a shared filesystem compatible with Windows ACLs and supporting cross-AZ deployment for high availability, alongside seamless AD integration for the instances.",
        ],
      },
    ],
  },
  // Learning Assignment
  {
    title: "Learning Assignment",
    description: "C Pointers and Arrays",
    content: [
      {
        contentTitle: "Objective",
        text: [
          "This section delves into the concepts of pointers and arrays, teaching you how to work with memory addresses directly and how to manage collections of data efficiently.",
        ],
      },
      {
        contentTitle: "Requirement",
        text: [
          "Explore the declaration and use of pointers and arrays. Practice by writing programs that sort arrays using pointers and dynamically allocate memory for arrays using pointers.",
        ],
      },
      {
        contentTitle: "Knowledge Learned",
        code: [
          {
            language: "c",
            description: [
              "A pointer in C is a variable that stores the memory address of another variable. Pointers are powerful tools in C because they allow direct memory access and manipulation, which can lead to more efficient code.",
              "Declaration of a Pointer",
            ],
            text: `
// We use * to declare a pointer when declaring a variable
int *ptr;

// The variable name is actually ptr not *ptr. 

// The * indicates that it is a pointer to an integer when delcaring the variable but after we have declared the variable, we address it as ptr.
`,
          },
          {
            language: "c",
            description: [
              "Initialization of a Pointer",
              `We use "&" to get the memory address of a variable`,
            ],
            text: `
// &var returns the memory address of var and assigns it to ptr

int var = 10;
int *ptr = &var;

// Without using * to declare the variable as a pointer, we are simply declaring an integer variable which holds the memory address of another integer variable as an interger and nothing more.

// ^ This is incorrect and prevents type-safe access to the value it points to and is highly likely to produce warnings or errors when compiled.

            `,
          },
          {
            language: "c",
            description: [
              "Dereferencing a Pointer",
              "This means to get a value that is stored at the memory address a pointer is pointing to.",
            ],
            text: `
int value = *ptr; // value now holds the value of var, which is 10

// When we use an asterisk (*) in front of a pointer, we are dereferencing the pointer.

// If ptr wasn't delcared with the * to indicate that it is a pointer to an integer, we would get a compiler error because we would be trying to dereference an integer variable which is not allowed.
            `,
          },
          {
            language: "c",
            description: ["Syntax recap"],
            text: `
int var = 10; // declare an integer variable

int *ptr = &var; // declare a pointer named ptr and initialize it with the memory address of var

int value = *ptr; // dereference ptr and store the value of var in value

int *err = var; // Incorrect: This fails because 'var' is an integer value, not an address. Pointers must be assigned addresses, not integer values.
            `,
          },
          {
            language: "c",
            description: [
              "When we create an array, the name of the array is a (constant pointer) to the first element of the array.",
            ],
            text: `
int arr[5] = {1, 2, 3, 4, 5};

// arr == &arr[0] the memory address of the first element of the array

int *ptr = arr; 
// ptr now points to the first element of the array as a 
// use can use ptr[0], ptr[1], ptr[2], ptr[3], ptr[4] to access the elements of the array
            `,
          },
          {
            language: "c",
            description: [
              "Passing an array to a function",
              `When we pass an array to a function, what's actually passed is the address of the first element of the array; the array name "decays" into a pointer to its first element. This means the function receives not the entire array but a pointer, losing information about the array's size.`,
              `However, the original array in memory remains unchanged and still occupies a contiguous block representing its entire size. The 'decay' to a pointer primarily affects how the array is accessed within the function, reducing it to a simple memory address without size context. Thus, while the function interacts with what seems like a pointer, the complete array structure, with its size and contiguous memory allocation, remains intact outside the function.`,
              `To pass the size of the array to the function, we need to pass it as a separate argument.`,
            ],
            text: `
void printArray(int *arr, int size) {
  for(int i = 0; i < size; i++) {
      printf("%d\\n", arr[i]); // arr[i] is equivalent to *(arr + i)
  }
}

int arr[5] = {1, 2, 3, 4, 5};

printArray(arr, 5);

// Output: 1 2 3 4 5

// we can also pass the array to the function like this
printArray(&arr[0], 5); 
// this is because arr is equivalent to &arr[0]

// remember that "&" is the address of operator and when we use square brackets, we are dereferencing the pointer
            `,
          },
          {
            language: "c",
            description: [
              "Attemping to explain/understand better: verifying with hands-on practice and chatGPT outside of these notes.",
            ],
            text: `
// Say we start with an array of integers
int arr[5] = {1, 2, 3, 4, 5};

// arr is a pointer to the first element of the array

// if we print arr, we get the memory address of the first element of the array, not the value which also represents a fixed block of memory large enough to 5 intergers in this case
printf("%p\\n", arr); // Output: 0x7fffbf3b3b60

// now if we print *arr, we get the value of the first element of the array
printf("%d\\n", *arr); // Output: 1

// we can also print the value of the first element of the array like this
printf("%d\\n", arr[0]); // Output: 1

// & is the address of operator. &arr returns the address of the whole array, which is technically the same starting address as arr
printf("%p\\n", &arr); // Output: 0x7fffbf3b3b60

// regarding dereferencing, when we initialize a standard interger with a pointers value, we obtain the value at that memory address such as:
int firstValue = *arr; // firstValue now holds the value of the first element of the array because arr is a pointer to the first element of the array.

// if we wanted to store the memory address of the first element of the array in a pointer, we would do this
int *ptr = arr; // ptr now holds the memory address of the first element of the array
            `,
          },
        ],
      },
    ],
  },
  // Portfolio Work
  {
    title: "Portfolio Work",
    content: [
      {
        contentTitle: "Comments",
        text: ["Comment"],
      },
    ],
  },
];

const Day = () => {
  return <DayLayout data={data} />;
};

export default Day;
