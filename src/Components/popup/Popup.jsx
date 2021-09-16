import React from "react";
import { Wrapper, Image, UlWrapper, LiWrapper } from "../CommonComponents";
import { GET_POPUP_ALL } from "./PopupQueries";
import { useQuery } from "@apollo/client";
import { withCookies } from "react-cookie";
import { withResizeDetector } from "react-resize-detector";

const Popup = ({ cookies, width }) => {
  ////////////// - USE QUERY- ///////////////
  const { data: popupDatum } = useQuery(GET_POPUP_ALL);

  ///////////// - EVENT HANDLER- ////////////
  const _closeTodayPopupHandler = (data) => {
    const popup = document.getElementById(`popup-${data._id}-js`);

    popup.style.display = "none";

    cookies.set(`popup-${data._id}`, "y", {
      path: "/",
      maxAge: 60 * 60 * 24,
    });
  };

  const _closePopupHandler = (data) => {
    const popup = document.getElementById(`popup-${data._id}-js`);
    popup.style.display = "none";
  };

  return (
    <Wrapper>
      {popupDatum &&
        popupDatum.getPopupAll.map((data, idx) => {
          if (cookies.get(`popup-${data._id}`) === "y") return null;

          return (
            <Wrapper
              key={idx}
              id={`popup-${data._id}-js`}
              isAbsolute={true}
              top={width > 900 ? `70px` : `80px`}
              right={width < 700 ? `50%` : `0`}
              zIndex={`${9999 - idx}`}
              shadow={`0px 5px 10px rgb(93, 93, 93)`}
              margin={
                width > 900 ? `${idx * 30}px ${idx * 30}px 0 0` : `0 -175px 0 0`
              }
              width={width < 700 ? `350px` : `560px`}
            >
              <Wrapper>
                <Image
                  src={data.thumbnailPath}
                  height={width < 700 ? `350px` : `560px`}
                />
              </Wrapper>
              <UlWrapper dr={`row`}>
                <LiWrapper
                  width={`50%`}
                  height={`50px`}
                  lineHeight={`50px`}
                  color={`#576465`}
                  bgColor={`#fff`}
                  borderRight={`1px solid #f8f8f8`}
                  cursor={`pointer`}
                  isRoboto={true}
                  onClick={() => _closeTodayPopupHandler(data)}
                >
                  Do not open for a day
                </LiWrapper>
                <LiWrapper
                  isAbsolute={true}
                  width={`50%`}
                  height={`50px`}
                  lineHeight={`50px`}
                  color={`#576465`}
                  bgColor={`#fff`}
                  cursor={`pointer`}
                  borderLeft={`1px solid #ededed`}
                  isRoboto={true}
                  onClick={() => _closePopupHandler(data)}
                >
                  close
                </LiWrapper>
              </UlWrapper>
            </Wrapper>
          );
        })}
    </Wrapper>
  );
};

export default withResizeDetector(withCookies(Popup));
