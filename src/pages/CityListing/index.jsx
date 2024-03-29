import React from "react";

import {
  Button,
  Datepicker,
  Img,
  Input,
  Line,
  List,
  RatingBar,
  SelectBox,
  Text,
} from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const popularityOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const themeOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const durationOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const destinationOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const languageOneOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const CityListingPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-nicomoji items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <Header className="border-b border-gray-300 border-solid flex md:flex-col md:gap-10 h-[90px] md:h-auto items-center justify-between px-10 md:px-5 w-full" />
          <div className="flex md:flex-col flex-row font-mulish md:gap-10 items-center justify-between max-w-[1170px] mt-[18px] mx-auto md:px-5 w-full">
            <div className="flex flex-col gap-2 items-start justify-start">
              <Text
                className="capitalize text-[22px] text-blue_gray-900_03 sm:text-lg md:text-xl"
                size="txtVolkhovBold22"
              >
                Things to do in London
              </Text>
              <Text
                className="capitalize text-[15px] text-gray-600"
                size="txtMulishSemiBold15Gray600"
              >
                49 activities found
              </Text>
            </div>
            <div className="flex md:flex-1 flex-row gap-5 items-center justify-between w-[33%] md:w-full">
              <Text
                className="text-[15px] text-blue_gray-900"
                size="txtMulishBold15"
              >
                Sort by:
              </Text>
              <SelectBox
                className="font-semibold h-11 text-left text-sm w-[81%] sm:w-full"
                placeholderClassName="text-blue_gray-700"
                indicator={
                  <Img
                    className="h-3.5 w-3.5"
                    src="images/img_antdesigncaretdownoutlined_blue_gray_700.svg"
                    alt="ant-design:caret-down-outlined"
                  />
                }
                isMulti={false}
                name="frameTwentyTwo"
                options={popularityOptionsList}
                isSearchable={false}
                placeholder="Popularity"
                shape="round"
                color="gray_100"
                size="xs"
                variant="fill"
              />
            </div>
          </div>
          <div className="bg-gray-50_02 flex md:flex-col flex-row font-mulish gap-[30px] items-start justify-start mt-4 p-[30px] sm:px-5 w-full">
            <div className="flex md:flex-1 flex-col gap-2.5 items-center justify-start md:ml-[0] ml-[105px] md:px-5 w-1/5 md:w-full">
              <div className="bg-white-A700 flex flex-col items-start justify-start py-[13px] rounded shadow-bs1 w-full">
                <Text
                  className="capitalize md:ml-[0] ml-[30px] text-blue_gray-900_03 text-lg"
                  size="txtMulishBold18"
                >
                  Availability
                </Text>
                <Line className="bg-gray-100 h-px mt-[13px] w-full" />
                <div className="flex flex-col items-center justify-start mb-4 md:ml-[0] ml-[30px] mt-[26px] w-[78%] md:w-full">
                  <div className="flex flex-col gap-2 items-start justify-start w-full">
                    <Text
                      className="capitalize text-[15px] text-blue_gray-900"
                      size="txtMulishBold15"
                    >
                      From
                    </Text>
                    <Datepicker
                      className="frameTwenty"
                      placeholder="10/12/2021"
                    ></Datepicker>
                  </div>
                  <div className="flex flex-col gap-2 items-start justify-start mt-4 w-full">
                    <Text
                      className="capitalize text-[15px] text-blue_gray-900"
                      size="txtMulishBold15"
                    >
                      To
                    </Text>
                    <Datepicker
                      className="frameTwenty_One"
                      placeholder="10/12/2021"
                    ></Datepicker>
                  </div>
                  <Button
                    className="capitalize cursor-pointer font-bold h-[50px] leading-[normal] mt-[30px] text-[15px] text-center w-[210px]"
                    shape="round"
                    color="teal_200"
                    size="md"
                    variant="fill"
                  >
                    check availability
                  </Button>
                </div>
              </div>
              <List
                className="flex flex-col gap-2.5 items-center w-full"
                orientation="vertical"
              >
                <div className="flex flex-1 flex-col items-center justify-start w-full">
                  <div className="bg-white-A700 flex flex-col gap-[15px] justify-start py-[11px] rounded shadow-bs1 w-full">
                    <SelectBox
                      className="capitalize font-bold md:ml-[0] ml-[30px] text-blue_gray-900_03 text-left text-lg w-[83%] sm:w-full"
                      placeholderClassName="text-blue_gray-900_03"
                      indicator={
                        <Img
                          className="h-3.5 mr-[0] w-3.5"
                          src="images/img_antdesigncaretdownoutlined_blue_gray_700.svg"
                          alt="ant-design:caret-down-outlined"
                        />
                      }
                      isMulti={false}
                      name="groupNine"
                      options={themeOptionsList}
                      isSearchable={false}
                      placeholder="Theme"
                    />
                    <div className="flex flex-col items-center justify-start mb-3.5 w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex flex-col gap-[22px] justify-start w-full">
                          <Line className="bg-gray-100 h-px w-full" />
                          <div className="flex flex-col gap-3 items-start justify-start md:ml-[0] ml-[30px] w-[73%] md:w-full">
                            <div className="flex flex-row gap-2.5 items-center justify-start w-full">
                              <div className="flex flex-col gap-4 items-center justify-start w-[8%]">
                                <div className="bg-white-A700 border border-blue_gray-700 border-solid h-3.5 rounded-sm w-3.5"></div>
                                <div className="bg-white-A700 border border-blue_gray-700 border-solid h-3.5 rounded-sm w-3.5"></div>
                                <div className="bg-white-A700 border border-blue_gray-700 border-solid h-3.5 rounded-sm w-3.5"></div>
                                <div className="bg-white-A700 border border-blue_gray-700 border-solid h-3.5 rounded-sm w-3.5"></div>
                                <div className="bg-white-A700 border border-blue_gray-700 border-solid h-3.5 rounded-sm w-3.5"></div>
                                <div className="bg-white-A700 border border-blue_gray-700 border-solid h-3.5 rounded-sm w-3.5"></div>
                                <div className="bg-white-A700 border border-blue_gray-700 border-solid h-3.5 rounded-sm w-3.5"></div>
                              </div>
                              <Text
                                className="leading-[30.00px] text-blue_gray-700 text-sm"
                                size="txtMulishSemiBold14"
                              >
                                <>
                                  Water activities
                                  <br />
                                  Good for social distancing
                                  <br />
                                  Adrenaline
                                  <br />
                                  Nature
                                  <br />
                                  Hidden gems
                                  <br />
                                  Street art & grafitti
                                  <br />
                                  Food
                                </>
                              </Text>
                            </div>
                            <Text
                              className="text-sm text-teal-200"
                              size="txtMulishBold14Teal200"
                            >
                              Show More Destinations
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col items-center justify-start w-full">
                  <div className="bg-white-A700 flex flex-col gap-[15px] justify-start py-[11px] rounded shadow-bs1 w-full">
                    <SelectBox
                      className="capitalize font-bold md:ml-[0] ml-[30px] text-blue_gray-900_03 text-left text-lg w-[83%] sm:w-full"
                      placeholderClassName="text-blue_gray-900_03"
                      indicator={
                        <Img
                          className="h-3.5 mr-[0] w-3.5"
                          src="images/img_antdesigncaretdownoutlined_blue_gray_700.svg"
                          alt="ant-design:caret-down-outlined"
                        />
                      }
                      isMulti={false}
                      name="groupTwelve"
                      options={durationOptionsList}
                      isSearchable={false}
                      placeholder="Duration"
                    />
                    <div className="flex flex-col items-center justify-start mb-[15px] w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex flex-col gap-[22px] justify-start w-full">
                          <Line className="bg-gray-100 h-px w-full" />
                          <div className="flex flex-row gap-2.5 items-center justify-start md:ml-[0] ml-[30px] w-[55%] md:w-full">
                            <div className="flex flex-col gap-4 items-center justify-start w-[10%]">
                              <div className="bg-white-A700 border border-blue_gray-700 border-solid h-3.5 rounded-sm w-3.5"></div>
                              <div className="bg-white-A700 border border-blue_gray-700 border-solid h-3.5 rounded-sm w-3.5"></div>
                              <div className="bg-white-A700 border border-blue_gray-700 border-solid h-3.5 rounded-sm w-3.5"></div>
                              <div className="bg-white-A700 border border-blue_gray-700 border-solid h-3.5 rounded-sm w-3.5"></div>
                              <div className="bg-white-A700 border border-blue_gray-700 border-solid h-3.5 rounded-sm w-3.5"></div>
                            </div>
                            <Text
                              className="leading-[30.00px] text-blue_gray-700 text-sm"
                              size="txtMulishSemiBold14"
                            >
                              <>
                                0-3 hours
                                <br />
                                3-5 hours
                                <br />
                                5-7 hours
                                <br />
                                Full day (7+ hours)
                                <br />
                                Multi-day
                              </>
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col items-center justify-start w-full">
                  <div className="bg-white-A700 flex flex-col gap-[15px] justify-start py-[11px] rounded shadow-bs1 w-full">
                    <SelectBox
                      className="capitalize font-bold md:ml-[0] ml-[30px] text-blue_gray-900_03 text-left text-lg w-[83%] sm:w-full"
                      placeholderClassName="text-blue_gray-900_03"
                      indicator={
                        <Img
                          className="h-3.5 mr-[0] w-3.5"
                          src="images/img_antdesigncaretdownoutlined_blue_gray_700.svg"
                          alt="ant-design:caret-down-outlined"
                        />
                      }
                      isMulti={false}
                      name="groupFifteen"
                      options={destinationOptionsList}
                      isSearchable={false}
                      placeholder="Destination"
                    />
                    <div className="flex flex-col items-center justify-start mb-3.5 w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex flex-col gap-[22px] justify-start w-full">
                          <Line className="bg-gray-100 h-px w-full" />
                          <div className="flex flex-col gap-3 items-start justify-start md:ml-[0] ml-[30px] w-[71%] md:w-full">
                            <div className="flex flex-row gap-2.5 items-center justify-start w-full">
                              <div className="flex flex-col gap-4 items-center justify-start w-[8%]">
                                <div className="bg-white-A700 border border-blue_gray-700 border-solid h-3.5 rounded-sm w-3.5"></div>
                                <div className="bg-white-A700 border border-blue_gray-700 border-solid h-3.5 rounded-sm w-3.5"></div>
                                <div className="bg-white-A700 border border-blue_gray-700 border-solid h-3.5 rounded-sm w-3.5"></div>
                                <div className="bg-white-A700 border border-blue_gray-700 border-solid h-3.5 rounded-sm w-3.5"></div>
                                <div className="bg-white-A700 border border-blue_gray-700 border-solid h-3.5 rounded-sm w-3.5"></div>
                                <div className="bg-white-A700 border border-blue_gray-700 border-solid h-3.5 rounded-sm w-3.5"></div>
                                <div className="bg-white-A700 border border-blue_gray-700 border-solid h-3.5 rounded-sm w-3.5"></div>
                              </div>
                              <Text
                                className="leading-[30.00px] text-blue_gray-700 text-sm"
                                size="txtMulishSemiBold14"
                              >
                                <>
                                  Biscayne Bay
                                  <br />
                                  Downtown Miami
                                  <br />
                                  Wynwood Arts District
                                  <br />
                                  Port of Miami
                                  <br />
                                  Everglades National Park
                                  <br />
                                  Fisher Island
                                  <br />
                                  Coconut Grove
                                </>
                              </Text>
                            </div>
                            <Text
                              className="text-sm text-teal-200"
                              size="txtMulishBold14Teal200"
                            >
                              Show More Destinations
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </List>
            </div>
            <div className="flex md:flex-1 flex-col gap-[30px] items-center justify-start mb-[50px] md:px-5 w-[64%] md:w-full">
              <List
                className="flex flex-col gap-2.5 items-center w-full"
                orientation="vertical"
              >
                <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start my-0 rounded shadow-bs5 w-full">
                  <div className="flex md:flex-col flex-row gap-5 items-center justify-between w-[97%] md:w-full">
                    <Img
                      className="h-[140px] md:h-auto object-cover rounded"
                      src="images/img_rectangle129_140x150.png"
                      alt="rectangle129"
                    />
                    <div className="flex flex-col items-start justify-start">
                      <div className="flex flex-row gap-[15px] items-center justify-start w-auto">
                        <Button
                          className="cursor-pointer font-extrabold leading-[normal] rounded-[13px] text-[11px] text-center uppercase w-[130px]"
                          color="teal_200"
                          size="xs"
                          variant="fill"
                        >
                          Water Activities
                        </Button>
                        <div className="bg-blue_gray-100_03 h-3.5 w-[1%]"></div>
                        <div className="flex flex-row gap-1.5 items-start justify-between w-[49%]">
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
                            (584 reviews)
                          </Text>
                        </div>
                      </div>
                      <div className="flex sm:flex-col flex-row font-volkhov sm:gap-10 items-start justify-between mt-1.5 w-full">
                        <Text
                          className="sm:mt-0 mt-[5px] text-blue_gray-900 text-shadow-ts text-xl"
                          size="txtVolkhovBold20Bluegray900"
                        >
                          Westminster to Greenwich River Thames
                        </Text>
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="text-right text-shadow-ts text-teal-200 text-xl"
                            size="txtVolkhovBold20"
                          >
                            $35.00
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[5px] text-gray-600 text-xs"
                            size="txtMulishSemiBold12"
                          >
                            per person
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-row font-mulish gap-[15px] items-center justify-start w-auto">
                        <div className="flex flex-row gap-[7px] items-center justify-start w-[23%]">
                          <Img
                            className="h-4 w-4"
                            src="images/img_clock.svg"
                            alt="clock"
                          />
                          <Text
                            className="text-blue_gray-700 text-sm"
                            size="txtMulishSemiBold14"
                          >
                            2 hours
                          </Text>
                        </div>
                        <div className="bg-blue_gray-100_03 h-3.5 w-[1%]"></div>
                        <div className="flex flex-row gap-1.5 items-start justify-center w-[28%]">
                          <Img
                            className="h-3.5"
                            src="images/img_car.svg"
                            alt="car"
                          />
                          <Text
                            className="text-blue_gray-700 text-sm"
                            size="txtMulishSemiBold14"
                          >
                            Transport{" "}
                          </Text>
                        </div>
                        <div className="bg-blue_gray-100_03 h-3.5 w-[1%]"></div>
                        <div className="flex flex-row items-start justify-evenly w-[32%]">
                          <Img
                            className="h-3.5"
                            src="images/img_settings_blue_gray_700.svg"
                            alt="settings"
                          />
                          <Text
                            className="text-blue_gray-700 text-sm"
                            size="txtMulishSemiBold14"
                          >
                            Family Plan
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start my-0 rounded shadow-bs5 w-full">
                  <div className="flex md:flex-col flex-row gap-5 items-center justify-between w-[97%] md:w-full">
                    <Img
                      className="h-[140px] md:h-auto object-cover rounded"
                      src="images/img_rectangle129_3.png"
                      alt="rectangle129"
                    />
                    <div className="flex flex-col items-start justify-start">
                      <div className="flex flex-row gap-[15px] items-center justify-start w-auto">
                        <Button
                          className="cursor-pointer font-extrabold leading-[normal] rounded-[13px] text-[11px] text-center uppercase w-[130px]"
                          color="teal_200"
                          size="xs"
                          variant="fill"
                        >
                          Water Activities
                        </Button>
                        <div className="bg-blue_gray-100_03 h-3.5 w-[1%]"></div>
                        <div className="flex flex-row gap-1.5 items-start justify-between w-[49%]">
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
                            (584 reviews)
                          </Text>
                        </div>
                      </div>
                      <div className="flex sm:flex-col flex-row font-volkhov sm:gap-10 items-start justify-between mt-1.5 w-full">
                        <Text
                          className="sm:mt-0 mt-[5px] text-blue_gray-900 text-shadow-ts text-xl"
                          size="txtVolkhovBold20Bluegray900"
                        >
                          Westminster to Greenwich River Thames
                        </Text>
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="text-right text-shadow-ts text-teal-200 text-xl"
                            size="txtVolkhovBold20"
                          >
                            $35.00
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[5px] text-gray-600 text-xs"
                            size="txtMulishSemiBold12"
                          >
                            per person
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-row font-mulish gap-[15px] items-center justify-start w-auto">
                        <div className="flex flex-row gap-[7px] items-center justify-start w-[23%]">
                          <Img
                            className="h-4 w-4"
                            src="images/img_clock.svg"
                            alt="clock"
                          />
                          <Text
                            className="text-blue_gray-700 text-sm"
                            size="txtMulishSemiBold14"
                          >
                            2 hours
                          </Text>
                        </div>
                        <div className="bg-blue_gray-100_03 h-3.5 w-[1%]"></div>
                        <div className="flex flex-row gap-1.5 items-start justify-center w-[28%]">
                          <Img
                            className="h-3.5"
                            src="images/img_car.svg"
                            alt="car"
                          />
                          <Text
                            className="text-blue_gray-700 text-sm"
                            size="txtMulishSemiBold14"
                          >
                            Transport{" "}
                          </Text>
                        </div>
                        <div className="bg-blue_gray-100_03 h-3.5 w-[1%]"></div>
                        <div className="flex flex-row items-start justify-evenly w-[32%]">
                          <Img
                            className="h-3.5"
                            src="images/img_settings_blue_gray_700.svg"
                            alt="settings"
                          />
                          <Text
                            className="text-blue_gray-700 text-sm"
                            size="txtMulishSemiBold14"
                          >
                            Family Plan
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start my-0 rounded shadow-bs5 w-full">
                  <div className="flex md:flex-col flex-row gap-5 items-center justify-between w-[97%] md:w-full">
                    <Img
                      className="h-[140px] md:h-auto object-cover rounded"
                      src="images/img_rectangle129_4.png"
                      alt="rectangle129"
                    />
                    <div className="flex flex-col items-start justify-start">
                      <div className="flex flex-row gap-[15px] items-center justify-start w-auto">
                        <Button
                          className="cursor-pointer font-extrabold leading-[normal] rounded-[13px] text-[11px] text-center uppercase w-[130px]"
                          color="teal_200"
                          size="xs"
                          variant="fill"
                        >
                          Water Activities
                        </Button>
                        <div className="bg-blue_gray-100_03 h-3.5 w-[1%]"></div>
                        <div className="flex flex-row gap-1.5 items-start justify-between w-[49%]">
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
                            (584 reviews)
                          </Text>
                        </div>
                      </div>
                      <div className="flex sm:flex-col flex-row font-volkhov sm:gap-10 items-start justify-between mt-1.5 w-full">
                        <Text
                          className="sm:mt-0 mt-[5px] text-blue_gray-900 text-shadow-ts text-xl"
                          size="txtVolkhovBold20Bluegray900"
                        >
                          Westminster to Greenwich River Thames
                        </Text>
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="text-right text-shadow-ts text-teal-200 text-xl"
                            size="txtVolkhovBold20"
                          >
                            $35.00
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[5px] text-gray-600 text-xs"
                            size="txtMulishSemiBold12"
                          >
                            per person
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-row font-mulish gap-[15px] items-center justify-start w-auto">
                        <div className="flex flex-row gap-[7px] items-center justify-start w-[23%]">
                          <Img
                            className="h-4 w-4"
                            src="images/img_clock.svg"
                            alt="clock"
                          />
                          <Text
                            className="text-blue_gray-700 text-sm"
                            size="txtMulishSemiBold14"
                          >
                            2 hours
                          </Text>
                        </div>
                        <div className="bg-blue_gray-100_03 h-3.5 w-[1%]"></div>
                        <div className="flex flex-row gap-1.5 items-start justify-center w-[28%]">
                          <Img
                            className="h-3.5"
                            src="images/img_car.svg"
                            alt="car"
                          />
                          <Text
                            className="text-blue_gray-700 text-sm"
                            size="txtMulishSemiBold14"
                          >
                            Transport{" "}
                          </Text>
                        </div>
                        <div className="bg-blue_gray-100_03 h-3.5 w-[1%]"></div>
                        <div className="flex flex-row items-start justify-evenly w-[32%]">
                          <Img
                            className="h-3.5"
                            src="images/img_settings_blue_gray_700.svg"
                            alt="settings"
                          />
                          <Text
                            className="text-blue_gray-700 text-sm"
                            size="txtMulishSemiBold14"
                          >
                            Family Plan
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start my-0 rounded shadow-bs5 w-full">
                  <div className="flex md:flex-col flex-row gap-5 items-center justify-between w-[97%] md:w-full">
                    <Img
                      className="h-[140px] md:h-auto object-cover rounded"
                      src="images/img_rectangle129_5.png"
                      alt="rectangle129"
                    />
                    <div className="flex flex-col items-start justify-start">
                      <div className="flex flex-row gap-[15px] items-center justify-start w-auto">
                        <Button
                          className="cursor-pointer font-extrabold leading-[normal] rounded-[13px] text-[11px] text-center uppercase w-[130px]"
                          color="teal_200"
                          size="xs"
                          variant="fill"
                        >
                          Water Activities
                        </Button>
                        <div className="bg-blue_gray-100_03 h-3.5 w-[1%]"></div>
                        <div className="flex flex-row gap-1.5 items-start justify-between w-[49%]">
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
                            (584 reviews)
                          </Text>
                        </div>
                      </div>
                      <div className="flex sm:flex-col flex-row font-volkhov sm:gap-10 items-start justify-between mt-1.5 w-full">
                        <Text
                          className="sm:mt-0 mt-[5px] text-blue_gray-900 text-shadow-ts text-xl"
                          size="txtVolkhovBold20Bluegray900"
                        >
                          Westminster to Greenwich River Thames
                        </Text>
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="text-right text-shadow-ts text-teal-200 text-xl"
                            size="txtVolkhovBold20"
                          >
                            $35.00
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[5px] text-gray-600 text-xs"
                            size="txtMulishSemiBold12"
                          >
                            per person
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-row font-mulish gap-[15px] items-center justify-start w-auto">
                        <div className="flex flex-row gap-[7px] items-center justify-start w-[23%]">
                          <Img
                            className="h-4 w-4"
                            src="images/img_clock.svg"
                            alt="clock"
                          />
                          <Text
                            className="text-blue_gray-700 text-sm"
                            size="txtMulishSemiBold14"
                          >
                            2 hours
                          </Text>
                        </div>
                        <div className="bg-blue_gray-100_03 h-3.5 w-[1%]"></div>
                        <div className="flex flex-row gap-1.5 items-start justify-center w-[28%]">
                          <Img
                            className="h-3.5"
                            src="images/img_car.svg"
                            alt="car"
                          />
                          <Text
                            className="text-blue_gray-700 text-sm"
                            size="txtMulishSemiBold14"
                          >
                            Transport{" "}
                          </Text>
                        </div>
                        <div className="bg-blue_gray-100_03 h-3.5 w-[1%]"></div>
                        <div className="flex flex-row items-start justify-evenly w-[32%]">
                          <Img
                            className="h-3.5"
                            src="images/img_settings_blue_gray_700.svg"
                            alt="settings"
                          />
                          <Text
                            className="text-blue_gray-700 text-sm"
                            size="txtMulishSemiBold14"
                          >
                            Family Plan
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start my-0 rounded shadow-bs5 w-full">
                  <div className="flex md:flex-col flex-row gap-5 items-center justify-between w-[97%] md:w-full">
                    <Img
                      className="h-[140px] md:h-auto object-cover rounded"
                      src="images/img_rectangle129_6.png"
                      alt="rectangle129"
                    />
                    <div className="flex flex-col items-start justify-start">
                      <div className="flex flex-row gap-[15px] items-center justify-start w-auto">
                        <Button
                          className="cursor-pointer font-extrabold leading-[normal] rounded-[13px] text-[11px] text-center uppercase w-[130px]"
                          color="teal_200"
                          size="xs"
                          variant="fill"
                        >
                          Water Activities
                        </Button>
                        <div className="bg-blue_gray-100_03 h-3.5 w-[1%]"></div>
                        <div className="flex flex-row gap-1.5 items-start justify-between w-[49%]">
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
                            (584 reviews)
                          </Text>
                        </div>
                      </div>
                      <div className="flex sm:flex-col flex-row font-volkhov sm:gap-10 items-start justify-between mt-1.5 w-full">
                        <Text
                          className="sm:mt-0 mt-[5px] text-blue_gray-900 text-shadow-ts text-xl"
                          size="txtVolkhovBold20Bluegray900"
                        >
                          Westminster to Greenwich River Thames
                        </Text>
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="text-right text-shadow-ts text-teal-200 text-xl"
                            size="txtVolkhovBold20"
                          >
                            $35.00
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[5px] text-gray-600 text-xs"
                            size="txtMulishSemiBold12"
                          >
                            per person
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-row font-mulish gap-[15px] items-center justify-start w-auto">
                        <div className="flex flex-row gap-[7px] items-center justify-start w-[23%]">
                          <Img
                            className="h-4 w-4"
                            src="images/img_clock.svg"
                            alt="clock"
                          />
                          <Text
                            className="text-blue_gray-700 text-sm"
                            size="txtMulishSemiBold14"
                          >
                            2 hours
                          </Text>
                        </div>
                        <div className="bg-blue_gray-100_03 h-3.5 w-[1%]"></div>
                        <div className="flex flex-row gap-1.5 items-start justify-center w-[28%]">
                          <Img
                            className="h-3.5"
                            src="images/img_car.svg"
                            alt="car"
                          />
                          <Text
                            className="text-blue_gray-700 text-sm"
                            size="txtMulishSemiBold14"
                          >
                            Transport{" "}
                          </Text>
                        </div>
                        <div className="bg-blue_gray-100_03 h-3.5 w-[1%]"></div>
                        <div className="flex flex-row items-start justify-evenly w-[32%]">
                          <Img
                            className="h-3.5"
                            src="images/img_settings_blue_gray_700.svg"
                            alt="settings"
                          />
                          <Text
                            className="text-blue_gray-700 text-sm"
                            size="txtMulishSemiBold14"
                          >
                            Family Plan
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start my-0 rounded shadow-bs5 w-full">
                  <div className="flex md:flex-col flex-row gap-5 items-center justify-between w-[97%] md:w-full">
                    <Img
                      className="h-[140px] md:h-auto object-cover rounded"
                      src="images/img_rectangle129_7.png"
                      alt="rectangle129"
                    />
                    <div className="flex flex-col items-start justify-start">
                      <div className="flex flex-row gap-[15px] items-center justify-start w-auto">
                        <Button
                          className="cursor-pointer font-extrabold leading-[normal] rounded-[13px] text-[11px] text-center uppercase w-[130px]"
                          color="teal_200"
                          size="xs"
                          variant="fill"
                        >
                          Water Activities
                        </Button>
                        <div className="bg-blue_gray-100_03 h-3.5 w-[1%]"></div>
                        <div className="flex flex-row gap-1.5 items-start justify-between w-[49%]">
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
                            (584 reviews)
                          </Text>
                        </div>
                      </div>
                      <div className="flex sm:flex-col flex-row font-volkhov sm:gap-10 items-start justify-between mt-1.5 w-full">
                        <Text
                          className="sm:mt-0 mt-[5px] text-blue_gray-900 text-shadow-ts text-xl"
                          size="txtVolkhovBold20Bluegray900"
                        >
                          Westminster to Greenwich River Thames
                        </Text>
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="text-right text-shadow-ts text-teal-200 text-xl"
                            size="txtVolkhovBold20"
                          >
                            $35.00
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[5px] text-gray-600 text-xs"
                            size="txtMulishSemiBold12"
                          >
                            per person
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-row font-mulish gap-[15px] items-center justify-start w-auto">
                        <div className="flex flex-row gap-[7px] items-center justify-start w-[23%]">
                          <Img
                            className="h-4 w-4"
                            src="images/img_clock.svg"
                            alt="clock"
                          />
                          <Text
                            className="text-blue_gray-700 text-sm"
                            size="txtMulishSemiBold14"
                          >
                            2 hours
                          </Text>
                        </div>
                        <div className="bg-blue_gray-100_03 h-3.5 w-[1%]"></div>
                        <div className="flex flex-row gap-1.5 items-start justify-center w-[28%]">
                          <Img
                            className="h-3.5"
                            src="images/img_car.svg"
                            alt="car"
                          />
                          <Text
                            className="text-blue_gray-700 text-sm"
                            size="txtMulishSemiBold14"
                          >
                            Transport{" "}
                          </Text>
                        </div>
                        <div className="bg-blue_gray-100_03 h-3.5 w-[1%]"></div>
                        <div className="flex flex-row items-start justify-evenly w-[32%]">
                          <Img
                            className="h-3.5"
                            src="images/img_settings_blue_gray_700.svg"
                            alt="settings"
                          />
                          <Text
                            className="text-blue_gray-700 text-sm"
                            size="txtMulishSemiBold14"
                          >
                            Family Plan
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start my-0 rounded shadow-bs5 w-full">
                  <div className="flex md:flex-col flex-row gap-5 items-center justify-between w-[97%] md:w-full">
                    <Img
                      className="h-[140px] md:h-auto object-cover rounded"
                      src="images/img_rectangle129_8.png"
                      alt="rectangle129"
                    />
                    <div className="flex flex-col items-start justify-start">
                      <div className="flex flex-row gap-[15px] items-center justify-start w-auto">
                        <Button
                          className="cursor-pointer font-extrabold leading-[normal] rounded-[13px] text-[11px] text-center uppercase w-[130px]"
                          color="teal_200"
                          size="xs"
                          variant="fill"
                        >
                          Water Activities
                        </Button>
                        <div className="bg-blue_gray-100_03 h-3.5 w-[1%]"></div>
                        <div className="flex flex-row gap-1.5 items-start justify-between w-[49%]">
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
                            (584 reviews)
                          </Text>
                        </div>
                      </div>
                      <div className="flex sm:flex-col flex-row font-volkhov sm:gap-10 items-start justify-between mt-1.5 w-full">
                        <Text
                          className="sm:mt-0 mt-[5px] text-blue_gray-900 text-shadow-ts text-xl"
                          size="txtVolkhovBold20Bluegray900"
                        >
                          Westminster to Greenwich River Thames
                        </Text>
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="text-right text-shadow-ts text-teal-200 text-xl"
                            size="txtVolkhovBold20"
                          >
                            $35.00
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[5px] text-gray-600 text-xs"
                            size="txtMulishSemiBold12"
                          >
                            per person
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-row font-mulish gap-[15px] items-center justify-start w-auto">
                        <div className="flex flex-row gap-[7px] items-center justify-start w-[23%]">
                          <Img
                            className="h-4 w-4"
                            src="images/img_clock.svg"
                            alt="clock"
                          />
                          <Text
                            className="text-blue_gray-700 text-sm"
                            size="txtMulishSemiBold14"
                          >
                            2 hours
                          </Text>
                        </div>
                        <div className="bg-blue_gray-100_03 h-3.5 w-[1%]"></div>
                        <div className="flex flex-row gap-1.5 items-start justify-center w-[28%]">
                          <Img
                            className="h-3.5"
                            src="images/img_car.svg"
                            alt="car"
                          />
                          <Text
                            className="text-blue_gray-700 text-sm"
                            size="txtMulishSemiBold14"
                          >
                            Transport{" "}
                          </Text>
                        </div>
                        <div className="bg-blue_gray-100_03 h-3.5 w-[1%]"></div>
                        <div className="flex flex-row items-start justify-evenly w-[32%]">
                          <Img
                            className="h-3.5"
                            src="images/img_settings_blue_gray_700.svg"
                            alt="settings"
                          />
                          <Text
                            className="text-blue_gray-700 text-sm"
                            size="txtMulishSemiBold14"
                          >
                            Family Plan
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start my-0 rounded shadow-bs5 w-full">
                  <div className="flex md:flex-col flex-row gap-5 items-center justify-between w-[97%] md:w-full">
                    <Img
                      className="h-[140px] md:h-auto object-cover rounded"
                      src="images/img_rectangle129_3.png"
                      alt="rectangle129"
                    />
                    <div className="flex flex-col items-start justify-start">
                      <div className="flex flex-row gap-[15px] items-center justify-start w-auto">
                        <Button
                          className="cursor-pointer font-extrabold leading-[normal] rounded-[13px] text-[11px] text-center uppercase w-[130px]"
                          color="teal_200"
                          size="xs"
                          variant="fill"
                        >
                          Water Activities
                        </Button>
                        <div className="bg-blue_gray-100_03 h-3.5 w-[1%]"></div>
                        <div className="flex flex-row gap-1.5 items-start justify-between w-[49%]">
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
                            (584 reviews)
                          </Text>
                        </div>
                      </div>
                      <div className="flex sm:flex-col flex-row font-volkhov sm:gap-10 items-start justify-between mt-1.5 w-full">
                        <Text
                          className="sm:mt-0 mt-[5px] text-blue_gray-900 text-shadow-ts text-xl"
                          size="txtVolkhovBold20Bluegray900"
                        >
                          Westminster to Greenwich River Thames
                        </Text>
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="text-right text-shadow-ts text-teal-200 text-xl"
                            size="txtVolkhovBold20"
                          >
                            $35.00
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[5px] text-gray-600 text-xs"
                            size="txtMulishSemiBold12"
                          >
                            per person
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-row font-mulish gap-[15px] items-center justify-start w-auto">
                        <div className="flex flex-row gap-[7px] items-center justify-start w-[23%]">
                          <Img
                            className="h-4 w-4"
                            src="images/img_clock.svg"
                            alt="clock"
                          />
                          <Text
                            className="text-blue_gray-700 text-sm"
                            size="txtMulishSemiBold14"
                          >
                            2 hours
                          </Text>
                        </div>
                        <div className="bg-blue_gray-100_03 h-3.5 w-[1%]"></div>
                        <div className="flex flex-row gap-1.5 items-start justify-center w-[28%]">
                          <Img
                            className="h-3.5"
                            src="images/img_car.svg"
                            alt="car"
                          />
                          <Text
                            className="text-blue_gray-700 text-sm"
                            size="txtMulishSemiBold14"
                          >
                            Transport{" "}
                          </Text>
                        </div>
                        <div className="bg-blue_gray-100_03 h-3.5 w-[1%]"></div>
                        <div className="flex flex-row items-start justify-evenly w-[32%]">
                          <Img
                            className="h-3.5"
                            src="images/img_settings_blue_gray_700.svg"
                            alt="settings"
                          />
                          <Text
                            className="text-blue_gray-700 text-sm"
                            size="txtMulishSemiBold14"
                          >
                            Family Plan
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start my-0 rounded shadow-bs5 w-full">
                  <div className="flex md:flex-col flex-row gap-5 items-center justify-between w-[97%] md:w-full">
                    <Img
                      className="h-[140px] md:h-auto object-cover rounded"
                      src="images/img_rectangle129_9.png"
                      alt="rectangle129"
                    />
                    <div className="flex flex-col items-start justify-start">
                      <div className="flex flex-row gap-[15px] items-center justify-start w-auto">
                        <Button
                          className="cursor-pointer font-extrabold leading-[normal] rounded-[13px] text-[11px] text-center uppercase w-[130px]"
                          color="teal_200"
                          size="xs"
                          variant="fill"
                        >
                          Water Activities
                        </Button>
                        <div className="bg-blue_gray-100_03 h-3.5 w-[1%]"></div>
                        <div className="flex flex-row gap-1.5 items-start justify-between w-[49%]">
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
                            (584 reviews)
                          </Text>
                        </div>
                      </div>
                      <div className="flex sm:flex-col flex-row font-volkhov sm:gap-10 items-start justify-between mt-1.5 w-full">
                        <Text
                          className="sm:mt-0 mt-[5px] text-blue_gray-900 text-shadow-ts text-xl"
                          size="txtVolkhovBold20Bluegray900"
                        >
                          Westminster to Greenwich River Thames
                        </Text>
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="text-right text-shadow-ts text-teal-200 text-xl"
                            size="txtVolkhovBold20"
                          >
                            $35.00
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[5px] text-gray-600 text-xs"
                            size="txtMulishSemiBold12"
                          >
                            per person
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-row font-mulish gap-[15px] items-center justify-start w-auto">
                        <div className="flex flex-row gap-[7px] items-center justify-start w-[23%]">
                          <Img
                            className="h-4 w-4"
                            src="images/img_clock.svg"
                            alt="clock"
                          />
                          <Text
                            className="text-blue_gray-700 text-sm"
                            size="txtMulishSemiBold14"
                          >
                            2 hours
                          </Text>
                        </div>
                        <div className="bg-blue_gray-100_03 h-3.5 w-[1%]"></div>
                        <div className="flex flex-row gap-1.5 items-start justify-center w-[28%]">
                          <Img
                            className="h-3.5"
                            src="images/img_car.svg"
                            alt="car"
                          />
                          <Text
                            className="text-blue_gray-700 text-sm"
                            size="txtMulishSemiBold14"
                          >
                            Transport{" "}
                          </Text>
                        </div>
                        <div className="bg-blue_gray-100_03 h-3.5 w-[1%]"></div>
                        <div className="flex flex-row items-start justify-evenly w-[32%]">
                          <Img
                            className="h-3.5"
                            src="images/img_settings_blue_gray_700.svg"
                            alt="settings"
                          />
                          <Text
                            className="text-blue_gray-700 text-sm"
                            size="txtMulishSemiBold14"
                          >
                            Family Plan
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </List>
              <Button
                className="!text-teal-200 border border-solid border-teal-200 capitalize cursor-pointer font-bold min-w-[870px] md:min-w-full rounded-[25px] text-base text-center"
                color="white_A700"
                size="md"
                variant="fill"
              >
                Load More
              </Button>
            </div>
          </div>
          <div className="flex flex-col font-volkhov items-center justify-start max-w-[1170px] mt-14 mx-auto md:px-5 w-full">
            <div className="flex flex-col items-start justify-start w-full">
              <Text
                className="capitalize text-[22px] text-blue_gray-900_03 sm:text-lg md:text-xl"
                size="txtVolkhovBold22"
              >
                outside the city specials
              </Text>
              <div className="flex flex-row font-mulish md:gap-10 items-center justify-between mt-[49px] w-full">
                <Button
                  className="cursor-pointer font-extrabold h-10 leading-[normal] my-[5px] rounded-[20px] text-center text-xs uppercase w-40"
                  color="teal_200"
                  size="sm"
                  variant="fill"
                >
                  Water Activities
                </Button>
                <Img
                  className="h-[50px]"
                  src="images/img_group211.svg"
                  alt="group211"
                />
              </div>
              <List
                className="flex flex-col font-volkhov gap-[15px] items-center mt-5 w-full"
                orientation="vertical"
              >
                <div className="flex-1 gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-center justify-between w-full">
                  <div className="bg-white-A700 flex flex-1 flex-col items-center justify-end py-1.5 rounded-[3px] shadow-bs5 w-full">
                    <Img
                      className="h-[180px] md:h-auto mt-[3px] object-cover w-[93%]"
                      src="images/img_rectangle129.png"
                      alt="rectangle129"
                    />
                    <div className="flex flex-col gap-3 items-start justify-start mt-3 w-[84%] md:w-full">
                      <Text
                        className="leading-[22.00px] text-base text-blue_gray-900 text-shadow-ts w-full"
                        size="txtVolkhovRegular16"
                      >
                        Alaska: Westminster to Greenwich River Thames
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
                        <Img
                          className="h-3.5"
                          src="images/img_car.svg"
                          alt="car"
                        />
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
                      <div className="flex flex-col items-center justify-start mb-0.5 mt-1.5 w-[31%]">
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
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="text-right text-shadow-ts text-teal-200 text-xl"
                          size="txtVolkhovBold20"
                        >
                          $35.00
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[5px] text-gray-600 text-xs"
                          size="txtMulishSemiBold12"
                        >
                          per person
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-1 flex-col items-center justify-end py-1.5 rounded-[3px] shadow-bs5 w-full">
                    <Img
                      className="h-[180px] md:h-auto mt-[3px] object-cover w-[93%]"
                      src="images/img_rectangle129_180x250.png"
                      alt="rectangle129_One"
                    />
                    <div className="flex flex-col gap-3 items-start justify-start mt-3 w-[84%] md:w-full">
                      <Text
                        className="leading-[22.00px] text-base text-blue_gray-900 text-shadow-ts w-full"
                        size="txtVolkhovRegular16"
                      >
                        Alaska: Vintage Double Decker Bus Tour & Thames{" "}
                      </Text>
                      <div className="flex flex-row font-mulish gap-[7px] items-center justify-start ml-0.5 md:ml-[0] w-3/5 md:w-full">
                        <Img
                          className="h-4 w-4"
                          src="images/img_clock.svg"
                          alt="clock_One"
                        />
                        <Text
                          className="text-blue_gray-700 text-sm"
                          size="txtMulishSemiBold14"
                        >
                          Duration 2 hours
                        </Text>
                      </div>
                      <div className="flex flex-row font-mulish gap-1.5 items-start justify-start w-[62%] md:w-full">
                        <Img
                          className="h-3.5"
                          src="images/img_car.svg"
                          alt="car_One"
                        />
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
                          alt="settings_One"
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
                      <div className="flex flex-col items-center justify-start mb-0.5 mt-1.5 w-[31%]">
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
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="text-right text-shadow-ts text-teal-200 text-xl"
                          size="txtVolkhovBold20"
                        >
                          $35.00
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[5px] text-gray-600 text-xs"
                          size="txtMulishSemiBold12"
                        >
                          per person
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-1 flex-col items-center justify-end py-1.5 rounded-[3px] shadow-bs5 w-full">
                    <Img
                      className="h-[180px] md:h-auto mt-[3px] object-cover w-[93%]"
                      src="images/img_rectangle129_1.png"
                      alt="rectangle129_Two"
                    />
                    <div className="flex flex-col gap-3 items-start justify-start mt-3 w-[84%] md:w-full">
                      <Text
                        className="leading-[22.00px] text-base text-blue_gray-900 text-shadow-ts w-full"
                        size="txtVolkhovRegular16"
                      >
                        Alaska: Magic of London Tour with Afternoon Tea at{" "}
                      </Text>
                      <div className="flex flex-row font-mulish gap-[7px] items-center justify-start ml-0.5 md:ml-[0] w-3/5 md:w-full">
                        <Img
                          className="h-4 w-4"
                          src="images/img_clock.svg"
                          alt="clock_Two"
                        />
                        <Text
                          className="text-blue_gray-700 text-sm"
                          size="txtMulishSemiBold14"
                        >
                          Duration 2 hours
                        </Text>
                      </div>
                      <div className="flex flex-row font-mulish gap-1.5 items-start justify-start w-[62%] md:w-full">
                        <Img
                          className="h-3.5"
                          src="images/img_car.svg"
                          alt="car_Two"
                        />
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
                          alt="settings_Two"
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
                      <div className="flex flex-col items-center justify-start mb-0.5 mt-1.5 w-[31%]">
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
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="text-right text-shadow-ts text-teal-200 text-xl"
                          size="txtVolkhovBold20"
                        >
                          $35.00
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[5px] text-gray-600 text-xs"
                          size="txtMulishSemiBold12"
                        >
                          per person
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-1 flex-col items-center justify-end py-1.5 rounded-[3px] shadow-bs5 w-full">
                    <Img
                      className="h-[180px] md:h-auto mt-[3px] object-cover w-[93%]"
                      src="images/img_rectangle129_2.png"
                      alt="rectangle129_Three"
                    />
                    <div className="flex flex-col gap-3 items-start justify-start mt-3 w-[84%] md:w-full">
                      <Text
                        className="leading-[22.00px] text-base text-blue_gray-900 text-shadow-ts w-full"
                        size="txtVolkhovRegular16"
                      >
                        Alaska: Magic of London Tour with Afternoon Tea at{" "}
                      </Text>
                      <div className="flex flex-row font-mulish gap-[7px] items-center justify-start ml-0.5 md:ml-[0] w-3/5 md:w-full">
                        <Img
                          className="h-4 w-4"
                          src="images/img_clock.svg"
                          alt="clock_Three"
                        />
                        <Text
                          className="text-blue_gray-700 text-sm"
                          size="txtMulishSemiBold14"
                        >
                          Duration 2 hours
                        </Text>
                      </div>
                      <div className="flex flex-row font-mulish gap-1.5 items-start justify-start w-[62%] md:w-full">
                        <Img
                          className="h-3.5"
                          src="images/img_car.svg"
                          alt="car_Three"
                        />
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
                          alt="settings_Three"
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
                      <div className="flex flex-col items-center justify-start mb-0.5 mt-1.5 w-[31%]">
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
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="text-right text-shadow-ts text-teal-200 text-xl"
                          size="txtVolkhovBold20"
                        >
                          $35.00
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[5px] text-gray-600 text-xs"
                          size="txtMulishSemiBold12"
                        >
                          per person
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <Line className="self-center h-px bg-blue_gray-100_01 w-full" />
                <div className="flex flex-1 flex-col font-mulish items-center justify-start w-full">
                  <div className="flex flex-col gap-5 items-center justify-start w-full">
                    <div className="flex flex-row md:gap-10 items-center justify-between w-full">
                      <Button
                        className="cursor-pointer font-extrabold h-10 leading-[normal] my-[5px] rounded-[20px] text-center text-xs uppercase w-40"
                        color="blue_300"
                        size="sm"
                        variant="fill"
                      >
                        Special Foods
                      </Button>
                      <Img
                        className="h-[50px]"
                        src="images/img_group211.svg"
                        alt="group451"
                      />
                    </div>
                    <div className="font-volkhov gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-center justify-between w-full">
                      <div className="bg-white-A700 flex flex-1 flex-col items-center justify-end py-1.5 rounded-[3px] shadow-bs5 w-full">
                        <Img
                          className="h-[180px] md:h-auto mt-[3px] object-cover w-[93%]"
                          src="images/img_rectangle129_10.png"
                          alt="rectangle129"
                        />
                        <div className="flex flex-col gap-3 items-start justify-start mt-3 w-[84%] md:w-full">
                          <Text
                            className="leading-[22.00px] text-base text-blue_gray-900 text-shadow-ts w-full"
                            size="txtVolkhovRegular16"
                          >
                            Alaska: Westminster to Greenwich River Thames
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
                            <Img
                              className="h-3.5"
                              src="images/img_car.svg"
                              alt="car"
                            />
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
                          <div className="flex flex-col items-center justify-start mb-0.5 mt-1.5 w-[31%]">
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
                          <div className="flex flex-col items-start justify-start">
                            <Text
                              className="text-right text-shadow-ts text-teal-200 text-xl"
                              size="txtVolkhovBold20"
                            >
                              $35.00
                            </Text>
                            <Text
                              className="md:ml-[0] ml-[5px] text-gray-600 text-xs"
                              size="txtMulishSemiBold12"
                            >
                              per person
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white-A700 flex flex-1 flex-col items-center justify-end py-1.5 rounded-[3px] shadow-bs5 w-full">
                        <Img
                          className="h-[180px] md:h-auto mt-[3px] object-cover w-[93%]"
                          src="images/img_rectangle129_11.png"
                          alt="rectangle129_One"
                        />
                        <div className="flex flex-col gap-3 items-start justify-start mt-3 w-[84%] md:w-full">
                          <Text
                            className="leading-[22.00px] text-base text-blue_gray-900 text-shadow-ts w-full"
                            size="txtVolkhovRegular16"
                          >
                            Alaska: Vintage Double Decker Bus Tour & Thames{" "}
                          </Text>
                          <div className="flex flex-row font-mulish gap-[7px] items-center justify-start ml-0.5 md:ml-[0] w-3/5 md:w-full">
                            <Img
                              className="h-4 w-4"
                              src="images/img_clock.svg"
                              alt="clock_One"
                            />
                            <Text
                              className="text-blue_gray-700 text-sm"
                              size="txtMulishSemiBold14"
                            >
                              Duration 2 hours
                            </Text>
                          </div>
                          <div className="flex flex-row font-mulish gap-1.5 items-start justify-start w-[62%] md:w-full">
                            <Img
                              className="h-3.5"
                              src="images/img_car.svg"
                              alt="car_One"
                            />
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
                              alt="settings_One"
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
                          <div className="flex flex-col items-center justify-start mb-0.5 mt-1.5 w-[31%]">
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
                          <div className="flex flex-col items-start justify-start">
                            <Text
                              className="text-right text-shadow-ts text-teal-200 text-xl"
                              size="txtVolkhovBold20"
                            >
                              $35.00
                            </Text>
                            <Text
                              className="md:ml-[0] ml-[5px] text-gray-600 text-xs"
                              size="txtMulishSemiBold12"
                            >
                              per person
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white-A700 flex flex-1 flex-col items-center justify-end py-1.5 rounded-[3px] shadow-bs5 w-full">
                        <Img
                          className="h-[180px] md:h-auto mt-[3px] object-cover w-[93%]"
                          src="images/img_rectangle129_12.png"
                          alt="rectangle129_Two"
                        />
                        <div className="flex flex-col gap-3 items-start justify-start mt-3 w-[84%] md:w-full">
                          <Text
                            className="leading-[22.00px] text-base text-blue_gray-900 text-shadow-ts w-full"
                            size="txtVolkhovRegular16"
                          >
                            Alaska: Magic of London Tour with Afternoon Tea at{" "}
                          </Text>
                          <div className="flex flex-row font-mulish gap-[7px] items-center justify-start ml-0.5 md:ml-[0] w-3/5 md:w-full">
                            <Img
                              className="h-4 w-4"
                              src="images/img_clock.svg"
                              alt="clock_Two"
                            />
                            <Text
                              className="text-blue_gray-700 text-sm"
                              size="txtMulishSemiBold14"
                            >
                              Duration 2 hours
                            </Text>
                          </div>
                          <div className="flex flex-row font-mulish gap-1.5 items-start justify-start w-[62%] md:w-full">
                            <Img
                              className="h-3.5"
                              src="images/img_car.svg"
                              alt="car_Two"
                            />
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
                              alt="settings_Two"
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
                          <div className="flex flex-col items-center justify-start mb-0.5 mt-1.5 w-[31%]">
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
                          <div className="flex flex-col items-start justify-start">
                            <Text
                              className="text-right text-shadow-ts text-teal-200 text-xl"
                              size="txtVolkhovBold20"
                            >
                              $35.00
                            </Text>
                            <Text
                              className="md:ml-[0] ml-[5px] text-gray-600 text-xs"
                              size="txtMulishSemiBold12"
                            >
                              per person
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white-A700 flex flex-1 flex-col items-center justify-end py-1.5 rounded-[3px] shadow-bs5 w-full">
                        <Img
                          className="h-[180px] md:h-auto mt-[3px] object-cover w-[93%]"
                          src="images/img_rectangle129_13.png"
                          alt="rectangle129_Three"
                        />
                        <div className="flex flex-col gap-3 items-start justify-start mt-3 w-[84%] md:w-full">
                          <Text
                            className="leading-[22.00px] text-base text-blue_gray-900 text-shadow-ts w-full"
                            size="txtVolkhovRegular16"
                          >
                            Alaska: Magic of London Tour with Afternoon Tea at{" "}
                          </Text>
                          <div className="flex flex-row font-mulish gap-[7px] items-center justify-start ml-0.5 md:ml-[0] w-3/5 md:w-full">
                            <Img
                              className="h-4 w-4"
                              src="images/img_clock.svg"
                              alt="clock_Three"
                            />
                            <Text
                              className="text-blue_gray-700 text-sm"
                              size="txtMulishSemiBold14"
                            >
                              Duration 2 hours
                            </Text>
                          </div>
                          <div className="flex flex-row font-mulish gap-1.5 items-start justify-start w-[62%] md:w-full">
                            <Img
                              className="h-3.5"
                              src="images/img_car.svg"
                              alt="car_Three"
                            />
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
                              alt="settings_Three"
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
                          <div className="flex flex-col items-center justify-start mb-0.5 mt-1.5 w-[31%]">
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
                          <div className="flex flex-col items-start justify-start">
                            <Text
                              className="text-right text-shadow-ts text-teal-200 text-xl"
                              size="txtVolkhovBold20"
                            >
                              $35.00
                            </Text>
                            <Text
                              className="md:ml-[0] ml-[5px] text-gray-600 text-xs"
                              size="txtMulishSemiBold12"
                            >
                              per person
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Line className="self-center h-px bg-blue_gray-100_01 w-full" />
                <div className="flex flex-1 flex-col font-mulish items-center justify-start w-full">
                  <div className="flex flex-col gap-5 items-center justify-start w-full">
                    <div className="flex flex-row md:gap-10 items-center justify-between w-full">
                      <Button
                        className="cursor-pointer font-extrabold h-10 leading-[normal] my-[5px] rounded-[20px] text-center text-xs uppercase w-40"
                        color="red_300"
                        size="sm"
                        variant="fill"
                      >
                        River Activity
                      </Button>
                      <Img
                        className="h-[50px]"
                        src="images/img_group211.svg"
                        alt="group451"
                      />
                    </div>
                    <div className="font-volkhov gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-center justify-between w-full">
                      <div className="bg-white-A700 flex flex-1 flex-col items-center justify-end py-1.5 rounded-[3px] shadow-bs5 w-full">
                        <Img
                          className="h-[180px] md:h-auto mt-[3px] object-cover w-[93%]"
                          src="images/img_rectangle129_14.png"
                          alt="rectangle129"
                        />
                        <div className="flex flex-col gap-3 items-start justify-start mt-3 w-[84%] md:w-full">
                          <Text
                            className="leading-[22.00px] text-base text-blue_gray-900 text-shadow-ts w-full"
                            size="txtVolkhovRegular16"
                          >
                            Alaska: Westminster to Greenwich River Thames
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
                            <Img
                              className="h-3.5"
                              src="images/img_car.svg"
                              alt="car"
                            />
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
                          <div className="flex flex-col items-center justify-start mb-0.5 mt-1.5 w-[31%]">
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
                          <div className="flex flex-col items-start justify-start">
                            <Text
                              className="text-right text-shadow-ts text-teal-200 text-xl"
                              size="txtVolkhovBold20"
                            >
                              $35.00
                            </Text>
                            <Text
                              className="md:ml-[0] ml-[5px] text-gray-600 text-xs"
                              size="txtMulishSemiBold12"
                            >
                              per person
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white-A700 flex flex-1 flex-col items-center justify-end py-1.5 rounded-[3px] shadow-bs5 w-full">
                        <Img
                          className="h-[180px] md:h-auto mt-[3px] object-cover w-[93%]"
                          src="images/img_rectangle129_15.png"
                          alt="rectangle129_One"
                        />
                        <div className="flex flex-col gap-3 items-start justify-start mt-3 w-[84%] md:w-full">
                          <Text
                            className="leading-[22.00px] text-base text-blue_gray-900 text-shadow-ts w-full"
                            size="txtVolkhovRegular16"
                          >
                            Alaska: Vintage Double Decker Bus Tour & Thames{" "}
                          </Text>
                          <div className="flex flex-row font-mulish gap-[7px] items-center justify-start ml-0.5 md:ml-[0] w-3/5 md:w-full">
                            <Img
                              className="h-4 w-4"
                              src="images/img_clock.svg"
                              alt="clock_One"
                            />
                            <Text
                              className="text-blue_gray-700 text-sm"
                              size="txtMulishSemiBold14"
                            >
                              Duration 2 hours
                            </Text>
                          </div>
                          <div className="flex flex-row font-mulish gap-1.5 items-start justify-start w-[62%] md:w-full">
                            <Img
                              className="h-3.5"
                              src="images/img_car.svg"
                              alt="car_One"
                            />
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
                              alt="settings_One"
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
                          <div className="flex flex-col items-center justify-start mb-0.5 mt-1.5 w-[31%]">
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
                          <div className="flex flex-col items-start justify-start">
                            <Text
                              className="text-right text-shadow-ts text-teal-200 text-xl"
                              size="txtVolkhovBold20"
                            >
                              $35.00
                            </Text>
                            <Text
                              className="md:ml-[0] ml-[5px] text-gray-600 text-xs"
                              size="txtMulishSemiBold12"
                            >
                              per person
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white-A700 flex flex-1 flex-col items-center justify-end py-1.5 rounded-[3px] shadow-bs5 w-full">
                        <Img
                          className="h-[180px] md:h-auto mt-[3px] object-cover w-[93%]"
                          src="images/img_rectangle129_16.png"
                          alt="rectangle129_Two"
                        />
                        <div className="flex flex-col gap-3 items-start justify-start mt-3 w-[84%] md:w-full">
                          <Text
                            className="leading-[22.00px] text-base text-blue_gray-900 text-shadow-ts w-full"
                            size="txtVolkhovRegular16"
                          >
                            Alaska: Magic of London Tour with Afternoon Tea at{" "}
                          </Text>
                          <div className="flex flex-row font-mulish gap-[7px] items-center justify-start ml-0.5 md:ml-[0] w-3/5 md:w-full">
                            <Img
                              className="h-4 w-4"
                              src="images/img_clock.svg"
                              alt="clock_Two"
                            />
                            <Text
                              className="text-blue_gray-700 text-sm"
                              size="txtMulishSemiBold14"
                            >
                              Duration 2 hours
                            </Text>
                          </div>
                          <div className="flex flex-row font-mulish gap-1.5 items-start justify-start w-[62%] md:w-full">
                            <Img
                              className="h-3.5"
                              src="images/img_car.svg"
                              alt="car_Two"
                            />
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
                              alt="settings_Two"
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
                          <div className="flex flex-col items-center justify-start mb-0.5 mt-1.5 w-[31%]">
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
                          <div className="flex flex-col items-start justify-start">
                            <Text
                              className="text-right text-shadow-ts text-teal-200 text-xl"
                              size="txtVolkhovBold20"
                            >
                              $35.00
                            </Text>
                            <Text
                              className="md:ml-[0] ml-[5px] text-gray-600 text-xs"
                              size="txtMulishSemiBold12"
                            >
                              per person
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white-A700 flex flex-1 flex-col items-center justify-end py-1.5 rounded-[3px] shadow-bs5 w-full">
                        <Img
                          className="h-[180px] md:h-auto mt-[3px] object-cover w-[93%]"
                          src="images/img_rectangle129_17.png"
                          alt="rectangle129_Three"
                        />
                        <div className="flex flex-col gap-3 items-start justify-start mt-3 w-[84%] md:w-full">
                          <Text
                            className="leading-[22.00px] text-base text-blue_gray-900 text-shadow-ts w-full"
                            size="txtVolkhovRegular16"
                          >
                            Alaska: Magic of London Tour with Afternoon Tea at{" "}
                          </Text>
                          <div className="flex flex-row font-mulish gap-[7px] items-center justify-start ml-0.5 md:ml-[0] w-3/5 md:w-full">
                            <Img
                              className="h-4 w-4"
                              src="images/img_clock.svg"
                              alt="clock_Three"
                            />
                            <Text
                              className="text-blue_gray-700 text-sm"
                              size="txtMulishSemiBold14"
                            >
                              Duration 2 hours
                            </Text>
                          </div>
                          <div className="flex flex-row font-mulish gap-1.5 items-start justify-start w-[62%] md:w-full">
                            <Img
                              className="h-3.5"
                              src="images/img_car.svg"
                              alt="car_Three"
                            />
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
                              alt="settings_Three"
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
                          <div className="flex flex-col items-center justify-start mb-0.5 mt-1.5 w-[31%]">
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
                          <div className="flex flex-col items-start justify-start">
                            <Text
                              className="text-right text-shadow-ts text-teal-200 text-xl"
                              size="txtVolkhovBold20"
                            >
                              $35.00
                            </Text>
                            <Text
                              className="md:ml-[0] ml-[5px] text-gray-600 text-xs"
                              size="txtMulishSemiBold12"
                            >
                              per person
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </List>
            </div>
          </div>
          <div className="flex flex-col font-mulish items-center justify-start max-w-[1170px] mt-[75px] mx-auto md:px-5 w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
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
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit mollit
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
              <div className="flex flex-col items-center justify-start mt-[60px] w-full">
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
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-[71px] w-full">
                <div className="flex flex-col gap-[19px] items-start justify-start">
                  <Text
                    className="text-4xl sm:text-[32px] md:text-[34px] text-blue_gray-900 text-shadow-ts"
                    size="txtVolkhovBold36"
                  >
                    Latest Stories From The City
                  </Text>
                  <Text
                    className="leading-[25.00px] text-base text-gray-600 w-full"
                    size="txtMulishSemiBold16Gray600"
                  >
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit mollit
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
                className="sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center mt-[59px] w-full"
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
            </div>
          </div>
          <Footer className="bg-blue_gray-900_01 flex font-mulish items-center justify-center mt-20 md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default CityListingPage;
