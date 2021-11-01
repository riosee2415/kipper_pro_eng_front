import React from "react";
import withSplitting from "../Lib/withSplitting";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { withResizeDetector } from "react-resize-detector";

const ScrollToTop = withSplitting(() => import("./ScrollToTop"));
const MM00 = withSplitting(() => import("../Routes/Client/MM00"));
const MM01 = withSplitting(() => import("../Routes/Client/MM01"));
const MM02 = withSplitting(() => import("../Routes/Client/MM02"));
const MM03 = withSplitting(() => import("../Routes/Client/MM03"));
const MM04 = withSplitting(() => import("../Routes/Client/MM04"));
const MM05 = withSplitting(() => import("../Routes/Client/MM05"));
const MM06 = withSplitting(() => import("../Routes/Client/MM06"));
const MM07 = withSplitting(() => import("../Routes/Client/MM07"));
const MM08 = withSplitting(() => import("../Routes/Client/MM08"));
const MM09 = withSplitting(() => import("../Routes/Client/MM09"));
const MM10 = withSplitting(() => import("../Routes/Client/MM10"));
const MM11 = withSplitting(() => import("../Routes/Client/MM11"));
const MM12 = withSplitting(() => import("../Routes/Client/MM12"));
const MM13 = withSplitting(() => import("../Routes/Client/MM13"));
const MM14 = withSplitting(() => import("../Routes/Client/MM14"));
const MM15 = withSplitting(() => import("../Routes/Client/MM15"));
const MM16 = withSplitting(() => import("../Routes/Client/MM16"));
const MM17 = withSplitting(() => import("../Routes/Client/MM17"));
const MM18 = withSplitting(() => import("../Routes/Client/MM18"));
const MM19 = withSplitting(() => import("../Routes/Client/MM19"));
const MM90 = withSplitting(() => import("../Routes/Client/MM90"));
const MM = withSplitting(() => import("../Routes/Client/MM_Notice"));
const MMinit = withSplitting(() => import("../Routes/Client/MMinit"));

const Header = withSplitting(() => import("../Routes/Layouts/Header"));
const Footer = withSplitting(() => import("../Routes/Layouts/Footer"));
const Header2 = withSplitting(() => import("../Routes/Layouts/Header2"));
const Footer2 = withSplitting(() => import("../Routes/Layouts/Footer2"));

const Notice_D = withSplitting(() => import("../Components/notice/Board_D"));

const FixedNav = withSplitting(() => import("../Components/FixedNav"));
const ScrollTopBtn = withSplitting(() => import("../Components/ScrollTopBtn"));

const A_Header = withSplitting(() => import("../Routes/Layouts/A_Header"));
const A_Content = withSplitting(() => import("../Routes/Layouts/A_Content"));

const AppRouter = ({ width }) => {
  return (
    <Router>
      {/* <ScrollToTop> */}
      {/* HEADER */}
      <Route exact path="/pro" component={Header} />
      <Route exact path="/smartkeeper" component={Header} />
      <Route exact path="/smartkeeperpro" component={Header} />
      <Route exact path="/example" component={Header} />
      <Route exact path="/usb-physicalsecurity" component={Header} />
      <Route exact path="/usb-physicalsecurity/:key" component={Header} />
      <Route exact path="/network-security" component={Header} />
      <Route exact path="/network-physicalsecurity/:key" component={Header} />
      <Route exact path="/computer-physicalsecurity" component={Header} />
      <Route exact path="/computer-physicalsecurity/:key" component={Header} />
      <Route exact path="/data-port-physicalsecurity" component={Header} />
      <Route exact path="/data-port-physicalsecurity/:key" component={Header} />
      <Route exact path="/key" component={Header} />
      <Route exact path="/key/:key" component={Header} />
      <Route exact path="/info" component={Header} />
      <Route exact path="/sitemap" component={Header} />
      <Route exact path="/agreement" component={Header} />
      <Route exact path="/faq" component={Header} />
      <Route exact path="/inquiry" component={Header} />
      <Route exact path="/download" component={Header} />
      <Route exact path="/malware" component={Header} />
      <Route exact path="/usb-security" component={Header} />
      <Route exact path="/network-physicalsecurity" component={Header} />
      <Route exact path="/network-physicalsecurity/:key" component={Header} />
      <Route exact path="/login" component={Header} />

      <Route exact path="/essential" component={Header2} />

      {/* FixedNav  */}
      {/* <Route exact path="/" component={FixedNav} />
      <Route exact path="/brand" component={FixedNav} />
      <Route exact path="/operation" component={FixedNav} />
      <Route exact path="/founded/:key" component={FixedNav} />
      <Route exact path="/guide" component={FixedNav} />
      <Route exact path="/menu/:key" component={FixedNav} />
      <Route exact path="/store/:key" component={FixedNav} /> */}

      {/* ScrollTopBtn */}
      <Route exact path="/" component={ScrollTopBtn} />
      <Route exact path="/smartkeeper" component={ScrollTopBtn} />
      <Route exact path="/smartkeeperpro" component={ScrollTopBtn} />
      <Route exact path="/example" component={ScrollTopBtn} />
      <Route exact path="/usb-physicalsecurity" component={ScrollTopBtn} />
      <Route exact path="/usb-physicalsecurity/:key" component={ScrollTopBtn} />
      <Route exact path="/network-security" component={ScrollTopBtn} />
      <Route
        exact
        path="/network-physicalsecurity/:key"
        component={ScrollTopBtn}
      />
      <Route exact path="/computer-physicalsecurity" component={ScrollTopBtn} />
      <Route
        exact
        path="/computer-physicalsecurity/:key"
        component={ScrollTopBtn}
      />
      <Route
        exact
        path="/data-port-physicalsecurity"
        component={ScrollTopBtn}
      />
      <Route
        exact
        path="/data-port-physicalsecurity/:key"
        component={ScrollTopBtn}
      />
      <Route exact path="/key" component={ScrollTopBtn} />
      <Route exact path="/key/:key" component={ScrollTopBtn} />
      <Route exact path="/info" component={ScrollTopBtn} />
      <Route exact path="/sitemap" component={ScrollTopBtn} />
      <Route exact path="/agreement" component={ScrollTopBtn} />
      <Route exact path="/faq" component={ScrollTopBtn} />
      <Route exact path="/inquiry" component={ScrollTopBtn} />
      <Route exact path="/download" component={ScrollTopBtn} />
      <Route exact path="/malware" component={ScrollTopBtn} />
      <Route exact path="/usb-security" component={ScrollTopBtn} />
      <Route exact path="/pro" component={ScrollTopBtn} />
      <Route exact path="/network-physicalsecurity" component={ScrollTopBtn} />
      <Route
        exact
        path="/network-physicalsecurity/:key"
        component={ScrollTopBtn}
      />
      <Route exact path="/essential" component={ScrollTopBtn} />
      <Route exact path="/login" component={ScrollTopBtn} />

      {/* CONTENT */}
      <Route exact path="/" component={MMinit} />
      <Route exact path="/smartkeeper" component={MM01} />
      <Route exact path="/smartkeeperpro" component={MM02} />
      <Route exact path="/example" component={MM03} />
      <Route exact path="/usb-physicalsecurity" component={MM04} />
      <Route exact path="/usb-physicalsecurity/:key" component={MM09} />
      <Route exact path="/network-security" component={MM05} />
      <Route exact path="/network-physicalsecurity/:key" component={MM09} />
      <Route exact path="/computer-physicalsecurity" component={MM06} />
      <Route exact path="/computer-physicalsecurity/:key" component={MM09} />
      <Route exact path="/data-port-physicalsecurity" component={MM07} />
      <Route exact path="/data-port-physicalsecurity/:key" component={MM09} />
      <Route exact path="/key" component={MM08} />
      <Route exact path="/key/:key" component={MM09} />
      <Route exact path="/info" component={MM10} />
      <Route exact path="/sitemap" component={MM11} />
      <Route exact path="/agreement" component={MM12} />
      <Route exact path="/faq" component={MM13} />
      <Route exact path="/inquiry" component={MM14} />
      <Route exact path="/download" component={MM15} />
      <Route exact path="/malware" component={MM16} />
      <Route exact path="/usb-security" component={MM17} />
      <Route exact path="/pro" component={MM00} />
      <Route exact path="/network-physicalsecurity" component={MM18} />
      <Route exact path="/network-physicalsecurity/:key" component={MM09} />
      <Route exact path="/essential" component={MM19} />
      <Route exact path="/login" component={MM90} />

      <Route exact path="/notice" component={MM} />
      <Route exact path="/notice/:key" component={Notice_D} />

      <Route path="/admin" component={A_Content} />

      {/* FOOTER */}
      <Route exact path="/" component={Footer} />
      <Route exact path="/smartkeeper" component={Footer} />
      <Route exact path="/smartkeeperpro" component={Footer} />
      <Route exact path="/example" component={Footer} />
      <Route exact path="/usb-physicalsecurity" component={Footer} />
      <Route exact path="/usb-physicalsecurity/:key" component={Footer} />
      <Route exact path="/network-security" component={Footer} />
      <Route exact path="/network-physicalsecurity/:key" component={Footer} />
      <Route exact path="/computer-physicalsecurity" component={Footer} />
      <Route exact path="/computer-physicalsecurity/:key" component={Footer} />
      <Route exact path="/data-port-physicalsecurity" component={Footer} />
      <Route exact path="/data-port-physicalsecurity/:key" component={Footer} />
      <Route exact path="/key" component={Footer} />
      <Route exact path="/key/:key" component={Footer} />
      <Route exact path="/info" component={Footer} />
      <Route exact path="/sitemap" component={Footer} />
      <Route exact path="/agreement" component={Footer} />
      <Route exact path="/faq" component={Footer} />
      <Route exact path="/inquiry" component={Footer} />
      <Route exact path="/download" component={Footer} />
      <Route exact path="/malware" component={Footer} />
      <Route exact path="/usb-security" component={Footer} />
      <Route exact path="/pro" component={Footer} />
      <Route exact path="/network-physicalsecurity" component={Footer} />
      <Route exact path="/network-physicalsecurity/:key" component={Footer} />
      <Route exact path="/login" component={Footer} />

      <Route exact path="/essential" component={Footer2} />
      {/* </ScrollToTop> */}
    </Router>
  );
};

export default withResizeDetector(AppRouter);
