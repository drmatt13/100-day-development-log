import { Dispatch, SetStateAction, useEffect, useState, useRef } from "react";

interface Props {
  isOpen: boolean | undefined;
  setIsOpen: Dispatch<SetStateAction<boolean | undefined>>;
}

const Button = ({ isOpen, setIsOpen }: Props) => {
  const [mobile, setMobile] = useState(false);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const buttonElement = buttonRef.current;

    if (!buttonElement) return;

    let recentTouch = false;
    const onMouseMove = () => {
      if (!recentTouch) {
        setMobile(false);
      }
      recentTouch = false;
    };
    const onTouchStart = () => {
      recentTouch = true;
      setMobile(true);
    };
    buttonElement.addEventListener("mousemove", onMouseMove);
    buttonElement.addEventListener("touchstart", onTouchStart);

    return () => {
      buttonElement.removeEventListener("mousemove", onMouseMove);
      buttonElement.removeEventListener("touchstart", onTouchStart);
    };
  }, []);

  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      ref={buttonRef}
      className={`${
        isOpen
          ? mobile
            ? "active:bg-red-500/75"
            : "hover:bg-red-500/75"
          : mobile
          ? "hover:bg-active-500/75"
          : "hover:bg-green-500/75"
      } rounded-full bg-zinc-600 text-white shadow size-6 flex justify-center items-center cursor-pointer transition-all duration-200 hover:duration-75 ease-out hover:ease-in select-none mr-6`}
    >
      <i
        className={`${
          isOpen ? "fa-minus" : "fa-plus"
        } fa-solid text-xs translate-y-[1px]`}
      />
    </div>
  );
};

export default Button;
