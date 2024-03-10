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
    description: "SocketChat ~ Continued",
    content: [
      {
        subMenu: "Notes",
        items: [
          {
            text: [
              "Note: It's important not to take a long break from your project if you're in the middle of developing a complicated feature. If you pause for too long, you'll face the tough task of rapidly re-familiarizing yourself with the intricate parts of the code.",
              "Additional Note: I don't expect this section to be entirely clear to follow along with this because I  started this project before I started this dev blog and I wouldnt know where to begin to explain the entire project in a single post. I'm just going to try to explain the parts I'm working on.",
            ],
          },
        ],
      },
      {
        subMenu: "Code",
        items: [
          {
            text: [
              `I'm working on adding functionality to mark private messages as 'seen' or 'read'. However, I've found that managing the 'seen' and 'read' state names in React can become confusing quickly from a logical standpoint. This is because the message's sender and receiver can be either "you" or "them".`,
              "So first things first, I updated the state to reflect a new naming convention that is more clear and concise.",
              "~ Previous private message state structure: ",
            ],
            language: "typescript",
            code: `
const [privateMessages, setPrivateMessages] = useState<{
  [id: string]: {
    user: User;
    messages: Message[];
    seen: boolean;
    read: boolean;
  };
}>({});
            `,
          },
          {
            text: ["~ New private message state structure:"],
            language: "typescript",
            code: `
const [privateMessages, setPrivateMessages] = useState<{
  [id: string]: {
    user: User;
    messages: Message[];
    ISeenTheirMessage: number;
    TheyReadMyMessage: number;
  };
}>({});
            `,
          },
          {
            text: [
              "^ Then I realized that 'ISeenTheirMessage' and 'TheyReadMyMessage' should use numbers instead of booleans to timestamp the last time the message was seen or read. This will allow me to compare the time the message was sent/received to the time the message was seen or read and display the time in a human-readable format. In my experience, It's always best to make use of TypeScript and create clear and concise properties and event names with corresponding types to avoid confusion and bugs later on, even if it means a little extra work and redundancy upfront.",
              "Thanks to TypeScript's powerful feature of highlighting errors directly in the GUI, I can easily do a quick refactor and update the privateMessages objects key names across my application before I start implementing the new functionality.",
            ],
            images: ["/day3/9.png", "/day3/10.png"],
          },
          {
            text: [
              "^ Errors like this are popping up everywhere, which is to be expected after you modify a type definition.",
            ],
            images: [],
          },
          {
            text: [
              "Jumping back into a complex feature after a break highlights the nuanced landscape of my work. I'm currently navigating through an intricate setup involving multiple components and hooks, notably the 'privateMessages/setPrivateMessages' state, alongside a custom socket hook and a global context. This setup is designed to streamline socket functionalities to the messenger and chat components, all while ensuring seamless integration with a dedicated socket server. It's a process of reacquainting with the system, refining as necessary, and progressively adding new functionalities. This approach exemplifies the balance between understanding existing frameworks, implementing refinements, and advancing the project's capabilities in a professional and methodical manner.",
              "------",
              "I went ahead and added a listener for a read event in the SocketIO server. It uses some logic to determine if the message has no recipient, if the recipient is not in the active users list, or if the recipient is the sender. If any of these conditions are met, the server will return. Otherwise, it will emit a read event to the other user.",
            ],
            language: "typescript",
            code: `
socket.on("read", (recipientId: string) => {
  // if the message has no recipient
  // or the recipient is not in the active users list
  // or if somehow (you) are trying to read a message from yourself
  // then return
  if (!recipientId || !activeUsers[recipientId] || recipientId === socket.id)
    return;

  // emit to the other user that (you) read their last message
  io.to(recipientId).emit("read", socket.id);
});
            `,
          },
          {
            text: [
              "------",
              "Next I need to to implement the 'read' functionality on the client side which will be a bit more complicated than the SocketIO implementation on the server side.",
              "So let me start by breaking down some of the pre-established code/logic for handling sending and receiving a message.",
              "~ Sending a message from the client via 'socket.io-client':",
            ],
            language: "typescript",
            code: `
const submitMessage = useCallback(
  (message: Message) => socketConnection?.emit("message", message),
  [socketConnection]
);
            `,
          },
          {
            text: [
              "~ Receiving a message on the SocketIO server and forwarding that message back to the respective clients:",
            ],

            language: "typescript",
            code: `
socket.on("message", async (message: Message) => {
  // The server caches actice users locally "If i ever decide to scale this I'll need to use Redis or something similar"
  // Check if the sender is online and if the message is valid
  if (
    !activeUsers[socket.id] ||
    (!message.text && !message.image && !message.url)
  ) {
    return;
  }

  // There was more logic here to generate a thumbnail for the message if applicable but I'm just going to show the part that emits the message to the recipient for simplicity

  // If the message is not a private message, emit it to everyone
  if (!message.recipient) io.emit("message", message);

  // If the message is a private message, emit it to the sender and recipient
  // Unless the recipient is the sender, then only emit it to the sender
  if (message.recipient) {
    io.to(socket.id).emit("message", message);
    message.recipient.id &&
      socket.id !== message.recipient.id &&
      io.to(message.recipient.id).emit("message", message);
  }
});
            `,
          },
          {
            text: [
              "~ Receiving the forwarded message back on the client and updating state:",
            ],
            language: "typescript",
            code: `
socketConnection.on("message", (message: Message) => {
  if (!message.recipient) {
    if (!chatIdRef.current) playSound("/discord-notification.mp3");
    setGlobalMessages((prev) => {
      return [...prev, message];
    });
  }

  if (message.recipient) {
    const privateMessageId =
    message.sender.id === socketConnection.id
    ? message.recipient.id!
    : message.sender.id!;
    // this means that the frontend user is currently in the same private chatroom as the message sender
    if (chatIdRef.current === privateMessageId)
      playSound("/discord-notification.mp3");
    // Pro React tip: use the callback version of setState when you need to update state based on the previous state
    setPrivateMessages((prev) => {
      const newPrivateMessages = { ...prev };
      if (!newPrivateMessages[privateMessageId])
        newPrivateMessages[privateMessageId] = {
          user: message.sender,
          messages: [],
        };
      newPrivateMessages[privateMessageId].messages.push(message);
      return newPrivateMessages;
    });
  }
});
            `,
          },
          {
            text: [
              "------",
              "Now to update the client side and add the 'read' functionality.",
              "~ Firstly I created a useEffect hook to send a 'read' event to the SocketIO server if the user receives a private message while in the same chatroom or switches to that chatroom and hasn't lead the latest message:",
            ],
            language: "typescript",
            code: `
useEffect(() => {
  // if i didnt read their last message, then i want to emit that i read their last message
  if (chatId && privateMessages[chatId].messages.length > 0) {
    if (!privateMessages[chatId].IReadTheirLastMessage) {
      setPrivateMessages((prev) => ({
        ...prev,
        [chatId]: {
          ...prev[chatId],
          IReadTheirLastMessage: Date.now(),
        },
      }));
      // emit to the server that (you) read the message
      socketConnection?.emit("read", chatId);
    }
  }
}, [chatId, privateMessages, socketConnection]);
`,
          },
          {
            text: [
              "~ Then I added a listener for the 'read' event on the client side:",
            ],
            language: "typescript",
            code: `
socketConnection.on("read", (senderId: string) => {
  setPrivateMessages((prev) => {
    const newPrivateMessages = { ...prev };
    if (!newPrivateMessages[senderId!])
      newPrivateMessages[senderId!] = {
        user,
        messages: [],
        IReadTheirLastMessage: 0,
        TheyReadMyLastMessage: 0,
      };
    newPrivateMessages[senderId!].IReadTheirLastMessage =
      newPrivateMessages[senderId!]?.IReadTheirLastMessage || 0;
    newPrivateMessages[senderId!].TheyReadMyLastMessage = Date.now();
    return newPrivateMessages;
  });
});
`,
          },
          {
            text: [
              "~ Then I updated the client side logic which handles receiving a message to logically update the 'TheyReadMyLastMessage' property of the privateMessages object:",
            ],
            language: "typescript",
            code: `
socketConnection.on("message", (message: Message) => {
  if (!message.recipient) {
    if (!chatIdRef.current) playSound("/discord-notification.mp3");
    setGlobalMessages((prev) => {
      return [...prev, message];
    });
  }

  if (message.recipient) {
    const privateMessageId =
      message.sender.id === socketConnection.id
        ? message.recipient.id!
        : message.sender.id!;
    // this means that the frontend user is currently in the same private chatroom as the message sender
    if (chatIdRef.current === privateMessageId)
      playSound("/discord-notification.mp3");
    // Pro React tip: use the callback version of setState when you need to update state based on the previous state
    setPrivateMessages((prev) => {
      const newPrivateMessages = { ...prev };
      if (!newPrivateMessages[privateMessageId])
        newPrivateMessages[privateMessageId] = {
          user: message.sender,
          messages: [],
          // if the user (you) are in the chat then they (you) must have read the last message
          // very situational because (you) will have to be in the private chat when receiving the first message from the other user
          IReadTheirLastMessage:
            chatIdRef.current === privateMessageId ? Date.now() : 0,
          // if (you) didnt send the last message then the sender would have had to have read my last message by default
          TheyReadMyLastMessage:
            message.sender.id !== socketConnection.id ? Date.now() : 0,
        };
      newPrivateMessages[privateMessageId].messages.push(message);
      // if the user (you) are in the chat then they (you) must have read the last message
      if (chatIdRef.current === privateMessageId) {
        newPrivateMessages[privateMessageId].IReadTheirLastMessage =
          Date.now();
        // emit that (you) read their last message unless (you) sent the last message
        if (message.sender.id !== socketConnection.id)
          socketConnection.emit("read", message.sender.id);
      } else {
        newPrivateMessages[privateMessageId].IReadTheirLastMessage = 0;
      }
      return newPrivateMessages;
    });
  }
});
`,
          },
          {
            text: [
              "~ Then I updated the Navbars message component to logically display the 'seen' and 'read' states:",
            ],
            language: "typescript",
            code: `
const Messages = () => {
  const {
    modal,
    setModal,
    privateMessages,
    darkMode,
    mobile,
    activeUsers,
    setChatId,
    user,
  } = useContext(AppContext);

  const [messages, setMessages] = useState<
    Array<(typeof privateMessages)[string]>
  >(
    Object.entries(privateMessages)
      .map(([id, data]) => data)
      .filter(
        (data) =>
          data.messages.length > 1 ||
          (data.messages.length === 1 && !data.messages[0].exiting)
      )
  );

  useEffect(() => {
    setMessages((prev) =>
      Object.entries(privateMessages)
        .map(([id, data]) => data)
        .filter(
          (data) =>
            data.messages.length > 1 ||
            (data.messages.length === 1 && !data.messages[0].exiting)
        )
    );
  }, [privateMessages]);

  return (
    <ModalMenu
      active={modal === "messages"}
      closeMenu={() => setModal(undefined)}
      side="right"
    >
      {/* <div className="w-72 sm:w-[22rem] h-96"> */}
      {messages.length === 0 ? (
        <div className="text-xs sm:text-sm text-center pb-1 sm:pb-2 pt-2 sm:pt-3 my-2 opacity-80 dark:opacity-70 w-72 sm:w-[22rem]">
          Your inbox is empty 😔
        </div>
      ) : (
        <>
          <div className="text-xs sm:text-sm text-center underline pb-1 sm:pb-2 pt-2 sm:pt-3 my-2 opacity-80 dark:opacity-70 w-72 sm:w-[22rem]">
            Messages
          </div>

          <div
            className="overflow-y-auto overflow-x-hidden pl-4 pr-5 sm:pl-3 sm:pr-4 mb-2.5 sm:mb-3.5 mr-2.5 h-max flex flex-col w-72 sm:w-[22rem]"
          >
            {messages.map((message, i) => (
              <div
                key={message.user.id}
                className="relative items-start mb-2.5 sm:mb-3 last-of-type:mb-0 group cursor-pointer flex group w-max max-w-full"
                onClick={() => {
                  setChatId(message.user.id);
                  setModal(undefined);
                }}
              >
                <div className="relative shrink-0">
                  <img
                    className="h-8 w-8 rounded-full shadow-xl border border-black/20 dark:border-white/05"
                    src={\`data:image/jpg;base64, \${
                      avatarList[message.user.avatar ? message.user.avatar : 0]
                    }\`}
                    alt="activeUser avatar"
                  />
                  <div
                    className={\`\${
                      activeUsers[message.user.id!]
                        ? "bg-green-500 dark:border-green-600 dark:border-2 border-green-600"
                        : "bg-red-500 border-red-900 dark:border-red-800"
                    } absolute top-[1.5rem] right-0 w-[.5rem] h-[.5rem] rounded-full border\`}
                  />
                </div>

                <div className="ml-2 flex flex-col items-start justify-center min-w-28 overflow-hidden w-max">
                  <div
                    className={\`\${
                      mobile
                        ? "group-active:opacity-100"
                        : "group-hover:opacity-100"
                    } relative opacity-75 dark:opacity-75 flex-1 w-full flex flex-col px-3 py-2 bg-white dark:bg-zinc-700 rounded-lg\`}
                  >
                    <div
                      className={\`w-full h-full absolute top-0 left-0 rounded-lg /shadow border border-gray-800/20 /border-red-700 /dark:border-red-500 /bg-red-600/15 pointer-events-none\`}
                    />
                    <div
                      className={\`w-max text-xs underline text-black/85 dark:text-white opacity-90 dark:opacity-75 cursor-pointer pr-4\`}
                    >
                      {message.user.name}
                    </div>
                    <div className="w-full">
                      <p className="mt-[.4rem] sm:mt-[.2rem] text-xs sm:text-sm truncate">
                        {message.messages[message.messages.length - 1].exiting
                          ? message.messages[message.messages.length - 2].sender
                              .id === user?.id
                            ? \`You: \${
                                message.messages[message.messages.length - 2]
                                  .text || "sent a photo"
                              }\`
                            : \`\${
                                message.messages[message.messages.length - 2]
                                  .text || "Sent a photo"
                              }\`
                          : message.messages[message.messages.length - 1].sender
                              .id === user?.id
                          ? \`You: \${
                              message.messages[message.messages.length - 1]
                                .text || "sent a photo"
                            }\`
                          : \`\${
                              message.messages[message.messages.length - 1]
                                .text || "Sent a photo"
                            }\`}
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className={\`\${
                    mobile
                      ? "group-active:opacity-100"
                      : "group-hover:opacity-100"
                  } opacity-60 dark:opacity-75 pl-2.5 h-full flex flex-col justify-center shrink-0\`}
                >
                  <div className="h-max dark:text-white/75 text-xs shadow-xl">
                    {formatTimestampToTime(
                      message.messages[message.messages.length - 1].exiting
                        ? message.messages[message.messages.length - 2]
                            .timestamp
                        : message.messages[message.messages.length - 1]
                            .timestamp
                    )}
                  </div>
                  <div className="h-max dark:text-white/75 text-xs shadow-xl mt-1.5">
                    {message.messages[message.messages.length - 1].sender.id ===
                    user?.id
                      ? // if the last message was sent by the me, compare the time they read my last message and the timestamp from the last message
                        privateMessages[message.user.id!]
                          .TheyReadMyLastMessage >
                        message.messages[message.messages.length - 1].timestamp
                        ? "Seen"
                        : "Unseen"
                      : // if the last message was sent by the other user
                      privateMessages[message.user.id!].IReadTheirLastMessage >
                        0
                      ? "Read"
                      : "Unread"}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
      {/* </div> */}
    </ModalMenu>
  );
};
`,
          },
          {
            text: [
              "Finally, here is a visual representation of the 'seen' and 'read' states:",
            ],
            images: ["/day3/11.png"],
          },
        ],
      },
      {
        subMenu: "Comments",
        items: [
          {
            text: [
              "Now that all of the major functionality has been implemented, I'm left with just a few minor UI enhancements to make. I've only shared a glimpse into the development process here because I began documenting this project well into its development phase. The upcoming adjustments, though essential, are finer details that round off the project rather than define it.",
            ],
          },
        ],
      },
    ],
  },
  {
    menu: "Portfolio Work",
    description: "Code Display Overflowing",
    content: [
      {
        subMenu: "Comments",
        items: [
          {
            text: [
              "I know I said I wasn't going to comment much on the development of this website but I noticed when dynamically creating code snippets, the code containers can overflow their parent containers. One thing I try to do when prototyping and creating layouts is to make sure that every element is responsive, tested, and created correctly to minimize the amount of time needed to spend on it later. There is a lot of JSX nested between a few different components and flexbox is primarily used for layout. I attempted to quickly perform a hot fix for this but it appears I'm going to have to go up the DOM tree (or VDOM if you will) and thoroughly traverse down through the elements one at a time to determine what CSS issue. I'm going to have to do this some other day when I feel like it because sometimes CSS can be annoying and I just don't feel like addressing it right now. By the time (you) who are reading this, this will be fixed.",
            ],
            images: ["/day3/7.png", "/day3/8.png"],
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
