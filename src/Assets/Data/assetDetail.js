// IMAGE
import img from "../../Assets/Image/imgP(1).jpeg";
import img1 from "../../Assets/Image/imgP(2).jpeg";
import img2 from "../../Assets/Image/imgP(3).jpeg";
import img3 from "../../Assets/Image/imgP(4).jpeg";
import img4 from "../Image/imgP(5).jpeg";
import img5 from "../Image/imgP(6).png";
import img6 from "../../Assets/Image/imgP(8).jpeg";

// ICON Tour Ijen
import iconTiket from "../Icon/iconTicket.png";
import iconTiketPendakian from "../Icon/iconTicketPendakian.png";
import masker from "../Icon/masker.png";
import headLamp from "../Icon/headLamp.png";
import localGuide from "../Icon/localGuide.png";
import mineralWater from "../Icon/mineralWater.png";

// Trip Djawatan - Pulau Merah - Teluk Hijau
import makan from "../Icon/makan.png";
import transportasi from "../Icon/transportasi.png";
import driver from "../Icon/driver.png";
import BBM from "../Icon/bbm.png";
import Parkir from "../Icon/parkir.png";

// Trip Menjangan - Tabuhan
import kapal from "../Icon/kapal.png";
import retribusi from "../Icon/retribusi.png";
import snorkeling from "../Icon/snorkling.png";
import goPro from "../Icon/go-pro.png";

// Trip Baluran
import snack from '../Icon/snack.png'

// Trip Alas Purwo
import jeep from '../Icon/jeep.png'

// Trip Sukamade
import homeStay from '../Icon/homeStay.png'

const assetDetail = [
  {
    id: 1,
    imgSrc: img,
    slug: "trip-ijen",
    destTitle: "Tour de Ijen",
    location: "Banyuwangi",
    grade: [
      "Tiket Retribusi",
      "Tiket Pendakian",
      "Masker",
      "Head Lamp",
      "Local Guide",
      "Mineral Water",
    ],
    icon: [
      iconTiket,
      iconTiketPendakian,
      masker,
      headLamp,
      localGuide,
      mineralWater,
    ],

    fees: [
      "-2 Pax: Rp.590.000,/Pax",
      "-3 s/d 4 Pax: Rp.420.000,/Pax",
      "-5 Pax: Rp.270.000,/Pax",
      "-10 Pax: Rp.230.000,/Pax",
    ],
    itenerary: [
      "02:00 Penjemputan di Meeting Point Banyuwangi Kota (Hotel/Stasiun)",
      "02:15 Berangkat menuju Kawah Idjen",
      "03.30 Sampai Paltuding, Kemudian Registrasi Kunjungan",
      "03.30 Sampai Paltuding, Kemudian Registrasi Kunjungan",
      "04.00 Persiapan melakukan pendakian",
      "05.30 Tiba di area Kawah Ijen, sembari menikmati panorama",
      "08.00 Kembali menuju Paltuding (Check Point) dan wisatawan akan di antar kembali menuju meeting point",
      "09.00 Tiba di Meeting Point dan program wisata Kawah Ijen berakhir.",
    ],
  },
  {
    id: 2,
    imgSrc: img1,
    slug: "de-djawatan",
    destTitle: "De Djawatan - Pulau Merah - Teluk Hijau",
    location: "Banyuwangi",
    grade: [
      "Tiket Masuk Wisata",
      "Makan 1x",
      "Transportasi",
      "Driver",
      "BBM",
      "Parkir",
      "Air Mineral",
    ],
    icon: [iconTiket, makan, transportasi, driver, BBM, Parkir, mineralWater],
    fees: [
      "2 Pax: Rp.605.000,/Pax",
      "3 s/d 4 Pax: Rp.435.000,/Pax",
      "5 Pax: Rp.300.000,/Pax",
      "10 Pax: Rp.255.000,/Pax",
    ],
    itenerary: [
      "08:00 Penjemputan di Meeting Point (Bandara /Hotel /Statiun) dilanjutkan perjalanan menuju hutan De Djawatan",
      "09:00 Wisata di Hutan De Djawatan",
      "10.30 Perjalanan menuju Pantai Teluk Hijau",
      "12.00 Menikmati keindahan alam Teluk Hijau",
      "12.30 Makan Siang Box dan dilanjutkan",
      "15.30 Perjalanan dilanjutkan kembali menuju Pantai Pulau Merah",
      "16.00 Wisata di Pantai Pulau Merah sembari menikmati Sunset",
      "17.30 Perjalanan dilanjutkan kembali menuju Kota Banyuwangi.",
    ],
  },

  {
    id: 3,
    imgSrc: img2,
    slug: "menjangan-tabuhan",
    destTitle: "Menjangan-Tabuhan",
    location: "Banyuwangi",
    grade: [
      "Kapal Penyebrangan",
      "Tiket masuk GWD",
      "Parkir",
      "Guide Local",
      "Makan 1x",
      "Air Mineral",
      "Retribusi Menjangan-Tabuhan",
      "Alat Snorkling",
      "Go-Pro",
    ],
    icon: [
      kapal,
      iconTiket,
      Parkir,
      localGuide,
      makan,
      mineralWater,
      retribusi,
      snorkeling,
      goPro,
    ],
    fees: [
      "2 Pax: Rp.1.000.000,/Pax",
      "3 s/d 4 Pax: Rp.705.000,/Pax",
      "5 Pax: Rp. 475.000,/Pax",
      "10 Pax: Rp. 300.000,/Pax",
    ],
    itenerary: [
      "07:30 Bertemu di Meeting Point Grand Watu Dodol (GWD)",
      "08.10 Penyebrangan GWD - Pulau Menjangan",
      "09.00 Registrarsi kedatangan, dilanjutkan sesi foto di spot keren",
      "10.00 Snorkeling di spot pertama",
      "11.30 Snorkeling di spot kedua",
      "12.00 Makan siang (Lunch Box)",
      "13.30 Meninggalkan kawasan Pulau Menjangan",
      "14.30 Explore pulau Tabuhan (berfoto atau snorkeling).",
      "15.30 Meninggalkan pulau Tabuhan",
      "16.30 Bersih badan di GWD dan program paket wisata pulau Menjangan - Tabuhan berakhir.",
    ],
  },
  {
    id: 4,
    imgSrc: img3,
    slug: "tour-kota-banyuwangi",
    destTitle: "Explore Banyuwangi",
    location: "Banyuwangi",
    grade: [
      "Tiket Masuk Wisata",
      "Makan 1x",
      "Transportasi",
      "Driver",
      "BBM",
      "Parkir",
      "Air Mineral",
    ],
    icon: [iconTiket, makan, transportasi, driver, BBM, Parkir, mineralWater],
    fees: [
      "2 Pax: Rp.590.000,/Pax",
      "3 s/d 4 Pax: Rp.450.000,/Pax",
      "5 Pax: Rp. 325.000,/Pax",
      "10 Pax: Rp. 290.000,/Pax",
    ],
    itenerary: [
      "08:00 Bertemu di Meeting Point (Hotel /Bandara /Statiun)",
      "08:30 Mengunjungi Air Terjun Jagir",
      "10.30 Mengunjungi Desa Adat Osing Kemiren",
      "12.00 Makan Siang di Lokasi Resto Kemiren dengan suasana khas Pedesaan",
      "12.30 Mengunjungi pusat oleh-oleh khas Banyuwangi",
      "14.00 Mengunjungi Taman Sri Tanjung dan Pendopo Banyuwnangi",
      "15.00 Wisata di Pantai Boom Marina",
      "16.30 Wisatawan akan diantar kembali menuju Meeting Point (Hotel /Stasiun /Bandara)",
      "17.00 Tiba di Meeting Point dan program wisata berakhir",
    ],
  },
  {
    id: 5,
    imgSrc: img4,
    slug: "tour-baluran",
    destTitle: "Taman Nasional Baluran",
    location: "Banyuwangi",
    grade: [
      "Tiket Masuk Wisata",
      "Makan 1x",
      "Transportasi",
      "Driver",
      "BBM",
      "Parkir",
      "Snack",
      "Air Mineral",
    ],
    icon: [
      iconTiket,
      makan,
      transportasi,
      driver,
      BBM,
      Parkir,
      snack,
      mineralWater,
    ],
    fees: [
      "2 Pax: Rp.590.000,/Pax",
      "3 s/d 4 Pax: Rp.420.000,/Pax",
      "3 s/d 4 Pax: Rp.420.000,/Pax",
      "5 Pax: Rp.270.000,/Pax",
      "10 Pax: Rp.230.000,/Pax",
    ],
    itenerary: [
      "08:00 Penjemputan di Meeting Point",
      "09:30 Tiba di TN Baluran untuk registrasi",
      "10.00 Explore dan berfoto-foto di spot keren di Savana Bekol",
      "12.00 ISHOMA",
      "13.00 Mengunjungi Pantai Bama dan Mangrove Trail",
      "14.30 Meninggalkan TN Baluran dan menuju ke Waduk Bajulmati",
      "16.00 Menikmati Sunset di Waduk Bajulmati dengan pemandangan latar belakang pegunungan Ijen dan Raung",
      "17.30 Kembali menuju meeeting point dan program paket wisata Baluran berakhir",
    ],
  },

  {
    id: 6,
    imgSrc: img5,
    slug: "tour-alas-purwo",
    destTitle: "Taman Nasional Alas Purwo",
    location: "Banyuwangi",
    grade: [
      "Tiket Masuk Wisata",
      "Makan 1x",
      "Sewa Jeep",
      "Transportasi",
      "Driver",
      "BBM",
      "Parkir",
      "Air Mineral",
    ],
    icon: [
      iconTiket,
      makan,
      jeep,
      transportasi,
      driver,
      BBM,
      Parkir,
      mineralWater,
    ],
    fees: [
      "2 Pax: Rp.699.000,/Pax",
      "3 s/d 4 Pax: Rp.495.000,/Pax",
      "5 Pax: Rp.350.000,/Pax",
      "10 Pax: Rp.275.000,/Pax",
    ],
    itenerary: [
      "07:00 Penjemputan di Meeting Point",
      "09:00 Tiba di Post TN Alas Purwo untuk registrasi",
      "10.30 Melihat habitat Banteng Jawa, Burung Merak, dan Elang Jawa di Sadengan",
      "12.00 Makan siang di Rest Area Pantai Pancur",
      "13.00 Wisata di Pantai Pancur",
      "14.00 Transfer Jeep Hiline menuju pantai Plengkung",
      "14.30 Menikmati G-Land",
      "16.00 Bersiap kembali menuju Kota Banyuwangi",
      "18.00 Tiba di Meeting Point",
    ],
  },
  {
    id: 7,
    imgSrc: img6,
    slug: "sukamade",
    destTitle: "Tour Sukamade - De'Djawatan",
    location: "Banyuwangi",
    grade: [
      "Tiket Masuk Wisata",
      "Makan 3x",
      "Home Stay",
      "Guide Lokal",
      "Sewa Jeep",
      "Transportasi",
      "Driver",
      "BBM",
      "Parkir",
      "Air Mineral",
    ],
    icon: [
      iconTiket,
      makan,
      homeStay,
      localGuide,
      jeep,
      transportasi,
      driver,
      BBM,
      Parkir,
      mineralWater,
    ],
    fees: [
      "2 Pax: Rp.1.845.000,/Pax",
      "3 s/d 4 Pax: Rp.1.360.000,/Pax",
      "5 Pax: Rp.950.000,/Pax",
      "10 Pax: Rp.875.000,/Pax",
    ],

    itenerary: [
      "Hari 1:",
      "07:00 Penjemputan di meeting point",
      "09.00 Wisata di pantai Pulau Merah",
      "10.30 perjalanan menuju Pantai Teluk Hijau",
      "11.30 Transfer Jeep di Desa Sarongan untuk meuju Teluk Hijau dan Sukamade",
      "14.00 Perjalanan dilanjutkan kembali menuju Sukamade via Off-Road",
      "16.00 Check in di Homestay Sukamade dan Istirahat",
      "18.00 Makan Malam",
      "19.00 Wisatawan akan di dampingi Ranger TN Meru Betiri untuk melihat Penyu Bertelur",
      "21.00 Tiba di Homestay dan free Program",
      "Hari 2",
      "05.00 Pelepasan Tukik di dampingi Ranger TN Meru Betini",
      "07.00 Sarapan pagi di Homestay dan Check out",
      "10.00 Tiba di Sarongan, transfer kendaraan dan perjalanan kembali menuju kota Banyuwangi",
      "12.00 Wisata di hutan De Djawatan - Benculuk",
      "13.30 Perjalanan dilanjutakan kembali menuju meeting point di Kota Banyuwangi",
      "14.30 Tiba di meeting point dan program wisata berakhir",
    ],
  },
];
export default assetDetail;
