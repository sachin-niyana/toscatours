import React from "react";

const DashboardCards = ({
  index,
  dashboardcard,
  icon,
  subheading,
  heading,
  grade,
  grademark,
  description,
}) => {
  const grademarkClass = index === 2 ? "text-[red]" : "";

  return (
    <div className="w-full md:w-6/12 xl:w-4/12 px-3 xl:px-4 pt-6 md:pt-8">
      <div className="py-6 bg-white pl-6 rounded-3xl hover:shadow-[0_0_11px_rgba(33,33,33,.2)] transition-all ease-linear duration-300 xl:max-w-[341px] w-full max-h-[164px] h-full mx-auto md:mx-0">
        {dashboardcard}
        <div className="flex items-center mb-2 gap-2">
          <div>{icon}</div>
          <p className="text-base font-normal text-black leading-[163%]">
            {subheading}
          </p>
        </div>
        <h1 className="text-black font-medium text-3xxl leading-normal mb-2">
          {heading}
        </h1>
        <div className="flex gap-1 items-center">
          <p className="flex items-center font-medium text-green text-base leading-[163%] gap-1">
            <span>{grade}</span>
            <span className={grademarkClass}>{grademark}</span>
          </p>
          <p className="font-medium text-base leading-[163%] text-light-gray">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashboardCards;
