import DashboardCards from "../custom-ui/DashboardCards";
import { DashboardCard } from "../../components/common/Helper";
import { BtnArrow } from "../common/Icon";

export default function Dashboard() {
  return (
    <div className="bg-mist-gray">
      <div className="dashboard_content_width mx-auto pt-[59.54px] lg:px-12 sm:px-9 px-4">
        <div className="flex flex-row flex-wrap xl:gap-8 lg:justify-between lg:gap-0 sm:gap-4 gap-6 pb-8">
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
        <div className="flex flex-row flex-wrap">
          <div className="lg:w-6/12 md:w-8/12 sm:w-10/12 w-full">
            <div className="py-6 px-6 bg-white rounded-3xl xl:max-w-[528px] max-h-[348px] w-full h-full">
              <div className="flex justify-between items-center mb-4">
                <p className="text-black font-medium text-xl leading-normal capitalize">
                  Verkäufe
                </p>
                <button className="font-medium text-base leading-normal sm:py-1 py-[2px] sm:pr-2 pr-1 sm:pl-4 pl-3 bg-mist-gray border border-solid border-neutral-gray rounded-full text-light-black flex items-center">
                  This month
                  <BtnArrow />
                </button>
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex items-center xl:gap-4 sm:gap-3 gap-[9.8px] pb-2">
                  <div className="flex xl:gap-[22px] sm:gap-4 gap-3 flex-col items-end">
                    <p className="uppercase font-normal sm:text-xs text-xs-11 text-dark-gray leading-normal text-nowrap">
                      2 500 CHF
                    </p>
                    <p className="uppercase font-normal sm:text-xs text-xs-11 text-dark-gray leading-normal text-nowrap">
                      2 000 CHF
                    </p>
                    <p className="uppercase font-normal sm:text-xs text-xs-11 text-dark-gray leading-normal text-nowrap">
                      1 000 CHF
                    </p>
                    <p className="uppercase font-normal sm:text-xs text-xs-11 text-dark-gray leading-normal text-nowrap">
                      500 CHF
                    </p>
                    <p className="uppercase font-normal sm:text-xs text-xs-11 text-dark-gray leading-normal text-nowrap">
                      0 CHF
                    </p>
                  </div>
                  <img
                    src="/assets/images/png/graph-img.png"
                    alt="graph-img"
                    className="w-full xl:max-w-[406px] sm:max-w-[340px] max-w-[251px]"
                  />
                </div>
                <div className="flex lg:gap-[30px] sm:gap-6 gap-[19px] justify-center">
                  <p className="capitalize font-normal sm:text-xs text-xs-11 text-dark-gray leading-normal">
                    Sun
                  </p>
                  <p className="capitalize font-normal sm:text-xs text-xs-11 text-dark-gray leading-normal">
                    Mon
                  </p>
                  <p className="capitalize font-normal sm:text-xs text-xs-11 text-dark-gray leading-normal">
                    Tue
                  </p>
                  <p className="capitalize font-normal sm:text-xs text-xs-11 text-dark-gray leading-normal">
                    Wed
                  </p>
                  <p className="capitalize font-normal sm:text-xs text-xs-11 text-dark-gray leading-normal">
                    Thu
                  </p>
                  <p className="capitalize font-normal sm:text-xs text-xs-11 text-dark-gray leading-normal">
                    Fri
                  </p>
                  <p className="capitalize font-normal sm:text-xs text-xs-11 text-dark-gray leading-normal">
                    Sat
                  </p>
                </div>
              </div>
              <div className="pt-4 flex gap-4 justify-center">
                <p className="capitalize font-normal text-xs leading-normal text-dark-gray flex gap-1 items-center group max-w-28">
                  <span className="w-3 h-3 bg-orange rounded-full group-hover:bg-gray transition-colors ease-linear duration-300"></span>
                  Diesen Monat
                </p>
                <p className="capitalize font-normal text-xs leading-normal text-dark-gray flex gap-1 items-center group max-w-32">
                  <span className="w-3 h-3 bg-orange rounded-full group-hover:bg-gray transition-colors ease-linear duration-300"></span>
                  Vorheriger Monat
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
