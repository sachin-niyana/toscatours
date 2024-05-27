import {
  UmsatzIcon,
  GreenGrade,
  Redgrade,
  AngeboteIcon,
  BuchungenIcon,
  DashboardIcon,
  KundenIcon,
  LogOutIcon,
  MeinProfileIcon,
  ProfileIcon,
  SettingIcon,
  CardIcon,
  CardSubHeading,
  Heading2,
  Grade,
  GradeMark,
  Description,
  Heading1,
  Heading3,
  Ball1,
  Ball2,
  Ball3,
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
export const SidebarTab = [
  {
    icon: <DashboardIcon />,
    title: "Dashboard",
    titleSmallscreen: "Dashboard",
  },
  {
    icon: <KundenIcon />,
    title: "Kunden",
    titleSmallscreen: "Customers",
  },
  {
    icon: <AngeboteIcon />,
    title: "Angebote",
    titleSmallscreen: "Offers",
  },
  {
    icon: <BuchungenIcon />,
    title: "Buchungen",
    titleSmallscreen: "Bookings",
  },

  {
    icon: <ProfileIcon />,
    title: "Profile",
    titleSmallscreen: "Profile",
  },
];

export const SidebarDropdown = [
  {
    icon: <MeinProfileIcon />,
    title: "Mein Profile",
  },
  {
    icon: <SettingIcon />,
    title: "Einstellungen",
  },
  {
    icon: <LogOutIcon />,
    title: "Logout",
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

// table
export const kunden = [
  {
    customerName: "Francisco Chang",
    email: "name@email.ch",
    location: "Location",
    bookings: "10",
    amount: "22 400,98 CHF",
    ballIcon: <Ball1 />,
  },
  {
    customerName: "Angel Dokidis",
    email: "name@email.ch",
    location: "Location",
    bookings: "8",
    amount: "8 400,98 CHF",
    ballIcon: <Ball2 />,
  },
  {
    customerName: "Omar Culhane",
    email: "name@email.ch",
    location: "Location",
    bookings: "29",
    amount: "40 400,98 CHF",
    ballIcon: <Ball3 />,
  },
  {
    customerName: "Jakob Lubin",
    email: "name@email.ch",
    location: "Location",
    bookings: "5",
    amount: "3 400,98 CHF",
    ballIcon: <Ball1 />,
  },
  {
    customerName: "Lindsey Culhane",
    email: "name@email.ch",
    location: "Location",
    bookings: "15",
    amount: "32 400,98 CHF",
    ballIcon: <Ball2 />,
  },
];
