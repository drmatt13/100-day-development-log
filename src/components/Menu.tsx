import React, { ReactNode, useState, lazy, Suspense, Fragment } from "react";
import Button from "./Button";

interface Props {
  title?: string;
  open?: boolean;
  children?: ReactNode;
  top?: boolean;
  date?: string;
  day?: number;
}

// We'll assume you have 100 days of components
// Define the type for the lazy loaded components map
interface LazyComponentsMap {
  [key: number]: () => Promise<{ default: React.ComponentType<unknown> }>;
}

// Create a components map that returns a dynamic import for each day
const lazyComponents: LazyComponentsMap = {
  1: () => import("./days/Day1"),
  2: () => import("./days/Day2"),
  3: () => import("./days/Day3"),
  4: () => import("./days/Day4"),
  5: () => import("./days/Day5"),
  6: () => import("./days/Day6"),
  7: () => import("./days/Day7"),
  // 8: () => import("./days/Day8"),
  // 9: () => import("./days/Day9"),
  // 10: () => import("./days/Day10"),
};

const Menu = ({ title, children, open, top, day, date }: Props) => {
  const [isOpen, setIsOpen] = useState(open);

  return (
    <div className={`flex flex-col`}>
      {top ? (
        <div className="mt-16 sm:mt-20 lg:mt-24" />
      ) : (
        <div className="h-8 sm:h-12 flex">
          <div className="w-12 flex-1 flex /hidden">
            {/* {!open && (
              <div className="ml-3 w-3 h-full border-gray-400 border-l"></div>
            )} */}
          </div>
        </div>
      )}
      <div className="flex items-center">
        <Button isOpen={isOpen} setIsOpen={setIsOpen} />
        <p className="text-xl truncate">
          {/* {day && `Day ${day} - `} */}
          {date ? date : title}
        </p>
      </div>
      {isOpen && children}
      {isOpen &&
        !children &&
        Array.from({ length: 100 }, (_, i) => i + 1).map((i) => {
          const LazyComponent = lazy(lazyComponents[i]);
          return (
            <Fragment key={i}>
              {day === i && (
                <Suspense fallback={<></>}>
                  <LazyComponent />
                </Suspense>
              )}
            </Fragment>
          );
        })}
    </div>
  );
};

export default Menu;
