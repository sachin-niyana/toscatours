import DashboardCards from "../custom-ui/DashboardCards";
import {
  CardSale1,
  CardBtn,
  BtnArrowIcon,
  CardChf1,
  CardChf2,
  CardChf3,
  CardChf4,
  CardChf5,
  DashboardImg,
  SunIcon,
  MonIcon,
  TueIcon,
  WedIcon,
  ThuIcon,
  FriIcon,
  SatIcon,
  CardMonat,
  CardSale2,
  NoIcon,
  ProductIcon,
  PriceIcon,
  ItemSaleIcon,
  ProductNo1,
  ProductNo2,
  ProductNo3,
  ProductName,
  ProductDate1,
  ProductDate2,
  ProductDate3,
  ProductPrice,
  SaleItem1,
  SaleItem2,
  SaleItem3,
} from "../common/Icon";
import { DashboardboxCard } from "../common/Helper";

export default function BlankDashboard() {
  return (
    <div className="bg-mist-gray min-h-screen">
      <div className="pt-[59.54px] xl:px-12 lg:px-6 sm:px-9 px-4">
        <div className="dashboard_content_width mx-auto">
          <div className="flex flex-row flex-wrap xl:gap-8 lg:justify-between justify-center lg:gap-0 sm:gap-4 gap-6 sm:pb-8 pb-6">
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
          <div className="flex flex-row flex-wrap xl:gap-8 lg:justify-between max-lg:gap-6 justify-center">
            <div className="xl:max-w-[528px] lg:w-6/12 screen_md:w-[48%] sm:w-10/12 w-full flex justify-center">
              <div className="py-6 min-[390px]:px-6 px-4 hover:shadow-[0_0_11px_rgba(33,33,33,.2)] transition-all ease-linear duration-300 bg-white rounded-3xl xl:max-w-[528px] sm:max-w-[480px] max-h-[348px] w-full h-full">
                <div className="flex justify-between items-center pb-6 xl:pr-8">
                  <CardSale1 />
                  <div className="flex gap-4 items-center">
                    <CardBtn />
                    <BtnArrowIcon />
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="flex flex-col xl:gap-[22px] sm:gap-4 gap-2 items-end">
                    <CardChf1 />
                    <CardChf2 />
                    <CardChf3 />
                    <CardChf4 />
                    <CardChf5 />
                  </div>
                  <DashboardImg />
                </div>
                <div className="flex justify-center xl:gap-[31px] sm:gap-4 gap-3 sm:pt-[21.27px] pt-2 pb-4">
                  <SunIcon />
                  <MonIcon />
                  <TueIcon />
                  <WedIcon />
                  <ThuIcon />
                  <FriIcon />
                  <SatIcon />
                </div>
                <div className="flex gap-4 justify-center">
                  <CardMonat />
                  <CardMonat />
                </div>
              </div>
            </div>
            <div className="xl:max-w-[528px] lg:w-6/12 screen_md:w-[48%] sm:w-10/12 w-full flex justify-center">
              <div className="py-6 min-[390px]:px-6 px-4 hover:shadow-[0_0_11px_rgba(33,33,33,.2)] transition-all ease-linear duration-300 bg-white rounded-3xl xl:max-w-[528px] sm:max-w-[480px] max-h-[348px] w-full h-full">
                <div className="flex justify-between items-center pb-6 xl:pr-8">
                  <CardSale2 />
                  <div className="flex gap-4 items-center">
                    <CardBtn />
                    <BtnArrowIcon />
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="flex gap-4">
                    <NoIcon />
                    <ProductIcon />
                  </div>
                  <div className="flex xl:gap-[109.89px] sm:gap-24 gap-12">
                    <PriceIcon />
                    <ItemSaleIcon />
                  </div>
                </div>
                <div className="pt-7 flex justify-between items-center">
                  <div className="flex sm:gap-7 gap-4 items-center">
                    <ProductNo1 />
                    <div className="flex flex-col gap-1">
                      <ProductName />
                      <ProductDate1 />
                    </div>
                  </div>
                  <div className="flex xl:gap-[115.92px] sm:gap-[100px] gap-10">
                    <ProductPrice />
                    <SaleItem1 />
                  </div>
                </div>
                <div className="pt-7 flex justify-between items-center">
                  <div className="flex sm:gap-7 gap-4 items-center">
                    <ProductNo2 />
                    <div className="flex flex-col gap-1">
                      <ProductName />
                      <ProductDate2 />
                    </div>
                  </div>
                  <div className="flex xl:gap-[115.92px] sm:gap-[100px] gap-10">
                    <ProductPrice />
                    <SaleItem2 />
                  </div>
                </div>
                <div className="pt-7 flex justify-between items-center">
                  <div className="flex sm:gap-7 gap-4 items-center">
                    <ProductNo3 />
                    <div className="flex flex-col gap-1">
                      <ProductName />
                      <ProductDate3 />
                    </div>
                  </div>
                  <div className="flex xl:gap-[115.92px] sm:gap-[100px] gap-10">
                    <ProductPrice />
                    <SaleItem3 />
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
