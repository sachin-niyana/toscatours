import DashboardCards from "../custom-ui/DashboardCards";
import { DashboardCard } from "../../components/common/Helper";
import { BtnArrow } from "../common/Icon";

export default function Dashboard() {
  return (
    <div className="bg-mist-gray min-h-screen">
      <div className="pt-[59.54px] xl:px-12 lg:px-6 sm:px-9 px-4">
        <div className="dashboard_content_width mx-auto">
          <div className="flex flex-row flex-wrap xl:gap-8 lg:justify-between justify-center lg:gap-0 sm:gap-4 gap-6 sm:pb-8 pb-6">
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
          <div className="flex flex-row flex-wrap xl:gap-8 lg:justify-between max-lg:gap-6 justify-center">
            <div className="xl:max-w-[528px] lg:w-6/12 screen_md:w-[48%] sm:w-10/12 w-full flex justify-center">
              <div className="py-6 min-[390px]:px-6 px-4 hover:shadow-[0_0_11px_rgba(33,33,33,.2)] transition-all ease-linear duration-300 bg-white rounded-3xl xl:max-w-[528px] sm:max-w-[480px] max-h-[348px] w-full h-full">
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
                      className="w-full xl:max-w-[406px] sm:max-w-[310px] max-w-[251px]"
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
            <div className="xl:max-w-[528px] lg:w-6/12 screen_md:w-[48%] sm:w-10/12 w-full flex lg:justify-end justify-center">
              <div className="py-6 min-[390px]:px-6 px-4 hover:shadow-[0_0_11px_rgba(33,33,33,.2)] transition-all ease-linear duration-300 bg-white rounded-3xl xl:max-w-[528px] sm:max-w-[480px] max-h-[348px] w-full h-full">
                <div className="flex justify-between items-center mb-4">
                  <p className="text-black font-medium text-xl leading-normal capitalize">
                    Top Angebote
                  </p>
                  <button className="font-medium text-base leading-normal sm:py-1 py-[2px] sm:pr-2 pr-1 sm:pl-4 pl-3 bg-mist-gray border border-solid border-neutral-gray rounded-full text-light-black flex items-center">
                    This month
                    <BtnArrow />
                  </button>
                </div>
                <div className="flex justify-between pb-4 border-b border-solid border-mist-gray">
                  <div className="flex gap-4 items-center">
                    <p className="font-medium text-sm text-light-gray leading-normal capitalize">
                      No.
                    </p>
                    <p className="font-medium text-sm text-light-gray leading-normal capitalize">
                      Product
                    </p>
                  </div>
                  <div className="flex lg:gap-[109.89px] sm:gap-[98.89px] gap-8 items-center">
                    <p className="font-medium text-sm text-light-gray leading-normal capitalize">
                      Price
                    </p>
                    <p className="font-medium text-sm text-light-gray leading-normal capitalize">
                      Item Sold
                    </p>
                  </div>
                </div>
                <div className="flex justify-between items-center pt-[12.43px] pb-[13.02px] border-b border-solid border-mist-gray">
                  <div className="flex gap-7 items-center">
                    <p className="font-normal text-xs leading-[155%] text-light-gray">
                      1
                    </p>
                    <div className="flex gap-1 flex-col">
                      <p className="capitalize font-normal lg:text-sm text-xs text-black">
                        Trail-Bike, Insel Elba
                      </p>
                      <p className="capitalize font-normal lg:text-sm text-xs text-gray">
                        Trail-Bike, Insel Elba
                      </p>
                    </div>
                  </div>
                  <div className="flex lg:gap-[116px] sm:gap-[100px] gap-8 items-center">
                    <p className="uppercase font-medium lg:text-sm text-xs leading-normal text-orange">
                      1 460 CHF
                    </p>
                    <p className="font-normal text-dark-gray lg:text-sm text-xs leading-normal">
                      10 pcs
                    </p>
                  </div>
                </div>
                <div className="flex justify-between items-center pt-[12.43px] pb-[13.02px] border-b border-solid border-mist-gray">
                  <div className="flex gap-7 items-center">
                    <p className="font-normal text-xs leading-[155%] text-light-gray">
                      2
                    </p>
                    <div className="flex gap-1 flex-col">
                      <p className="capitalize font-normal lg:text-sm text-xs text-black">
                        Trail-Bike, Insel Elba
                      </p>
                      <p className="capitalize font-normal lg:text-sm text-xs text-gray">
                        04.05.2024 - 11.05.2024
                      </p>
                    </div>
                  </div>
                  <div className="flex lg:gap-[116px] sm:gap-[100px] gap-8 items-center">
                    <p className="uppercase font-medium lg:text-sm text-xs leading-normal text-orange">
                      1 460 CHF
                    </p>
                    <p className="font-normal text-dark-gray lg:text-sm text-xs leading-normal">
                      12 pcs
                    </p>
                  </div>
                </div>
                <div className="flex justify-between items-center pt-[12.43px] pb-[13.02px]">
                  <div className="flex gap-7 items-center">
                    <p className="font-normal text-xs leading-[155%] text-light-gray">
                      3
                    </p>
                    <div className="flex gap-1 flex-col">
                      <p className="capitalize font-normal lg:text-sm text-xs text-black">
                        Trail-Bike, Insel Elba
                      </p>
                      <p className="capitalize font-normal lg:text-sm text-xs text-gray">
                        11.05.2024 - 18.05.2024
                      </p>
                    </div>
                  </div>
                  <div className="flex lg:gap-[116px] sm:gap-[100px] gap-8 items-center">
                    <p className="uppercase font-medium lg:text-sm text-xs leading-normal text-orange">
                      1 460 CHF
                    </p>
                    <p className="font-normal text-dark-gray lg:text-sm text-xs leading-normal">
                      3 pcs
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
