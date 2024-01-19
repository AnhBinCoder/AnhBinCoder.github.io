import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-[3px]" };
const variants = {
  fill: {
    teal_200: "bg-teal-200 text-white-A700",
    teal_A100: "bg-teal-A100 text-blue_gray-900",
    white_A700: "bg-white-A700 shadow-bs text-purple-200",
    blue_300: "bg-blue-300 text-white-A700",
    red_300: "bg-red-300 text-white-A700",
    yellow_600: "bg-yellow-600 text-blue_gray-900",
    blue_gray_700: "bg-blue_gray-700 text-white-A700",
  },
  outline: {
    gray_600: "border border-gray-600 border-solid text-gray-600",
    teal_200: "border border-solid border-teal-200 text-blue_gray-700",
  },
};
const sizes = { xs: "p-1.5", sm: "p-[11px]", md: "p-3.5", lg: "p-[18px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf([
    "teal_200",
    "teal_A100",
    "white_A700",
    "blue_300",
    "red_300",
    "yellow_600",
    "blue_gray_700",
    "gray_600",
  ]),
};

export { Button };
