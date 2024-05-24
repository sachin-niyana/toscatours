export default function DashboardCards(props) {
  return (
    <div className="py-6 pl-6 rounded-3xl bg-white max-w-[341px] w-full max-h-[164px] h-full">
      {props.dashboardcard}
      <div className="flex items-center">
        <div>{props.icon}</div>
        <div>{props.heading}</div>
      </div>
      <div>{props.subheading}</div>
      <div></div>
    </div>
  );
}
