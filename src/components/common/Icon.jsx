// ================================ DASHBOARD-CARDS SVG ================================
export const UmsatzIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="24" height="24" rx="12" fill="#FEF8F3" />
      <path
        d="M15.3333 15.652C14.597 15.652 14 16.249 14 16.9853C14 17.7217 14.597 18.3187 15.3333 18.3187C16.0697 18.3187 16.6667 17.7217 16.6667 16.9853C16.6667 16.249 16.0697 15.652 15.3333 15.652ZM15.3333 15.652H10.196C9.88859 15.652 9.73462 15.652 9.60807 15.5973C9.49644 15.5491 9.39959 15.4714 9.32903 15.3724C9.24994 15.2613 9.21813 15.1129 9.15516 14.819L7.51432 7.16176C7.44989 6.86109 7.41725 6.71092 7.33724 6.59861C7.26668 6.49956 7.16985 6.42161 7.05821 6.37336C6.93164 6.31866 6.77853 6.31866 6.47102 6.31866H6M8 8.31866H16.5821C17.0633 8.31866 17.3037 8.31866 17.4652 8.4189C17.6066 8.50671 17.7102 8.64441 17.7554 8.80467C17.8069 8.98762 17.7407 9.21864 17.6073 9.68097L16.6842 12.881C16.6045 13.1574 16.5646 13.2954 16.4837 13.3979C16.4123 13.4885 16.3181 13.5593 16.2114 13.6028C16.0908 13.652 15.9474 13.652 15.6614 13.652H9.15365M9.33333 18.3187C8.59695 18.3187 8 17.7217 8 16.9853C8 16.249 8.59695 15.652 9.33333 15.652C10.0697 15.652 10.6667 16.249 10.6667 16.9853C10.6667 17.7217 10.0697 18.3187 9.33333 18.3187Z"
        stroke="#EC6707"
        strokeWidth="1.33333"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
export const GreenGrade = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.334 4.66666L9.43652 8.62499C9.36653 8.69608 9.33114 8.7317 9.2998 8.75975C8.79356 9.21286 8.02805 9.21287 7.52181 8.75976C7.49047 8.7317 7.45482 8.69611 7.38478 8.62498C7.31475 8.55386 7.27971 8.51827 7.24837 8.49022C6.74213 8.03711 5.9763 8.03711 5.47006 8.49022C5.4388 8.51821 5.40387 8.55368 5.33418 8.62446L2.66699 11.3333M13.334 4.66666L13.3337 8.66666M13.334 4.66666H9.33366"
        stroke="#26A212"
        strokeWidth="1.33333"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
export const Redgrade = () => {
  return (
    <svg
      width="13"
      height="10"
      viewBox="0 0 13 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.001 8.33332L8.10352 4.37499C8.03351 4.30389 7.99813 4.26827 7.9668 4.24022C7.46055 3.78711 6.69504 3.78711 6.1888 4.24022C6.15746 4.26828 6.12181 4.30386 6.05177 4.37499C5.98174 4.44611 5.9467 4.4817 5.91536 4.50975C5.40912 4.96286 4.6433 4.96286 4.13705 4.50975C4.10571 4.48169 4.07069 4.44613 4.00065 4.37499L1.33398 1.66666M12.001 8.33332L12.0007 4.33332M12.001 8.33332H8.00065"
        stroke="#FF3B30"
        strokeWidth="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
export const BtnArrow = (props) => {
  return (
    <svg
      className={`${props.className}`}
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24 18L20 22L16 18"
        stroke="#646464"
        strokeWidth="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

//  SideBar Icon
export const DashboardIcon = () => {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="group-hover:stroke-orange transition-all duration-300 ease-linear"
        d="M11.2348 2.59343C10.8672 2.74567 10.5377 3.07516 9.8788 3.73409C9.22003 4.39286 8.8904 4.72249 8.73818 5.08998C8.53519 5.58004 8.53519 6.13072 8.73818 6.62078C8.89042 6.98832 9.21989 7.31779 9.87883 7.97673C10.5374 8.6353 10.8673 8.96519 11.2347 9.11739C11.7248 9.32038 12.2755 9.32037 12.7655 9.11739C13.1331 8.96515 13.4625 8.63568 14.1215 7.97673C14.7804 7.31779 15.1089 6.98832 15.2612 6.62078C15.4641 6.13072 15.4641 5.58004 15.2612 5.08998C15.1089 4.72244 14.7804 4.39303 14.1215 3.73409C13.4625 3.07515 13.1331 2.74567 12.7655 2.59343C12.2755 2.39045 11.7248 2.39045 11.2348 2.59343Z"
        stroke="black"
        strokeWidth="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        className="group-hover:stroke-orange transition-all duration-300 ease-linear"
        d="M4.8705 8.9572C4.50296 9.10944 4.17348 9.43892 3.51455 10.0979C2.85579 10.7566 2.52614 11.0863 2.37392 11.4538C2.17093 11.9438 2.17093 12.4945 2.37392 12.9845C2.52616 13.3521 2.85564 13.6816 3.51457 14.3405C4.17314 14.9991 4.50303 15.329 4.87047 15.4812C5.36053 15.6841 5.91121 15.6841 6.40126 15.4812C6.76881 15.3289 7.09828 14.9994 7.75722 14.3405C8.41616 13.6816 8.74466 13.3521 8.8969 12.9845C9.09989 12.4945 9.09989 11.9438 8.8969 11.4538C8.74466 11.0862 8.41616 10.7568 7.75722 10.0979C7.09828 9.43892 6.76881 9.10944 6.40126 8.9572C5.91121 8.75422 5.36056 8.75422 4.8705 8.9572Z"
        stroke="black"
        strokeWidth="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        className="group-hover:stroke-orange transition-all duration-300 ease-linear"
        d="M16.2431 10.0979C15.5843 10.7566 15.2547 11.0863 15.1024 11.4538C14.8994 11.9438 14.8994 12.4945 15.1024 12.9845C15.2547 13.3521 15.5842 13.6816 16.2431 14.3405C16.9016 14.9991 17.2316 15.329 17.599 15.4812C18.089 15.6841 18.6397 15.6841 19.1298 15.4812C19.4973 15.3289 19.8268 14.9994 20.4857 14.3405C21.1447 13.6816 21.4732 13.3521 21.6254 12.9845C21.8284 12.4945 21.8284 11.9438 21.6254 11.4538C21.4732 11.0862 21.1447 10.7568 20.4857 10.0979C19.8268 9.43892 19.4973 9.10944 19.1298 8.9572C18.6397 8.75422 18.0891 8.75422 17.599 8.9572C17.2315 9.10944 16.902 9.43893 16.2431 10.0979Z"
        stroke="black"
        strokeWidth="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        className="group-hover:stroke-orange transition-all duration-300 ease-linear"
        d="M11.2348 15.3215C10.8672 15.4737 10.5377 15.8032 9.8788 16.4621C9.22004 17.1209 8.8904 17.4505 8.73818 17.818C8.53519 18.3081 8.53519 18.8587 8.73818 19.3488C8.89042 19.7163 9.21989 20.0458 9.87883 20.7048C10.5374 21.3633 10.8673 21.6932 11.2347 21.8454C11.7248 22.0484 12.2755 22.0484 12.7655 21.8454C13.1331 21.6932 13.4625 21.3637 14.1215 20.7048C14.7804 20.0458 15.1089 19.7163 15.2612 19.3488C15.4641 18.8587 15.4641 18.3081 15.2612 17.818C15.1089 17.4505 14.7804 17.1211 14.1215 16.4621C13.4625 15.8032 13.1331 15.4737 12.7655 15.3215C12.2755 15.1185 11.7248 15.1185 11.2348 15.3215Z"
        stroke="black"
        strokeWidth="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
export const KundenIcon = () => {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="group-hover:stroke-orange transition-all duration-300 ease-linear"
        d="M8 8.21951H6.2002C5.08009 8.21951 4.51962 8.21951 4.0918 8.4375C3.71547 8.62925 3.40973 8.93499 3.21799 9.31131C3 9.73913 3 10.2996 3 11.4197V17.0197C3 18.1398 3 18.6996 3.21799 19.1274C3.40973 19.5037 3.71547 19.81 4.0918 20.0017C4.5192 20.2195 5.07899 20.2195 6.19691 20.2195H17.8031C18.921 20.2195 19.48 20.2195 19.9074 20.0017C20.2837 19.81 20.5905 19.5037 20.7822 19.1274C21 18.7 21 18.141 21 17.0231V11.4164C21 10.2985 21 9.73871 20.7822 9.31131C20.5905 8.93499 20.2837 8.62925 19.9074 8.4375C19.4796 8.21951 18.9203 8.21951 17.8002 8.21951H16M8 8.21951H16M8 8.21951C8 6.01037 9.79086 4.21951 12 4.21951C14.2091 4.21951 16 6.01037 16 8.21951"
        stroke="black"
        strokeWidth="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
export const AngeboteIcon = () => {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="group-hover:stroke-orange transition-all duration-300 ease-linear"
        d="M14 6.21951H6C5.06812 6.21951 4.60192 6.21951 4.23438 6.37175C3.74432 6.57474 3.35523 6.96432 3.15224 7.45438C3 7.82192 3 8.28786 3 9.21974C4.65685 9.21974 6 10.5624 6 12.2193C6 13.8761 4.65685 15.2195 3 15.2195C3 16.1514 3 16.6173 3.15224 16.9849C3.35523 17.4749 3.74432 17.8642 4.23438 18.0672C4.60192 18.2194 5.06812 18.2195 6 18.2195H14M14 6.21951H18C18.9319 6.21951 19.3978 6.21951 19.7654 6.37175C20.2554 6.57474 20.6447 6.96432 20.8477 7.45438C20.9999 7.82192 20.9999 8.28786 20.9999 9.21974C19.343 9.21974 18 10.5627 18 12.2195C18 13.8764 19.343 15.2195 20.9999 15.2195C20.9999 16.1514 20.9999 16.6173 20.8477 16.9849C20.6447 17.4749 20.2554 17.8642 19.7654 18.0672C19.3978 18.2194 18.9319 18.2195 18 18.2195H14M14 6.21951V18.2195"
        stroke="black"
        strokeWidth="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
export const BuchungenIcon = () => {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="group-hover:stroke-orange transition-all duration-300 ease-linear"
        d="M6 7.41971V16.9049C6 18.2659 6 18.9463 6.20412 19.3628C6.58245 20.1347 7.41157 20.5783 8.26367 20.4649C8.7234 20.4037 9.28964 20.0262 10.4221 19.2713L10.4248 19.2695C10.8737 18.9702 11.0981 18.8206 11.333 18.7376C11.7642 18.5852 12.2348 18.5852 12.666 18.7376C12.9013 18.8207 13.1266 18.971 13.5773 19.2714C14.7098 20.0264 15.2767 20.4036 15.7364 20.4648C16.5885 20.5781 17.4176 20.1347 17.7959 19.3628C18 18.9464 18 18.2657 18 16.9049V7.41642C18 6.29851 18 5.73871 17.7822 5.31131C17.5905 4.93499 17.2837 4.62925 16.9074 4.4375C16.4796 4.21951 15.9203 4.21951 14.8002 4.21951H9.2002C8.08009 4.21951 7.51962 4.21951 7.0918 4.4375C6.71547 4.62925 6.40973 4.93499 6.21799 5.31131C6 5.73913 6 6.2996 6 7.41971Z"
        stroke="black"
        strokeWidth="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
export const ProfileIcon = () => {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="group-hover:stroke-orange transition-all duration-300 ease-linear"
        d="M17.7166 19.3323C16.4349 17.9008 14.5727 17 12.5 17C10.4273 17 8.56492 17.9008 7.2832 19.3323M12.5 21C7.52944 21 3.5 16.9706 3.5 12C3.5 7.02944 7.52944 3 12.5 3C17.4706 3 21.5 7.02944 21.5 12C21.5 16.9706 17.4706 21 12.5 21ZM12.5 14C10.8431 14 9.5 12.6569 9.5 11C9.5 9.34315 10.8431 8 12.5 8C14.1569 8 15.5 9.34315 15.5 11C15.5 12.6569 14.1569 14 12.5 14Z"
        stroke="#191919"
        strokeWidth="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
export const PulseIcon = () => {
  return (
    <svg
      width="17"
      height="16"
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.50033 13.3332V7.99984M8.50033 7.99984V2.6665M8.50033 7.99984H13.8337M8.50033 7.99984H3.16699"
        stroke="white"
        strokeWidth="1.5"
        stroke-linecap="round"
      />
    </svg>
  );
};
export const MailIcon = () => {
  return (
    <svg
      className="group-hover:scale-105 transition-all duration-300 ease-linear"
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="transition-all duration-300 ease-linear group-hover:stroke-red"
        d="M4 6.4566L10.1076 11.0689L10.1097 11.0706C10.7878 11.5679 11.1271 11.8167 11.4988 11.9128C11.8272 11.9978 12.1725 11.9978 12.501 11.9128C12.8729 11.8166 13.2132 11.5671 13.8926 11.0689C13.8926 11.0689 17.8101 8.06254 20 6.4566M3 16.2568V8.65679C3 7.53669 3 6.97622 3.21799 6.54839C3.40973 6.17207 3.71547 5.86633 4.0918 5.67458C4.51962 5.4566 5.08009 5.4566 6.2002 5.4566H17.8002C18.9203 5.4566 19.4796 5.4566 19.9074 5.67458C20.2837 5.86633 20.5905 6.17207 20.7822 6.54839C21 6.9758 21 7.53559 21 8.65351V16.2602C21 17.3781 21 17.9371 20.7822 18.3645C20.5905 18.7408 20.2837 19.0471 19.9074 19.2388C19.48 19.4566 18.921 19.4566 17.8031 19.4566H6.19691C5.07899 19.4566 4.5192 19.4566 4.0918 19.2388C3.71547 19.0471 3.40973 18.7408 3.21799 18.3645C3 17.9367 3 17.3769 3 16.2568Z"
        stroke="black"
        strokeWidth="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
export const NotificationIcon = () => {
  return (
    <svg
      className="group-hover:scale-105 transition-all duration-300 ease-linear"
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="transition-all duration-300 ease-linear group-hover:stroke-red"
        d="M15 17.4566V18.4566C15 20.1135 13.6569 21.4566 12 21.4566C10.3431 21.4566 9 20.1135 9 18.4566V17.4566M15 17.4566H9M15 17.4566H18.5905C18.973 17.4566 19.1652 17.4566 19.3201 17.4044C19.616 17.3046 19.8475 17.0722 19.9473 16.7764C19.9997 16.6209 19.9997 16.4281 19.9997 16.0425C19.9997 15.8738 19.9995 15.7895 19.9863 15.709C19.9614 15.557 19.9024 15.4129 19.8126 15.2878C19.7651 15.2217 19.7048 15.1614 19.5858 15.0424L19.1963 14.6529C19.0706 14.5272 19 14.3567 19 14.179V10.4566C19 6.5906 15.866 3.45659 12 3.4566C8.13401 3.45661 5 6.59061 5 10.4566V14.179C5 14.3568 4.92924 14.5272 4.80357 14.6529L4.41406 15.0424C4.29476 15.1617 4.23504 15.2216 4.1875 15.2878C4.09766 15.413 4.03815 15.557 4.0132 15.709C4 15.7895 4 15.8738 4 16.0426C4 16.4281 4 16.6208 4.05245 16.7763C4.15225 17.0722 4.3848 17.3046 4.68066 17.4044C4.83556 17.4566 5.02701 17.4566 5.40956 17.4566H9"
        stroke="black"
        strokeWidth="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
// Dropdown Icon
export const ArrowIcon = () => {
  return (
    <svg
      className="transition-all duration-300 ease-linear"
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="transition-all duration-300 ease-linear"
        d="M15 11.4566L12 14.4566L9 11.4566"
        stroke="black"
        strokeWidth="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
export const MeinProfileIcon = () => {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="group-hover:stroke-red transition-all duration-300 ease-linear"
        d="M17.7166 19.3323C16.4349 17.9008 14.5727 17 12.5 17C10.4273 17 8.56492 17.9008 7.2832 19.3323M12.5 21C7.52944 21 3.5 16.9706 3.5 12C3.5 7.02944 7.52944 3 12.5 3C17.4706 3 21.5 7.02944 21.5 12C21.5 16.9706 17.4706 21 12.5 21ZM12.5 14C10.8431 14 9.5 12.6569 9.5 11C9.5 9.34315 10.8431 8 12.5 8C14.1569 8 15.5 9.34315 15.5 11C15.5 12.6569 14.1569 14 12.5 14Z"
        stroke="black"
        strokeWidth="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
export const SettingIcon = () => {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="group-hover:stroke-red transition-all duration-300 ease-linear"
        d="M19.3499 7.92293L18.9837 7.7192C18.9269 7.68756 18.8989 7.67169 18.8714 7.65524C18.5983 7.49165 18.3682 7.26564 18.2002 6.99523C18.1833 6.96802 18.1674 6.93949 18.1348 6.8831C18.1023 6.82677 18.0858 6.79823 18.0706 6.76998C17.92 6.48866 17.8385 6.17515 17.8336 5.85606C17.8331 5.82398 17.8332 5.79121 17.8343 5.72604L17.8415 5.30078C17.8529 4.62025 17.8587 4.27894 17.763 3.97262C17.6781 3.70053 17.536 3.44993 17.3462 3.23725C17.1317 2.99685 16.8347 2.82534 16.2402 2.48276L15.7464 2.1982C15.1536 1.85658 14.8571 1.68571 14.5423 1.62057C14.2639 1.56294 13.9765 1.56561 13.6991 1.62789C13.3859 1.69819 13.0931 1.87351 12.5079 2.22396L12.5045 2.22555L12.1507 2.43741C12.0948 2.47091 12.0665 2.48779 12.0384 2.50338C11.7601 2.6581 11.4495 2.74365 11.1312 2.75387C11.0992 2.7549 11.0665 2.7549 11.0013 2.7549C10.9365 2.7549 10.9024 2.7549 10.8704 2.75387C10.5515 2.74361 10.2402 2.65759 9.96151 2.50224C9.93342 2.48658 9.90563 2.46956 9.84957 2.4359L9.49349 2.22213C8.90422 1.86836 8.60915 1.69121 8.29427 1.62057C8.0157 1.55807 7.72737 1.55634 7.44791 1.61471C7.13236 1.68062 6.83577 1.85276 6.24258 2.19703L6.23994 2.1982L5.75228 2.48124L5.74688 2.48454C5.15904 2.82572 4.86441 2.99672 4.6517 3.23614C4.46294 3.4486 4.32185 3.69881 4.2374 3.97018C4.14194 4.27691 4.14703 4.61896 4.15853 5.3027L4.16568 5.72736C4.16676 5.79166 4.16864 5.82362 4.16817 5.85525C4.16343 6.17499 4.08086 6.48914 3.92974 6.77096C3.9148 6.79883 3.8987 6.8267 3.86654 6.88237C3.83436 6.93809 3.81877 6.96579 3.80209 6.99268C3.63336 7.26452 3.40214 7.49186 3.12733 7.65572C3.10015 7.67193 3.0715 7.68752 3.01521 7.71871L2.65365 7.91908C2.05208 8.25245 1.75137 8.41928 1.53256 8.65669C1.33898 8.86672 1.19275 9.11585 1.10349 9.38717C1.00259 9.69387 1.00267 10.0378 1.00424 10.7255L1.00551 11.2877C1.00706 11.9708 1.00919 12.3122 1.11032 12.6168C1.19979 12.8863 1.34495 13.134 1.53744 13.3427C1.75502 13.5787 2.05274 13.7445 2.64974 14.0766L3.00808 14.276C3.06907 14.3099 3.09976 14.3266 3.12917 14.3444C3.40148 14.5083 3.63089 14.735 3.79818 15.0053C3.81625 15.0345 3.8336 15.0648 3.8683 15.1255C3.90256 15.1853 3.92009 15.2152 3.93594 15.2452C4.08261 15.5229 4.16114 15.8315 4.16649 16.1455C4.16707 16.1794 4.16658 16.2137 4.16541 16.2827L4.15853 16.6902C4.14695 17.3763 4.1419 17.7197 4.23792 18.0273C4.32287 18.2994 4.46484 18.55 4.65463 18.7627C4.86915 19.0031 5.16655 19.1745 5.76107 19.5171L6.25478 19.8015C6.84763 20.1432 7.14395 20.3138 7.45869 20.379C7.73714 20.4366 8.02464 20.4344 8.30209 20.3721C8.61567 20.3017 8.90948 20.1258 9.49642 19.7743L9.85025 19.5625C9.90622 19.5289 9.93457 19.5121 9.96261 19.4965C10.2409 19.3418 10.5512 19.2558 10.8695 19.2456C10.9015 19.2446 10.9342 19.2446 10.9994 19.2446C11.0648 19.2446 11.0974 19.2446 11.1295 19.2456C11.4484 19.2559 11.7607 19.3422 12.0394 19.4975C12.0639 19.5112 12.0885 19.526 12.1316 19.5519L12.5078 19.7777C13.0971 20.1315 13.3916 20.3081 13.7065 20.3788C13.985 20.4413 14.2736 20.4438 14.5531 20.3855C14.8685 20.3196 15.1657 20.1471 15.7586 19.803L16.2536 19.5157C16.8418 19.1743 17.1367 19.0031 17.3495 18.7636C17.5383 18.5512 17.6796 18.3011 17.764 18.0297C17.8588 17.7252 17.8531 17.3858 17.8417 16.7119L17.8343 16.2724C17.8332 16.2081 17.8331 16.1761 17.8336 16.1445C17.8383 15.8247 17.9195 15.5104 18.0706 15.2286C18.0856 15.2007 18.1018 15.1726 18.1338 15.1171C18.166 15.0615 18.1827 15.0337 18.1994 15.0068C18.3681 14.7349 18.5995 14.5074 18.8744 14.3435C18.9012 14.3275 18.9289 14.3122 18.9838 14.2818L18.9857 14.2809L19.3472 14.0805C19.9488 13.7472 20.2501 13.5801 20.4689 13.3427C20.6625 13.1327 20.8085 12.8839 20.8978 12.6126C20.9981 12.3077 20.9973 11.9658 20.9958 11.2861L20.9945 10.7119C20.9929 10.0287 20.9921 9.6874 20.891 9.38277C20.8015 9.11328 20.6555 8.86561 20.463 8.65685C20.2457 8.42111 19.9475 8.25526 19.3517 7.92378L19.3499 7.92293Z"
        stroke="black"
        strokeWidth="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        className="group-hover:stroke-red transition-all duration-300 ease-linear"
        d="M7.00033 11C7.00033 13.2091 8.79119 15 11.0003 15C13.2095 15 15.0003 13.2091 15.0003 11C15.0003 8.79082 13.2095 6.99996 11.0003 6.99996C8.79119 6.99996 7.00033 8.79082 7.00033 11Z"
        stroke="black"
        strokeWidth="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
export const LogOutIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="group-hover:stroke-red transition-all duration-300 ease-linear"
        d="M12 15L15 12M15 12L12 9M15 12H4M9 7.24859V7.2002C9 6.08009 9 5.51962 9.21799 5.0918C9.40973 4.71547 9.71547 4.40973 10.0918 4.21799C10.5196 4 11.0801 4 12.2002 4H16.8002C17.9203 4 18.4796 4 18.9074 4.21799C19.2837 4.40973 19.5905 4.71547 19.7822 5.0918C20 5.5192 20 6.07899 20 7.19691V16.8036C20 17.9215 20 18.4805 19.7822 18.9079C19.5905 19.2842 19.2837 19.5905 18.9074 19.7822C18.48 20 17.921 20 16.8031 20H12.1969C11.079 20 10.5192 20 10.0918 19.7822C9.71547 19.5905 9.40973 19.2839 9.21799 18.9076C9 18.4798 9 17.9201 9 16.8V16.75"
        stroke="black"
        strokeWidth="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
// ================================ DASHBOARD-CARDS SVG ================================

export const CardIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="24" height="24" rx="6" fill="url(#paint0_linear_4007_822)" />
      <rect
        x="6"
        y="6.3186"
        width="11.7729"
        height="12"
        rx="5.88643"
        fill="url(#paint1_linear_4007_822)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_4007_822"
          x1="-5.8022"
          y1="10.2032"
          x2="27.8242"
          y2="10.2032"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F1EFEF" />
          <stop offset="0.53125" stop-color="#F9F8F8" />
          <stop offset="0.992158" stop-color="#E7E5E5" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_4007_822"
          x1="3.15381"
          y1="11.4202"
          x2="19.6488"
          y2="11.4202"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F1EFEF" />
          <stop offset="0.53125" stop-color="#F9F8F8" />
          <stop offset="0.992158" stop-color="#E7E5E5" />
        </linearGradient>
      </defs>
    </svg>
  );
};
export const CardSubHeading = () => {
  return (
    <svg
      width="69"
      height="26"
      viewBox="0 0 69 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="69" height="26" rx="6" fill="url(#paint0_linear_75_13028)" />
      <defs>
        <linearGradient
          id="paint0_linear_75_13028"
          x1="-16.6813"
          y1="11.0535"
          x2="79.9945"
          y2="11.0535"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F1EFEF" />
          <stop offset="0.53125" stop-color="#F9F8F8" />
          <stop offset="0.992158" stop-color="#E7E5E5" />
        </linearGradient>
      </defs>
    </svg>
  );
};
export const Heading1 = () => {
  return (
    <svg
      width="193"
      height="48"
      viewBox="0 0 193 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width="193"
        height="48"
        rx="6"
        fill="url(#paint0_linear_75_13029)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_75_13029"
          x1="-46.6593"
          y1="20.4064"
          x2="223.753"
          y2="20.4064"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F1EFEF" />
          <stop offset="0.53125" stop-color="#F9F8F8" />
          <stop offset="0.992158" stop-color="#E7E5E5" />
        </linearGradient>
      </defs>
    </svg>
  );
};
export const Heading2 = () => {
  return (
    <svg
      width="60"
      height="48"
      viewBox="0 0 60 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.333008"
        width="59"
        height="48"
        rx="6"
        fill="url(#paint0_linear_75_13038)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_75_13038"
          x1="-13.9307"
          y1="20.4064"
          x2="68.7341"
          y2="20.4064"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F1EFEF" />
          <stop offset="0.53125" stop-color="#F9F8F8" />
          <stop offset="0.992158" stop-color="#E7E5E5" />
        </linearGradient>
      </defs>
    </svg>
  );
};
export const Heading3 = () => {
  return (
    <svg
      width="54"
      height="48"
      viewBox="0 0 54 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.666992"
        width="53"
        height="48"
        rx="6"
        fill="url(#paint0_linear_75_13047)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_75_13047"
          x1="-12.1462"
          y1="20.4064"
          x2="62.112"
          y2="20.4064"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F1EFEF" />
          <stop offset="0.53125" stop-color="#F9F8F8" />
          <stop offset="0.992158" stop-color="#E7E5E5" />
        </linearGradient>
      </defs>
    </svg>
  );
};
export const Grade = () => {
  return (
    <svg
      width="12"
      height="8"
      viewBox="0 0 12 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.666992"
        y="0.666626"
        width="10.667"
        height="6.66667"
        rx="3.33333"
        fill="url(#paint0_linear_75_13030)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_75_13030"
          x1="-1.91184"
          y1="3.50085"
          x2="13.0336"
          y2="3.50085"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F1EFEF" />
          <stop offset="0.53125" stop-color="#F9F8F8" />
          <stop offset="0.992158" stop-color="#E7E5E5" />
        </linearGradient>
      </defs>
    </svg>
  );
};
export const GradeMark = () => {
  return (
    <svg
      width="23"
      height="26"
      viewBox="0 0 23 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="23" height="26" rx="6" fill="url(#paint0_linear_75_13031)" />
      <defs>
        <linearGradient
          id="paint0_linear_75_13031"
          x1="-5.56044"
          y1="11.0535"
          x2="26.6648"
          y2="11.0535"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F1EFEF" />
          <stop offset="0.53125" stop-color="#F9F8F8" />
          <stop offset="0.992158" stop-color="#E7E5E5" />
        </linearGradient>
      </defs>
    </svg>
  );
};
export const Description = () => {
  return (
    <svg
      width="147"
      height="26"
      viewBox="0 0 147 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width="147"
        height="26"
        rx="6"
        fill="url(#paint0_linear_75_13032)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_75_13032"
          x1="-35.5385"
          y1="11.0535"
          x2="170.423"
          y2="11.0535"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F1EFEF" />
          <stop offset="0.53125" stop-color="#F9F8F8" />
          <stop offset="0.992158" stop-color="#E7E5E5" />
        </linearGradient>
      </defs>
    </svg>
  );
};
export const CardSale1 = () => {
  return (
    <svg
      width="54"
      height="30"
      viewBox="0 0 54 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="54" height="30" rx="6" fill="url(#paint0_linear_75_13055)" />
      <defs>
        <linearGradient
          id="paint0_linear_75_13055"
          x1="-13.0549"
          y1="12.754"
          x2="62.6044"
          y2="12.754"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F1EFEF" />
          <stop offset="0.53125" stop-color="#F9F8F8" />
          <stop offset="0.992158" stop-color="#E7E5E5" />
        </linearGradient>
      </defs>
    </svg>
  );
};
export const CardSale2 = () => {
  return (
    <svg
      width="103"
      height="30"
      viewBox="0 0 103 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width="103"
        height="30"
        rx="6"
        fill="url(#paint0_linear_75_13079)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_75_13079"
          x1="-24.9011"
          y1="12.754"
          x2="119.412"
          y2="12.754"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F1EFEF" />
          <stop offset="0.53125" stop-color="#F9F8F8" />
          <stop offset="0.992158" stop-color="#E7E5E5" />
        </linearGradient>
      </defs>
    </svg>
  );
};
export const CardBtn = () => {
  return (
    <svg
      width="90"
      height="26"
      viewBox="0 0 90 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="90" height="26" rx="6" fill="url(#paint0_linear_75_13056)" />
      <defs>
        <linearGradient
          id="paint0_linear_75_13056"
          x1="-21.7582"
          y1="11.0535"
          x2="104.341"
          y2="11.0535"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F1EFEF" />
          <stop offset="0.53125" stop-color="#F9F8F8" />
          <stop offset="0.992158" stop-color="#E7E5E5" />
        </linearGradient>
      </defs>
    </svg>
  );
};
export const BtnArrowIcon = () => {
  return (
    <svg
      width="8"
      height="4"
      viewBox="0 0 8 4"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="8" height="4" rx="2" fill="url(#paint0_linear_75_13057)" />
      <defs>
        <linearGradient
          id="paint0_linear_75_13057"
          x1="-1.93407"
          y1="1.70053"
          x2="9.27473"
          y2="1.70053"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F1EFEF" />
          <stop offset="0.53125" stop-color="#F9F8F8" />
          <stop offset="0.992158" stop-color="#E7E5E5" />
        </linearGradient>
      </defs>
    </svg>
  );
};
export const CardChf1 = () => {
  return (
    <svg
      width="61"
      height="18"
      viewBox="0 0 61 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.950195"
        width="60"
        height="18"
        rx="6"
        fill="url(#paint0_linear_75_13069)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_75_13069"
          x1="-13.5553"
          y1="7.65241"
          x2="70.5106"
          y2="7.65241"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F1EFEF" />
          <stop offset="0.53125" stop-color="#F9F8F8" />
          <stop offset="0.992158" stop-color="#E7E5E5" />
        </linearGradient>
      </defs>
    </svg>
  );
};
export const CardChf2 = () => {
  return (
    <svg
      width="61"
      height="18"
      viewBox="0 0 61 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.950195"
        width="60"
        height="18"
        rx="6"
        fill="url(#paint0_linear_75_13068)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_75_13068"
          x1="-13.5553"
          y1="7.65241"
          x2="70.5106"
          y2="7.65241"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F1EFEF" />
          <stop offset="0.53125" stop-color="#F9F8F8" />
          <stop offset="0.992158" stop-color="#E7E5E5" />
        </linearGradient>
      </defs>
    </svg>
  );
};
export const CardChf3 = () => {
  return (
    <svg
      width="58"
      height="18"
      viewBox="0 0 58 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.950195"
        width="57"
        height="18"
        rx="6"
        fill="url(#paint0_linear_75_13067)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_75_13067"
          x1="-12.83"
          y1="7.65241"
          x2="67.0326"
          y2="7.65241"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F1EFEF" />
          <stop offset="0.53125" stop-color="#F9F8F8" />
          <stop offset="0.992158" stop-color="#E7E5E5" />
        </linearGradient>
      </defs>
    </svg>
  );
};
export const CardChf4 = () => {
  return (
    <svg
      width="51"
      height="18"
      viewBox="0 0 51 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.950195"
        width="50"
        height="18"
        rx="6"
        fill="url(#paint0_linear_75_13066)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_75_13066"
          x1="-11.1377"
          y1="7.65241"
          x2="58.9172"
          y2="7.65241"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F1EFEF" />
          <stop offset="0.53125" stop-color="#F9F8F8" />
          <stop offset="0.992158" stop-color="#E7E5E5" />
        </linearGradient>
      </defs>
    </svg>
  );
};
export const CardChf5 = () => {
  return (
    <svg
      width="36"
      height="18"
      viewBox="0 0 36 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.950195"
        width="35"
        height="18"
        rx="6"
        fill="url(#paint0_linear_75_13058)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_75_13058"
          x1="-7.51134"
          y1="7.65241"
          x2="41.5271"
          y2="7.65241"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F1EFEF" />
          <stop offset="0.53125" stop-color="#F9F8F8" />
          <stop offset="0.992158" stop-color="#E7E5E5" />
        </linearGradient>
      </defs>
    </svg>
  );
};
export const DashboardImg = () => {
  return (
    <svg
      width="408"
      height="134"
      viewBox="0 0 408 134"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        className="sm:h-[118.325px] h-[180px]"
        x="0.949219"
        y="0.837646"
        width="406.1"
        height="118.325"
        rx="6"
        fill="url(#paint0_linear_4042_822)"
      />
      <rect
        x="0.949219"
        y="49.6348"
        width="404.966"
        height="84.0941"
        rx="6"
        fill="url(#paint1_linear_4042_822)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_4042_822"
          x1="-97.2288"
          y1="51.1414"
          x2="471.757"
          y2="51.1414"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F1EFEF" />
          <stop offset="0.53125" stop-color="#F9F8F8" />
          <stop offset="0.992158" stop-color="#E7E5E5" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_4042_822"
          x1="-96.9547"
          y1="85.386"
          x2="470.443"
          y2="85.386"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F1EFEF" />
          <stop offset="0.53125" stop-color="#F9F8F8" />
          <stop offset="0.992158" stop-color="#E7E5E5" />
        </linearGradient>
      </defs>
    </svg>
  );
};
export const SunIcon = () => {
  return (
    <svg
      width="24"
      height="18"
      viewBox="0 0 24 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.950195"
        width="23"
        height="18"
        rx="6"
        fill="url(#paint0_linear_75_13059)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_75_13059"
          x1="-4.61024"
          y1="7.65241"
          x2="27.615"
          y2="7.65241"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F1EFEF" />
          <stop offset="0.53125" stop-color="#F9F8F8" />
          <stop offset="0.992158" stop-color="#E7E5E5" />
        </linearGradient>
      </defs>
    </svg>
  );
};
export const MonIcon = () => {
  return (
    <svg
      width="27"
      height="18"
      viewBox="0 0 27 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.950195"
        width="26"
        height="18"
        rx="6"
        fill="url(#paint0_linear_75_13060)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_75_13060"
          x1="-5.33552"
          y1="7.65241"
          x2="31.0931"
          y2="7.65241"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F1EFEF" />
          <stop offset="0.53125" stop-color="#F9F8F8" />
          <stop offset="0.992158" stop-color="#E7E5E5" />
        </linearGradient>
      </defs>
    </svg>
  );
};
export const TueIcon = () => {
  return (
    <svg
      width="23"
      height="18"
      viewBox="0 0 23 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.950195"
        width="22"
        height="18"
        rx="6"
        fill="url(#paint0_linear_75_13061)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_75_13061"
          x1="-4.36849"
          y1="7.65241"
          x2="26.4557"
          y2="7.65241"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F1EFEF" />
          <stop offset="0.53125" stop-color="#F9F8F8" />
          <stop offset="0.992158" stop-color="#E7E5E5" />
        </linearGradient>
      </defs>
    </svg>
  );
};
export const WedIcon = () => {
  return (
    <svg
      width="29"
      height="18"
      viewBox="0 0 29 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.950195"
        width="28"
        height="18"
        rx="6"
        fill="url(#paint0_linear_75_13062)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_75_13062"
          x1="-5.81904"
          y1="7.65241"
          x2="33.4117"
          y2="7.65241"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F1EFEF" />
          <stop offset="0.53125" stop-color="#F9F8F8" />
          <stop offset="0.992158" stop-color="#E7E5E5" />
        </linearGradient>
      </defs>
    </svg>
  );
};
export const ThuIcon = () => {
  return (
    <svg
      width="23"
      height="18"
      viewBox="0 0 23 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.950195"
        width="22"
        height="18"
        rx="6"
        fill="url(#paint0_linear_75_13063)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_75_13063"
          x1="-4.36849"
          y1="7.65241"
          x2="26.4557"
          y2="7.65241"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F1EFEF" />
          <stop offset="0.53125" stop-color="#F9F8F8" />
          <stop offset="0.992158" stop-color="#E7E5E5" />
        </linearGradient>
      </defs>
    </svg>
  );
};
export const FriIcon = () => {
  return (
    <svg
      width="15"
      height="18"
      viewBox="0 0 15 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.950195"
        width="14"
        height="18"
        rx="6"
        fill="url(#paint0_linear_75_13064)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_75_13064"
          x1="-2.43442"
          y1="7.65241"
          x2="17.181"
          y2="7.65241"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F1EFEF" />
          <stop offset="0.53125" stop-color="#F9F8F8" />
          <stop offset="0.992158" stop-color="#E7E5E5" />
        </linearGradient>
      </defs>
    </svg>
  );
};
export const SatIcon = () => {
  return (
    <svg
      width="21"
      height="18"
      viewBox="0 0 21 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.950195"
        width="20"
        height="18"
        rx="6"
        fill="url(#paint0_linear_75_13065)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_75_13065"
          x1="-3.88497"
          y1="7.65241"
          x2="24.137"
          y2="7.65241"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F1EFEF" />
          <stop offset="0.53125" stop-color="#F9F8F8" />
          <stop offset="0.992158" stop-color="#E7E5E5" />
        </linearGradient>
      </defs>
    </svg>
  );
};
export const CardMonat = () => {
  return (
    <svg
      width="83"
      height="18"
      viewBox="0 0 83 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="6" cy="9" r="6" fill="url(#paint0_linear_4043_822)" />
      <rect
        x="16"
        width="67"
        height="18"
        rx="6"
        fill="url(#paint1_linear_4043_822)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_4043_822"
          x1="-2.9011"
          y1="8.1016"
          x2="13.9121"
          y2="8.1016"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F1EFEF" />
          <stop offset="0.53125" stop-color="#F9F8F8" />
          <stop offset="0.992158" stop-color="#E7E5E5" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_4043_822"
          x1="-0.197802"
          y1="7.65241"
          x2="93.6758"
          y2="7.6524"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F1EFEF" />
          <stop offset="0.53125" stop-color="#F9F8F8" />
          <stop offset="0.992158" stop-color="#E7E5E5" />
        </linearGradient>
      </defs>
    </svg>
  );
};
export const NoIcon = () => {
  return (
    <svg
      width="23"
      height="21"
      viewBox="0 0 23 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="23" height="21" rx="6" fill="url(#paint0_linear_75_13082)" />
      <defs>
        <linearGradient
          id="paint0_linear_75_13082"
          x1="-5.56044"
          y1="8.92781"
          x2="26.6648"
          y2="8.92781"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F1EFEF" />
          <stop offset="0.53125" stop-color="#F9F8F8" />
          <stop offset="0.992158" stop-color="#E7E5E5" />
        </linearGradient>
      </defs>
    </svg>
  );
};
export const ProductIcon = () => {
  return (
    <svg
      width="55"
      height="21"
      viewBox="0 0 55 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="55" height="21" rx="6" fill="url(#paint0_linear_75_13083)" />
      <defs>
        <linearGradient
          id="paint0_linear_75_13083"
          x1="-13.2967"
          y1="8.92781"
          x2="63.7637"
          y2="8.92781"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F1EFEF" />
          <stop offset="0.53125" stop-color="#F9F8F8" />
          <stop offset="0.992158" stop-color="#E7E5E5" />
        </linearGradient>
      </defs>
    </svg>
  );
};
export const PriceIcon = () => {
  return (
    <svg
      width="36"
      height="21"
      viewBox="0 0 36 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.0810547"
        width="35"
        height="21"
        rx="6"
        fill="url(#paint0_linear_75_13084)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_75_13084"
          x1="-8.38048"
          y1="8.92781"
          x2="40.658"
          y2="8.92781"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F1EFEF" />
          <stop offset="0.53125" stop-color="#F9F8F8" />
          <stop offset="0.992158" stop-color="#E7E5E5" />
        </linearGradient>
      </defs>
    </svg>
  );
};
export const ItemSaleIcon = () => {
  return (
    <svg
      width="68"
      height="21"
      viewBox="0 0 68 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.967773"
        width="67"
        height="21"
        rx="6"
        fill="url(#paint0_linear_75_13085)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_75_13085"
          x1="-15.23"
          y1="8.92781"
          x2="78.6436"
          y2="8.92781"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F1EFEF" />
          <stop offset="0.53125" stop-color="#F9F8F8" />
          <stop offset="0.992158" stop-color="#E7E5E5" />
        </linearGradient>
      </defs>
    </svg>
  );
};
export const ProductNo1 = () => {
  return (
    <svg
      width="5"
      height="18"
      viewBox="0 0 5 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.981445"
        width="4"
        height="18"
        rx="2"
        fill="url(#paint0_linear_75_13086)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_75_13086"
          x1="0.0144124"
          y1="7.65241"
          x2="5.61881"
          y2="7.65241"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F1EFEF" />
          <stop offset="0.53125" stop-color="#F9F8F8" />
          <stop offset="0.992158" stop-color="#E7E5E5" />
        </linearGradient>
      </defs>
    </svg>
  );
};
export const ProductNo2 = () => {
  return (
    <svg
      width="8"
      height="18"
      viewBox="0 0 8 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.981445"
        width="7"
        height="18"
        rx="3.5"
        fill="url(#paint0_linear_75_13091)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_75_13091"
          x1="-0.710862"
          y1="7.65241"
          x2="9.09683"
          y2="7.65241"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F1EFEF" />
          <stop offset="0.53125" stop-color="#F9F8F8" />
          <stop offset="0.992158" stop-color="#E7E5E5" />
        </linearGradient>
      </defs>
    </svg>
  );
};
export const ProductNo3 = () => {
  return (
    <svg
      width="9"
      height="18"
      viewBox="0 0 9 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.981445"
        width="8"
        height="18"
        rx="4"
        fill="url(#paint0_linear_75_13096)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_75_13096"
          x1="-0.952621"
          y1="7.65241"
          x2="10.2562"
          y2="7.65241"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F1EFEF" />
          <stop offset="0.53125" stop-color="#F9F8F8" />
          <stop offset="0.992158" stop-color="#E7E5E5" />
        </linearGradient>
      </defs>
    </svg>
  );
};
export const ProductName = () => {
  return (
    <svg
      className="sm:w-[138px] w-[110px]"
      height="21"
      viewBox="0 0 138 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.981445"
        width="137"
        height="21"
        rx="6"
        fill="url(#paint0_linear_75_13089)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_75_13089"
          x1="-32.1394"
          y1="8.92781"
          x2="159.811"
          y2="8.9278"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F1EFEF" />
          <stop offset="0.53125" stop-color="#F9F8F8" />
          <stop offset="0.992158" stop-color="#E7E5E5" />
        </linearGradient>
      </defs>
    </svg>
  );
};
export const ProductDate1 = () => {
  return (
    <svg
      className="sm:w-[141px] w-[115px]"
      height="18"
      viewBox="0 0 141 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.981445"
        width="140"
        height="18"
        rx="6"
        fill="url(#paint0_linear_75_13090)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_75_13090"
          x1="-32.8647"
          y1="7.65241"
          x2="163.289"
          y2="7.6524"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F1EFEF" />
          <stop offset="0.53125" stop-color="#F9F8F8" />
          <stop offset="0.992158" stop-color="#E7E5E5" />
        </linearGradient>
      </defs>
    </svg>
  );
};
export const ProductDate2 = () => {
  return (
    <svg
      className="sm:w-[135px] w-[115px]"
      height="18"
      viewBox="0 0 135 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.981445"
        width="134"
        height="18"
        rx="6"
        fill="url(#paint0_linear_75_13095)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_75_13095"
          x1="-31.4142"
          y1="7.65241"
          x2="156.333"
          y2="7.6524"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F1EFEF" />
          <stop offset="0.53125" stop-color="#F9F8F8" />
          <stop offset="0.992158" stop-color="#E7E5E5" />
        </linearGradient>
      </defs>
    </svg>
  );
};
export const ProductDate3 = () => {
  return (
    <svg
      className="sm:w-[132px] w-[115px]"
      height="18"
      viewBox="0 0 132 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.981445"
        width="131"
        height="18"
        rx="6"
        fill="url(#paint0_linear_75_13100)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_75_13100"
          x1="-30.6889"
          y1="7.65241"
          x2="152.855"
          y2="7.6524"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F1EFEF" />
          <stop offset="0.53125" stop-color="#F9F8F8" />
          <stop offset="0.992158" stop-color="#E7E5E5" />
        </linearGradient>
      </defs>
    </svg>
  );
};
export const ProductPrice = () => {
  return (
    <svg
      className="sm:w-[69px] w-[50px]"
      height="21"
      viewBox="0 0 69 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.0625"
        width="68"
        height="21"
        rx="6"
        fill="url(#paint0_linear_75_13088)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_75_13088"
          x1="-16.3771"
          y1="8.92781"
          x2="78.8977"
          y2="8.92781"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F1EFEF" />
          <stop offset="0.53125" stop-color="#F9F8F8" />
          <stop offset="0.992158" stop-color="#E7E5E5" />
        </linearGradient>
      </defs>
    </svg>
  );
};
export const SaleItem1 = () => {
  return (
    <svg
      width="44"
      height="21"
      viewBox="0 0 44 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.981445"
        width="43"
        height="21"
        rx="6"
        fill="url(#paint0_linear_75_13087)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_75_13087"
          x1="-9.41416"
          y1="8.92781"
          x2="50.8331"
          y2="8.92781"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F1EFEF" />
          <stop offset="0.53125" stop-color="#F9F8F8" />
          <stop offset="0.992158" stop-color="#E7E5E5" />
        </linearGradient>
      </defs>
    </svg>
  );
};
export const SaleItem2 = () => {
  return (
    <svg
      width="43"
      height="21"
      viewBox="0 0 43 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.981445"
        width="42"
        height="21"
        rx="6"
        fill="url(#paint0_linear_75_13092)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_75_13092"
          x1="-9.1724"
          y1="8.92781"
          x2="49.6738"
          y2="8.92781"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F1EFEF" />
          <stop offset="0.53125" stop-color="#F9F8F8" />
          <stop offset="0.992158" stop-color="#E7E5E5" />
        </linearGradient>
      </defs>
    </svg>
  );
};
export const SaleItem3 = () => {
  return (
    <svg
      width="39"
      height="21"
      viewBox="0 0 39 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.981445"
        width="38"
        height="21"
        rx="6"
        fill="url(#paint0_linear_75_13097)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_75_13097"
          x1="-8.20537"
          y1="8.92781"
          x2="45.0364"
          y2="8.92781"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F1EFEF" />
          <stop offset="0.53125" stop-color="#F9F8F8" />
          <stop offset="0.992158" stop-color="#E7E5E5" />
        </linearGradient>
      </defs>
    </svg>
  );
};
// table
export const Searchicon = () => {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 15.2195L21 21.2195M10 17.2195C6.13401 17.2195 3 14.0855 3 10.2195C3 6.35352 6.13401 3.21951 10 3.21951C13.866 3.21951 17 6.35352 17 10.2195C17 14.0855 13.866 17.2195 10 17.2195Z"
        stroke="black"
        strokeWidth="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
export const Filtericon = () => {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 5.81961C20 5.25956 19.9996 4.97932 19.8906 4.76541C19.7948 4.57725 19.6423 4.42438 19.4542 4.32851C19.2403 4.21951 18.9597 4.21951 18.3996 4.21951H5.59961C5.03956 4.21951 4.75981 4.21951 4.5459 4.32851C4.35774 4.42438 4.20487 4.57725 4.10899 4.76541C4 4.97932 4 5.25956 4 5.81961V6.55687C4 6.80146 4 6.92385 4.02763 7.03893C4.05213 7.14097 4.09263 7.23844 4.14746 7.32791C4.20928 7.4288 4.29591 7.51542 4.46875 7.68826L9.53149 12.751C9.70443 12.9239 9.79044 13.01 9.85228 13.1109C9.90711 13.2003 9.94816 13.2981 9.97266 13.4002C10 13.5141 10 13.635 10 13.8747V18.6305C10 19.4877 10 19.9166 10.1805 20.1747C10.3382 20.4001 10.5814 20.5505 10.8535 20.5907C11.1651 20.6367 11.5487 20.4453 12.3154 20.0619L13.1154 19.6619C13.4365 19.5014 13.5966 19.4208 13.7139 19.3011C13.8176 19.1952 13.897 19.068 13.9453 18.9279C14 18.7694 14 18.5895 14 18.2305V13.8821C14 13.6375 14 13.5153 14.0276 13.4002C14.0521 13.2981 14.0926 13.2003 14.1475 13.1109C14.2089 13.0106 14.2947 12.9248 14.4653 12.7542L14.4688 12.751L19.5315 7.68826C19.7044 7.51531 19.7904 7.42883 19.8523 7.32791C19.9071 7.23844 19.9482 7.14097 19.9727 7.03894C20 6.92502 20 6.80395 20 6.56431V5.81961Z"
        stroke="black"
        strokeWidth="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
export const Dots = () => {
  return (
    <svg
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.33301 12.2197C7.33301 12.5879 7.63148 12.8864 7.99967 12.8864C8.36786 12.8864 8.66634 12.5879 8.66634 12.2197C8.66634 11.8515 8.36786 11.553 7.99967 11.553C7.63148 11.553 7.33301 11.8515 7.33301 12.2197Z"
        stroke="#4A4A4A"
        strokeWidth="1.33333"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.33301 8.21971C7.33301 8.5879 7.63148 8.88637 7.99967 8.88637C8.36786 8.88637 8.66634 8.5879 8.66634 8.21971C8.66634 7.85152 8.36786 7.55304 7.99967 7.55304C7.63148 7.55304 7.33301 7.85152 7.33301 8.21971Z"
        stroke="#4A4A4A"
        strokeWidth="1.33333"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.33301 4.21971C7.33301 4.5879 7.63148 4.88637 7.99967 4.88637C8.36786 4.88637 8.66634 4.5879 8.66634 4.21971C8.66634 3.85152 8.36786 3.55304 7.99967 3.55304C7.63148 3.55304 7.33301 3.85152 7.33301 4.21971Z"
        stroke="#4A4A4A"
        strokeWidth="1.33333"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
export const Arrows = () => {
  return (
    <svg
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.33301 10.8863L5.33301 12.8863M5.33301 12.8863L3.33301 10.8863M5.33301 12.8863V3.55295M8.66634 5.55295L10.6663 3.55295M10.6663 3.55295L12.6663 5.55295M10.6663 3.55295V12.8863"
        stroke="#4A4A4A"
        strokeWidth="1.33333"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
export const Ball2 = () => {
  return (
    <svg
      className="rounded-full"
      width="40"
      height="41"
      viewBox="0 0 40 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g mask="url(#mask0_2162_448)">
        <path d="M40 0.219788H0V40.2198H40V0.219788Z" fill="#FFAD08" />
        <path
          d="M35.2492 44.002L21.5684 6.41431L-16.0193 20.0951L-2.33854 57.6828L35.2492 44.002Z"
          fill="#EDD75A"
        />
        <path
          d="M17 25.2198C21.4183 25.2198 25 21.6381 25 17.2198C25 12.8015 21.4183 9.21979 17 9.21979C12.5817 9.21979 9 12.8015 9 17.2198C9 21.6381 12.5817 25.2198 17 25.2198Z"
          fill="#73B06F"
        />
        <path d="M35.3203 7.36404L4.67853 33.0755" stroke="#0C8F8F" />
      </g>
    </svg>
  );
};
export const Ball3 = () => {
  return (
    <svg
      width="40"
      height="41"
      className="rounded-full"
      viewBox="0 0 40 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clilPath="url(#clip0_2162_656)">
        <g mask="url(#mask0_2162_656)">
          <path d="M40 0.219849H0V40.2198H40V0.219849Z" fill="#405059" />
          <path
            d="M40.0889 33.634L31.7725 -5.49194L-7.35344 2.82452L0.963023 41.9504L40.0889 33.634Z"
            fill="#FFAD08"
          />
          <path
            d="M24.5 23.7198C28.9183 23.7198 32.5 20.1381 32.5 15.7198C32.5 11.3016 28.9183 7.71985 24.5 7.71985C20.0817 7.71985 16.5 11.3016 16.5 15.7198C16.5 20.1381 20.0817 23.7198 24.5 23.7198Z"
            fill="#EDD75A"
          />
          <path d="M46.2715 4.08508L9.72967 20.3545" stroke="#73B06F" />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_2162_656">
          <rect
            width="40"
            height="40"
            fill="white"
            transform="translate(0 0.219849)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export const Ball1 = () => {
  return (
    <svg
      width="40"
      height="41"
      viewBox="0 0 40 41"
      fill="none"
      className="rounded-full "
      xmlns="http://www.w3.org/2000/svg"
    >
      <g mask="url(#mask0_2150_403)">
        <path
          d="M39.999 0.219696H-0.000976562V40.2197H39.999V0.219696Z"
          fill="#73B06F"
        />
        <path
          d="M-1.34045 24.8055L38.4404 20.6244L37.9178 15.6518L-1.86309 19.8329L-1.34045 24.8055Z"
          fill="#0C8F8F"
        />
        <path
          d="M15.499 32.7197C19.9173 32.7197 23.499 29.138 23.499 24.7197C23.499 20.3014 19.9173 16.7197 15.499 16.7197C11.0807 16.7197 7.49902 20.3014 7.49902 24.7197C7.49902 29.138 11.0807 32.7197 15.499 32.7197Z"
          fill="#405059"
        />
        <path d="M-3.56348 28.3779L35.5624 20.0615" stroke="#FFAD08" />
      </g>
    </svg>
  );
};
export const CloseEyes = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.49556 7.44092C3.5473 8.11791 2.77849 8.8418 2.18936 9.47982C0.857452 10.9222 0.857453 13.0778 2.18936 14.5202C3.91676 16.391 7.18885 19 12.0001 19C13.2959 19 14.48 18.8108 15.5524 18.4977L13.8896 16.8349C13.2937 16.9409 12.6639 17 12.0001 17C7.96696 17 5.18838 14.82 3.65874 13.1634C3.03432 12.4872 3.03432 11.5128 3.65874 10.8366C4.2376 10.2097 4.99532 9.50788 5.9322 8.87757L4.49556 7.44092Z"
        fill="#0F0F0F"
      />
      <path
        d="M8.53323 11.4784C8.5078 11.6486 8.49463 11.8227 8.49463 12C8.49463 13.933 10.0616 15.5 11.9946 15.5C12.1718 15.5 12.346 15.4868 12.5162 15.4614L8.53323 11.4784Z"
        fill="#0F0F0F"
      />
      <path
        d="M15.4662 12.4471L11.5474 8.52829C11.6938 8.50962 11.843 8.5 11.9945 8.5C13.9275 8.5 15.4945 10.067 15.4945 12C15.4945 12.1515 15.4849 12.3007 15.4662 12.4471Z"
        fill="#0F0F0F"
      />
      <path
        d="M18.1119 15.0928C19.0285 14.4702 19.7716 13.7805 20.3414 13.1634C20.9658 12.4872 20.9658 11.5128 20.3414 10.8366C18.8118 9.18002 16.0332 7 12.0001 7C11.3595 7 10.7506 7.05499 10.1733 7.15415L8.50488 5.48582C9.56215 5.1826 10.7273 5 12.0001 5C16.8113 5 20.0834 7.60905 21.8108 9.47978C23.1427 10.9222 23.1427 13.0778 21.8108 14.5202C21.2306 15.1486 20.4761 15.8603 19.5475 16.5284L18.1119 15.0928Z"
        fill="#0F0F0F"
      />
      <path
        d="M2.00774 3.42207C1.61721 3.03155 1.61721 2.39838 2.00774 2.00786C2.39826 1.61733 3.03143 1.61733 3.42195 2.00786L22.0003 20.5862C22.3909 20.9767 22.3909 21.6099 22.0003 22.0004C21.6098 22.3909 20.9766 22.3909 20.5861 22.0004L2.00774 3.42207Z"
        fill="#0F0F0F"
      />
    </svg>
  );
};
export const OpenEyes = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clipRule="evenodd"
        d="M11.9946 15.5C13.9276 15.5 15.4946 13.933 15.4946 12C15.4946 10.067 13.9276 8.5 11.9946 8.5C10.0616 8.5 8.49463 10.067 8.49463 12C8.49463 13.933 10.0616 15.5 11.9946 15.5ZM11.9946 13.4944C11.1693 13.4944 10.5002 12.8253 10.5002 12C10.5002 11.1747 11.1693 10.5056 11.9946 10.5056C12.8199 10.5056 13.489 11.1747 13.489 12C13.489 12.8253 12.8199 13.4944 11.9946 13.4944Z"
        fill="#0F0F0F"
      />
      <path
        fill-rule="evenodd"
        clipRule="evenodd"
        d="M12.0001 5C7.18885 5 3.91676 7.60905 2.18936 9.47978C0.857452 10.9222 0.857453 13.0778 2.18936 14.5202C3.91676 16.391 7.18885 19 12.0001 19C16.8113 19 20.0834 16.391 21.8108 14.5202C23.1427 13.0778 23.1427 10.9222 21.8108 9.47978C20.0834 7.60905 16.8113 5 12.0001 5ZM3.65874 10.8366C5.18838 9.18002 7.96696 7 12.0001 7C16.0332 7 18.8118 9.18002 20.3414 10.8366C20.9658 11.5128 20.9658 12.4872 20.3414 13.1634C18.8118 14.82 16.0332 17 12.0001 17C7.96696 17 5.18838 14.82 3.65874 13.1634C3.03432 12.4872 3.03432 11.5128 3.65874 10.8366Z"
        fill="#0F0F0F"
      />
    </svg>
  );
};
