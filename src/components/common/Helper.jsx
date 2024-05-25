import {
  UmsatzIcon,
  GreenGrade,
  BuchungenIcon,
  KundenIcon,
  Redgrade,
} from "../common/Icon";

export const SliderList = [
  {
    image: "/assets/images/login/webp/mountain.webp",
  },
  {
    image: "/assets/images/login/webp/cycleing.webp",
  },
  {
    image: "/assets/images/login/webp/grass.webp",
  },
  {
    image: "/assets/images/login/webp/house.webp",
  },
  {
    image: "/assets/images/login/webp/ice-mountain.webp",
  },
];
export const DashboardCard = [
  {
    cardicon: <UmsatzIcon />,
    subheading: "Umsatz",
    heading: "166,580 CHF",
    grade: <GreenGrade />,
    grademark: "5%",
    description: "im letzten Monat",
  },
  {
    cardicon: <BuchungenIcon />,
    subheading: "Buchungen",
    heading: "801",
    grade: <GreenGrade />,
    grademark: "2%",
    description: "im letzten Monat",
  },
  {
    cardicon: <KundenIcon />,
    subheading: "Kunden",
    heading: "567",
    grade: <Redgrade />,
    grademark: "3%",
    description: "im letzten Monat",
  },
];
