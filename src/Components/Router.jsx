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
      <Route exact path="/about" component={Header} />
      <Route exact path="/insightpro" component={Header} />
      <Route exact path="/example" component={Header} />
      <Route exact path="/usb" component={Header} />
      <Route exact path="/usb/:key" component={Header} />
      <Route exact path="/network" component={Header} />
      <Route exact path="/network/:key" component={Header} />
      <Route exact path="/computer" component={Header} />
      <Route exact path="/computer/:key" component={Header} />
      <Route exact path="/port" component={Header} />
      <Route exact path="/port/:key" component={Header} />
      <Route exact path="/lock" component={Header} />
      <Route exact path="/lock/:key" component={Header} />
      <Route exact path="/info" component={Header} />
      <Route exact path="/sitemap" component={Header} />
      <Route exact path="/agreement" component={Header} />
      <Route exact path="/faq" component={Header} />
      <Route exact path="/contact" component={Header} />
      <Route exact path="/reference" component={Header} />
      <Route exact path="/malware" component={Header} />
      <Route exact path="/security" component={Header} />
      <Route exact path="/p_network" component={Header} />
      <Route exact path="/p_network/:key" component={Header} />
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
      <Route exact path="/about" component={ScrollTopBtn} />
      <Route exact path="/insightpro" component={ScrollTopBtn} />
      <Route exact path="/example" component={ScrollTopBtn} />
      <Route exact path="/usb" component={ScrollTopBtn} />
      <Route exact path="/usb/:key" component={ScrollTopBtn} />
      <Route exact path="/network" component={ScrollTopBtn} />
      <Route exact path="/network/:key" component={ScrollTopBtn} />
      <Route exact path="/computer" component={ScrollTopBtn} />
      <Route exact path="/computer/:key" component={ScrollTopBtn} />
      <Route exact path="/port" component={ScrollTopBtn} />
      <Route exact path="/port/:key" component={ScrollTopBtn} />
      <Route exact path="/lock" component={ScrollTopBtn} />
      <Route exact path="/lock/:key" component={ScrollTopBtn} />
      <Route exact path="/info" component={ScrollTopBtn} />
      <Route exact path="/sitemap" component={ScrollTopBtn} />
      <Route exact path="/agreement" component={ScrollTopBtn} />
      <Route exact path="/faq" component={ScrollTopBtn} />
      <Route exact path="/contact" component={ScrollTopBtn} />
      <Route exact path="/reference" component={ScrollTopBtn} />
      <Route exact path="/malware" component={ScrollTopBtn} />
      <Route exact path="/security" component={ScrollTopBtn} />
      <Route exact path="/pro" component={ScrollTopBtn} />
      <Route exact path="/p_network" component={ScrollTopBtn} />
      <Route exact path="/p_network/:key" component={ScrollTopBtn} />
      <Route exact path="/essential" component={ScrollTopBtn} />
      <Route exact path="/login" component={ScrollTopBtn} />

      {/* CONTENT */}
      <Route exact path="/" component={MMinit} />
      <Route exact path="/about" component={MM01} />
      <Route exact path="/insightpro" component={MM02} />
      <Route exact path="/example" component={MM03} />
      <Route exact path="/usb" component={MM04} />
      <Route exact path="/usb/:key" component={MM09} />
      <Route exact path="/network" component={MM05} />
      <Route exact path="/network/:key" component={MM09} />
      <Route exact path="/computer" component={MM06} />
      <Route exact path="/computer/:key" component={MM09} />
      <Route exact path="/port" component={MM07} />
      <Route exact path="/port/:key" component={MM09} />
      <Route exact path="/lock" component={MM08} />
      <Route exact path="/lock/:key" component={MM09} />
      <Route exact path="/info" component={MM10} />
      <Route exact path="/sitemap" component={MM11} />
      <Route exact path="/agreement" component={MM12} />
      <Route exact path="/faq" component={MM13} />
      <Route exact path="/contact" component={MM14} />
      <Route exact path="/reference" component={MM15} />
      <Route exact path="/malware" component={MM16} />
      <Route exact path="/security" component={MM17} />
      <Route exact path="/pro" component={MM00} />
      <Route exact path="/p_network" component={MM18} />
      <Route exact path="/p_network/:key" component={MM09} />
      <Route exact path="/essential" component={MM19} />
      <Route exact path="/login" component={MM90} />

      <Route exact path="/notice" component={MM} />
      <Route exact path="/notice/:key" component={Notice_D} />

      <Route path="/admin" component={A_Content} />

      {/* FOOTER */}
      <Route exact path="/" component={Footer} />
      <Route exact path="/about" component={Footer} />
      <Route exact path="/insightpro" component={Footer} />
      <Route exact path="/example" component={Footer} />
      <Route exact path="/usb" component={Footer} />
      <Route exact path="/usb/:key" component={Footer} />
      <Route exact path="/network" component={Footer} />
      <Route exact path="/network/:key" component={Footer} />
      <Route exact path="/computer" component={Footer} />
      <Route exact path="/computer/:key" component={Footer} />
      <Route exact path="/port" component={Footer} />
      <Route exact path="/port/:key" component={Footer} />
      <Route exact path="/lock" component={Footer} />
      <Route exact path="/lock/:key" component={Footer} />
      <Route exact path="/info" component={Footer} />
      <Route exact path="/sitemap" component={Footer} />
      <Route exact path="/agreement" component={Footer} />
      <Route exact path="/faq" component={Footer} />
      <Route exact path="/contact" component={Footer} />
      <Route exact path="/reference" component={Footer} />
      <Route exact path="/malware" component={Footer} />
      <Route exact path="/security" component={Footer} />
      <Route exact path="/pro" component={Footer} />
      <Route exact path="/p_network" component={Footer} />
      <Route exact path="/p_network/:key" component={Footer} />
      <Route exact path="/login" component={Footer} />

      <Route exact path="/essential" component={Footer2} />
      {/* </ScrollToTop> */}
    </Router>
  );
};

export default withResizeDetector(AppRouter);
