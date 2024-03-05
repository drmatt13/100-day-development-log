// import DOMPurify from "dompurify";
import { useEffect, useState } from "react";
import hljs from "highlight.js";
import Button from "./Button";

import type Data from "../types/data";

// function escapeHtml(text: string): string {
//   const characterMap: { [key: string]: string } = {
//     "&": "&amp;",
//     "<": "&lt;",
//     ">": "&gt;",
//     '"': "&quot;",
//     "'": "&#39;",
//   };
//   return text.replace(
//     /[&<>"']/g,
//     (character) => characterMap[character] || character
//   );
// }

const DayLayout = ({ data }: { data: Data }) => {
  const [isOpen, setIsOpen] = useState<boolean[]>([]);

  // hljs.registerLanguage("javascript", javascript);

  useEffect(() => {
    if (data.length === isOpen.length) return;
    const arr: boolean[] = [];
    data.forEach(() => {
      arr.push(false);
    });
    setIsOpen(arr);
  }, [data, isOpen.length]);

  return (
    <div>
      {data.map((item, index) => (
        <div key={index} className="flex">
          <div className="w-12 flex flex-col shrink-0">
            <div className="relative h-16 flex">
              <div
                className={`${
                  index !== data.length - 1 && "h-2"
                } absolute bottom-0 left-3 w-3 border-gray-400 border-l`}
              ></div>
              <div className="ml-3 h-full w-[72.5%] border-gray-400 border-l border-b rounded-bl-lg"></div>
            </div>
            {index !== data.length - 1 && (
              <div className="w-12 flex-1 flex">
                <div className="ml-3 w-3 h-full border-gray-400 border-l"></div>
              </div>
            )}
          </div>

          <div className="flex flex-col mt-12">
            <div className="flex items-center">
              <Button
                isOpen={Boolean(isOpen[index])}
                setIsOpen={() =>
                  setIsOpen((prev) =>
                    prev.map((_, i) => (i === index ? !prev[i] : prev[i]))
                  )
                }
              />
              <p className="text-lg font-bold">
                {item.title}
                {item.description && <span>: {item.description}</span>}
              </p>
            </div>
            {isOpen[index] && (
              <div>
                {item.content.map((content, index) => (
                  <div key={index} className="flex">
                    <div className="w-12 shrink-0 will-change-transform">
                      <div className="relative h-12 flex">
                        <div
                          className={`${
                            index !== item.content.length - 1 && "h-2"
                          } absolute bottom-0 left-3 w-3 border-gray-400 border-l`}
                        ></div>
                        <div className="ml-3 h-full w-[60%] border-gray-400 border-l border-b rounded-bl-lg"></div>
                      </div>
                      {index !== item.content.length - 1 && (
                        <div className="w-12 flex-1 flex h-full">
                          <div className="ml-3 w-3 h-[calc(100%-0.5rem)] border-gray-400 border-l"></div>
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col">
                      <p className="mt-8 text-lg text-white">
                        {item.content[index].contentTitle}
                      </p>
                      {content.text?.map((text, index) => (
                        <div key={index} className="mt-4">
                          <p className="whitespace-pre-wrap">{text}</p>
                        </div>
                      ))}
                      {content.code?.map((code, index) => (
                        <div key={index} className="mt-4">
                          {code.description &&
                            code.description.map((desc, index) => (
                              <div key={index} className="flex items-center">
                                <p className="mb-4">{desc}</p>
                              </div>
                            ))}
                          <pre className="relative whitespace-pre-wrap bg-[#263238] p-6 rounded-lg text-white min-w-60 w-full max-w-max pr-10">
                            <code
                              className="max-w-full"
                              dangerouslySetInnerHTML={{
                                __html: hljs
                                  .highlight(code.text, {
                                    language: code.language,
                                  })
                                  .value.trim(),
                              }}
                            ></code>
                          </pre>
                        </div>
                      ))}
                      {content.images && (
                        <div className="mt-4 flex flex-wrap">
                          {content.images.map((image, index) => (
                            <img
                              key={index}
                              src={image}
                              alt="image"
                              className={`${
                                content.images?.length === 1 ? "w-max" : "w-64"
                              } h-64 object-cover rounded-lg mr-4 mb-4 cursor-pointer border border-white/25`}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DayLayout;

{
  /* 
  <div className="mt-8 flex flex-col">
    <p className="text-lg font-bold text-white">Assignment:</p>
    <p className="mt-4">{item.assignment}</p>
  </div>
  
  
  <pre className="mt-1 relative whitespace-pre-wrap bg-[#263238] p-6 rounded-lg text-white w-max max-w-full">
  <code
    dangerouslySetInnerHTML={{
      __html: hljs
        .highlight(item.code.content, {
          language: item.code.language,
        })
        .value.trim(),
    }}
  ></code>
</pre>; 
*/
}

// {content.learningAssignment?.objective && (
//   <div className="mt-8 flex flex-col">
//     <p className="text-lg font-bold text-white">
//       Objective:
//     </p>
//     <p className="mt-4">
//       {content.learningAssignment?.objective}
//     </p>
//   </div>
// )}
// {content.learningAssignment?.requirement && (
//   <div className="mt-8 flex flex-col">
//     <p className="text-lg font-bold text-white">
//       Requirement:
//     </p>
//     <p className="mt-4">
//       {content.learningAssignment?.requirement}
//     </p>
//   </div>
// )}
// {content.code && (
//   <div className="mt-8 flex flex-col">
//     <p className="text-lg font-bold text-white">Code:</p>
//     <pre className="mt-4 relative whitespace-pre-wrap bg-[#263238] p-6 rounded-lg text-white w-full">
//       <code
//         dangerouslySetInnerHTML={{
//           __html: hljs
//             .highlight(content.code.text, {
//               language: content.code.language,
//             })
//             .value.trim(),
//         }}
//       ></code>
//     </pre>
//   </div>
// )}
// {content.comments && (
//   <div className="mt-8 flex flex-col">
//     <p className="text-lg font-bold text-white">
//       Comments:
//     </p>
//     <p className="mt-4 whitespace-pre-wrap">
//       {content.comments}
//     </p>
//   </div>
// )}
// {content.statement && (
//   <div className="mt-8 flex flex-col">
//     <p className="text-lg font-bold text-white">
//       Statement:
//     </p>
//     <p className="mt-4 whitespace-pre-wrap">
//       {content.statement.trim()}
//     </p>
//   </div>
// )}
// {content.notes && (
//   <div className="mt-8 flex flex-col">
//     <p className="text-lg font-bold text-white">Notes:</p>
//     <p className="mt-4 whitespace-pre-wrap">
//       {content.notes.trim()}
//     </p>
//   </div>
// )}
// {content.images && (
//   <div className="mt-8 flex flex-wrap">
//     {content.images.map((image, index) => (
//       <img
//         key={index}
//         src={image}
//         alt="image"
//         className="w-32 h-32 object-cover rounded-lg mr-4 mb-4 cursor-pointer"
//       />
//     ))}
//   </div>
// )}
