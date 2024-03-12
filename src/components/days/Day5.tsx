import DayLayout from "../DayLayout";
import Data from "../../types/data";

const data: Data = [
  // AWS Practice
  // {
  //   menu: "AWS Practice",
  //   content: [
  //     {
  //       subMenu: "Comments",
  //       items: [{ text: ["text1", "text2"] }],
  //     },
  //   ],
  // },
  // Learning Assignment
  {
    menu: "Learning Assignment",
    description: "Understanding Concurrency in C",
    content: [
      {
        subMenu: "Objective",
        items: [
          {
            text: [
              "Gain a fundamental understanding of parallel programming in C by exploring the creation and synchronization of threads with pthreads and mutexes, aiming to improve application efficiency through concurrency.",
            ],
          },
        ],
      },
      {
        subMenu: "Requirement",
        items: [
          {
            text: [
              `Explore thread creation with pthreads and thread synchronization using mutexes. Develop a simple program that utilizes multiple threads to perform tasks concurrently and synchronize their access to shared data. Focus on understanding the concepts of "pthreads," "thread creation," "joining threads," and "mutex synchronization."`,
            ],
          },
        ],
      },
      {
        subMenu: "Context",
        items: [
          {
            text: [
              "Concurrency is a fundamental concept in modern computing. Understanding how to create and manage threads, as well as how to synchronize their access to shared data, is crucial for building efficient and scalable applications. This assignment aims to provide a hands-on experience with parallel programming in C, which is essential for developing high-performance applications and systems.",
              "",
              "",
              "CPU Review:",
              "1. Threads: Threads are the smallest sequence of programmed instructions that can be managed independently by a scheduler. They are a way for a program to split itself into two or more simultaneously running tasks.",
              "2. Single-Core CPUs: These processors can handle one thread at a time. A thread is a sequence of instructions for the CPU to execute. So the CPU works on one thread, finishes it, and then moves on to the next.",
              "3. Multi-Core CPUs: These have multiple processing units, each able to handle its own thread. If a CPU has four cores, it can handle four threads simultaneously—one thread per core.",
              "4. Threads: A thread is just the term for the sequence of instructions a CPU can execute. It's the basic unit of work that the CPU understands and processes.",
              "5. Logical Cores: The total number of threads a CPU can handle at one time is determined by the number of logical cores. If a CPU has 4 physical cores and each can handle 2 threads at once due to SMT, then you have 8 logical cores. Therefore, this CPU can handle 8 threads simultaneously.",
              "6. Hyper-Threading: This is Intel's proprietary technology that allows a single CPU core to execute two threads at once. This is done by duplicating certain sections of the processor—those that store the architectural state—but not duplicating the main execution resources. This allows a single core to handle two threads, which can improve CPU utilization and overall performance.",
            ],
            images: ["/day5/1.png"],
          },
          {
            text: [
              "",
              "",
              "CPU Scheduling:",
              "1. Program Threads: When a program is designed to do multiple things at once, it creates threads. Each thread in a program represents a sequence of instructions that can run independently. Think of each thread as a separate task that the program wants to perform.",
              "2. CPU Threads (Logical Cores): These are the threads that the CPU can manage simultaneously. A CPU thread is essentially a pathway through which a CPU can process instructions from program threads. If the CPU has multiple threads (due to multiple cores or hyper-threading technology), it can process instructions from multiple program threads at the same time.",
              "3. Scheduling: The CPU scheduler is an essential mechanism within the operating system, tasked with the strategic execution of program threads across the CPU's threads. It allows each thread to perform its series of instructions on a CPU thread for a specified time before potentially transitioning to the next thread in line. This management ensures that the CPU's capabilities are leveraged efficiently, with the scheduler responsible for granting each program thread a fair share of CPU time, facilitating an equitable and effective processing environment.",
              "- In a single-core, single-thread CPU, the scheduler rapidly switches which thread is using the CPU, giving the illusion that multiple things are happening at once even though the CPU is only processing one sequence of instructions at a time.",
              "- In a multi-core CPU, the scheduler can assign different threads to different CPU cores, allowing multiple sequences of instructions to be processed simultaneously.",
              "",
              "",
              "Programming with More Threads than CPU Threads:",
              "If you create more threads in your program than the CPU has available, the operating system won't break; instead, it will schedule these threads over the available cores using a process called context switching. Context switching allows the CPU to switch between different process or thread contexts, thus utilizing the CPU efficiently by running multiple threads across the available cores. The operating system's scheduler manages this, ensuring that all threads get execution time.",
              "However, creating too many threads can lead to overhead from constant context switching and can diminish the benefits of multithreading. The key is to find a balance in the number of threads, which often involves profiling and testing your application.",
              "",
              "",
              "Thread Creation and Management:",
              "pthreads: POSIX threads, or pthreads, is a standard for threading in C. It allows you to create, join, and synchronize threads. Each thread in a program carries out a part of the program's workload, and they can run concurrently with other threads.",
              "Mutexes: Mutex stands for MUTual EXclusion. Mutexes are used to prevent multiple threads from accessing the same resource, like a variable or an array, at the same time. This is critical for avoiding race conditions, where the outcome depends on the sequence or timing of uncontrollable events.",
            ],
          },
        ],
      },
      {
        subMenu: "Knowledge Learned",
        items: [
          {
            text: [
              "To begin, first things first is to break down some C code:",
            ],
          },
          {
            language: "c",
            code: `
#include <stdio.h> // Provides functionalities for standard input and output operations. It also defines important macros such as NULL.
#include <stdlib.h> // Includes functions for memory allocation (e.g., malloc) and deallocation (e.g., free), as well as other utility functions (e.g., random number generation).
#include <pthread.h> // Supports multithreading with POSIX threads, enabling the creation, control, and cleanup of threads within a process.
            `,
          },
          {
            text: ["Create and initialize threads:"],
            language: "c",
            code: `
pthread_t thread1, thread2; // Declare two threads
// or
pthread_t threads[2]; // Declare an array of threads
            `,
          },
          {
            text: [
              `"pthread_t" is a data type used to uniquely identify a thread. It is an integer type, but it is not an integer. It is a unique identifier for a thread. It is used to create, control, and clean up threads.`,
              "To initialize and start the threads, you use the pthread_create function. This is where the threads are actually created and begin execution.",
              "Note: When using pthread_create, the variables for the function arguments must be passed as pointers. This is because the pthread_create function is a variadic function, meaning it can take a variable number of arguments. The function arguments are passed as pointers to void, so you need to cast them to the appropriate type within the function.",
            ],
            language: "c",
            code: `
pthread_create(&thread1, NULL, function1, NULL);
            `,
          },
          {
            text: [
              "^ The first argument is the thread identifier, the second argument is the thread attributes, the third argument is the function to be executed by the thread, and the fourth argument is the function's arguments.",
              "What this is doing is creating a new thread and assigning it to the thread1 variable. The new thread will execute the function1 function, and the function1 function will be passed NULL as its argument.",
              "Note: attr: This is a pointer to a pthread_attr_t structure that specifies thread attributes like stack size, scheduling policy, etc. If you pass NULL, the thread is created with default attributes. In many cases, the default settings are sufficient, and that's why it's common to see NULL passed for this argument.",
              "When the thread is created, it is in a state of execution. It will continue to execute until the function it is running returns or the thread is explicitly terminated.",
              "After this, you need to use the pthread_join function to clean up the threads and return the resources they were using to the system. This function also serves to wait for the threads in question to finish executing before the program continues. This is simular to Promise.all in JavaScript.",
            ],
            language: "c",
            code: `
// Wait for all threads to finish before continuing
for (int i = 0; i < NUM_THREADS; i++) {
    pthread_join(threads[i], NULL);
}
            `,
          },
          {
            text: ["", "", "Now here are those concepts put together:"],
            language: "c",
            code: `
#include <pthread.h>
#include <stdio.h>
#include <stdlib.h>

// The function that each thread will execute
// Notice that we must use a pointer for the argument
void* printNumber(void* arg) {
  int number = *((int*) arg); // Cast and dereference the argument to get the number
  printf("Number: %d\\n", number);
  return NULL; // Optionally return a value
}

int main() {
  pthread_t threads[4]; // Declare an array of threads
  int num = 45; // The number to pass to the threads

  // Create 4 threads with No special attributes, so pass NULL for the second argument
  for (int i = 0; i < 4; i++) {
    pthread_create(&threads[i], NULL, printNumber, &num);
  }

  // Wait for each of the threads to finish before continuing with the main thread.
  for (int i = 0; i < 4; i++) {
    // Pass a pointer to a 'void*' variable if you wish to capture the return value of the thread.
    // Here, we're passing NULL because we don't need the return value.    
    pthread_join(threads[i], NULL);
  }

  // The threads have finished executing, so we can continue with the main thread and end the program.
  return 0;
}
            `,
          },
          {
            text: [
              "",
              "",
              "Mutexes:",
              "As established above in the Context section, Mutexes are used to prevent multiple threads from accessing the same resource at the same time.",
              "At the most basic level, a mutex acts as a lock to synchronize access to a resource. Only one thread can lock (or own) a mutex at a time, ensuring exclusive access to that resource.",
              "Understanding mutexes took me a while, partly because of the complex language often used to describe them and the intricate examples provided. However, the concept essentially boils down to this:",
              `You declare a new variable of the "pthread_mutex_t" type to act as a mutex and then you use the function "pthread_mutex_init" to initialize it. Then, within any function that accesses shared resources, typically variables that are global or accessible across multiple threads, you employ the mutex to establish a lock. This locking mechanism prevents other threads from accessing the same resource simultaneously. In practice, this means that when a thread enters a function and locks the mutex, it gains exclusive access to the shared resource. If another thread attempts to enter the function and lock the mutex while it's already locked, it will have to wait. This waiting thread will be paused, effectively lining up in a queue, until the first thread finishes its work and unlocks the mutex. Only then can the waiting thread acquire the lock and proceed with its own access to the shared resource.`,
              "Finally, when the threads are finished and joined we must destroy the mutex to free up the resources it was using.",
              "",
              "",
              "Example through code:",
              "First create a mutex with the pthread_mutex_t data type along with a shared resource:",
            ],
            language: "c",
            code: `
pthread_mutex_t lock;
int sharedResource = 0;
            `,
          },
          {
            text: [
              "Then create a function which will use the mutex to lock and unlock the shared resource:",
            ],
            language: "c",
            code: `
// Although the function doesn't take any arguments, it still needs to return a void* type
void* increment(void* arg) {
  pthread_mutex_lock(&lock); // Lock the mutex
  sharedResource++;
  pthread_mutex_unlock(&lock); // Unlock the mutex
  return NULL;
}`,
          },
          {
            text: [
              "Finally, within the main function, initialize the mutex, create the threads, and wait for them to finish before destroying the mutex:",
            ],
            language: "c",
            code: `
// Initialize the mutex
// The second argument is a pointer to a pthread_mutexattr_t structure that specifies mutex attributes. If you pass NULL, the mutex is created with default attributes.
pthread_mutex_init(&lock, NULL);

pthread_t threads[2]; // Declare an array of threads

// Create 2 threads with No special attributes, so pass NULL for the second argument
for (int i = 0; i < 2; i++) {
  pthread_create(&threads[i], NULL, increment, NULL);
}

// Wait for each of the threads to finish before continuing with the main thread.
for (int i = 0; i < 2; i++) {
  // Will wait for each thread to finish before continuing the iteration
  pthread_join(threads[i], NULL);
}

// Clean up the mutex and free up the resources it was using
pthread_mutex_destroy(&lock);

// The threads have finished executing, so we can continue with the main thread and end the program.
return 0;
            `,
          },
          {
            text: ["", "", "Here is everything all put together:"],
            language: "c",
            code: `
#include <pthread.h>
#include <stdio.h>

// This variable will be shared by the threads
int sharedResource = 0;
// This mutex will protect the shared resource
pthread_mutex_t lock;

// This is a function which will be executed by the threads
// Callback functions for pthread_create must take a pointer argument and return a pointer (void*)
void* incrementResource(void* arg) {
  // Lock the mutex before accessing the shared resource
  // Other threads will have to wait until the mutex is unlocked before they can continue here.
  pthread_mutex_lock(&lock);
  sharedResource++;
  // Here we can cast the argument to a long type
  printf("Shared resource incremented to %d by thread %ld\\n", sharedResource, (long)arg);
  // Unlock the mutex after accessing the shared resource so that other threads can access it
  pthread_mutex_unlock(&lock);
  // Return a null pointer
  return NULL;
}

// The main function
int main() {
  // Initialize the mutex
  pthread_mutex_init(&lock, NULL);

  // Declare two threads
  pthread_t threads[2];

  // Create threads
  for (long i = 0; i < 2; i++) {
    // The function argument must be cast to a void* type
    pthread_create(&threads[i], NULL, incrementResource, (void*)i);
  }

  // Wait for the threads to finish
  for (int i = 0; i < 2; i++) {
    pthread_join(threads[i], NULL);
  }

  // Clean up the mutex and free up the resources it was using
  pthread_mutex_destroy(&lock);

  // Final value of shared resource
  printf("Final value of shared resource is %d\\n", sharedResource);

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
    description: "Linked list practice with C",
    content: [
      {
        subMenu: "206. Reverse Linked List" as "Objective",
        items: [
          {
            text: [
              "Given the head of a singly linked list, reverse the list, and return the reversed list.",
            ],
            images: ["/day5/2.png"],
          },
          {
            text: [
              "",
              "",
              "Note: In my examples, I've chosen to use ((void*)0) directly instead of NULL for null pointers. This decision stems from understanding that NULL is a macro, typically defined as a null pointer constant, which can be either 0 or (void*)0 depending on the implementation. My preference for ((void*)0) is a deliberate practice to deepen my familiarity with C's handling of pointers and null values. This approach is a bit more explicit and serves as a reminder of the typeless pointer concept in C.",
              "C Solution:",
            ],
            language: "c",
            code: `
struct ListNode *reverseList(struct ListNode *head) {
  struct ListNode *prev = ((void *)0);
  struct ListNode *current = head;
  struct ListNode *next = ((void *)0);

  while (current != ((void *)0)) {
    next = current->next;
    current->next = prev;
    prev = current;
    current = next;
  }
  return prev;
}
            `,
          },
        ],
      },
      {
        subMenu: "21. Merge Two Sorted Lists" as "Objective",
        items: [
          {
            text: [
              "You are given the heads of two sorted linked lists list1 and list2.",
              "Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.",
              "Return the head of the merged linked list.",
            ],
            images: ["/day5/3.png"],
          },
          {
            text: ["", "", "C Solution:"],
            language: "c",
            code: `
struct ListNode *mergeTwoLists(struct ListNode *list1, struct ListNode *list2) {
  // base case
  if (list1 == NULL) {
    return list2;
  }
  if (list2 == NULL) {
    return list1;
  }
  // Create a new list to store the merged list
  struct ListNode *head = (struct ListNode *)malloc(sizeof(struct ListNode));
  // Create a pointer to the head of the new list
  struct ListNode *p = head;
  // While the pointers to the two lists are not null
  while (list1 && list2) {
    // If the value of the first list is less than the value of the second list
    if (list1->val < list2->val) {
      // Set the next pointer of the new list to the value of the first list
      p->next = list1;
      // Move the pointer of the first list to the next value
      list1 = list1->next;
    }
    else {
      // Set the next pointer of the new list to the value of the second list
      p->next = list2;
      // Move the pointer of the second list to the next value
      list2 = list2->next;
    }
    // Move the pointer of the new list to the next value
    p = p->next;
  }
  // If the first list is not null, set the next pointer of the new list to the first list
  p->next = list1 ? list1 : list2;
  // Return the next pointer of the new list
  return head->next;
}
            `,
          },
          {
            text: [
              "",
              "",
              "Furthermore, I decided to also solve it in TypeScript:",
            ],
            language: "typescript",
            code: `
function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  if (list1 === null) return list2;
  if (list2 === null) return list1;
  const mergedList: ListNode = { val: 0, next: null };
  let current = mergedList;
  while (list1 && list2) {
    if (list1.val < list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }
  return mergedList.next;
}`,
          },
        ],
      },
    ],
  },
  // Portfolio Work
  {
    menu: "Portfolio Work",
    description: "SocketChat ~ Finished Demonstration",
    content: [
      {
        subMenu: "Summary",
        items: [
          {
            text: [
              "This project turned out to be incredibly cool. What it does is create a chatroom with a Next.js frontend and a Socket.io server backend. When you land on the page, you're prompted to enter a username and then select an avatar. Once you're in, you can chat with others in real time. You can click on a user to enter into a private chat with them. When you private message someone, they will get a notification. The app also allows for quickly switching between private chats and the main chatroom, watching your private messages update in real time, seeing who is online, searching for messages, sending images, and URL previews. Adding to the versatility, users can quickly delete their session and change their username and avatar, reentering the chat as someone new. This added flexibility makes the chat experience even more dynamic and engaging.",
              "To top it off, deploying this app on AWS is streamlined through an EC2 user data script. This script handles everything from system updates and Docker installation to cloning the project and setting up environmental variables automatically. It essentially allows for an almost auto-deployment of the app, making it accessible to a wider audience without the hassle of manual setup. Building this chat app was a lot of fun and a fantastic learning experience, especially in the realms of websockets and real-time communication.",
              "",

              "Github Repository: https://github.com/drmatt13/SocketChat",
            ],
          },
        ],
      },
      {
        subMenu: "Video",
        items: [
          {
            text: [""],
            video: "/day5/1.mkv",
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
