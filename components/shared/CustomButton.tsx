import { Button } from "../ui/button";

interface CustomButtonProps {
  style?: string;
  onClick?: () => void;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  text: string;
}

const CustomButton = ({ style, onClick, leftIcon, rightIcon, text }: CustomButtonProps) => {
  return (
    <Button className={style} onClick={onClick}>
      {leftIcon}
      {text}
      {rightIcon}
    </Button>
  );
};

export default CustomButton;
