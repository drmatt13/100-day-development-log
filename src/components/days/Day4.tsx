import DayLayout from "../DayLayout";
import Data from "../../types/data";

const data: Data = [
  // AWS Practice
  {
    menu: "AWS Practice",
    description: "CloudFront + TLS/SSL",
    content: [
      {
        subMenu: "Comments",
        items: [
          {
            text: [
              "Today I decided to study more about CloudFront and TLS/SSL in depth.",
              "As I delve deeper into the realm of AWS services, I find CloudFront to be particularly challenging to grasp in detail. This is emphasized by the specialized questions that often appear in the AWS Certified Solutions Architect professional practice exams, which frequently catch me off-guard. In an effort to solidify my understanding, I've compiled these notes to clarify the complexities of CloudFront, unravel its components, and the workflows involved. By doing so, I aim to fortify my grasp on this service, making it easier to recall and apply its concepts effectively during the exam and in practical scenarios.",
            ],
          },
        ],
      },
      {
        subMenu: "Concepts Review",
        items: [
          {
            text: [
              "CloudFront is a caching and content delivery service that accelerates the delivery of your web content to users. It is a content delivery network (CDN) service that provides a globally-distributed network of proxy servers that cache content locally to users, thereby reducing latency and improving the speed of delivery.",
            ],
            images: ["/day4/4.png"],
          },
          {
            text: [
              "^ CloudFront uses two caching layers: edge locations and regional edge caches. Edge locations are the endpoints for CloudFront, and regional edge caches are used to cache content that is not present at the edge location. When a user requests content that is not cached at an edge location, CloudFront retrieves the content from the regional edge cache and caches it at the edge location for future requests.",
            ],
            images: ["/day4/3.png"],
          },
          {
            text: [
              "^ There is alot going on in this diagram and I'm going to break it down.",
              "First, regarding the user's request, the user's browser sends a request to the CloudFront edge location. If the requested content is cached at the edge location, CloudFront returns the content to the user. If the content is not cached at the edge location, CloudFront forwards the request to the regional edge cache. If the content is cached at the regional edge cache, CloudFront returns the content to the edge location, which then returns the content to the user. If the content is not cached at the regional edge cache, CloudFront forwards the request to the origin server. The origin server returns the content to the regional edge cache, which then returns the content to the edge location, which then returns the content to the user.",
              "Next, building on this information, there are two different types of requests and responses:",
              "1. Viewer requests and responses: These are requests and responses between the user's browser and the CloudFront edge location.",
              "2. Origin requests and responses: These are requests and responses between the CloudFront edge location and the origin server.",
              "From here, looking at the diagram you can see that within the realm of standard edge caches and regional edge caches, there exist two different types of functions:",
              "1. CloudFront Functions: These are lightweight, event-driven JavaScript functions that execute at the CloudFront edge locations. These functions operate exclusively on the viewer request and viewer response events. They are designed to handle simple tasks, such as URL rewrites, HTTP header manipulation, and redirecting requests based on the client’s device type or geographic location. Since they run at the edge, closest to the user, they contribute to lower latency and faster content delivery. CloudFront Functions are distinct from AWS Lambda functions. They do not run on the AWS Lambda platform but are a separate feature within the CloudFront service. CloudFront Functions are defined and managed within the Amazon CloudFront service itself. You can create, edit, and deploy CloudFront Functions directly from the CloudFront service using the AWS Management Console, AWS SDKs, or AWS CloudFormation.",
              "2. Lambda@Edge Functions: These functions are optional and require opting in to unlock their advanced capabilities. Far surpassing CloudFront Functions in complexity, Lambda@Edge is pivotal for executing intricate operations such as dynamic content generation, user authentication and authorization, and tailoring web application content based on various factors like the client’s device type or geographic location. Unlike CloudFront Functions, which are limited to modifying viewer requests and responses, Lambda@Edge functions boast a wider operational scope. They can be invoked at four key points during the content delivery process: viewer request, origin request, origin response, and viewer response, thus enabling manipulation of all requests and responses throughout the system. These functions are developed within the AWS Lambda framework and deployed to Lambda@Edge, integrating seamlessly with CloudFront. Significantly, Lambda@Edge functions can be edited and managed directly from the AWS Lambda console, providing a unified and familiar environment for configuration and deployment. This capability ensures streamlined management and deployment processes, facilitating real-time, edge-based computing for a global audience with minimized latency and optimized user experiences.",
            ],
            images: ["/day4/5.png"],
          },
          {
            text: [
              "When you create a CloudFront distribution, AWS provides a default domain name (e.g., d1234.cloudfront.net) for it. This default domain is automatically covered by an Amazon-issued SSL/TLS certificate, enabling secure HTTPS access without additional configuration.",
              "However, if you want to use your own domain name (e.g., example.com) with CloudFront, you can use a custom SSL/TLS certificate to secure the connection between your viewers and CloudFront. This is particularly important for branding and security purposes, as it allows you to present your own domain name in the URL and ensures that the connection is encrypted using your own certificate.",
              "When using a third-party SSL/TLS certificate with AWS services, importing it into AWS Certificate Manager (ACM) is a common and recommended approach, but it's not the only way and it doesn't apply uniformly to all AWS services. The requirement or option to use ACM depends on the specific AWS service and how it integrates with SSL/TLS certificates. Here's a general guideline:",
              "AWS Services Integrated with ACM: For services that are tightly integrated with ACM, such as CloudFront, Elastic Load Balancing, API Gateway, and others, you should use ACM to manage and deploy SSL/TLS certificates. ACM provides a seamless and automated experience for managing certificates, including certificate provisioning, validation, renewal, and deployment. It also simplifies the process of associating certificates with your AWS resources, ensuring that your applications are secure and compliant with best practices.",
              "AWS Services Not Integrated with ACM: For services that are not integrated with ACM, such as EC2 instances, you can use a third-party SSL/TLS certificate and manage it manually. In this case, you are responsible for obtaining the certificate from a certificate authority (CA), importing it into your AWS environment, and configuring it for use with your applications. This approach requires more manual effort and is less automated than using ACM, but it provides flexibility and compatibility with services that do not support ACM natively.",
              "Note that third party SSL/TLS certificates can be imported into AWS Certificate Manager (ACM) and used with CloudFront distributions. This is particularly useful when you want to use a custom domain name with CloudFront and secure the connection with your own SSL/TLS certificate. By importing the certificate into ACM, you can manage and deploy it alongside other AWS resources, ensuring that your applications are secure and compliant with best practices.",
              "Another note conserning SSL/TLS w/ RDS: For Amazon RDS (Relational Database Service), custom SSL/TLS certificates from third-party certificate authorities (CAs) are not typically used to encrypt data in transit. Instead, Amazon RDS relies on SSL certificates issued by Amazon to secure connections between applications and database instances. These certificates, automatically managed and rotated by Amazon RDS, ensure a secure, hassle-free experience for data encryption in transit. This streamlined approach minimizes the complexity of managing SSL/TLS certificates, maintaining encrypted and best practice-compliant database connections. For those instances where a custom SSL/TLS certificate is preferred, SSL/TLS termination can be implemented at the application layer, allowing applications to manage encryption processes directly. To utilize an Amazon-issued RDS certificate, such as from an EC2 server, you must download and use the Amazon root certificate. This step is essential for verifying the secure connection to your RDS instance, ensuring that your data remains protected during transmission.",
            ],
          },
        ],
      },
    ],
  },
  // Learning Assignment
  {
    menu: "Learning Assignment",
    description: "C Data Structures: Linked lists, Trees",
    content: [
      {
        subMenu: "Objective",
        items: [
          {
            text: [
              "This module covers creating and manipulating more complex data structures like linked lists and binary trees, which are fundamental for storing and organizing data in non-linear formats.",
            ],
          },
        ],
      },
      {
        subMenu: "Requirement",
        items: [
          {
            text: [
              "Study the implementation of linked lists and binary trees. Practice by coding a linked list and binary tree, and implementing functions for insertion, deletion, and traversal.",
            ],
          },
        ],
      },
      {
        subMenu: "Notes",
        items: [
          {
            text: [
              "I just learned before I started this section that unlike in other languages where single and double quotes are interchangeable, in C, they are not. Single quotes are used for single characters, and double quotes are used for strings.",
            ],
            language: "c",
            code: `
char c = 'a';
char* str = "string";

// This will not work, you will get a warning or error
char* str = 'string';
            `,
          },
          {
            text: [
              "Note that syntax-wise, asterisks (*) always are placed both after the type and before the variable name when declaring a pointer, dereferencing a pointer, using the pointer in an expression, or type-casting a pointer.",
            ],
            language: "c",
            code: `
// Declare a pointer to an integer and assign the address of 'val' to it
int* ptr = &val;

// Dereference the pointer and assign 10 to the value it points to
*ptr = 10;

// Use the pointer in an expression
int newVal = *ptr + 5;

// Type-cast the pointer to a TreeNode pointer and allocate memory for a new TreeNode
TreeNode* newNode = (TreeNode*)malloc(sizeof(TreeNode));

// Function declaration: 
// This function takes an integer argument and returns a pointer to a new TreeNode
TreeNode* createNode(int data);
            `,
          },
          {
            text: [
              "Furthermore, when dealing with structs in C, if you statically allocate a new struct, you can initialize it using the following syntax:",
            ],
            language: "c",
            code: `
struct Node {
  int val;
  struct Node* next;
};

// variables are defined in order of the struct members
struct Node newNode = {1, NULL};
            `,
          },
          {
            text: [
              "If you want to address properties of a statically allocated struct, you can use the dot operator (.)",
            ],
            language: "c",
            code: `
printf("%d", newNode.val);
            `,
          },
          {
            text: [
              "When you dynamically allocate a new struct, you can initialize it using the following syntax:",
            ],
            language: "c",
            code: `
struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
            `,
          },

          {
            text: [
              "note: A dynamic memory allocation function in C such as malloc() returns a pointer to the allocated memory. The pointer is of type void*, so it can be assigned to a pointer of any data type. However, it is good practice to cast the pointer to the appropriate type before using it.",
              "Since dynamic memory allocation functions return a pointer to the allocated memory, you can use the arrow operator (->) to access and assign values to the struct's members. The arrow operator is a shorthand that for dereferencing a pointer to a struct and accessing its members.",
            ],
            language: "c",
            code: `
if (newNode == NULL) {
  return NULL;
}

newNode->val = 1;
newNode->next = NULL;

// alternatively, you can use:
(*newNode).val = 1; // dereference the pointer and access the member
            `,
          },
        ],
      },
      {
        subMenu: "Knowledge Learned",
        items: [
          {
            text: [
              "I already have a good understanding of linked lists and binary trees. So I'm going to skip breaking down those concepts at a high-level and jump straight into the implementation.",
              "TreeNode:",
            ],
            language: "c",
            code: `
#include <stdio.h>
#include <stdlib.h>

// Define the structure for a binary tree node
typedef struct TreeNode {
  int val;
  struct TreeNode* left;
  struct TreeNode* right;
} TreeNode;

// Function to create a new tree node with given value
TreeNode* createNode(int val) {
  // Allocate memory for a new tree node
  TreeNode* newNode = (TreeNode*)malloc(sizeof(TreeNode));
  if (newNode == NULL) {
    printf("Memory allocation failed\\n");
    exit(1);
  }
  // Initialize the new node
  newNode->val = val;
  newNode->left = NULL;
  newNode->right = NULL;
  return newNode;
}

int main() {
  // Creating a sample binary tree
  TreeNode* root = createNode(1);
  root->left = createNode(2);
  root->right = createNode(3);
  root->left->left = createNode(4);
  root->left->right = createNode(5);

  // Remember to free allocated memory to avoid memory leaks
  // Freeing memory of all tree nodes
  free(root->left->left);
  free(root->left->right);
  free(root->left);
  free(root->right);
  free(root);

  return 0;
}
            `,
          },
          {
            text: [
              "For reference, here's how to create that same TreeNode logic in TypeScript:",
            ],
            language: "typescript",
            code: `
interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

const createNode = (val: number): TreeNode => {
  return {
    val,
    left: null,
    right: null,
  };
}

const root: TreeNode = createNode(1);
root.left = createNode(2);
root.right = createNode(3);
root.left.left = createNode(4);
root.left.right = createNode(5);
            `,
          },
          {
            text: ["Singly Linked List:"],
            language: "c",
            code: `
#include <stdio.h>
#include <stdlib.h>

// Define the structure for a linked list node
typedef struct ListNode {
  int val;
  struct ListNode* next;
} ListNode;

// Function to create a new linked list node with a given value
ListNode* createNode(int val) {
  ListNode* newNode = (ListNode*)malloc(sizeof(ListNode));
  if (newNode == NULL) {
    printf("Memory allocation failed\n");
    exit(1);
  }
  newNode->val = val;
  newNode->next = NULL;
  return newNode;
}

int main() {
  // Creating a sample linked list: 1 -> 2 -> 3 -> 4 -> 5
  ListNode* head = createNode(1);
  head->next = createNode(2);
  head->next->next = createNode(3);
  head->next->next->next = createNode(4);
  head->next->next->next->next = createNode(5);

  // Traversing and freeing the linked list
  ListNode* temp;
  while (head != NULL) {
    temp = head;
    head = head->next;
    free(temp);
  }

  return 0;
}            
            `,
          },
          {
            text: [
              "For reference, here's how to create that same ListNode logic in TypeScript:",
            ],
            language: "typescript",
            code: `
interface ListNode {
  val: number;
  next: ListNode | null;
}

const createNode = (val: number): ListNode => {
  return {
    val,
    next: null,
  };
}

// Creating a sample linked list: 1 -> 2 -> 3 -> 4 -> 5
const head: ListNode = createNode(1);
head.next = createNode(2);
head.next.next = createNode(3);
head.next.next.next = createNode(4);
head.next.next.next.next = createNode(5);

// TypeScript/JavaScript relies on garbage collection for memory management,
// so explicit memory deallocation as in C is not required.
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
        subMenu: "Comments",
        items: [
          {
            text: [
              "Just trying to get a little more experience with algorithms in C as opposed to TypeScript which I specialize in.",
            ],
          },
        ],
      },
      {
        subMenu: "704. Binary Search" as "Objective",
        items: [
          {
            text: [
              "Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.",
              "TypeScript solution:",
            ],
            language: "typescript",
            code: `
function search(nums: number[], target: number): number {
  // Initialize left pointer
  let l = 0;
  // Initialize right pointer
  let r = nums.length - 1;
  // Handle edge case where the array has only one element
  if (nums.length === 1) return target === nums[0] ? 0 : -1;
  // Check if the target is at the start of the array
  if (target === nums[l]) return l;
  // Check if the target is at the end of the array
  if (target === nums[r]) return r;
  // Perform binary search
  while (l < r - 1) {
    // Use binary shift for faster floored division by 2
    let c = (l + r) >> 1; // Equivalent to Math.floor((l + r) / 2)
    // If target is found
    if (target === nums[c]) return c;
    // If target is has to be in the left half
    if (target < nums[c]) r = c;
    // If target is has to be in the right half
    else l = c;
  }
  // Target not found
  return -1;
}          
          `,
          },
          {
            text: ["C solution:"],
            language: "c",
            code: `
int search(int* nums, int numsSize, int target) {
  // Initialize left pointer
  int l = 0;
  // Initialize right pointer
  int r = numsSize - 1;
  // Handle edge case where the array has only one element
  if (numsSize == 1) return target == nums[0] ? 0 : -1;
  // Check if the target is at the start of the array
  if (target == nums[l]) return l;
  // Check if the target is at the end of the array
  if (target == nums[r]) return r;
  // Perform binary search
  while (l < r - 1) {
    // Use binary shift for faster floored division by 2
    int c = (l + r) >> 1; // Equivalent to Math.floor((l + r) / 2) in TypeScript
    // If target is found
    if (target == nums[c]) return c;
    // If target has to be in the left half
    if (target < nums[c]) r = c;
    // If target has to be in the right half
    else l = c;
  }
  // Target not found
  return -1;
}
            `,
          },
          {
            text: [
              "^ C has surprisingly similar syntax to TypeScript, making the learning curve less steep than anticipated. The main differences lie in C's static typing and the need for explicit memory management, along with unique elements like pointers and structs. These aspects introduce a level of complexity, particularly around low-level operations and direct memory access, that's distinct from the high-level abstractions TypeScript offers.",
            ],
          },
        ],
      },
      {
        subMenu: "226. Invert Binary Tree" as "Objective",
        items: [
          {
            text: [
              "Given the root of a binary tree, invert the tree, and return its root.",
            ],
            images: ["/day4/1.png"],
          },
          {
            text: [
              "I decided to forego using ChatGPT's help for this one and just solve it entirely myself in only C. I'm happy to say I was able to solve it without any help, and it was a great exercise in understanding pointers and recursion in C.",
              "C solution:",
            ],
            language: "c",
            code: `
#include <stdio.h>

struct TreeNode {
  int val;
  struct TreeNode *left;
  struct TreeNode *right;
};

struct TreeNode *invertTree(struct TreeNode *root) {
  // Null can also be returned because NULL is technically a pointer
  if (root == NULL)
  {
    return NULL;
  }
  // Invert the left and right subtrees from the bottom up in post-order via recursion
  struct TreeNode *left = invertTree(root->left);
  struct TreeNode *right = invertTree(root->right);
  root->left = right;
  root->right = left;
  // Return the root of the inverted tree back to the caller
  return root;
}
            `,
          },
          {
            text: [
              "~ Post-order traversal is used to invert the tree. The left and right subtrees are inverted first, and then the root is inverted",
              "Here is an example of post-order traversal:",
            ],
            images: ["/day4/2.png"],
          },
        ],
      },
    ],
  },
  // Portfolio Work
  {
    menu: "Portfolio Work",
    description: "SocketChat ~ Finished",
    content: [
      {
        subMenu: "Comments",
        items: [
          {
            text: [
              "I went through the entire project and implemented every remaining feature. It was a lot of small things which would have been a pain to document. Anyway, I plan to put together a video to showcase the whole thing when I find some time soon.",
              "~",
              "Heres the github link to the project:",
              "https://github.com/drmatt13/SocketChat",
            ],
            images: ["/day4/6.png", "/day4/7.png"],
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
