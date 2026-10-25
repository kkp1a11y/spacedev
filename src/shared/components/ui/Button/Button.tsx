import type { ButtonHTMLAttributes } from "react";
import "./Button.css";

export default function Button({
                                   type = "button",
                                   className = "",
                                   ...rest
                               }: ButtonHTMLAttributes<HTMLButtonElement>) {
    return <button type={type} className={`button ${className}`.trim()} {...rest} />;
}