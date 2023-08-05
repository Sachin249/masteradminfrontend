import React from "react";
// import Breadcrumb from '../../components/Breadcrumb'
import DefaultLayout from "../../layout/DefaultLayout";

const Subscription = () => {
  return (
    <>
      <DefaultLayout>
        {/* <Breadcrumb pageName='DataTable'/> */}
        {/* <div>
        <div className="flex min-h-scree pt-[30px] px-[40px]">
        <div className="min-w-full">
          <p className="text-[#00153B] text-[20px] leading-[40px] font-semibold dark:text-white">
            Your Subscription
          </p>
          <div>
            <p className="text-[#717F87] text-[15px] leading-[27px] font-medium dark:text-white">
              Aliquam sagittis sapien in nibh tincidunt fermentum. Morbi eleifend faucibus.
            </p>
          </div>
          <div className="mt-[30px] inline-flex border border-[#E1E3E5] shadow-[0px 1px 2px #E1E3E5] divide-[#E1E3E5] divide-x rounded-[5px]">
            <button className="bg-white hover:bg-[#F6F6F7] hover:text-[#717F87] text-[#0E1823] leading-[16px] text-[13px] font-semibold font-bold py-[15px] px-[25px] rounded-l">
              Monthly
            </button>
            <button className="bg-white hover:bg-[#F6F6F7] hover:text-[#717F87] text-[#0E1823] text-[13px] leading-[16px] font-semibold font-bold py-[15px] px-[25px] rounded-r">
              Annual
            </button>
          </div>
          <div className="mt-[20px] grid grid-cols-3 gap-[20px]">
            <div key={1} className="w-full bg-[#fff] rounded-[10px] shadow-[0px 1px 2px #E1E3E5] border border-[#E1E3E5] divide-y">
              <div className="pt-[15px] px-[25px] pb-[25px]">
                <div className="flex justify-end">
                  <div className="bg-[#F6F6F7] rounded-[20px] flex justify-center align-center px-[12px]">
                    <p className="text-[#00153B] text-[12px] leading-[28px] font-bold">
                      Starter
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-[#00153B] text-[19px] leading-[24px] font-bold">
                    Trial
                  </p>
                  <p className="text-[#00153B] text-[50px] leading-[63px] font-bold">
                    Free
                  </p>
                </div>
                <div>
                  <p className="text-[#717F87] text-[18px] leading-[28px] font-medium">
                    5 Credits
                  </p>
                  <p className="text-[#717F87] text-[18px] leading-[28px] font-medium">
                    1 User
                  </p>
                </div>
              </div>
              <div className="pt-[25px] px-[25px] pb-[35px]">
                <div>
                  <p className="text-[#717F87] text-[14px] leading-[24px] font-medium">
                    Direct Phone Numbers
                  </p>
                  <p className="text-[#717F87] text-[14px] leading-[24px] font-medium">
                    Landline Phone Numbers
                  </p>
                  <p className="text-[#717F87] text-[14px] leading-[24px] font-medium">
                    Corporate email addresses
                  </p>
                  <p className="text-[#717F87] text-[14px] leading-[24px] font-medium">
                    Propsetcs
                  </p>
                  <p className="text-[#717F87] text-[14px] leading-[24px] font-medium">
                    Chrome Extension
                  </p>
                </div>
                <div className="mt-[25px]">
                  <button className="bg-[#006EF5] rounded-[5px] py-[15px] px-[25px] text-[#fff] text-[14px] leading-[17px] font-semibold">Downgrade +</button>
                </div>
              </div>
            </div>
            <div key={2} className="w-full bg-[#fff] rounded-[10px] shadow-[0px 1px 2px #E1E3E5] border border-[#E1E3E5] divide-y">
              <div className="pt-[15px] px-[25px] pb-[25px]">
                <div className="flex justify-end">
                  <div className="bg-[#F6F6F7] rounded-[20px] flex justify-center align-center px-[12px]">
                    <p className="text-[#00153B] text-[12px] leading-[28px] font-bold">
                      Value
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-[#00153B] text-[19px] leading-[24px] font-bold">
                    Fast Start
                  </p>
                  <p className="text-[#00153B] text-[50px] leading-[63px] font-bold">
                    $49
                  </p>
                </div>
                <div>
                  <p className="text-[#717F87] text-[18px] leading-[28px] font-medium">
                    50 Credits per month
                  </p>
                  <p className="text-[#717F87] text-[18px] leading-[28px] font-medium">
                    Unlimited users
                  </p>
                </div>
              </div>
              <div className="pt-[25px] px-[25px] pb-[35px]">
                <div>
                  <p className="text-[#717F87] text-[14px] leading-[24px] font-medium">
                    Direct Phone Numbers
                  </p>
                  <p className="text-[#717F87] text-[14px] leading-[24px] font-medium">
                    Landline Phone Numbers
                  </p>
                  <p className="text-[#717F87] text-[14px] leading-[24px] font-medium">
                    Corporate email addresses
                  </p>
                  <p className="text-[#717F87] text-[14px] leading-[24px] font-medium">
                    Propsetcs
                  </p>
                  <p className="text-[#717F87] text-[14px] leading-[24px] font-medium">
                    Chrome Extension
                  </p>
                </div>
                <div className="mt-[25px]">
                  <button className="bg-[#E1E3E5] rounded-[5px] py-[15px] px-[25px] text-[#fff] text-[14px] leading-[17px] font-semibold">Current Plan</button>
                </div>
              </div>
            </div>
            <div key={3} className="w-full bg-[#fff] rounded-[10px] shadow-[0px 1px 2px #E1E3E5] border border-[#E1E3E5] divide-y">
              <div className="pt-[15px] px-[25px] pb-[25px]">
                <div className="flex justify-end">
                  <div className="bg-[#F6F6F7] rounded-[20px] flex justify-center align-center px-[12px]">
                    <p className="text-[#00153B] text-[12px] leading-[28px] font-bold">
                      Pro
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-[#00153B] text-[19px] leading-[24px] font-bold">
                    Accelerate
                  </p>
                  <p className="text-[#00153B] text-[50px] leading-[63px] font-bold">
                    $89
                  </p>
                </div>
                <div>
                  <p className="text-[#717F87] text-[18px] leading-[28px] font-medium">
                    100 Credits per month
                  </p>
                  <p className="text-[#717F87] text-[18px] leading-[28px] font-medium">
                    Unlimited users
                  </p>
                </div>
              </div>
              <div className="pt-[25px] px-[25px] pb-[35px]">
                <div>
                  <p className="text-[#717F87] text-[14px] leading-[24px] font-medium">
                    Direct Phone Numbers
                  </p>
                  <p className="text-[#717F87] text-[14px] leading-[24px] font-medium">
                    Landline Phone Numbers
                  </p>
                  <p className="text-[#717F87] text-[14px] leading-[24px] font-medium">
                    Corporate email addresses
                  </p>
                  <p className="text-[#717F87] text-[14px] leading-[24px] font-medium">
                    Propsetcs
                  </p>
                  <p className="text-[#717F87] text-[14px] leading-[24px] font-medium">
                    Chrome Extension
                  </p>
                </div>
                <div className="mt-[25px]">
                  <button className="bg-[#006EF5] rounded-[5px] py-[15px] px-[25px] text-[#fff] text-[14px] leading-[17px] font-semibold">Upgrade +</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      
  
    </div> */}

        <main>
          <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
            <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="text-title-md2 font-semibold text-black dark:text-white">
                Pricing Table
              </h2>
              <nav>
                <ol className="flex items-center gap-2">
                  <li>
                    <a className="font-medium" href="/">
                      Dashboard /
                    </a>
                  </li>
                  <li className="font-medium text-primary">Pricing Table</li>
                </ol>
              </nav>
            </div>
            <div className="flex flex-col gap-5 md:gap-7 2xl:gap-10">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-3 2xl:gap-7.5">
                <div className="relative rounded-sm border border-stroke bg-white p-6 shadow-default dark:border-strokedark dark:bg-boxdark md:p-9 xl:p-11.5">
                  <span className="text-title-sm2 mb-2.5 block font-bold text-black dark:text-white">
                    Starter
                  </span>
                  <h3>
                    <span className="text-xl font-medium text-black dark:text-white">
                      $
                    </span>
                    <span className="text-title-xxl2 font-bold text-black dark:text-white">
                      25.00
                    </span>
                    <span className="font-medium"> Per Month</span>
                  </h3>
                  <h4 className="mt-7.5 mb-5 text-lg font-medium text-black dark:text-white">
                    Features
                  </h4>
                  <ul className="flex flex-col gap-3.5">
                    <li className="font-medium">Get Figma Source File</li>
                    <li className="font-medium">Use on Unlimited Projects</li>
                    <li className="font-medium">
                      Personal &amp; Commercial Use
                    </li>
                    <li className="font-medium">Downloadable Offline Files</li>
                    <li className="font-medium">Lifetime Free Updates</li>
                  </ul>
                  <button className="mt-9 flex rounded-md border border-primary py-3 px-9 font-medium text-primary hover:bg-primary hover:text-white">
                    Purchase Now
                  </button>
                </div>
                <div className="relative rounded-sm border border-stroke bg-white p-6 shadow-default dark:border-strokedark dark:bg-boxdark md:p-9 xl:p-11.5">
                  <span className="absolute top-3.5 -right-1">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG0AAAAiCAYAAABV9lfvAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATVSURBVHgB7ZpLTNRAGMe/WfGJKL4xxriboBc94MUna8AbiSb1IHowEfDgSXyclMSIMVFP4uPkBTx4UDi4iQZvagJG9IIHPUmyEGNEjREVn6j1+8921m5pZdstUJL5Jc22nbYz3/fN95htxVYjfUSQaCFN1BliO13rSq06KnC0yUjHp5G4zwdx0kQc87RQuzBcEYlbvFtBmigzJJxnKo10M5E4RZrIItxOWnkOhislTeQQXg06z0WXmFdDTyrR/5vMat5NkSZSiHwu0nkuWuRlNJA00sYfXs/pcDn55G00EHaeW760aNS5129/0XiDfoe//KHPvHm1/28cJcUxKk9MpxfpEfmcicaX0UCVkS4dIbrI1eV+KpD2qytGGW6QlXW59QN1Pf5K40X93lKq3VFCNftejmqrqS6mpsbFtPvgKzkWN9avm0WXzyyjWr5mIiaZk5jP6+lBKjH0MJWow8qcQqDj9icpPLaGY6959v6kpkOLaG6x76HlcIKfAcW6gQmB50P5Tmq2z5Xtg5NgjHwJrJnuVKKZDVdtEvVTASBEYbZig8E67nyWCnULnWHRx/30PvtO9Xvm55xHnzBk15NvFGUKms5suAe/QzCcnbIl0+SvCjurEzOkx3TdWiW3xoYF2WvR1nphuTzfwaFWGQFhd9vGOdIA2HcDhkG73aMr+R542N17w9KA9n7Rj9dEQh8Yi0L1q663y3D3+socGYJQWAyizHruYSqeYK+7RAGAchEOm6xw1nhgIV3hnIYED6HPHl8iPUOFzyRfr4yDEPiUPSa5a0DmwQbOVTDCuSvvpSfBc7HvBgyDPnZzblMgz+E+gD7QjryHDcZEf25gnM5wrgzmlKHx5JscGYJQsNEAihNBMZMCYA+PEAyKUt5WsXam/IVBVPhsvTFEtTvn5TwD1RzyEJSC+6F4PFftu4G2TjYcJg2Ad5SxghGeATwR/Qrr+TCa3ZvyBd6LvsaSwQ8FJw4sA37JtwNmoLcDUGrbzY/Z4877X6gNIY+VVmbNYGeIU6U6vAizv5MVIPMhFzV+qrlu7gPKg8FQNQ5aSpWYZraQwXmMI0hxVB6fLuXwkiEIBRmN/ympMkm0UYgLblW1wduGv5ryuJ7DoqLEpjwoGCETx6j6UKr39Y/8U/wYYMLACyo3zJYhC96gQJhGCG21JpRaCnihooMTjGdNwluGIAS+s9IYOEwhLLQzFdtMuSVZeYesJN37/IdUGmapyjsQto5zAXIEhEZSh5dA8d3Wus6vMto5HMLbcJ89lOJYxXv0i3zpBbwbkway4Fp7vkLY9pIhKL49LbO4jrVw/KijEICw2BRQXNP5d1mPO8shENWWKjLQfoLbYSh4AUIYlAZltHGu8MphXiCkNrASnWsz5Db0qcbWztfB+9xA4YQxIgRiXLhXrQHxTC8ZgjKpf2P5QVVjzpwFJcBgqvAIE/XsfPJkPuPwksEvvv4wtvKXfjE6yeSVADh/nTIz349og0WA/3oa8lemnKcq0kQG/bnBFMQ1PG7dNbC/iESvNlg0GeVpSWOgxSTzCGkii/NjVVSHVaSJNHLhsMVIV4hMwREnTeSJ4e+omM5fUwrf34hoJp7Vm3uyr71M0zwdyvs0zcQAg/X1bG7WRpsiKIORZmpQvulRs/34LxIKYel9o6UPAAAAAElFTkSuQmCC"
                      alt="Banner"
                    />
                  </span>
                  <span className="text-title-sm2 mb-2.5 block font-bold text-black dark:text-white">
                    Basic
                  </span>
                  <h3>
                    <span className="text-xl font-medium text-black dark:text-white">
                      $
                    </span>
                    <span className="text-title-xxl2 font-bold text-black dark:text-white">
                      59.00
                    </span>
                    <span className="font-medium"> Per Month</span>
                  </h3>
                  <h4 className="mt-7.5 mb-5 text-lg font-medium text-black dark:text-white">
                    Features
                  </h4>
                  <ul className="flex flex-col gap-3.5">
                    <li className="font-medium">Get Figma Source File</li>
                    <li className="font-medium">Use on Unlimited Projects</li>
                    <li className="font-medium">
                      Personal &amp; Commercial Use
                    </li>
                    <li className="font-medium">Downloadable Offline Files</li>
                    <li className="font-medium">Lifetime Free Updates</li>
                  </ul>
                  <button className="mt-9 flex rounded-md border border-primary py-3 px-9 font-medium text-primary hover:bg-primary hover:text-white">
                    Purchase Now
                  </button>
                </div>
                <div className="relative rounded-sm border border-stroke bg-white p-6 shadow-default dark:border-strokedark dark:bg-boxdark md:p-9 xl:p-11.5">
                  <span className="text-title-sm2 mb-2.5 block font-bold text-black dark:text-white">
                    Premium
                  </span>
                  <h3>
                    <span className="text-xl font-medium text-black dark:text-white">
                      $
                    </span>
                    <span className="text-title-xxl2 font-bold text-black dark:text-white">
                      99.00
                    </span>
                    <span className="font-medium"> Per Month</span>
                  </h3>
                  <h4 className="mt-7.5 mb-5 text-lg font-medium text-black dark:text-white">
                    Features
                  </h4>
                  <ul className="flex flex-col gap-3.5">
                    <li className="font-medium">Get Figma Source File</li>
                    <li className="font-medium">Use on Unlimited Projects</li>
                    <li className="font-medium">
                      Personal &amp; Commercial Use
                    </li>
                    <li className="font-medium">Downloadable Offline Files</li>
                    <li className="font-medium">Lifetime Free Updates</li>
                  </ul>
                  <button className="mt-9 flex rounded-md border border-primary py-3 px-9 font-medium text-primary hover:bg-primary hover:text-white">
                    Purchase Now
                  </button>
                </div>
              </div>
              <div className="relative z-10 overflow-hidden rounded-sm border border-stroke bg-white p-11 shadow-default dark:border-strokedark dark:bg-boxdark">
                <div className="w-full overflow-x-auto">
                  <table className="table-auto">
                    <thead>
                      <tr>
                        <th className="w-1/4 min-w-[200px] px-5" />
                        <th className="w-1/4 min-w-[200px] px-5">
                          <div className="mb-10 text-left">
                            <span className="mb-3.5 block text-xl font-bold text-black dark:text-white">
                              Starter
                            </span>
                            <h4 className="mb-4">
                              <span className="text-[28px] font-bold text-black dark:text-white lg:text-[32px]">
                                $59
                              </span>
                              <span className="font-medium">Per Month</span>
                            </h4>
                            <p className="mb-6 text-base font-medium">
                              Best suited for freelancers who works
                              individually.
                            </p>
                            <a
                              className="block w-full rounded-md bg-primary p-3 text-center font-medium text-white transition hover:bg-opacity-90"
                              href="/pages/pricing-tables"
                            >
                              Purchase Now
                            </a>
                          </div>
                        </th>
                        <th className="w-1/4 min-w-[200px] px-5">
                          <div className="mb-10 text-left">
                            <span className="mb-3.5 block text-xl font-bold text-black dark:text-white">
                              Agency
                            </span>
                            <h4 className="mb-4">
                              <span className="text-[28px] font-bold text-black dark:text-white lg:text-[32px]">
                                $99
                              </span>
                              <span className="font-medium">Per Month</span>
                            </h4>
                            <p className="mb-6 font-medium">
                              Best suited for agencies and small business.
                            </p>
                            <a
                              className="block w-full rounded-md bg-[#13C296] p-3 text-center font-medium text-white transition hover:bg-opacity-90"
                              href="/pages/pricing-tables"
                            >
                              Purchase Now
                            </a>
                          </div>
                        </th>
                        <th className="w-1/4 min-w-[200px] px-5">
                          <div className="mb-10 text-left">
                            <span className="mb-3.5 block text-xl font-bold text-black dark:text-white">
                              Extended
                            </span>
                            <h4 className="mb-4">
                              <span className="text-[28px] font-bold text-black dark:text-white lg:text-[32px]">
                                $149
                              </span>
                              <span className="font-medium">Per Month</span>
                            </h4>
                            <p className="mb-6 font-medium">
                              Best suited for agencies and large business.
                            </p>
                            <a
                              className="block w-full rounded-md bg-primary p-3 text-center font-medium text-white transition hover:bg-opacity-90"
                              href="/pages/pricing-tables"
                            >
                              Purchase Now
                            </a>
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border-t border-stroke py-5 px-7 dark:border-strokedark">
                          <h5 className="font-medium text-black dark:text-white">
                            Key Features
                          </h5>
                        </td>
                        <td className="border-t border-stroke py-5 px-7 dark:border-strokedark">
                          <h5 className="text-center font-medium text-black dark:text-white">
                            Features Limits
                          </h5>
                        </td>
                        <td className="border-t border-stroke py-5 px-7 dark:border-strokedark">
                          <h5 className="text-center font-medium text-black dark:text-white">
                            Features Limits
                          </h5>
                        </td>
                        <td className="border-t border-stroke py-5 px-7 dark:border-strokedark">
                          <h5 className="text-center font-medium text-black dark:text-white">
                            Features Limits
                          </h5>
                        </td>
                      </tr>
                      <tr>
                        <td className="border-t border-stroke py-5 px-7 dark:border-strokedark">
                          <p className="font-medium">Seats</p>
                        </td>
                        <td className="border-t border-stroke py-5 px-7 dark:border-strokedark">
                          <p className="text-center font-medium">1 Developer</p>
                        </td>
                        <td className="border-t border-stroke py-5 px-7 dark:border-strokedark">
                          <p className="text-center font-medium">5 Developer</p>
                        </td>
                        <td className="border-t border-stroke py-5 px-7 dark:border-strokedark">
                          <p className="text-center font-medium">
                            20 Developer
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td className="border-t border-stroke py-5 px-7 dark:border-strokedark">
                          <p className="font-medium">Domains/Products</p>
                        </td>
                        <td className="border-t border-stroke py-5 px-7 dark:border-strokedark">
                          <p className="text-center font-medium">5 Products</p>
                        </td>
                        <td className="border-t border-stroke py-5 px-7 dark:border-strokedark">
                          <p className="text-center font-medium">5 Products</p>
                        </td>
                        <td className="border-t border-stroke py-5 px-7 dark:border-strokedark">
                          <p className="text-center font-medium">5 Products</p>
                        </td>
                      </tr>
                      <tr>
                        <td className="border-t border-stroke py-5 px-7 dark:border-strokedark">
                          <p className="font-medium">Email Support</p>
                        </td>
                        <td className="border-t border-stroke py-5 px-7 dark:border-strokedark">
                          <p className="text-center font-medium">6 Months</p>
                        </td>
                        <td className="border-t border-stroke py-5 px-7 dark:border-strokedark">
                          <p className="text-center font-medium">6 Months</p>
                        </td>
                        <td className="border-t border-stroke py-5 px-7 dark:border-strokedark">
                          <p className="text-center font-medium">6 Months</p>
                        </td>
                      </tr>
                      <tr>
                        <td className="border-t border-stroke py-5 px-7 dark:border-strokedark">
                          <p className="font-medium">All Pro Components</p>
                        </td>
                        <td className="border-t border-stroke py-5 px-7 dark:border-strokedark">
                          <p className="flex justify-center text-center">
                            <svg
                              width={25}
                              height={25}
                              viewBox="0 0 25 25"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12.5 24.5312C5.85937 24.5312 0.507812 19.1406 0.507812 12.5C0.507812 5.85937 5.85937 0.507812 12.5 0.507812C19.1406 0.507812 24.5312 5.85937 24.5312 12.5C24.5312 19.1406 19.1406 24.5312 12.5 24.5312ZM12.5 1.875C6.64062 1.875 1.875 6.64062 1.875 12.5C1.875 18.3594 6.64062 23.1641 12.5 23.1641C18.3594 23.1641 23.1641 18.3594 23.1641 12.5C23.1641 6.64062 18.3594 1.875 12.5 1.875Z"
                                fill="#13C296"
                              />
                              <path
                                d="M11.1719 15.2344C10.8984 15.2344 10.6641 15.1562 10.4297 14.9609L7.85156 12.4609C7.57812 12.1875 7.57812 11.7578 7.85156 11.4844C8.125 11.2109 8.55469 11.2109 8.82813 11.4844L11.1719 13.7891L16.1719 8.94531C16.4453 8.67187 16.875 8.67187 17.1484 8.94531C17.4219 9.21875 17.4219 9.64844 17.1484 9.92188L11.9531 15C11.6797 15.1563 11.4063 15.2344 11.1719 15.2344Z"
                                fill="#13C296"
                              />
                            </svg>
                          </p>
                        </td>
                        <td className="border-t border-stroke py-5 px-7 dark:border-strokedark">
                          <p className="flex justify-center text-center">
                            <svg
                              width={25}
                              height={25}
                              viewBox="0 0 25 25"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12.5 24.5312C5.85937 24.5312 0.507812 19.1406 0.507812 12.5C0.507812 5.85937 5.85937 0.507812 12.5 0.507812C19.1406 0.507812 24.5312 5.85937 24.5312 12.5C24.5312 19.1406 19.1406 24.5312 12.5 24.5312ZM12.5 1.875C6.64062 1.875 1.875 6.64062 1.875 12.5C1.875 18.3594 6.64062 23.1641 12.5 23.1641C18.3594 23.1641 23.1641 18.3594 23.1641 12.5C23.1641 6.64062 18.3594 1.875 12.5 1.875Z"
                                fill="#13C296"
                              />
                              <path
                                d="M11.1719 15.2344C10.8984 15.2344 10.6641 15.1562 10.4297 14.9609L7.85156 12.4609C7.57812 12.1875 7.57812 11.7578 7.85156 11.4844C8.125 11.2109 8.55469 11.2109 8.82813 11.4844L11.1719 13.7891L16.1719 8.94531C16.4453 8.67187 16.875 8.67187 17.1484 8.94531C17.4219 9.21875 17.4219 9.64844 17.1484 9.92188L11.9531 15C11.6797 15.1563 11.4063 15.2344 11.1719 15.2344Z"
                                fill="#13C296"
                              />
                            </svg>
                          </p>
                        </td>
                        <td className="border-t border-stroke py-5 px-7 dark:border-strokedark">
                          <p className="flex justify-center text-center">
                            <svg
                              width={25}
                              height={25}
                              viewBox="0 0 25 25"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12.5 24.5312C5.85937 24.5312 0.507812 19.1406 0.507812 12.5C0.507812 5.85937 5.85937 0.507812 12.5 0.507812C19.1406 0.507812 24.5312 5.85937 24.5312 12.5C24.5312 19.1406 19.1406 24.5312 12.5 24.5312ZM12.5 1.875C6.64062 1.875 1.875 6.64062 1.875 12.5C1.875 18.3594 6.64062 23.1641 12.5 23.1641C18.3594 23.1641 23.1641 18.3594 23.1641 12.5C23.1641 6.64062 18.3594 1.875 12.5 1.875Z"
                                fill="#13C296"
                              />
                              <path
                                d="M11.1719 15.2344C10.8984 15.2344 10.6641 15.1562 10.4297 14.9609L7.85156 12.4609C7.57812 12.1875 7.57812 11.7578 7.85156 11.4844C8.125 11.2109 8.55469 11.2109 8.82813 11.4844L11.1719 13.7891L16.1719 8.94531C16.4453 8.67187 16.875 8.67187 17.1484 8.94531C17.4219 9.21875 17.4219 9.64844 17.1484 9.92188L11.9531 15C11.6797 15.1563 11.4063 15.2344 11.1719 15.2344Z"
                                fill="#13C296"
                              />
                            </svg>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td className="border-t border-stroke py-5 px-7 dark:border-strokedark">
                          <p className="font-medium">Design Source Files</p>
                        </td>
                        <td className="border-t border-stroke py-5 px-7 dark:border-strokedark">
                          <p className="flex justify-center text-center">
                            <svg
                              width={25}
                              height={25}
                              viewBox="0 0 25 25"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12.4797 0C5.56911 0 0 5.56911 0 12.4797C0 19.3902 5.56911 25 12.4797 25C19.3902 25 25 19.3902 25 12.4797C25 5.56911 19.3902 0 12.4797 0ZM12.4797 23.5772C6.38211 23.5772 1.42276 18.5772 1.42276 12.4797C1.42276 6.38211 6.38211 1.42276 12.4797 1.42276C18.5772 1.42276 23.5772 6.38211 23.5772 12.4797C23.5772 18.5772 18.5772 23.5772 12.4797 23.5772Z"
                                fill="#FF9494"
                              />
                              <path
                                d="M16.2204 8.73978C15.9359 8.45523 15.4887 8.45523 15.2042 8.73978L12.4806 11.4634L9.75702 8.73978C9.47247 8.45523 9.02531 8.45523 8.74076 8.73978C8.45621 9.02433 8.45621 9.47149 8.74076 9.75604L11.4643 12.4796L8.74076 15.2032C8.45621 15.4878 8.45621 15.9349 8.74076 16.2195C8.86271 16.3414 9.06596 16.4227 9.22856 16.4227C9.39117 16.4227 9.59442 16.3414 9.71637 16.2195L12.4399 13.4959L15.1635 16.2195C15.2855 16.3414 15.4887 16.4227 15.6513 16.4227C15.8139 16.4227 16.0172 16.3414 16.1391 16.2195C16.4237 15.9349 16.4237 15.4878 16.1391 15.2032L13.4969 12.4796L16.2204 9.75604C16.4643 9.47149 16.4643 9.02433 16.2204 8.73978Z"
                                fill="#FF9494"
                              />
                            </svg>
                          </p>
                        </td>
                        <td className="border-t border-stroke py-5 px-7 dark:border-strokedark">
                          <p className="flex justify-center text-center">
                            <svg
                              width={25}
                              height={25}
                              viewBox="0 0 25 25"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12.5 24.5312C5.85937 24.5312 0.507812 19.1406 0.507812 12.5C0.507812 5.85937 5.85937 0.507812 12.5 0.507812C19.1406 0.507812 24.5312 5.85937 24.5312 12.5C24.5312 19.1406 19.1406 24.5312 12.5 24.5312ZM12.5 1.875C6.64062 1.875 1.875 6.64062 1.875 12.5C1.875 18.3594 6.64062 23.1641 12.5 23.1641C18.3594 23.1641 23.1641 18.3594 23.1641 12.5C23.1641 6.64062 18.3594 1.875 12.5 1.875Z"
                                fill="#13C296"
                              />
                              <path
                                d="M11.1719 15.2344C10.8984 15.2344 10.6641 15.1562 10.4297 14.9609L7.85156 12.4609C7.57812 12.1875 7.57812 11.7578 7.85156 11.4844C8.125 11.2109 8.55469 11.2109 8.82813 11.4844L11.1719 13.7891L16.1719 8.94531C16.4453 8.67187 16.875 8.67187 17.1484 8.94531C17.4219 9.21875 17.4219 9.64844 17.1484 9.92188L11.9531 15C11.6797 15.1563 11.4063 15.2344 11.1719 15.2344Z"
                                fill="#13C296"
                              />
                            </svg>
                          </p>
                        </td>
                        <td className="border-t border-stroke py-5 px-7 dark:border-strokedark">
                          <p className="flex justify-center text-center">
                            <svg
                              width={25}
                              height={25}
                              viewBox="0 0 25 25"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12.5 24.5312C5.85937 24.5312 0.507812 19.1406 0.507812 12.5C0.507812 5.85937 5.85937 0.507812 12.5 0.507812C19.1406 0.507812 24.5312 5.85937 24.5312 12.5C24.5312 19.1406 19.1406 24.5312 12.5 24.5312ZM12.5 1.875C6.64062 1.875 1.875 6.64062 1.875 12.5C1.875 18.3594 6.64062 23.1641 12.5 23.1641C18.3594 23.1641 23.1641 18.3594 23.1641 12.5C23.1641 6.64062 18.3594 1.875 12.5 1.875Z"
                                fill="#13C296"
                              />
                              <path
                                d="M11.1719 15.2344C10.8984 15.2344 10.6641 15.1562 10.4297 14.9609L7.85156 12.4609C7.57812 12.1875 7.57812 11.7578 7.85156 11.4844C8.125 11.2109 8.55469 11.2109 8.82813 11.4844L11.1719 13.7891L16.1719 8.94531C16.4453 8.67187 16.875 8.67187 17.1484 8.94531C17.4219 9.21875 17.4219 9.64844 17.1484 9.92188L11.9531 15C11.6797 15.1563 11.4063 15.2344 11.1719 15.2344Z"
                                fill="#13C296"
                              />
                            </svg>
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div>
                  <span className="absolute top-0 left-0 -z-1">
                    <svg
                      width={213}
                      height={188}
                      viewBox="0 0 213 188"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx={75}
                        cy={50}
                        r={138}
                        fill="url(#paint0_linear)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear"
                          x1={75}
                          y1={-88}
                          x2={75}
                          y2={188}
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#3056D3" stopOpacity="0.15" />
                          <stop
                            offset={1}
                            stopColor="#C4C4C4"
                            stopOpacity={0}
                          />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                  <span className="absolute top-30 left-11 -z-1">
                    <svg
                      width={50}
                      height={109}
                      viewBox="0 0 50 109"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="47.71"
                        cy="107.259"
                        r="1.74121"
                        transform="rotate(180 47.71 107.259)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="47.71"
                        cy="91.9355"
                        r="1.74121"
                        transform="rotate(180 47.71 91.9355)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="47.71"
                        cy="76.6133"
                        r="1.74121"
                        transform="rotate(180 47.71 76.6133)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="47.71"
                        cy="47.0132"
                        r="1.74121"
                        transform="rotate(180 47.71 47.0132)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="47.71"
                        cy="16.7158"
                        r="1.74121"
                        transform="rotate(180 47.71 16.7158)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="47.71"
                        cy="61.6392"
                        r="1.74121"
                        transform="rotate(180 47.71 61.6392)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="47.71"
                        cy="32.0386"
                        r="1.74121"
                        transform="rotate(180 47.71 32.0386)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="47.71"
                        cy="1.74121"
                        r="1.74121"
                        transform="rotate(180 47.71 1.74121)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="32.3877"
                        cy="107.259"
                        r="1.74121"
                        transform="rotate(180 32.3877 107.259)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="32.3877"
                        cy="91.9355"
                        r="1.74121"
                        transform="rotate(180 32.3877 91.9355)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="32.3877"
                        cy="76.6133"
                        r="1.74121"
                        transform="rotate(180 32.3877 76.6133)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="32.3877"
                        cy="47.0132"
                        r="1.74121"
                        transform="rotate(180 32.3877 47.0132)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="32.3877"
                        cy="16.7158"
                        r="1.74121"
                        transform="rotate(180 32.3877 16.7158)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="32.3877"
                        cy="61.6392"
                        r="1.74121"
                        transform="rotate(180 32.3877 61.6392)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="32.3877"
                        cy="32.0386"
                        r="1.74121"
                        transform="rotate(180 32.3877 32.0386)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="32.3877"
                        cy="1.74121"
                        r="1.74121"
                        transform="rotate(180 32.3877 1.74121)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="17.0654"
                        cy="107.259"
                        r="1.74121"
                        transform="rotate(180 17.0654 107.259)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="17.0654"
                        cy="91.9355"
                        r="1.74121"
                        transform="rotate(180 17.0654 91.9355)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="17.0654"
                        cy="76.6133"
                        r="1.74121"
                        transform="rotate(180 17.0654 76.6133)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="17.0654"
                        cy="47.0132"
                        r="1.74121"
                        transform="rotate(180 17.0654 47.0132)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="17.0654"
                        cy="16.7158"
                        r="1.74121"
                        transform="rotate(180 17.0654 16.7158)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="17.0654"
                        cy="61.6392"
                        r="1.74121"
                        transform="rotate(180 17.0654 61.6392)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="17.0654"
                        cy="32.0386"
                        r="1.74121"
                        transform="rotate(180 17.0654 32.0386)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="17.0654"
                        cy="1.74121"
                        r="1.74121"
                        transform="rotate(180 17.0654 1.74121)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.74121"
                        cy="107.259"
                        r="1.74121"
                        transform="rotate(180 1.74121 107.259)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.74121"
                        cy="91.9355"
                        r="1.74121"
                        transform="rotate(180 1.74121 91.9355)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.74121"
                        cy="76.6133"
                        r="1.74121"
                        transform="rotate(180 1.74121 76.6133)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.74121"
                        cy="47.0132"
                        r="1.74121"
                        transform="rotate(180 1.74121 47.0132)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.74121"
                        cy="16.7158"
                        r="1.74121"
                        transform="rotate(180 1.74121 16.7158)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.74121"
                        cy="61.6392"
                        r="1.74121"
                        transform="rotate(180 1.74121 61.6392)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.74121"
                        cy="32.0386"
                        r="1.74121"
                        transform="rotate(180 1.74121 32.0386)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.74121"
                        cy="1.74121"
                        r="1.74121"
                        transform="rotate(180 1.74121 1.74121)"
                        fill="#3056D3"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </main>
        
{/* file manager */}
        {/* <main>
          <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
            <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="text-title-md2 font-semibold text-black dark:text-white">
                File Manager
              </h2>
              <nav>
                <ol className="flex items-center gap-2">
                  <li>
                    <a className="font-medium" href="/">
                      Dashboard /
                    </a>
                  </li>
                  <li className="font-medium text-primary">File Manager</li>
                </ol>
              </nav>
            </div>
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
                <div className="flex justify-between border-b border-r border-stroke px-7.5 py-7 dark:border-strokedark xl:border-b-0">
                  <div className="flex items-center gap-5.5">
                    <div className="flex h-15 w-14.5 items-center justify-center rounded-lg bg-[#9B51E0]/[0.08]">
                      <svg
                        width={31}
                        height={31}
                        viewBox="0 0 31 31"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M5.01313 5.3272C4.76381 5.3272 4.52469 5.42625 4.34839 5.60254C4.17209 5.77884 4.07305 6.01796 4.07305 6.26728V23.8154C4.07305 24.0648 4.17209 24.3039 4.34839 24.4802C4.52469 24.6565 4.76381 24.7555 5.01313 24.7555H25.0682C25.3175 24.7555 25.5566 24.6565 25.7329 24.4802C25.9092 24.3039 26.0082 24.0648 26.0082 23.8154V10.0276C26.0082 9.77828 25.9092 9.53916 25.7329 9.36286C25.5566 9.18656 25.3175 9.08752 25.0682 9.08752H13.7872C13.2633 9.08752 12.7741 8.82571 12.4835 8.38983L10.4418 5.3272H5.01313ZM2.13261 3.38676C2.89657 2.62279 3.93272 2.1936 5.01313 2.1936H11.2803C11.8042 2.1936 12.2934 2.45542 12.584 2.8913L14.6257 5.95392H25.0682C26.1486 5.95392 27.1847 6.38311 27.9487 7.14707C28.7126 7.91104 29.1418 8.94719 29.1418 10.0276V23.8154C29.1418 24.8958 28.7126 25.932 27.9487 26.696C27.1847 27.4599 26.1486 27.8891 25.0682 27.8891H5.01313C3.93272 27.8891 2.89657 27.4599 2.13261 26.696C1.36864 25.932 0.939453 24.8958 0.939453 23.8154V6.26728C0.939453 5.18688 1.36864 4.15072 2.13261 3.38676Z"
                          fill="#9B51E0"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-lg font-medium text-[#9B51E0]">
                        Design
                      </p>
                      <span className="font-medium">17 files</span>
                    </div>
                  </div>
                  <div>
                    <p className="mt-1.5 font-medium text-black dark:text-white">
                      459 MB
                    </p>
                  </div>
                </div>
                <div className="flex justify-between border-b border-r border-stroke px-7.5 py-7 dark:border-strokedark xl:border-b-0">
                  <div className="flex items-center gap-5.5">
                    <div className="flex h-15 w-14.5 items-center justify-center rounded-lg bg-[#219653]/[0.08]">
                      <svg
                        width={31}
                        height={31}
                        viewBox="0 0 31 31"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M6.84516 5.3272C6.32597 5.3272 5.90508 5.74809 5.90508 6.26728V23.8154C5.90508 24.3346 6.32597 24.7555 6.84516 24.7555H24.3933C24.9125 24.7555 25.3334 24.3346 25.3334 23.8154V6.26728C25.3334 5.74809 24.9125 5.3272 24.3933 5.3272H6.84516ZM2.77148 6.26728C2.77148 4.01745 4.59533 2.1936 6.84516 2.1936H24.3933C26.6431 2.1936 28.467 4.01745 28.467 6.26728V23.8154C28.467 26.0653 26.6431 27.8891 24.3933 27.8891H6.84516C4.59533 27.8891 2.77148 26.0653 2.77148 23.8154V6.26728Z"
                          fill="#219653"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11.2323 9.71414C10.7132 9.71414 10.2923 10.135 10.2923 10.6542C10.2923 11.1734 10.7132 11.5943 11.2323 11.5943C11.7515 11.5943 12.1724 11.1734 12.1724 10.6542C12.1724 10.135 11.7515 9.71414 11.2323 9.71414ZM8.41211 10.6542C8.41211 9.09665 9.67477 7.83398 11.2323 7.83398C12.7899 7.83398 14.0526 9.09665 14.0526 10.6542C14.0526 12.2118 12.7899 13.4745 11.2323 13.4745C9.67477 13.4745 8.41211 12.2118 8.41211 10.6542Z"
                          fill="#219653"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M19.528 11.4264C20.1399 10.8146 21.1319 10.8146 21.7438 11.4264L28.011 17.6936C28.6228 18.3055 28.6228 19.2975 28.011 19.9094C27.3991 20.5213 26.4071 20.5213 25.7952 19.9094L20.6359 14.7501L7.95594 27.4301C7.34407 28.0419 6.35203 28.0419 5.74015 27.4301C5.12828 26.8182 5.12828 25.8261 5.74015 25.2143L19.528 11.4264Z"
                          fill="#219653"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-lg font-medium text-[#219653]">
                        Image
                      </p>
                      <span className="font-medium">12 files</span>
                    </div>
                  </div>
                  <div>
                    <p className="mt-1.5 font-medium text-black dark:text-white">
                      120 MB
                    </p>
                  </div>
                </div>
                <div className="flex justify-between border-b border-r border-stroke px-7.5 py-7 dark:border-strokedark sm:border-b-0">
                  <div className="flex items-center gap-5.5">
                    <div className="flex h-15 w-14.5 items-center justify-center rounded-lg bg-[#2F80ED]/[0.08]">
                      <svg
                        width={31}
                        height={31}
                        viewBox="0 0 31 31"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M27.9372 2.56492C28.2886 2.86261 28.4913 3.29985 28.4913 3.76041V20.0551C28.4913 20.9204 27.7898 21.6219 26.9245 21.6219C26.0592 21.6219 25.3577 20.9204 25.3577 20.0551V5.60996L13.45 7.59457V22.562C13.45 23.4273 12.7485 24.1288 11.8832 24.1288C11.0179 24.1288 10.3164 23.4273 10.3164 22.562V6.26729C10.3164 5.50138 10.8701 4.84773 11.6256 4.72181L26.6669 2.21493C27.1212 2.13922 27.5858 2.26722 27.9372 2.56492Z"
                          fill="#2F80ED"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M8.12204 20.3685C6.91059 20.3685 5.92852 21.3505 5.92852 22.562C5.92852 23.7734 6.91059 24.7555 8.12204 24.7555C9.33349 24.7555 10.3156 23.7734 10.3156 22.562C10.3156 21.3505 9.33349 20.3685 8.12204 20.3685ZM2.79492 22.562C2.79492 19.6199 5.17995 17.2349 8.12204 17.2349C11.0641 17.2349 13.4492 19.6199 13.4492 22.562C13.4492 25.5041 11.0641 27.8891 8.12204 27.8891C5.17995 27.8891 2.79492 25.5041 2.79492 22.562Z"
                          fill="#2F80ED"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M23.1631 17.8615C21.9516 17.8615 20.9695 18.8436 20.9695 20.055C20.9695 21.2665 21.9516 22.2485 23.1631 22.2485C24.3745 22.2485 25.3566 21.2665 25.3566 20.055C25.3566 18.8436 24.3745 17.8615 23.1631 17.8615ZM17.8359 20.055C17.8359 17.1129 20.221 14.7279 23.1631 14.7279C26.1051 14.7279 28.4902 17.1129 28.4902 20.055C28.4902 22.9971 26.1051 25.3821 23.1631 25.3821C20.221 25.3821 17.8359 22.9971 17.8359 20.055Z"
                          fill="#2F80ED"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-lg font-medium text-[#2F80ED]">
                        Music
                      </p>
                      <span className="font-medium">39 files</span>
                    </div>
                  </div>
                  <div>
                    <p className="mt-1.5 font-medium text-black dark:text-white">
                      374 MB
                    </p>
                  </div>
                </div>
                <div className="flex justify-between px-7.5 py-7">
                  <div className="flex items-center gap-5.5">
                    <div className="flex h-15 w-14.5 items-center justify-center rounded-lg bg-[#F2994A]/[0.08]">
                      <svg
                        width={31}
                        height={31}
                        viewBox="0 0 31 31"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M5.27128 2.13334C6.03524 1.36938 7.0714 0.940186 8.1518 0.940186H18.1793C18.5949 0.940186 18.9934 1.10526 19.2872 1.39909L26.8078 8.91973C27.1017 9.21356 27.2668 9.61208 27.2668 10.0276V25.0689C27.2668 26.1493 26.8376 27.1855 26.0736 27.9494C25.3096 28.7134 24.2735 29.1426 23.1931 29.1426H8.1518C7.0714 29.1426 6.03524 28.7134 5.27128 27.9494C4.50731 27.1855 4.07812 26.1493 4.07812 25.0689V5.01386C4.07812 3.93346 4.50731 2.8973 5.27128 2.13334ZM8.1518 4.07378C7.90248 4.07378 7.66337 4.17283 7.48707 4.34913C7.31077 4.52543 7.21172 4.76454 7.21172 5.01386V25.0689C7.21172 25.3182 7.31077 25.5573 7.48707 25.7336C7.66337 25.9099 7.90248 26.009 8.1518 26.009H23.1931C23.4424 26.009 23.6815 25.9099 23.8578 25.7336C24.0341 25.5573 24.1332 25.3182 24.1332 25.0689V10.6766L17.5303 4.07378H8.1518Z"
                          fill="#F2994A"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M18.1801 0.940186C19.0454 0.940186 19.7469 1.64167 19.7469 2.50698V8.46082H25.7007C26.566 8.46082 27.2675 9.1623 27.2675 10.0276C27.2675 10.8929 26.566 11.5944 25.7007 11.5944H18.1801C17.3148 11.5944 16.6133 10.8929 16.6133 10.0276V2.50698C16.6133 1.64167 17.3148 0.940186 18.1801 0.940186Z"
                          fill="#F2994A"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.0918 16.2947C9.0918 15.4294 9.79328 14.7279 10.6586 14.7279H20.6861C21.5514 14.7279 22.2529 15.4294 22.2529 16.2947C22.2529 17.16 21.5514 17.8615 20.6861 17.8615H10.6586C9.79328 17.8615 9.0918 17.16 9.0918 16.2947Z"
                          fill="#F2994A"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.0918 21.3085C9.0918 20.4432 9.79328 19.7417 10.6586 19.7417H20.6861C21.5514 19.7417 22.2529 20.4432 22.2529 21.3085C22.2529 22.1738 21.5514 22.8753 20.6861 22.8753H10.6586C9.79328 22.8753 9.0918 22.1738 9.0918 21.3085Z"
                          fill="#F2994A"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.0918 11.281C9.0918 10.4157 9.79328 9.71423 10.6586 9.71423H13.1655C14.0308 9.71423 14.7323 10.4157 14.7323 11.281C14.7323 12.1464 14.0308 12.8478 13.1655 12.8478H10.6586C9.79328 12.8478 9.0918 12.1464 9.0918 11.281Z"
                          fill="#F2994A"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-lg font-medium text-[#F2994A]">Docs</p>
                      <span className="font-medium">78 files</span>
                    </div>
                  </div>
                  <div>
                    <p className="mt-1.5 font-medium text-black dark:text-white">
                      237 MB
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-7.5 grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
              <div className="col-span-12 xl:col-span-8">
                <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                  <div className="flex flex-col gap-2 p-4 sm:flex-row sm:justify-between md:p-6 xl:p-7.5">
                    <div>
                      <h2 className="text-title-md2 font-bold text-black dark:text-white">
                        Activity Chart
                      </h2>
                    </div>
                    <div className="flex items-center">
                      <p className="font-medium uppercase text-black dark:text-white">
                        Short by:
                      </p>
                      <div className="relative z-20 inline-block">
                        <select
                          name="#"
                          id="#"
                          className="relative z-20 inline-flex appearance-none bg-transparent py-1 pl-3 pr-8 font-medium outline-none"
                        >
                          <option value>Monthly</option>
                          <option value>Weekly</option>
                        </select>
                        <span className="absolute top-1/2 right-1 z-10 -translate-y-1/2">
                          <svg
                            width={18}
                            height={18}
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.99995 12.8249C8.8312 12.8249 8.69058 12.7687 8.54995 12.6562L2.0812 6.2999C1.82808 6.04678 1.82808 5.65303 2.0812 5.3999C2.33433 5.14678 2.72808 5.14678 2.9812 5.3999L8.99995 11.278L15.0187 5.34365C15.2718 5.09053 15.6656 5.09053 15.9187 5.34365C16.1718 5.59678 16.1718 5.99053 15.9187 6.24365L9.44995 12.5999C9.30933 12.7405 9.1687 12.8249 8.99995 12.8249Z"
                              fill="#64748B"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="px-7.5">
                    <div id="chartTen" className="-ml-5">
                      <div style={{ minHeight: "333px" }}>
                        <div
                          id="apexchartsfk7urbxb"
                          className="apexcharts-canvas apexchartsfk7urbxb apexcharts-theme-light"
                          style={{ width: "578px", height: "318px" }}
                        >
                          <svg
                            id="SvgjsSvg3929"
                            width={578}
                            height={318}
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xmlns:svgjs="http://svgjs.dev"
                            className="apexcharts-svg"
                            xmlns:data="ApexChartsNS"
                            transform="translate(0, 0)"
                            style={{ background: "transparent" }}
                          >
                            <foreignObject x={0} y={0} width={578} height={318}>
                              <div
                                className="apexcharts-legend apexcharts-align-left apx-legend-position-top"
                                xmlns="http://www.w3.org/1999/xhtml"
                                style={{
                                  right: "0px",
                                  position: "absolute",
                                  left: "0px",
                                  top: "-5px",
                                  maxHeight: "159px",
                                }}
                              >
                                <div
                                  className="apexcharts-legend-series"
                                  rel={1}
                                  seriesname="Media"
                                  data:collapsed="false"
                                  style={{ margin: "2px 5px" }}
                                >
                                  <span
                                    className="apexcharts-legend-marker"
                                    rel={1}
                                    data:collapsed="false"
                                    style={{
                                      background: "rgb(60, 80, 224) !important",
                                      color: "rgb(60, 80, 224)",
                                      height: "16px",
                                      width: "16px",
                                      left: "0px",
                                      top: "0px",
                                      borderWidth: "0px",
                                      borderColor: "rgb(255, 255, 255)",
                                      borderRadius: "99px",
                                    }}
                                  />
                                  <span
                                    className="apexcharts-legend-text"
                                    rel={1}
                                    i={0}
                                    data:default-text="Media"
                                    data:collapsed="false"
                                    style={{
                                      color: "rgb(55, 61, 63)",
                                      fontSize: "16px",
                                      fontWeight: 500,
                                      fontFamily: "Satoshi",
                                    }}
                                  >
                                    Media
                                  </span>
                                </div>
                                <div
                                  className="apexcharts-legend-series"
                                  rel={2}
                                  seriesname="Photos"
                                  data:collapsed="false"
                                  style={{ margin: "2px 5px" }}
                                >
                                  <span
                                    className="apexcharts-legend-marker"
                                    rel={2}
                                    data:collapsed="false"
                                    style={{
                                      background:
                                        "rgb(19, 194, 150) !important",
                                      color: "rgb(19, 194, 150)",
                                      height: "16px",
                                      width: "16px",
                                      left: "0px",
                                      top: "0px",
                                      borderWidth: "0px",
                                      borderColor: "rgb(255, 255, 255)",
                                      borderRadius: "99px",
                                    }}
                                  />
                                  <span
                                    className="apexcharts-legend-text"
                                    rel={2}
                                    i={1}
                                    data:default-text="Photos"
                                    data:collapsed="false"
                                    style={{
                                      color: "rgb(55, 61, 63)",
                                      fontSize: "16px",
                                      fontWeight: 500,
                                      fontFamily: "Satoshi",
                                    }}
                                  >
                                    Photos
                                  </span>
                                </div>
                                <div
                                  className="apexcharts-legend-series"
                                  rel={3}
                                  seriesname="Docs"
                                  data:collapsed="false"
                                  style={{ margin: "2px 5px" }}
                                >
                                  <span
                                    className="apexcharts-legend-marker"
                                    rel={3}
                                    data:collapsed="false"
                                    style={{
                                      background:
                                        "rgb(242, 153, 74) !important",
                                      color: "rgb(242, 153, 74)",
                                      height: "16px",
                                      width: "16px",
                                      left: "0px",
                                      top: "0px",
                                      borderWidth: "0px",
                                      borderColor: "rgb(255, 255, 255)",
                                      borderRadius: "99px",
                                    }}
                                  />
                                  <span
                                    className="apexcharts-legend-text"
                                    rel={3}
                                    i={2}
                                    data:default-text="Docs"
                                    data:collapsed="false"
                                    style={{
                                      color: "rgb(55, 61, 63)",
                                      fontSize: "16px",
                                      fontWeight: 500,
                                      fontFamily: "Satoshi",
                                    }}
                                  >
                                    Docs
                                  </span>
                                </div>
                              </div>
                              <style
                                type="text/css"
                                dangerouslySetInnerHTML={{
                                  __html:
                                    "\t\n    \t\n      .apexcharts-legend {\t\n        display: flex;\t\n        overflow: auto;\t\n        padding: 0 10px;\t\n      }\t\n      .apexcharts-legend.apx-legend-position-bottom, .apexcharts-legend.apx-legend-position-top {\t\n        flex-wrap: wrap\t\n      }\t\n      .apexcharts-legend.apx-legend-position-right, .apexcharts-legend.apx-legend-position-left {\t\n        flex-direction: column;\t\n        bottom: 0;\t\n      }\t\n      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-left, .apexcharts-legend.apx-legend-position-top.apexcharts-align-left, .apexcharts-legend.apx-legend-position-right, .apexcharts-legend.apx-legend-position-left {\t\n        justify-content: flex-start;\t\n      }\t\n      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-center, .apexcharts-legend.apx-legend-position-top.apexcharts-align-center {\t\n        justify-content: center;  \t\n      }\t\n      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-right, .apexcharts-legend.apx-legend-position-top.apexcharts-align-right {\t\n        justify-content: flex-end;\t\n      }\t\n      .apexcharts-legend-series {\t\n        cursor: pointer;\t\n        line-height: normal;\t\n      }\t\n      .apexcharts-legend.apx-legend-position-bottom .apexcharts-legend-series, .apexcharts-legend.apx-legend-position-top .apexcharts-legend-series{\t\n        display: flex;\t\n        align-items: center;\t\n      }\t\n      .apexcharts-legend-text {\t\n        position: relative;\t\n        font-size: 14px;\t\n      }\t\n      .apexcharts-legend-text *, .apexcharts-legend-marker * {\t\n        pointer-events: none;\t\n      }\t\n      .apexcharts-legend-marker {\t\n        position: relative;\t\n        display: inline-block;\t\n        cursor: pointer;\t\n        margin-right: 3px;\t\n        border-style: solid;\n      }\t\n      \t\n      .apexcharts-legend.apexcharts-align-right .apexcharts-legend-series, .apexcharts-legend.apexcharts-align-left .apexcharts-legend-series{\t\n        display: inline-block;\t\n      }\t\n      .apexcharts-legend-series.apexcharts-no-click {\t\n        cursor: auto;\t\n      }\t\n      .apexcharts-legend .apexcharts-hidden-zero-series, .apexcharts-legend .apexcharts-hidden-null-series {\t\n        display: none !important;\t\n      }\t\n      .apexcharts-inactive-legend {\t\n        opacity: 0.45;\t\n      }",
                                }}
                              />
                            </foreignObject>
                            <g
                              id="SvgjsG3932"
                              className="apexcharts-annotations"
                            />
                            <g
                              id="SvgjsG4041"
                              className="apexcharts-yaxis"
                              rel={0}
                              transform="translate(18.9296875, 0)"
                            >
                              <g
                                id="SvgjsG4042"
                                className="apexcharts-yaxis-texts-g"
                              >
                                <text
                                  id="SvgjsText4044"
                                  fontFamily="Satoshi, sans-serif"
                                  x={20}
                                  y="57.4"
                                  textAnchor="end"
                                  dominantBaseline="auto"
                                  fontSize="11px"
                                  fontWeight={400}
                                  fill="#373d3f"
                                  className="apexcharts-text apexcharts-yaxis-label "
                                  style={{ fontFamily: "Satoshi, sans-serif" }}
                                >
                                  <tspan id="SvgjsTspan4045">400</tspan>
                                  <title>400</title>
                                </text>
                                <text
                                  id="SvgjsText4047"
                                  fontFamily="Satoshi, sans-serif"
                                  x={20}
                                  y="113.08250000000001"
                                  textAnchor="end"
                                  dominantBaseline="auto"
                                  fontSize="11px"
                                  fontWeight={400}
                                  fill="#373d3f"
                                  className="apexcharts-text apexcharts-yaxis-label "
                                  style={{ fontFamily: "Satoshi, sans-serif" }}
                                >
                                  <tspan id="SvgjsTspan4048">300</tspan>
                                  <title>300</title>
                                </text>
                                <text
                                  id="SvgjsText4050"
                                  fontFamily="Satoshi, sans-serif"
                                  x={20}
                                  y="168.76500000000001"
                                  textAnchor="end"
                                  dominantBaseline="auto"
                                  fontSize="11px"
                                  fontWeight={400}
                                  fill="#373d3f"
                                  className="apexcharts-text apexcharts-yaxis-label "
                                  style={{ fontFamily: "Satoshi, sans-serif" }}
                                >
                                  <tspan id="SvgjsTspan4051">200</tspan>
                                  <title>200</title>
                                </text>
                                <text
                                  id="SvgjsText4053"
                                  fontFamily="Satoshi, sans-serif"
                                  x={20}
                                  y="224.44750000000002"
                                  textAnchor="end"
                                  dominantBaseline="auto"
                                  fontSize="11px"
                                  fontWeight={400}
                                  fill="#373d3f"
                                  className="apexcharts-text apexcharts-yaxis-label "
                                  style={{ fontFamily: "Satoshi, sans-serif" }}
                                >
                                  <tspan id="SvgjsTspan4054">100</tspan>
                                  <title>100</title>
                                </text>
                                <text
                                  id="SvgjsText4056"
                                  fontFamily="Satoshi, sans-serif"
                                  x={20}
                                  y="280.13"
                                  textAnchor="end"
                                  dominantBaseline="auto"
                                  fontSize="11px"
                                  fontWeight={400}
                                  fill="#373d3f"
                                  className="apexcharts-text apexcharts-yaxis-label "
                                  style={{ fontFamily: "Satoshi, sans-serif" }}
                                >
                                  <tspan id="SvgjsTspan4057">0</tspan>
                                  <title>0</title>
                                </text>
                              </g>
                            </g>
                            <g
                              id="SvgjsG3931"
                              className="apexcharts-inner apexcharts-graphical"
                              transform="translate(48.9296875, 56)"
                            >
                              <defs id="SvgjsDefs3930">
                                <linearGradient
                                  id="SvgjsLinearGradient3935"
                                  x1={0}
                                  y1={0}
                                  x2={0}
                                  y2={1}
                                >
                                  <stop
                                    id="SvgjsStop3936"
                                    stopOpacity="0.4"
                                    stopColor="rgba(216,227,240,0.4)"
                                    offset={0}
                                  />
                                  <stop
                                    id="SvgjsStop3937"
                                    stopOpacity="0.5"
                                    stopColor="rgba(190,209,230,0.5)"
                                    offset={1}
                                  />
                                  <stop
                                    id="SvgjsStop3938"
                                    stopOpacity="0.5"
                                    stopColor="rgba(190,209,230,0.5)"
                                    offset={1}
                                  />
                                </linearGradient>
                                <clipPath id="gridRectMaskfk7urbxb">
                                  <rect
                                    id="SvgjsRect3940"
                                    width="527.0703125"
                                    height="226.73000000000002"
                                    x={-4}
                                    y={-2}
                                    rx={0}
                                    ry={0}
                                    opacity={1}
                                    strokeWidth={0}
                                    stroke="none"
                                    strokeDasharray={0}
                                    fill="#fff"
                                  />
                                </clipPath>
                                <clipPath id="forecastMaskfk7urbxb" />
                                <clipPath id="nonForecastMaskfk7urbxb" />
                                <clipPath id="gridRectMarkerMaskfk7urbxb">
                                  <rect
                                    id="SvgjsRect3941"
                                    width="523.0703125"
                                    height="226.73000000000002"
                                    x={-2}
                                    y={-2}
                                    rx={0}
                                    ry={0}
                                    opacity={1}
                                    strokeWidth={0}
                                    stroke="none"
                                    strokeDasharray={0}
                                    fill="#fff"
                                  />
                                </clipPath>
                              </defs>
                              <rect
                                id="SvgjsRect3939"
                                width="8.651171875000001"
                                height="222.73000000000002"
                                x={0}
                                y={0}
                                rx={0}
                                ry={0}
                                opacity={1}
                                strokeWidth={0}
                                strokeDasharray={3}
                                fill="url(#SvgjsLinearGradient3935)"
                                className="apexcharts-xcrosshairs"
                                y2="222.73000000000002"
                                filter="none"
                                fillOpacity="0.9"
                              />
                              <g id="SvgjsG3994" className="apexcharts-grid">
                                <g
                                  id="SvgjsG3995"
                                  className="apexcharts-gridlines-horizontal"
                                >
                                  <line
                                    id="SvgjsLine4007"
                                    x1={0}
                                    y1="55.682500000000005"
                                    x2="519.0703125"
                                    y2="55.682500000000005"
                                    stroke="#e0e0e0"
                                    strokeDasharray={7}
                                    strokeLinecap="butt"
                                    className="apexcharts-gridline"
                                  />
                                  <line
                                    id="SvgjsLine4008"
                                    x1={0}
                                    y1="111.36500000000001"
                                    x2="519.0703125"
                                    y2="111.36500000000001"
                                    stroke="#e0e0e0"
                                    strokeDasharray={7}
                                    strokeLinecap="butt"
                                    className="apexcharts-gridline"
                                  />
                                  <line
                                    id="SvgjsLine4009"
                                    x1={0}
                                    y1="167.0475"
                                    x2="519.0703125"
                                    y2="167.0475"
                                    stroke="#e0e0e0"
                                    strokeDasharray={7}
                                    strokeLinecap="butt"
                                    className="apexcharts-gridline"
                                  />
                                </g>
                                <g
                                  id="SvgjsG3996"
                                  className="apexcharts-gridlines-vertical"
                                >
                                  <line
                                    id="SvgjsLine3998"
                                    x1={0}
                                    y1={0}
                                    x2={0}
                                    y2="222.73000000000002"
                                    stroke="#e0e0e0"
                                    strokeDasharray={7}
                                    strokeLinecap="butt"
                                    className="apexcharts-gridline"
                                  />
                                  <line
                                    id="SvgjsLine3999"
                                    x1="74.15290178571429"
                                    y1={0}
                                    x2="74.15290178571429"
                                    y2="222.73000000000002"
                                    stroke="#e0e0e0"
                                    strokeDasharray={7}
                                    strokeLinecap="butt"
                                    className="apexcharts-gridline"
                                  />
                                  <line
                                    id="SvgjsLine4000"
                                    x1="148.30580357142858"
                                    y1={0}
                                    x2="148.30580357142858"
                                    y2="222.73000000000002"
                                    stroke="#e0e0e0"
                                    strokeDasharray={7}
                                    strokeLinecap="butt"
                                    className="apexcharts-gridline"
                                  />
                                  <line
                                    id="SvgjsLine4001"
                                    x1="222.4587053571429"
                                    y1={0}
                                    x2="222.4587053571429"
                                    y2="222.73000000000002"
                                    stroke="#e0e0e0"
                                    strokeDasharray={7}
                                    strokeLinecap="butt"
                                    className="apexcharts-gridline"
                                  />
                                  <line
                                    id="SvgjsLine4002"
                                    x1="296.61160714285717"
                                    y1={0}
                                    x2="296.61160714285717"
                                    y2="222.73000000000002"
                                    stroke="#e0e0e0"
                                    strokeDasharray={7}
                                    strokeLinecap="butt"
                                    className="apexcharts-gridline"
                                  />
                                  <line
                                    id="SvgjsLine4003"
                                    x1="370.76450892857144"
                                    y1={0}
                                    x2="370.76450892857144"
                                    y2="222.73000000000002"
                                    stroke="#e0e0e0"
                                    strokeDasharray={7}
                                    strokeLinecap="butt"
                                    className="apexcharts-gridline"
                                  />
                                  <line
                                    id="SvgjsLine4004"
                                    x1="444.9174107142857"
                                    y1={0}
                                    x2="444.9174107142857"
                                    y2="222.73000000000002"
                                    stroke="#e0e0e0"
                                    strokeDasharray={7}
                                    strokeLinecap="butt"
                                    className="apexcharts-gridline"
                                  />
                                  <line
                                    id="SvgjsLine4005"
                                    x1="519.0703125"
                                    y1={0}
                                    x2="519.0703125"
                                    y2="222.73000000000002"
                                    stroke="#e0e0e0"
                                    strokeDasharray={7}
                                    strokeLinecap="butt"
                                    className="apexcharts-gridline"
                                  />
                                </g>
                                <line
                                  id="SvgjsLine4012"
                                  x1={0}
                                  y1="222.73000000000002"
                                  x2="519.0703125"
                                  y2="222.73000000000002"
                                  stroke="transparent"
                                  strokeDasharray={0}
                                  strokeLinecap="butt"
                                />
                                <line
                                  id="SvgjsLine4011"
                                  x1={0}
                                  y1={1}
                                  x2={0}
                                  y2="222.73000000000002"
                                  stroke="transparent"
                                  strokeDasharray={0}
                                  strokeLinecap="butt"
                                />
                              </g>
                              <g
                                id="SvgjsG3997"
                                className="apexcharts-grid-borders"
                              >
                                <line
                                  id="SvgjsLine4006"
                                  x1={0}
                                  y1={0}
                                  x2="519.0703125"
                                  y2={0}
                                  stroke="#e0e0e0"
                                  strokeDasharray={7}
                                  strokeLinecap="butt"
                                  className="apexcharts-gridline"
                                />
                                <line
                                  id="SvgjsLine4010"
                                  x1={0}
                                  y1="222.73000000000002"
                                  x2="519.0703125"
                                  y2="222.73000000000002"
                                  stroke="#e0e0e0"
                                  strokeDasharray={7}
                                  strokeLinecap="butt"
                                  className="apexcharts-gridline"
                                />
                              </g>
                              <g
                                id="SvgjsG3942"
                                className="apexcharts-bar-series apexcharts-plot-series"
                              >
                                <g
                                  id="SvgjsG3943"
                                  className="apexcharts-series"
                                  rel={1}
                                  seriesname="Media"
                                  data:realindex={0}
                                >
                                  <path
                                    id="SvgjsPath3947"
                                    d="M 24.099693080357145 221.73100000000002 L 24.099693080357145 74.5019 C 24.099693080357145 74.0019 24.599693080357145 73.5019 25.099693080357145 73.5019 L 27.750864955357144 73.5019 C 28.250864955357144 73.5019 28.750864955357144 74.0019 28.750864955357144 74.5019 L 28.750864955357144 221.73100000000002 C 28.750864955357144 222.23100000000002 28.250864955357144 222.73100000000002 27.750864955357144 222.73100000000002 L 25.099693080357145 222.73100000000002 C 24.599693080357145 222.73100000000002 24.099693080357145 222.23100000000002 24.099693080357145 221.73100000000002 Z "
                                    fill="rgba(60,80,224,1)"
                                    fillOpacity={1}
                                    stroke="transparent"
                                    strokeOpacity={1}
                                    strokeLinecap="round"
                                    strokeWidth={4}
                                    strokeDasharray={0}
                                    className="apexcharts-bar-area"
                                    index={0}
                                    clipPath="url(#gridRectMaskfk7urbxb)"
                                    pathto="M 24.099693080357145 221.73100000000002 L 24.099693080357145 74.5019 C 24.099693080357145 74.0019 24.599693080357145 73.5019 25.099693080357145 73.5019 L 27.750864955357144 73.5019 C 28.250864955357144 73.5019 28.750864955357144 74.0019 28.750864955357144 74.5019 L 28.750864955357144 221.73100000000002 C 28.750864955357144 222.23100000000002 28.250864955357144 222.73100000000002 27.750864955357144 222.73100000000002 L 25.099693080357145 222.73100000000002 C 24.599693080357145 222.73100000000002 24.099693080357145 222.23100000000002 24.099693080357145 221.73100000000002 Z "
                                    pathfrom="M 24.099693080357145 222.73100000000002 L 24.099693080357145 222.73100000000002 L 28.750864955357144 222.73100000000002 L 28.750864955357144 222.73100000000002 L 28.750864955357144 222.73100000000002 L 28.750864955357144 222.73100000000002 L 28.750864955357144 222.73100000000002 L 24.099693080357145 222.73100000000002 Z"
                                    cy="73.5009"
                                    cx="96.25259486607143"
                                    j={0}
                                    val={268}
                                    barheight="149.22910000000002"
                                    barwidth="8.651171875000001"
                                  />
                                  <path
                                    id="SvgjsPath3949"
                                    d="M 98.25259486607143 221.73100000000002 L 98.25259486607143 9.353374999999994 C 98.25259486607143 8.853374999999994 98.75259486607143 8.353374999999994 99.25259486607143 8.353374999999994 L 101.90376674107144 8.353374999999994 C 102.40376674107144 8.353374999999994 102.90376674107144 8.853374999999994 102.90376674107144 9.353374999999994 L 102.90376674107144 221.73100000000002 C 102.90376674107144 222.23100000000002 102.40376674107144 222.73100000000002 101.90376674107144 222.73100000000002 L 99.25259486607143 222.73100000000002 C 98.75259486607143 222.73100000000002 98.25259486607143 222.23100000000002 98.25259486607143 221.73100000000002 Z "
                                    fill="rgba(60,80,224,1)"
                                    fillOpacity={1}
                                    stroke="transparent"
                                    strokeOpacity={1}
                                    strokeLinecap="round"
                                    strokeWidth={4}
                                    strokeDasharray={0}
                                    className="apexcharts-bar-area"
                                    index={0}
                                    clipPath="url(#gridRectMaskfk7urbxb)"
                                    pathto="M 98.25259486607143 221.73100000000002 L 98.25259486607143 9.353374999999994 C 98.25259486607143 8.853374999999994 98.75259486607143 8.353374999999994 99.25259486607143 8.353374999999994 L 101.90376674107144 8.353374999999994 C 102.40376674107144 8.353374999999994 102.90376674107144 8.853374999999994 102.90376674107144 9.353374999999994 L 102.90376674107144 221.73100000000002 C 102.90376674107144 222.23100000000002 102.40376674107144 222.73100000000002 101.90376674107144 222.73100000000002 L 99.25259486607143 222.73100000000002 C 98.75259486607143 222.73100000000002 98.25259486607143 222.23100000000002 98.25259486607143 221.73100000000002 Z "
                                    pathfrom="M 98.25259486607143 222.73100000000002 L 98.25259486607143 222.73100000000002 L 102.90376674107144 222.73100000000002 L 102.90376674107144 222.73100000000002 L 102.90376674107144 222.73100000000002 L 102.90376674107144 222.73100000000002 L 102.90376674107144 222.73100000000002 L 98.25259486607143 222.73100000000002 Z"
                                    cy="8.352374999999995"
                                    cx="170.4054966517857"
                                    j={1}
                                    val={385}
                                    barheight="214.37762500000002"
                                    barwidth="8.651171875000001"
                                  />
                                  <path
                                    id="SvgjsPath3951"
                                    d="M 172.4054966517857 221.73100000000002 L 172.4054966517857 111.80917500000001 C 172.4054966517857 111.30917500000001 172.9054966517857 110.80917500000001 173.4054966517857 110.80917500000001 L 176.0566685267857 110.80917500000001 C 176.5566685267857 110.80917500000001 177.0566685267857 111.30917500000001 177.0566685267857 111.80917500000001 L 177.0566685267857 221.73100000000002 C 177.0566685267857 222.23100000000002 176.5566685267857 222.73100000000002 176.0566685267857 222.73100000000002 L 173.4054966517857 222.73100000000002 C 172.9054966517857 222.73100000000002 172.4054966517857 222.23100000000002 172.4054966517857 221.73100000000002 Z "
                                    fill="rgba(60,80,224,1)"
                                    fillOpacity={1}
                                    stroke="transparent"
                                    strokeOpacity={1}
                                    strokeLinecap="round"
                                    strokeWidth={4}
                                    strokeDasharray={0}
                                    className="apexcharts-bar-area"
                                    index={0}
                                    clipPath="url(#gridRectMaskfk7urbxb)"
                                    pathto="M 172.4054966517857 221.73100000000002 L 172.4054966517857 111.80917500000001 C 172.4054966517857 111.30917500000001 172.9054966517857 110.80917500000001 173.4054966517857 110.80917500000001 L 176.0566685267857 110.80917500000001 C 176.5566685267857 110.80917500000001 177.0566685267857 111.30917500000001 177.0566685267857 111.80917500000001 L 177.0566685267857 221.73100000000002 C 177.0566685267857 222.23100000000002 176.5566685267857 222.73100000000002 176.0566685267857 222.73100000000002 L 173.4054966517857 222.73100000000002 C 172.9054966517857 222.73100000000002 172.4054966517857 222.23100000000002 172.4054966517857 221.73100000000002 Z "
                                    pathfrom="M 172.4054966517857 222.73100000000002 L 172.4054966517857 222.73100000000002 L 177.0566685267857 222.73100000000002 L 177.0566685267857 222.73100000000002 L 177.0566685267857 222.73100000000002 L 177.0566685267857 222.73100000000002 L 177.0566685267857 222.73100000000002 L 172.4054966517857 222.73100000000002 Z"
                                    cy="110.808175"
                                    cx="244.5583984375"
                                    j={2}
                                    val={201}
                                    barheight="111.92182500000001"
                                    barwidth="8.651171875000001"
                                  />
                                  <path
                                    id="SvgjsPath3953"
                                    d="M 246.5583984375 221.73100000000002 L 246.5583984375 57.79715000000001 C 246.5583984375 57.29715000000001 247.0583984375 56.79715000000001 247.5583984375 56.79715000000001 L 250.20957031249998 56.79715000000001 C 250.70957031249998 56.79715000000001 251.20957031249998 57.29715000000001 251.20957031249998 57.79715000000001 L 251.20957031249998 221.73100000000002 C 251.20957031249998 222.23100000000002 250.70957031249998 222.73100000000002 250.20957031249998 222.73100000000002 L 247.5583984375 222.73100000000002 C 247.0583984375 222.73100000000002 246.5583984375 222.23100000000002 246.5583984375 221.73100000000002 Z "
                                    fill="rgba(60,80,224,1)"
                                    fillOpacity={1}
                                    stroke="transparent"
                                    strokeOpacity={1}
                                    strokeLinecap="round"
                                    strokeWidth={4}
                                    strokeDasharray={0}
                                    className="apexcharts-bar-area"
                                    index={0}
                                    clipPath="url(#gridRectMaskfk7urbxb)"
                                    pathto="M 246.5583984375 221.73100000000002 L 246.5583984375 57.79715000000001 C 246.5583984375 57.29715000000001 247.0583984375 56.79715000000001 247.5583984375 56.79715000000001 L 250.20957031249998 56.79715000000001 C 250.70957031249998 56.79715000000001 251.20957031249998 57.29715000000001 251.20957031249998 57.79715000000001 L 251.20957031249998 221.73100000000002 C 251.20957031249998 222.23100000000002 250.70957031249998 222.73100000000002 250.20957031249998 222.73100000000002 L 247.5583984375 222.73100000000002 C 247.0583984375 222.73100000000002 246.5583984375 222.23100000000002 246.5583984375 221.73100000000002 Z "
                                    pathfrom="M 246.5583984375 222.73100000000002 L 246.5583984375 222.73100000000002 L 251.20957031249998 222.73100000000002 L 251.20957031249998 222.73100000000002 L 251.20957031249998 222.73100000000002 L 251.20957031249998 222.73100000000002 L 251.20957031249998 222.73100000000002 L 246.5583984375 222.73100000000002 Z"
                                    cy="56.79615000000001"
                                    cx="318.71130022321427"
                                    j={3}
                                    val={298}
                                    barheight="165.93385"
                                    barwidth="8.651171875000001"
                                  />
                                  <path
                                    id="SvgjsPath3955"
                                    d="M 320.71130022321427 221.73100000000002 L 320.71130022321427 119.60472500000002 C 320.71130022321427 119.10472500000002 321.21130022321427 118.60472500000002 321.71130022321427 118.60472500000002 L 324.36247209821425 118.60472500000002 C 324.86247209821425 118.60472500000002 325.36247209821425 119.10472500000002 325.36247209821425 119.60472500000002 L 325.36247209821425 221.73100000000002 C 325.36247209821425 222.23100000000002 324.86247209821425 222.73100000000002 324.36247209821425 222.73100000000002 L 321.71130022321427 222.73100000000002 C 321.21130022321427 222.73100000000002 320.71130022321427 222.23100000000002 320.71130022321427 221.73100000000002 Z "
                                    fill="rgba(60,80,224,1)"
                                    fillOpacity={1}
                                    stroke="transparent"
                                    strokeOpacity={1}
                                    strokeLinecap="round"
                                    strokeWidth={4}
                                    strokeDasharray={0}
                                    className="apexcharts-bar-area"
                                    index={0}
                                    clipPath="url(#gridRectMaskfk7urbxb)"
                                    pathto="M 320.71130022321427 221.73100000000002 L 320.71130022321427 119.60472500000002 C 320.71130022321427 119.10472500000002 321.21130022321427 118.60472500000002 321.71130022321427 118.60472500000002 L 324.36247209821425 118.60472500000002 C 324.86247209821425 118.60472500000002 325.36247209821425 119.10472500000002 325.36247209821425 119.60472500000002 L 325.36247209821425 221.73100000000002 C 325.36247209821425 222.23100000000002 324.86247209821425 222.73100000000002 324.36247209821425 222.73100000000002 L 321.71130022321427 222.73100000000002 C 321.21130022321427 222.73100000000002 320.71130022321427 222.23100000000002 320.71130022321427 221.73100000000002 Z "
                                    pathfrom="M 320.71130022321427 222.73100000000002 L 320.71130022321427 222.73100000000002 L 325.36247209821425 222.73100000000002 L 325.36247209821425 222.73100000000002 L 325.36247209821425 222.73100000000002 L 325.36247209821425 222.73100000000002 L 325.36247209821425 222.73100000000002 L 320.71130022321427 222.73100000000002 Z"
                                    cy="118.60372500000001"
                                    cx="392.86420200892854"
                                    j={4}
                                    val={187}
                                    barheight="104.126275"
                                    barwidth="8.651171875000001"
                                  />
                                  <path
                                    id="SvgjsPath3957"
                                    d="M 394.86420200892854 221.73100000000002 L 394.86420200892854 115.15012500000002 C 394.86420200892854 114.65012500000002 395.36420200892854 114.15012500000002 395.86420200892854 114.15012500000002 L 398.51537388392853 114.15012500000002 C 399.01537388392853 114.15012500000002 399.51537388392853 114.65012500000002 399.51537388392853 115.15012500000002 L 399.51537388392853 221.73100000000002 C 399.51537388392853 222.23100000000002 399.01537388392853 222.73100000000002 398.51537388392853 222.73100000000002 L 395.86420200892854 222.73100000000002 C 395.36420200892854 222.73100000000002 394.86420200892854 222.23100000000002 394.86420200892854 221.73100000000002 Z "
                                    fill="rgba(60,80,224,1)"
                                    fillOpacity={1}
                                    stroke="transparent"
                                    strokeOpacity={1}
                                    strokeLinecap="round"
                                    strokeWidth={4}
                                    strokeDasharray={0}
                                    className="apexcharts-bar-area"
                                    index={0}
                                    clipPath="url(#gridRectMaskfk7urbxb)"
                                    pathto="M 394.86420200892854 221.73100000000002 L 394.86420200892854 115.15012500000002 C 394.86420200892854 114.65012500000002 395.36420200892854 114.15012500000002 395.86420200892854 114.15012500000002 L 398.51537388392853 114.15012500000002 C 399.01537388392853 114.15012500000002 399.51537388392853 114.65012500000002 399.51537388392853 115.15012500000002 L 399.51537388392853 221.73100000000002 C 399.51537388392853 222.23100000000002 399.01537388392853 222.73100000000002 398.51537388392853 222.73100000000002 L 395.86420200892854 222.73100000000002 C 395.36420200892854 222.73100000000002 394.86420200892854 222.23100000000002 394.86420200892854 221.73100000000002 Z "
                                    pathfrom="M 394.86420200892854 222.73100000000002 L 394.86420200892854 222.73100000000002 L 399.51537388392853 222.73100000000002 L 399.51537388392853 222.73100000000002 L 399.51537388392853 222.73100000000002 L 399.51537388392853 222.73100000000002 L 399.51537388392853 222.73100000000002 L 394.86420200892854 222.73100000000002 Z"
                                    cy="114.14912500000001"
                                    cx="467.0171037946428"
                                    j={5}
                                    val={195}
                                    barheight="108.580875"
                                    barwidth="8.651171875000001"
                                  />
                                  <path
                                    id="SvgjsPath3959"
                                    d="M 469.0171037946428 221.73100000000002 L 469.0171037946428 61.694925000000005 C 469.0171037946428 61.194925000000005 469.5171037946428 60.694925000000005 470.0171037946428 60.694925000000005 L 472.6682756696428 60.694925000000005 C 473.1682756696428 60.694925000000005 473.6682756696428 61.194925000000005 473.6682756696428 61.694925000000005 L 473.6682756696428 221.73100000000002 C 473.6682756696428 222.23100000000002 473.1682756696428 222.73100000000002 472.6682756696428 222.73100000000002 L 470.0171037946428 222.73100000000002 C 469.5171037946428 222.73100000000002 469.0171037946428 222.23100000000002 469.0171037946428 221.73100000000002 Z "
                                    fill="rgba(60,80,224,1)"
                                    fillOpacity={1}
                                    stroke="transparent"
                                    strokeOpacity={1}
                                    strokeLinecap="round"
                                    strokeWidth={4}
                                    strokeDasharray={0}
                                    className="apexcharts-bar-area"
                                    index={0}
                                    clipPath="url(#gridRectMaskfk7urbxb)"
                                    pathto="M 469.0171037946428 221.73100000000002 L 469.0171037946428 61.694925000000005 C 469.0171037946428 61.194925000000005 469.5171037946428 60.694925000000005 470.0171037946428 60.694925000000005 L 472.6682756696428 60.694925000000005 C 473.1682756696428 60.694925000000005 473.6682756696428 61.194925000000005 473.6682756696428 61.694925000000005 L 473.6682756696428 221.73100000000002 C 473.6682756696428 222.23100000000002 473.1682756696428 222.73100000000002 472.6682756696428 222.73100000000002 L 470.0171037946428 222.73100000000002 C 469.5171037946428 222.73100000000002 469.0171037946428 222.23100000000002 469.0171037946428 221.73100000000002 Z "
                                    pathfrom="M 469.0171037946428 222.73100000000002 L 469.0171037946428 222.73100000000002 L 473.6682756696428 222.73100000000002 L 473.6682756696428 222.73100000000002 L 473.6682756696428 222.73100000000002 L 473.6682756696428 222.73100000000002 L 473.6682756696428 222.73100000000002 L 469.0171037946428 222.73100000000002 Z"
                                    cy="60.69392500000001"
                                    cx="541.1700055803572"
                                    j={6}
                                    val={291}
                                    barheight="162.036075"
                                    barwidth="8.651171875000001"
                                  />
                                  <g
                                    id="SvgjsG3945"
                                    className="apexcharts-bar-goals-markers"
                                    style={{ pointerEvents: "none" }}
                                  >
                                    <g
                                      id="SvgjsG3946"
                                      classname="apexcharts-bar-goals-groups"
                                    />
                                    <g
                                      id="SvgjsG3948"
                                      classname="apexcharts-bar-goals-groups"
                                    />
                                    <g
                                      id="SvgjsG3950"
                                      classname="apexcharts-bar-goals-groups"
                                    />
                                    <g
                                      id="SvgjsG3952"
                                      classname="apexcharts-bar-goals-groups"
                                    />
                                    <g
                                      id="SvgjsG3954"
                                      classname="apexcharts-bar-goals-groups"
                                    />
                                    <g
                                      id="SvgjsG3956"
                                      classname="apexcharts-bar-goals-groups"
                                    />
                                    <g
                                      id="SvgjsG3958"
                                      classname="apexcharts-bar-goals-groups"
                                    />
                                  </g>
                                </g>
                                <g
                                  id="SvgjsG3960"
                                  className="apexcharts-series"
                                  rel={2}
                                  seriesname="Photos"
                                  data:realindex={1}
                                >
                                  <path
                                    id="SvgjsPath3964"
                                    d="M 32.750864955357144 221.73100000000002 L 32.750864955357144 31.626374999999992 C 32.750864955357144 31.126374999999992 33.250864955357144 30.626374999999992 33.750864955357144 30.626374999999992 L 36.40203683035715 30.626374999999992 C 36.90203683035715 30.626374999999992 37.40203683035715 31.126374999999992 37.40203683035715 31.626374999999992 L 37.40203683035715 221.73100000000002 C 37.40203683035715 222.23100000000002 36.90203683035715 222.73100000000002 36.40203683035715 222.73100000000002 L 33.750864955357144 222.73100000000002 C 33.250864955357144 222.73100000000002 32.750864955357144 222.23100000000002 32.750864955357144 221.73100000000002 Z "
                                    fill="rgba(19,194,150,1)"
                                    fillOpacity={1}
                                    stroke="transparent"
                                    strokeOpacity={1}
                                    strokeLinecap="round"
                                    strokeWidth={4}
                                    strokeDasharray={0}
                                    className="apexcharts-bar-area"
                                    index={1}
                                    clipPath="url(#gridRectMaskfk7urbxb)"
                                    pathto="M 32.750864955357144 221.73100000000002 L 32.750864955357144 31.626374999999992 C 32.750864955357144 31.126374999999992 33.250864955357144 30.626374999999992 33.750864955357144 30.626374999999992 L 36.40203683035715 30.626374999999992 C 36.90203683035715 30.626374999999992 37.40203683035715 31.126374999999992 37.40203683035715 31.626374999999992 L 37.40203683035715 221.73100000000002 C 37.40203683035715 222.23100000000002 36.90203683035715 222.73100000000002 36.40203683035715 222.73100000000002 L 33.750864955357144 222.73100000000002 C 33.250864955357144 222.73100000000002 32.750864955357144 222.23100000000002 32.750864955357144 221.73100000000002 Z "
                                    pathfrom="M 32.750864955357144 222.73100000000002 L 32.750864955357144 222.73100000000002 L 37.40203683035715 222.73100000000002 L 37.40203683035715 222.73100000000002 L 37.40203683035715 222.73100000000002 L 37.40203683035715 222.73100000000002 L 37.40203683035715 222.73100000000002 L 32.750864955357144 222.73100000000002 Z"
                                    cy="30.62537499999999"
                                    cx="104.90376674107144"
                                    j={0}
                                    val={345}
                                    barheight="192.10462500000003"
                                    barwidth="8.651171875000001"
                                  />
                                  <path
                                    id="SvgjsPath3966"
                                    d="M 106.90376674107144 221.73100000000002 L 106.90376674107144 134.639 C 106.90376674107144 134.139 107.40376674107144 133.639 107.90376674107144 133.639 L 110.55493861607144 133.639 C 111.05493861607144 133.639 111.55493861607144 134.139 111.55493861607144 134.639 L 111.55493861607144 221.73100000000002 C 111.55493861607144 222.23100000000002 111.05493861607144 222.73100000000002 110.55493861607144 222.73100000000002 L 107.90376674107144 222.73100000000002 C 107.40376674107144 222.73100000000002 106.90376674107144 222.23100000000002 106.90376674107144 221.73100000000002 Z "
                                    fill="rgba(19,194,150,1)"
                                    fillOpacity={1}
                                    stroke="transparent"
                                    strokeOpacity={1}
                                    strokeLinecap="round"
                                    strokeWidth={4}
                                    strokeDasharray={0}
                                    className="apexcharts-bar-area"
                                    index={1}
                                    clipPath="url(#gridRectMaskfk7urbxb)"
                                    pathto="M 106.90376674107144 221.73100000000002 L 106.90376674107144 134.639 C 106.90376674107144 134.139 107.40376674107144 133.639 107.90376674107144 133.639 L 110.55493861607144 133.639 C 111.05493861607144 133.639 111.55493861607144 134.139 111.55493861607144 134.639 L 111.55493861607144 221.73100000000002 C 111.55493861607144 222.23100000000002 111.05493861607144 222.73100000000002 110.55493861607144 222.73100000000002 L 107.90376674107144 222.73100000000002 C 107.40376674107144 222.73100000000002 106.90376674107144 222.23100000000002 106.90376674107144 221.73100000000002 Z "
                                    pathfrom="M 106.90376674107144 222.73100000000002 L 106.90376674107144 222.73100000000002 L 111.55493861607144 222.73100000000002 L 111.55493861607144 222.73100000000002 L 111.55493861607144 222.73100000000002 L 111.55493861607144 222.73100000000002 L 111.55493861607144 222.73100000000002 L 106.90376674107144 222.73100000000002 Z"
                                    cy="133.638"
                                    cx="179.0566685267857"
                                    j={1}
                                    val={160}
                                    barheight="89.09200000000001"
                                    barwidth="8.651171875000001"
                                  />
                                  <path
                                    id="SvgjsPath3968"
                                    d="M 181.0566685267857 221.73100000000002 L 181.0566685267857 61.694925000000005 C 181.0566685267857 61.194925000000005 181.5566685267857 60.694925000000005 182.0566685267857 60.694925000000005 L 184.7078404017857 60.694925000000005 C 185.2078404017857 60.694925000000005 185.7078404017857 61.194925000000005 185.7078404017857 61.694925000000005 L 185.7078404017857 221.73100000000002 C 185.7078404017857 222.23100000000002 185.2078404017857 222.73100000000002 184.7078404017857 222.73100000000002 L 182.0566685267857 222.73100000000002 C 181.5566685267857 222.73100000000002 181.0566685267857 222.23100000000002 181.0566685267857 221.73100000000002 Z "
                                    fill="rgba(19,194,150,1)"
                                    fillOpacity={1}
                                    stroke="transparent"
                                    strokeOpacity={1}
                                    strokeLinecap="round"
                                    strokeWidth={4}
                                    strokeDasharray={0}
                                    className="apexcharts-bar-area"
                                    index={1}
                                    clipPath="url(#gridRectMaskfk7urbxb)"
                                    pathto="M 181.0566685267857 221.73100000000002 L 181.0566685267857 61.694925000000005 C 181.0566685267857 61.194925000000005 181.5566685267857 60.694925000000005 182.0566685267857 60.694925000000005 L 184.7078404017857 60.694925000000005 C 185.2078404017857 60.694925000000005 185.7078404017857 61.194925000000005 185.7078404017857 61.694925000000005 L 185.7078404017857 221.73100000000002 C 185.7078404017857 222.23100000000002 185.2078404017857 222.73100000000002 184.7078404017857 222.73100000000002 L 182.0566685267857 222.73100000000002 C 181.5566685267857 222.73100000000002 181.0566685267857 222.23100000000002 181.0566685267857 221.73100000000002 Z "
                                    pathfrom="M 181.0566685267857 222.73100000000002 L 181.0566685267857 222.73100000000002 L 185.7078404017857 222.73100000000002 L 185.7078404017857 222.73100000000002 L 185.7078404017857 222.73100000000002 L 185.7078404017857 222.73100000000002 L 185.7078404017857 222.73100000000002 L 181.0566685267857 222.73100000000002 Z"
                                    cy="60.69392500000001"
                                    cx="253.20957031249998"
                                    j={2}
                                    val={291}
                                    barheight="162.036075"
                                    barwidth="8.651171875000001"
                                  />
                                  <path
                                    id="SvgjsPath3970"
                                    d="M 255.20957031249998 221.73100000000002 L 255.20957031249998 119.60472500000002 C 255.20957031249998 119.10472500000002 255.70957031249998 118.60472500000002 256.2095703125 118.60472500000002 L 258.86074218749997 118.60472500000002 C 259.36074218749997 118.60472500000002 259.86074218749997 119.10472500000002 259.86074218749997 119.60472500000002 L 259.86074218749997 221.73100000000002 C 259.86074218749997 222.23100000000002 259.36074218749997 222.73100000000002 258.86074218749997 222.73100000000002 L 256.2095703125 222.73100000000002 C 255.70957031249998 222.73100000000002 255.20957031249998 222.23100000000002 255.20957031249998 221.73100000000002 Z "
                                    fill="rgba(19,194,150,1)"
                                    fillOpacity={1}
                                    stroke="transparent"
                                    strokeOpacity={1}
                                    strokeLinecap="round"
                                    strokeWidth={4}
                                    strokeDasharray={0}
                                    className="apexcharts-bar-area"
                                    index={1}
                                    clipPath="url(#gridRectMaskfk7urbxb)"
                                    pathto="M 255.20957031249998 221.73100000000002 L 255.20957031249998 119.60472500000002 C 255.20957031249998 119.10472500000002 255.70957031249998 118.60472500000002 256.2095703125 118.60472500000002 L 258.86074218749997 118.60472500000002 C 259.36074218749997 118.60472500000002 259.86074218749997 119.10472500000002 259.86074218749997 119.60472500000002 L 259.86074218749997 221.73100000000002 C 259.86074218749997 222.23100000000002 259.36074218749997 222.73100000000002 258.86074218749997 222.73100000000002 L 256.2095703125 222.73100000000002 C 255.70957031249998 222.73100000000002 255.20957031249998 222.23100000000002 255.20957031249998 221.73100000000002 Z "
                                    pathfrom="M 255.20957031249998 222.73100000000002 L 255.20957031249998 222.73100000000002 L 259.86074218749997 222.73100000000002 L 259.86074218749997 222.73100000000002 L 259.86074218749997 222.73100000000002 L 259.86074218749997 222.73100000000002 L 259.86074218749997 222.73100000000002 L 255.20957031249998 222.73100000000002 Z"
                                    cy="118.60372500000001"
                                    cx="327.36247209821425"
                                    j={3}
                                    val={187}
                                    barheight="104.126275"
                                    barwidth="8.651171875000001"
                                  />
                                  <path
                                    id="SvgjsPath3972"
                                    d="M 329.36247209821425 221.73100000000002 L 329.36247209821425 115.15012500000002 C 329.36247209821425 114.65012500000002 329.86247209821425 114.15012500000002 330.36247209821425 114.15012500000002 L 333.01364397321424 114.15012500000002 C 333.51364397321424 114.15012500000002 334.01364397321424 114.65012500000002 334.01364397321424 115.15012500000002 L 334.01364397321424 221.73100000000002 C 334.01364397321424 222.23100000000002 333.51364397321424 222.73100000000002 333.01364397321424 222.73100000000002 L 330.36247209821425 222.73100000000002 C 329.86247209821425 222.73100000000002 329.36247209821425 222.23100000000002 329.36247209821425 221.73100000000002 Z "
                                    fill="rgba(19,194,150,1)"
                                    fillOpacity={1}
                                    stroke="transparent"
                                    strokeOpacity={1}
                                    strokeLinecap="round"
                                    strokeWidth={4}
                                    strokeDasharray={0}
                                    className="apexcharts-bar-area"
                                    index={1}
                                    clipPath="url(#gridRectMaskfk7urbxb)"
                                    pathto="M 329.36247209821425 221.73100000000002 L 329.36247209821425 115.15012500000002 C 329.36247209821425 114.65012500000002 329.86247209821425 114.15012500000002 330.36247209821425 114.15012500000002 L 333.01364397321424 114.15012500000002 C 333.51364397321424 114.15012500000002 334.01364397321424 114.65012500000002 334.01364397321424 115.15012500000002 L 334.01364397321424 221.73100000000002 C 334.01364397321424 222.23100000000002 333.51364397321424 222.73100000000002 333.01364397321424 222.73100000000002 L 330.36247209821425 222.73100000000002 C 329.86247209821425 222.73100000000002 329.36247209821425 222.23100000000002 329.36247209821425 221.73100000000002 Z "
                                    pathfrom="M 329.36247209821425 222.73100000000002 L 329.36247209821425 222.73100000000002 L 334.01364397321424 222.73100000000002 L 334.01364397321424 222.73100000000002 L 334.01364397321424 222.73100000000002 L 334.01364397321424 222.73100000000002 L 334.01364397321424 222.73100000000002 L 329.36247209821425 222.73100000000002 Z"
                                    cy="114.14912500000001"
                                    cx="401.51537388392853"
                                    j={4}
                                    val={195}
                                    barheight="108.580875"
                                    barwidth="8.651171875000001"
                                  />
                                  <path
                                    id="SvgjsPath3974"
                                    d="M 403.51537388392853 221.73100000000002 L 403.51537388392853 57.79715000000001 C 403.51537388392853 57.29715000000001 404.01537388392853 56.79715000000001 404.51537388392853 56.79715000000001 L 407.1665457589285 56.79715000000001 C 407.6665457589285 56.79715000000001 408.1665457589285 57.29715000000001 408.1665457589285 57.79715000000001 L 408.1665457589285 221.73100000000002 C 408.1665457589285 222.23100000000002 407.6665457589285 222.73100000000002 407.1665457589285 222.73100000000002 L 404.51537388392853 222.73100000000002 C 404.01537388392853 222.73100000000002 403.51537388392853 222.23100000000002 403.51537388392853 221.73100000000002 Z "
                                    fill="rgba(19,194,150,1)"
                                    fillOpacity={1}
                                    stroke="transparent"
                                    strokeOpacity={1}
                                    strokeLinecap="round"
                                    strokeWidth={4}
                                    strokeDasharray={0}
                                    className="apexcharts-bar-area"
                                    index={1}
                                    clipPath="url(#gridRectMaskfk7urbxb)"
                                    pathto="M 403.51537388392853 221.73100000000002 L 403.51537388392853 57.79715000000001 C 403.51537388392853 57.29715000000001 404.01537388392853 56.79715000000001 404.51537388392853 56.79715000000001 L 407.1665457589285 56.79715000000001 C 407.6665457589285 56.79715000000001 408.1665457589285 57.29715000000001 408.1665457589285 57.79715000000001 L 408.1665457589285 221.73100000000002 C 408.1665457589285 222.23100000000002 407.6665457589285 222.73100000000002 407.1665457589285 222.73100000000002 L 404.51537388392853 222.73100000000002 C 404.01537388392853 222.73100000000002 403.51537388392853 222.23100000000002 403.51537388392853 221.73100000000002 Z "
                                    pathfrom="M 403.51537388392853 222.73100000000002 L 403.51537388392853 222.73100000000002 L 408.1665457589285 222.73100000000002 L 408.1665457589285 222.73100000000002 L 408.1665457589285 222.73100000000002 L 408.1665457589285 222.73100000000002 L 408.1665457589285 222.73100000000002 L 403.51537388392853 222.73100000000002 Z"
                                    cy="56.79615000000001"
                                    cx="475.6682756696428"
                                    j={5}
                                    val={298}
                                    barheight="165.93385"
                                    barwidth="8.651171875000001"
                                  />
                                  <path
                                    id="SvgjsPath3976"
                                    d="M 477.6682756696428 221.73100000000002 L 477.6682756696428 111.80917500000001 C 477.6682756696428 111.30917500000001 478.1682756696428 110.80917500000001 478.6682756696428 110.80917500000001 L 481.3194475446428 110.80917500000001 C 481.8194475446428 110.80917500000001 482.3194475446428 111.30917500000001 482.3194475446428 111.80917500000001 L 482.3194475446428 221.73100000000002 C 482.3194475446428 222.23100000000002 481.8194475446428 222.73100000000002 481.3194475446428 222.73100000000002 L 478.6682756696428 222.73100000000002 C 478.1682756696428 222.73100000000002 477.6682756696428 222.23100000000002 477.6682756696428 221.73100000000002 Z "
                                    fill="rgba(19,194,150,1)"
                                    fillOpacity={1}
                                    stroke="transparent"
                                    strokeOpacity={1}
                                    strokeLinecap="round"
                                    strokeWidth={4}
                                    strokeDasharray={0}
                                    className="apexcharts-bar-area"
                                    index={1}
                                    clipPath="url(#gridRectMaskfk7urbxb)"
                                    pathto="M 477.6682756696428 221.73100000000002 L 477.6682756696428 111.80917500000001 C 477.6682756696428 111.30917500000001 478.1682756696428 110.80917500000001 478.6682756696428 110.80917500000001 L 481.3194475446428 110.80917500000001 C 481.8194475446428 110.80917500000001 482.3194475446428 111.30917500000001 482.3194475446428 111.80917500000001 L 482.3194475446428 221.73100000000002 C 482.3194475446428 222.23100000000002 481.8194475446428 222.73100000000002 481.3194475446428 222.73100000000002 L 478.6682756696428 222.73100000000002 C 478.1682756696428 222.73100000000002 477.6682756696428 222.23100000000002 477.6682756696428 221.73100000000002 Z "
                                    pathfrom="M 477.6682756696428 222.73100000000002 L 477.6682756696428 222.73100000000002 L 482.3194475446428 222.73100000000002 L 482.3194475446428 222.73100000000002 L 482.3194475446428 222.73100000000002 L 482.3194475446428 222.73100000000002 L 482.3194475446428 222.73100000000002 L 477.6682756696428 222.73100000000002 Z"
                                    cy="110.808175"
                                    cx="549.8211774553572"
                                    j={6}
                                    val={201}
                                    barheight="111.92182500000001"
                                    barwidth="8.651171875000001"
                                  />
                                  <g
                                    id="SvgjsG3962"
                                    className="apexcharts-bar-goals-markers"
                                    style={{ pointerEvents: "none" }}
                                  >
                                    <g
                                      id="SvgjsG3963"
                                      classname="apexcharts-bar-goals-groups"
                                    />
                                    <g
                                      id="SvgjsG3965"
                                      classname="apexcharts-bar-goals-groups"
                                    />
                                    <g
                                      id="SvgjsG3967"
                                      classname="apexcharts-bar-goals-groups"
                                    />
                                    <g
                                      id="SvgjsG3969"
                                      classname="apexcharts-bar-goals-groups"
                                    />
                                    <g
                                      id="SvgjsG3971"
                                      classname="apexcharts-bar-goals-groups"
                                    />
                                    <g
                                      id="SvgjsG3973"
                                      classname="apexcharts-bar-goals-groups"
                                    />
                                    <g
                                      id="SvgjsG3975"
                                      classname="apexcharts-bar-goals-groups"
                                    />
                                  </g>
                                </g>
                                <g
                                  id="SvgjsG3977"
                                  className="apexcharts-series"
                                  rel={3}
                                  seriesname="Docs"
                                  data:realindex={2}
                                >
                                  <path
                                    id="SvgjsPath3981"
                                    d="M 41.40203683035715 221.73100000000002 L 41.40203683035715 115.15012500000002 C 41.40203683035715 114.65012500000002 41.90203683035715 114.15012500000002 42.40203683035715 114.15012500000002 L 45.05320870535715 114.15012500000002 C 45.55320870535715 114.15012500000002 46.05320870535715 114.65012500000002 46.05320870535715 115.15012500000002 L 46.05320870535715 221.73100000000002 C 46.05320870535715 222.23100000000002 45.55320870535715 222.73100000000002 45.05320870535715 222.73100000000002 L 42.40203683035715 222.73100000000002 C 41.90203683035715 222.73100000000002 41.40203683035715 222.23100000000002 41.40203683035715 221.73100000000002 Z "
                                    fill="rgba(242,153,74,1)"
                                    fillOpacity={1}
                                    stroke="transparent"
                                    strokeOpacity={1}
                                    strokeLinecap="round"
                                    strokeWidth={4}
                                    strokeDasharray={0}
                                    className="apexcharts-bar-area"
                                    index={2}
                                    clipPath="url(#gridRectMaskfk7urbxb)"
                                    pathto="M 41.40203683035715 221.73100000000002 L 41.40203683035715 115.15012500000002 C 41.40203683035715 114.65012500000002 41.90203683035715 114.15012500000002 42.40203683035715 114.15012500000002 L 45.05320870535715 114.15012500000002 C 45.55320870535715 114.15012500000002 46.05320870535715 114.65012500000002 46.05320870535715 115.15012500000002 L 46.05320870535715 221.73100000000002 C 46.05320870535715 222.23100000000002 45.55320870535715 222.73100000000002 45.05320870535715 222.73100000000002 L 42.40203683035715 222.73100000000002 C 41.90203683035715 222.73100000000002 41.40203683035715 222.23100000000002 41.40203683035715 221.73100000000002 Z "
                                    pathfrom="M 41.40203683035715 222.73100000000002 L 41.40203683035715 222.73100000000002 L 46.05320870535715 222.73100000000002 L 46.05320870535715 222.73100000000002 L 46.05320870535715 222.73100000000002 L 46.05320870535715 222.73100000000002 L 46.05320870535715 222.73100000000002 L 41.40203683035715 222.73100000000002 Z"
                                    cy="114.14912500000001"
                                    cx="113.55493861607144"
                                    j={0}
                                    val={195}
                                    barheight="108.580875"
                                    barwidth="8.651171875000001"
                                  />
                                  <path
                                    id="SvgjsPath3983"
                                    d="M 115.55493861607144 221.73100000000002 L 115.55493861607144 78.9565 C 115.55493861607144 78.4565 116.05493861607144 77.9565 116.55493861607144 77.9565 L 119.20611049107144 77.9565 C 119.70611049107144 77.9565 120.20611049107144 78.4565 120.20611049107144 78.9565 L 120.20611049107144 221.73100000000002 C 120.20611049107144 222.23100000000002 119.70611049107144 222.73100000000002 119.20611049107144 222.73100000000002 L 116.55493861607144 222.73100000000002 C 116.05493861607144 222.73100000000002 115.55493861607144 222.23100000000002 115.55493861607144 221.73100000000002 Z "
                                    fill="rgba(242,153,74,1)"
                                    fillOpacity={1}
                                    stroke="transparent"
                                    strokeOpacity={1}
                                    strokeLinecap="round"
                                    strokeWidth={4}
                                    strokeDasharray={0}
                                    className="apexcharts-bar-area"
                                    index={2}
                                    clipPath="url(#gridRectMaskfk7urbxb)"
                                    pathto="M 115.55493861607144 221.73100000000002 L 115.55493861607144 78.9565 C 115.55493861607144 78.4565 116.05493861607144 77.9565 116.55493861607144 77.9565 L 119.20611049107144 77.9565 C 119.70611049107144 77.9565 120.20611049107144 78.4565 120.20611049107144 78.9565 L 120.20611049107144 221.73100000000002 C 120.20611049107144 222.23100000000002 119.70611049107144 222.73100000000002 119.20611049107144 222.73100000000002 L 116.55493861607144 222.73100000000002 C 116.05493861607144 222.73100000000002 115.55493861607144 222.23100000000002 115.55493861607144 221.73100000000002 Z "
                                    pathfrom="M 115.55493861607144 222.73100000000002 L 115.55493861607144 222.73100000000002 L 120.20611049107144 222.73100000000002 L 120.20611049107144 222.73100000000002 L 120.20611049107144 222.73100000000002 L 120.20611049107144 222.73100000000002 L 120.20611049107144 222.73100000000002 L 115.55493861607144 222.73100000000002 Z"
                                    cy="77.9555"
                                    cx="187.70784040178572"
                                    j={1}
                                    val={260}
                                    barheight="144.77450000000002"
                                    barwidth="8.651171875000001"
                                  />
                                  <path
                                    id="SvgjsPath3985"
                                    d="M 189.70784040178572 221.73100000000002 L 189.70784040178572 117.37742500000002 C 189.70784040178572 116.87742500000002 190.20784040178572 116.37742500000002 190.70784040178572 116.37742500000002 L 193.3590122767857 116.37742500000002 C 193.8590122767857 116.37742500000002 194.3590122767857 116.87742500000002 194.3590122767857 117.37742500000002 L 194.3590122767857 221.73100000000002 C 194.3590122767857 222.23100000000002 193.8590122767857 222.73100000000002 193.3590122767857 222.73100000000002 L 190.70784040178572 222.73100000000002 C 190.20784040178572 222.73100000000002 189.70784040178572 222.23100000000002 189.70784040178572 221.73100000000002 Z "
                                    fill="rgba(242,153,74,1)"
                                    fillOpacity={1}
                                    stroke="transparent"
                                    strokeOpacity={1}
                                    strokeLinecap="round"
                                    strokeWidth={4}
                                    strokeDasharray={0}
                                    className="apexcharts-bar-area"
                                    index={2}
                                    clipPath="url(#gridRectMaskfk7urbxb)"
                                    pathto="M 189.70784040178572 221.73100000000002 L 189.70784040178572 117.37742500000002 C 189.70784040178572 116.87742500000002 190.20784040178572 116.37742500000002 190.70784040178572 116.37742500000002 L 193.3590122767857 116.37742500000002 C 193.8590122767857 116.37742500000002 194.3590122767857 116.87742500000002 194.3590122767857 117.37742500000002 L 194.3590122767857 221.73100000000002 C 194.3590122767857 222.23100000000002 193.8590122767857 222.73100000000002 193.3590122767857 222.73100000000002 L 190.70784040178572 222.73100000000002 C 190.20784040178572 222.73100000000002 189.70784040178572 222.23100000000002 189.70784040178572 221.73100000000002 Z "
                                    pathfrom="M 189.70784040178572 222.73100000000002 L 189.70784040178572 222.73100000000002 L 194.3590122767857 222.73100000000002 L 194.3590122767857 222.73100000000002 L 194.3590122767857 222.73100000000002 L 194.3590122767857 222.73100000000002 L 194.3590122767857 222.73100000000002 L 189.70784040178572 222.73100000000002 Z"
                                    cy="116.37642500000001"
                                    cx="261.86074218749997"
                                    j={2}
                                    val={191}
                                    barheight="106.353575"
                                    barwidth="8.651171875000001"
                                  />
                                  <path
                                    id="SvgjsPath3987"
                                    d="M 263.86074218749997 221.73100000000002 L 263.86074218749997 80.07015000000001 C 263.86074218749997 79.57015000000001 264.36074218749997 79.07015000000001 264.86074218749997 79.07015000000001 L 267.51191406249995 79.07015000000001 C 268.01191406249995 79.07015000000001 268.51191406249995 79.57015000000001 268.51191406249995 80.07015000000001 L 268.51191406249995 221.73100000000002 C 268.51191406249995 222.23100000000002 268.01191406249995 222.73100000000002 267.51191406249995 222.73100000000002 L 264.86074218749997 222.73100000000002 C 264.36074218749997 222.73100000000002 263.86074218749997 222.23100000000002 263.86074218749997 221.73100000000002 Z "
                                    fill="rgba(242,153,74,1)"
                                    fillOpacity={1}
                                    stroke="transparent"
                                    strokeOpacity={1}
                                    strokeLinecap="round"
                                    strokeWidth={4}
                                    strokeDasharray={0}
                                    className="apexcharts-bar-area"
                                    index={2}
                                    clipPath="url(#gridRectMaskfk7urbxb)"
                                    pathto="M 263.86074218749997 221.73100000000002 L 263.86074218749997 80.07015000000001 C 263.86074218749997 79.57015000000001 264.36074218749997 79.07015000000001 264.86074218749997 79.07015000000001 L 267.51191406249995 79.07015000000001 C 268.01191406249995 79.07015000000001 268.51191406249995 79.57015000000001 268.51191406249995 80.07015000000001 L 268.51191406249995 221.73100000000002 C 268.51191406249995 222.23100000000002 268.01191406249995 222.73100000000002 267.51191406249995 222.73100000000002 L 264.86074218749997 222.73100000000002 C 264.36074218749997 222.73100000000002 263.86074218749997 222.23100000000002 263.86074218749997 221.73100000000002 Z "
                                    pathfrom="M 263.86074218749997 222.73100000000002 L 263.86074218749997 222.73100000000002 L 268.51191406249995 222.73100000000002 L 268.51191406249995 222.73100000000002 L 268.51191406249995 222.73100000000002 L 268.51191406249995 222.73100000000002 L 268.51191406249995 222.73100000000002 L 263.86074218749997 222.73100000000002 Z"
                                    cy="79.06915000000001"
                                    cx="336.01364397321424"
                                    j={3}
                                    val={258}
                                    barheight="143.66085"
                                    barwidth="8.651171875000001"
                                  />
                                  <path
                                    id="SvgjsPath3989"
                                    d="M 338.01364397321424 221.73100000000002 L 338.01364397321424 76.17237500000002 C 338.01364397321424 75.67237500000002 338.51364397321424 75.17237500000002 339.01364397321424 75.17237500000002 L 341.66481584821423 75.17237500000002 C 342.16481584821423 75.17237500000002 342.66481584821423 75.67237500000002 342.66481584821423 76.17237500000002 L 342.66481584821423 221.73100000000002 C 342.66481584821423 222.23100000000002 342.16481584821423 222.73100000000002 341.66481584821423 222.73100000000002 L 339.01364397321424 222.73100000000002 C 338.51364397321424 222.73100000000002 338.01364397321424 222.23100000000002 338.01364397321424 221.73100000000002 Z "
                                    fill="rgba(242,153,74,1)"
                                    fillOpacity={1}
                                    stroke="transparent"
                                    strokeOpacity={1}
                                    strokeLinecap="round"
                                    strokeWidth={4}
                                    strokeDasharray={0}
                                    className="apexcharts-bar-area"
                                    index={2}
                                    clipPath="url(#gridRectMaskfk7urbxb)"
                                    pathto="M 338.01364397321424 221.73100000000002 L 338.01364397321424 76.17237500000002 C 338.01364397321424 75.67237500000002 338.51364397321424 75.17237500000002 339.01364397321424 75.17237500000002 L 341.66481584821423 75.17237500000002 C 342.16481584821423 75.17237500000002 342.66481584821423 75.67237500000002 342.66481584821423 76.17237500000002 L 342.66481584821423 221.73100000000002 C 342.66481584821423 222.23100000000002 342.16481584821423 222.73100000000002 341.66481584821423 222.73100000000002 L 339.01364397321424 222.73100000000002 C 338.51364397321424 222.73100000000002 338.01364397321424 222.23100000000002 338.01364397321424 221.73100000000002 Z "
                                    pathfrom="M 338.01364397321424 222.73100000000002 L 338.01364397321424 222.73100000000002 L 342.66481584821423 222.73100000000002 L 342.66481584821423 222.73100000000002 L 342.66481584821423 222.73100000000002 L 342.66481584821423 222.73100000000002 L 342.66481584821423 222.73100000000002 L 338.01364397321424 222.73100000000002 Z"
                                    cy="75.17137500000001"
                                    cx="410.1665457589285"
                                    j={4}
                                    val={265}
                                    barheight="147.558625"
                                    barwidth="8.651171875000001"
                                  />
                                  <path
                                    id="SvgjsPath3991"
                                    d="M 412.1665457589285 221.73100000000002 L 412.1665457589285 134.639 C 412.1665457589285 134.139 412.6665457589285 133.639 413.1665457589285 133.639 L 415.8177176339285 133.639 C 416.3177176339285 133.639 416.8177176339285 134.139 416.8177176339285 134.639 L 416.8177176339285 221.73100000000002 C 416.8177176339285 222.23100000000002 416.3177176339285 222.73100000000002 415.8177176339285 222.73100000000002 L 413.1665457589285 222.73100000000002 C 412.6665457589285 222.73100000000002 412.1665457589285 222.23100000000002 412.1665457589285 221.73100000000002 Z "
                                    fill="rgba(242,153,74,1)"
                                    fillOpacity={1}
                                    stroke="transparent"
                                    strokeOpacity={1}
                                    strokeLinecap="round"
                                    strokeWidth={4}
                                    strokeDasharray={0}
                                    className="apexcharts-bar-area"
                                    index={2}
                                    clipPath="url(#gridRectMaskfk7urbxb)"
                                    pathto="M 412.1665457589285 221.73100000000002 L 412.1665457589285 134.639 C 412.1665457589285 134.139 412.6665457589285 133.639 413.1665457589285 133.639 L 415.8177176339285 133.639 C 416.3177176339285 133.639 416.8177176339285 134.139 416.8177176339285 134.639 L 416.8177176339285 221.73100000000002 C 416.8177176339285 222.23100000000002 416.3177176339285 222.73100000000002 415.8177176339285 222.73100000000002 L 413.1665457589285 222.73100000000002 C 412.6665457589285 222.73100000000002 412.1665457589285 222.23100000000002 412.1665457589285 221.73100000000002 Z "
                                    pathfrom="M 412.1665457589285 222.73100000000002 L 412.1665457589285 222.73100000000002 L 416.8177176339285 222.73100000000002 L 416.8177176339285 222.73100000000002 L 416.8177176339285 222.73100000000002 L 416.8177176339285 222.73100000000002 L 416.8177176339285 222.73100000000002 L 412.1665457589285 222.73100000000002 Z"
                                    cy="133.638"
                                    cx="484.3194475446428"
                                    j={5}
                                    val={160}
                                    barheight="89.09200000000001"
                                    barwidth="8.651171875000001"
                                  />
                                  <path
                                    id="SvgjsPath3993"
                                    d="M 486.3194475446428 221.73100000000002 L 486.3194475446428 105.12727500000001 C 486.3194475446428 104.62727500000001 486.8194475446428 104.12727500000001 487.3194475446428 104.12727500000001 L 489.9706194196428 104.12727500000001 C 490.4706194196428 104.12727500000001 490.9706194196428 104.62727500000001 490.9706194196428 105.12727500000001 L 490.9706194196428 221.73100000000002 C 490.9706194196428 222.23100000000002 490.4706194196428 222.73100000000002 489.9706194196428 222.73100000000002 L 487.3194475446428 222.73100000000002 C 486.8194475446428 222.73100000000002 486.3194475446428 222.23100000000002 486.3194475446428 221.73100000000002 Z "
                                    fill="rgba(242,153,74,1)"
                                    fillOpacity={1}
                                    stroke="transparent"
                                    strokeOpacity={1}
                                    strokeLinecap="round"
                                    strokeWidth={4}
                                    strokeDasharray={0}
                                    className="apexcharts-bar-area"
                                    index={2}
                                    clipPath="url(#gridRectMaskfk7urbxb)"
                                    pathto="M 486.3194475446428 221.73100000000002 L 486.3194475446428 105.12727500000001 C 486.3194475446428 104.62727500000001 486.8194475446428 104.12727500000001 487.3194475446428 104.12727500000001 L 489.9706194196428 104.12727500000001 C 490.4706194196428 104.12727500000001 490.9706194196428 104.62727500000001 490.9706194196428 105.12727500000001 L 490.9706194196428 221.73100000000002 C 490.9706194196428 222.23100000000002 490.4706194196428 222.73100000000002 489.9706194196428 222.73100000000002 L 487.3194475446428 222.73100000000002 C 486.8194475446428 222.73100000000002 486.3194475446428 222.23100000000002 486.3194475446428 221.73100000000002 Z "
                                    pathfrom="M 486.3194475446428 222.73100000000002 L 486.3194475446428 222.73100000000002 L 490.9706194196428 222.73100000000002 L 490.9706194196428 222.73100000000002 L 490.9706194196428 222.73100000000002 L 490.9706194196428 222.73100000000002 L 490.9706194196428 222.73100000000002 L 486.3194475446428 222.73100000000002 Z"
                                    cy="104.126275"
                                    cx="558.4723493303571"
                                    j={6}
                                    val={213}
                                    barheight="118.60372500000001"
                                    barwidth="8.651171875000001"
                                  />
                                  <g
                                    id="SvgjsG3979"
                                    className="apexcharts-bar-goals-markers"
                                    style={{ pointerEvents: "none" }}
                                  >
                                    <g
                                      id="SvgjsG3980"
                                      classname="apexcharts-bar-goals-groups"
                                    />
                                    <g
                                      id="SvgjsG3982"
                                      classname="apexcharts-bar-goals-groups"
                                    />
                                    <g
                                      id="SvgjsG3984"
                                      classname="apexcharts-bar-goals-groups"
                                    />
                                    <g
                                      id="SvgjsG3986"
                                      classname="apexcharts-bar-goals-groups"
                                    />
                                    <g
                                      id="SvgjsG3988"
                                      classname="apexcharts-bar-goals-groups"
                                    />
                                    <g
                                      id="SvgjsG3990"
                                      classname="apexcharts-bar-goals-groups"
                                    />
                                    <g
                                      id="SvgjsG3992"
                                      classname="apexcharts-bar-goals-groups"
                                    />
                                  </g>
                                </g>
                                <g
                                  id="SvgjsG3944"
                                  className="apexcharts-datalabels"
                                  data:realindex={0}
                                />
                                <g
                                  id="SvgjsG3961"
                                  className="apexcharts-datalabels"
                                  data:realindex={1}
                                />
                                <g
                                  id="SvgjsG3978"
                                  className="apexcharts-datalabels"
                                  data:realindex={2}
                                />
                              </g>
                              <line
                                id="SvgjsLine4013"
                                x1={0}
                                y1={0}
                                x2="519.0703125"
                                y2={0}
                                stroke="#b6b6b6"
                                strokeDasharray={0}
                                strokeWidth={1}
                                strokeLinecap="butt"
                                className="apexcharts-ycrosshairs"
                              />
                              <line
                                id="SvgjsLine4014"
                                x1={0}
                                y1={0}
                                x2="519.0703125"
                                y2={0}
                                strokeDasharray={0}
                                strokeWidth={0}
                                strokeLinecap="butt"
                                className="apexcharts-ycrosshairs-hidden"
                              />
                              <g
                                id="SvgjsG4015"
                                className="apexcharts-yaxis-annotations"
                              />
                              <g
                                id="SvgjsG4016"
                                className="apexcharts-xaxis-annotations"
                              />
                              <g
                                id="SvgjsG4017"
                                className="apexcharts-point-annotations"
                              />
                              <g
                                id="SvgjsG4018"
                                className="apexcharts-xaxis"
                                transform="translate(0, 0)"
                              >
                                <g
                                  id="SvgjsG4019"
                                  className="apexcharts-xaxis-texts-g"
                                  transform="translate(0, -4)"
                                >
                                  <text
                                    id="SvgjsText4021"
                                    fontFamily="Satoshi, sans-serif"
                                    x="37.076450892857146"
                                    y="251.73000000000002"
                                    textAnchor="middle"
                                    dominantBaseline="auto"
                                    fontSize="12px"
                                    fontWeight={400}
                                    fill="#373d3f"
                                    className="apexcharts-text apexcharts-xaxis-label "
                                    style={{
                                      fontFamily: "Satoshi, sans-serif",
                                    }}
                                  >
                                    <tspan id="SvgjsTspan4022">Jan</tspan>
                                    <title>Jan</title>
                                  </text>
                                  <text
                                    id="SvgjsText4024"
                                    fontFamily="Satoshi, sans-serif"
                                    x="111.22935267857144"
                                    y="251.73000000000002"
                                    textAnchor="middle"
                                    dominantBaseline="auto"
                                    fontSize="12px"
                                    fontWeight={400}
                                    fill="#373d3f"
                                    className="apexcharts-text apexcharts-xaxis-label "
                                    style={{
                                      fontFamily: "Satoshi, sans-serif",
                                    }}
                                  >
                                    <tspan id="SvgjsTspan4025">Feb</tspan>
                                    <title>Feb</title>
                                  </text>
                                  <text
                                    id="SvgjsText4027"
                                    fontFamily="Satoshi, sans-serif"
                                    x="185.38225446428575"
                                    y="251.73000000000002"
                                    textAnchor="middle"
                                    dominantBaseline="auto"
                                    fontSize="12px"
                                    fontWeight={400}
                                    fill="#373d3f"
                                    className="apexcharts-text apexcharts-xaxis-label "
                                    style={{
                                      fontFamily: "Satoshi, sans-serif",
                                    }}
                                  >
                                    <tspan id="SvgjsTspan4028">Mar</tspan>
                                    <title>Mar</title>
                                  </text>
                                  <text
                                    id="SvgjsText4030"
                                    fontFamily="Satoshi, sans-serif"
                                    x="259.53515625"
                                    y="251.73000000000002"
                                    textAnchor="middle"
                                    dominantBaseline="auto"
                                    fontSize="12px"
                                    fontWeight={400}
                                    fill="#373d3f"
                                    className="apexcharts-text apexcharts-xaxis-label "
                                    style={{
                                      fontFamily: "Satoshi, sans-serif",
                                    }}
                                  >
                                    <tspan id="SvgjsTspan4031">Apr</tspan>
                                    <title>Apr</title>
                                  </text>
                                  <text
                                    id="SvgjsText4033"
                                    fontFamily="Satoshi, sans-serif"
                                    x="333.6880580357143"
                                    y="251.73000000000002"
                                    textAnchor="middle"
                                    dominantBaseline="auto"
                                    fontSize="12px"
                                    fontWeight={400}
                                    fill="#373d3f"
                                    className="apexcharts-text apexcharts-xaxis-label "
                                    style={{
                                      fontFamily: "Satoshi, sans-serif",
                                    }}
                                  >
                                    <tspan id="SvgjsTspan4034">May</tspan>
                                    <title>May</title>
                                  </text>
                                  <text
                                    id="SvgjsText4036"
                                    fontFamily="Satoshi, sans-serif"
                                    x="407.84095982142856"
                                    y="251.73000000000002"
                                    textAnchor="middle"
                                    dominantBaseline="auto"
                                    fontSize="12px"
                                    fontWeight={400}
                                    fill="#373d3f"
                                    className="apexcharts-text apexcharts-xaxis-label "
                                    style={{
                                      fontFamily: "Satoshi, sans-serif",
                                    }}
                                  >
                                    <tspan id="SvgjsTspan4037">Jun</tspan>
                                    <title>Jun</title>
                                  </text>
                                  <text
                                    id="SvgjsText4039"
                                    fontFamily="Satoshi, sans-serif"
                                    x="481.99386160714283"
                                    y="251.73000000000002"
                                    textAnchor="middle"
                                    dominantBaseline="auto"
                                    fontSize="12px"
                                    fontWeight={400}
                                    fill="#373d3f"
                                    className="apexcharts-text apexcharts-xaxis-label "
                                    style={{
                                      fontFamily: "Satoshi, sans-serif",
                                    }}
                                  >
                                    <tspan id="SvgjsTspan4040">Jul</tspan>
                                    <title>Jul</title>
                                  </text>
                                </g>
                              </g>
                            </g>
                          </svg>
                          <div className="apexcharts-tooltip apexcharts-theme-light">
                            <div
                              className="apexcharts-tooltip-series-group"
                              style={{ order: 1 }}
                            >
                              <span
                                className="apexcharts-tooltip-marker"
                                style={{ backgroundColor: "rgb(60, 80, 224)" }}
                              />
                              <div
                                className="apexcharts-tooltip-text"
                                style={{
                                  fontFamily: "Satoshi, sans-serif",
                                  fontSize: "12px",
                                }}
                              >
                                <div className="apexcharts-tooltip-y-group">
                                  <span className="apexcharts-tooltip-text-y-label" />
                                  <span className="apexcharts-tooltip-text-y-value" />
                                </div>
                                <div className="apexcharts-tooltip-goals-group">
                                  <span className="apexcharts-tooltip-text-goals-label" />
                                  <span className="apexcharts-tooltip-text-goals-value" />
                                </div>
                                <div className="apexcharts-tooltip-z-group">
                                  <span className="apexcharts-tooltip-text-z-label" />
                                  <span className="apexcharts-tooltip-text-z-value" />
                                </div>
                              </div>
                            </div>
                            <div
                              className="apexcharts-tooltip-series-group"
                              style={{ order: 2 }}
                            >
                              <span
                                className="apexcharts-tooltip-marker"
                                style={{ backgroundColor: "rgb(19, 194, 150)" }}
                              />
                              <div
                                className="apexcharts-tooltip-text"
                                style={{
                                  fontFamily: "Satoshi, sans-serif",
                                  fontSize: "12px",
                                }}
                              >
                                <div className="apexcharts-tooltip-y-group">
                                  <span className="apexcharts-tooltip-text-y-label" />
                                  <span className="apexcharts-tooltip-text-y-value" />
                                </div>
                                <div className="apexcharts-tooltip-goals-group">
                                  <span className="apexcharts-tooltip-text-goals-label" />
                                  <span className="apexcharts-tooltip-text-goals-value" />
                                </div>
                                <div className="apexcharts-tooltip-z-group">
                                  <span className="apexcharts-tooltip-text-z-label" />
                                  <span className="apexcharts-tooltip-text-z-value" />
                                </div>
                              </div>
                            </div>
                            <div
                              className="apexcharts-tooltip-series-group"
                              style={{ order: 3 }}
                            >
                              <span
                                className="apexcharts-tooltip-marker"
                                style={{ backgroundColor: "rgb(242, 153, 74)" }}
                              />
                              <div
                                className="apexcharts-tooltip-text"
                                style={{
                                  fontFamily: "Satoshi, sans-serif",
                                  fontSize: "12px",
                                }}
                              >
                                <div className="apexcharts-tooltip-y-group">
                                  <span className="apexcharts-tooltip-text-y-label" />
                                  <span className="apexcharts-tooltip-text-y-value" />
                                </div>
                                <div className="apexcharts-tooltip-goals-group">
                                  <span className="apexcharts-tooltip-text-goals-label" />
                                  <span className="apexcharts-tooltip-text-goals-value" />
                                </div>
                                <div className="apexcharts-tooltip-z-group">
                                  <span className="apexcharts-tooltip-text-z-label" />
                                  <span className="apexcharts-tooltip-text-z-value" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light">
                            <div className="apexcharts-yaxistooltip-text" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-12 xl:col-span-4">
                <div className="flex flex-col gap-4 sm:flex-row md:gap-6 xl:flex-col xl:gap-7.5">
                  <div className="relative rounded-sm border border-stroke bg-white py-8 pl-7.5 pr-12 shadow-default dark:border-strokedark dark:bg-boxdark xl:py-11 2xl:pl-12 2xl:pr-16">
                    <div className="flex flex-col gap-3 2xsm:flex-row 2xsm:items-center 2xl:gap-9">
                      <div className="relative flex items-center justify-center">
                        <svg className="h-33 w-33 -rotate-90 transform">
                          <circle
                            className="text-stroke dark:text-strokedark"
                            strokeWidth={16}
                            stroke="currentColor"
                            fill="transparent"
                            r={58}
                            cx={66}
                            cy={66}
                          />
                          <circle
                            className="text-primary"
                            strokeWidth={16}
                            strokeDasharray="364.424747816416"
                            strokeDashoffset="54.66371217246245"
                            stroke="currentColor"
                            fill="transparent"
                            r={58}
                            cx={66}
                            cy={66}
                          />
                        </svg>
                        <span className="absolute text-xl font-bold text-black dark:text-white">
                          85%
                        </span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-black dark:text-white">
                          Available Storage
                        </h3>
                        <p className="mt-3.5 font-medium">
                          <span className="text-black dark:text-white">
                            150
                          </span>
                          <span className="text-sm"> GB</span> /
                          <span className="text-black dark:text-white">
                            512
                          </span>
                          <span className="text-sm"> GB</span>
                        </p>
                      </div>
                    </div>
                    <button className="absolute -right-5 top-1/2 -translate-y-1/2 rotate-[270deg] rounded-t-lg bg-[#13C296] py-1 px-4 font-medium text-white">
                      Clean
                    </button>
                  </div>
                  <div className="flex-grow rounded-sm border border-stroke bg-white p-4 shadow-default dark:border-strokedark dark:bg-boxdark md:p-6 xl:p-7.5">
                    <div className="flex gap-4">
                      <div className="flex h-11.5 w-11.5 items-center justify-center rounded-md bg-[#F6F6F8] dark:bg-graydark">
                        <svg
                          width={24}
                          height={25}
                          viewBox="0 0 24 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_608_17998)">
                            <path
                              d="M23.1754 8.11967C22.8861 7.83042 22.4884 7.64963 22.0184 7.64963H17.6795V6.20336C17.6795 5.9141 17.5711 4.75708 16.0525 4.75708H7.66407C6.21779 4.75708 6.10932 5.9141 6.10932 6.20336V7.64963H1.77049C1.0112 7.64963 0.324219 8.33661 0.324219 9.09591V18.7498C0.324219 19.5091 1.0112 20.1961 1.77049 20.1961H22.0184C22.7777 20.1961 23.4646 19.5091 23.4646 18.7498V9.16822C23.4646 8.80665 23.3562 8.40893 23.1754 8.11967ZM21.5483 18.2436H2.24053V9.56595H6.10932C7.15787 9.56595 8.02564 8.69818 8.02564 7.64963V6.6734H15.7271V7.64963C15.7271 8.69818 16.5948 9.56595 17.6434 9.56595H21.5122V18.2436H21.5483Z"
                              fill="#3056D3"
                            />
                            <path
                              d="M11.4251 9.56592C9.58109 9.56592 8.0625 11.1207 8.0625 12.9285C8.0625 14.8448 9.50878 16.2911 11.4251 16.2911C13.2691 16.2911 14.7877 14.7364 14.7877 12.9285C14.7877 11.1207 13.2329 9.56592 11.4251 9.56592ZM11.4251 14.4109C10.5573 14.4109 9.97882 13.8324 9.97882 12.9647C9.97882 12.2054 10.6658 11.5184 11.4251 11.5184C12.1844 11.5184 12.8714 12.2054 12.8714 12.9647C12.8714 13.6878 12.1844 14.4109 11.4251 14.4109Z"
                              fill="#3056D3"
                            />
                            <path
                              d="M4.19303 12.4585C4.73219 12.4585 5.16927 12.0214 5.16927 11.4822C5.16927 10.9431 4.73219 10.506 4.19303 10.506C3.65387 10.506 3.2168 10.9431 3.2168 11.4822C3.2168 12.0214 3.65387 12.4585 4.19303 12.4585Z"
                              fill="#3056D3"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_608_17998">
                              <rect
                                width="23.1404"
                                height="23.1404"
                                fill="white"
                                transform="translate(0.324219 0.924438)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <div className="flex-grow">
                        <div className="mb-3 flex items-center justify-between">
                          <span className="font-medium text-black dark:text-white">
                            Media
                          </span>
                          <span className="text-sm font-medium">85 GB</span>
                        </div>
                        <div className="relative h-1.5 w-full rounded-full bg-stroke dark:bg-strokedark">
                          <span className="absolute left-0 block h-1.5 w-5/6 rounded-full bg-primary" />
                        </div>
                      </div>
                    </div>
                    <div className="mt-5 flex gap-4">
                      <div className="flex h-11.5 w-11.5 items-center justify-center rounded-md bg-[#F6F6F8] dark:bg-graydark">
                        <svg
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_608_18010)">
                            <path
                              d="M22.1991 0.0314941H11.2074C10.5205 0.0314941 9.94196 0.610005 9.94196 1.29699V5.8166H1.58971C0.902729 5.8166 0.324219 6.39511 0.324219 7.08209V16.6275C0.324219 17.0976 0.505003 17.6761 0.902729 17.9653L5.63928 22.5934C6.03701 22.9911 6.50705 23.1719 6.97709 23.1719H12.5814C13.2684 23.1719 13.8469 22.5934 13.8469 21.9064V15.362L15.3293 16.8445C15.7271 17.2422 16.1971 17.423 16.6671 17.423H22.2715C22.9584 17.423 23.537 16.8445 23.537 16.1575V1.29699C23.4646 0.610005 22.8861 0.0314941 22.1991 0.0314941ZM3.03599 17.3868H6.10932V20.3878L3.03599 17.3868ZM11.8944 21.2556H8.02564V16.6998C8.02564 16.0128 7.44713 15.4343 6.76015 15.4343H2.24053V7.73291H11.8944V21.2556ZM13.8107 12.7587V12.5779H14.787V13.6265L13.8107 12.7587ZM21.5483 15.4705H16.7033V11.891C16.7033 11.204 16.1248 10.6255 15.4378 10.6255H13.8107V7.04593C13.8107 6.35895 13.2322 5.78044 12.5453 5.78044H11.8944V1.94781H21.5483V15.4705Z"
                              fill="#F2994A"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_608_18010">
                              <rect
                                width="23.1404"
                                height="23.1404"
                                fill="white"
                                transform="translate(0.324219 0.0314941)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <div className="flex-grow">
                        <div className="mb-3 flex items-center justify-between">
                          <span className="font-medium text-black dark:text-white">
                            Documents
                          </span>
                          <span className="text-sm font-medium">25 GB</span>
                        </div>
                        <div className="relative h-1.5 w-full rounded-full bg-stroke dark:bg-strokedark">
                          <span className="absolute left-0 block h-1.5 w-1/2 rounded-full bg-[#F2994A]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-12">
                <div className="rounded-sm border border-stroke bg-white py-3 shadow-default dark:border-strokedark dark:bg-boxdark">
                  <div className="flex justify-between gap-2.5 py-3 px-6 hover:bg-gray-2 dark:hover:bg-meta-4 sm:items-center sm:justify-start">
                    <div className="flex items-center gap-5.5 sm:w-5/12 xl:w-3/12">
                      <div className="hidden h-14 w-full max-w-14 items-center justify-center rounded-full border border-stroke bg-gray text-black-2 dark:border-strokedark dark:bg-graydark dark:text-white sm:flex">
                        <svg
                          className="fill-current"
                          width={28}
                          height={29}
                          viewBox="0 0 28 29"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.72659 3.36759C5.32314 2.77105 6.13222 2.43591 6.97585 2.43591H16.2295L16.2299 2.43591L16.2303 2.43591C16.4817 2.43591 16.7081 2.54281 16.8665 2.71363L23.7604 9.6075C23.9312 9.76594 24.0381 9.99231 24.0381 10.2437C24.0381 10.2568 24.0378 10.2699 24.0372 10.2828V24.1241C24.0372 24.9677 23.7021 25.7768 23.1055 26.3733C22.509 26.9699 21.6999 27.305 20.8563 27.305H6.97585C6.13222 27.305 5.32313 26.9699 4.72659 26.3733C4.13005 25.7768 3.79492 24.9677 3.79492 24.1241V5.61684C3.79492 4.77321 4.13005 3.96413 4.72659 3.36759ZM6.97585 4.17097H15.3628V10.2437C15.3628 10.7228 15.7512 11.1112 16.2303 11.1112H22.3022V24.1241C22.3022 24.5075 22.1498 24.8753 21.8787 25.1465C21.6075 25.4176 21.2397 25.57 20.8563 25.57H6.97585C6.59238 25.57 6.22462 25.4176 5.95346 25.1465C5.68231 24.8753 5.52997 24.5075 5.52997 24.1241V5.61684C5.52997 5.23337 5.68231 4.86561 5.95346 4.59445C6.22462 4.3233 6.59238 4.17097 6.97585 4.17097ZM17.0979 5.3987L21.0753 9.37613H17.0979V5.3987ZM9.2896 15.1596C8.81048 15.1596 8.42208 15.548 8.42208 16.0271C8.42208 16.5062 8.81048 16.8946 9.2896 16.8946H18.5432C19.0223 16.8946 19.4107 16.5062 19.4107 16.0271C19.4107 15.548 19.0223 15.1596 18.5432 15.1596H9.2896ZM8.42208 20.654C8.42208 20.1749 8.81048 19.7865 9.2896 19.7865H18.5432C19.0223 19.7865 19.4107 20.1749 19.4107 20.654C19.4107 21.1332 19.0223 21.5216 18.5432 21.5216H9.2896C8.81048 21.5216 8.42208 21.1332 8.42208 20.654ZM9.2896 10.5328C8.81048 10.5328 8.42208 10.9212 8.42208 11.4003C8.42208 11.8795 8.81048 12.2679 9.2896 12.2679H11.603C12.0821 12.2679 12.4705 11.8795 12.4705 11.4003C12.4705 10.9212 12.0821 10.5328 11.603 10.5328H9.2896Z"
                            fill
                          />
                        </svg>
                      </div>
                      <p className="font-medium text-black dark:text-white">
                        Content-script.txt
                      </p>
                    </div>
                    <div className="hidden sm:block sm:w-4/12 xl:w-2/12">
                      <p className="font-medium text-black dark:text-white">
                        File size: 455KB
                      </p>
                    </div>
                    <div className="hidden w-5/12 xl:block">
                      <p className="font-medium text-black dark:text-white">
                        Uploaded on: 25 Nov, 2025
                      </p>
                    </div>
                    <div className="text-right sm:w-3/12 xl:w-2/12">
                      <button className="inline-flex rounded bg-primary py-1 px-3 font-medium text-white hover:bg-opacity-90 sm:py-2.5 sm:px-6">
                        Download
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-between gap-2.5 py-3 px-6 hover:bg-gray-2 dark:hover:bg-meta-4 sm:items-center sm:justify-start">
                    <div className="flex items-center gap-5.5 sm:w-5/12 xl:w-3/12">
                      <div className="hidden h-14 w-full max-w-14 items-center justify-center rounded-full border border-stroke bg-gray text-black-2 dark:border-strokedark dark:bg-graydark dark:text-white sm:flex">
                        <svg
                          className="fill-current"
                          width={29}
                          height={29}
                          viewBox="0 0 29 29"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_608_18042)">
                            <path
                              d="M12.2493 7.02488C12.6567 7.02488 12.9869 6.69465 12.9869 6.28728C12.9869 5.87992 12.6567 5.54968 12.2493 5.54968C11.842 5.54968 11.5117 5.87992 11.5117 6.28728C11.5117 6.69465 11.842 7.02488 12.2493 7.02488Z"
                              fill
                            />
                            <path
                              d="M16.7181 7.02488C17.1254 7.02488 17.4557 6.69465 17.4557 6.28728C17.4557 5.87992 17.1254 5.54968 16.7181 5.54968C16.3107 5.54968 15.9805 5.87992 15.9805 6.28728C15.9805 6.69465 16.3107 7.02488 16.7181 7.02488Z"
                              fill
                            />
                            <path
                              d="M24.3973 8.67366C24.0502 8.67366 23.7031 8.76044 23.356 8.8906L23.2692 8.63027C22.7051 6.89474 21.6638 5.41954 20.3188 4.37822L22.4014 2.25219C22.7051 1.94847 22.7051 1.4712 22.4014 1.16749C22.0977 0.863768 21.6204 0.863768 21.3167 1.16749L19.1473 3.38029C19.1039 3.42368 19.1039 3.46706 19.0605 3.46706C17.7589 2.72946 16.2403 2.33897 14.6349 2.33897C13.0729 2.33897 11.5977 2.72946 10.2961 3.42368C10.2527 3.42368 10.2527 3.38029 10.2093 3.38029L8.0399 1.16749C7.73618 0.863768 7.25891 0.863768 6.95519 1.16749C6.65147 1.4712 6.65147 1.94847 6.95519 2.25219L8.99444 4.29144C7.60601 5.37615 6.5647 6.85135 6.00065 8.58688L5.95726 8.71705C5.61015 8.54349 5.21966 8.45672 4.78578 8.45672C3.31057 8.45672 2.0957 9.67159 2.0957 11.1468V16.0931C2.0957 17.5683 3.31057 18.7831 4.78578 18.7831C5.21966 18.7831 5.61015 18.6964 5.95726 18.5228V21.6901C5.95726 22.2108 6.34775 22.6447 6.9118 22.6447H7.69279V25.812C7.69279 27.2872 8.90766 28.5021 10.3829 28.5021C11.8581 28.5021 13.0729 27.2872 13.0729 25.812V22.6447H15.763V25.812C15.763 27.2872 16.9779 28.5021 18.4531 28.5021C19.9283 28.5021 21.1432 27.2872 21.1432 25.812V22.6447H22.2279C22.7485 22.6447 23.1824 22.2542 23.1824 21.6901V18.6964C23.5295 18.8699 23.92 18.9567 24.3539 18.9567C25.8291 18.9567 27.044 17.7418 27.044 16.2666V11.3637C27.0874 9.88853 25.8725 8.67366 24.3973 8.67366ZM14.6349 3.85756C17.5419 3.85756 20.1886 5.50631 21.4469 8.06622H7.86634C9.08122 5.50631 11.6845 3.85756 14.6349 3.85756ZM4.78578 17.3079C4.13495 17.3079 3.61429 16.7873 3.61429 16.1364V11.1902C3.61429 10.5394 4.13495 10.0187 4.78578 10.0187C5.4366 10.0187 5.95726 10.5394 5.95726 11.1902V16.1364C5.95726 16.7439 5.4366 17.3079 4.78578 17.3079ZM11.5977 25.7686C11.5977 26.4195 11.0771 26.9401 10.4263 26.9401C9.77543 26.9401 9.25477 26.4195 9.25477 25.7686V22.6013H11.5977V25.7686ZM19.668 25.7686C19.668 26.4195 19.1473 26.9401 18.4965 26.9401C17.8456 26.9401 17.325 26.4195 17.325 25.7686V22.6013H19.668V25.7686ZM21.7072 21.1261H21.1865H20.3622H19.9717H15.8064H13.1163H8.99444H8.82089H7.69279H7.47585V16.0931V11.1902V9.6282H21.6638V11.4071V16.3534V21.1261H21.7072ZM25.5688 16.31C25.5688 16.9608 25.0481 17.4815 24.3973 17.4815C23.7465 17.4815 23.2258 16.9608 23.2258 16.31V11.3637C23.2258 10.7129 23.7465 10.1922 24.3973 10.1922C25.0481 10.1922 25.5688 10.7129 25.5688 11.3637V16.31Z"
                              fill
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_608_18042">
                              <rect
                                width="27.7685"
                                height="27.7685"
                                fill="white"
                                transform="translate(0.707031 0.820312)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <p className="font-medium text-black dark:text-white">
                        E-commerce.apk
                      </p>
                    </div>
                    <div className="hidden sm:block sm:w-4/12 xl:w-2/12">
                      <p className="font-medium text-black dark:text-white">
                        File size: 55MB
                      </p>
                    </div>
                    <div className="hidden w-5/12 xl:block">
                      <p className="font-medium text-black dark:text-white">
                        Uploaded on: 13 Dec, 2025
                      </p>
                    </div>
                    <div className="text-right sm:w-3/12 xl:w-2/12">
                      <button className="inline-flex rounded bg-primary py-1 px-3 font-medium text-white hover:bg-opacity-90 sm:py-2.5 sm:px-6">
                        Download
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-between gap-2.5 py-3 px-6 hover:bg-gray-2 dark:hover:bg-meta-4 sm:items-center sm:justify-start">
                    <div className="flex items-center gap-5.5 sm:w-5/12 xl:w-3/12">
                      <div className="hidden h-14 w-full max-w-14 items-center justify-center rounded-full border border-stroke bg-gray text-black-2 dark:border-strokedark dark:bg-graydark dark:text-white sm:flex">
                        <svg
                          className="fill-current"
                          width={28}
                          height={29}
                          viewBox="0 0 28 29"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.72659 3.36759C5.32314 2.77105 6.13222 2.43591 6.97585 2.43591H16.2295L16.2299 2.43591L16.2303 2.43591C16.4817 2.43591 16.7081 2.54281 16.8665 2.71363L23.7604 9.6075C23.9312 9.76594 24.0381 9.99231 24.0381 10.2437C24.0381 10.2568 24.0378 10.2699 24.0372 10.2828V24.1241C24.0372 24.9677 23.7021 25.7768 23.1055 26.3733C22.509 26.9699 21.6999 27.305 20.8563 27.305H6.97585C6.13222 27.305 5.32313 26.9699 4.72659 26.3733C4.13005 25.7768 3.79492 24.9677 3.79492 24.1241V5.61684C3.79492 4.77321 4.13005 3.96413 4.72659 3.36759ZM6.97585 4.17097H15.3628V10.2437C15.3628 10.7228 15.7512 11.1112 16.2303 11.1112H22.3022V24.1241C22.3022 24.5075 22.1498 24.8753 21.8787 25.1465C21.6075 25.4176 21.2397 25.57 20.8563 25.57H6.97585C6.59238 25.57 6.22462 25.4176 5.95346 25.1465C5.68231 24.8753 5.52997 24.5075 5.52997 24.1241V5.61684C5.52997 5.23337 5.68231 4.86561 5.95346 4.59445C6.22462 4.3233 6.59238 4.17097 6.97585 4.17097ZM17.0979 5.3987L21.0753 9.37613H17.0979V5.3987ZM9.2896 15.1596C8.81048 15.1596 8.42208 15.548 8.42208 16.0271C8.42208 16.5062 8.81048 16.8946 9.2896 16.8946H18.5432C19.0223 16.8946 19.4107 16.5062 19.4107 16.0271C19.4107 15.548 19.0223 15.1596 18.5432 15.1596H9.2896ZM8.42208 20.654C8.42208 20.1749 8.81048 19.7865 9.2896 19.7865H18.5432C19.0223 19.7865 19.4107 20.1749 19.4107 20.654C19.4107 21.1332 19.0223 21.5216 18.5432 21.5216H9.2896C8.81048 21.5216 8.42208 21.1332 8.42208 20.654ZM9.2896 10.5328C8.81048 10.5328 8.42208 10.9212 8.42208 11.4003C8.42208 11.8795 8.81048 12.2679 9.2896 12.2679H11.603C12.0821 12.2679 12.4705 11.8795 12.4705 11.4003C12.4705 10.9212 12.0821 10.5328 11.603 10.5328H9.2896Z"
                            fill
                          />
                        </svg>
                      </div>
                      <p className="font-medium text-black dark:text-white">
                        Random-text.doc
                      </p>
                    </div>
                    <div className="hidden sm:block sm:w-4/12 xl:w-2/12">
                      <p className="font-medium text-black dark:text-white">
                        File size: 455KB
                      </p>
                    </div>
                    <div className="hidden w-5/12 xl:block">
                      <p className="font-medium text-black dark:text-white">
                        Uploaded on: 12 Feb, 2025
                      </p>
                    </div>
                    <div className="text-right sm:w-3/12 xl:w-2/12">
                      <button className="inline-flex rounded bg-primary py-1 px-3 font-medium text-white hover:bg-opacity-90 sm:py-2.5 sm:px-6">
                        Download
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-between gap-2.5 py-3 px-6 hover:bg-gray-2 dark:hover:bg-meta-4 sm:items-center sm:justify-start">
                    <div className="flex items-center gap-5.5 sm:w-5/12 xl:w-3/12">
                      <div className="hidden h-14 w-full max-w-14 items-center justify-center rounded-full border border-stroke bg-gray text-black-2 dark:border-strokedark dark:bg-graydark dark:text-white sm:flex">
                        <svg
                          className="fill-current"
                          width={28}
                          height={29}
                          viewBox="0 0 28 29"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.72659 3.36759C5.32314 2.77105 6.13222 2.43591 6.97585 2.43591H16.2295L16.2299 2.43591L16.2303 2.43591C16.4817 2.43591 16.7081 2.54281 16.8665 2.71363L23.7604 9.6075C23.9312 9.76594 24.0381 9.99231 24.0381 10.2437C24.0381 10.2568 24.0378 10.2699 24.0372 10.2828V24.1241C24.0372 24.9677 23.7021 25.7768 23.1055 26.3733C22.509 26.9699 21.6999 27.305 20.8563 27.305H6.97585C6.13222 27.305 5.32313 26.9699 4.72659 26.3733C4.13005 25.7768 3.79492 24.9677 3.79492 24.1241V5.61684C3.79492 4.77321 4.13005 3.96413 4.72659 3.36759ZM6.97585 4.17097H15.3628V10.2437C15.3628 10.7228 15.7512 11.1112 16.2303 11.1112H22.3022V24.1241C22.3022 24.5075 22.1498 24.8753 21.8787 25.1465C21.6075 25.4176 21.2397 25.57 20.8563 25.57H6.97585C6.59238 25.57 6.22462 25.4176 5.95346 25.1465C5.68231 24.8753 5.52997 24.5075 5.52997 24.1241V5.61684C5.52997 5.23337 5.68231 4.86561 5.95346 4.59445C6.22462 4.3233 6.59238 4.17097 6.97585 4.17097ZM17.0979 5.3987L21.0753 9.37613H17.0979V5.3987ZM9.2896 15.1596C8.81048 15.1596 8.42208 15.548 8.42208 16.0271C8.42208 16.5062 8.81048 16.8946 9.2896 16.8946H18.5432C19.0223 16.8946 19.4107 16.5062 19.4107 16.0271C19.4107 15.548 19.0223 15.1596 18.5432 15.1596H9.2896ZM8.42208 20.654C8.42208 20.1749 8.81048 19.7865 9.2896 19.7865H18.5432C19.0223 19.7865 19.4107 20.1749 19.4107 20.654C19.4107 21.1332 19.0223 21.5216 18.5432 21.5216H9.2896C8.81048 21.5216 8.42208 21.1332 8.42208 20.654ZM9.2896 10.5328C8.81048 10.5328 8.42208 10.9212 8.42208 11.4003C8.42208 11.8795 8.81048 12.2679 9.2896 12.2679H11.603C12.0821 12.2679 12.4705 11.8795 12.4705 11.4003C12.4705 10.9212 12.0821 10.5328 11.603 10.5328H9.2896Z"
                            fill
                          />
                        </svg>
                      </div>
                      <p className="font-medium text-black dark:text-white">
                        Random-text.doc
                      </p>
                    </div>
                    <div className="hidden sm:block sm:w-4/12 xl:w-2/12">
                      <p className="font-medium text-black dark:text-white">
                        File size: 455KB
                      </p>
                    </div>
                    <div className="hidden w-5/12 xl:block">
                      <p className="font-medium text-black dark:text-white">
                        Uploaded on: 05 Jan, 2025
                      </p>
                    </div>
                    <div className="text-right sm:w-3/12 xl:w-2/12">
                      <button className="inline-flex rounded bg-primary py-1 px-3 font-medium text-white hover:bg-opacity-90 sm:py-2.5 sm:px-6">
                        Download
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main> */}
      </DefaultLayout>
    </>
  );
};

export default Subscription;
