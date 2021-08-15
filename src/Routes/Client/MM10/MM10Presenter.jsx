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
import queryString from "query-string";
import { useRef } from "react";
import { animateScroll as scroll } from "react-scroll";

const Gotham = styled(Wrapper)`
  font-family: "Gotham", sans-serif;
  font-weight: ${(props) => props.fontWeight || `800`};
  width: auto;
  letter-spacing: ${(props) => props.letterSpacing};
  line-height: ${(props) => props.lineHeight};
`;

const Gotham2 = styled(SpanText)`
  font-family: "Gotham", sans-serif;
  font-weight: ${(props) => props.fontWeight || `800`};
  width: auto;
  letter-spacing: ${(props) => props.letterSpacing};
  line-height: ${(props) => props.lineHeight};
`;

const MM10Presenter = ({
  width,
  //
  location,
  //
  aboutRef,
  historyRef,
  signRef,
}) => {
  useTitle(`BUSINESS | ${process.env["HOMEPAGE_NAME"]}`);

  useEffect(() => {
    const query = queryString.parse(location.search);

    // referenceRefconsole.log(referenceRef);

    if (query.type === "partnership") {
      scroll.scrollTo(aboutRef.current.offsetTop);
    }
    if (query.type === "business") {
      scroll.scrollTo(historyRef.current.offsetTop);
    }
    if (query.type === "where") {
      scroll.scrollTo(signRef.current.offsetTop);
    }
  }, [location.search]);

  return (
    <WholeWrapper bgColor={`rgb(26,26,26)`}>
      <Wrapper
        height={width < 700 ? `257px` : `600px`}
        attachment={`initial`}
        bgImg={`url("https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER-PRO-ENG%2Fassets%2Fimages%2FMM10%2F%E1%84%87%E1%85%B5%E1%84%8C%E1%85%B3%E1%84%82%E1%85%B5%E1%84%89%E1%85%B3-%E1%84%8B%E1%85%A7%E1%86%BC%E1%84%8B%E1%85%A5-1.png?alt=media&token=59acb346-16b4-4ed8-a097-95ce62a33a9a")`}
      >
        <RsWrapper
          width={`1126px`}
          al={`flex-start`}
          padding={width < 700 ? `0 36px` : `0`}
        >
          <Text color={Theme.white_C} fontSize={width < 700 ? `39px` : `70px`}>
            Partnership at
          </Text>

          <Image
            width={width < 700 ? `305px` : `547px`}
            src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER_PRO%2Fassats%2Fimages%2Fmodify%2FSMARTKEEPER_Landing.svg?alt=media&token=7cb2d12f-0f34-4dc0-a15f-6c43fbdbcdf4`}
          />
          {/* <Gotham color={Theme.white_C} fontSize={`70px`}>
            SMARTKEEPER
          </Gotham> */}
        </RsWrapper>
      </Wrapper>
      {/* 1 */}
      <Text ref={aboutRef}></Text>
      <Wrapper
        isRelative={true}
        margin={width < 700 ? `49px 0 0` : `39px 0 0`}
        padding={width < 700 ? `0 0 0 36px` : `0`}
      >
        {/* <Wrapper
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
        </Wrapper> */}
        <RsWrapper width={`1126px`} al={`flex-start`}>
          <Text
            fontSize={width < 700 ? `28px` : `45px`}
            color={Theme.white_C}
            fontWeight={`800`}
            lineHeight={`1.4`}
          >
            Benefits of becoming a
          </Text>
          <Text
            fontSize={width < 700 ? `28px` : `45px`}
            color={Theme.white_C}
            fontWeight={`800`}
            lineHeight={`1.4`}
          >
            Partner
          </Text>

          <Wrapper
            al={`flex-start`}
            margin={width < 700 ? `20px 0 19px` : `6px 0 37px`}
          >
            <Text
              color={Theme.white_C}
              fontSize={width < 700 ? `18px` : `20px`}
              fontWeight={`700`}
            >
              <Gotham2>SMARTKEEPER</Gotham2> is a Physical Cybersecurity System
              that is the proven choice of 3,000
            </Text>
            <Text
              color={Theme.white_C}
              fontSize={width < 700 ? `18px` : `20px`}
              fontWeight={`700`}
            >
              installation sites worldwide from a wide range of industries.
            </Text>
            <Text
              color={Theme.white_C}
              fontSize={`20px`}
              fontWeight={`700`}
              display={width < 700 ? `none` : `flex`}
            >
              Become a partner with <Gotham2>SMARTKEEPER</Gotham2> to secure
              distribution rights in your country.
            </Text>

            <Text
              display={width < 700 ? `flex` : `none`}
              fontSize={`18px`}
              fontWeight={`700`}
              color={Theme.white_C}
            >
              Become a partner with
            </Text>
            <Text
              display={width < 700 ? `flex` : `none`}
              fontSize={`18px`}
              fontWeight={`700`}
              color={Theme.white_C}
            >
              SMARTKEEPER to secure
            </Text>
            <Text
              display={width < 700 ? `flex` : `none`}
              fontSize={`18px`}
              fontWeight={`700`}
              color={Theme.white_C}
            >
              distribution rights in your country.
            </Text>
          </Wrapper>

          <Wrapper al={`flex-start`} display={width < 700 ? `none` : `flex`}>
            <Text color={Theme.greyTheme7_C}>
              <Gotham2>SMARTKEEPER</Gotham2> is the world’s first complete
              line-up of physical security products from Korea.
            </Text>
            <Text color={Theme.greyTheme7_C}>
              Deployed to more than 3,000 sites globally, SMARTKEEPER is used in
              various industries including the military, government, IT,
            </Text>
            <Text color={Theme.greyTheme7_C}>
              manufacturing, telecommunications, finance, medical care and
              education. Companies that understand the need for physical
              cybersecurity
            </Text>
            <Text color={Theme.greyTheme7_C}>
              rely on SMARTKEEPER to keep their information safe.
            </Text>
          </Wrapper>

          <Wrapper display={width < 700 ? `flex` : `none`}>
            <Text
              fontSize={`16px`}
              color={Theme.greyTheme7_C}
              letterSpacing={`0.4px`}
            >
              SMARTKEEPER is the world’s first complete line-up of physical
              security products from Korea. Deployed to more than 3,000 sites
              globally, SMARTKEEPER is used in various industries including the
              military, government, IT, manufacturing, telecommunications,
              finance, medical care and education. Companies that understand the
              need for physical cybersecurity rely on SMARTKEEPER to keep their
              information safe.
            </Text>
          </Wrapper>

          <Wrapper al={`flex-start`} margin={`35px 0 40px`}>
            <Text color={Theme.greyTheme7_C} letterSpacing={`0.4px`}>
              We are looking to partner with distributors that will enlarge
              SMARTKEEPER’s presence in the global physical cybersecurity
              market.
            </Text>
          </Wrapper>

          <Wrapper al={`flex-start`} margin={`0 0 133px`}>
            <Text color={Theme.white_C}>
              We share with our distributors 10 years of product design &#38;
              sales know-how, company vision and success stories from customers.
            </Text>
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
                  We provide various marketing materials (catalogs, websites,
                  high-resolution images, videos, advertisements, banners and
                  manuals)
                </Text>
                <Text>for the eCommerce market.</Text>
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
                  We support localization of specific markets, if necessary.
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
                  We provide free samples of our products for testing.
                </Text>
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
                  <Gotham2>SMARTKEEPER</Gotham2> provides superior security
                </Text>
                <Text
                  fontSize={`20px`}
                  fontWeight={`700`}
                  color={Theme.white_C}
                >
                  in comparison to their competition
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
      <Text ref={historyRef}></Text>
      <Wrapper isRelative={true} margin={`128px 0 0`}>
        {/* <Wrapper
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
        </Wrapper> */}
        <RsWrapper al={`flex-start`} width={`1126px`}>
          <Text fontSize={`45px`} fontWeight={`700`} color={Theme.white_C}>
            How to become a Partner
          </Text>
          <Text fontSize={`20px`} color={Theme.white_C} fontWeight={`700`}>
            We aim to grow together with our partners by providing exceptional
            incentives and benefits.
          </Text>
          <Text fontSize={`20px`} color={Theme.white_C} fontWeight={`700`}>
            We look forward to hearing from people who would like to partner
            with us.
          </Text>
          <Text fontSize={`20px`} color={Theme.white_C} fontWeight={`700`}>
            Please contact us at global_sales@comxi.com.
          </Text>
        </RsWrapper>
      </Wrapper>

      <Text ref={signRef}></Text>
      <Wrapper isRelative={true} margin={`132px 0 200px`}>
        {/* <Wrapper
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
        </Wrapper> */}
        <RsWrapper width={`1126px`} al={`flex-start`}>
          <Text
            fontSize={`45px`}
            fontWeight={`700`}
            color={Theme.white_C}
            margin={`0 0 50px`}
          >
            Our Partner Locations
          </Text>
          <Wrapper dr={`row`} ju={`flex-start`}>
            <Wrapper
              color={Theme.white_C}
              width={`250px`}
              al={`flex-start`}
              fontSize={`20px`}
              fontWeight={`500`}
            >
              USA
            </Wrapper>
          </Wrapper>
          <Wrapper dr={`row`} ju={`flex-start`} margin={`72px 0 50px`}>
            <Wrapper
              color={Theme.white_C}
              width={`250px`}
              al={`flex-start`}
              fontSize={`20px`}
              fontWeight={`500`}
            >
              GERMANY
            </Wrapper>

            <Wrapper
              color={Theme.white_C}
              width={`250px`}
              al={`flex-start`}
              fontSize={`20px`}
              fontWeight={`500`}
            >
              POLAND
            </Wrapper>

            <Wrapper
              color={Theme.white_C}
              width={`250px`}
              al={`flex-start`}
              fontSize={`20px`}
              fontWeight={`500`}
            >
              CZECH REPUBLIC
            </Wrapper>

            <Wrapper
              color={Theme.white_C}
              width={`250px`}
              al={`flex-start`}
              fontSize={`20px`}
              fontWeight={`500`}
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
              fontWeight={`500`}
            >
              SWEDEN
            </Wrapper>

            <Wrapper
              color={Theme.white_C}
              width={`250px`}
              al={`flex-start`}
              fontSize={`20px`}
              fontWeight={`500`}
            >
              HUNGARY
            </Wrapper>

            <Wrapper
              color={Theme.white_C}
              width={`250px`}
              al={`flex-start`}
              fontSize={`20px`}
              fontWeight={`500`}
            >
              NORWAY
            </Wrapper>
          </Wrapper>
          <Wrapper dr={`row`} ju={`flex-start`} margin={`72px 0 50px`}>
            <Wrapper
              color={Theme.white_C}
              width={`250px`}
              al={`flex-start`}
              fontSize={`20px`}
              fontWeight={`500`}
            >
              CHINA
            </Wrapper>
            <Wrapper
              color={Theme.white_C}
              width={`250px`}
              al={`flex-start`}
              fontSize={`20px`}
              fontWeight={`500`}
            >
              JAPAN
            </Wrapper>
            <Wrapper
              color={Theme.white_C}
              width={`250px`}
              al={`flex-start`}
              fontSize={`20px`}
              fontWeight={`500`}
            >
              SINGAPORE
            </Wrapper>
            <Wrapper
              color={Theme.white_C}
              width={`250px`}
              al={`flex-start`}
              fontSize={`20px`}
              fontWeight={`500`}
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
              fontWeight={`500`}
            >
              VIETNAM
            </Wrapper>
            <Wrapper
              color={Theme.white_C}
              width={`250px`}
              al={`flex-start`}
              fontSize={`20px`}
              fontWeight={`500`}
            >
              PHILIPPINES
            </Wrapper>
            <Wrapper
              color={Theme.white_C}
              width={`250px`}
              al={`flex-start`}
              fontSize={`20px`}
              fontWeight={`500`}
            >
              MALAYSIA
            </Wrapper>
            <Wrapper
              color={Theme.white_C}
              width={`250px`}
              al={`flex-start`}
              fontSize={`20px`}
              fontWeight={`500`}
            >
              THAILAND
            </Wrapper>
          </Wrapper>
          {/* <Wrapper dr={`row`} ju={`flex-start`} margin={`50px 0 0`}>
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
          </Wrapper> */}
        </RsWrapper>
      </Wrapper>
    </WholeWrapper>
  );
};

export default withResizeDetector(MM10Presenter);
