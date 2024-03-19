import DayLayout from "../DayLayout";
import Data from "../../types/data";

const data: Data = [
  // ARCH LINUX
  {
    menu: "Arbitrary Study",
    description: "Arch Linux",
    content: [
      {
        subMenu: "Notes",
        items: [
          {
            text: [
              "I spent several hours on my first attempt at installing Arch Linux, targeting a secondary hard drive on my desktop. I followed the installation guide on the Arch Linux wiki and used ChatGPT to pause, break down, and explore every concept. I encountered a few issues but managed to troubleshoot and resolve them. There's quite a bit to digest from this experience. Before I start writing a detailed breakdown of what I learned, I first plan on going through the installation process once more next week. This will ensure I've got a solid grasp on everything before I share a comprehensive post about it.",
            ],
          },
        ],
      },
    ],
  },
  // Learning Assignment
  {
    menu: "Learning Assignment",
    description: "C++ Modern Features: auto, smart pointers, Lambdas",
    content: [
      {
        subMenu: "Objective",
        items: [
          {
            text: [
              "Modern C++ has introduced features that simplify code and manage resources more effectively.",
            ],
          },
        ],
      },
      {
        subMenu: "Requirement",
        items: [
          {
            text: [
              "Learn how auto simplifies variable declarations, practice memory management with smart pointers (unique_ptr, shared_ptr), and use lambda expressions to define anonymous functions. Implement examples that demonstrate each of these features, such as a smart pointer managing a resource and a lambda function sorting a vector.",
            ],
          },
        ],
      },
      {
        subMenu: "Knowledge Learned",
        items: [
          {
            text: [
              "In C++, dynamic memory allocation is managed using new and delete operators. These operators allocate memory from the heap for variables or arrays at runtime and then free that memory when it is no longer needed. While this manual memory management offers control, it requires careful handling to prevent memory leaks, double frees, and dangling pointers.",
              "Examples of new and delete:",
              // "To simplify memory management, C++11 introduced smart pointers, which are objects that act like pointers but also manage the memory they point to. Smart pointers automatically delete the memory they point to when they are no longer needed, preventing memory leaks and dangling pointers. They also automatically delete the memory they point to when an exception is thrown, preventing memory leaks and double frees.",
            ],
            language: "c++",
            code: `
int* ptr = new int; // Allocate memory for an int
*ptr = 5; // Assign 5 to the allocated memory

int* initializedPtr = new int(10); // Allocate and initialize in one step
int* arrayPtr = new int[5]; // Allocate memory for an array of 5 ints

delete ptr; // Free memory allocated for a single int
delete initializedPtr; // Free memory for another single int
delete[] arrayPtr; // Free memory allocated for an array

// Avoid dangling pointers by setting them to nullptr
ptr = nullptr;
initializedPtr = nullptr;
arrayPtr = nullptr;            
            `,
          },
          {
            text: [
              "",
              "Transition to Smart Pointers",
              "To mitigate the risks associated with manual memory management, C++ introduced smart pointers in the Standard Template Library (STL). Smart pointers automatically manage the lifetime of dynamically allocated objects, ensuring proper deletion and simplifying memory management for safer, more maintainable code.",
              "Types of Smart Pointers",
              "- unique_ptr: Manages a single object and ensures that it is deleted when the unique_ptr goes out of scope.",
              "- shared_ptr: Manages a shared object and ensures that it is deleted when the last shared_ptr pointing to it goes out of scope.",
              "- weak_ptr: Observes a shared_ptr without affecting its reference count, preventing circular references and memory leaks.",
            ],
            language: "c++",
            code: `
#include <iostream>
#include <memory>

int main() {
  // unique_ptr example
  std::unique_ptr<int> uniquePtr = std::make_unique<int>(20);
  std::cout << *uniquePtr << std::endl; // Output: 20
  // uniquePtr automatically frees memory when out of scope

  // shared_ptr example
  std::shared_ptr<int> sharedPtr1 = std::make_shared<int>(30);
  std::shared_ptr<int> sharedPtr2 = sharedPtr1; // Both point to the same int
  std::cout << *sharedPtr1 << " " << *sharedPtr2 << std::endl; // Output: 30 30
  // Memory is automatically freed when the last shared_ptr is destroyed

  // weak_ptr example
  std::weak_ptr<int> weakPtr = sharedPtr1; // Create a weak_ptr from a shared_ptr
  // weakPtr does not contribute to reference count
  // Use lock() to get a shared_ptr if the object still exists
  if (auto tmpSharedPtr = weakPtr.lock()) {
    std::cout << *tmpSharedPtr << std::endl; // Output: 30
  } else {
    std::cout << "The object has been deleted." << std::endl;
  }
}
            `,
          },
          {
            text: [
              "^ This code demonstrates basic usage of std::unique_ptr, std::shared_ptr, and std::weak_ptr, highlighting their automatic memory management features that prevent common memory management errors.",
              "",
              "Understanding Lambdas in C++",
              "Lambdas in C++ are a feature introduced in C++11, providing a concise way to write inline, anonymous functions. They are particularly useful in contexts where you need to pass a simple function as an argument to another function, such as with algorithms in the Standard Template Library (STL). Lambdas can capture variables from their surrounding scope, allowing for more versatile function definitions.",
              "Lambda Syntax:",
            ],
            language: "c++",
            code: `
[capture](parameters) -> return_type { body }
            `,
          },
          {
            text: [
              "- Capture Clause: Defines how variables from the lambda's surrounding scope are captured for use inside the lambda. This can be by value ([=]), by reference ([&]), both, or specifically named variables only.",
              "- Parameters: Specifies the parameters of the lambda function.",
              "- Return Type: An optional specification. If omitted, the compiler attempts to infer the return type ",
              "- Body: Contains the code to be executed when the lambda is called.",
              "",
              "Example Usage",
            ],
            language: "c++",
            code: `
#include <iostream>
#include <algorithm>
#include <vector>

int main() {
  std::vector<int> values = {1, 2, 3, 4, 5};
  int factor = 2;
  std::for_each(values.begin(), values.end(), [factor](int& value) {
    value *= factor;
  });

  for (int value : values) {
    std::cout << value << " "; // Outputs: 2 4 6 8 10
  }
}            
            `,
          },
          {
            text: [
              "^ This code demonstrates the use of a lambda function to multiply each element in a vector by a factor. The lambda captures the factor variable by value and modifies the elements in the vector in place.",
              "",
              "Understanding auto in C++",
              "The auto keyword in C++ signifies automatic type deduction. It instructs the compiler to deduce the type of a variable from its initializer expression. Introduced in C++11, auto simplifies code, reduces redundancy, and enhances code readability and maintainability, especially when dealing with complex types like iterators or function pointers.",
              "Key Points on auto:",
              "- Type Deduction: The compiler automatically deduces the type of the variable from its initialization expression.",
              "- Simplifies Declarations: Especially useful with complex data types and iterator declarations.",
              "- Reduces Repetitive Code: Avoids the need to explicitly type out complex type names.",
              "- Maintains Type Safety: Despite the type being deduced, auto variables are still strongly typed, and type checks are performed at compile time.",
              "- Cannot Be Used Without Initialization: An auto variable must be initialized at the point of declaration, as its type is deduced from the initializer.",
              "Example Use Cases:",
            ],
            language: "c++",
            code: `
auto x = 5; // x is deduced to be of type int
auto pi = 3.14159; // pi is deduced to be of type double

std::vector<int> vec = {1, 2, 3, 4, 5};
auto it = vec.begin(); // it is deduced to be std::vector<int>::iterator

auto lambda = [](int a, int b) { return a + b; };
// lambda is deduced to be of a lambda function type, equivalent to a function taking two ints and returning an int            
            `,
          },
          {
            text: [
              "^ This code demonstrates the use of the auto keyword to deduce the types of variables, iterators, and lambda functions, showcasing the versatility and convenience of automatic type deduction in C++.",
              "auto is particularly beneficial in modern C++ programming, facilitating cleaner and more maintainable code, especially when working with templates or STL containers where types can become cumbersome to write and read.",
            ],
          },
        ],
      },
    ],
  },
  // LeetCode
  {
    menu: "LeetCode",
    description: "A problem in C, C++, and TypeScript",
    content: [
      {
        subMenu: "Comments",
        items: [
          {
            text: [
              "I decided to mix it up today and solve a problem in C, C++, and then finally TypeScript.",
            ],
          },
        ],
      },
      {
        subMenu: "104. Maximum Depth of Binary Tree" as "Objective",
        items: [
          {
            text: [
              "Given the root of a binary tree, return its maximum depth.",
              "A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.",
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

int maxDepth(struct TreeNode* root) {
  // base case
  if (root == NULL) {
    return 0;
  }
  // DFS
  int left = maxDepth(root->left);
  int right = maxDepth(root->right);
  // return the max depth of the subtree with greater depth
  return left > right ? left + 1 : right + 1;
}
            `,
          },
        ],
      },
      {
        subMenu: "543. Diameter of Binary Tree" as "Objective",
        items: [
          {
            text: [
              "Given the root of a binary tree, return the length of the diameter of the tree",
              "The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.",
              "The length of a path between two nodes is represented by the number of edges between them.",
              "C++ solution:",
            ],
            language: "c++",
            code: `
#include <algorithm>

struct TreeNode {
  int val;
  TreeNode *left;
  TreeNode *right;
  TreeNode() : val(0), left(nullptr), right(nullptr) {}
  TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
  TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
};

class Solution {
private:
  // Helper function to calculate the depth of a node and update the diameter
  int getDepth(TreeNode* node, int& diameter) {
    if (node == nullptr) {
      return 0;
    }
    // DFS
    int left = getDepth(node->left, diameter);
    int right = getDepth(node->right, diameter);
    // Update the diameter if the current path is longer
    diameter = std::max(diameter, left + right);
    // Return the depth of the current node
    return std::max(left, right) + 1;
  };

public:
  int diameterOfBinaryTree(TreeNode* root) {
    int diameter = 0;
    // Start the recursive depth calculation
    getDepth(root, diameter);
    return diameter;
  }
};
            `,
          },
        ],
      },
      {
        subMenu: "110. Balanced Binary Tree" as "Objective",
        items: [
          {
            text: [
              "Given a binary tree, determine if it is height-balanced.",
              "A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.",
              "TypeScript solution:",
            ],
            language: "typescript",
            code: `
interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

function isBalanced(root: TreeNode | null): boolean {
  // base case
  if (!root) return true;

  // recursive helper function
  const height = (node: TreeNode | null): number => {
    // base case
    if (!node) return 0;
    // get the height of the left and right subtrees recursively
    return Math.max(height(node.left), height(node.right)) + 1;
  };

  return (
    // check if the difference in height between the left and right subtrees is less than or equal to 1
    Math.abs(height(root.left) - height(root.right)) <= 1 &&
    // check if the left and right subtrees are balanced
    isBalanced(root.left) &&
    isBalanced(root.right)
  );
}
            `,
          },
        ],
      },
    ],
  },
  // Portfolio Work
  {
    menu: "Portfolio Work",
    description: "API Access Rate Architect: Full-Stack IaC Solution - Part 2",
    content: [
      {
        subMenu: "Context",
        items: [
          { images: ["/day8/6.png"] },
          {
            text: ["^ Continuing from where I left off on 3/15/24.", ""],
            images: ["/day9/1.png"],
          },
          {
            text: [
              `^ I need to create an SQS queue and then create an EventBridge rule to intercept "Account Created" events and send them into the SQS queue. Then I need to create an asynchronous Lambda function that polls "Account Created" events from the SQS queue. The Lambda function will create API keys for new users and store them in DynamoDB (It will eventually handle "Payment Success" + "API Key Deleted" events later on). Finally, I will create a DLQ to capture any failed events.`,
              "",
            ],
            images: ["/day9/3.png"],
          },
          {
            text: [
              "^ Anyway, I ended up refactoring a ton of stuff and having a ton of issues getting SQS to work with EventBridge. My lambda function isn't properly processing the events from the queue. I did some debugging by pushing manual events into the queue and monitoring the lambda function with EventBridge. If you look closely at my architecture diagram, you can see that I will be using SQS to decouple triggered EventBridge rules from all asynchronous lambda functions. So, I must get this working properly here because then I can apply the same pattern to all my other asynchronous lambda functions as I make them. Unfortunately, I ran out of time today to work on this, but I should get this aspect working tomorrow.",
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
