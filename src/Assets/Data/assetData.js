// import { v4 as uuidv4 } from "uuid";
import imgP1 from "../../Assets/Image/imgP(1).jpeg";
import imgP2 from "../../Assets/Image/imgP(2).jpeg";
import imgP3 from "../../Assets/Image/imgP(3).jpeg";
import imgP4 from "../../Assets/Image/imgP(4).jpeg";
import imgP5 from "../../Assets/Image/imgP(5).jpeg";
import imgP6 from "../../Assets/Image/imgP(6).png";
import imgP7 from "../../Assets/Image/imgP(7).png";

function createSlug(title) {
  return title.toLowerCase().replace(/ /g, "-");
}

const assetData = [
  {
    id: 1,
    name: "Tour de Ijen",
    slug: createSlug("Trip Ijen"),
    desc: "An application to track your all data from one place. I developed the website and the mobile app",
    img: imgP1,
    Link: "paketIdjen",
  },
  {
    id: 2,
    name: "De Djawatan",
    slug: createSlug("De Djawatan"),
    desc: "An app to help people to get an overview of how they can make the city beautiful.",
    img: imgP2,
    Link: "paketDjawatan",
  },
  {
    id: 3,
    name: "Menjangan",
    slug: createSlug("Menjangan Tabuhan"),
    desc: "Using this app you can track any e coin. Also you will get a good advise about investment form the professional",
    img: imgP3,
    Link: "paketRed",
  },
  {
    id: 4,
    name: "Tour Kota Banyuwangi",
    slug: createSlug("Tour Kota Banyuwangi"),
    desc: "A portfolio for Cavin jr. A artist from New york city. The portfolio is made using ReactJs and GatsbyJs.",
    img: imgP4,
    Link: "paketTourKota",
  },
  {
    id: 5,
    name: "Tour Taman Nasional Baluran",
    slug: createSlug("Tour Baluran"),
    desc: "A tracking website that will show the performance of the website. Also you will get some useful advice to improve the performance.",
    img: imgP5,
    Link: "paketBaluran",
  },
  {
    id: 6,
    name: "Tour Alas Purwo",
    slug: createSlug("Tour Alas Purwo"),
    desc: "A tracking website that will show the performance of the website. Also you will get some useful advice to improve the performance.",
    img: imgP6,
    Link: "paketAlasPurwo",
  },
  {
    id: 7,
    name: "Sukamade",
    slug: createSlug("Sukamade"),
    desc: "A tracking website that will show the performance of the website. Also you will get some useful advice to improve the performance.",
    img: imgP7,
    Link: "paketSukamade",
  },
];

export default assetData;
