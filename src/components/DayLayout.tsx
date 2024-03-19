import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import hljs from "highlight.js";
import Button from "./Button";

import type Data from "../types/data";

const ImageModal = ({
  image,
  setImage,
}: {
  image: string;
  setImage: Dispatch<SetStateAction<string>>;
}) => {
  if (!image) return null;

  return createPortal(
    <div className="fixed top-0 z-10 h-full w-full bg-black/50 backdrop-blur-lg">
      <div
        className="absolute top-0 left-0 w-full h-full"
        onClick={() => setImage("")}
      />
      <div className="h-full w-full flex justify-center items-center">
        <img
          className="max-w-[90%] max-h-[75%] object-contain cursor-pointer rounded-lg border border-white/25"
          src={image}
          alt={image}
        />
      </div>
    </div>,
    document.getElementById("modal") as HTMLDivElement
  );
};

const DayLayout = ({ data }: { data: Data }) => {
  const [isOpen, setIsOpen] = useState<boolean[]>([]);
  const [image, setImage] = useState("");

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
      <ImageModal image={image} setImage={setImage} />
      {data.map((item, index) => (
        <div key={index} className="flex /bg-red-600/50">
          {/* 1 */}
          <div className="w-12 flex flex-col flex-shrink-0 flex-grow-0">
            <div className="relative h-14 sm:h-16 flex /hidden">
              <div
                className={`${
                  index !== data.length - 1 && "h-2"
                } absolute bottom-0 left-3 w-3 border-gray-400 border-l`}
              ></div>
              <div className="ml-3 h-full w-[72.5%] border-gray-400 border-l border-b rounded-bl-lg"></div>
            </div>
            {index !== data.length - 1 && (
              <div className="w-12 flex-1 flex /hidden">
                <div className="ml-3 w-3 h-full border-gray-400 border-l"></div>
              </div>
            )}
          </div>
          {/* 2 */}
          {/* <div className="h-10 w-full bg-blue-400">
            <div className="w-screen h-full /bg-black">
              {" "}
              ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
              ddddddddddddddddddddddd sssssssssssssssssssss
            </div>
          </div> */}
          <div className="flex /hidden flex-col mt-10 sm:mt-12 /bg-blue-400/50 w-full">
            <div className="flex items-center shrink-0">
              <div className="h-full translate-y-1 flex flex-col">
                <Button
                  isOpen={Boolean(isOpen[index])}
                  setIsOpen={() =>
                    setIsOpen((prev) =>
                      prev.map((_, i) => (i === index ? !prev[i] : prev[i]))
                    )
                  }
                />
                <div className="flex-1">
                  {isOpen[index] && (
                    <div className="ml-3 h-full w-[60%] border-gray-400 border-l"></div>
                  )}
                </div>
              </div>
              <p className="text-lg font-bold">
                {item.menu}
                {item.description && <span>: {item.description}</span>}
              </p>
            </div>
            {isOpen[index] && (
              <div className="/bg-blue-400">
                {item.content.map((content, index) => (
                  <div
                    key={index}
                    className="flex /bg-black/50 w-full overflow-hidden"
                  >
                    <div className="w-12 shrink-0">
                      <div className="relative h-20 flex">
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
                      <p className="mt-16 mb-1 text-lg text-white">
                        {item.content[index].subMenu}
                      </p>
                      {content.items?.map((item, index) => (
                        <div
                          key={index}
                          className={`${index === 0 ? "mt-4" : "mt-4"} `}
                        >
                          {item.text &&
                            item.text.map((desc, index) => (
                              <div key={index} className="flex items-center">
                                <p
                                  className={`${
                                    (item.code ||
                                      (item.text?.length &&
                                        item.text.length - 1 !== index)) &&
                                    "mb-4"
                                  }`}
                                >
                                  {desc}
                                </p>
                              </div>
                            ))}
                          {item.code && (
                            <pre className="relative bg-[#263238] p-6 rounded-lg text-white min-w-60 w-full max-w-max /pr-10">
                              <code
                                className="w-60 whitespace-pre-wrap"
                                dangerouslySetInnerHTML={{
                                  __html: hljs
                                    .highlight(item.code, {
                                      language: item.language!,
                                    })
                                    .value.trim(),
                                }}
                              ></code>
                            </pre>
                          )}
                          {item.images && (
                            <div
                              className={`${
                                item.text && "pt-4"
                              } -mt-2.5 flex flex-wrap flex-col sm:flex-row`}
                            >
                              {item.images.map((image, index) => (
                                <img
                                  key={index}
                                  src={image}
                                  alt="image"
                                  onClick={() => setImage(image)}
                                  className={`${
                                    item.images?.length === 1
                                      ? "w-max sm:h-64"
                                      : "w-96 sm:size-48"
                                  } mt-2.5 object-cover rounded-lg mr-2.5 cursor-pointer border border-white/25`}
                                />
                              ))}
                            </div>
                          )}
                          {item.video && (
                            <div
                              className={`${
                                item.text && "pt-4"
                              } -mt-2.5 flex flex-wrap flex-col sm:flex-row`}
                            >
                              <video
                                controls={true}
                                src={item.video}
                                title="video"
                                className="max-w-full h-80 sm:h-96 rounded-lg"
                              />
                            </div>
                          )}
                        </div>
                      ))}
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
