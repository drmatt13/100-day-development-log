import DayLayout from "../DayLayout";
import Data from "../../types/data";

const data: Data = [
  // AWS Practice
  {
    menu: "AWS Practice",
    description: "Polices and Roles",
    content: [
      {
        subMenu: "Concepts Review",
        items: [
          { images: ["/day10/1.png"] },
          {
            text: [
              "^ An original diagram I made A little while back when I was studying for the AWS Associate level exams.",
              "I figured since I'm diving back into a huge AWS CloudFormation project after a break with the SAM framework, I should do a refresher on IAM Policies, Roles, and Resource-Based Policies because they are applied extensively when creating CloudFormation templates. I ran through and broke down every IAM concept I could think of with ChatGPT and realized that I more or less already have a solid grasp of the concepts.",
            ],
          },
        ],
      },
    ],
  },
  // Learning Assignment
  {
    menu: "Learning Assignment",
    description: "C++ Build Systems: Makefiles, CMake",
    content: [
      {
        subMenu: "Objective",
        items: [
          {
            text: [
              "Understanding build systems is crucial for compiling and linking large C++ projects efficiently.",
            ],
          },
        ],
      },
      {
        subMenu: "Requirement",
        items: [
          {
            text: [
              "Research Makefiles and CMake, then create a simple C++ project with multiple files. Use a Makefile to manually specify build rules and convert the project to use CMake, observing the differences in build configuration and management.",
            ],
          },
        ],
      },
      {
        subMenu: "Knowledge Learned",
        items: [
          {
            text: [
              "CMake is a powerful, cross-platform build system generator widely used for C++ projects (though it supports other languages too). It automates the compilation and linking process, making it easier to manage complex projects across different platforms and compilers.",
              "",
              "Key Concepts:",
              "Out-of-Source Builds: CMake encourages creating build files in a separate directory from the source code, keeping the source tree clean.",
              "Cross-Platform: Generates build systems for the platform you're working on. For instance, it can produce Makefiles on Unix-like systems and Visual Studio projects on Windows.",
              "Configuration Files: Uses CMakeLists.txt files placed in the project directory (and optionally in subdirectories) to define build instructions.",
              "",
              "Basic Workflow:",
              "1. Writing CMakeLists.txt: This file contains commands that tell CMake how to build your project. It includes defining the project name, required C++ standard, executable and target libraries, and any dependencies.",
              "Example of a simple CMakeLists.txt:",
            ],
          },
          {
            language: "plaintext",
            code: `
cmake_minimum_required(VERSION 3.10) # Specify the minimum version of CMake
project(MyProject) # Define the project name

set(CMAKE_CXX_STANDARD 17) # Specify the C++ standard

# Add an executable target from specified source files
add_executable(myapp main.cpp)            
            `,
          },
          {
            text: [
              "",
              "2. Generating Build System: Run CMake to configure your project and generate platform-specific build files. This step is done from a build directory, typically created inside your project directory:",
            ],
            language: "bash",
            code: `
mkdir build
cd build
cmake ..
`,
          },
          {
            text: [
              "",
              "3. Building the Project: Use the generated build system to compile and link your project. The exact command depends on the build system CMake generated. For Makefiles, you would run:",
            ],
            language: "bash",
            code: `
make
`,
          },
          {
            text: [
              "",
              "Advantages:",
              "- Modularization: Supports dividing your project into logical units, making it easier to manage and reuse code.",
              "- Find Packages: CMake can find and include libraries and headers outside your project, simplifying dependency management.",
              "- Platform Abstraction: You don’t need to write platform-specific build scripts. Write once in CMakeLists.txt, and CMake handles the rest, whether you’re on Windows, Linux, or macOS.",
              "- Customizable: Offers a range of options and commands to customize the build process, fitting both simple and complex project needs.",
            ],
          },
        ],
      },
    ],
  },
  // LeetCode
  {
    menu: "LeetCode",
    description: "Two Easy Tree Problems In C",
    content: [
      {
        subMenu: "100. Same Tree" as "Objective",
        items: [
          {
            text: [
              "Given the roots of two binary trees p and q, write a function to check if they are the same or not.",
              "Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.",
              "C solution:",
            ],
            language: "c",
            code: `
#include <stdio.h>
#include <stdbool.h>

struct TreeNode {
  int val;
  struct TreeNode *left;
  struct TreeNode *right;
};

bool isSameTree(struct TreeNode* p, struct TreeNode* q) {
  // if both are NULL, return true
  if (p == NULL && q == NULL) {
    return true;
  }
  // if one of them is NULL, return false
  if (p == NULL || q == NULL) {
    return false;
  }
  // if the value of the nodes are different, return false
  if (p->val != q->val) {
    return false;
  }
  // recursively check the left and right nodes
  return isSameTree(p->left, q->left) && isSameTree(p->right, q->right);
}
            `,
          },
        ],
      },
      {
        subMenu: "572. Subtree of Another Tree" as "Objective",
        items: [
          {
            text: [
              "Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.",
              "A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants. The tree tree could also be considered as a subtree of itself.",
              "C solution:",
            ],
            language: "c",
            code: `
#include <stdio.h>
#include <stdbool.h>

struct TreeNode {
  int val;
  struct TreeNode *left;
  struct TreeNode *right;
};

bool isSubtree(struct TreeNode* root, struct TreeNode* subRoot) {
  // Check if two trees are the same
  if (root == NULL) {
    return false;
  }
  // Check if two trees are the same
  if (isSameTree(root, subRoot)) {
    return true;
  }
  // Check if two trees are the same
  return isSubtree(root->left, subRoot) || isSubtree(root->right, subRoot);
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
    description: "API Access Rate Architect Full-Stack IaC - Part 3",
    content: [
      {
        subMenu: "Context",
        items: [
          {
            images: ["/day9/1.png"],
          },
          {
            text: [
              "^ Yesterday I had a little trouble building out this functionality of my designs architecture while running short of time to get it working.",
              "",
              "Today I want right into debugging, starting from the invoked EventBridge rule:",
            ],
            images: ["/day10/2.png"],
          },
          {
            text: [
              "^ The rule was correctly invoked, but the SQS was denying the event via insufficient permissions. So I went ahead and updated the resource policy of the SQS queue to allow the EventBridge rule to send messages to the queue.",
              "",
              "Next, I checked CloudWatch logs to see if the SQS message was being received and processed by the Lambda function:",
            ],
            images: ["/day10/3.png"],
          },
          {
            text: [
              "^ When a log group doesn't exist, it means that the Lambda function hasn't been invoked yet. This meant that the SQS message wasn't being sent to the Lambda function.",
              "So I went ahead and manually checked the SQS queue:",
            ],
            images: ["/day10/4.png"],
          },
          {
            text: [
              "^ So from the queue, I could see that the message was being sent to the queue, but the PutEvent was failing. This was due to an error with the way I handled refactoring the CloudFormation resource names.",
              "",
              "After making sure my CloudFormaion resource names were correctly refactored, I went ahead and tested and observed a successful invocation of the Lambda function:",
            ],
            images: ["/day10/5.png"],
          },
          {
            text: [
              "^ And then I learned there were errors with the Lambda function itself. Before my refactor, the Lambda function was directly processing events from EventBridge, but now it was processing events from the SQS queue. My first attempt at implementing this change was unsuccessful. Using these logs, I was able to identify the issue and fix it.",
            ],
          },
        ],
      },
      {
        subMenu: "Work Done",
        items: [
          { images: ["/day9/1.png"] },
          {
            text: [
              `^ So going from left to right which is in order of the asynchronous flow. First I created an EventBridge Rule for "Account Created" events and created an SQS queue to receive the events.`,
            ],
            language: "yaml",
            code: `
AccountCreatedRule:
  Type: "AWS::Events::Rule"
  Properties:
    EventBusName: !Ref EventBus
    EventPattern:
      source:
        - "account.created"
    Targets:
      - Id: "TargetSQS"
        Arn: !GetAtt EditAccountApiKeyQueue.Arn
        
EditAccountApiKeyQueue:
  Type: AWS::SQS::Queue
  Properties:
    QueueName: EditAccountApiKeyQueue
    VisibilityTimeout: 70
    
EditAccountApiKeyQueuePolicy:
  Type: "AWS::SQS::QueuePolicy"
  Properties:
    Queues:
      - !Ref EditAccountApiKeyQueue
    PolicyDocument:
      Version: "2012-10-17"
      Statement:
        - Effect: "Allow"
          Principal:
            Service: "events.amazonaws.com"
          Action:
            - "sqs:SendMessage"
          Resource: !GetAtt EditAccountApiKeyQueue.Arn
            `,
          },
          {
            text: [
              "",
              `Following this, I created a Dead Letter Queue to handle failed Lambda invocations and then created the Lambda function:`,
            ],
            language: "yaml",
            code: `
EditAccountApiKeyDLQ:
  Type: AWS::SQS::Queue
  Properties:
    QueueName: EditAccountApiKeyDLQ

EditAccountAPIKeyFunction:
Type: AWS::Serverless::Function
Properties:
  Timeout: 60
  CodeUri: lambda/edit-account-api-key
  Handler: index.handler
  Runtime: nodejs18.x
  Architectures:
    - x86_64
  Events:
    SQSEvent:
      Type: SQS
      Properties:
        Queue: !GetAtt EditAccountApiKeyQueue.Arn
        BatchSize: 10
  DeadLetterQueue:
    Type: SQS
    TargetArn: !GetAtt EditAccountApiKeyDLQ.Arn
Metadata:
  BuildMethod: esbuild
  BuildProperties:
    Minify: true
    Target: "es2020"
    Sourcemap: true
    EntryPoints:
      - index.ts
            `,
          },
          {
            text: [
              "^ Note that when you define an SQS event source for a Lambda function in an AWS SAM template, SAM automatically creates an IAM role with the necessary permissions for the Lambda function to poll the SQS queue and write to the Dead Letter Queue (DLQ). This simplifies the setup process by abstracting away the explicit creation and management of IAM policies for these specific resources.",
              "",
              "Next, I created a Permission Policy for the EditAccountAPIKey functions role to allow it to create and update items in the DynamoDB ApiKeys table:",
            ],
            language: "yaml",
            code: `
EditAccountAPIKeyFunctionPermissionPolicy:
  Type: AWS::IAM::Policy
  Properties:
    PolicyName: EditAccountAPIKeyFunctionPermissionPolicy
    PolicyDocument:
      Version: "2012-10-17"
      Statement:
        - Effect: Allow
          Action:
            - dynamodb:PutItem
            - dynamodb:UpdateItem
          Resource: !GetAtt ApiKeysTable.Arn
    Roles:
      - !Ref EditAccountAPIKeyFunctionRole # This references the automatically generated IAM role for your Lambda function by SAM.
            `,
          },
          {
            text: ["", "Next here is the EditAccountApiKey Lambda function:"],
            language: "typescript",
            code: `
import { SQSEvent } from "aws-lambda";
import { DynamoDBClient, PutItemCommand } from "@aws-sdk/client-dynamodb";
import { v4 as uuidv4 } from "uuid";

const dynamoClient = new DynamoDBClient({ region: "us-east-1" });

export const handler = async (event: SQSEvent) => {
  console.log("Received SQS event:", JSON.stringify(event));

  //
  for (const record of event.Records) {
    // Parse the message body, which contains the EventBridge event
    const messageBody = JSON.parse(record.body);
    console.log("Processing message:", messageBody);

    // Assuming the EventBridge event structure is preserved in the SQS message body
    if (messageBody["source"] === "account.created") {
      // Extract data from the EventBridge event detail
      const { sub } = messageBody.detail;

      // Generate a unique API key and set other default values
      const apiKey = uuidv4(); // A function to generate a unique API key

      const params = {
        TableName: "ApiKeys",
        Item: {
          user_id: { S: sub },
          api_key: { S: apiKey },
          tier: { S: "free" },
        },
      };

      try {
        await dynamoClient.send(new PutItemCommand(params));
        console.log("API key inserted successfully");
      } catch (error) {
        console.error("Error inserting API key:", error);
      }
    } else {
      console.log("Skipping non-account.created event.");
    }
  }
};
            `,
          },
          {
            text: [
              "^ This code will eventually need to be updated to handle modifying API keys as well as creating them. But for now, this is fine.",
              "",
              "Next, I updated my architecture design to include an additional DLQ for the Cognito post-confirmation trigger Lambda function:",
            ],
            images: ["/day10/7.png"],
          },
          {
            text: [
              "Then I went ahead and created the DLQ and updated the Lambda function to use it:",
            ],
            language: "yaml",
            code: `
PostConfirmationDLQ:
  Type: AWS::SQS::Queue
  Properties:
    QueueName: PostConfirmationDLQ

PostConfirmationFunction:
  Type: AWS::Serverless::Function
  Properties:
    CodeUri: lambda/cognito-post-confirmation-trigger
    Handler: index.handler
    Runtime: nodejs18.x
    Architectures:
      - x86_64
    DeadLetterQueue:
    Type: SQS
    TargetArn: !GetAtt PostConfirmationDLQ.Arn
  Metadata:
    BuildMethod: esbuild
    BuildProperties:
      Minify: true
      Target: "es2020"
      Sourcemap: true
      EntryPoints:
        - index.ts
            `,
          },
        ],
      },
      {
        subMenu: "Summary",
        items: [
          {
            images: ["/day10/8.png"],
          },
          {
            text: [
              "^ At this point and time, this is the current state of my architecture.",
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
