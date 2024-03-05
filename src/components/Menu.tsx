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
};

const Menu = ({ title, children, open, top, day, date }: Props) => {
  const [isOpen, setIsOpen] = useState(open);

  return (
    <div
      className={`${
        top ? "mt-16 sm:mt-20 lg:mt-24" : "mt-8 sm:mt-12"
      } flex flex-col`}
    >
      <div className="flex items-center">
        <Button isOpen={isOpen} setIsOpen={setIsOpen} />
        <p className="text-xl truncate">{date ? date : title}</p>
      </div>
      {isOpen && children}
      {isOpen &&
        !children &&
        Array.from({ length: 100 }, (_, i) => i + 1).map((i) => {
          const LazyComponent = lazy(lazyComponents[i]);
          return (
            <Fragment key={i}>
              {day === i && (
                <Suspense fallback={<div>Loading...</div>}>
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
