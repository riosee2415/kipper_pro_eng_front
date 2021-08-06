import React from "react";
import withSplitting from "../../../Lib/withSplitting";
import {
  RsWrapper,
  SpanText,
  WholeWrapper,
  Wrapper,
  Text,
} from "../../../Components/CommonComponents";
import styled from "styled-components";
import { withResizeDetector } from "react-resize-detector";
import useTitle from "@4leaf.ysh/use-title";
import Theme from "../../../Styles/Theme";

const Title = styled.h1`
  font-size: 20px;
  color: ${(props) => props.theme.greyTheme3_C};
  font-weight: bold;
  margin-bottom: 40px;

  @media (max-width: 800px) {
    font-size: 15px;
  }
`;

const SubTitle = styled.h2`
  font-size: 15px;
  color: ${(props) => props.theme.greyTheme3_C};
  font-weight: bold;
  margin-bottom: 10px;
  margin: ${(props) => props.margin};

  @media (max-width: 800px) {
    font-size: 13px;
  }
`;

const Desc = styled.p`
  font-size: 15px;
  color: ${(props) => props.theme.greyTheme7_C};
  line-height: 1.6;
  margin: ${(props) => props.margin};
  display: ${(props) => props.display};

  @media (max-width: 800px) {
    font-size: 10px;
  }
`;

const MM12Presenter = ({ width }) => {
  useTitle(`스마트키퍼 웹 사이트 이용 약관 | ${process.env["HOMEPAGE_NAME"]}`);

  return (
    <WholeWrapper bgColor={Theme.black_C} color={Theme.white_C}>
      <Wrapper
        fontSize={width < 900 ? `25px` : `48px`}
        fontWeight={`900`}
        margin={width < 900 ? `100px 0` : `200px 0 150px`}
      >
        스마트키퍼 웹 사이트 이용약관
      </Wrapper>
      <RsWrapper
        padding={width < 900 ? ` 0 30px 80px` : `0 104px 150px`}
        al={`flex-start`}
      >
        <Title>제 1 장 총칙</Title>
        <SubTitle>제 1 조 목적</SubTitle>
        <Desc display={width < 700 ? `contents` : `block`}>
          이 약관은 ㈜컴엑스아이(이하 ‘회사’라 한다)가 운영하는 스마트키퍼
          웹사이트(이하 ‘사이트’라 한다)에서 제공하는 인터넷 관련 서비스(이하
          “서비스”라 한다)를 이용
        </Desc>
        <Desc display={width < 700 ? `contents` : `block`}>
          함에 있어 사이트와 이용자의 권리, 의무 및 책임 사항과 기타 필요한
          사항을 규정함을 목적으로 합니다.
        </Desc>
        <SubTitle margin={`25px 0 10px`}>제 2 조 약관의 명시와 개정</SubTitle>
        <Desc>
          1. 이 약관은 사이트의 초기 서비스 화면에 이용자에게 공지사항을 통해
          공시함으로써 효력이 발생합니다
        </Desc>
        <Desc>
          2. 당 사이트는 이 약관의 내용과 상호, 영업소 소재지, 연락처(전화,
          팩스, 전자우편 주소 등) 등을 이용자가 알 수 있도록 사이트의 초기
          서비스 화면에 게시합니다.
        </Desc>
        <Desc>
          3. 당 사이트는 약관의 규제에 관한 법률, 전자거래기본법, 전자서명법,
          개인정보 보호법 등 관련법을 위배하지 않는 범위에서 이 약관을 개정할 수
          있습니다.
        </Desc>
        <Desc display={width < 700 ? `contents` : `block`}>
          4. 당 사이트가 약관을 개정할 경우에는 적용 일자 및 개정 사유를
          명시하여 현행약관과 함께 당 사이트의 초기화면에 그 적용일자 7일
          이전부터 적용 일자 전일까지
        </Desc>
        <Desc
          margin={width < 700 ? `0` : `0 0 0 15px`}
          display={width < 700 ? `contents` : `block`}
        >
          공지합니다.
        </Desc>
        <Desc>
          5. 당 사이트는 이용자가 본 약관 내용에 동의하는 것을 조건으로
          이용자에게 서비스를 제공할 것이며, 이용자가 본 약관의 내용에 동의하는
          경우, 당 사이트의 서비스
        </Desc>
        <Desc
          margin={width < 700 ? `0` : `0 0 0 15px`}
          display={width < 700 ? `contents` : `block`}
        >
          제공 행위 및 이용자의 서비스 사용 행위에는 본 약관이 우선적으로 적용될
          것입니다.
        </Desc>
        <Desc>
          6. 이 약관에 동의하는 것은 정기적으로 웹을 방문하여 약관의 변경사항을
          확인하는 것에 동의함을 의미합니다. 변경된 약관에 대한 정보를 알지 못해
          발생하는 이용자의
        </Desc>
        <Desc margin={width < 700 ? `0` : `0 0 0 15px`}>
          피해는 당 사이트에서 책임지지 않습니다.
        </Desc>
        <Desc display={width < 700 ? `contents` : `block`}>
          7. 본 약관에 명시되지 않은 사항은 전기통신 기본법, 전기통신사업법,
          방송통신심의위원회 정보통신에 관한 심의 규정, 저작권법 및 기타 관련
          법령의 규정에 의합니다.
        </Desc>
        <Desc
          margin={width < 700 ? `0` : `0 0 0 15px`}
          display={width < 700 ? `contents` : `block`}
        >
          본 약관은 ㈜컴엑스아이(이하 ‘회사’라 한다)가 운영하는 스마트키퍼
          웹사이트(이하 ‘사이트’라 한다)에서 제공하는 인터넷 관련 서비스(이하
          ‘서비스’라 한다)를
        </Desc>
        <Desc
          margin={width < 700 ? `0` : `0 0 0 15px`}
          display={width < 700 ? `contents` : `block`}
        >
          이용함에 있어 사이트와 이용자의 권리, 의무 및 책임 사항과 기타 필요한
          사항을 규정함을 목적으로 합니다.
        </Desc>

        <SubTitle margin={`25px 0 10px`}>제 3 조 정의</SubTitle>
        <Desc>본 약관에서 사용하는 용어의 정의는 다음과 같습니다.</Desc>
        <Desc display={width < 700 ? `contents` : `block`}>
          1. ‘사이트’란 회사가 재화 또는 용역을 이용자에게 제공하기 위하여
          컴퓨터 등 정보통신설비를 이용하여 화 또는 용역을 거래할 수 있도록
          설정한 가상의
        </Desc>
        <Desc
          display={width < 700 ? `contents` : `block`}
          margin={width < 700 ? `0` : `0 0 0 15px`}
        >
          영업장 또는 회사가 운영하는 웹사이트를 말하며&nbsp;
          <SpanText
            color={Theme.subTheme_C}
            display={width < 700 ? `contents` : `block`}
          >
            www.smartkeeper.kr
          </SpanText>
          &nbsp; 사이트를 운영하는 사업자의 의미로도 사용합니다.
        </Desc>
        <Desc>
          2. ‘이용자’란 본 약관에 따라 당 사이트가 제공하는 서비스를 받는 자.
        </Desc>
        <Desc>
          3. ‘이용계약’이란 서비스 이용과 관련하여 당 사이트와 이용자 간에
          체결하는 계약을 말합니다.
        </Desc>
        <Desc>
          4. ‘신청’이란 당 사이트가 제공하는 신청서 양식에 해당 정보를 기입하고,
          본 약관에 동의하여 서비스 이용계약을 완료시키는 행위
        </Desc>
        <Desc>
          5. 본 약관에서 정의하지 않은 용어는 개별서비스에 대한 별도약관 및
          이용규정에서 정의합니다.
        </Desc>

        <SubTitle margin={`25px 0 10px`}>제 4 조 약관 외 준칙</SubTitle>
        <Desc margin={`0 0 40px`}>
          본 약관에 명시되지 않은 사항에 대하여는 관계 법령 또는 상관례에
          따릅니다.
        </Desc>

        <Title>제 2 장 이용계약의 성립 및 해지</Title>
        <SubTitle>제 5 조 이용계약의 성립</SubTitle>
        <Desc>
          1. 이용계약은 이용자가 본 이용약관 내용에 대한 동의와 이용신청에
          대하여 당 사이트의 이용승낙으로 성립합니다.
        </Desc>
        <Desc>
          2. 본 이용약관에 대한 동의는 이용신청 당시 해당 당 사이트의 ‘동의함’
          또는 신청(등록)버튼을 누름으로써 의사표시를 합니다.
        </Desc>
        <SubTitle margin={`25px 0 10px`}>
          제 6 조 개인정보 사용에 대한 동의
        </SubTitle>
        <Desc display={width < 700 ? `contents` : `block`}>
          1. 이용자의 개인정보에 대해서는 당 사이트의 개인정보 처리방침이
          적용됩니다. 다만, 당 사이트 이외의 링크된 사이트에서는 당 사이트의
          개인정보 처리방침이
        </Desc>
        <Desc
          margin={width < 700 ? `0` : `0 0 0 15px`}
          display={width < 700 ? `contents` : `block`}
        >
          적용되지 않습니다.
        </Desc>

        <SubTitle margin={`25px 0 10px`}>제 7 조 사용자의 정보 보안</SubTitle>
        <Desc>
          1. 이용자가 당 사이트 서비스 신청 절차를 완료하는 순간부터 이용자는
          입력한 정보의 비밀을 유지할 책임이 있습니다.
        </Desc>
        <Desc display={width < 700 ? `contents` : `block`}>
          2. 이용자가 입력한 정보에 관한 모든 관리의 책임은 이용자에게 있으며,
          이용자가 입력한 정보가 부정하게 사용되었다는 사실을 발견한 경우에는
          즉시
        </Desc>
        <Desc margin={width < 700 ? `0 0 40px` : `0 0 40px 15px`}>
          당 사이트에 알려주셔야 합니다. 알리지 않음으로 인해 발생하는 모든
          책임은 이용자 본인에게 있습니다.
        </Desc>

        <Title>제 3 장 서비스 이용</Title>
        <SubTitle>제 8 조 서비스 이용</SubTitle>
        <Desc>
          1. 이용자가 사이트의 서비스를 이용하고자 하는 경우, 이용자는
          사이트에서 요청하는 개인 신상정보를 제공해야 합니다.
        </Desc>
        <Desc>
          2. 사이트는 다음 각 호에 해당하는 서비스의 이용 신청에 대하여는 이를
          승낙하지 아니합니다.
        </Desc>
        <Desc margin={`10px 0 0 15px`}>
          1) 다른 사람의 명의를 사용하여 신청하였을 때 나. 본인의 실명으로
          신청하지 않았을 때
        </Desc>
        <Desc margin={`0 0 0 15px`}>
          2) 서비스 이용 계약신청서의 내용을 허위로 기재하였을 때
        </Desc>
        <Desc margin={`0 0 0 15px`}>
          3) 사회의 안녕과 질서 혹은 미풍양속을 저해할 목적으로 신청하였을 때
        </Desc>
        <Desc margin={`0 0 0 15px`}>
          4) 기타 이용신청자의 귀책사유로 이용승낙이 곤란한 경우
        </Desc>

        <SubTitle margin={`25px 0 10px`}>제 9 조 이용의 제한</SubTitle>
        <Desc>본 약관에서 사용하는 용어의 정의는 다음과 같습니다.</Desc>
        <Desc>
          1. 사이트의 서비스 이용은 사이트의 업무상 또는 기술상 특별한 지장이
          없는 한 연중무휴, 1일 24시간을 원칙으로 합니다.
        </Desc>
        <Desc>
          2. 사이트는 정보통신 시스템 등의 정기점검, 보수, 교체, 고장, 통신두절
          등의 사유가 발생한 경우에는 서비스의 제공을 일시 중단할 수 있습니다.
        </Desc>
        <Desc display={width < 700 ? `contents` : `block`}>
          3. 제 4항에 의한 서비스 중단의 경우에는 사이트는 사용자에게 제13조의
          방법으로 통지를 합니다. 단, 사이트가 통제할 수 없는 사유로 인한 서비스
          중단으로
        </Desc>
        <Desc
          display={width < 700 ? `contents` : `block`}
          margin={width < 700 ? `0` : `0 0 40px 15px`}
        >
          사전 통지가 불가능한 경우에는 그러하지 아니합니다.
        </Desc>
        <Desc>
          4. 사이트에서 제공하는 서비스는 기본적으로 무료입니다. 단, 별도로
          유료임을 명시한 정보에 대해서는 해당 정보에 명시된 요금을 지불하여야
          사용이
        </Desc>
        <Desc
          display={width < 700 ? `contents` : `block`}
          margin={width < 700 ? `0` : `0 0 40px 15px`}
        >
          가능합니다.
        </Desc>
        <Desc>
          5. 사이트가 제공하는 저작물에 대한 저작권, 기타 지적 재산권은 사이트에
          귀속합니다.
        </Desc>
        <Desc display={width < 700 ? `contents` : `block`}>
          6. 사용자는 사이트를 이용함으로써 얻은 정보를 사이트의 사전 승낙 없이
          복제, 송신, 출판, 배포, 방송, 기타 방법에 의하여 영리목적으로
          이용하거나 제3자에게
        </Desc>
        <Desc
          display={width < 700 ? `contents` : `block`}
          margin={width < 700 ? `0` : `0 0 40px 15px`}
        >
          이용하게 하여서는 안됩니다.
        </Desc>
        <Desc margin={`0 0 40px`}>
          7. 사이트는 서비스 요금이 무료인 서비스 이용과 관련하여 이용자에게
          발생한 어떠한 손해에 대해서도 책임을 지지 않습니다.
        </Desc>

        <Title>제 4 장 의무 및 책임(일반사항)</Title>
        <SubTitle>제 10 조 당 사이트의 의무</SubTitle>
        <Desc>
          1. 당 사이트는 법령과 본 약관이 금지하거나 미풍양속에 반하는 행위를
          하지 않으며, 지속적·안정적으로 서비스를 제공하기 위해 노력할 의무가
          있습니다.
        </Desc>
        <Desc display={width < 700 ? `contents` : `block`}>
          2. 당 사이트는 이용자의 개인 신상 정보를 본인의 승낙 없이 타인에게
          누설, 배포하지 않습니다. 다만, 관계법령에 의하여 관계 국가기관 등의
          요구가 있는
        </Desc>
        <Desc
          display={width < 700 ? `contents` : `block`}
          margin={width < 700 ? `0` : `0 0 40px 15px`}
        >
          경우에는 그러하지 아니합니다.
        </Desc>
        <Desc>
          3. 당 사이트는 이용자가 안전하게 당 사이트서비스를 이용할 수 있도록
          이용자의 개인정보 보호를 위한 보안시스템을 갖추어야 합니다.
        </Desc>
        <Desc>
          4. 당 사이트는 이용자의 귀책사유로 인한 서비스 이용 장애에 대하여
          책임을 지지 않습니다.
        </Desc>
        <SubTitle margin={`25px 0 10px`}>제 11 조 이용자의 의무</SubTitle>
        <Desc>
          1. 이용자는 당 사이트의 사전 승낙 없이 서비스를 이용하여 어떠한
          영리행위도 할 수 없습니다.
        </Desc>
        <Desc display={width < 700 ? `contents` : `block`}>
          2. 이용자는 당 사이트 서비스를 이용하여 얻은 정보를 당 사이트의
          사전승낙 없이 복사, 복제, 변경, 번역, 출판, 방송 기타의 방법으로
          사용하거나 이를 타인에게
        </Desc>
        <Desc
          display={width < 700 ? `contents` : `block`}
          margin={width < 700 ? `0` : `0 0 40px 15px`}
        >
          제공할 수 없습니다.
        </Desc>
        <Desc>
          3. 이용자는 당 사이트 서비스 이용과 관련하여 다음 각 호의 행위를
          하여서는 안 됩니다.
        </Desc>
        <Desc margin={`10px 0 0px 15px`}>
          1) 다른 이용자의 개인정보를 부정 사용하는 행위
        </Desc>
        <Desc margin={`0 0 0px 15px`}>
          2) 저속, 음란, 모욕적, 위협적이거나 타인의 사생활을 침해할 수 있는
          내용을 전송, 게시, 게재, 전자우편 또는 기타의 방법으로 전송하는 행위
        </Desc>
        <Desc margin={`0 0 0px 15px`}>
          3) 서비스를 통하여 전송된 내용의 출처를 위장하는 행위
        </Desc>
        <Desc margin={`0 0 0px 15px`}>
          4) 법률, 계약에 의해 이용할 수 없는 내용을 게시, 게재, 전자우편 또는
          기타의 방법으로 전송하는 행위, 타인의 특허, 상표, 영업비밀, 저작권,
          기타
        </Desc>
        <Desc margin={width < 700 ? `0 0 0px 15px` : `0 0 0px 30px`}>
          지적재산권을 침해하는 내용을 게시, 게재, 전자우편 또는 기타의 방법으로
          전송하는 행위
        </Desc>
        <Desc margin={`0 0 0px 15px`}>
          5) 당 사이트의 승인을 받지 아니한 광고, 판촉물, 스팸메일, 행운의 편지,
          피라미드 조직 기타 다른 형태의 권유를 게시, 게재, 전자우편 또는 기타의
          방법으로
        </Desc>
        <Desc margin={width < 700 ? `0 0 0px 15px` : `0 0 0px 30px`}>
          전송하는 행위
        </Desc>
        <Desc margin={`0 0 0px 15px`}>
          6) 다른 사용자의 개인정보를 수집 또는 저장하는 행위
        </Desc>
        <Desc margin={`0 0 0px 15px`}>
          7) 범죄행위를 목적으로 하거나 기타 범죄행위와 관련된 행위
        </Desc>
        <Desc margin={`0 0 0px 15px`}>
          8) 선량한 풍속, 기타 사회질서를 해하는 행위, 타인의 명예를 훼손하거나
          모욕하는 행위
        </Desc>
        <Desc margin={`0 0 0px 15px`}>
          9) 타인의 지적재산권 등의 권리를 침해하는 행위
        </Desc>
        <Desc margin={`0 0 0px 15px`}>
          10) 해킹행위 또는 컴퓨터바이러스의 유포행위
        </Desc>
        <Desc margin={`0 0 0px 15px`}>
          11) 타인의 의사에 반하여 광고성 정보 등 일정한 내용을 지속적으로
          전송하는 행위
        </Desc>
        <Desc margin={`0 0 0px 15px`}>
          12) 서비스의 안전적인 운영에 지장을 주거나 줄 우려가 있는 일체의 행위
        </Desc>
        <Desc margin={`0 0 0px 15px`}>13) 당 사이트에 게시된 정보의 변경</Desc>

        <SubTitle margin={`25px 0 10px`}>제 12 조 당 사이트의 소유권</SubTitle>
        <Desc display={width < 700 ? `contents` : `block`}>
          1. 당 사이트가 제공하는 서비스, 그에 필요한 소프트웨어, 이미지, 마크,
          로고, 디자인, 서비스명칭, 정보 및 상표 등과 관련된 지적재산권 및 기타
          권리는
        </Desc>
        <Desc
          display={width < 700 ? `contents` : `block`}
          margin={width < 700 ? `0` : `0 0 0px 30px`}
        >
          당 사이트에 소유권이 있습니다.
        </Desc>
        <Desc>
          2. 이용자는 당 사이트가 명시적으로 승인한 경우를 제외하고는 전항의
          소정의 각 재산에 대한 전부 또는 일부의 수정, 대여, 대출, 판매, 배포,
          제작, 양도,
        </Desc>
        <Desc margin={width < 700 ? `0` : `0 0 0px 15px`}>
          재라이센스, 담보권 설정 행위, 상업적 이용 행위를 할 수 없으며, 제3자로
          하여금 이와 같은 행위를 하도록 허락할 수 없습니다.
        </Desc>

        <SubTitle margin={`25px 0 10px`}>
          제 13 조 사용자의 게시물 관리
        </SubTitle>
        <Desc>
          당 사이트는 사용자가 게시하거나 등록한 내용물이 다음 사항에 해당된다고
          판단되는 경우에 사전 통지 없이 삭제할 수 있습니다.
        </Desc>
        <Desc margin={`10px 0 0px 15px`}>
          1) 타인을 비방하거나 중상모략으로 개인 및 단체의 명예를 손상시키는
          내용인 경우
        </Desc>
        <Desc margin={`0 0 0px 15px`}>
          2) 공공질서 및 미풍양속에 위반되는 내용인 경우
        </Desc>
        <Desc margin={`0 0 0px 15px`}>
          3) 범죄적 행위에 부합된다고 인정되는 내용인 경우
        </Desc>
        <Desc margin={`0 0 0px 15px`}>
          4) 타인의 저작권 등 기타의 권리를 침해하는 내용인 경우
        </Desc>
        <Desc margin={`0 0 0px 15px`}>
          5) 기타 관계 법령이나 사이트에서 정한 규정에 위배되는 내용인 경우
        </Desc>

        <SubTitle margin={`25px 0 10px`}>제 14 조 손해배상</SubTitle>
        <Desc display={width < 700 ? `contents` : `block`}>
          당 사이트는 무료로 제공되는 서비스와 관련하여 이용자에게 어떠한 손해가
          발생하더라도 당 사이트가 고의로 행한 범죄행위를 제외하고는 이에 대하여
          책임을
        </Desc>
        <Desc display={width < 700 ? `contents` : `block`}>
          부담하지 아니합니다.
        </Desc>

        <SubTitle margin={`25px 0 10px`}>제 15 조 면책조항</SubTitle>
        <Desc>
          1. 당 사이트는 천재지변 또는 이에 준하는 불가항력으로 인하여 서비스를
          제공할 수 없는 경우에는 서비스 제공에 관한 책임이 면제됩니다.
        </Desc>
        <Desc>
          2. 당 사이트는 이용자의 귀책사유로 인한 서비스 이용 장애에 대하여
          책임을 지지 않습니다.
        </Desc>
        <Desc>
          3. 당 사이트는 이용자가 서비스를 이용하여 기대하는 수익을 상실한
          것이나 서비스를 통하여 얻은 자료로 인한 손해에 관하여 책임을 지지
          않습니다.
        </Desc>
        <Desc>
          4. 당 사이트는 이용자가 서비스에 게재한 정보, 자료, 사실의 신뢰도,
          정확성 등 내용에 관하여는 책임을 지지 않습니다.
        </Desc>
        <Desc>
          5. 당 사이트는 서비스 이용과 관련하여 이용자에게 발생한 손해 가운데
          이용자의 고의, 과실에 의한 손해에 대 하여 책임을 지지 않습니다.
        </Desc>

        <SubTitle margin={`25px 0 10px`}>제 16 조 사용자에 대한 통지</SubTitle>
        <Desc>
          1. 당 사이트가 회원에 대해 통지를 하는 경우에는 회원이 서비스 이용
          신청 시 사이트에 제출한 전자우편 주소로 할 수 있습니다.
        </Desc>
        <Desc>
          2. 당 사이트는 불특정 다수 회원에 대한 통지의 경우 1주일 이상 사이트
          게시판에 게시함으로써 개별통지에 갈음할 수 있다.
        </Desc>

        <SubTitle margin={`25px 0 10px`}>제 17조 재판관할 및 준거법</SubTitle>
        <Desc>
          본 서비스 이용과 관련하여 발생한 분쟁에 대해 소송이 제기될 경우
          서울지방법원 본원을 전속적 관할 법원으로 합니다.
        </Desc>

        <Text
          margin={`25px 0 0`}
          color={Theme.greyTheme7_C}
          fontWeight={`300`}
          fontSize={`12px`}
        >
          ※ 부 칙 (시행일) 본 약관은 2021년 7월 1일부터 시행합니다.
        </Text>
        <Text color={Theme.greyTheme7_C} fontWeight={`300`} fontSize={`12px`}>
          Copyright 2021 COMXI CO., LTD. All right reserved.
        </Text>
      </RsWrapper>
    </WholeWrapper>
  );
};

export default withResizeDetector(MM12Presenter);
