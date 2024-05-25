export default function DashboardCards(props) {
  return (
    <div className="py-6 pl-6 rounded-3xl bg-white hover:shadow-[0_0_11px_rgba(33,33,33,.2)] transition-all ease-linear duration-300 xl:max-w-[341px] lg:max-w-[300px] sm:max-w-[295px] w-full max-h-[164px] h-full">
      {props.dashboardcard}
      <div className="flex items-center mb-2 gap-2">
        <div>{props.cardicon}</div>
        <p className="text-base font-normal text-black leading-[163%]">
          {props.subheading}
        </p>
      </div>
      <h1 className="text-black font-medium text-3xxl leading-normal mb-2">
        {props.heading}
      </h1>
      <div className="flex gap-1 items-center">
        <p className="flex items-center font-medium text-base text-green leading-[163%] gap-1">
          <span>{props.grade}</span>
          {props.grademark}
        </p>
        <p className="font-medium text-base leading-[163%] text-light-gray">
          {props.description}
        </p>
      </div>
    </div>
  );
}
