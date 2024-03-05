import { Dispatch, SetStateAction } from "react";

interface Props {
  isOpen: boolean | undefined;
  setIsOpen: Dispatch<SetStateAction<boolean | undefined>>;
}

const Button = ({ isOpen, setIsOpen }: Props) => {
  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className={`${
        isOpen ? "hover:bg-red-500/75" : "hover:bg-green-500/75"
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
