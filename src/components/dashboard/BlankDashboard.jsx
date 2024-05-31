import DashboardCards from "../custom-ui/DashboardCards";
import { DashboardboxCard } from "../common/Helper";

export default function BlankDashboard() {
  return (
    <div className="bg-mist-gray pb-20 sm:pb-0 ">
      <div className="pt-12 sm:pt-9 pb-12 md:pb-0  xl:mx-8 xl:px-0 lg:px-6 px-6 max-xl:max-h-[calc(100vh-104px)] max-xl:overflow-y-scroll">
        <div className="sm:hidden px-4 sm:px-0 ">
          <h2 className="font-bold text-2xl !leading-[144%]">Hi Stéphane</h2>
          <p className="font-medium text-base text-dark-gray !leading-[115%] ">
            Lass uns heute den Umsatz überprüfen!
          </p>
        </div>
        <div className="w-full 2xl:max-w-[1088px] mx-auto ">
          <div className="flex flex-row flex-wrap -mx-3 justify-center pb-6 md:pb-8">
            {DashboardboxCard.map((obj, id) => {
              return (
                <DashboardCards
                  key={id}
                  icon={obj.icon}
                  subheading={obj.subheading}
                  heading={obj.heading}
                  grade={obj.grade}
                  grademark={obj.grademark}
                  description={obj.description}
                />
              );
            })}
          </div>
          <div className="flex flex-row flex-wrap -mx-3 justify-center">
            <div className="xl:w-6/12 lg:w-8/12 md:w-10/12 w-full px-3 xl:px-4 ">
              <div className="flex lg:block justify-center">
                <div className="py-6 px-4 xl:px-6 hover:shadow-xs transition-all ease-linear duration-300 bg-white rounded-3xl xl:max-w-[528px] sm:min-h-[348px] min-h-[290px] w-full ">
                  <div className="flex justify-between items-center pb-6 xl:pr-8">
                    <div className="w-[54px] h-[30px] bg-skeleton-color animate-fade rounded"></div>
                    <div className="flex gap-4 items-center">
                      <div className="w-[90px] h-[26px] rounded bg-skeleton-color animate-fade"></div>
                      <div className="w-2 h-1 rounded bg-skeleton-color animate-fade"></div>
                    </div>
                  </div>
                  <div className="flex gap-4 items-center">
                    <div className="flex flex-col xl:gap-[22px] sm:gap-4 gap-2 items-end">
                      <div className="w-[60px] h-[18px] rounded bg-skeleton-color animate-fade"></div>
                      <div className="w-[60px] h-[18px] rounded bg-skeleton-color animate-fade"></div>
                      <div className="w-[57px] h-[18px] rounded bg-skeleton-color animate-fade"></div>
                      <div className="w-[50px] h-[18px] rounded bg-skeleton-color animate-fade"></div>
                      <div className="w-[35px] h-[18px] rounded bg-skeleton-color animate-fade"></div>
                    </div>
                    <div className="w-[406px] sm:h-[132px] h-[100px] rounded bg-skeleton-color animate-fade"></div>
                  </div>
                  <div className="flex justify-center xl:gap-[31px] sm:gap-4 gap-3 sm:pt-[21.27px] pt-2 pb-4">
                    <div className="w-[23px] h-[18px] rounded bg-skeleton-color animate-fade"></div>
                    <div className="w-[26px] h-[18px] rounded bg-skeleton-color animate-fade"></div>
                    <div className="w-[22px] h-[18px] rounded bg-skeleton-color animate-fade"></div>
                    <div className="w-[28px] h-[18px] rounded bg-skeleton-color animate-fade"></div>
                    <div className="w-[22px] h-[18px] rounded bg-skeleton-color animate-fade"></div>
                    <div className="w-[14px] h-[18px] rounded bg-skeleton-color animate-fade"></div>
                    <div className="w-[20px] h-[18px] rounded bg-skeleton-color animate-fade"></div>
                  </div>
                  <div className="flex gap-4 justify-center">
                    <div className="flex items-center gap-1">
                      <div className="w-3 h-3 rounded bg-skeleton-color animate-fade"></div>
                      <div className="w-[67px] h-[18px] rounded bg-skeleton-color animate-fade"></div>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-3 h-3 rounded bg-skeleton-color animate-fade"></div>
                      <div className="w-[67px] h-[18px] rounded bg-skeleton-color animate-fade"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:w-6/12 lg:w-8/12 md:w-10/12 w-full px-3 xl:px-4 pt-6 md:pt-8 xl:pt-0">
              <div className=" flex lg:block lg:justify-end justify-center">
                <div className="py-6 px-4 xl:px-6 hover:shadow-xs transition-all ease-linear duration-300 bg-white rounded-3xl xl:max-w-[528px]  min-h-[348px] w-full">
                  <div className="flex justify-between items-center pb-6 xl:pr-8">
                    <div className="w-[103px] h-[30px] rounded bg-skeleton-color animate-fade"></div>
                    <div className="flex gap-4 items-center">
                      <div className="w-[90px] h-[26px] rounded bg-skeleton-color animate-fade"></div>
                      <div className="w-2 h-1 rounded bg-skeleton-color animate-fade"></div>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex gap-4">
                      <div className="w-[23px] h-[21px] rounded bg-skeleton-color animate-fade"></div>
                      <div className="w-[55px] h-[21px] rounded bg-skeleton-color animate-fade"></div>
                    </div>
                    <div className="flex xl:gap-[109.89px] sm:gap-24 gap-12">
                      <div className="w-[35px] h-[21px] rounded bg-skeleton-color animate-fade"></div>
                      <div className="w-[67px] h-[21px] rounded bg-skeleton-color animate-fade"></div>
                    </div>
                  </div>
                  <div className="pt-7 flex justify-between items-center">
                    <div className="flex sm:gap-7 gap-4 items-center">
                      <div className="w-1 h-[18px] rounded bg-skeleton-color animate-fade"></div>
                      <div className="flex flex-col gap-1">
                        <div className="sm:w-[137px] min-[356px]:w-[100px] w-[68px] h-[21px] rounded bg-skeleton-color animate-fade"></div>
                        <div className="sm:w-[140px] min-[356px]:w-[100px] w-[68px] h-[18px] rounded bg-skeleton-color animate-fade"></div>
                      </div>
                    </div>
                    <div className="flex xl:gap-[115.92px] md:gap-[100px] sm:gap-[60px] gap-9">
                      <div className="sm:w-[68px] w-[55px] h-[21px] rounded bg-skeleton-color animate-fade"></div>
                      <div className="w-[43px] h-[21px] rounded bg-skeleton-color animate-fade"></div>
                    </div>
                  </div>
                  <div className="pt-7 flex justify-between items-center">
                    <div className="flex sm:gap-7 gap-4 items-center">
                      <div className="w-2 h-[18px] rounded bg-skeleton-color animate-fade"></div>
                      <div className="flex flex-col gap-1">
                        <div className="sm:w-[137px] min-[356px]:w-[100px] w-[68px] h-[21px] rounded bg-skeleton-color animate-fade"></div>
                        <div className="sm:w-[134px] min-[356px]:w-[100px] w-[68px] h-[18px] rounded bg-skeleton-color animate-fade"></div>
                      </div>
                    </div>
                    <div className="flex xl:gap-[115.92px] md:gap-[100px] sm:gap-[60px] gap-9">
                      <div className="sm:w-[68px] w-[55px] h-[21px] rounded bg-skeleton-color animate-fade"></div>
                      <div className="w-[42px] h-[21px] rounded bg-skeleton-color animate-fade"></div>
                    </div>
                  </div>
                  <div className="pt-7 flex justify-between items-center">
                    <div className="flex sm:gap-7 gap-4 items-center">
                      <div className="w-2 h-[18px] rounded bg-skeleton-color animate-fade"></div>
                      <div className="flex flex-col gap-1">
                        <div className="sm:w-[137px] min-[356px]:w-[100px] w-[68px] h-[21px] rounded bg-skeleton-color animate-fade"></div>
                        <div className="sm:w-[131px] min-[356px]:w-[100px] w-[68px] h-[18px] rounded bg-skeleton-color animate-fade"></div>
                      </div>
                    </div>
                    <div className="flex xl:gap-[115.92px] md:gap-[100px] sm:gap-[60px] gap-9">
                      <div className="sm:w-[68px] w-[55px] h-[21px] bg-skeleton-color animate-fade rounded"></div>
                      <div className="w-[38px] h-[21px] rounded bg-skeleton-color animate-fade"></div>
                    </div>
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
