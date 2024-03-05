import { ReactNode, useState, lazy, Suspense, Fragment } from "react";
import Button from "./Button";

interface Props {
  title?: string;
  open?: boolean;
  children?: ReactNode;
  top?: boolean;
  date?: string;
  day?: number;
}

const components = Array.from({ length: 100 }, (_, i) => i + 1);

const Menu = ({ title, children, open, top, day, date }: Props) => {
  const [isOpen, setIsOpen] = useState(open);

  return (
    <div className={`${top ? "mt-20 lg:mt-24" : "mt-12"} flex flex-col`}>
      <div className="flex items-center">
        <Button isOpen={isOpen} setIsOpen={setIsOpen} />
        <p className="text-xl truncate">
          {date ? date : title}
          {/* {date && <span className="text-xs ml-4">{date}</span>} */}
        </p>
      </div>
      {isOpen && children}
      {isOpen &&
        !children &&
        components.map((i) => {
          const LazyComponent = lazy(() => import(`./days/Day${i}`));
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
