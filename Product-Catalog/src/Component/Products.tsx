import One from "../assets/Products/Watch01.webp";
import Two from "../assets/Products/Watch02.webp";

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

const Products: Product[] = [
  {
    id: 1,
    name: "Titan Talk S Blue Dial Smart Silicone Strap watch",
    price: 8999,
    description: "Titan Talk S Blue Dial Smart Silicone Strap watch for Unisex",
    image: One,
  },
  {
    id: 2,
    name: "Titan Celestor Advanced GPS & Barometer 3.6 CM AMOLED Display",
    price: 9995,
    description:
      "Titan Celestor with 3.6 CM AMOLED Display with AOD & 466*466 Resolution, Piezoelectric Functioning Crown, Built-in Advanced GPS, Altimeter, Barometer, Compass, SingleSyncTM BT Calling, Sports Records, Breathe Exercise, Alarm, Stopwatch, Timer, Weather Display, Camera Control, Music Control, Sound and Vibration settings, DND Mode, AI Voice Assistant",
    image: Two,
  },
  {
    id: 4,
    name: "Titan Celestor Advanced GPS & Barometer 3.6 CM AMOLED Display",
    price: 9995,
    description:
      "Titan Celestor with 3.6 CM AMOLED Display with AOD & 466*466 Resolution, Piezoelectric Functioning Crown, Built-in Advanced GPS, Altimeter, Barometer, Compass, SingleSyncTM BT Calling, Sports Records, Breathe Exercise, Alarm, Stopwatch, Timer, Weather Display, Camera Control, Music Control, Sound and Vibration settings, DND Mode, AI Voice Assistant",
    image: "link-to-image2",
  },
  {
    id: 4,
    name: "Titan Celestor Advanced GPS & Barometer 3.6 CM AMOLED Display",
    price: 9995,
    description:
      "Titan Celestor with 3.6 CM AMOLED Display with AOD & 466*466 Resolution, Piezoelectric Functioning Crown, Built-in Advanced GPS, Altimeter, Barometer, Compass, SingleSyncTM BT Calling, Sports Records, Breathe Exercise, Alarm, Stopwatch, Timer, Weather Display, Camera Control, Music Control, Sound and Vibration settings, DND Mode, AI Voice Assistant",
    image: "link-to-image2",
  },
];

export { Products };
