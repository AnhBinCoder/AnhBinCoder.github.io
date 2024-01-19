import React from "react";

const sizeClasses = {
  txtMulishSemiBold14WhiteA700: "font-mulish font-semibold",
  txtMulishSemiBold15Bluegray700: "font-mulish font-semibold",
  txtVolkhovBold36WhiteA700: "font-bold font-volkhov",
  txtVolkhovBold22: "font-bold font-volkhov",
  txtMulishBold20: "font-bold font-mulish",
  txtMulishExtraBold15: "font-extrabold font-mulish",
  txtVolkhovBold64: "font-bold font-volkhov",
  txtVolkhovBold20: "font-bold font-volkhov",
  txtMulishExtraBold14: "font-extrabold font-mulish",
  txtMulishBold15Bluegray90003: "font-bold font-mulish",
  txtMulishBlack48: "font-black font-mulish",
  txtMulishBold14Teal200: "font-bold font-mulish",
  txtVolkhovBold48: "font-bold font-volkhov",
  txtMulishSemiBold13: "font-mulish font-semibold",
  txtMulishSemiBold12: "font-mulish font-semibold",
  txtMulishRegular15: "font-mulish font-normal",
  txtVolkhovRegular16: "font-normal font-volkhov",
  txtMulishRegular14: "font-mulish font-normal",
  txtNicoMojiRegular26: "font-nicomoji font-normal",
  txtVolkhovRegular18: "font-normal font-volkhov",
  txtMulishRegular15WhiteA70099: "font-mulish font-normal",
  txtMulishSemiBoldItalic14: "font-mulish font-semibold italic",
  txtMulishSemiBold14Gray600: "font-mulish font-semibold",
  txtMulishSemiBold16: "font-mulish font-semibold",
  txtMulishSemiBold15: "font-mulish font-semibold",
  txtMulishSemiBold14: "font-mulish font-semibold",
  txtVolkhovBold36: "font-bold font-volkhov",
  txtMulishSemiBold16Gray600: "font-mulish font-semibold",
  txtMulishBold14Bluegray700: "font-bold font-mulish",
  txtMulishSemiBold15Gray600: "font-mulish font-semibold",
  txtMulishLight23: "font-light font-mulish",
  txtMulishSemiBold16WhiteA700: "font-mulish font-semibold",
  txtMulishBold13: "font-bold font-mulish",
  txtMulishBold15: "font-bold font-mulish",
  txtMulishBlack36: "font-black font-mulish",
  txtMulishBold14: "font-bold font-mulish",
  txtMulishBold18: "font-bold font-mulish",
  txtVolkhovBold15: "font-bold font-volkhov",
  txtMulishBold14Gray600: "font-bold font-mulish",
  txtVolkhovBold20Bluegray900: "font-bold font-volkhov",
  txtMulishBold15WhiteA700cc: "font-bold font-mulish",
  txtNicoMojiRegular26Bluegray700: "font-nicomoji font-normal",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
