"use client";
import Image from "next/image";
import { CustomButtonProps } from "@types";
import clsx from "clsx";

export const CustomButton = ({
  title,
  containerStyles,
  textStyles,
  btnType,
  handleClick,
}: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={clsx("custom-btn", containerStyles)}
      onClick={handleClick}
    >
      <span className={clsx("flex-1", textStyles)}>{title}</span>
    </button>
  );
};
