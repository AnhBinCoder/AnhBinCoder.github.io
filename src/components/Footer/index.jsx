import React from "react";

import { Img, Input, SelectBox, Text } from "components";

const languageFourOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const Footer = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="flex flex-col items-center justify-center mt-[81px] w-full">
          <div className="flex flex-col md:gap-10 gap-[101px] items-center justify-center w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-[82%] md:w-full">
              <div className="flex flex-col gap-1.5 items-start justify-start w-[67%] md:w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[86%] md:w-full">
                  <Text
                    className="text-[15px] text-white-A700_cc"
                    size="txtMulishBold15WhiteA700cc"
                  >
                    Language
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[289px] text-[15px] text-white-A700_cc"
                    size="txtMulishBold15WhiteA700cc"
                  >
                    Company
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[200px] text-[15px] text-white-A700_cc"
                    size="txtMulishBold15WhiteA700cc"
                  >
                    Help
                  </Text>
                </div>
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                  <div className="flex md:flex-1 flex-col items-start justify-start md:mt-0 mt-0.5 w-[27%] md:w-full">
                    <div className="bg-blue_gray-900_02 border border-solid border-white-A700_33 flex flex-row items-center justify-start p-3 rounded-[3px] w-full">
                      <Img
                        className="h-[13px] md:h-auto ml-[7px] object-cover w-[11%]"
                        src="images/img_image26.png"
                        alt="imageTwentySix"
                      />
                      <SelectBox
                        className="sm:flex-1 font-mulish font-semibold leading-[normal] ml-[3px] mt-0.5 text-left text-sm text-white-A700_99 w-[82%] sm:w-full"
                        placeholderClassName="text-white-A700_99"
                        indicator={
                          <Img
                            className="h-3.5 mr-[0] w-3.5"
                            src="images/img_antdesigncaretdownoutlined.svg"
                            alt="ant-design:caret-down-outlined"
                          />
                        }
                        isMulti={false}
                        name="language_Four"
                        options={languageFourOptionsList}
                        isSearchable={false}
                        placeholder="English (UK)"
                      />
                    </div>
                    <Text
                      className="mt-[13px] text-[15px] text-white-A700_cc"
                      size="txtMulishBold15WhiteA700cc"
                    >
                      Currency
                    </Text>
                    <Input
                      name="price_Three"
                      placeholder="U.S. Dollar ($)"
                      className="!placeholder:text-white-A700_99 !text-white-A700_99 font-mulish font-semibold leading-[normal] p-0 text-left text-sm w-full"
                      wrapClassName="border border-solid border-white-A700_33 flex mt-2 w-full"
                      suffix={
                        <Img
                          className="mt-px mb-0.5 h-3.5 ml-[35px]"
                          src="images/img_antdesigncaretdownoutlined.svg"
                          alt="ant-design:caret-down-outlined"
                        />
                      }
                      shape="round"
                      color="blue_gray_900_02"
                      size="sm"
                      variant="fill"
                    ></Input>
                  </div>
                  <Text
                    className="leading-[30.00px] md:ml-[0] ml-[151px] text-[15px] text-white-A700_99"
                    size="txtMulishRegular15WhiteA70099"
                  >
                    <>
                      About Us
                      <br />
                      Blog
                      <br />
                      Press Room
                      <br />
                      Careers
                    </>
                  </Text>
                  <Text
                    className="leading-[30.00px] md:ml-[0] ml-[186px] text-[15px] text-white-A700_99"
                    size="txtMulishRegular15WhiteA70099"
                  >
                    <>
                      Contact us
                      <br />
                      FAQs
                      <br />
                      Terms and conditions
                      <br />
                      Privacy policy
                      <br />
                      Sitemap
                    </>
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-[19%] md:w-full">
                <ul className="flex flex-col items-start justify-start w-full common-column-list">
                  <li>
                    <Text
                      className="text-[15px] text-white-A700_cc"
                      size="txtMulishBold15WhiteA700cc"
                    >
                      Payment methods possible
                    </Text>
                  </li>
                  <li>
                    <div className="flex flex-row items-center justify-evenly mt-[18px]">
                      <Img
                        className="h-[26px] md:h-auto object-cover w-[18%]"
                        src="images/img_image28.png"
                        alt="imageTwentyEight"
                      />
                      <Img
                        className="h-[26px] md:h-auto object-cover w-[18%]"
                        src="images/img_image37.png"
                        alt="imageThirtySeven"
                      />
                      <Img
                        className="h-[26px] md:h-auto object-cover w-[18%]"
                        src="images/img_image29.png"
                        alt="imageTwentyNine"
                      />
                      <Img
                        className="h-[26px] md:h-auto object-cover w-[18%]"
                        src="images/img_image31.png"
                        alt="imageThirtyOne"
                      />
                      <Img
                        className="h-[26px] md:h-auto object-cover w-[18%]"
                        src="images/img_image33.png"
                        alt="imageThirtyThree"
                      />
                    </div>
                  </li>
                  <li>
                    <div className="flex flex-row items-center justify-evenly mt-[5px]">
                      <Img
                        className="h-[26px] md:h-auto object-cover w-[18%]"
                        src="images/img_image34.png"
                        alt="imageThirtyFour"
                      />
                      <Img
                        className="h-[26px] md:h-auto object-cover w-[18%]"
                        src="images/img_image35.png"
                        alt="imageThirtyFive"
                      />
                      <Img
                        className="h-[26px] md:h-auto object-cover w-[18%]"
                        src="images/img_image36.png"
                        alt="imageThirtySix"
                      />
                      <Img
                        className="h-[26px] md:h-auto object-cover w-[18%]"
                        src="images/img_image27.png"
                        alt="imageTwentySeven"
                      />
                      <Img
                        className="h-[26px] md:h-auto object-cover w-[18%]"
                        src="images/img_image30.png"
                        alt="imageThirty"
                      />
                    </div>
                  </li>
                </ul>
                <Text
                  className="mt-[27px] text-[15px] text-white-A700_cc"
                  size="txtMulishBold15WhiteA700cc"
                >
                  Company
                </Text>
                <Text
                  className="mt-[13px] text-[15px] text-white-A700_99"
                  size="txtMulishRegular15WhiteA70099"
                >
                  Become a Tour guide for Us
                </Text>
              </div>
            </div>
            <div className="bg-black-900_33 flex sm:flex-col flex-row md:gap-10 items-center justify-between p-2.5 w-full">
              <Text
                className="sm:ml-[0] ml-[125px] text-[15px] text-white-A700_99"
                size="txtMulishRegular15WhiteA70099"
              >
                Copyright 2021 Tour Guide. All Rights Reserved
              </Text>
              <Img
                className="h-10 mr-[125px]"
                src="images/img_group91.svg"
                alt="groupNinetyOne"
              />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
