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
              <div className=" flex lg:block justify-center">
                <div className="py-6 px-4 xl:px-6 hover:shadow-xs transition-all ease-linear duration-300 bg-white rounded-3xl xl:max-w-[528px]  sm:min-h-[348px] min-h-[320px] w-full ">
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
            </div>
            <div className="xl:w-6/12 lg:w-8/12 md:w-10/12 w-full px-3 xl:px-4 pt-6 md:pt-8 xl:pt-0">
              <div className=" flex lg:block lg:justify-end justify-center">
                <div className="py-6 px-4 xl:px-6 hover:shadow-xs transition-all ease-linear duration-300 bg-white rounded-3xl xl:max-w-[528px]  min-h-[348px] w-full">
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
    </div>
  );
}
