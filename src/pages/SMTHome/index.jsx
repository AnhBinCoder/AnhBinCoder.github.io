import React from "react";

import {
  Button,
  Img,
  Input,
  Line,
  List,
  RatingBar,
  SelectBox,
  Text,
} from "components";
import Footer from "components/Footer";

const languageOneOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const SMTHomePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-nicomoji items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start overflow-auto w-full">
        <div className="md:h-[740px] h-[785px] md:px-5 relative w-full">
            <div className="absolute h-[740px] inset-x-[0] mx-auto top-[0] w-full">
              <Img
                className="h-[740px] m-auto object-cover w-full"
                src="images/img_rectangle140.png"
                alt="rectangle140"
              />
              <Img
                className="absolute h-[589px] inset-y-[0] left-[0] my-auto object-cover w-[62%]"
                src="images/img_ellipse51.png"
                alt="ellipseFiftyOne"
              />
            </div>
            <div className="absolute bg-gradient  flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-full">
              <div className="flex md:flex-col flex-row md:gap-10 h-[90px] md:h-auto items-center justify-between max-w-[1440px] px-10 sm:px-5 w-full">
                <Text className="md:text-2xl sm:text-[22px] text-[26px] text-center text-white-A700 w-auto">
                  WandarShare
                </Text>
                <div className="flex md:flex-1 md:flex-col flex-row font-mulish gap-10 items-center justify-start w-auto md:w-full">
                  <div className="flex sm:flex-col flex-row gap-[30px] items-end justify-start w-auto sm:w-full">
                    <Text className="font-semibold text-[15px] text-white-A700 w-auto">Home</Text>
                    <Text className="font-semibold text-[15px] text-white-A700 w-auto">About Us</Text>
                    <Text className="font-semibold text-[15px] text-white-A700 w-auto">Exchange Timeshare</Text>
                    <a href="javascript:" className="font-semibold text-[15px] text-white-A700 w-auto">
                      <Text>Contact Us</Text>
                    </a>
                    <Text className="font-semibold text-[15px] text-white-A700 w-auto">Help</Text>
                  </div>
                  <Button
                    className="cursor-pointer font-extrabold text-base text-center w-[140px]"
                    shape="round"
                    color="yellow_600"
                    size="md"
                    variant="fill"
                  >
                    Sign In
                  </Button>
                </div>
              </div>
            </div>
            <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-[62%]">
              <Text className="font-bold font-volkhov text-5xl sm:text-[38px] md:text-[44px] text-blue_gray-900 text-center text-shadow-ts">
                We Find The Best Timeshares For You
              </Text>
              <Text className="font-mulish font-semibold leading-[25.00px] mt-[22px] text-base text-blue_gray-900 text-center text-shadow-ts1 w-[65%] sm:w-full">
                More than 100 timeshare are waiting for your choose.
              </Text>
              <div className="flex flex-row font-mulish gap-2.5 items-center justify-center mt-2.5 w-[27%] md:w-full">
                <Img className="h-[107px] md:h-auto object-cover" src="images/img_group153.png" alt="group153" />
                <Text className="font-bold text-blue_gray-900 text-center text-xl">Watch Video</Text>
              </div>
            </div>
            <div className="absolute bottom-[0] flex flex-col font-mulish inset-x-[0] items-center justify-start mx-auto w-[70%]">
            <div className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-center justify-start p-[18px] rounded-[10px] shadow-bs3 w-full">
                <div className="flex md:flex-1 flex-row gap-2.5 items-start justify-start ml-0.5 md:ml-[0] w-1/5 md:w-full">
                  <Img className="h-4 mt-0.5" src="images/img_linkedin.svg" alt="linkedin" />
                  <div className="flex flex-col items-start justify-start">
                    <Text className="font-extrabold text-[15px] text-teal-200">Location</Text>
                    <Text className="font-semibold italic mt-1 text-gray-600 text-sm">Search For A Destination</Text>
                  </div>
                </div>
                <Line className="bg-gray-200 h-5 md:h-px md:ml-[0] ml-[142px] md:mt-0 my-[17px] md:w-full w-px" />
                <div className="flex md:flex-1 flex-row gap-2.5 items-start justify-center ml-5 md:ml-[0] w-[17%] md:w-full">
                  <Img className="h-4" src="images/img_settings.svg" alt="settings" />
                  <div className="flex flex-col gap-1.5 items-start justify-start">
                    <Text className="font-extrabold text-[15px] text-teal-200">Guests</Text>
                    <Text className="font-semibold italic text-gray-600 text-sm">How many Guests?</Text>
                  </div>
                </div>
                <Line className="bg-gray-200 h-5 md:h-px md:ml-[0] ml-[60px] md:mt-0 my-[17px] md:w-full w-px" />
                <div className="flex md:flex-1 flex-row gap-2.5 items-start justify-center ml-5 md:ml-[0] w-[11%] md:w-full">
                  <Img className="h-4" src="images/img_calendar.svg" alt="calendar" />
                  <div className="flex flex-col items-start justify-start">
                    <Text className="font-extrabold text-[15px] text-teal-200">Date</Text>
                    <Text className="font-semibold italic mt-1 text-gray-600 text-sm">Pick a date</Text>
                  </div>
                </div>
                <Button
                  className="cursor-pointer font-extrabold min-w-[150px] md:ml-[0] ml-[122px] rounded-[27px] text-base text-center"
                  color="yellow_600"
                  size="md"
                  variant="fill"
                >
                  Search
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[19px] items-center justify-start mt-[74px] md:px-5">
            <Text
              className="text-4xl sm:text-[32px] md:text-[34px] text-blue_gray-900 text-center text-shadow-ts"
              size="txtVolkhovBold36"
            >
              Explore Popular Cities
            </Text>
            <Text
              className="leading-[25.00px] text-base text-center text-gray-600 w-full"
              size="txtMulishSemiBold16Gray600"
            >
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit
            </Text>
          </div>
          <div className="flex-wrap font-mulish gap-2.5 grid sm:grid-cols-1 md:grid-cols-4 grid-cols-8 items-center justify-center max-w-[1110px] mt-10 mx-auto md:px-5 w-full">
            <Button
              className="cursor-pointer flex-1 font-bold h-11 leading-[normal] rounded-[22px] text-center text-sm w-full"
              color="teal_200"
              size="md"
              variant="outline"
            >
              Da Lat
            </Button>
            <Button
              className="cursor-pointer flex-1 font-bold h-11 leading-[normal] rounded-[22px] text-center text-sm w-full"
              color="teal_200"
              size="md"
              variant="outline"
            >
              Nha Trang
            </Button>
            <Button
              className="cursor-pointer flex-1 font-bold h-11 leading-[normal] rounded-[22px] shadow-bs text-center text-sm w-full"
              color="teal_200"
              size="md"
              variant="fill"
            >
              Hoi an
            </Button>
            <Button
              className="cursor-pointer flex-1 font-bold h-11 leading-[normal] rounded-[22px] text-center text-sm w-full"
              color="teal_200"
              size="md"
              variant="outline"
            >
              Sapa
            </Button>
            <Button
              className="cursor-pointer flex-1 font-bold h-11 leading-[normal] rounded-[22px] text-center text-sm w-full"
              color="teal_200"
              size="md"
              variant="outline"
            >
              Phu Yen
            </Button>
            <Button
              className="cursor-pointer flex-1 font-bold h-11 leading-[normal] rounded-[22px] text-center text-sm w-full"
              color="teal_200"
              size="md"
              variant="outline"
            >
              Ha Noi
            </Button>
            <Button
              className="cursor-pointer flex-1 font-bold h-11 leading-[normal] rounded-[22px] text-center text-sm w-full"
              color="teal_200"
              size="md"
              variant="outline"
            >
              TP Hp Chi Minh
            </Button>
            <Button
              className="cursor-pointer flex-1 font-bold h-11 leading-[normal] rounded-[22px] text-center text-sm w-full"
              color="teal_200"
              size="md"
              variant="outline"
            >
              BangKok
            </Button>
          </div>
          <div className="flex flex-col font-mulish max-w-[1171px] mt-[18px] mx-auto md:px-5 relative w-full">
            <Img
              className="h-[500px] mx-auto object-cover w-full"
              src="images/img_image38.png"
              alt="imageThirtyEight"
            />
            <div className="flex flex-col items-center justify-start mt-[-68px] mx-auto w-[95%] z-[1]">
              <div className="bg-gray-50 flex md:flex-col flex-row md:gap-10 items-center justify-between p-[49px] md:px-10 sm:px-5 rounded-[3px] shadow-bs4 w-full">
                <div className="flex flex-col gap-2.5 items-start justify-start mb-[9px]">
                  <Text
                    className="md:text-5xl text-[64px] text-blue_gray-900 text-shadow-ts"
                    size="txtVolkhovBold64"
                  >
                    Hoi An
                  </Text>
                  <Text
                    className="leading-[25.00px] text-base text-gray-600 w-full"
                    size="txtMulishSemiBold16Gray600"
                  >
                    Hoi An is an ancient city located in the central region of
                    Vietnam. It is well known for its beautiful architecture,
                    charming atmosphere, and delicious food.{" "}
                  </Text>
                </div>
                <div className="flex md:flex-1 flex-col items-center justify-start w-[43%] md:w-full">
                  <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                    <Button
                      className="cursor-pointer flex items-center justify-center min-w-[212px]"
                      leftIcon={
                        <Img
                          className="h-4 mb-px mr-[5px]"
                          src="images/img_zondiconstravelbus.svg"
                          alt="zondicons:travel-bus"
                        />
                      }
                      shape="round"
                      color="white_A700"
                      size="sm"
                      variant="fill"
                    >
                      <div className="font-bold leading-[normal] text-left text-sm">
                        Public Transportations
                      </div>
                    </Button>
                    <div className="flex sm:flex-col flex-row gap-2.5 items-center justify-between w-full">
                      <Button
                        className="cursor-pointer flex items-center justify-center min-w-[196px]"
                        leftIcon={
                          <Img
                            className="h-5 mr-[5px]"
                            src="images/img_contrast.svg"
                            alt="contrast"
                          />
                        }
                        shape="round"
                        color="white_A700"
                        size="sm"
                        variant="fill"
                      >
                        <div className="!text-teal-200 font-bold leading-[normal] text-left text-sm">
                          Nature & Adventure
                        </div>
                      </Button>
                      <Button
                        className="cursor-pointer flex items-center justify-center min-w-[224px]"
                        leftIcon={
                          <Img
                            className="h-5 mb-px mr-[5px]"
                            src="images/img_zondiconstraveltaxicab.svg"
                            alt="zondicons:travel-taxi-cab"
                          />
                        }
                        shape="round"
                        color="white_A700"
                        size="sm"
                        variant="fill"
                      >
                        <div className="!text-yellow-800 font-bold leading-[normal] text-left text-sm">
                          Private Transportations
                        </div>
                      </Button>
                    </div>
                    <div className="flex flex-row gap-2.5 items-center justify-start w-[70%] md:w-full">
                      <Button
                        className="cursor-pointer flex items-center justify-center min-w-[160px]"
                        leftIcon={
                          <Img
                            className="h-5 mr-[5px]"
                            src="images/img_icoutlinecardtravel.svg"
                            alt="ic:outline-card-travel"
                          />
                        }
                        shape="round"
                        color="white_A700"
                        size="sm"
                        variant="fill"
                      >
                        <div className="!text-red-500 font-bold leading-[normal] text-left text-sm">
                          Business Tours
                        </div>
                      </Button>
                      <Button
                        className="cursor-pointer flex items-center justify-center min-w-[130px]"
                        leftIcon={
                          <Img
                            className="h-5 mr-[5px]"
                            src="images/img_icoutlinemodeoftravel.svg"
                            alt="ic:outline-mode-of-travel"
                          />
                        }
                        shape="round"
                        color="white_A700"
                        size="sm"
                        variant="fill"
                      >
                        <div className="!text-blue-400 font-bold leading-[normal] text-left text-sm">
                          Local Visit
                        </div>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col font-volkhov md:gap-10 gap-[77px] items-center justify-start mt-[31px] w-full">
            <List
              className="sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center max-w-[1170px] mx-auto md:px-5 w-full"
              orientation="horizontal"
            >
              <div className="bg-white-A700 flex flex-1 flex-col items-center justify-end sm:ml-[0] py-2 rounded-[3px] shadow-bs5 w-full">
                <div className="h-[180px] relative w-[95%]">
                  <Img
                    className="absolute h-[180px] inset-[0] justify-center m-auto object-cover w-[99%]"
                    src="images/img_rectangle129.png"
                    alt="rectangle129"
                  />
                  <Img
                    className="absolute h-[179px] inset-[0] justify-center m-auto object-cover w-full"
                    src="images/img_image39.png"
                    alt="imageThirtyNine"
                  />
                </div>
                <div className="flex flex-col items-start justify-start mt-3 w-[84%] md:w-full">
                  <Text
                    className="text-base text-blue_gray-900 text-shadow-ts"
                    size="txtVolkhovRegular16"
                  >
                    Hoi An Central Boutique
                  </Text>
                  <div className="flex flex-row font-mulish gap-[7px] items-center justify-start ml-0.5 md:ml-[0] mt-[34px] w-3/5 md:w-full">
                    <Img
                      className="h-4 w-4"
                      src="images/img_clock.svg"
                      alt="clock"
                    />
                    <Text
                      className="text-blue_gray-700 text-sm"
                      size="txtMulishSemiBold14"
                    >
                      Duration 2 hours
                    </Text>
                  </div>
                  <div className="flex flex-row font-mulish gap-1.5 items-start justify-start mt-[11px] w-[62%] md:w-full">
                    <Img className="h-3.5" src="images/img_car.svg" alt="car" />
                    <Text
                      className="text-blue_gray-700 text-sm"
                      size="txtMulishSemiBold14"
                    >
                      Transport Facility
                    </Text>
                  </div>
                  <div className="flex flex-row font-mulish items-start justify-start mt-2.5 w-[45%] md:w-full">
                    <Img
                      className="h-3.5"
                      src="images/img_settings_blue_gray_700.svg"
                      alt="settings"
                    />
                    <Text
                      className="ml-1 text-blue_gray-700 text-sm"
                      size="txtMulishSemiBold14"
                    >
                      Family Plan
                    </Text>
                  </div>
                </div>
                <Line className="bg-gray-200 h-px mt-[18px] w-full" />
                <div className="flex flex-row font-mulish items-end justify-between mt-1 w-[86%] md:w-full">
                  <div className="flex flex-col items-center justify-start mt-1.5 w-[31%]">
                    <RatingBar
                      className="flex justify-between w-[70px]"
                      value={4}
                      starCount={5}
                      color="#cfd9de"
                      activeColor="#ffa331"
                      size={14}
                    ></RatingBar>
                    <Text
                      className="text-gray-600 text-xs"
                      size="txtMulishSemiBold12"
                    >
                      584 reviews
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start">
                    <Text
                      className="text-right text-shadow-ts text-teal-200 text-xl"
                      size="txtVolkhovBold20"
                    >
                      $5000
                    </Text>
                    <Text
                      className="text-gray-600 text-xs"
                      size="txtMulishSemiBold12"
                    >
                      per month
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-1 flex-col items-center justify-end sm:ml-[0] py-2 rounded-[3px] shadow-bs5 w-full">
                <div className="h-[180px] relative w-[93%]">
                  <Img
                    className="absolute h-[180px] inset-[0] justify-center m-auto object-cover w-full"
                    src="images/img_rectangle129_180x250.png"
                    alt="rectangle129"
                  />
                  <Img
                    className="absolute h-[179px] inset-[0] justify-center m-auto object-cover w-full"
                    src="images/img_image40.png"
                    alt="imageForty"
                  />
                </div>
                <div className="flex flex-col items-start justify-start mt-3 w-[84%] md:w-full">
                  <Text
                    className="text-base text-blue_gray-900 text-shadow-ts"
                    size="txtVolkhovRegular16"
                  >
                    King Koi Hoi An
                  </Text>
                  <div className="flex flex-row font-mulish gap-[7px] items-center justify-start ml-0.5 md:ml-[0] mt-[34px] w-3/5 md:w-full">
                    <Img
                      className="h-4 w-4"
                      src="images/img_clock.svg"
                      alt="clock"
                    />
                    <Text
                      className="text-blue_gray-700 text-sm"
                      size="txtMulishSemiBold14"
                    >
                      Duration 2 hours
                    </Text>
                  </div>
                  <div className="flex flex-row font-mulish gap-1.5 items-start justify-start mt-[11px] w-[62%] md:w-full">
                    <Img className="h-3.5" src="images/img_car.svg" alt="car" />
                    <Text
                      className="text-blue_gray-700 text-sm"
                      size="txtMulishSemiBold14"
                    >
                      Transport Facility
                    </Text>
                  </div>
                  <div className="flex flex-row font-mulish items-start justify-start mt-2.5 w-[45%] md:w-full">
                    <Img
                      className="h-3.5"
                      src="images/img_settings_blue_gray_700.svg"
                      alt="settings"
                    />
                    <Text
                      className="ml-1 text-blue_gray-700 text-sm"
                      size="txtMulishSemiBold14"
                    >
                      Family Plan
                    </Text>
                  </div>
                </div>
                <Line className="bg-gray-200 h-px mt-[18px] w-full" />
                <div className="flex flex-row font-mulish items-end justify-between mt-1 w-[86%] md:w-full">
                  <div className="flex flex-col items-center justify-start mt-1.5 w-[31%]">
                    <RatingBar
                      className="flex justify-between w-[70px]"
                      value={4}
                      starCount={5}
                      color="#cfd9de"
                      activeColor="#ffa331"
                      size={14}
                    ></RatingBar>
                    <Text
                      className="text-gray-600 text-xs"
                      size="txtMulishSemiBold12"
                    >
                      584 reviews
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start">
                    <Text
                      className="text-right text-shadow-ts text-teal-200 text-xl"
                      size="txtVolkhovBold20"
                    >
                      $3000
                    </Text>
                    <Text
                      className="text-gray-600 text-xs"
                      size="txtMulishSemiBold12"
                    >
                      per month
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-1 flex-col items-center justify-end sm:ml-[0] py-2 rounded-[3px] shadow-bs5 w-full">
                <div className="h-[180px] relative w-[93%]">
                  <Img
                    className="absolute h-[180px] inset-[0] justify-center m-auto object-cover w-full"
                    src="images/img_rectangle129_1.png"
                    alt="rectangle129"
                  />
                  <Img
                    className="absolute h-[179px] inset-[0] justify-center m-auto object-cover w-full"
                    src="images/img_image41.png"
                    alt="imageFortyOne"
                  />
                </div>
                <div className="flex flex-col gap-3 items-start justify-start mt-3 w-[84%] md:w-full">
                  <Text
                    className="leading-[22.00px] text-base text-blue_gray-900 text-shadow-ts w-full"
                    size="txtVolkhovRegular16"
                  >
                    Hoi An History Hotel: First Hotel at an ancient city
                  </Text>
                  <div className="flex flex-row font-mulish gap-[7px] items-center justify-start ml-0.5 md:ml-[0] w-3/5 md:w-full">
                    <Img
                      className="h-4 w-4"
                      src="images/img_clock.svg"
                      alt="clock"
                    />
                    <Text
                      className="text-blue_gray-700 text-sm"
                      size="txtMulishSemiBold14"
                    >
                      Duration 2 hours
                    </Text>
                  </div>
                  <div className="flex flex-row font-mulish gap-1.5 items-start justify-start w-[62%] md:w-full">
                    <Img className="h-3.5" src="images/img_car.svg" alt="car" />
                    <Text
                      className="text-blue_gray-700 text-sm"
                      size="txtMulishSemiBold14"
                    >
                      Transport Facility
                    </Text>
                  </div>
                  <div className="flex flex-row font-mulish items-start justify-start w-[45%] md:w-full">
                    <Img
                      className="h-3.5"
                      src="images/img_settings_blue_gray_700.svg"
                      alt="settings"
                    />
                    <Text
                      className="ml-1 text-blue_gray-700 text-sm"
                      size="txtMulishSemiBold14"
                    >
                      Family Plan
                    </Text>
                  </div>
                </div>
                <Line className="bg-gray-200 h-px mt-[18px] w-full" />
                <div className="flex flex-row font-mulish items-end justify-between mt-1 w-[86%] md:w-full">
                  <div className="flex flex-col items-center justify-start mt-1.5 w-[31%]">
                    <RatingBar
                      className="flex justify-between w-[70px]"
                      value={4}
                      starCount={5}
                      color="#cfd9de"
                      activeColor="#ffa331"
                      size={14}
                    ></RatingBar>
                    <Text
                      className="text-gray-600 text-xs"
                      size="txtMulishSemiBold12"
                    >
                      584 reviews
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start">
                    <Text
                      className="text-right text-shadow-ts text-teal-200 text-xl"
                      size="txtVolkhovBold20"
                    >
                      $3500
                    </Text>
                    <Text
                      className="text-gray-600 text-xs"
                      size="txtMulishSemiBold12"
                    >
                      per month
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-1 flex-col items-center justify-end sm:ml-[0] py-2 rounded-[3px] shadow-bs5 w-full">
                <div className="h-[180px] relative w-[93%]">
                  <Img
                    className="absolute h-[180px] inset-[0] justify-center m-auto object-cover w-full"
                    src="images/img_rectangle129_2.png"
                    alt="rectangle129"
                  />
                  <Img
                    className="absolute h-[179px] inset-[0] justify-center m-auto object-cover w-full"
                    src="images/img_image42.png"
                    alt="imageFortyTwo"
                  />
                </div>
                <div className="flex flex-col gap-3 items-start justify-start mt-3 w-[84%] md:w-full">
                  <Text
                    className="leading-[22.00px] text-base text-blue_gray-900 text-shadow-ts w-full"
                    size="txtVolkhovRegular16"
                  >
                    Moutain House: Hunt clouds on the hills
                  </Text>
                  <div className="flex flex-row font-mulish gap-[7px] items-center justify-start ml-0.5 md:ml-[0] w-3/5 md:w-full">
                    <Img
                      className="h-4 w-4"
                      src="images/img_clock.svg"
                      alt="clock"
                    />
                    <Text
                      className="text-blue_gray-700 text-sm"
                      size="txtMulishSemiBold14"
                    >
                      Duration 2 hours
                    </Text>
                  </div>
                  <div className="flex flex-row font-mulish gap-1.5 items-start justify-start w-[62%] md:w-full">
                    <Img className="h-3.5" src="images/img_car.svg" alt="car" />
                    <Text
                      className="text-blue_gray-700 text-sm"
                      size="txtMulishSemiBold14"
                    >
                      Transport Facility
                    </Text>
                  </div>
                  <div className="flex flex-row font-mulish items-start justify-start w-[45%] md:w-full">
                    <Img
                      className="h-3.5"
                      src="images/img_settings_blue_gray_700.svg"
                      alt="settings"
                    />
                    <Text
                      className="ml-1 text-blue_gray-700 text-sm"
                      size="txtMulishSemiBold14"
                    >
                      Family Plan
                    </Text>
                  </div>
                </div>
                <Line className="bg-gray-200 h-px mt-[18px] w-full" />
                <div className="flex flex-row font-mulish items-end justify-between mt-1 w-[86%] md:w-full">
                  <div className="flex flex-col items-center justify-start mt-1.5 w-[31%]">
                    <RatingBar
                      className="flex justify-between w-[70px]"
                      value={4}
                      starCount={5}
                      color="#cfd9de"
                      activeColor="#ffa331"
                      size={14}
                    ></RatingBar>
                    <Text
                      className="text-gray-600 text-xs"
                      size="txtMulishSemiBold12"
                    >
                      584 reviews
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start">
                    <Text
                      className="text-right text-shadow-ts text-teal-200 text-xl"
                      size="txtVolkhovBold20"
                    >
                      $4000
                    </Text>
                    <Text
                      className="text-gray-600 text-xs"
                      size="txtMulishSemiBold12"
                    >
                      per month
                    </Text>
                  </div>
                </div>
              </div>
            </List>
            <div className="font-mulish md:h-[590px] h-[621px] md:px-5 relative w-full">
              <div className="md:h-[590px] h-[621px] m-auto w-full">
                <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-full">
                  <div className="h-[590px] relative w-full">
                    <Img
                      className="h-[590px] m-auto object-cover w-full"
                      src="images/img_rectangle158.png"
                      alt="rectangle158"
                    />
                    <div className="absolute bg-gradient1  h-[590px] inset-[0] justify-center m-auto w-full"></div>
                  </div>
                </div>
                <div className="absolute md:h-[574px] h-[581px] inset-y-[0] left-[10%] my-auto w-2/5 sm:w-full">
                  <Img
                    className="absolute bottom-[0] h-[547px] left-[0]"
                    src="images/img_ellipse54.svg"
                    alt="ellipseFiftyFour"
                  />
                  <div
                    className="absolute bg-cover bg-no-repeat flex flex-col h-max inset-[0] items-start justify-center m-auto p-[53px] md:px-10 sm:px-5 w-full"
                    style={{ backgroundImage: "url('images/img_group6.svg')" }}
                  >
                    <Img
                      className="h-[429px] md:h-auto mb-[9px] mt-[30px] object-cover w-[89%]"
                      src="images/img_ellipse52.png"
                      alt="ellipseFiftyTwo"
                    />
                  </div>
                </div>
                <div className="absolute md:h-[391px] h-[489px] right-[13%] top-[0] w-[36%] sm:w-full">
                  <div className="absolute flex flex-col gap-[19px] inset-x-[0] items-start justify-start mx-auto top-[0] w-full">
                    <div className="flex h-[297px] justify-end relative w-4/5 sm:w-full">
                      <Text
                        className="absolute bottom-[10%] inset-x-[0] mx-auto text-4xl sm:text-[32px] md:text-[34px] text-shadow-ts text-white-A700 w-max"
                        size="txtVolkhovBold36WhiteA700"
                      >
                        Peacefulllife of Hoi An
                      </Text>
                      <Button
                        className="cursor-pointer font-extrabold font-mulish leading-[normal] mb-[85px] min-w-[130px] mt-auto rounded-[15px] text-center text-xs uppercase"
                        color="teal_A100"
                        size="xs"
                        variant="fill"
                      >
                        Trending Now
                      </Button>
                      <div className="absolute flex flex-row font-mulish gap-[27px] h-full inset-[0] items-end justify-between m-auto w-[99%]">
                        <div className="flex flex-col md:gap-10 gap-[267px] justify-start w-[42%]">
                          <Img
                            className="h-3 w-[11px]"
                            src="images/img_linkedin_white_a700.svg"
                            alt="linkedin_One"
                          />
                          <Text
                            className="ml-4 md:ml-[0] text-sm text-white-A700"
                            size="txtMulishSemiBold14WhiteA700"
                          >
                            Quang Nam, Viet Nam
                          </Text>
                        </div>
                        <div className="flex flex-row items-start justify-between mt-[278px] w-[53%]">
                          <RatingBar
                            className="flex justify-between mb-0.5 w-20"
                            value={5}
                            starCount={5}
                            color="#cfd9de"
                            activeColor="#ffa331"
                            size={16}
                          ></RatingBar>
                          <Text
                            className="text-center text-sm text-white-A700 uppercase"
                            size="txtMulishBold14"
                          >
                            4.9
                          </Text>
                          <Text
                            className="text-center text-sm text-white-A700"
                            size="txtMulishSemiBold14WhiteA700"
                          >
                            (300 reviews)
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Text
                      className="leading-[25.00px] text-base text-white-A700 w-full"
                      size="txtMulishSemiBold16WhiteA700"
                    >
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint. Velit officia consequat duis enim
                      velit mollit. Exercitation veniam consequat sunt nostrud
                      amet.
                    </Text>
                  </div>
                  <div className="absolute bottom-[0] flex flex-row gap-5 items-end justify-between left-[0] w-[69%]">
                    <Button
                      className="cursor-pointer font-extrabold min-w-[200px] mt-[282px] rounded-[25px] shadow-bs3 text-base text-center"
                      color="yellow_600"
                      size="md"
                      variant="fill"
                    >
                      Exchange Now
                    </Button>
                    <Line className="bg-white-A700_4c h-4 mb-[17px] mt-[299px] w-px" />
                    <Img
                      className="h-[332px]"
                      src="images/img_group192.svg"
                      alt="group192"
                    />
                  </div>
                </div>
              </div>
              <Img
                className="absolute bottom-[21%] h-[76px] right-[11%]"
                src="images/img_group211.svg"
                alt="group211"
              />
            </div>
          </div>
          <div className="flex flex-col gap-[19px] items-start justify-start mt-[74px] md:px-5">
            <Text
              className="text-4xl sm:text-[32px] md:text-[34px] text-blue_gray-900 text-shadow-ts"
              size="txtVolkhovBold36"
            >
              Featured Destinations
            </Text>
            <Text
              className="leading-[25.00px] text-base text-gray-600 w-full"
              size="txtMulishSemiBold16Gray600"
            >
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit
            </Text>
          </div>
          <List
            className="sm:flex-col flex-row font-volkhov gap-px grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 mt-[70px] md:px-5 w-[97%]"
            orientation="horizontal"
          >
            <div className="bg-white-A700 hover:cursor-pointer flex flex-col items-center justify-end py-2 rounded-[3px] hover:shadow-bs5 shadow-bs5 hover:w-full w-full">
              <div className="h-[180px] relative w-[95%]">
                <Img
                  className="absolute h-[180px] inset-[0] justify-center m-auto object-cover w-[99%]"
                  src="images/img_rectangle129.png"
                  alt="rectangle129"
                />
                <Img
                  className="absolute h-[179px] inset-[0] justify-center m-auto object-cover w-full"
                  src="images/img_image39.png"
                  alt="imageThirtyNine"
                />
              </div>
              <div className="flex flex-col items-start justify-start mt-3 w-[84%] md:w-full">
                <Text
                  className="text-base text-blue_gray-900 text-shadow-ts"
                  size="txtVolkhovRegular16"
                >
                  Hoi An Central Boutique
                </Text>
                <div className="flex flex-row font-mulish gap-[7px] items-center justify-start ml-0.5 md:ml-[0] mt-[34px] w-3/5 md:w-full">
                  <Img
                    className="h-4 w-4"
                    src="images/img_clock.svg"
                    alt="clock"
                  />
                  <Text
                    className="text-blue_gray-700 text-sm"
                    size="txtMulishSemiBold14"
                  >
                    Duration 2 hours
                  </Text>
                </div>
                <div className="flex flex-row font-mulish gap-1.5 items-start justify-start mt-[11px] w-[62%] md:w-full">
                  <Img className="h-3.5" src="images/img_car.svg" alt="car" />
                  <Text
                    className="text-blue_gray-700 text-sm"
                    size="txtMulishSemiBold14"
                  >
                    Transport Facility
                  </Text>
                </div>
                <div className="flex flex-row font-mulish items-start justify-start mt-2.5 w-[45%] md:w-full">
                  <Img
                    className="h-3.5"
                    src="images/img_settings_blue_gray_700.svg"
                    alt="settings"
                  />
                  <Text
                    className="ml-1 text-blue_gray-700 text-sm"
                    size="txtMulishSemiBold14"
                  >
                    Family Plan
                  </Text>
                </div>
              </div>
              <Line className="bg-gray-200 h-px mt-[18px] w-full" />
              <div className="flex flex-row font-mulish items-end justify-between mt-1 w-[86%] md:w-full">
                <div className="flex flex-col items-center justify-start mt-1.5 w-[31%]">
                  <RatingBar
                    className="flex justify-between w-[70px]"
                    value={4}
                    starCount={5}
                    color="#cfd9de"
                    activeColor="#ffa331"
                    size={14}
                  ></RatingBar>
                  <Text
                    className="text-gray-600 text-xs"
                    size="txtMulishSemiBold12"
                  >
                    584 reviews
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start">
                  <Text
                    className="text-right text-shadow-ts text-teal-200 text-xl"
                    size="txtVolkhovBold20"
                  >
                    $5000
                  </Text>
                  <Text
                    className="text-gray-600 text-xs"
                    size="txtMulishSemiBold12"
                  >
                    per month
                  </Text>
                </div>
              </div>
            </div>
            <div className="hover:cursor-pointer md:h-[400px] h-[405px] hover:relative relative hover:shadow-bs5 hover:w-full w-full">
              <div className="absolute bg-white-A700 flex flex-col gap-3 h-full inset-[0] items-center justify-center m-auto pl-2 py-2 rounded-[3px] shadow-bs5 w-[97%]">
                <div className="h-[180px] relative w-full">
                  <Img
                    className="absolute h-[180px] inset-[0] justify-center m-auto object-cover w-[97%]"
                    src="images/img_rectangle129_180x250.png"
                    alt="rectangle129"
                  />
                  <Img
                    className="absolute h-[179px] inset-[0] justify-center m-auto object-cover w-[97%]"
                    src="images/img_image40.png"
                    alt="imageForty"
                  />
                </div>
                <div className="flex flex-col items-start justify-start w-[88%] md:w-full">
                  <Text
                    className="text-base text-blue_gray-900 text-shadow-ts"
                    size="txtVolkhovRegular16"
                  >
                    King Koi Hoi An
                  </Text>
                  <div className="flex flex-row font-mulish gap-[7px] items-center justify-start ml-0.5 md:ml-[0] mt-[34px] w-[59%] md:w-full">
                    <Img
                      className="h-4 w-4"
                      src="images/img_clock.svg"
                      alt="clock"
                    />
                    <Text
                      className="text-blue_gray-700 text-sm"
                      size="txtMulishSemiBold14"
                    >
                      Duration 2 hours
                    </Text>
                  </div>
                  <div className="flex flex-row font-mulish gap-1.5 items-start justify-start mt-[11px] w-[61%] md:w-full">
                    <Img className="h-3.5" src="images/img_car.svg" alt="car" />
                    <Text
                      className="text-blue_gray-700 text-sm"
                      size="txtMulishSemiBold14"
                    >
                      Transport Facility
                    </Text>
                  </div>
                  <div className="flex flex-row font-mulish items-start justify-start mt-2.5 w-[44%] md:w-full">
                    <Img
                      className="h-3.5"
                      src="images/img_settings_blue_gray_700.svg"
                      alt="settings"
                    />
                    <Text
                      className="ml-1 text-blue_gray-700 text-sm"
                      size="txtMulishSemiBold14"
                    >
                      Family Plan
                    </Text>
                  </div>
                  <div className="flex flex-row font-mulish items-end justify-between mt-[23px] w-full">
                    <div className="flex flex-col items-center justify-start mt-1.5 w-[31%]">
                      <RatingBar
                        className="flex justify-between w-[70px]"
                        value={4}
                        starCount={5}
                        color="#cfd9de"
                        activeColor="#ffa331"
                        size={14}
                      ></RatingBar>
                      <Text
                        className="text-gray-600 text-xs"
                        size="txtMulishSemiBold12"
                      >
                        584 reviews
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start">
                      <Text
                        className="text-right text-shadow-ts text-teal-200 text-xl"
                        size="txtVolkhovBold20"
                      >
                        $3000
                      </Text>
                      <Text
                        className="text-gray-600 text-xs"
                        size="txtMulishSemiBold12"
                      >
                        per month
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <Line className="absolute bg-gray-200 bottom-[13%] h-px inset-x-[0] mx-auto w-[97%]" />
            </div>
            <div className="bg-white-A700 hover:cursor-pointer flex flex-col items-center justify-end py-2 rounded-[3px] hover:shadow-bs5 shadow-bs5 hover:w-full w-full">
              <div className="h-[180px] relative w-[93%]">
                <Img
                  className="absolute h-[180px] inset-[0] justify-center m-auto object-cover w-full"
                  src="images/img_rectangle129_1.png"
                  alt="rectangle129"
                />
                <Img
                  className="absolute h-[179px] inset-[0] justify-center m-auto object-cover w-full"
                  src="images/img_image41.png"
                  alt="imageFortyOne"
                />
              </div>
              <div className="flex flex-col gap-3 items-start justify-start mt-3 w-[84%] md:w-full">
                <Text
                  className="leading-[22.00px] text-base text-blue_gray-900 text-shadow-ts w-full"
                  size="txtVolkhovRegular16"
                >
                  Hoi An History Hotel: First Hotel at an ancient city
                </Text>
                <div className="flex flex-row font-mulish gap-[7px] items-center justify-start ml-0.5 md:ml-[0] w-3/5 md:w-full">
                  <Img
                    className="h-4 w-4"
                    src="images/img_clock.svg"
                    alt="clock"
                  />
                  <Text
                    className="text-blue_gray-700 text-sm"
                    size="txtMulishSemiBold14"
                  >
                    Duration 2 hours
                  </Text>
                </div>
                <div className="flex flex-row font-mulish gap-1.5 items-start justify-start w-[62%] md:w-full">
                  <Img className="h-3.5" src="images/img_car.svg" alt="car" />
                  <Text
                    className="text-blue_gray-700 text-sm"
                    size="txtMulishSemiBold14"
                  >
                    Transport Facility
                  </Text>
                </div>
                <div className="flex flex-row font-mulish items-start justify-start w-[45%] md:w-full">
                  <Img
                    className="h-3.5"
                    src="images/img_settings_blue_gray_700.svg"
                    alt="settings"
                  />
                  <Text
                    className="ml-1 text-blue_gray-700 text-sm"
                    size="txtMulishSemiBold14"
                  >
                    Family Plan
                  </Text>
                </div>
              </div>
              <Line className="bg-gray-200 h-px mt-[18px] w-full" />
              <div className="flex flex-row font-mulish items-end justify-between mt-1 w-[86%] md:w-full">
                <div className="flex flex-col items-center justify-start mt-1.5 w-[31%]">
                  <RatingBar
                    className="flex justify-between w-[70px]"
                    value={4}
                    starCount={5}
                    color="#cfd9de"
                    activeColor="#ffa331"
                    size={14}
                  ></RatingBar>
                  <Text
                    className="text-gray-600 text-xs"
                    size="txtMulishSemiBold12"
                  >
                    584 reviews
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start">
                  <Text
                    className="text-right text-shadow-ts text-teal-200 text-xl"
                    size="txtVolkhovBold20"
                  >
                    $3500
                  </Text>
                  <Text
                    className="text-gray-600 text-xs"
                    size="txtMulishSemiBold12"
                  >
                    per month
                  </Text>
                </div>
              </div>
            </div>
            <div className="bg-white-A700 hover:cursor-pointer flex flex-col items-center justify-end py-2 rounded-[3px] hover:shadow-bs5 shadow-bs5 hover:w-full w-full">
              <div className="h-[180px] relative w-[93%]">
                <Img
                  className="absolute h-[180px] inset-[0] justify-center m-auto object-cover w-full"
                  src="images/img_rectangle129_2.png"
                  alt="rectangle129"
                />
                <Img
                  className="absolute h-[179px] inset-[0] justify-center m-auto object-cover w-full"
                  src="images/img_image42.png"
                  alt="imageFortyTwo"
                />
              </div>
              <div className="flex flex-col gap-3 items-start justify-start mt-3 w-[84%] md:w-full">
                <Text
                  className="leading-[22.00px] text-base text-blue_gray-900 text-shadow-ts w-full"
                  size="txtVolkhovRegular16"
                >
                  Mountain House: Hunt clouds on the hills
                </Text>
                <div className="flex flex-row font-mulish gap-[7px] items-center justify-start ml-0.5 md:ml-[0] w-3/5 md:w-full">
                  <Img
                    className="h-4 w-4"
                    src="images/img_clock.svg"
                    alt="clock"
                  />
                  <Text
                    className="text-blue_gray-700 text-sm"
                    size="txtMulishSemiBold14"
                  >
                    Duration 2 hours
                  </Text>
                </div>
                <div className="flex flex-row font-mulish gap-1.5 items-start justify-start w-[62%] md:w-full">
                  <Img className="h-3.5" src="images/img_car.svg" alt="car" />
                  <Text
                    className="text-blue_gray-700 text-sm"
                    size="txtMulishSemiBold14"
                  >
                    Transport Facility
                  </Text>
                </div>
                <div className="flex flex-row font-mulish items-start justify-start w-[45%] md:w-full">
                  <Img
                    className="h-3.5"
                    src="images/img_settings_blue_gray_700.svg"
                    alt="settings"
                  />
                  <Text
                    className="ml-1 text-blue_gray-700 text-sm"
                    size="txtMulishSemiBold14"
                  >
                    Family Plan
                  </Text>
                </div>
              </div>
              <Line className="bg-gray-200 h-px mt-[18px] w-full" />
              <div className="flex flex-row font-mulish items-end justify-between mt-1 w-[86%] md:w-full">
                <div className="flex flex-col items-center justify-start mt-1.5 w-[31%]">
                  <RatingBar
                    className="flex justify-between w-[70px]"
                    value={4}
                    starCount={5}
                    color="#cfd9de"
                    activeColor="#ffa331"
                    size={14}
                  ></RatingBar>
                  <Text
                    className="text-gray-600 text-xs"
                    size="txtMulishSemiBold12"
                  >
                    584 reviews
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start">
                  <Text
                    className="text-right text-shadow-ts text-teal-200 text-xl"
                    size="txtVolkhovBold20"
                  >
                    $4000
                  </Text>
                  <Text
                    className="text-gray-600 text-xs"
                    size="txtMulishSemiBold12"
                  >
                    per month
                  </Text>
                </div>
              </div>
            </div>
            <div className="bg-white-A700 hover:cursor-pointer flex flex-col items-center justify-end py-2 rounded-[3px] hover:shadow-bs5 shadow-bs5 hover:w-full w-full">
              <Img
                className="h-[180px] md:h-auto object-cover w-[93%]"
                src="images/img_rectangle129.png"
                alt="rectangle129"
              />
              <div className="flex flex-col gap-3 items-start justify-start mt-3 w-[84%] md:w-full">
                <Text
                  className="leading-[22.00px] text-base text-blue_gray-900 text-shadow-ts w-full"
                  size="txtVolkhovRegular16"
                >
                  Westminster to Huong River Thames
                </Text>
                <div className="flex flex-row font-mulish gap-[7px] items-center justify-start ml-0.5 md:ml-[0] w-3/5 md:w-full">
                  <Img
                    className="h-4 w-4"
                    src="images/img_clock.svg"
                    alt="clock"
                  />
                  <Text
                    className="text-blue_gray-700 text-sm"
                    size="txtMulishSemiBold14"
                  >
                    Duration 2 hours
                  </Text>
                </div>
                <div className="flex flex-row font-mulish gap-1.5 items-start justify-start w-[62%] md:w-full">
                  <Img className="h-3.5" src="images/img_car.svg" alt="car" />
                  <Text
                    className="text-blue_gray-700 text-sm"
                    size="txtMulishSemiBold14"
                  >
                    Transport Facility
                  </Text>
                </div>
                <div className="flex flex-row font-mulish items-start justify-start w-[45%] md:w-full">
                  <Img
                    className="h-3.5"
                    src="images/img_settings_blue_gray_700.svg"
                    alt="settings"
                  />
                  <Text
                    className="ml-1 text-blue_gray-700 text-sm"
                    size="txtMulishSemiBold14"
                  >
                    Family Plan
                  </Text>
                </div>
              </div>
              <Line className="bg-gray-200 h-px mt-[18px] w-full" />
              <div className="flex flex-row font-mulish items-end justify-between mt-1 w-[86%] md:w-full">
                <div className="flex flex-col items-center justify-start mt-1.5 w-[31%]">
                  <RatingBar
                    className="flex justify-between w-[70px]"
                    value={4}
                    starCount={5}
                    color="#cfd9de"
                    activeColor="#ffa331"
                    size={14}
                  ></RatingBar>
                  <Text
                    className="text-gray-600 text-xs"
                    size="txtMulishSemiBold12"
                  >
                    584 reviews
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start">
                  <Text
                    className="text-right text-shadow-ts text-teal-200 text-xl"
                    size="txtVolkhovBold20"
                  >
                    $2500
                  </Text>
                  <Text
                    className="text-gray-600 text-xs"
                    size="txtMulishSemiBold12"
                  >
                    per month
                  </Text>
                </div>
              </div>
            </div>
          </List>
          <div className="flex md:flex-col flex-row font-mulish md:gap-10 items-center justify-between max-w-[1170px] mt-[85px] mx-auto md:px-5 w-full">
            <div className="flex flex-col gap-[19px] items-start justify-start">
              <Text
                className="text-4xl sm:text-[32px] md:text-[34px] text-blue_gray-900 text-shadow-ts"
                size="txtVolkhovBold36"
              >
                From The Gallery
              </Text>
              <Text
                className="leading-[25.00px] text-base text-gray-600 w-full"
                size="txtMulishSemiBold16Gray600"
              >
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit
              </Text>
            </div>
            <Button
              className="capitalize cursor-pointer font-bold md:mt-0 my-[30px] text-center text-sm w-[190px]"
              shape="round"
              color="blue_gray_700"
              size="lg"
              variant="fill"
            >
              View All Images
            </Button>
          </div>
          <div className="flex flex-col items-center justify-start max-w-[1170px] mt-[60px] mx-auto md:px-5 w-full">
            <div className="md:gap-5 gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-full">
              <Img
                className="flex-1 h-80 md:h-auto object-cover rounded-[3px] w-full"
                src="images/img_rectangle148.png"
                alt="rectangle"
              />
              <Img
                className="flex-1 h-80 md:h-auto object-cover rounded-[3px] w-full"
                src="images/img_rectangle149.png"
                alt="rectangle"
              />
              <Img
                className="flex-1 h-80 md:h-auto object-cover rounded-[3px] w-full"
                src="images/img_rectangle150.png"
                alt="rectangle"
              />
              <Img
                className="flex-1 h-80 md:h-auto object-cover rounded-[3px] w-full"
                src="images/img_rectangle151.png"
                alt="rectangle"
              />
              <Img
                className="flex-1 h-80 md:h-auto object-cover rounded-[3px] w-full"
                src="images/img_rectangle152.png"
                alt="rectangle"
              />
              <Img
                className="flex-1 h-80 md:h-auto object-cover rounded-[3px] w-full"
                src="images/img_rectangle153.png"
                alt="rectangle"
              />
              <Img
                className="flex-1 h-80 md:h-auto object-cover rounded-[3px] w-full"
                src="images/img_rectangle154.png"
                alt="rectangle"
              />
              <Img
                className="flex-1 h-80 md:h-auto object-cover rounded-[3px] w-full"
                src="images/img_rectangle155.png"
                alt="rectangle"
              />
            </div>
          </div>
          <div className="flex md:flex-col flex-row font-mulish md:gap-10 items-center justify-between max-w-[1170px] mt-[81px] mx-auto md:px-5 w-full">
            <div className="flex flex-col gap-[19px] items-start justify-start">
              <Text
                className="text-4xl sm:text-[32px] md:text-[34px] text-blue_gray-900 text-shadow-ts"
                size="txtVolkhovBold36"
              >
                Latest Stories
              </Text>
              <Text
                className="leading-[25.00px] text-base text-gray-600 w-full"
                size="txtMulishSemiBold16Gray600"
              >
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit
              </Text>
            </div>
            <Button
              className="capitalize cursor-pointer font-bold md:mt-0 my-[30px] text-center text-sm w-[190px]"
              shape="round"
              color="blue_gray_700"
              size="lg"
              variant="fill"
            >
              View All Posts
            </Button>
          </div>
          <List
            className="sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center max-w-[1170px] mt-[59px] mx-auto md:px-5 w-full"
            orientation="horizontal"
          >
            <div className="bg-white-A700 flex flex-1 flex-col gap-2.5 items-center justify-start pb-[15px] rounded-[3px] shadow-bs5 w-full">
              <Img
                className="h-[200px] md:h-auto object-cover rounded-tl-[3px] rounded-tr-[3px] w-full"
                src="images/img_rectangle45.png"
                alt="rectangleFortyFive"
              />
              <div className="flex flex-col gap-2.5 items-start justify-start w-[86%] md:w-full">
                <div className="flex flex-row font-mulish gap-[5px] items-start justify-start w-[59%] md:w-full">
                  <Img
                    className="h-6 md:h-auto rounded-[50%] w-6"
                    src="images/img_ellipse2.png"
                    alt="ellipseTwo"
                  />
                  <Text
                    className="mt-1 text-gray-600 text-sm"
                    size="txtMulishSemiBold14Gray600"
                  >
                    Jackie Moncada
                  </Text>
                </div>
                <Text
                  className="leading-[26.00px] text-blue_gray-900 text-lg text-shadow-ts w-full"
                  size="txtVolkhovRegular18"
                >
                  7 Signs and Symptoms of Iodine Deficiency
                </Text>
              </div>
            </div>
            <div className="bg-white-A700 flex flex-1 flex-col gap-2.5 items-center justify-start pb-[15px] rounded-[3px] shadow-bs5 w-full">
              <Img
                className="h-[200px] md:h-auto object-cover rounded-tl-[3px] rounded-tr-[3px] w-full"
                src="images/img_rectangle45_200x270.png"
                alt="rectangleFortyFive"
              />
              <div className="flex flex-col gap-2.5 items-start justify-start w-[86%] md:w-full">
                <div className="flex flex-row font-mulish gap-[5px] items-start justify-start w-[59%] md:w-full">
                  <Img
                    className="h-6 md:h-auto rounded-[50%] w-6"
                    src="images/img_ellipse2.png"
                    alt="ellipseTwo"
                  />
                  <Text
                    className="mt-1 text-gray-600 text-sm"
                    size="txtMulishSemiBold14Gray600"
                  >
                    Jackie Moncada
                  </Text>
                </div>
                <Text
                  className="leading-[26.00px] text-blue_gray-900 text-lg text-shadow-ts w-full"
                  size="txtVolkhovRegular18"
                >
                  How to Fix Your Sleep Schedule: 7 Easy Ways
                </Text>
              </div>
            </div>
            <div className="bg-white-A700 flex flex-1 flex-col gap-2.5 items-center justify-start pb-[15px] rounded-[3px] shadow-bs5 w-full">
              <Img
                className="h-[200px] md:h-auto object-cover rounded-tl-[3px] rounded-tr-[3px] w-full"
                src="images/img_rectangle45_1.png"
                alt="rectangleFortyFive"
              />
              <div className="flex flex-col gap-2.5 items-start justify-start w-[86%] md:w-full">
                <div className="flex flex-row font-mulish gap-[5px] items-start justify-start w-[59%] md:w-full">
                  <Img
                    className="h-6 md:h-auto rounded-[50%] w-6"
                    src="images/img_ellipse2.png"
                    alt="ellipseTwo"
                  />
                  <Text
                    className="mt-1 text-gray-600 text-sm"
                    size="txtMulishSemiBold14Gray600"
                  >
                    Jackie Moncada
                  </Text>
                </div>
                <Text
                  className="leading-[26.00px] text-blue_gray-900 text-lg text-shadow-ts w-full"
                  size="txtVolkhovRegular18"
                >
                  10 Proven Health Benefits of Cinnamon
                </Text>
              </div>
            </div>
            <div className="bg-white-A700 flex flex-1 flex-col gap-2.5 items-center justify-start pb-[15px] rounded-[3px] shadow-bs5 w-full">
              <Img
                className="h-[200px] md:h-auto object-cover rounded-tl-[3px] rounded-tr-[3px] w-full"
                src="images/img_rectangle45_2.png"
                alt="rectangleFortyFive"
              />
              <div className="flex flex-col gap-2.5 items-start justify-start w-[86%] md:w-full">
                <div className="flex flex-row font-mulish gap-[5px] items-start justify-start w-[59%] md:w-full">
                  <Img
                    className="h-6 md:h-auto rounded-[50%] w-6"
                    src="images/img_ellipse2.png"
                    alt="ellipseTwo"
                  />
                  <Text
                    className="mt-1 text-gray-600 text-sm"
                    size="txtMulishSemiBold14Gray600"
                  >
                    Jackie Moncada
                  </Text>
                </div>
                <Text
                  className="leading-[26.00px] text-blue_gray-900 text-lg text-shadow-ts w-full"
                  size="txtVolkhovRegular18"
                >
                  11 Health Benefits of Turmeric and Curcumin
                </Text>
              </div>
            </div>
          </List>
          <Footer className="bg-blue_gray-900_01 flex font-mulish items-center justify-center mt-[157px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default SMTHomePage;
