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
          className="max-w-[90%] max-h-full object-contain cursor-pointer rounded-lg"
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
        <div key={index} className="flex">
          <div className="w-12 flex flex-col shrink-0">
            <div className="relative h-14 sm:h-16 flex">
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

          <div className="flex flex-col mt-10 sm:mt-12">
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
                {item.title}
                {item.description && <span>: {item.description}</span>}
              </p>
            </div>
            {isOpen[index] && (
              <div>
                {item.content.map((content, index) => (
                  <div key={index} className="flex">
                    <div className="w-12 shrink-0 /will-change-transform">
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
                        <div className="mt-4 flex flex-wrap flex-col sm:flex-row">
                          {content.images.map((image, index) => (
                            <img
                              key={index}
                              src={image}
                              alt="image"
                              onClick={() => setImage(image)}
                              className={`${
                                content.images?.length === 1 ? "w-max" : "w-64"
                              } w-96 max-w-full sm:w-64 sm:h-64 object-cover rounded-lg mr-4 mb-4 cursor-pointer border border-white/25`}
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
