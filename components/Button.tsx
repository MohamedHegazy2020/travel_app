import Image from "next/image";

type ButtonProps ={
  type: "button" | "submit" | "reset";
  title: string;
  variant: "btn_white" | "btn_white_text" | "btn_green" | "btn_dark_green" | "btn_dark_green_outline" | "green" | "orange" | "gray";
  fullWidth?: boolean;
  icon?: string;
}
const Button: React.FC<ButtonProps> = ({
  type,
  title,
  variant,
  fullWidth = false,
  icon,
}) => {
    return <button type={type} className={`flexCenter gap-3 px-6 py-3 rounded-full border font-semibold ${fullWidth ? "w-full" : "w-fit"} ${variant}`}>
        {icon && <Image src={icon} alt={title} width={24} height={24} />}
        <label className="bold-16 whitespace-nowrap" >{title}</label>
  </button>;
};



export default Button