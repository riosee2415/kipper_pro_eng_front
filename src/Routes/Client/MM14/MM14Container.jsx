import React, { useEffect, useRef, useState } from "react";
import withSplitting from "../../../Lib/withSplitting";
const MM14Presenter = withSplitting(() => import("./MM14Presenter"));
import { useQuery, useMutation } from "@apollo/client";
import {} from "./MM14Queries";
import { animateScroll as scroll } from "react-scroll";
import useInput from "../../../Components/Hooks/useInput";
import { toast } from "react-toastify";
import confirm from "../../../Components/confirm/confirm";

const MM14Container = ({ history }) => {
  ////////////// - VARIABLE- ////////////////
  const point = [
    {
      name: "korea",
      top: "44%",
      left: "36%",
      src: "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER-PRO-ENG%2Fassets%2Fimages%2Fcontact%2Fnew%20circle%2F%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%206615.png?alt=media&token=3eed3c77-6e05-4a56-a802-d739ae510fa0",
      info: "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER-PRO-ENG%2Fassets%2Fimages%2Fcontact%2Fnew%20click%2F%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%206661.png?alt=media&token=84044eef-bdb5-440a-9c19-d653dbf5cb67",
      map: 3,
      mobile: "+82 2 554 9099",
      email: "global_sales@comxi.com",
      web: "www.smartkeeper.kr",
    },
    {
      name: "vietnam",
      top: "53%",
      left: "34%",
      src: "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER-PRO-ENG%2Fassets%2Fimages%2Fcontact%2Fnew%20circle%2F%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%206623.png?alt=media&token=a614106a-8e0b-491b-8140-1f8f0d5d7b43",
      info: "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER-PRO-ENG%2Fassets%2Fimages%2Fcontact%2Fnew%20click%2F%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%206669.png?alt=media&token=fac6f29e-a54c-44d4-a013-1a93875cc8f8",
      map: 3,
      mobile: "+65 66842013",
      email: "smartkeeper@gennexcorp.com",
      web: "",
    },
    {
      name: "phlippines",
      top: "54%",
      left: "37%",
      src: "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER-PRO-ENG%2Fassets%2Fimages%2Fcontact%2Fnew%20circle%2F%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%206622.png?alt=media&token=4cf47f18-7fd5-49dd-af8f-2dcd47e1bd0e",
      info: "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER-PRO-ENG%2Fassets%2Fimages%2Fcontact%2Fnew%20click%2F%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%206662.png?alt=media&token=052a7d29-2d44-4149-85c2-dce271c24baa",
      map: 3,
      mobile: "+632 88506182",
      email: "smartkeeper@gennexcorp.com",
      web: "",
    },
    {
      name: "japan",
      top: "45%",
      left: "40%",
      src: "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER-PRO-ENG%2Fassets%2Fimages%2Fcontact%2Fnew%20circle%2F%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%206617.png?alt=media&token=da4ea3cf-2f9e-4c65-942a-ef172fdfd291",
      info: "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER-PRO-ENG%2Fassets%2Fimages%2Fcontact%2Fnew%20click%2F%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%206667.png?alt=media&token=fa43bd50-0c2c-49de-871b-c71560d2915a",
      map: 3,
      mobile: "+81 3253 5811",
      email: "tada@mag-labo.com",
      web: "",
    },
    {
      name: "KAZAKHSTAN",
      top: "30%",
      left: "20%",
      src: "https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/kipper/assets/images/contactus/circle-kazakhstan.png",
      info: "https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/kipper/assets/images/contactus/box-kazakhstan.png",
      map: 3,
      mobile: "+421 903 178 629",
      email: "info@smartkeeper.sk",
      web: "www.smartkeeper.sk/ru",
    },

    {
      name: "singapore",
      top: "62%",
      left: "31%",
      src: "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER-PRO-ENG%2Fassets%2Fimages%2Fcontact%2Fnew%20circle%2F%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%206621.png?alt=media&token=b1a6fc2e-dc2d-4434-9edf-ae7c2b7859a2",
      info: "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER-PRO-ENG%2Fassets%2Fimages%2Fcontact%2Fnew%20click%2F%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%206666.png?alt=media&token=452a5d43-02e8-4300-8842-3ea8614d7fc9",
      map: 3,
      mobile: "+632 88506182",
      email: "smartkeeper@gennexcorp.com",
      web: "",
      mobile2: "+65 63365920",
      email2: "dbrsales@dbr-sys.com",
      web2: "",
    },
    {
      name: "indonesia",
      top: "66%",
      left: "33%",
      src: "https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/kipper/assets/images/contactus/circle-indo.png",
      info: "https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/kipper/assets/images/contactus/box-indo.png",
      map: 3,
      mobile: "+62 21 7591 3446 ",
      email: "info@leebro.co.id",
      web: "www.smartkeeper.id",
    },
    {
      name: "thailand",
      top: "51%",
      left: "31%",
      src: "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER-PRO-ENG%2Fassets%2Fimages%2Fcontact%2Fnew%20circle%2F%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%206619.png?alt=media&token=655c6281-dcc5-41e9-8aa9-58fc685a44cc",
      info: "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER-PRO-ENG%2Fassets%2Fimages%2Fcontact%2Fnew%20click%2F%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%206670.png?alt=media&token=921dcf28-99b8-4887-825d-950dbf95bd91",
      map: 3,
      mobile: "+66817355992",
      email: "tom.thammathat@gmail.com",
      web: "",
    },
    {
      name: "malaysia",
      top: "58%",
      left: "29%",
      src: "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER-PRO-ENG%2Fassets%2Fimages%2Fcontact%2Fnew%20circle%2F%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%206620.png?alt=media&token=849bacec-e32a-4132-b42f-9979660e4dcd",
      info: "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER-PRO-ENG%2Fassets%2Fimages%2Fcontact%2Fnew%20click%2F%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%206665.png?alt=media&token=b0ed16d4-4a54-4187-b8cd-626edbc6c465",
      map: 3,
      mobile: "+6012 475 1475",
      email: "kedy.teoh@gennexcorp.com",
      web: "",
    },
    {
      name: "india",
      top: "52%",
      left: "24%",
      src: "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER-PRO-ENG%2Fassets%2Fimages%2Fcontact%2Fnew%20circle%2F%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%206618.png?alt=media&token=8d9126cb-cbe4-4d84-a8a9-bdd921ea2949",
      info: "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER-PRO-ENG%2Fassets%2Fimages%2Fcontact%2Fnew%20click%2F%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%206663.png?alt=media&token=5ef441e9-989e-4e22-bee0-ea89c2eb69cf",
      map: 3,
      mobile: "+91 9975567111",
      email: "kishore@tavat.in",
      web: "www.facebook.com/thesmartkeeper",
    },
    {
      name: "uae",
      top: "50%",
      left: "17%",
      src: "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER-PRO-ENG%2Fassets%2Fimages%2Fcontact%2Fcircle%2F%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%205864.png?alt=media&token=aa8d24ec-09d2-46d5-93d9-5d33857d2281",
      info: "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER-PRO-ENG%2Fassets%2Fimages%2Fcontact%2Fnew%20click%2FUAE.png?alt=media&token=9339a040-5406-46e8-b105-3274c698c14f",
      map: 3,
      mobile: "+971 0 556024252",
      email: "info@alhutaib.com",
      web: "www.smartkeeper.ae",
    },

    {
      name: "china",
      top: "45%",
      left: "31%",
      src: "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER-PRO-ENG%2Fassets%2Fimages%2Fcontact%2Fnew%20circle%2F%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%206616.png?alt=media&token=7985b0f7-d1a6-40f9-936b-fd3a14bebe47",
      info: "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER-PRO-ENG%2Fassets%2Fimages%2Fcontact%2Fnew%20click%2F%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%206664.png?alt=media&token=c97d5c11-fa99-4235-a36a-3765340f73fc",
      map: 3,
      mobile: "13920533099",
      email: "tianjin3099@163.com",
      web: "",
    },
    {
      name: "norway",
      top: "22%",
      left: "4%",
      src: "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER-PRO-ENG%2Fassets%2Fimages%2Fcontact%2Fnew%20circle%2F%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%206628.png?alt=media&token=1c986a86-149f-4031-88c8-df21c1abf14f",
      info: "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER-PRO-ENG%2Fassets%2Fimages%2Fcontact%2Fnew%20click%2F%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%206660.png?alt=media&token=01c72660-81cb-4c4e-b36c-f92f0a2a34ba",
      map: 1,
      mobile: "+47 55 50 91 50",
      email: "info@direktronik.no",
      web: "www.direktronik.no",
    },
    {
      name: "Netherlands",
      top: "34%",
      left: "3%",
      src: "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER-PRO-ENG%2Fassets%2Fimages%2Fcontact%2Fnew%20circle%2Fnether-circle.png?alt=media&token=af8c51ee-667b-4c0a-a721-045e2417095d",
      info: "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER-PRO-ENG%2Fassets%2Fimages%2Fcontact%2Fnew%20click%2Fnetherlands.png?alt=media&token=c33ce422-6545-4889-b53a-3061b23653fc",
      map: 1,
      mobile: "+31850068750",
      email: "raymond@hart4technology.nl",
      web: "www.hart4technology.nl",
    },
    {
      name: "Spain",
      top: "40%",
      left: "1.5%",
      src: "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER-PRO-ENG%2Fassets%2Fimages%2Fcontact%2Fnew%20circle%2Fspain.png?alt=media&token=e3e77dfe-9b62-42b9-bba1-3ff603ab776a",
      info: "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER-PRO-ENG%2Fassets%2Fimages%2Fcontact%2Fnew%20click%2Fspain-box.png?alt=media&token=76233093-2054-4e94-a2de-9d5c72914c8e",
      map: 1,
      mobile: "+34 690878640",
      email: "Ira@itbranding.es",
      web: "www.smartkeeper.es",
    },
    {
      name: "hungary",

      top: "40%",
      left: "9%",
      src: "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER-PRO-ENG%2Fassets%2Fimages%2Fcontact%2Fnew%20circle%2F%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%206627.png?alt=media&token=c3350ab3-1df8-4213-982b-1eaa2b019064",
      info: "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER-PRO-ENG%2Fassets%2Fimages%2Fcontact%2Fnew%20click%2F%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%206658.png?alt=media&token=eb78715c-a174-40d9-af40-6ae54aa066f3",
      map: 1,
      mobile: "+421 903 178 629",
      email: "info@smartkeeper.sk",
      web: "www.smartkeeper.sk/hu",
    },
    {
      name: "slovakia",
      top: "34%",
      left: "12%",
      src: "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER-PRO-ENG%2Fassets%2Fimages%2Fcontact%2Fnew%20circle%2F%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%206626.png?alt=media&token=ad68c053-a71a-4996-85a6-a33a98d20ae9",
      info: "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER-PRO-ENG%2Fassets%2Fimages%2Fcontact%2Fnew%20click%2F%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%206657.png?alt=media&token=f5f7c952-d588-462b-a3d9-14df34799ad4",
      map: 1,
      mobile: "+421 903 178 629",
      email: "info@smartkeeper.sk",
      web: "www.smartkeeper.sk",
    },
    {
      name: "poland",
      top: "32%",
      left: "9%",
      src: "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER-PRO-ENG%2Fassets%2Fimages%2Fcontact%2Fnew%20circle%2F%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%206629.png?alt=media&token=6e69a731-3304-4a54-b684-437ddb8125ec",
      info: "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER-PRO-ENG%2Fassets%2Fimages%2Fcontact%2Fnew%20click%2F%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%206655.png?alt=media&token=073e7c2b-811b-4e0e-ac0b-59e9e66dc61d",
      map: 1,
      mobile: "+48 535 112 606",
      email: "office@smartkeeper.pl",
      web: "www.smartkeeper.pl",
    },
    {
      name: "czech",
      top: "37%",
      left: "7%",
      src: "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER-PRO-ENG%2Fassets%2Fimages%2Fcontact%2Fnew%20circle%2F%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%206625.png?alt=media&token=accab8a8-b368-46a5-8f8f-37d52ac5b3ba",
      info: "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER-PRO-ENG%2Fassets%2Fimages%2Fcontact%2Fnew%20click%2F%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%206656.png?alt=media&token=45a03b90-4b25-4ccc-9172-79cebf48709e",
      map: 1,
      mobile: "+421 903 178 629",
      email: "info@smartkeeper.sk",
      web: "www.smartkeeper.sk/cs",
    },
    {
      name: "germany",
      top: "31%",
      left: "5%",
      src: "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER-PRO-ENG%2Fassets%2Fimages%2Fcontact%2Fnew%20circle%2F%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%206624.png?alt=media&token=b6498775-4edb-4fcf-a140-c321ba4fcb26",
      info: "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER-PRO-ENG%2Fassets%2Fimages%2Fcontact%2Fnew%20click%2F%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%206654.png?alt=media&token=bd0fc09f-6212-4d10-b4d1-0a9d38ed06b4",
      map: 1,
      mobile: "+49 176 636 255 60",
      email: "smartkeeper@smartlightsolutions.de",
      web: "www.smartkeeper.de",
    },
    {
      name: "sweden",
      top: "24%",
      left: "8%",
      src: "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER-PRO-ENG%2Fassets%2Fimages%2Fcontact%2Fnew%20circle%2F%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%206630.png?alt=media&token=67c09e4f-df93-4ce2-a82d-d6376a1b91fc",
      info: "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER-PRO-ENG%2Fassets%2Fimages%2Fcontact%2Fnew%20click%2F%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%206659.png?alt=media&token=3d7b4b51-ad1e-49c2-9a8c-0f1174b112d3",
      map: 1,
      mobile: "+46 8 524 00700",
      email: "info@direktronik.se",
      web: "www.direktronik.se",
    },
    {
      name: "alabama",
      top: "42%",
      left: "78%",
      src: "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER-PRO-ENG%2Fassets%2Fimages%2Fcontact%2Fnew%20circle%2F%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%206631.png?alt=media&token=15059d38-a47e-49f3-9a9d-673e35531f0b",
      info: "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER-PRO-ENG%2Fassets%2Fimages%2Fcontact%2Fnew%20click%2F%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%206652.png?alt=media&token=45eefa68-ee9d-4815-8231-333e2de8c1b7",
      map: 2,
      mobile: "+1 888 865 4639",
      email: "info@smartkeeper.us",
      web: "www.smartkeeper.us",
    },
    {
      name: "virginia",
      top: "39%",
      left: "81%",
      src: "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER-PRO-ENG%2Fassets%2Fimages%2Fcontact%2Fnew%20circle%2F%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%206632.png?alt=media&token=f1f9c0f7-c0e5-4817-9e48-298c617dbfbf",
      info: "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER-PRO-ENG%2Fassets%2Fimages%2Fcontact%2Fnew%20click%2F%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%206651.png?alt=media&token=63016121-94e2-4762-a92b-4509c09318bd",
      map: 2,
      mobile: "+1 804 299 5234",
      email: "info@comxiworld.com",
      web: "smartkeeperworld.com",
    },
    {
      name: "mexico",
      top: "45%",
      left: "74%",
      src: "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER-PRO-ENG%2Fassets%2Fimages%2Fcontact%2Fnew%20circle%2F%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%206633.png?alt=media&token=76591746-0a90-4531-bf9b-da69a92a865a",
      info: "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER-PRO-ENG%2Fassets%2Fimages%2Fcontact%2Fnew%20click%2F%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%206653.png?alt=media&token=9900af04-f6a7-46f4-a078-7803db180ace",
      map: 2,
      mobile: "",
      email: "info@comxiworld.com",
      web: "daoltec.com.mx",
    },
    {
      name: "ESTONIA",
      top: "20%",
      left: "12%",
      src: "https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/kipper/assets/images/contactus/circle-estonia.png",
      info: "https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/kipper/assets/images/contactus/box-estonia.png",
      map: 1,
      mobile: "+421 903 178 629",
      email: "info@smartkeeper.sk",
      web: "www.smartkeeper.sk/en",
    },
    {
      name: "UKRAINE",
      top: "27%",
      left: "12%",
      src: "https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/kipper/assets/images/contactus/circle-ukraine.png",
      info: "https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/kipper/assets/images/contactus/box-ukraine.png",
      map: 1,
      mobile: "+421 903 178 629",
      email: "info@smartkeeper.sk",
      web: "www.smartkeeper.sk/uk",
    },
    {
      name: "RUSSIA",
      top: "24%",
      left: "26%",
      src: "https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/kipper/assets/images/contactus/circle-russia.png",
      info: "https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/kipper/assets/images/contactus/box-russia.png",
      map: 1,
      mobile: "+421 903 178 629",
      email: "info@smartkeeper.sk",
      web: "www.smartkeeper.sk/ru",
    },
    {
      name: "GREECE",
      top: "41%",
      left: "12%",
      src: "https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/kipper/assets/images/contactus/circle-greece.png",
      info: "https://4leaf-s3.s3.ap-northeast-2.amazonaws.com/kipper/assets/images/contactus/box-greece.png",
      map: 1,
      mobile: "+421 903 178 629",
      email: "info@smartkeeper.sk",
      web: "www.smartkeeper.sk/en",
    },
  ];

  const map = [
    "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER-PRO-ENG%2Fassets%2Fimages%2Fcontact%2F%E1%84%8C%E1%85%B5%E1%84%83%E1%85%A9.png?alt=media&token=37261bad-6bd3-4223-9db4-ee54b98cc834",
    "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER-PRO-ENG%2Fassets%2Fimages%2Fcontact%2Fblue.png?alt=media&token=883163cf-4eb5-4957-b884-5e4d6eb607df", // 블루
    "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER-PRO-ENG%2Fassets%2Fimages%2Fcontact%2Fred.png?alt=media&token=7cb0ff80-8ca0-4a56-a7f7-676bb5fde0ec", // 레드
    "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER-PRO-ENG%2Fassets%2Fimages%2Fcontact%2Fyellow.png?alt=media&token=b1432ca8-216b-43c4-a988-147c345baf2f", // 엘로
  ];

  ////////////// - USE REF- ///////////////
  const wholeRef = useRef();

  ////////////// - USE STATE- ///////////////

  const [ableIcon, setAbleIcon] = useState(null);
  const [overMap, setOverMap] = useState(0);
  ////////////// - USE QUERY- ///////////////

  ///////////// - USE MUTATION- /////////////

  ///////////// - EVENT HANDLER- ////////////

  ////////////// - USE EFFECT- //////////////

  useEffect(() => {
    scroll.scrollTo(0);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (wholeRef.current) {
        let html = "";

        let s = document.createElement("script");
        s.type = "text/javascript";
        s.async = true;
        s.src = "//wcs.naver.net/wcslog.js";

        wholeRef.current.appendChild(s);

        s = document.createElement("script");
        s.type = "text/javascript";
        s.async = true;

        html = `
          var _nasa={};
          if(window.wcs) _nasa["cnv"] = wcs.cnv("1","10"); 
        `;
        s.innerHTML = html;

        wholeRef.current.appendChild(s);
      }
    }, 3000);
  }, [wholeRef.current]);

  return (
    <MM14Presenter
      point={point}
      map={map}
      overMap={overMap}
      setOverMap={setOverMap}
      //
      wholeRef={wholeRef}
      //
      ableIcon={ableIcon}
      setAbleIcon={setAbleIcon}
      //
    />
  );
};

export default MM14Container;
