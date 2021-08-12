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
      top: "43%",
      left: "38%",
      src: "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER-PRO-ENG%2Fassets%2Fimages%2Fcontact%2Fcircle%2F%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%205853.png?alt=media&token=8aca0371-d4f3-43d2-b9dc-5880a50dc389",
      info: "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER-PRO-ENG%2Fassets%2Fimages%2Fcontact%2Fclick%2F%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%205805.png?alt=media&token=b2476a0a-622d-4344-91cc-2fb9334c4507",
    },
    {
      name: "vietnam",
      top: "52%",
      left: "34%",
      src: "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER-PRO-ENG%2Fassets%2Fimages%2Fcontact%2Fcircle%2F%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%205861.png?alt=media&token=aa5a34ab-067d-4d63-b7f8-f1a31e8d7726",
      info: "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER-PRO-ENG%2Fassets%2Fimages%2Fcontact%2Fclick%2F%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%205818.png?alt=media&token=db835280-2a01-4f06-9af2-78f402c97425",
    },
    {
      name: "phlippines",
      top: "53%",
      left: "37%",
      src: "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER-PRO-ENG%2Fassets%2Fimages%2Fcontact%2Fcircle%2F%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%205870.png?alt=media&token=cf42dbf7-ff75-4298-b99d-151a99c50be0",
      info: "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER-PRO-ENG%2Fassets%2Fimages%2Fcontact%2Fclick%2F%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%205820.png?alt=media&token=e83c5f3d-9c79-4338-85c5-41d357edbd43",
    },
    {
      name: "indonesia",
      top: "63%",
      left: "38%",
      src: "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER-PRO-ENG%2Fassets%2Fimages%2Fcontact%2Fcircle%2F%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%205871.png?alt=media&token=59163a32-f4cc-40be-8184-ae8163ab7dfe",
      info: "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER-PRO-ENG%2Fassets%2Fimages%2Fcontact%2Fclick%2F%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%205823.png?alt=media&token=7de4c958-82a9-40cc-bc78-7bb6a28ccd55",
    },
    {
      name: "brunei",
      top: "60%",
      left: "36%",
      src: "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER-PRO-ENG%2Fassets%2Fimages%2Fcontact%2Fcircle%2F%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%205869.png?alt=media&token=255d12bf-c17a-45fe-b1fb-0a19f8874c20",
      info: "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER-PRO-ENG%2Fassets%2Fimages%2Fcontact%2Fclick%2F%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%205816.png?alt=media&token=b2a37456-419c-4576-91b2-abe13630356c",
    },
    {
      name: "singapore",
      top: "65%",
      left: "33%",
      src: "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER-PRO-ENG%2Fassets%2Fimages%2Fcontact%2Fcircle%2F%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%205868.png?alt=media&token=2f0bb7c1-8b58-4b98-ba1f-31f92d79eecf",
      info: "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER-PRO-ENG%2Fassets%2Fimages%2Fcontact%2Fclick%2F%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%205814.png?alt=media&token=495c6076-2044-457c-bd64-cd24cef3a9b0",
    },
    {
      name: "thailand",
      top: "50%",
      left: "31%",
      src: "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER-PRO-ENG%2Fassets%2Fimages%2Fcontact%2Fcircle%2F%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%205866.png?alt=media&token=50b97a3f-8354-4707-be95-3f2d17874338",
      info: "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER-PRO-ENG%2Fassets%2Fimages%2Fcontact%2Fclick%2F%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%205824.png?alt=media&token=12b86d86-df7a-4cfd-afc3-6664fabb9a9e",
    },
    {
      name: "malaysia",
      top: "60%",
      left: "31%",
      src: "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER-PRO-ENG%2Fassets%2Fimages%2Fcontact%2Fcircle%2F%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%205867.png?alt=media&token=8a79d1a6-a39b-4dc7-b668-e860dc424d9e",
      info: "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER-PRO-ENG%2Fassets%2Fimages%2Fcontact%2Fclick%2F%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%205819.png?alt=media&token=055f3f30-27e1-47cf-bad4-3ffb0d8c7ddd",
    },
    {
      name: "india",
      top: "51%",
      left: "24%",
      src: "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER-PRO-ENG%2Fassets%2Fimages%2Fcontact%2Fcircle%2F%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%205865.png?alt=media&token=ed7cd8a5-8454-4b42-a4ff-ae16c61692ab",
      info: "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER-PRO-ENG%2Fassets%2Fimages%2Fcontact%2Fclick%2F%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%205817.png?alt=media&token=ffed37f9-e249-4979-b407-5d734f0342cb",
    },
    {
      name: "kyrgizRepublic",
      top: "40%",
      left: "23%",
      src: "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER-PRO-ENG%2Fassets%2Fimages%2Fcontact%2Fcircle%2F%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%205860.png?alt=media&token=bb3fd6e0-8cc0-4e94-8c69-e58c75af08e7",
      info: "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER-PRO-ENG%2Fassets%2Fimages%2Fcontact%2Fclick%2F%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%205821.png?alt=media&token=421baa39-5937-4c78-81ab-c9fa3dae6e7a",
    },
    {
      name: "kazakhstan",
      top: "38%",
      left: "21%",
      src: "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER-PRO-ENG%2Fassets%2Fimages%2Fcontact%2Fcircle%2F%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%205859.svg?alt=media&token=2944f6eb-fb55-479e-9c44-fd469be6e700",
      info: "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER-PRO-ENG%2Fassets%2Fimages%2Fcontact%2Fclick%2F%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%205815.png?alt=media&token=8effdd0d-e8c3-4712-8511-69f5317d93f6",
    },
    {
      name: "uae",
      top: "49%",
      left: "17%",
      src: "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER-PRO-ENG%2Fassets%2Fimages%2Fcontact%2Fcircle%2F%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%205864.png?alt=media&token=aa8d24ec-09d2-46d5-93d9-5d33857d2281",
      info: "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER-PRO-ENG%2Fassets%2Fimages%2Fcontact%2Fclick%2F%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%205822.png?alt=media&token=ffcb5bd8-52bb-413a-ae7a-d13b1b9969c2",
    },
    {
      name: "hungary",
      top: "41%",
      left: "11%",
      src: "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER-PRO-ENG%2Fassets%2Fimages%2Fcontact%2Fcircle%2F%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%205862.png?alt=media&token=baeb9e5d-443b-45af-be04-bb231ed85128",
      info: "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER-PRO-ENG%2Fassets%2Fimages%2Fcontact%2Fclick%2F%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%205812.png?alt=media&token=4a701bcb-0326-4ce0-9c3d-e2ec834ba2f2",
    },
    {
      name: "slovakia",
      top: "33%",
      left: "12%",
      src: "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER-PRO-ENG%2Fassets%2Fimages%2Fcontact%2Fcircle%2F%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%205858.png?alt=media&token=947996eb-c674-449e-8f9f-dd3817761013",
      info: "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER-PRO-ENG%2Fassets%2Fimages%2Fcontact%2Fclick%2F%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%205809.png?alt=media&token=d83a2474-0b08-4fb3-8dc9-b96a9eaacb3c",
    },
    {
      name: "poland",
      top: "31%",
      left: "9%",
      src: "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER-PRO-ENG%2Fassets%2Fimages%2Fcontact%2Fcircle%2F%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%205857.png?alt=media&token=d86a4747-faf1-4e27-907e-16dcebbdd007",
      info: "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER-PRO-ENG%2Fassets%2Fimages%2Fcontact%2Fclick%2F%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%205810.png?alt=media&token=37155e17-5d44-48c2-b6e4-0c6d87a87280",
    },
    {
      name: "czech",
      top: "36%",
      left: "7%",
      src: "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER-PRO-ENG%2Fassets%2Fimages%2Fcontact%2Fcircle%2F%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%205863.png?alt=media&token=69d8d24c-7f21-48d7-990f-bb9ac22cff25",
      info: "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER-PRO-ENG%2Fassets%2Fimages%2Fcontact%2Fclick%2F%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%205811.png?alt=media&token=0d5b199f-d853-4108-bcf6-c595bbf68596",
    },
    {
      name: "germany",
      top: "32%",
      left: "5%",
      src: "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER-PRO-ENG%2Fassets%2Fimages%2Fcontact%2Fcircle%2F%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%205856.png?alt=media&token=72fb3a7d-989e-4aba-b453-c043b3357d59",
      info: "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER-PRO-ENG%2Fassets%2Fimages%2Fcontact%2Fclick%2F%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%205808.png?alt=media&token=200864c0-6fd6-4bed-b2c2-ba59df06c52b",
    },
    {
      name: "sweden",
      top: "23%",
      left: "8%",
      src: "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER-PRO-ENG%2Fassets%2Fimages%2Fcontact%2Fcircle%2F%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%205855.png?alt=media&token=352ec571-5a78-4e70-bdee-4663ad4d4743",
      info: "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER-PRO-ENG%2Fassets%2Fimages%2Fcontact%2Fclick%2F%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%205813.png?alt=media&token=8b6ef67b-1866-4036-b0d2-5d46d83c08d3",
    },
    {
      name: "alabama",
      top: "41%",
      left: "80%",
      src: "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER-PRO-ENG%2Fassets%2Fimages%2Fcontact%2Fcircle%2F%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%205850.png?alt=media&token=41c1b5ee-4103-43b2-bb96-964c62b985ef",
      info: "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER-PRO-ENG%2Fassets%2Fimages%2Fcontact%2Fclick%2F%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%205807.png?alt=media&token=2cd3f876-cef4-4eca-9298-4c3610e0eb79",
    },
    {
      name: "virginia",
      top: "38%",
      left: "81%",
      src: "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER-PRO-ENG%2Fassets%2Fimages%2Fcontact%2Fcircle%2F%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%205851.png?alt=media&token=2ae9a42c-7e33-45e2-afc2-216e57261c99",
      info: "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/KEEPER-PRO-ENG%2Fassets%2Fimages%2Fcontact%2Fclick%2F%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8%205806.png?alt=media&token=8ff38a60-f0e6-4fa0-b935-d3445182e195",
    },
  ];

  ////////////// - USE REF- ///////////////

  ////////////// - USE STATE- ///////////////

  const [ableIcon, setAbleIcon] = useState(null);

  ////////////// - USE QUERY- ///////////////

  ///////////// - USE MUTATION- /////////////

  ///////////// - EVENT HANDLER- ////////////

  ////////////// - USE EFFECT- //////////////

  useEffect(() => {
    scroll.scrollTo(0);
  }, []);

  return (
    <MM14Presenter
      point={point}
      //

      ableIcon={ableIcon}
      setAbleIcon={setAbleIcon}
      //
    />
  );
};

export default MM14Container;
