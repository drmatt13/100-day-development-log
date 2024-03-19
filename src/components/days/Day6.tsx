import DayLayout from "../DayLayout";
import Data from "../../types/data";

const data: Data = [
  // AWS Practice
  {
    menu: "AWS Practice",
    // description: "",
    content: [
      {
        subMenu: "Concepts Review",
        items: [
          {
            text: [
              "Today I ran through several AWS Solutions Architect Professional practice exam questions while behind the scenes, using ChatGPT to expand upon the concepts and break them down thoroughly. (Not all questions reviewed today are shown)",
              "",
            ],
            images: ["/day6/1.png"],
          },
          {
            text: [
              "^ In the initial question I reviewed today, I encountered a challenge related to SSL certificates for CloudFront, building upon my previous AWS session. The scenario required identifying the optimal method to secure a connection using HTTPS from the client to the ALB through CloudFront. The correct approach involves generating SSL certificates using AWS Certificate Manager for both the ALB and CloudFront. This is necessary because ALBs lack a default SSL/TLS certificate for their AWS-assigned domain names (e.g., my-alb-123456789.region.elb.amazonaws.com), and CloudFront's default SSL certificate only applies to its default domain. Therefore, custom SSL certificates must be generated and applied in both instances. However, attaching an SSL certificate to the ALB might not always be required, as this action secures traffic within AWS infrastructure, from one AWS service to another. Typically, this requirement stems from compliance needs.",
              "",
            ],
            images: ["/day6/2.png"],
          },
          {
            images: ["/day6/3.png"],
          },
          {
            text: [
              "^ Another inquiry focused on ensuring tag compliance across an AWS organization, mandating that tags are applied at the creation of any resource within all accounts. The discussion suggested AWS Config and SSM as potential solutions. However, both AWS Config and SSM are designed to assess compliance and automate remediation for resources failing compliance checks post-creation, rather than preventing the creation of untagged resources from the outset. The accurate solutions involved utilizing CloudFormation Resource Tags and setting up AWS Service Catalog to automatically apply tags to resources with unique identifiers for portfolio, product, and users. Yet, the AWS Service Catalog may not be ideally suited for cloud architects and engineers due to its restrictive nature of resource creation flexibility. Although using CloudFormation Resource Tags implies assigning tags within your templates, it doesn't inherently enforce their inclusion. Reflecting on this, the question appears somewhat misleading due to the lack of mention of Service Control Policies (SCPs) for AWS Organizations, which could enforce tag compliance across the organization and prevent the creation of resources without the requisite tags.",
              "",
            ],
            images: ["/day6/4.png"],
          },
          {
            text: [
              "^ This question was a dead giveaway just based on the MySQL aspect, none of the incorrect answers for handling the MySQL portion made sense. But it did bring up a service called AppStream 2.0 which I never heard of and as part of my studying required me to research it a little bit. AppStream 2.0 is a service that allows you to stream any desktop application from AWS to any device. The service involves installing your applications on a virtual machine in AWS, creating an image of this setup, and then using this image to launch streaming instances that deliver the application UI to users via a web browser.",
            ],
          },
        ],
      },
    ],
  },
  // Arbitrary Study
  {
    menu: "Arbitrary Study",
    description: "Additional Learning with C",
    content: [
      {
        subMenu: "Comments",
        items: [
          {
            text: [
              "Over the weekend, I tried my best to thoroughly review and understand the concepts of C that I covered last week to solidify my understanding of the language because soon I will be moving away from C to focus on other skills and languages. And before I wrap up with my deep dive into C, I figured I'd take some extra time today to learn some additional concepts and features of C.",
            ],
          },
        ],
      },
      {
        subMenu: "Concepts Explored",
        items: [
          {
            text: [
              "The first concept today I explored was about how virtual memory works in C. I was confused about how pointers or arrays could know how to access the next address in memory by incrementing the pointer or array index because, from my understanding, memory under the hood can be striped across multiple locations and isn't necessarily linear when allocated.",
              "It turns out that virtual memory mapping is a process that abstracts and maps RAM addresses for processes running on the OS. When a program requests memory, the OS might physically scatter it, yet to the program, it appears as a linear block of addresses in a straight line. Behind the scenes, the host OS may reorder and shift physical memory around, but the virtual memory mapping within running programs updates accordingly. As a result, memory addresses for running programs will remain seemingly unchanged and positioned directly alongside each other in the context of execution.",
              "",
              "",
              "Using this information, I really wanted to perform a thorough review of what I practiced last week and studied over the weekend. This is just some practice code to demonstrate the type of practice I did.",
            ],
            language: "c",
            code: `
#include <stdio.h>  // For printf
#include <stdlib.h> // For malloc, free
#include <string.h> // For strcpy, strlen

struct Node {
  int data;
  char *name;   // This is a pointer to a string
  struct Node *next;
};

int main() {
  // Declaring and initializing a new node
  struct Node newNode1 = {5, "Name", NULL};
  // "Name" is a string literal stored in read-only memory, and 'name' points to it.

  // Dynamically allocating memory for the struct and its members at runtime using malloc
  struct Node *newNode2 = (struct Node *)malloc(sizeof(struct Node));
  if (newNode2 == NULL) {
    printf("Failed to allocate memory for newNode2\n");
    return 1; // Indicate failure
  }

  // Allocating memory for the string and copying it
  newNode2->name = (char *)malloc(strlen("ABCDEFGHIJKL") + 1); // +1 for null terminator
  if (newNode2->name == NULL) {
    printf("Failed to allocate memory for newNode2->name\\n");
    free(newNode2); // Cleanup
    return 1; // Indicate failure
  }
  strcpy(newNode2->name, "ABCDEFGHIJKL"); // Copying the string
  
  // Remember to free dynamically allocated memory when done
  free(newNode2->name);
  free(newNode2);
}          
            `,
          },
          {
            language: "c",
            code: `
#include <pthread.h>

// Shared variable and mutex
int sharedVar = 0;
pthread_mutex_t lock;

// Function to update the shared variable, returns NULL and takes a void pointer
void* updateSharedVar(void* arg) {
  pthread_mutex_lock(&lock);
  sharedVar++;
  printf("Shared variable updated to %d by thread %ld\\n", sharedVar, (long)arg);
  pthread_mutex_unlock(&lock);
  return NULL;
}

int main() {
  // Initialize the mutex
  pthread_mutex_init(&lock, NULL);
  
  pthread_t t1, t2;
  // Create threads
  pthread_create(&t1, NULL, updateSharedVar, (void*)1);
  pthread_create(&t2, NULL, updateSharedVar, (void*)2);
  
  // Wait for threads to finish
  pthread_join(t1, NULL);
  pthread_join(t2, NULL);
  
  // Destroy the mutex
  pthread_mutex_destroy(&lock);

  return 0;
}            
            `,
          },
        ],
      },
    ],
  },
  // Learning Assignment
  {
    menu: "Learning Assignment",
    description:
      "C Modular Programming: Header files, Compilation units, build process",
    content: [
      {
        subMenu: "Objective",
        items: [
          {
            text: [
              "Understanding how to organize code across multiple files for modularity and how the build process compiles and links these files into a single executable is vital.",
            ],
          },
        ],
      },
      {
        subMenu: "Requirement",
        items: [
          {
            text: [
              "Dive into the modular programming approach by splitting a simple project into multiple files. Use header files to declare functions and compile and link these files manually using a compiler (e.g., GCC).",
            ],
          },
        ],
      },
      {
        subMenu: "Notes",
        items: [
          {
            text: [
              "So far with C, I have not learned about modular programming which is how to organize code across mulitple files or the linking process. In TypeScript, I have experience with modular programming and the build process, but I have not yet learned about it in C. With that said, I am excited to learn about modular programming in C and how the build process works.",
            ],
          },
        ],
      },
      {
        subMenu: "Knowledge Learned",
        items: [
          {
            text: [
              "Function declarations in C are a fundamental concept for modular programming in C. A function declaration is a prototype that tells the compiler about the function's name, return type, and parameters. It is used to inform the compiler about the function's existence and its signature before its actual definition. This is done by using a function prototype, which is also known as a function declaration.",
              "Here is the difference between a function declaration and a function definition in C:",
            ],
            language: "c",
            code: `
// Function declaration
int add(int a, int b);

// Function definition
int add(int a, int b) {
  return a + b;
}
`,
          },
          {
            text: [
              "There are 2 files we use in C to organize code across multiple files: header files and source files.",
              "Header files are used to declare functions and variables. They are included in source files to inform the compiler about the functions and variables that are defined in other source files. Header files have a .h extension and contain function prototypes, type definitions, and macro definitions.",
              "Source files contain the actual function definitions and variable declarations. They have a .c extension and are compiled into object files.",
              "",
              "",
              "The main program file is itself a source file which contains the main function. It uses the #include preprocessor directive to include header files. The header files contain the function declarations and variable definitions.",
              "Here is an example:",
              "",
              "",
              "test.h",
            ],
            language: "c",
            code: `
#include <stdio.h> // For printf
#include <stdlib.h> // For malloc and free

// Define a composite data type
struct Node {
  double data;
  struct Node *next;
};

// Define a constant as a literal value
#define PI 3.14159

// Function declaration
struct Node* createNode(double data);
`,
          },
          {
            text: ["", "", "test.c ~ Source file for test.h"],
            language: "c",
            code: `
#include "test.h" // Include the header file

// Function definition
struct Node* createNode(double data) {
  struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
  if (newNode == NULL) {
    printf("Failed to allocate memory for newNode\n");
    return NULL; // Indicate failure
  }
  newNode->data = data;
  newNode->next = NULL;
  return newNode;
}
            `,
          },
          {
            text: ["", "", "main.c ~ Main program file"],
            language: "c",
            code: `
#include <stdio.h> // Standard input/output header file
#include "test.h" // Include the header file

int main() {
  // Use PI from test.h
  struct Node* newNode = createNode(PI);
  if (newNode != NULL) { // Check if newNode creation was successful
    printf("New node created with data %f\n", newNode->data);
    free(newNode); // Free allocated memory
  }
  return 0;
}
            `,
          },
          {
            text: [
              "",
              "",
              `Following the example above there is the concept of "guarding" header files to prevent multiple inclusions. This is done by using #ifndef, #define, and #endif preprocessor directives. Here is an example of a guarded header file:`,
            ],
            language: "c",
            code: `
#ifndef TEST_H // If TEST_H is not defined
#define TEST_H // Define TEST_H

// Header file content

#endif // End of the file
            `,
          },
          {
            text: [
              "^ What a guarded header file does is it checks if a macro is defined. If it is not defined, it defines the macro and includes the header file content. If it is defined, it skips the header file content. This is a way to prevent multiple inclusions of the same header file.",
              "",
              // "",
              "The build process for modular programming in C involves compiling and linking multiple source files into a single executable.",
              `Before the compiler fully builds the program, it first compiles each source file into an object file. Then, the "linker" links the object files together into a single executable.`,
              "The IDE or build system typically automates these steps, which is why direct interaction with object files isn't common in day-to-day operations for high-level programming.",
              `Linking is the process of combining one or more object files into a single executable file, shared library, or static library. The linker resolves references between object files, such as function calls or global variables used across different source files. There are two main types of linking:`,
              " - Static linking: The linker copies all the library functions and data into the executable file. The executable file becomes larger because it contains all the library functions and data.",
              " - Dynamic linking: The linker creates a reference to a function or data in a shared library. The executable file becomes smaller because it only contains references to the shared library functions and data.",
              "",
              "An example of dynamic linking is through the use of DLLs (Dynamic Link Libraries) in Windows. DLLs are shared libraries that contain functions and data that can be used by multiple programs. When a program uses a DLL, it does not include the DLL's code in its executable file. Instead, it creates a reference to the DLL's functions and data.",
              "Alternatively, you can create shared libraries for Linux and MacOs by using either the .so or .dylib file extension, respectively.",
            ],
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
