import DashboardCards from "../custom-ui/DashboardCards";
import { DashboardCard } from "../../components/common/Helper";

export default function Dashboard() {
  return (
    <div className="bg-mist-gray">
      <div className="dashboard_content_width mx-auto pt-[59.54px] lg:px-12 sm:px-9 px-4">
        <div className="flex flex-row flex-wrap xl:gap-8 lg:justify-between sm:gap-4 gap-6 pb-8">
          {DashboardCard.map((obj, index) => {
            return (
              <DashboardCards
                key={index}
                cardicon={obj.cardicon}
                subheading={obj.subheading}
                heading={obj.heading}
                grade={obj.grade}
                grademark={obj.grademark}
                description={obj.description}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
