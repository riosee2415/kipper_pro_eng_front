import React, { useEffect } from "react";
import withSplitting from "../../../Lib/withSplitting";
import {
  RsWrapper,
  Text,
  WholeWrapper,
  Wrapper,
  Image,
  EmptyList,
  SpanText,
} from "../../../Components/CommonComponents";
import styled from "styled-components";
import { withResizeDetector } from "react-resize-detector";
import useTitle from "@4leaf.ysh/use-title";
import Theme from "../../../Styles/Theme";
import { IoMdArrowDropleft } from "react-icons/io";

const Gotham = styled(Wrapper)`
  font-family: "Gotham", sans-serif;
  font-weight: ${(props) => props.fontWeight || `800`};
  width: auto;
  letter-spacing: ${(props) => props.letterSpacing};
  line-height: ${(props) => props.lineHeight};
`;

const MM10Presenter = ({ width }) => {
  useTitle(`BUSINESS | ${process.env["HOMEPAGE_NAME"]}`);

  return (
    <WholeWrapper bgColor={`rgb(26,26,26)`}>
      <Wrapper
        height={`600px`}
        attachment={`initial`}
        bgImg={`url("https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER-PRO-ENG%2Fassets%2Fimages%2FMM10%2F%E1%84%87%E1%85%B5%E1%84%8C%E1%85%B3%E1%84%82%E1%85%B5%E1%84%89%E1%85%B3-%E1%84%8B%E1%85%A7%E1%86%BC%E1%84%8B%E1%85%A5-1.png?alt=media&token=59acb346-16b4-4ed8-a097-95ce62a33a9a")`}
      >
        <RsWrapper width={`1126px`} al={`flex-start`}>
          <Text color={Theme.white_C} fontSize={`70px`}>
            Partnership at
          </Text>
          <Gotham color={Theme.white_C} fontSize={`70px`}>
            SMARTKEEPER
          </Gotham>
        </RsWrapper>
      </Wrapper>
      {/* 1 */}
      <Wrapper isRelative={true} margin={`39px 0 0`}>
        <Wrapper
          isAbsolute={true}
          dr={`row`}
          top={`0`}
          right={`70px`}
          width={`auto`}
        >
          <IoMdArrowDropleft color={Theme.subTheme4_C} size={`20`} />
          <Image
            width={`15px`}
            margin={`0 5px 0 0`}
            src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER-PRO-ENG%2Fassets%2Fimages%2FMM10%2F%E1%84%87%E1%85%B5%E1%84%8C%E1%85%B3%E1%84%82%E1%85%B5%E1%84%89%E1%85%B3-%E1%84%8B%E1%85%A7%E1%86%BC%E1%84%8B%E1%85%A5-4.png?alt=media&token=dbcdd954-9697-4d1f-9d6e-22e535ced4a3`}
          />
          <Text fontSize={`13px`} fontWeight={`700`} color={Theme.subTheme4_C}>
            Partnership
          </Text>
        </Wrapper>
        <RsWrapper width={`1126px`} al={`flex-start`}>
          <Text fontSize={`45px`} color={Theme.white_C} fontWeight={`800`}>
            Advantages of Having
          </Text>
          <Text fontSize={`45px`} color={Theme.white_C} fontWeight={`800`}>
            a Partnership
          </Text>

          <Wrapper al={`flex-start`} margin={`6px 0 37px`}>
            <Text color={Theme.white_C} fontSize={`20px`} fontWeight={`700`}>
              System Physical Cybersecurity SMARTKEEPER recognized
            </Text>
            <Text color={Theme.white_C} fontSize={`20px`} fontWeight={`700`}>
              by experts in various fields at more than 3,000 sites worldwide.
            </Text>
            <Text color={Theme.white_C} fontSize={`20px`} fontWeight={`700`}>
              Make a partnership with a SMARTKEEPER to preempt distribution
              rights in your country.
            </Text>
          </Wrapper>

          <Wrapper al={`flex-start`}>
            <Text color={Theme.greyTheme7_C}>
              SMARTKEEPER is the world's first physical security product that
              started in Korea and is sold to more than 3,000 locations.
            </Text>
            <Text color={Theme.greyTheme7_C}>
              From military, government, and public institutions to IT,
              manufacturing, telecommunications, finance, medical care,
            </Text>
            <Text color={Theme.greyTheme7_C}>
              and education, companies that know the importance of information
              all feel the need for physical security and are using SMARTKEEPER.
            </Text>
          </Wrapper>

          <Wrapper al={`flex-start`} margin={`35px 0 40px`}>
            <Text color={Theme.greyTheme7_C}>
              We are looking for our partners who are valued associates to
              pioneer the global physical security market.
            </Text>
            <Text color={Theme.greyTheme7_C}>
              We work with our partners, who represent our products. That's why
              we share more revenue with our partners.
            </Text>
          </Wrapper>

          <Wrapper al={`flex-start`}>
            <Text color={Theme.white_C}>
              We share our 10 years of product design and sales know-how, share
              success stories for reference and our vision, and suggest
              directions
            </Text>
            <Text color={Theme.white_C}>for moving forward together.</Text>
          </Wrapper>

          <Wrapper al={`flex-start`} margin={`35px 0  133px`}>
            <Wrapper
              dr={`row`}
              ju={`flex-start`}
              color={Theme.white_C}
              al={`flex-start`}
            >
              <Text color={Theme.white_C} width={`10px`}>
                -
              </Text>
              <Wrapper width={`calc(100% - 10px)`} al={`flex-start`}>
                <Text>
                  We help you sell more efficiently by providing original
                  sources of various marketing materials (catalogs, websites,
                  high-resolution images,
                </Text>
                <Text>
                  videos, advertisements, banners, manuals) for the eCommerce
                  market.
                </Text>
              </Wrapper>
            </Wrapper>
            <Wrapper
              dr={`row`}
              ju={`flex-start`}
              color={Theme.white_C}
              al={`flex-start`}
            >
              <Text color={Theme.white_C} width={`10px`}>
                -
              </Text>
              <Wrapper width={`calc(100% - 10px)`} al={`flex-start`}>
                <Text>
                  If localization is required, we will support the work.
                </Text>
              </Wrapper>
            </Wrapper>
            <Wrapper
              dr={`row`}
              ju={`flex-start`}
              color={Theme.white_C}
              al={`flex-start`}
            >
              <Text color={Theme.white_C} width={`10px`}>
                -
              </Text>
              <Wrapper width={`calc(100% - 10px)`} al={`flex-start`}>
                <Text>We provide free samples for you to touch and test.</Text>
              </Wrapper>
            </Wrapper>
          </Wrapper>

          <Wrapper dr={`row`}>
            <Wrapper width={`50%`} al={`flex-start`}>
              <Text fontSize={`30px`} color={Theme.white_C} fontWeight={`700`}>
                Success Story
              </Text>
              <Gotham
                color={Theme.greyTheme7_C}
                fontSize={`50px`}
                fontWeight={`700`}
                margin={`9px 0 0`}
                lineHeight={`1.0`}
              >
                Different level of
              </Gotham>
              <Gotham
                color={Theme.greyTheme7_C}
                fontSize={`50px`}
                fontWeight={`700`}
                lineHeight={`1.0`}
              >
                network security,
              </Gotham>
              <Gotham
                margin={`20px 0 0`}
                fontSize={`50px`}
                color={Theme.white_C}
                lineHeight={`1.0`}
                fontWeight={`400`}
              >
                proven by countless
              </Gotham>
              <Gotham
                fontSize={`50px`}
                color={Theme.white_C}
                lineHeight={`1.0`}
                fontWeight={`400`}
              >
                customers :
              </Gotham>
              <Wrapper al={`flex-start`}>
                <Text
                  fontSize={`20px`}
                  fontWeight={`700`}
                  color={Theme.white_C}
                >
                  SMARTKEEPER provides superior security
                </Text>
                <Text
                  fontSize={`20px`}
                  fontWeight={`700`}
                  color={Theme.white_C}
                >
                  in comparison to their competition．
                </Text>
                <Text
                  fontSize={`20px`}
                  fontWeight={`700`}
                  color={Theme.white_C}
                >
                  In addition, SMARTKEEPER products integrated
                </Text>
                <Text
                  fontSize={`20px`}
                  fontWeight={`700`}
                  color={Theme.white_C}
                >
                  seamlessly into our networking system and after
                </Text>
                <Text
                  fontSize={`20px`}
                  fontWeight={`700`}
                  color={Theme.white_C}
                >
                  deployment, there was a renewed sense of security.
                </Text>
              </Wrapper>
              <Text fontSize={`30px`} color={Theme.white_C}>
                In one word，it was PERFECT!
              </Text>
            </Wrapper>
            <Wrapper width={`50%`}>
              <Image
                src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER-PRO-ENG%2Fassets%2Fimages%2FMM10%2F%E1%84%87%E1%85%B5%E1%84%8C%E1%85%B3%E1%84%82%E1%85%B5%E1%84%89%E1%85%B3-%E1%84%8B%E1%85%A7%E1%86%BC%E1%84%8B%E1%85%A5-2.png?alt=media&token=35063d90-a0cf-416f-81c2-fb71796d880c`}
              />
            </Wrapper>
          </Wrapper>
        </RsWrapper>
      </Wrapper>
      {/* 2 */}
      <Wrapper isRelative={true} margin={`128px 0 0`}>
        <Wrapper
          isAbsolute={true}
          dr={`row`}
          top={`0`}
          right={`41px`}
          width={`auto`}
        >
          <IoMdArrowDropleft color={Theme.subTheme4_C} size={`20`} />
          <Image
            width={`15px`}
            margin={`0 5px 0 0`}
            src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER-PRO-ENG%2Fassets%2Fimages%2FMM10%2F%E1%84%87%E1%85%B5%E1%84%8C%E1%85%B3%E1%84%82%E1%85%B5%E1%84%89%E1%85%B3-%E1%84%8B%E1%85%A7%E1%86%BC%E1%84%8B%E1%85%A5-4.png?alt=media&token=dbcdd954-9697-4d1f-9d6e-22e535ced4a3`}
          />
          <Text fontSize={`13px`} fontWeight={`700`} color={Theme.subTheme4_C}>
            How to Business
          </Text>
        </Wrapper>
        <RsWrapper al={`flex-start`} width={`1126px`}>
          <Text fontSize={`45px`} fontWeight={`700`} color={Theme.white_C}>
            How to Business
          </Text>
          <Text fontSize={`20px`} color={Theme.white_C} fontWeight={`700`}>
            Aiming to grow together with our partners, we provide more benefits.
          </Text>
          <Text fontSize={`20px`} color={Theme.white_C} fontWeight={`700`}>
            We look forward to contacting people who would like to work with us.
          </Text>
          <Text fontSize={`20px`} color={Theme.white_C} fontWeight={`700`}>
            Please contact us at global_sales@comxi.com.
          </Text>
        </RsWrapper>
      </Wrapper>

      <Wrapper isRelative={true} margin={`132px 0 200px`}>
        <Wrapper
          isAbsolute={true}
          dr={`row`}
          top={`0`}
          right={`22px`}
          width={`auto`}
        >
          <IoMdArrowDropleft color={Theme.subTheme4_C} size={`20`} />
          <Image
            width={`15px`}
            margin={`0 5px 0 0`}
            src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER-PRO-ENG%2Fassets%2Fimages%2FMM10%2F%E1%84%87%E1%85%B5%E1%84%8C%E1%85%B3%E1%84%82%E1%85%B5%E1%84%89%E1%85%B3-%E1%84%8B%E1%85%A7%E1%86%BC%E1%84%8B%E1%85%A5-4.png?alt=media&token=dbcdd954-9697-4d1f-9d6e-22e535ced4a3`}
          />
          <Text fontSize={`13px`} fontWeight={`700`} color={Theme.subTheme4_C}>
            Where our Partners
          </Text>
        </Wrapper>
        <RsWrapper width={`1126px`} al={`flex-start`}>
          <Text
            fontSize={`45px`}
            fontWeight={`700`}
            color={Theme.white_C}
            margin={`0 0 50px`}
          >
            Where our Partners
          </Text>
          <Wrapper dr={`row`} ju={`flex-start`}>
            <Wrapper
              color={Theme.white_C}
              width={`250px`}
              al={`flex-start`}
              fontSize={`20px`}
              fontWeight={`700`}
            >
              USA
            </Wrapper>
          </Wrapper>
          <Wrapper dr={`row`} ju={`flex-start`} margin={`50px 0`}>
            <Wrapper
              color={Theme.white_C}
              width={`250px`}
              al={`flex-start`}
              fontSize={`20px`}
              fontWeight={`700`}
            >
              GERMANY
            </Wrapper>

            <Wrapper
              color={Theme.white_C}
              width={`250px`}
              al={`flex-start`}
              fontSize={`20px`}
              fontWeight={`700`}
            >
              POLAND
            </Wrapper>

            <Wrapper
              color={Theme.white_C}
              width={`250px`}
              al={`flex-start`}
              fontSize={`20px`}
              fontWeight={`700`}
            >
              CZECH REPUBLIC
            </Wrapper>

            <Wrapper
              color={Theme.white_C}
              width={`250px`}
              al={`flex-start`}
              fontSize={`20px`}
              fontWeight={`700`}
            >
              SLOVAKIA
            </Wrapper>
          </Wrapper>
          <Wrapper dr={`row`} ju={`flex-start`}>
            <Wrapper
              color={Theme.white_C}
              width={`250px`}
              al={`flex-start`}
              fontSize={`20px`}
              fontWeight={`700`}
            >
              SWEDEN
            </Wrapper>

            <Wrapper
              color={Theme.white_C}
              width={`250px`}
              al={`flex-start`}
              fontSize={`20px`}
              fontWeight={`700`}
            >
              HUNGARY
            </Wrapper>
          </Wrapper>
          <Wrapper dr={`row`} ju={`flex-start`} margin={`50px 0`}>
            <Wrapper
              color={Theme.white_C}
              width={`250px`}
              al={`flex-start`}
              fontSize={`20px`}
              fontWeight={`700`}
            >
              UAE
            </Wrapper>
            <Wrapper
              color={Theme.white_C}
              width={`250px`}
              al={`flex-start`}
              fontSize={`20px`}
              fontWeight={`700`}
            >
              KAZAKHSTAN
            </Wrapper>
            <Wrapper
              color={Theme.white_C}
              width={`250px`}
              al={`flex-start`}
              fontSize={`20px`}
              fontWeight={`700`}
            >
              KYRGIZ REPUBLIC
            </Wrapper>
            <Wrapper
              color={Theme.white_C}
              width={`250px`}
              al={`flex-start`}
              fontSize={`20px`}
              fontWeight={`700`}
            >
              INDIA
            </Wrapper>
          </Wrapper>
          <Wrapper dr={`row`} ju={`flex-start`}>
            <Wrapper
              color={Theme.white_C}
              width={`250px`}
              al={`flex-start`}
              fontSize={`20px`}
              fontWeight={`700`}
            >
              SINGAPORE
            </Wrapper>
            <Wrapper
              color={Theme.white_C}
              width={`250px`}
              al={`flex-start`}
              fontSize={`20px`}
              fontWeight={`700`}
            >
              THAILAND
            </Wrapper>
            <Wrapper
              color={Theme.white_C}
              width={`250px`}
              al={`flex-start`}
              fontSize={`20px`}
              fontWeight={`700`}
            >
              VIETNAM
            </Wrapper>
            <Wrapper
              color={Theme.white_C}
              width={`250px`}
              al={`flex-start`}
              fontSize={`20px`}
              fontWeight={`700`}
            >
              INDONESIA
            </Wrapper>
          </Wrapper>
          <Wrapper dr={`row`} ju={`flex-start`} margin={`50px 0 0`}>
            <Wrapper
              color={Theme.white_C}
              width={`250px`}
              al={`flex-start`}
              fontSize={`20px`}
              fontWeight={`700`}
            >
              PHILIPPINES
            </Wrapper>
            <Wrapper
              color={Theme.white_C}
              width={`250px`}
              al={`flex-start`}
              fontSize={`20px`}
              fontWeight={`700`}
            >
              MALAYSIA
            </Wrapper>
            <Wrapper
              color={Theme.white_C}
              width={`250px`}
              al={`flex-start`}
              fontSize={`20px`}
              fontWeight={`700`}
            >
              BRUNEI
            </Wrapper>
          </Wrapper>
        </RsWrapper>
      </Wrapper>
    </WholeWrapper>
  );
};

export default withResizeDetector(MM10Presenter);
