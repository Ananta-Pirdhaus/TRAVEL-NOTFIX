// import { v4 as uuidv4 } from "uuid";
import imgP1 from "../../Assets/Image/imgP(1).jpeg";
import imgP2 from "../../Assets/Image/imgP(2).jpeg";
import imgP3 from "../../Assets/Image/imgP(3).jpeg";
import imgP4 from "../../Assets/Image/imgP(4).jpeg";
import imgP5 from "../../Assets/Image/imgP(5).jpeg";
import imgP6 from "../../Assets/Image/imgP(6).png";
import imgP7 from "../../Assets/Image/imgP(8).jpeg";

function createSlug(title) {
  return title.toLowerCase().replace(/ /g, "-");
}

const assetData = [
  {
    id: 1,
    name: "Tour de Ijen",
    slug: createSlug("Trip Ijen"),
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    img: imgP1,
    Link: "paketIdjen",
  },
  {
    id: 2,
    name: "De Djawatan",
    slug: createSlug("De Djawatan"),
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    img: imgP2,
    Link: "paketDjawatan",
  },
  {
    id: 3,
    name: "Menjangan",
    slug: createSlug("Menjangan Tabuhan"),
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    img: imgP3,
    Link: "paketRed",
  },
  {
    id: 4,
    name: "Tour Kota Banyuwangi",
    slug: createSlug("Tour Kota Banyuwangi"),
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    img: imgP4,
    Link: "paketTourKota",
  },
  {
    id: 5,
    name: "Tour Taman Nasional Baluran",
    slug: createSlug("Tour Baluran"),
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    img: imgP5,
    Link: "paketBaluran",
  },
  {
    id: 6,
    name: "Tour Alas Purwo",
    slug: createSlug("Tour Alas Purwo"),
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    img: imgP6,
    Link: "paketAlasPurwo",
  },
  {
    id: 7,
    name: "Sukamade",
    slug: createSlug("Sukamade"),
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    img: imgP7,
    Link: "paketSukamade",
  },
];

export default assetData;
