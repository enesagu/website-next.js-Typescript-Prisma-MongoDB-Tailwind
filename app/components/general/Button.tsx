import { IconType } from "react-icons";

interface ButtonProps {
  text: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  small?: boolean;
  icon?:IconType | undefined
  disableed?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  small,
  outline,
  disabled,
  icon: Icon,
}) => {
  return (
    <div>
      <button disabled={disabled}  className={`rounded-lg p-3 ${small ? "w-[250px]": "w-full"} ${outline ? "border text-black ": "bg-black text-white"}`} onClick={() => {onclick}}>
        {Icon && <Icon/>}
        {text}
      </button>
    </div>
  );
};

export default Button;
