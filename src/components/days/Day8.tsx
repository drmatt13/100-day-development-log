import DayLayout from "../DayLayout";
import Data from "../../types/data";

const data: Data = [
  // Learning Assignment
  {
    menu: "Learning Assignment",
    description: "Advanced C++: Integrating OOP, Templates, and STL",
    content: [
      {
        subMenu: "Objective",
        items: [
          {
            text: [
              "Advance your C++ proficiency by delving into Object-Oriented Programming (OOP), templates, and the Standard Template Library (STL). This exploration focuses on understanding polymorphism and encapsulation within OOP, leveraging templates for generic programming, and utilizing STL for data management and algorithmic operations.",
            ],
          },
        ],
      },
      {
        subMenu: "Requirement",
        items: [
          {
            text: [
              "Polymorphism and Encapsulation: Study and practice by creating a base class with virtual functions, and derive subclasses to override these functions, demonstrating polymorphism.",
              "Templates: Experiment with generic programming by designing template functions and classes, aiming to understand how they allow for type-independent coding.",
              "STL: Familiarize yourself with STL by practicing with key containers (vector, map, set) and algorithms (sort, find), to grasp efficient data handling and manipulation techniques.",
            ],
          },
        ],
      },
      {
        subMenu: "Knowledge Reviewed",
        items: [
          {
            text: [
              "- Polymorphism: Allows objects of different classes to be treated as objects of a common super class. The most common use of polymorphism is when a parent class reference is used to refer to a child class object.",
              "Here is an example of polymorphism in C++:",
            ],
          },
          {
            language: "c++",
            code: `
#include <iostream>

// Base class
class Vehicle {
public:
  void honk() const {
    std::cout << "Beep beep!" << std::endl;
  }
};

// Derived class
class Car : public Vehicle {
public:
  void honk() const {
    std::cout << "Car beep beep!" << std::endl;
  }
};

int main() {
  Car myCar;
  myCar.honk(); // Calls Car's honk, output: Car beep beep!
  return 0;
}            
            `,
          },
          {
            text: ["Here is the TypeScript equivalent of the C++ code above:"],
            language: "typescript",
            code: `
// Base class
class Vehicle {
  honk(): void {
    console.log("Beep beep!");
  }
}

// Derived class
class Car extends Vehicle {
  honk(): void {
    console.log("Car beep beep!");
  }
}

const myCar = new Car();
myCar.honk(); // Output: Car beep beep!            
            `,
          },
          {
            text: [
              "",
              "- Encapsulation: This means bundling data (attributes) and methods (functions) that operate on the data into a single unit, or class, and restricting access to some of the class's components. This is usually done by using access specifiers: public, private, and protected.",
              "Here is an example of encapsulation in C++:",
            ],
            language: "c++",
            code: `
class BankAccount {
private:
  double balance; // Encapsulated data

public:
  BankAccount(double initialBalance) : balance(initialBalance) {}

  void deposit(double amount) {
    if (amount > 0) balance += amount;
  }

  void withdraw(double amount) {
    if (amount > 0 && balance >= amount) balance -= amount;
  }

  double getBalance() const {
    return balance;
  }
};              
            `,
          },
          {
            text: [
              "",
              "Next, moving onto the concept of templates:",
              "- Templates are used for generic programming in C++ and enable you to write a function or class to work with any data type.",
              "- Templates in C++ are an analogous concept in TypeScript, called generics, serve the same fundamental purpose: to allow code to be more flexible and reusable by making it work with any data type. Both mechanisms achieve generic programming, enabling functions, classes, interfaces, etc., to operate on different data types while being defined just once.",
              "Function Template Example in C++:",
            ],
            language: "c++",
            code: `
template <typename T>
T add(T a, T b) {
  return a + b;
}
// Usage: add<int>(1, 2); add<double>(1.1, 2.2);
            `,
          },
          {
            text: ["Class Template Example C++:"],
            language: "c++",
            code: `
template <typename T>
class Box {
private:
  T content;
public:
  void fill(const T& content) {
    this->content = content;
  }
  T get() const {
    return content;
  }
};
// Usage: Box<int> intBox; intBox.fill(123);
            `,
          },
          {
            text: [
              "",
              "^ Here are the TypeScript equivalents of the C++ code above:",
              "Generic Function:",
            ],
            language: "typescript",
            code: `
function add<T>(a: T, b: T): T {
  return (a as any) + (b as any);
}
// Usage: add<number>(1, 2); add<number>(1.1, 2.2);          
            `,
          },
          {
            text: ["Generic Class:"],
            language: "typescript",
            code: `
class Box<T> {
  private content: T;

  fill(content: T): void {
    this.content = content;
  }

  get(): T {
    return this.content;
  }
}
// Usage: const intBox = new Box<number>(); intBox.fill(123);
          `,
          },
          {
            text: [
              "",
              "Finally, I'm going to break down the Standard Template Library (STL) in C++:",
              "The Standard Template Library (STL) is a powerful feature of C++ that provides a set of common classes and interfaces for dealing with data structures and algorithms. The STL makes it possible for programmers to achieve higher productivity, as it allows for the reuse of code and abstracts away the complexity involved in certain operations. Its design leverages heavily on templates, a cornerstone of C++'s support for generic programming.",
              "The STL can be broadly divided into four main components:",
              // "",
              "1. Containers: These are classes that store data. The STL provides several different types of containers, each designed for specific situations and types of data management. Containers are divided into sequence containers, associative containers, and container adaptors.",
              "- Sequence Containers: Manage data in a linear fashion (e.g., vector, list, deque).",
              "- Associative Containers: Store data in a way that allows for fast retrieval based on keys (e.g., set, map, multiset, multimap).",
              "- Container Adaptors: Provide a different interface for sequential containers (e.g., stack, queue, priority_queue).",
              // "",
              "2. Algorithms: These are functions that perform operations on containers. The most commonly used algorithms are sort, find, and transform.",
              // "",
              "3. Iterators: These are objects that allow you to traverse through the elements of a container. The most commonly used iterators are input, output, forward, bidirectional, and random access.",
              // "",
              "4. Function Objects: These are objects that behave like functions. They are used as arguments to algorithms.",
              "",
              // "",
              "^ Now to break these down further, here are some expanded examples:",
              "",
              "1. Containers",
              "- Vector (std::vector): A dynamic array that can grow or shrink in size. Provides fast random access to elements:",
            ],
            language: "c++",
            code: `
#include <vector>
std::vector<int> myVector = {1, 2, 3};
myVector.push_back(4); // Adds an element to the end            
            `,
          },
          {
            text: [
              "- Set (std::set): A container that stores unique elements in a specific order. It is implemented using a balanced binary search tree:",
            ],
            language: "c++",
            code: `
#include <set>
std::set<int> mySet = {1, 2, 3};
mySet.insert(4); // Adds an element to the set            
            `,
          },
          {
            text: [
              "- Map (std::map): A sorted associative container that stores key-value pairs with unique keys:",
            ],
            language: "c++",
            code: `
#include <map>
std::map<std::string, int> myMap;
myMap["one"] = 1;
myMap["two"] = 2;            
            `,
          },
          {
            text: [
              "",
              "2. Algorithms",
              "- Sort: Sorts elements in a range. Requires random access iterators, so it works with std::vector, std::deque, but not directly with std::list:",
            ],
            language: "c++",
            code: `
#include <algorithm>
#include <vector>
std::vector<int> vec = {4, 1, 3, 5, 2};
std::sort(vec.begin(), vec.end()); // Now vec is sorted
            `,
          },
          {
            text: [
              "- Find: Searches for an element in a range and returns an iterator to the first occurrence:",
            ],
            language: "c++",
            code: `
#include <algorithm>
#include <vector>
std::vector<int> vec = {1, 2, 3, 4, 5};
auto it = std::find(vec.begin(), vec.end(), 3);
if (it != vec.end()) {
  // Found element 3
}
`,
          },
          {
            text: [
              "",
              "3. Iterators",
              "- Usage: Iterators provide a way to access elements in a container sequentially without exposing the underlying representation:",
            ],
            language: "c++",
            code: `
std::vector<int> vec = {1, 2, 3, 4, 5};
for(auto it = vec.begin(); it != vec.end(); ++it) {
  std::cout << *it << std::endl; // Access each element
}
`,
          },
          {
            text: [
              "",
              "4. Function Objects (Functors)",
              "- Custom Comparison: Can be used for sorting with a custom comparator:",
            ],
            language: "c++",
            code: `
#include <algorithm>
#include <vector>
struct compare {
  bool operator()(int a, int b) {
    return a < b;
  }
};
std::vector<int> vec = {4, 1, 3, 5, 2};
std::sort(vec.begin(), vec.end(), compare()); // Sorts using compare            
`,
          },
        ],
      },
    ],
  },
  // LeetCode
  {
    menu: "LeetCode",
    description: "More practice with C++",
    content: [
      {
        subMenu: "155. Min Stack" as "Objective",
        items: [
          {
            text: [
              "Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.",
              "Implement the MinStack class:",
              "- MinStack() initializes the stack object.",
              "- void push(int val) pushes the element val onto the stack.",
              "- void pop() removes the element on the top of the stack.",
              "- int top() gets the top element of the stack.",
              "- int getMin() retrieves the minimum element in the stack.",
              "You must implement a solution with O(1) time complexity for each function.",
              "C++ Solution:",
            ],
            language: "c++",
            code: `
#include <stack>

class MinStack {
private:
  std::stack<int> stack;     // Main stack to hold all elements
  std::stack<int> minStack;  // Auxiliary stack to keep track of minimum elements

public:
  // Constructor
  MinStack() {}

  void push(int val) {
    // Push value onto the main stack
    stack.push(val);
    // If minStack is empty or val is less than or equal to the current minimum,
    // push it onto the minStack.
    if (minStack.empty() || val <= minStack.top()) {
      minStack.push(val);
    }
  }

  void pop() {
    // If the top of both stacks are equal, pop from the minStack as well.
    if (!stack.empty() && stack.top() == minStack.top()) {
      minStack.pop();
    }
    stack.pop();
  }

  int top() {
    // Return the top of the main stack
    return stack.top();
  }

  int getMin() {
    // Return the top of the minStack
    return minStack.top();
  }
};
            `,
          },
          {
            text: [
              "^ My initial thought would have been to make a priority queue alongside the primary stack and manage values accordingly. However, the challenge arises with the priority queue's O(n log n) time complexity, conflicting with the problem's O(1) requirement. The effective solution lies in utilizing two stacks, one of which holds the minimum values. This dual-stack approach enables us to insert a new value into the minimum stack whenever it is equal to or lower than the current minimum, accommodating for duplicate minimum values efficiently. As values are popped, this method ensures that the minimum stack accurately reflects the primary stack's current minimum, even with duplicates, all while maintaining the O(1) time constraint for all operations. This strategy showcases a straightforward yet ingenious solution, circumventing the need for a priority queue and adhering to the specified time complexity.",
            ],
          },
        ],
      },
      {
        subMenu: "287. Find the Duplicate Number" as "Objective",
        items: [
          {
            text: [
              "Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.",
              "There is only one repeated number in nums, return this repeated number.",
              "You must solve the problem without modifying the array nums and uses only constant extra space.",
              "- ",
              "To solve this problem, first I had to learn about Floyd's Tortoise and Hare (Cycle Detection) algorithm. This algorithm is used to detect a cycle in a sequence. It is also known as the slow and fast pointer technique.",
            ],
            images: ["/day8/5.png"],
          },
          {
            text: [
              "First rather than traversing the array from left to right, since we know that the array contains numbers from [1, n] inclusive, we can instead traverse the array as if it were a linked list. We can do this by using the value of each element as the index to access the next element.",
              "^ Building off of this, since we know that there is a value that repeats in the array, this means that there will be a repeating cycle when traversing the array as a linked list.",
              "First, we must identify an index that is part of the cycle. We can do this by using the Floyd's Tortoise and Hare algorithm. This algorithm uses two pointers, a slow pointer and a fast pointer. The slow pointer moves one step at a time and the fast pointer moves two steps at a time. If there is a cycle, the two pointers will eventually meet at some index.",
              "Now this is where the algorithm gets really cool.",
              "Once an index has become identified inside of the cycle using a slow and fast pointer, I assumed that you would need to solve it by reassigning the slow pointer to the beginning of the array and then by doing two things in a loop:",
              "1. Iteratively move the previously found index pointer inside the cycle an entire revolution around the loop looking for a collision with the new slow pointer.",
              "2. If a collision is found, then the index of the collision is the duplicate number, if not, then the slow pointer is moved one step forward.",
              "^ While this works, it isn’t fully correct.",
              `It turns out that when the slow and fast pointers meet for the first time (let's call this the "meeting point" inside the cycle), it's proven that if you move one pointer back to the start of the list and then move both pointers one step at a time, they will meet at the entrance of the cycle.`,
              "So instead of the two steps I mentioned above, you only need to move the slow pointer back to the start of the list and then move both pointers one step at a time until they meet. The meeting point is the entrance of the cycle and the duplicate number.",
              "Here is the C++ solution:",
            ],
            language: "c++",
            code: `
#include <vector>

class Solution {
public:
  int findDuplicate(std::vector<int>& nums) {
    // Phase 1: Use Floyd's Cycle Detection algorithm to find the intersection point.
    // Initialize both slow and fast pointers to the first element.
    int slow = nums[0];
    int fast = nums[0];
    
    // Move slow pointer by one step and fast pointer by two steps until they meet.
    do {
      slow = nums[slow];       // Move slow pointer one step.
      fast = nums[nums[fast]]; // Move fast pointer two steps.
    } while (slow != fast);       // Loop until both pointers meet, indicating a cycle.
    
    // Phase 2: Find the entrance to the cycle, which is the duplicate number.
    // Reset slow pointer to the start. Keep fast pointer at the meeting point.
    // Move both pointers one step at a time until they meet at the entrance of the cycle.
    slow = nums[0];
    while (slow != fast) {
      slow = nums[slow]; // Move slow pointer one step.
      fast = nums[fast]; // Move fast pointer one step, now in sync with slow.
    }
    
    // Both pointers now point to the duplicate number. Return it.
    return fast;
  }
};
            `,
          },
        ],
      },
    ],
  },
  // AWS Practice
  {
    menu: "AWS Practice",
    description: "AWS Serverless Application Model (SAM)",
    content: [
      {
        subMenu: "Comments",
        items: [
          {
            text: [
              "I want to start by saying that I do have plenty of experience working with AWS SAM but since both the next project I will be working on will require extensive AWS SAM usage and since I'm fully committed to studying/reviewing AWS until I can receive my first Professional Certification, I figured AWS SAM is worth reviewing.",
              "Start by making sure your AWS Credentials are good by invoking the get-caller-identity command from the sts service using the AWS CLI:",
            ],
            language: "bash",
            code: `aws sts get-caller-identity`,
          },
          {
            text: [
              "^ Although, you don't need valid credentials to initialize a SAM project, only to upload and deploy it. So if you are using access keys per terminal session, you can skip this step and worry about configuring your credentials when needed.",
            ],
          },
        ],
      },
      {
        subMenu: "Knowledge Reviewed",
        items: [
          {
            text: ["Initialize a SAM project:"],
            language: "bash",
            code: `sam init`,
          },
          {
            text: [
              "",
              "",
              "During the initialization process, you will be prompted to choose configuration settings but the most notable ones are:",
              "- Default Runtime: The runtime for your functions (Node.js, Python, Ruby, Java, .NET, Go, or Custom Runtime).",
              "- Package type: Zip or Image",
              "- Tracing: Whether to enable active tracing with AWS X-Ray.",
              "- Enable monitoring: Whether to enable monitoring with Amazon CloudWatch application insights.",
              "- Enable structured logging: Whether to enable structured logging in JSON format on your Lambda functions",
              "",
              "",
              "Here is a break down of these settings:",
              "",
              "Default Runtime:",
              "- The runtime is the programming language and version you want to use for any given functions. You can use different runtimes for different functions within the same SAM template. The runtime you choose will determine the language-specific dependencies and libraries you can use in your function code.",
              "",
              "Package type:",
              "- When you create a Lambda function with AWS SAM, you can package your function code in two ways: as a Zip file or as a container image.",
              "",
              "- Zip: This is the traditional method for deploying Lambda functions. Your code and any dependencies are zipped together. When you invoke your Lambda function, AWS Lambda unzips this package and runs your function. This method is straightforward and works well for many use cases, especially when your dependencies are minimal and your deployment package is small.",
              "- Image: This method allows you to package your Lambda function as a container image, which you can then upload to Amazon Elastic Container Registry (ECR). This approach is beneficial if you're already using container-based deployments, as it allows for consistency across your development and production environments. It's also helpful when your function has complex dependencies, requires a specific runtime environment not natively supported by Lambda, or when the package size is large. Container images can be up to 10 GB in size, whereas Zip packages have a smaller limit.",
              "",
              "Tracing:",
              "- Enabling tracing in AWS SAM allows you to collect data about the requests that your application serves. This feature is primarily about integrating AWS X-Ray, which provides insights into the behavior of your application and its underlying services.",
              "- When you enable tracing, AWS X-Ray can trace Lambda function invocations, map the application architecture, and provide insights into the latency, errors, and performance bottlenecks within your application.",
              "- Tracing in SAM isn't limited to just Lambda functions; it can extend to other resources within your SAM template that support X-Ray, including API Gateway. This means you can get a comprehensive view of your serverless application's performance and issues, not just the parts running on Lambda.",
              "",
              "Enable monitoring:",
              "- AWS Lambda automatically monitors functions on your behalf, reporting metrics through Amazon CloudWatch. However, the enabling of monitoring in the context of AWS SAM and CloudWatch Application Insights goes beyond basic metrics.",
              "- By default, Lambda sends metrics like invocation count, duration, and errors to CloudWatch. But enabling monitoring through SAM and Application Insights can offer more detailed diagnostic capabilities, including detecting and analyzing issues and providing actionable recommendations.",
              "- This enhanced monitoring can auto-configure dashboards, set up anomaly detection, and provide insights into the health of your application based on the patterns in the metrics and logs.",
              "",
              "Enable structured logging:",
              "- Structured logging means logging your application's events in a consistent, predefined format, usually in JSON. This format makes it easier to search and analyze logs, especially when you're dealing with large volumes of data.",
              "- Enabling structured logging in AWS SAM setups your Lambda functions to output logs in a structured format. This can significantly improve the monitoring and troubleshooting capabilities of your application.",
              "- While structured logging itself doesn't directly incur additional costs, the volume of logs and the detailed level of logging can impact your CloudWatch Logs costs. More detailed logging means more data stored and analyzed, which can increase costs. However, the benefits of improved debuggability and operational insights often outweigh these costs.",
              "",
              // "",
              // "",
              "",
              "After the initialization process, you will have a SAM project with a directory structure and a template.yaml file. The template.yaml file is just a CloudFormation template with a few added SAM-specific resource types.",
              `The AWS SAM resources ("at the time of writing this") are:`,
              "- AWS::Serverless::Api",
              "- AWS::Serverless::Application",
              "- AWS::Serverless::Connector",
              "- AWS::Serverless::Function",
              "- AWS::Serverless::GraphQLApi",
              "- AWS::Serverless::HttpApi",
              "- AWS::Serverless::LayerVersion",
              "- AWS::Serverless::SimpleTable",
              "- AWS::Serverless::StateMachine",
              "",
              "",
              "AWS SAM is essentually a framework for building serverless applications using infrastructure as code (IaC). It extends AWS CloudFormation to provide a simplified way of defining the Amazon API Gateway APIs, AWS Lambda functions, and Amazon DynamoDB tables needed by your serverless application.",
              "When you deploy your serverless application using AWS SAM, it will create the resources you've defined in the template.yaml file, and it will also create a new CloudFormation stack. This stack will contain all the resources defined in the template.yaml file, and it will be managed by CloudFormation.",
              "AWS SAM encourages the organization of Lambda functions in their own dedicated folders within your project. This setup not only promotes a cleaner project structure but also facilitates the management of dependencies and function-specific configurations. Each function's folder can include the function code, libraries, and a function-specific template that defines the function's properties in the SAM template.",
              "With the SAM CLI, developers gain the ability to invoke Lambda functions locally, passing in mock event data to simulate various invocation scenarios. This feature is invaluable for rapid development cycles, allowing for immediate feedback and iteration without the need to deploy the function to AWS. The ability to test functions locally with mock events mirrors the actual AWS environment, ensuring that your function will behave as expected once deployed.",
              "Deploying a serverless application with AWS SAM transforms what could be a cumbersome process into a straightforward command-line operation. During deployment:",
              "- Automated Packaging: SAM CLI automatically packages each Lambda function, handling dependencies and runtime environments according to the configurations specified in the template.yaml file.",
              "- Artifact Management: The CLI uploads these packages to an S3 bucket, eliminating the manual upload step required in traditional AWS CloudFormation deployments. This automated handling of artifacts significantly reduces the complexity of deploying Lambda functions.",
              "- Resource Creation: Upon executing the sam deploy command, AWS SAM takes care of creating a CloudFormation stack, which includes all the resources defined in your template.yaml file. This includes the setup of Lambda functions, APIs, and other related AWS resources, based on the SAM-specific resource types and properties you've defined.",
              "- Stack Management: The CloudFormation stack created by AWS SAM is managed by CloudFormation, allowing for easy updates, rollbacks, and deletions. This means that you can manage your serverless application's lifecycle with the same robustness and reliability as any other CloudFormation stack.",
              "",
              "",
              "The Benefits of Automation and Local Testing:",
              "The integration of local testing and automated deployments within AWS SAM offers a seamless development experience. By reducing the friction typically associated with deploying serverless applications, developers can focus more on writing code and less on the mechanics of deployment. The ability to test changes locally before deploying them ensures that updates can be made rapidly and with confidence, fostering a more agile development process.",
              "Furthermore, the automated artifact management and resource creation facilitated by AWS SAM not only simplify the deployment process but also ensure that your application's infrastructure is consistently and reliably provisioned. This automation is a significant advantage over traditional CloudFormation deployments, where manual steps for uploading artifacts and configuring resources can introduce errors and delays.",
              "",
              "",
              "In conclusion, AWS SAM stands out as a comprehensive framework for serverless application development, offering a set of tools and conventions that streamline every stage of the development lifecycle. From organizing and testing Lambda functions locally to deploying complex serverless applications with a single command, AWS SAM enables developers to build scalable, high-performing applications efficiently and effectively.",
            ],
          },
        ],
      },
    ],
  },
  // Portfolio Work
  {
    menu: "Portfolio Work",
    description: "API Access Rate Architect: Full-Stack IaC Solution - Part 1",
    content: [
      {
        subMenu: "Context",
        items: [
          {
            images: ["/day7/4.png"],
          },
          {
            text: [
              "^ I went over the general idea for the IaC and design on 3/11/24",
              "To begin today's portfolio work session, I'll start by reviewing the materials and progress made so far to refresh my understanding and ensure a solid foundation. Following this review, I will proceed to develop and expand the remaining parts of the application in the coming days.",
              "I have a SAM project and a front-end app already created. I will be walking through what I have so far to establish a clear understanding of the current state of the project.",
              "First, I went ahead and created both a UserPool and UserPoolClient in the template.yaml:",
            ],
            language: "yaml",
            code: `
Resources:
UserPool:
  Type: AWS::Cognito::UserPool
  Properties:
    LambdaConfig:
      PreSignUp: !GetAtt PreSignUpFunction.Arn
      PostConfirmation: !GetAtt PostConfirmationFunction.Arn
    Schema:
      - AttributeDataType: String
        Name: email
        Required: true
    Policies:
      PasswordPolicy:
        MinimumLength: 8
        RequireUppercase: false
        RequireLowercase: false
        RequireNumbers: false
        RequireSymbols: false

# Client for UserPool
UserPoolClient:
  Type: AWS::Cognito::UserPoolClient
  Properties:
    UserPoolId: !Ref UserPool
            `,
          },
          {
            text: [
              "A UserPool is a user directory in Amazon Cognito. It provides a place for your app to store user profiles, including user attributes, and provides a way for users to sign up, sign in, and manage their profiles.",
              "A UserPoolClient is a client for the user pool. It provides a way for your app to interact with the user pool. It also provides a way for users to sign in and manage their profiles.",
              "UserPools can have multiple clients, this allows for different websites or applications to use the same user pool. Each client has its own settings and can be used to authenticate users in different ways.",
              "^ If you notice, I have a PreSignUp and PostConfirmation Lambda function attached to the UserPool. what this does is that it allows you to customize the user sign-up process and the confirmation process.",
              "So, I had to make resources for the PreSignUp and PostConfirmation functions in the template.yaml along with corresponding IAM Resource Policies to allow the UserPool to invoke the PreSignUp and PostConfirmation functions:",
            ],
            language: "yaml",
            code: `
Resources:
# ...

  # PreSignUpFunction
  PreSignUpFunction:
    Type: AWS::Serverless::Function
    Properties:
      CodeUri: lambda/cognito-pre-signup-trigger
      Handler: index.handler
      Runtime: nodejs18.x
      Architectures:
        - x86_64
    Metadata:
      BuildMethod: esbuild
      BuildProperties:
        Minify: true
        Target: "es2020"
        Sourcemap: true
        EntryPoints:
          - index.ts

  # Resource based policy which allows UserPool to invoke PreSignUpFunction
  PreSignUpFunctionResourceBasedPolicy:
    Type: AWS::Lambda::Permission
    Properties:
      Action: lambda:InvokeFunction
      FunctionName: !GetAtt PreSignUpFunction.Arn
      Principal: cognito-idp.amazonaws.com
      SourceArn: !GetAtt UserPool.Arn

  # PostConfirmationFunction
  PostConfirmationFunction:
  Type: AWS::Serverless::Function
  Properties:
    CodeUri: lambda/cognito-post-confirmation-trigger
    Handler: index.handler
    Runtime: nodejs18.x
    Architectures:
      - x86_64
  Metadata:
    BuildMethod: esbuild
    BuildProperties:
      Minify: true
      Target: "es2020"
      Sourcemap: true
      EntryPoints:
        - index.ts
  
  # Resource based policy which allows UserPool to invoke PostConfirmationFunction
  PostConfirmationFunctionResourceBasedPolicy:
    Type: AWS::Lambda::Permission
    Properties:
      Action: lambda:InvokeFunction
      FunctionName: !GetAtt PostConfirmationFunction.Arn
      Principal: cognito-idp.amazonaws.com
      SourceArn: !GetAtt UserPool.Arn
            `,
          },
          {
            text: [
              "After this, I created a PreSignUp function the SAM projects lambda folder.",
              "Here is the PreSignUp function:",
            ],
            language: "typescript",
            code: `
import { PreSignUpTriggerEvent } from "aws-lambda";

export const handler = async (event: PreSignUpTriggerEvent) => {
  event.response.autoConfirmUser = true;
  event.response.autoVerifyEmail = true;
  return event;
};
            `,
          },
          {
            text: [
              "The PreSignUp function is used to automatically confirm the user and verify their email. This is useful when you want to automatically confirm users and verify their email without having to send a confirmation code. This is not fit for production but it's useful for testing and development.",
              "- The PostConfirmation function will be created later.",
              "",
              "Following this, to integrate user authentication into the front end, we need the UserPoolId and UserPoolClientId. These are the outputs of the UserPool and UserPoolClient resources in the template.yaml file:",
            ],
            language: "yaml",
            code: `
Outputs:
  UserPoolId:
    Description: "The ID of the Cognito User Pool"
    Value: !Ref UserPool

  UserPoolClientId:
    Description: "The ID of the Cognito App Client"
    Value: !Ref UserPoolClient
            `,
          },
          {
            text: [
              "To use the UserPoolId and UserPoolClientId in the front-end, I downloaded the package amazon-cognito-identity-js and installed it into the front-end project. This package provides a way to interact with the Amazon Cognito service.",
            ],
            language: "bash",
            code: `
npm i amazon-cognito-identity-js
            `,
          },
          {
            text: [
              "Following this, the Cognito authentication was implemented in the front-end:",
            ],
            images: [
              "/day8/1.png",
              "/day8/2.png",
              "/day8/3.png",
              "/day8/4.png",
            ],
          },
          {
            text: [
              "",
              "",
              "Moving forward, 3 DynamoDB tables were created in template.yaml:",
            ],
            language: "yaml",
            code: `
Resources:
# ...
  CreditCardsTable:
    Type: AWS::DynamoDB::Table
    Properties:
      TableName: CreditCards
      AttributeDefinitions:
        - AttributeName: user_id
          AttributeType: S
        - AttributeName: nextPayment
          AttributeType: S
      KeySchema:
        - AttributeName: user_id
          KeyType: HASH # Partition key
        - AttributeName: nextPayment
          KeyType: RANGE # Sort key
      BillingMode: PAY_PER_REQUEST

  PaymentsTable:
    Type: AWS::DynamoDB::Table
    Properties:
      TableName: Payments
      AttributeDefinitions:
        - AttributeName: user_id
          AttributeType: S
        - AttributeName: date
          AttributeType: S
      KeySchema:
        - AttributeName: user_id
          KeyType: HASH # Partition key
        - AttributeName: date
          KeyType: RANGE # Sort key
      BillingMode: PAY_PER_REQUEST

  ApiKeysTable:
    Type: AWS::Serverless::SimpleTable
    Properties:
      TableName: ApiKeys
      PrimaryKey:
        Name: user_id
        Type: String
            `,
          },
          {
            text: [
              "CreditCardsTable: This DynamoDB table utilizes user_id as its partition key and nextPayment as its sort key, designed to track the status of users' credit cards, specifically whether a credit card is registered and its validity. Only simulated credit card data (true or false) will be stored, reflecting the presence and status of a credit card on file.",
              "PaymentsTable: With user_id as the partition key and date as the sort key, this table archives the payment transactions made by users. It serves as a historical record of payments, facilitating queries and analyses based on user ID and transaction dates.",
              "ApiKeysTable: This simple table, keyed by user_id, is dedicated to managing API keys assigned to users. It ensures that each user's API keys are securely stored and retrievable.",
              "",
              "Next, A custom event bus using AWS EventBridge was created in the template.yaml file:",
            ],
            language: "yaml",
            code: `
Resources:
# ...
MyEventBus:
  Type: "AWS::Events::EventBus"
  Properties:
    Name: BackendEventBus
            `,
          },
          {
            text: [
              "",
              "This is when I backtracked and wrote the code for the PostConfirmation function in the SAM projects lambda folder:",
            ],
            language: "typescript",
            code: `
import { PostConfirmationTriggerEvent } from "aws-lambda";
import {
  EventBridgeClient,
  PutEventsCommand,
  PutEventsCommandInput,
} from "@aws-sdk/client-eventbridge";

const client = new EventBridgeClient({ region: "us-east-1" });

export const handler = async (event: PostConfirmationTriggerEvent) => {
  const params: PutEventsCommandInput = {
    Entries: [
      {
        EventBusName: "BackendEventBus",
        Source: "account.created",
        DetailType: "Account Created Detail Type",
        Detail: JSON.stringify({
          user: event.userName,
          sub: event.request.userAttributes.sub,
        }),
      },
    ],
  };

  const command = new PutEventsCommand(params);

  let res: any;

  try {
    res = await client.send(command);
  } catch (error) {
    res = error;
  }

  if (typeof res === "object") {
    console.log(JSON.stringify(res));
  } else {
    console.log(res);
  }

  return event;
};
            `,
          },
          {
            text: [
              `The PostConfirmation function is used to send an "Account Created" event to the custom event bus when a user confirms their account. This event will be used to trigger a Lambda function that will create an API key for the user and store it in the ApiKeysTable.`,
              "Since the PostConfirmation function uses the AWS SDK to send an event to the custom event bus, the function needs to have the necessary permissions to do so. This is done by adding a Resource based policy to the PostConfirmation function in the template.yaml file:",
            ],
            language: "yaml",
            code: `
PostConfirmationFunctionPermissionPolicy:
Type: AWS::IAM::Policy
Properties:
  PolicyName: PostConfirmationFunctionPermissionPolicy
  PolicyDocument:
    Version: "2012-10-17"
    Statement:
      - Effect: Allow
        Action:
          - events:PutEvents
        Resource: !GetAtt MyEventBus.Arn
  Roles:
    - !Ref PostConfirmationFunctionRole # This references the automatically generated IAM role for your Lambda function by SAM.
            `,
          },
        ],
      },
      {
        subMenu: "Conclusion",
        items: [
          {
            text: [
              "This is where the review of this application ends because I refactored the backend design after this point and never got around to updating the template.yaml to reflect the new design. So from here on out, I will be working on the new design and updating the template.yaml to reflect the new design while doing my best to document the process.",
            ],
            images: ["/day8/6.png"],
          },
          {
            text: ["^ This is the current state of the application."],
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
