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
