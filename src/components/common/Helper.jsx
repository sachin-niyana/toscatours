import {
  AngeboteIcon,
  BuchungenIcon,
  DashboardIcon,
  KundenIcon,
  LogOutIcon,
  MeinProfileIcon,
  ProfileIcon,
  SettingIcon,
} from "./Icon";

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
