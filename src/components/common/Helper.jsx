import {
  UmsatzIcon,
  GreenGrade,
  BuchungenIcon,
  KundenIcon,
  Redgrade,
  CardIcon,
  CardSubHeading,
  Heading1,
  Heading2,
  Heading3,
  Grade,
  GradeMark,
  Description,
} from "../common/Icon";

export const SliderList = [
  {
    image: "/assets/images/login/png/mountain.png",
  },
  {
    image: "/assets/images/login/png/cycleing.png",
  },
  {
    image: "/assets/images/login/png/grass.png",
  },
  {
    image: "/assets/images/login/png/house.png",
  },
  {
    image: "/assets/images/login/png/ice-mountain.png",
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
export const DashboardboxCard = [
  {
    cardicon: <CardIcon />,
    subheading: <CardSubHeading />,
    heading: <Heading1 />,
    grade: <Grade />,
    grademark: <GradeMark />,
    description: <Description />,
  },
  {
    cardicon: <CardIcon />,
    subheading: <CardSubHeading />,
    heading: <Heading2 />,
    grade: <Grade />,
    grademark: <GradeMark />,
    description: <Description />,
  },
  {
    cardicon: <CardIcon />,
    subheading: <CardSubHeading />,
    heading: <Heading3 />,
    grade: <Grade />,
    grademark: <GradeMark />,
    description: <Description />,
  },
];
