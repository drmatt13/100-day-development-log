import DayLayout from "../DayLayout";
import Data from "../../types/data";

const data: Data = [
  // AWS Practice
  {
    menu: "AWS Practice",
    description: "FIX",
    content: [
      {
        subMenu: "Practice",
        items: [],
      },
    ],
  },
  // Learning Assignment
  {
    menu: "Learning Assignment",
    description: "C++ Introduction: Syntax, basic OOP concepts",
    content: [
      {
        subMenu: "Objective",
        items: [
          {
            text: [
              "This section lays the foundation of C++ programming, including syntax nuances different from C, and introduces Object-Oriented Programming (OOP) concepts such as classes, objects, inheritance, and encapsulation.",
            ],
          },
        ],
      },
      {
        subMenu: "Requirement",
        items: [
          {
            text: [
              "Research the basics of C++ syntax and OOP principles. Practice by creating simple classes for real-world objects, implementing basic class inheritance, and utilizing encapsulation to protect data.",
            ],
          },
        ],
      },
      {
        subMenu: "Comments",
        items: [
          {
            text: [
              "I ended up dedicating three days to this topic, partly because of inconsistent availability and partly because I wanted to ensure a solid understanding of C++ basics before moving on to more complex subjects. Although I'm already familiar with classes, inheritance, encapsulation, and objects, I haven't applied these concepts in C++ before. Hence, my current focus is on grasping the syntax nuances of C++ and how to implement these foundational OOP concepts within it. This effort is aimed at not just making a smooth transition to advanced topics but also deepening my foundational knowledge for a more comprehensive exploration of C++.",
            ],
          },
        ],
      },
      {
        subMenu: "Knowledge Learned",
        items: [
          {
            text: [
              "The first thing I did was compare and break down all the differences for a “Hello, World!” example between C and C++ that way I could get some immediate information about the syntax differences.",
            ],
          },
          {
            language: "c",
            code: `
#include <stdio.h>
int main() {
    printf("Hello, World!\\n");
    return 0;
}            
            `,
          },
          {
            language: "c++",
            code: `
#include <iostream>
using namespace std;

int main() {
  cout << "Hello, World!" << endl;
  return 0;
}            
            `,
          },
          {
            text: [
              "^ Jumping from C to C++, the shift from <stdio.h> to <iostream> caught my eye, marking the transition from traditional C's printf and scanf to C++'s cout and cin. This change seemed straightforward until I encountered the notions of namespaces (signified by std::) and the stream insertion (<<) and extraction (>>) operators. These elements quickly introduced a complexity that piqued my curiosity and promptly made it evident that there were a few critical concepts to dissect here in this early example.",
              "So I took it upon myself before moving forward at all to perform a dive deep with ChatGPT to answer every question I had about every question I asked surrounding everything I initially inferred above.",
              `Just like in C, C++ uses the #include preprocessor directive for incorporating header files into the source code. Here, angle brackets (<>) are used for standard library headers, indicating to the compiler to search in system directories, while double quotes ("") suggest local or user-defined headers, prompting a search in the project's directory first. These header files, with extensions .h or .hpp, serve a fundamental role by declaring function prototypes and type definitions. This setup facilitates the sharing of function and class definitions across different parts of a program without duplicating code.`,
              "However, C++ introduces an additional layer of organization through namespaces. Unlike in C, where header and source files often share names to link declarations with their implementations, C++ allows for more flexibility. Namespaces enable developers to group related functions, classes, and variables under a named scope, reducing the chances of name conflicts and enhancing code readability:",
            ],
            language: "c++",
            code: `
namespace myNamespace {
  int myFunction() {
      return 5;
  }

  class MyClass {
  public:
      void memberFunction() {
          // Detailed implementation
      }
  };
}          
            `,
          },
          {
            text: [
              "This structure doesn't eliminate the need for separate source files (.cpp) that provide the implementations for declarations in header files. Instead, it offers a sophisticated mechanism for categorizing and accessing code components, irrespective of the source file names or their locations within the project's structure.",
              "When it comes time to compile the project with g++, all source files must be explicitly mentioned in the command, alongside their paths if they're not in the same directory as the main file. This might look something like:",
            ],
            language: "bash",
            code: `
g++ main.cpp utils/file1.cpp more_utils/file2.cpp -o myProgram
          `,
          },
          {
            text: [
              "The compiler processes each source file into an object file (.o or .obj), after which the linker steps in to bind these object files into a single executable. This compilation and linking process ensures that all parts of the namespace, spread across various files, are combined seamlessly, making the functions and classes defined within them available throughout your program.",
              `Furthermore, if we opt out of including "using namespace" for a particular namespace, we can still access its members by prefixing them with the namespace name and the scope resolution operator (::). This approach is particularly useful when dealing with multiple namespaces or when we want to avoid potential naming conflicts.`,
            ],
            language: "c++",
            code: `
#include <iostream>
// using namespace std; // Avoiding "using namespace" for std

int main() {
  // Accessing the "std" namespace members
  std::cout << "Hello, World!" << std::endl;
  return 0;
}   
            `,
          },
          {
            text: [
              "",
              "",
              "After this, I spent a good deal of time familiarizing myself with classes in C++. Coming from being heavily focused on TypeScript development there were certainly a lot of differences in the syntax and even new concepts unique to C++ such as “Friends of a Class” where specific external functions or classes access the private and protected members of another class (“I’ve never heard of this and found it really intriguing”). Furthermore, In TypeScript there exists something called Automatic Property Initialization which doesn't exist in JS and that allows for properties to be automatically initialized from constructor parameters outside of the constructor body, It’s cool that C++ has a very similar concept “Member Initializer List”. There are a lot of syntactic differences in the way C++ Classes are structured over TypeScript which I’m fully comfortable with but for the sake of me actually learning the Classes in C++, I deemed it better to extensively read and practice rather than try to explain it here for the sake of time constraints.",
              "Here are all  the concepts I explored and extensively researched in C++:",
              "",
              "- Namespaces,",
              "- Object-Oriented Programming (OOP),",
              "- Classes and Objects,",
              "- Double Pointers,",
              "- Access Modifiers,",
              "- Constructor and Destructors,",
              "- Inheritance,",
              "- Polymorphism,",
              "- Friend Functions,",
              "- Function + Operator Overloading,",
              "- Templates,",
              "- C++ Standard Template Library (STL),",
              "- Exception Handling,,",
              "- New and Delete,",
              "- lambda expressions,",
              "- smart pointers",
              "",
              "^ Furthermore, all these concepts which I studied thoroughly at a high level, bleed into the upcoming assignments. So I will certainly have more time to break them down and explain them in more detail.",
            ],
          },
        ],
      },
    ],
  },
  // LeetCode
  {
    menu: "LeetCode",
    description: "Practice with C++",
    content: [
      {
        subMenu: "Comments",
        items: [
          {
            text: [
              "This is my first time using C++ for LeetCode problems. But since I spent a good amount of time over 3 days learning the basics of C++, I feel the best way to solidify my understanding is to practice with it. I will be solving a few problems using C++.",
            ],
          },
        ],
      },
      {
        subMenu: "121. Best Time to Buy and Sell Stock" as "Objective",
        items: [
          {
            text: [
              "You are given an array prices where prices[i] is the price of a given stock on the ith day.",
              "You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.",
              "Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.",
              "",
              "",
              "Solution:",
            ],
            language: "c++",
            code: `
#include <iostream>
#include <vector>

class Solution {
public:
  int maxProfit(std::vector<int>& prices) {
    // if there are no prices, return 0
    if (prices.size() == 0) return 0;
    
    // the lowest price found so far
    int lowest = prices[0];
    // the highest price found so far from the lowest
    int highestFromLowest = 0;
    // the max profit found so far
    int maxProfit = 0;

    for (int i = 1; i < prices.size(); i++) {
      // if a new lowest is found, set it and reset highestFromLowest then continue
      if (prices[i] < lowest) {
        lowest = prices[i];
        highestFromLowest = 0;
        continue;
      } 
      // if a new highest is found, set it and calculate the profit
      else {
        highestFromLowest = std::max(highestFromLowest, prices[i]);
        maxProfit = std::max(maxProfit, highestFromLowest - lowest);
      }
    }

    // return the max profit
    return maxProfit;
  }
};
            `,
          },
        ],
      },
      {
        subMenu:
          "3. Longest Substring Without Repeating Characters" as "Objective",
        items: [
          {
            text: [
              "Given a string s, find the length of the longest substring without repeating characters.",
            ],
            language: "c++",
            code: `
class Solution {
public:
  int lengthOfLongestSubstring(std::string s) {
    // Create a map to store if a character has been seen
    std::unordered_map<char, int> map;

    // keep track of the longest substring
    int longest = 0;

    // keep track of the left and right pointers
    int l = 0;
    int r = 0;

    // while the right pointer is less than the length of the string
    while (r < s.length()) {
      // if the character has been seen
      if (map.find(s[r]) != map.end()) {
        // move the left pointer to the right of the last seen character
        l = std::max(map[s[r]] + 1, l);
      }
      // update the longest substring
      longest = std::max(longest, r - l + 1);
      // update the last seen character
      map[s[r]] = r;
      // move the right pointer
      r++;
    }

  // return the longest substring
  return longest;
  }
};
            `,
          },
        ],
      },
      {
        subMenu: "143. Reorder List" as "Objective",
        items: [
          {
            text: [
              "You are given the head of a singly linked-list. The list can be represented as:",
              "L0 → L1 → … → Ln - 1 → Ln",
              "Reorder the list to be on the following form:",
              "L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …",
              "",
            ],
            images: ["/day7/1.png"],
          },
          {
            text: [
              "The problem can be broken down into three steps:",
              "1. Find the middle of the list",
              "2. Reverse the second half of the list",
              "3. Merge the first half and the reversed second half",
              "Solution:",
            ],
            language: "c++",
            code: `
struct ListNode {
  int val;
  ListNode *next;
  ListNode() : val(0), next(nullptr) {}
  ListNode(int x) : val(x), next(nullptr) {}
  ListNode(int x, ListNode *next) : val(x), next(next) {}
};

class Solution {
public:
  void reorderList(ListNode* head) {
    // Base case
    if (head == nullptr) return;
    // Find the middle of the list
    ListNode* slow = head;
    ListNode* fast = head;
    // slow moves 1 step, fast moves 2 steps at a time
    while (fast != nullptr && fast->next != nullptr)
      slow = slow->next;
      fast = fast->next->next;
    }
    // Reverse the second half of the list
    ListNode* prev = nullptr;
    ListNode* curr = slow;
    ListNode* next = nullptr;
    while (curr != nullptr) {
      next = curr->next;
      curr->next = prev;
      prev = curr;
      curr = next;
    }
    // Merge the two halves
    ListNode* first = head;
    ListNode* second = prev;
    while (second->next != nullptr) {
      next = first->next;
      first->next = second;
      first = next;
      next = second->next;
      second->next = first;
      second = next;
    }
  }
};
            `,
          },
        ],
      },
      {
        subMenu: "19. Remove Nth Node From End of List" as "Objective",
        items: [
          {
            text: [
              "Given the head of a linked list, remove the nth node from the end of the list and return its head.",
              "",
            ],
            images: ["/day7/2.png"],
          },
          {
            text: [
              "To solve this problem you must:",
              "1. Create two pointers, left and right",
              "2. Move the right pointer n steps ahead",
              "3. Move the left and right pointers until the right pointer reaches the end",
              "4. Remove the left node",
              "Solution:",
            ],
            language: "c++",
            code: `
struct ListNode {
  int val;
  ListNode *next;
  ListNode() : val(0), next(nullptr) {}
  ListNode(int x) : val(x), next(nullptr) {}
  ListNode(int x, ListNode *next) : val(x), next(next) {}
};

class Solution {
public:
  ListNode* removeNthFromEnd(ListNode* head, int n) {
    // create two pointers
    ListNode* left = head;
    ListNode* right = head;
    // move the right pointer n steps ahead
    for (int i = 0; i < n; i++) {
      right = right->next;
    }
    // if the right pointer is null, then the node to be removed is the head
    if (right == nullptr) {
      return head->next;
    }
    // move the left and right pointers until the right pointer reaches the end
    while (right->next != nullptr) {
      left = left->next;
      right = right->next;
    }
    // remove the node
    left->next = left->next->next;
    // return the head
    return head;
  }
};
            `,
          },
        ],
      },
      {
        subMenu: "74. Search a 2D Matrix" as "Objective",
        items: [
          {
            text: [
              "You are given an m x n integer matrix matrix with the following two properties:",
              "1. Each row is sorted in non-decreasing order.",
              "2. Each column is sorted in non-decreasing order.",
              "",
              "Given an integer target, return true if target is in matrix or false otherwise.",
              "You must write a solution in O(log(m * n)) time complexity.",
              "",
              "~",
              "",
              "To solve this problem you must:",
              "1. Create two pointers, left and right",
              "2. Move the right pointer n steps ahead",
              "3. Move the left and right pointers until the right pointer reaches the end",
              "4. Remove the left node",
              "C++ Solution:",
            ],
            language: "c++",
            code: `
class Solution {
public:
  // Create a stnadard binary search function which will return a boolean value
  bool binarySearch(std::vector<int>& col, int target) {
    int left = 0;
    int right = col.size() - 1;
    while (left <= right) {
      int mid = left + (right - left) / 2;
      if (col[mid] == target) {
        return true;
      } else if (col[mid] > target) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    return false;
  }

  // Create a function to search the matrix
  bool searchMatrix(std::vector<std::vector<int>>& matrix, int target) {
    // If the matrix is empty, return false
    if (matrix.empty()) {
      return false;
    }

    // Get the number of rows and columns
    int rows = matrix.size();
    int cols = matrix[0].size();

    // Binary search the rows while checking if their corisponding column is in range of the target
    int top = 0;
    int bottom = rows - 1;
    while (top <= bottom) {
      int mid = top + (bottom - top) / 2;
      // If the target is in the range of the column, binary search the column
      if (matrix[mid][0] <= target && matrix[mid][cols - 1] >= target) {
        return binarySearch(matrix[mid], target);
      } else if (matrix[mid][0] > target) {
        bottom = mid - 1;
      } else {
        top = mid + 1;
      }
    }
    // If the target is not found, return false
    return false;
  }
};
            `,
          },
          {
            text: [
              "Additionally, I decided to covert the previous solution over to C to contrast the syntax and solidify my understanding of C. This step is part of my broader strategy to grasp computer science fundamentals more thoroughly, aiming to enhance my coding skills as I explore various programming languages.",
              "C Solution:",
            ],
            language: "c",
            code: `
bool searchMatrix(int** matrix, int matrixSize, int* matrixColSize, int target) {
  // Create a stnadard binary search function which will return a boolean value
  bool binarySearch(int* arr, int size, int target) {
    int left = 0;
    int right = size - 1;
    while (left <= right) {
      int mid = left + ((right - left) >> 1);
      if (arr[mid] == target) {
        return true;
      } else if (arr[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return false;
  }

  // If matrix is empty, return false
  if (matrixSize == 0) {
    return false;
  }

  // Binary search the rows while checking if their corisponding column is in range of the target
  int top = 0;
  int bottom = matrixSize - 1;
  while (top <= bottom) {
    int mid = top + ((bottom - top) >> 1);
    // If the target is in the range of the current row, binary search the row
    if (matrix[mid][0] <= target && matrix[mid][matrixColSize[mid] - 1] >= target) {
      return binarySearch(matrix[mid], matrixColSize[mid], target);
    } else if (matrix[mid][0] > target) {
      bottom = mid - 1;
    } else {
      top = mid + 1;
    }
  }
  
  // If no value is found, return false
  return false;
}
            `,
          },
          {
            text: [
              "^ Almost the same solution but with a few differences in syntax and the way memory is allocated and accessed.",
            ],
          },
        ],
      },
    ],
  },
  // Portfolio Work
  {
    menu: "Portfolio Work",
    description:
      "API Access Rate Architect: Full-Stack IaC Solution - The Idea",
    content: [
      {
        subMenu: "The Idea",
        items: [
          { images: ["day7/3.png", "day7/4.png"] },
          {
            text: [
              "^ My architecture idea/design: Start -> Finish",
              "As a 3x AWS Certified Solutions Architect Associate, Developer Associate, and SysOps Admin Associate with deep knowledge of AWS architecture, I've conceptualized an IaC solution that leverages the AWS Serverless Application Model (SAM) for deployment. This design aimed at enabling businesses to offer tiered access and throttled API key usage for their custom APIs and services. This solution is crafted to serve as the backbone infrastructure for companies seeking to monetize their APIs while maintaining control and scalability.",
              "At the core of my design is a user-friendly front end, integrated with AWS Cognito, for secure sign-ups, login management, and API key issuance. The system employs a mock payment and mock credit card model, using simple boolean values to demonstrate the transaction flow without handling real finances to adjust rate limits dynamically to suit different service tiers, ideal for demonstrating the concept with minimal overhead.",
              "The architecture is robust, utilizing Amazon EventBridge and SQS queues with Dead Letter Queues to handle asynchronous communication and ensure message processing reliability. Using DynamoDB for data storage further enhances the system's responsiveness and durability. With this design, this project aims to provide businesses with a rapid deployment model to operationalize their API services efficiently, offering tiered API access, automated billing, and detailed usage monitoring.",
            ],
          },
        ],
      },
      {
        subMenu: "Comments",
        items: [
          {
            text: [
              "This is a project I already put some energy into, which I still need to complete but I ended up putting it on the back burner. In the upcoming days, I will revisit this project, see where I left off, and then continue to build it out to finish it.",
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
