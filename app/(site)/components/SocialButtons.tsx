'use client'
import { IconType } from "react-icons";

interface SocialButtonProps {
  icon: IconType;
  text:string;
  onClick: () => void;
}

const SocialButton: React.FC<SocialButtonProps> = ({
  icon: Icon,
  text:Text,
  onClick,
}) => {
  return (
    <button type="button" onClick={onClick}>
      <div className="flex flex-row gap-2 text-[12px] bg-white px-6 py-1 rounded-[10px] cursor-pointer">
        <div className="mt-[2.5px]"> <Icon color="grey" /></div>
        <p className="text-[#858585]">{Text}</p>
      </div>
    </button>
  );
};

export default SocialButton;
