# DEV-SAMPLE PROJECT

# Framework

<pre>
    4LEAF GEAR
</pre>

## MAIN SCREEN

| 번호 | 화면명(영어) | 화면설명(한글)              | 화면코드 | 연결URL                       |
| :--- | :----------- | :-------------------------- | :------- | :---------------------------- |
| 1    | MAIN         | 메인                        | MM00     | "/"                           |
| 2    | ABOUT        | 스마트키퍼란                | MM01     | "/smartkeeper"                |
| 3    | PRO          | 스마트키퍼 프로             | MM02     | "/smartkeeperpro"             |
| 4    | EXAMPLE      | 적용 사례                   | MM03     | "/reference"                  |
| 5    | USB          | USB 물리보안                | MM04     | "/usb-physicalsecurity"       |
| 6    | NETWORK      | 네트워크 보안의 이상적 조합 | MM05     | "/network-security"           |
| 7    | COMPUTER     | 컴퓨터 물리보안             | MM06     | "/computer-physicalsecurity"  |
| 8    | PORT         | 기타포트 물리보안           | MM07     | "/data-port-physicalsecurity" |
| 9    | LOCK         | 락키 PRO                    | MM08     | "/key"                        |
| 10   | PRODUCT      | 상풍 상세(공통)             | MM09     | "/product~"                   |
| 11   | INFO         | 회사 소개                   | MM10     | "/info"                       |
| 12   | SITEMAP      | 사이트맵                    | MM11     | "/sitemap"                    |
| 13   | AGREEMENT    | 이용약관                    | MM12     | "/agreement"                  |
| 14   | FAQ          | FAQ                         | MM13     | "/faq"                        |
| 15   | CONTACT      | 문의하기                    | MM14     | "/inquiry"                    |
| 16   | REFERENCE    | 자료실                      | MM15     | "/download"                   |
| 17   | MALWARE      | 악성코드                    | MM16     | "/malware"                    |
| 18   | SECURITY     | USB 보안의 완성             | MM17     | "/usb-security"               |
| 19   | MAIN         | 랜딩페이지                  | MMinit   | "/main"                       |
| 20   | NETWORK      | 네트워크 물리보안           | MM18     | "/network-physicalsecurity"   |
| 21   | ESSENTIAL    | 에센셜                      | MM19     | "/essential"                  |
| 22   | LOGIN        | 로그인                      | MM90     | "/login"                      |

## ADMIN SCREEN

| 번호 | 화면명(영어) | 화면설명(한글)         | 화면코드 | 연결URL                                       |
| :--- | :----------- | :--------------------- | :------- | :-------------------------------------------- |
| 1    | AD00         | 관리자 메인            | AD00     | "/admin"                                      |
| 2    | AD01         | 접속자 통계            | AD01     | "/admin/statManagement"                       |
| 4    | AD03         | 하단정보 관리          | AD03     | "/admin/footerInfoManagement"                 |
| 6    | AD05         | 공지사항 유형 관리     | AD05     | "/admin/noticeTypeManagement"                 |
| 7    | AD06         | 공지사항 관리          | AD06     | "/admin/noticeManagement"                     |
| 8    | AD07         | 자주묻는 질문 관리     | AD07     | "/admin/faqManagement"                        |
| 9    | AD08         | 이벤트 등록            | AD08     | "/admin/eventBoardManagement"                 |
| 10   | AD09         | 이벤트 게시판 관리     | AD09     | "/admin/eventBoardListManagement"             |
| 11   | AD10         | 일반 회원 관리         | AD10     | "/admin/userManagement"                       |
| 12   | AD11         | 사업자 회원 관리       | AD11     | "/admin/bUserManagement"                      |
| 13   | AD12         | 권한 관리              | AD12     | "/admin/userRightManagement"                  |
| 14   | AD13         | (일반)탈퇴회원 관리    | AD13     | "/admin/userExitManagement"                   |
| 15   | AD14         | (사업자)탈퇴 회원 관리 | AD14     | "/admin/bUserExitManagement"                  |
| 16   | AD15         | (일반)차단 회원 관리   | AD15     | "/admin/userBlackManagement"                  |
| 17   | AD16         | (사업자)차단 회원 관리 | AD16     | "/admin/bUserBlackManagement"                 |
| 18   | AD17         | 회원 권환 변경         | AD17     | "/admin/userRightControllManagement"          |
| 19   | AD18         | 모바일 베너 관리       | AD18     | "/admin/mobileMainBannerManagement"           |
| 20   | AD19         | 1:1문의 관리           | AD19     | "/admin/directRequestManagement"              |
| 21   | AD20         | 메인 베너 관리         | AD20     | "/admin/mainBannerManagement"                 |
| 22   | AD21         | 메인 베너 수정         | AD21     | "/admin/mainBannerUpdateManagement/:id"       |
| 23   | AD22         | 메인 베너 등록         | AD22     | "/admin/mainBannerCreateManagement"           |
| 24   | AD23         | 게시판 유형 관리       | AD23     | "/admin/boardTypeManagement"                  |
| 25   | AD24         | 팝업 수정              | AD24     | "/admin/popupUpdateManagement/:id"            |
| 26   | AD25         | 팝업 등록              | AD25     | "/admin/popupCreateManagement"                |
| 27   | AD26         | 모바일 베너 관리       | AD26     | "/admin/mobileMainBannerManagement"           |
| 28   | AD27         | 모바일 베너 수정       | AD27     | "/admin/mobileMainBannerUpdateManagement/:id" |
| 29   | AD28         | 모바일 베너 등록       | AD28     | "/admin/mobileMainBannerCreateManagement"     |
| 30   | AD29         | 팝업 관리              | AD29     | "/admin/popupManagement"                      |
| 31   | AD30         | SNS 링크 관리          | AD30     | "/admin/snsLinkManagement"                    |

## CLIENT DEVELOPMENT

- [x] 접속자 통계 [4LEAF.YSH]
- [x] 팝업 데이터베이스 연동 [4LEAF.YSH]
- [x] 푸터 데이터베이스 연동 [4LEAF.YSH]

## ADMIN DEVELOPMENT

- [x] 접속자통계 [4LEAF.YSH]
- [x] 팝업 관리 [4LEAF.YSH]
- [x] 메인베너 관리 [4LEAF.YSH]
- [x] 모바일 배너 관리 [4LEAF.SJH]
- [x] 하단 정보 관리 [4LEAF.YSH]
- [x] 이벤트 등록 [4LEAF.YSH]
- [x] 이벤트 게시판 관리 [4LEAF.YSH]
- [x] 일반 회원 관리 [4LEAF.YSH]
- [x] 사업자 회원 관리 [4LEAF.YSH]
- [x] 권한 관리 [4LEAF.YSH]
- [x] (일반)탈퇴회원 관리 [4LEAF.SJH]
- [x] (사업자)탈퇴 회원 관리 [4LEAF.SJH]
- [x] (일반)차단 회원 관리 [4LEAF.SJH]
- [x] (사업자)차단 회원 관리 [4LEAF.SJH]
- [x] 회원 권한 변경 [4LEAF.YSH]
- [x] 1:1 문의 관리 [4LEAF.SJH]

- [x] 로그인 쿠키 데이터 연동 [4LEAF.SJW]

# commonUtils

| FUNCTION         | PARAMETER | DATA TYPE | RETURN  |
| :--------------- | :-------- | :-------- | :------ |
| numberWithCommas | value     | Number    | Integer |
| emptyCheck       | value     | All(\*)   | Boolean |

## REPAIRE LOCATION

- [ ] AD02Container.jsx
- [ ] AD04Container.jsx
- [ ] AD08Container.jsx
- [ ] AD09Container.jsx
- [ ] AD18Container.jsx
- [ ] Editor.jsx
