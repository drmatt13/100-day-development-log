import DayLayout from "../DayLayout";
import Data from "../../types/data";

const data: Data = [
  // LeetCode
  {
    title: "LeetCode",
    // description: "Problem NAME",
    content: [
      {
        contentTitle: "Comments",
        text: [
          "I'll be starting off with some easy leetcode problems for today to get back into the swing of things.",
          "Also, I don't know if I'll be doing LeetCode every day but I'll try to do it on days I'm able.",
        ],
      },
      {
        contentTitle: "217. Contains Duplicate" as "Objective",
        code: [
          {
            language: "typescript",
            description: [
              "Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.",
              "Very easy problem, just use a map to store the numbers and return true if the number already exists in the map, otherwise add it to the map and return false at the end.",
            ],
            text: `
function containsDuplicate(nums: number[]): boolean {
  const map = new Map<number, boolean>();
  for (let num of nums) {
    if (map.has(num)) return true;
    map.set(num, true);
  }
  return false;
}
            `,
          },
        ],
      },
      {
        contentTitle: "242. Valid Anagram" as "Objective",
        code: [
          {
            language: "typescript",
            description: [
              "Given two strings s and t, return true if t is an anagram of s, and false otherwise.",
              "An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.",
              "Another easy problem, just use a map to store the characters and their counts, then iterate through the second string and decrement the count of each character in the map. If the count is 0 or the character doesn't exist in the map, return false. If the string lengths are different, return false. Otherwise, return true.",
            ],
            text: `
function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  const map = new Map<string, number>();
  for (let c of s) {
    map.get(c) ? map.set(c, map.get(c)! + 1) : map.set(c, 1);
  }
  for (let c of t) {
    if (!map.get(c)) return false
    map.set(c, map.get(c)! -1)
  }
  return true;
}
`,
          },
        ],
      },
      {
        contentTitle: "1. Two Sum" as "Objective",
        code: [
          {
            language: "typescript",
            description: [
              "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You can return the answer in any order.",
              "Ah, The famous two sum problem. Use a map to store the numbers and their indices, then iterate through the array and check if the map has the difference between the target and the current number. If it does, return the indices of the two numbers. If it doesn't, add the number to the map and continue.",
            ],
            text: `
function twoSum(nums: number[], target: number): number[] | void {
  const map = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) return [map.get(target - nums[i])!, i];
    map.set(nums[i], i);
  }
  return;
}
`,
          },
        ],
      },
      {
        contentTitle: "49. Group Anagrams" as "Objective",
        code: [
          {
            language: "typescript",
            description: [
              "Given an array of strings strs, group the anagrams together. You can return the answer in any order.",
              "An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.",
              "I solved the problem of grouping anagrams by first creating a map to track groups of anagrams and an array to hold the groups. For each string, I generated a key by counting the occurrences of each letter (using a fixed-size array for the alphabet) and then concatenated these counts into a string. If this key already existed in the map, I added the string to the existing group; otherwise, I created a new group and added it to both the map and the array of groups.",
            ],
            text: `
function groupAnagrams(strs: string[]): string[][] {
  const map = new Map<string, number>();
  const groupedAnagrams: string[][] = [];
  let index = 0;
  for (let str of strs) {
    let arr = Array.from({ length: 26 }, (i, k) => 0);
    for (let char of str) {
      arr[char.charCodeAt(0) - 97]++;
    }
    let key = arr.join("-");
    if (map.has(key)) groupedAnagrams[map.get(key)!].push(str);
    else {
      map.set(key, index++);
      groupedAnagrams.push([str]);
    }
  }
  return groupedAnagrams;
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
        contentTitle: "Unknown Billing Issue: Resolved" as "Comments",
        text: [
          `One of my free teir practice accounts charged me $3.60 for the month of February. I'm going to look the billing section to see what's up. Big reminder to enable billing alerts on ALL accounts.`,
          `Additionally, I should get in the habbit of using AWS Config to enforce tagging standards even on dummy test accounts to ensure that all resources are tagged when created.`,
          `Turns out it was an RDS snapshot that was created and not deleted. I'll have to remember to delete those in the future, I deleted the snapshot.`,
          `This RDS snapshot was accidentally created when I was experimenting with using SSL/TLS to encrypt a connection to a DB instance. When you manually create an RDS instance using the GUI, there is a hidden checkbox "checked" for enabling automated backups, and if you don't uncheck it, it will create a snapshot every day and charge you for it.`,
        ],
        images: ["/day1/4.png"],
      },
      {
        contentTitle: "Account no longer needed" as "Objective",
        text: [
          "I'm going to delete the account that was charged the $3.60 because I actually have been using a different set of AWS accounts for practice.",
          "This account is the management account for an unused organization so I'm just going to delete this organization and child account as well.",
        ],
        images: ["/day1/5.png"],
      },
      {
        contentTitle: "Studied: Storage Gateway" as "Objective",

        text: [
          "AWS Storage Gateway is deployed on-premises either as a virtual machine (VM) or as a physical hardware appliance provided by AWS.",
          "To set up a VM instance of the Storage Gateway, you download a VM image from AWS. For a physical setup, you order and install a hardware appliance from AWS in your data center.",
          "The setup process includes connecting the Storage Gateway to your AWS account through an activation process that links the on-premises appliance with your cloud resources.",
          "You must provide AWS credentials and configure IAM roles and policies to authorize the Storage Gateway to access AWS resources such as S3, EBS, and AWS Backup on your behalf.",
          "Once activated, the Storage Gateway serves as a bridge, offering file, volume, or tape storage interfaces to your on-premises applications depending on the gateway type selected.",
          "The File Gateway enables file-based storage, seamlessly integrating your on-premises environment with Amazon S3 by presenting NFS or SMB file shares that store data as objects in S3 buckets.",
          "File Gateway employs local caching for frequently read data to reduce retrieval times and bandwidth usage when accessing objects from Amazon S3.",
          "The Volume Gateway provides block storage through iSCSI, supporting stored volumes for on-premises storage with asynchronous backup to S3, and cached volumes for using S3 as primary storage with a subset of the data cached on-premises.",
          "Stored Volumes keep your entire dataset on-premises and back up data to S3, while Cached Volumes store data primarily in S3 with frequently accessed data cached on-premises.",
          "The Tape Gateway offers a virtual tape infrastructure using iSCSI, enabling you to replace physical tapes with virtual tapes that are stored in Amazon S3 and can be archived to S3 Glacier for cost-effective long-term storage.",
          "Each gateway type is designed to integrate with AWS cloud storage services and AWS Backup for data archiving, backup, and disaster recovery purposes.",
        ],
        images: ["/day1/6.png"],
      },
    ],
  },
  // Learning Assignment
  {
    title: "Learning Assignment",
    description: "C Basics: Syntax, control structures",
    content: [
      {
        contentTitle: "Objective",
        text: [
          "The C Basics section introduces you to the core syntax of C, including how to declare variables, utilize basic data types, and implement control structures such as if, else, for, while, and switch.",
        ],
      },
      {
        contentTitle: "Requirement",
        text: [
          "Research and practice variable declarations, data types, and control structures in C. Create simple programs that use these elements to solve problems, such as calculating the factorial of a number using loops.",
        ],
      },
      {
        contentTitle: "Knowledge learned",
        code: [
          {
            description: [
              "The GNU Compiler Collection (GCC) is a compiler system produced by the GNU Project supporting various programming languages. GCC is a key component of the GNU toolchain and the standard compiler for most projects related to GNU and Linux, including the Linux kernel.",
              "GCC is portable and run on many operating systems, including Linux, most other Unix-like systems, and Windows. It produces machine code for many architectures. GCC by default compiles to machine code for on the architecture of the machine it is running on.",
              "How to invoke GCC:",
            ],
            language: "powershell",
            text: `gcc <input filename> -o <output filename> // windows auto appends .exe to the output file`,
          },
          {
            description: ["data types and variables"],
            language: "c",
            text: `
int // Integer
float // Floating point number
double // Double precision floating point number
char // Single character
void // No value <return type of a function only>

// C has no native string type and instead uses arrays of characters
// C also has no native boolean type and instead uses integers unless a library is used <stdbool.h>
// Integers are used as boolean values, 0 is false, and any other value is true
// Intergers are signed by default, meaning they can be positive or negative while unsigned integers can only be positive. 

// Example of declaring variables
int a;
float b;
char c;

// Example of initializing variables
int a = 5;
float b = 5.5;
char c = 'a';

// Example of declaring and initializing variables
int a = 5, b = 10, c = 15;
float d = 5.5, e = 10.5, f = 15.5;
char g = 'a', h = 'b', i = 'c';

// The long and short modifiers adjust data type sizes: "short int" is 2 bytes, "int" is 4 bytes, "long int" is 8 bytes, and "long long int" is 16 bytes; "float" is 4 bytes, "double" is 8 bytes, and "long double" is 12 bytes.
long long int a;
short int b;
long double c;
long d; // long int
short e; // short int

// Arrays are a collection of variables of the same type
long arr[10]; // creates an array of 10 long integers
char arr[10]; // creates an array of 10 characters

// Interestingly in c when declaring and initializing an array, the size of the array is not required and the syntax is curly braces rather than square brackets as in other languages, although you can use a string to initialize an array of characters.
int arr[] = {1, 2, 3, 4, 5}; // creates an array of 5 integers
char arr[] = {'a', 'b', 'c', 'd', 'e'}; // creates an array of 5 characters
char arr[] = "hello"; // creates an array of 5 characters

// Array sizes in c are fixed and cannot be changed after declaration and additionallly, c does not check for array bounds, meaning that if you try to access an index that does not exist, the program will still run but will likely crash or produce unexpected results.

// There are no convenience methods like push or pop, and you'll often find yourself working directly with memory addresses when dealing with arrays in C.`,
          },
          {
            description: [
              "struct and typedef keywords",
              "The struct keyword defines a composite data type that allows grouping variables of different types. To simplify type declarations, typedef can create an alias for a struct. Using the alias eliminates the need to use the struct keyword each time when declaring new variables of that type.",
            ],
            language: "c",
            text: `
// Example 1: Create a type using only struct
struct Person {
  char name[50];
  int age;
  float salary;
};

// Declare a variable of this struct type using the "struct" keyword
struct Person person1;
            `,
          },
          {
            language: "c",
            text: `
// Example 2: Create a separate typedef for an existing struct
struct Person {
  char name[50];
  int age;
  float salary;
};

// After defining the struct, create a typedef alias for it
typedef struct Person Person;

// Now, declare a variable of this type without needing the "struct" keyword
Person person2;
`,
          },
          {
            language: "c",
            text: `
// Example 3: Define a struct and create an alias in one step
typedef struct {
  char name[50];
  int age;
  float salary;
} Person;

// Declare a variable of this type directly using the alias
Person person3;
            `,
          },
          {
            description: [
              "#include is a preprocessor directive that tells the compiler to include the contents of the specified file into the current source file.",
              "The contents of the file are included as if they were written in the source file at the point of the #include directive.",
            ],
            language: "c",
            text: `
#include <stdio.h> // includes the standard input/output library
            `,
          },
          {
            description: [
              "When you use the #include directive, the contents of a header file are literally copied into the source code file by the preprocessor before the actual compilation begins.",
              "header files contain:",
              "- Function Declarations (Prototypes): It tells the compiler what functions are available, their return types, and the parameters they take.",
              "- Type Definitions: It can define new data types like structures, unions, enums, and typedefs that are to be used across multiple source files.",
              'stdio.h header file is part of the C Standard Library and stands for "Standard Input and Output". It provides functionality for input and output operations',
              "- printf: output text to the console",
              "- scanf: read input from the console",
              "- fprintf: output text to a file",
              "- fscanf: read input from a file",
              "- sprintf: write formatted text to a string",
              "Format specifiers are used in C programming with functions like printf and scanf to define how a variable's content should be interpreted or displayed. Each specifier corresponds to a certain type of data, and using the correct format specifier is crucial for the correct operation of these functions.",
              "- %d: int",
              "- %f: float",
              "- %lf: double",
              "- %e: scientific notation",
              "- %c: char",
              "- %s: string",
              "- %p: pointer",
              "- %u: unsigned int",
              "- %x: hexadecimal (unsigned int)",
              'The & operator in C is the "address-of" operator, which is used to obtain the memory address of a variable. This is crucial for functions like scanf that need to modify the variables passed to them by the caller. Since C does not support passing variables by reference directly (all function arguments are passed by value), using the & operator allows you to pass a pointer to the variable instead, effectively giving the function access to modify the original variable.',
            ],
            language: "c",
            text: `
#include <stdio.h> // includes the standard input/output library

char myString[] = "Hello, world!";
printf("%s\\n", myString); // prints "Hello, World!" to the console
scanf("%d", &a); // reads an integer from the console and stores it in the variable "a"
fprintf(file, "Hello, World!"); // prints "Hello, World!" to the file
fscanf(file, "%d", &a); // reads an integer from the file and stores it in the variable "a"
sprintf(buffer, "Hello, World!"); // writes "Hello, World!" to the buffer or array

// Memory management (malloc, calloc, free)
// String manipulation (strcpy, strcat, strlen, strcmp)
// Mathematical computations (sqrt, pow, sin, cos)
// Character handling (isalpha, isdigit, tolower, toupper)
// Searching and sorting (qsort, bsearch)
            `,
          },
          {
            description: [
              "if, else, while, for, switch are exact same format as javascript",
              "Both ++i (pre-increment) and i++ (post-increment) are valid in C, just like in JavaScript",
              "Functions dont use a function keyword but instead start with return type then name such as:",
              "ReturnType name(parameters) {}",
              "The main function in C is whats invoked the code is compiled and ran",
            ],
            language: "c",
            text: `
#include <stdio.h>

int main() {
  // code
  return 0;
}
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
        text: [
          "Worked on rapidly getting this* website in a functional state so that I can start adding daily content.",
          "This website is a work in progress. I plan to keep it more or less barebones and just add features as I need them.",
          "I've Decided that each menu item will be lazy loaded to improve performance and reduce initial load time. Check the network tab in the dev tools as you open and close top level menu items if you're interested in seeing the lazy loading in action.",
          `Furthermore, I reverse engineered the way Facebook expands it's comment section "notably, the flowing border lines which traverse downward to expanded content" by eye and implemented it here by using react useState with tailwindCSS.`,
          "I generated some dummy data to test the layout and functionality of the website and I'm happy with the results.",
        ],
        images: ["/day1/1.png", "/day1/2.png", "/day1/3.png"],
      },
      {
        contentTitle: "Code",
        code: [
          {
            description: [
              "Standardized a type for the way the menu data is structured. // will adjust as needed",
            ],
            language: "typescript",
            text: `
type Data = Array<{
  title:
    | "Learning Assignment"
    | "LeetCode"
    | "AWS Study"
    | "AWS Practice"
    | "Linux"
    | "Kubernetes"
    | "Portfolio Work"
    | "Arbitrary Practice"
    | "Arbitrary Study";
  description?: string;
  content: Array<{
    contentTitle:
      | "Comments"
      | "Objective"
      | "Requirement"
      | "Notes"
      | "Knowledge learned"
      | "Code"
      | "Images";
    text?: string[];
    code?: {
      description?: string[];
      language:
        | "javascript"
        | "typescript"
        | "python"
        | "c"
        | "c++"
        | "java"
        | "rust"
        | "go"
        | "bash"
        | "powershell"
        | "plaintext"
        | "json"
        | "yaml"
        | "html"
        | "css"
        | "graphql"
        | "sql"
        | "dockerfile";
      text: string;
    }[];
    images?: string[];
  }>;
}>;

export default Data;
            `,
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
