import React from "react";
import DefaultLayout from "../../layout/DefaultLayout";

const Notification = () => {
  return (
    <>
      <DefaultLayout>
        <main>
          <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
            <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="text-title-md2 font-semibold text-black dark:text-white">
                Notifications
              </h2>
              <nav>
                <ol className="flex items-center gap-2">
                  <li>
                    <a className="font-medium" href="/">
                      Dashboard /
                    </a>
                  </li>
                  <li className="font-medium text-primary">Notifications</li>
                </ol>
              </nav>
            </div>
            <div className="flex flex-col gap-7.5">
              <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                <div className="border-b border-stroke px-4 py-4 dark:border-strokedark sm:px-6 xl:px-7.5">
                  <h3 className="font-medium text-black dark:text-white">
                    Notifications Style 1
                  </h3>
                </div>
                <div className="p-4 sm:p-6 xl:p-10">
                  <div className="max-w-[422px] rounded-lg py-4 pl-4 pr-4.5 shadow-2 dark:bg-meta-4">
                    <div className="flex items-center justify-between">
                      <div className="flex flex-grow items-center gap-5">
                        <div className="w-ful flex h-10 w-10 items-center justify-center rounded-full bg-[#1EA779]">
                          <svg
                            width={20}
                            height={16}
                            viewBox="0 0 20 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M18.1264 2.27326C17.9391 2.06543 17.6448 2.06543 17.4574 2.27326L7.69058 12.7836C7.61031 12.8726 7.50327 12.8726 7.423 12.7836L2.5797 7.5581C2.39239 7.35027 2.09805 7.35027 1.91074 7.5581C1.72343 7.76593 1.72343 8.09252 1.91074 8.30035L6.75403 13.5258C6.9681 13.7633 7.26245 13.8821 7.53003 13.8821C7.82437 13.8821 8.09196 13.7633 8.30603 13.5258L18.0729 3.01551C18.287 2.80768 18.287 2.48109 18.1264 2.27326Z"
                              fill="white"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M19.0302 1.51876L19.0574 1.55404C19.5496 2.19109 19.5671 3.17716 18.9194 3.83286L9.17296 14.3212C8.74637 14.7905 8.16862 15.0586 7.53004 15.0586C6.93379 15.0586 6.3244 14.8022 5.88662 14.3206L1.03674 9.08806C0.446028 8.43262 0.446113 7.42591 1.03683 6.77048C1.68907 6.04677 2.79116 6.04419 3.44661 6.76274L7.55774 11.1983L16.5912 1.47722C17.2467 0.759356 18.3483 0.76216 19.0003 1.48564L19.0302 1.51876ZM2.5797 7.5581C2.39239 7.35027 2.09805 7.35027 1.91074 7.5581C1.747 7.73978 1.7264 8.01221 1.84893 8.21672C1.85132 8.22072 1.85377 8.22469 1.85627 8.22863C1.87221 8.25374 1.89037 8.27775 1.91074 8.30035L6.75403 13.5258C6.9681 13.7633 7.26245 13.8821 7.53003 13.8821C7.82437 13.8821 8.09196 13.7633 8.30603 13.5258L18.0729 3.01551C18.1038 2.98556 18.1302 2.95313 18.1523 2.91895C18.155 2.91483 18.1576 2.91069 18.1601 2.90652C18.2828 2.70529 18.261 2.44753 18.1264 2.27326C17.9391 2.06543 17.6448 2.06543 17.4574 2.27326L7.69058 12.7836C7.65639 12.8215 7.61735 12.8433 7.57759 12.8489C7.5706 12.8499 7.56359 12.8504 7.55658 12.8504C7.54772 12.8504 7.53886 12.8495 7.53004 12.8479C7.52377 12.8468 7.51753 12.8452 7.51133 12.8433C7.50632 12.8417 7.50132 12.8399 7.49637 12.8378C7.47058 12.8268 7.44571 12.8088 7.423 12.7836L2.5797 7.5581Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="mb-0.5 text-title-xsm font-medium text-black dark:text-white">
                            Congratulations
                          </h4>
                          <p className="text-sm font-medium">
                            your message sent successfully
                          </p>
                        </div>
                      </div>
                      <div>
                        <button>
                          <svg
                            width={14}
                            height={14}
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M0.854423 0.85186C1.2124 0.493879 1.79281 0.493879 2.15079 0.85186L7.0026 5.70368L11.8544 0.85186C12.2124 0.493879 12.7928 0.493879 13.1508 0.85186C13.5088 1.20984 13.5088 1.79024 13.1508 2.14822L8.29897 7.00004L13.1508 11.8519C13.5088 12.2098 13.5088 12.7902 13.1508 13.1482C12.7928 13.5062 12.2124 13.5062 11.8544 13.1482L7.0026 8.2964L2.15079 13.1482C1.79281 13.5062 1.2124 13.5062 0.854423 13.1482C0.496442 12.7902 0.496442 12.2098 0.854423 11.8519L5.70624 7.00004L0.854423 2.14822C0.496442 1.79024 0.496442 1.20984 0.854423 0.85186Z"
                              fill="#B1B1B1"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                <div className="border-b border-stroke px-4 py-4 dark:border-strokedark sm:px-6 xl:px-7.5">
                  <h3 className="font-medium text-black dark:text-white">
                    Notifications Style 2
                  </h3>
                </div>
                <div className="p-4 sm:p-6 xl:p-10">
                  <div className="max-w-[490px] rounded-lg border border-[#F5C5BB] bg-[#FCEDEA] py-4 pl-4 pr-5.5 shadow-2 dark:border-[#EA4E2C] dark:bg-[#1B1B24]">
                    <div className="flex items-center justify-between">
                      <div className="flex flex-grow items-center gap-5">
                        <div className="flex h-15 w-full max-w-15 items-center justify-center rounded-md bg-[#EA4E2C]">
                          <svg
                            width={32}
                            height={32}
                            viewBox="0 0 32 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M14.2021 3.33462C14.7513 3.02546 15.3708 2.86304 16.001 2.86304C16.6312 2.86304 17.2507 3.02546 17.7999 3.33462C18.349 3.64379 18.8092 4.08926 19.136 4.62807L19.1389 4.63282L30.4322 23.4862L30.4403 23.5C30.7605 24.0544 30.9299 24.683 30.9317 25.3233C30.9335 25.9635 30.7676 26.593 30.4505 27.1493C30.1335 27.7055 29.6763 28.169 29.1245 28.4937C28.5727 28.8184 27.9455 28.9929 27.3053 29L27.2943 29.0001L4.69668 29C4.05647 28.993 3.42928 28.8184 2.87748 28.4937C2.32568 28.169 1.86851 27.7055 1.55146 27.1493C1.23441 26.593 1.06853 25.9635 1.07033 25.3233C1.07212 24.683 1.24152 24.0544 1.56168 23.5L1.5698 23.4862L12.8631 4.63282L13.721 5.1467L12.866 4.62807C13.1928 4.08926 13.653 3.64379 14.2021 3.33462ZM14.5773 5.6632C14.5769 5.66391 14.5764 5.66462 14.576 5.66532L3.29013 24.5062C3.14689 24.7567 3.07113 25.0402 3.07032 25.3289C3.0695 25.6199 3.1449 25.906 3.28902 26.1589C3.43313 26.4117 3.64093 26.6224 3.89175 26.77C4.14117 26.9167 4.42447 26.996 4.71376 27H27.2882C27.5775 26.996 27.8608 26.9167 28.1103 26.77C28.3611 26.6224 28.5689 26.4117 28.713 26.1589C28.8571 25.906 28.9325 25.6199 28.9317 25.3289C28.9309 25.0402 28.8551 24.7567 28.7119 24.5062L17.426 5.66532C17.4256 5.66462 17.4251 5.66391 17.4247 5.6632C17.2762 5.41924 17.0676 5.21752 16.8187 5.07739C16.5691 4.93686 16.2875 4.86304 16.001 4.86304C15.7146 4.86304 15.4329 4.93686 15.1833 5.07739C14.9345 5.21752 14.7258 5.41924 14.5773 5.6632Z"
                              fill="white"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M16 11C16.5523 11 17 11.4477 17 12V17.3333C17 17.8856 16.5523 18.3333 16 18.3333C15.4477 18.3333 15 17.8856 15 17.3333V12C15 11.4477 15.4477 11 16 11Z"
                              fill="white"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M15 22.6666C15 22.1143 15.4477 21.6666 16 21.6666H16.0133C16.5656 21.6666 17.0133 22.1143 17.0133 22.6666C17.0133 23.2189 16.5656 23.6666 16.0133 23.6666H16C15.4477 23.6666 15 23.2189 15 22.6666Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="mb-0.5 text-title-xsm font-medium text-black dark:text-[#EA4E2C]">
                            Uh oh, something went wrong
                          </h4>
                          <p className="text-sm font-medium">
                            Sorry! There was a problem with your request
                          </p>
                        </div>
                      </div>
                      <div>
                        <button className="flex h-7 w-7 items-center justify-center rounded-md bg-white dark:bg-meta-4">
                          <svg
                            width={14}
                            height={14}
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M0.854423 0.85186C1.2124 0.493879 1.79281 0.493879 2.15079 0.85186L7.0026 5.70368L11.8544 0.85186C12.2124 0.493879 12.7928 0.493879 13.1508 0.85186C13.5088 1.20984 13.5088 1.79024 13.1508 2.14822L8.29897 7.00004L13.1508 11.8519C13.5088 12.2098 13.5088 12.7902 13.1508 13.1482C12.7928 13.5062 12.2124 13.5062 11.8544 13.1482L7.0026 8.2964L2.15079 13.1482C1.79281 13.5062 1.2124 13.5062 0.854423 13.1482C0.496442 12.7902 0.496442 12.2098 0.854423 11.8519L5.70624 7.00004L0.854423 2.14822C0.496442 1.79024 0.496442 1.20984 0.854423 0.85186Z"
                              fill="#637381"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                <div className="border-b border-stroke px-4 py-4 dark:border-strokedark sm:px-6 xl:px-7.5">
                  <h3 className="font-medium text-black dark:text-white">
                    Notifications Style 3
                  </h3>
                </div>
                <div className="p-4 sm:p-6 xl:p-10">
                  <div className="max-w-[557px] rounded-lg border border-stroke py-6 pl-4 pr-5.5 dark:border-strokedark dark:bg-meta-4 sm:pl-6">
                    <div className="flex justify-between">
                      <div className="flex flex-grow gap-6">
                        <div>
                          <svg
                            width={30}
                            height={30}
                            viewBox="0 0 30 30"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M11.0163 29.4375C10.5476 29.4375 10.0788 29.2031 9.75071 28.8281C9.14133 28.125 9.32883 27.2344 9.42258 26.8125L12.0945 15.4219H6.75071C6.42258 15.4219 5.81321 15.4219 5.34446 15.0469C4.50071 14.3906 4.73508 13.1719 4.82883 12.7969L6.89133 2.85938C6.98508 2.39063 7.17258 1.59375 7.78196 1.07813C8.39133 0.609375 9.14133 0.609375 9.65696 0.609375H16.3132C16.8757 0.609375 18.0007 0.609375 18.657 1.45313C19.3132 2.29688 19.0788 3.375 18.9851 3.9375L18.282 7.03125L22.8757 7.07813C24.1413 7.07813 24.8913 7.5 25.1726 8.29688C25.4538 9.14063 24.9851 9.89063 24.7038 10.2656L12.8445 28.1719C12.6101 28.5 12.282 29.0156 11.7663 29.25C11.5788 29.3438 11.3445 29.3906 11.157 29.3906C11.1101 29.3906 11.0632 29.4375 11.0163 29.4375ZM9.65696 2.25C9.37571 2.25 9.00071 2.25 8.81321 2.39063C8.62571 2.53125 8.53196 2.95313 8.48508 3.23438L6.46946 13.125C6.37571 13.6406 6.42258 13.7813 6.42258 13.7813C6.46946 13.7813 6.70383 13.7813 6.79758 13.7813H13.1726C13.407 13.7813 13.6413 13.875 13.8288 14.1094C13.9695 14.2969 14.0632 14.5781 13.9695 14.8125L11.0163 27.1875C10.9226 27.6094 10.9226 27.7031 10.9695 27.75C11.0163 27.7969 11.0163 27.7969 11.0163 27.7969C11.157 27.7031 11.3445 27.4688 11.4851 27.2813L23.3445 9.32813C23.5788 9 23.6257 8.85938 23.6257 8.8125C23.5788 8.8125 23.4382 8.71875 22.8757 8.71875L17.2976 8.67188C17.0632 8.67188 16.8288 8.57813 16.6413 8.34375C16.5007 8.15625 16.407 7.875 16.5007 7.64062L17.3913 3.51562C17.4382 3.23438 17.5788 2.625 17.3913 2.4375C17.2038 2.20312 16.5945 2.20312 16.3132 2.20312L9.65696 2.25Z"
                              fill="#3056D3"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="mb-2 text-title-xsm font-medium text-black dark:text-white">
                            New update! available
                          </h4>
                          <p className="font-medium">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nullam nec ligula at dolor aliquam mollis.
                          </p>
                          <button className="mt-5 font-medium text-primary">
                            Update now
                          </button>
                        </div>
                      </div>
                      <div>
                        <button>
                          <svg
                            className="fill-current"
                            width={14}
                            height={14}
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M0.854423 0.85186C1.2124 0.493879 1.79281 0.493879 2.15079 0.85186L7.0026 5.70368L11.8544 0.85186C12.2124 0.493879 12.7928 0.493879 13.1508 0.85186C13.5088 1.20984 13.5088 1.79024 13.1508 2.14822L8.29897 7.00004L13.1508 11.8519C13.5088 12.2098 13.5088 12.7902 13.1508 13.1482C12.7928 13.5062 12.2124 13.5062 11.8544 13.1482L7.0026 8.2964L2.15079 13.1482C1.79281 13.5062 1.2124 13.5062 0.854423 13.1482C0.496442 12.7902 0.496442 12.2098 0.854423 11.8519L5.70624 7.00004L0.854423 2.14822C0.496442 1.79024 0.496442 1.20984 0.854423 0.85186Z"
                              fill
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
   

      <main><div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10"><div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"><h2 className="text-title-md2 font-semibold text-black dark:text-white">Progress</h2><nav><ol className="flex items-center gap-2"><li><a className="font-medium" href="/">Dashboard /</a></li><li className="font-medium text-primary">Progress</li></ol></nav></div><div className="flex flex-col gap-7.5"><div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark"><div className="border-b border-stroke px-4 py-4 dark:border-strokedark sm:px-6 xl:px-7.5"><h3 className="font-medium text-black dark:text-white">Progress Style 1</h3></div><div className="p-4 sm:p-6 xl:p-10"><div className="flex max-w-[470px] flex-col gap-7"><div className="relative h-2.5 w-full rounded-full bg-stroke dark:bg-strokedark"><div className="absolute left-0 h-full w-10/12 rounded-full bg-primary" /></div><div className="relative h-2.5 w-full rounded-full bg-stroke dark:bg-strokedark"><div className="absolute left-0 h-full w-8/12 rounded-full bg-primary" /></div><div className="relative h-2.5 w-full rounded-full bg-stroke dark:bg-strokedark"><div className="absolute left-0 h-full w-11/12 rounded-full bg-primary" /></div></div></div></div><div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark"><div className="border-b border-stroke px-4 py-4 dark:border-strokedark sm:px-6 xl:px-7.5"><h3 className="font-medium text-black dark:text-white">Progress Style 2</h3></div><div className="p-4 sm:p-6 xl:p-10"><div className="flex max-w-[470px] flex-col gap-10 pt-5 xl:pt-4"><div className="relative h-2.5 w-full rounded-full bg-stroke dark:bg-strokedark"><div className="absolute left-0 h-full w-9/12 rounded-full bg-primary"><span className="absolute bottom-full -right-4 z-1 mb-2 inline-block rounded-sm bg-primary px-2 py-1 text-xs font-bold text-white"><span className="absolute -bottom-1 left-1/2 -z-1 h-2 w-2 -translate-x-1/2 rotate-45 bg-primary" />75%</span></div></div><div className="relative h-2.5 w-full rounded-full bg-stroke dark:bg-strokedark"><div className="absolute left-0 h-full w-1/2 rounded-full bg-primary"><span className="absolute bottom-full -right-4 z-1 mb-2 inline-block rounded-sm bg-primary px-2 py-1 text-xs font-bold text-white"><span className="absolute -bottom-1 left-1/2 -z-1 h-2 w-2 -translate-x-1/2 rotate-45 bg-primary" />50%</span></div></div><div className="relative h-2.5 w-full rounded-full bg-stroke dark:bg-strokedark"><div className="absolute left-0 h-full w-4/5 rounded-full bg-primary"><span className="absolute bottom-full -right-4 z-1 mb-2 inline-block rounded-sm bg-primary px-2 py-1 text-xs font-bold text-white"><span className="absolute -bottom-1 left-1/2 -z-1 h-2 w-2 -translate-x-1/2 rotate-45 bg-primary" />80%</span></div></div></div></div></div><div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark"><div className="border-b border-stroke px-4 py-4 dark:border-strokedark sm:px-6 xl:px-7.5"><h3 className="font-medium text-black dark:text-white">Progress Style 3</h3></div><div className="p-4 sm:p-6 xl:p-10"><div className="flex max-w-[470px] flex-col gap-7"><div className="relative h-4 w-full rounded-full bg-stroke dark:bg-strokedark"><div className="absolute left-0 flex h-full w-1/2 items-center justify-center rounded-full bg-primary"><p className="my-auto text-center text-[10px] font-bold leading-none text-white">50%</p></div></div><div className="relative h-4 w-full rounded-full bg-stroke dark:bg-strokedark"><div className="absolute left-0 flex h-full w-4/5 items-center justify-center rounded-full bg-primary"><p className="my-auto text-center text-[10px] font-bold leading-none text-white">80%</p></div></div><div className="relative h-4 w-full rounded-full bg-stroke dark:bg-strokedark"><div className="absolute left-0 flex h-full w-3/4 items-center justify-center rounded-full bg-primary"><p className="my-auto text-center text-[10px] font-bold leading-none text-white">75%</p></div></div></div></div></div><div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark"><div className="border-b border-stroke px-4 py-4 dark:border-strokedark sm:px-6 xl:px-7.5"><h3 className="font-medium text-black dark:text-white">Progress Style 4</h3></div><div className="p-4 sm:p-6 xl:p-10"><div className="flex max-w-[470px] flex-col gap-7"><div className="relative h-2.5 w-full rounded-full bg-stroke dark:bg-strokedark"><div className="absolute left-0 h-full w-10/12 rounded-full bg-primary" /></div><div className="relative h-2.5 w-full rounded-full bg-stroke dark:bg-strokedark"><div className="absolute left-0 h-full w-8/12 rounded-full bg-[#3CA745]" /></div><div className="relative h-2.5 w-full rounded-full bg-stroke dark:bg-strokedark"><div className="absolute left-0 h-full w-11/12 rounded-full bg-[#F9C107]" /></div><div className="relative h-2.5 w-full rounded-full bg-stroke dark:bg-strokedark"><div className="absolute left-0 h-full w-4/12 rounded-full bg-[#DC3545]" /></div><div className="relative h-2.5 w-full rounded-full bg-stroke dark:bg-strokedark"><div className="absolute left-0 h-full w-3/12 rounded-full bg-[#3BA2B8]" /></div></div></div></div></div></div></main>
 




      <main><div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10"><div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"><h2 className="text-title-md2 font-semibold text-black dark:text-white">Badge</h2><nav><ol className="flex items-center gap-2"><li><a className="font-medium" href="/">Dashboard /</a></li><li className="font-medium text-primary">Badge</li></ol></nav></div><div className="flex flex-col gap-7.5"><div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark"><div className="border-b border-stroke px-4 py-4 dark:border-strokedark sm:px-6 xl:px-7.5"><h3 className="font-medium text-black dark:text-white">Badge Style 1</h3></div><div className="p-4 sm:p-6 xl:p-10"><div className="flex flex-wrap items-center gap-2 sm:gap-4.5"><button className="inline-flex rounded bg-primary py-1 px-2 text-sm font-medium text-white hover:bg-opacity-90">Primary</button><button className="inline-flex rounded bg-[#13C296] py-1 px-2 text-sm font-medium text-white hover:bg-opacity-90">Secondary</button><button className="inline-flex rounded bg-[#212B36] py-1 px-2 text-sm font-medium text-white hover:bg-opacity-90">Dark</button><button className="inline-flex rounded bg-[#637381] py-1 px-2 text-sm font-medium text-white hover:bg-opacity-90">Gray</button><button className="inline-flex rounded bg-[#EFEFEF] py-1 px-2 text-sm font-medium text-[#212B36] hover:bg-opacity-90">Light</button><button className="inline-flex rounded bg-[#F9C107] py-1 px-2 text-sm font-medium text-[#212B36] hover:bg-opacity-90">Warning</button><button className="inline-flex rounded bg-[#DC3545] py-1 px-2 text-sm font-medium text-white hover:bg-opacity-90">Danger</button><button className="inline-flex rounded bg-[#3CA745] py-1 px-2 text-sm font-medium text-white hover:bg-opacity-90">Success</button><button className="inline-flex rounded bg-[#3BA2B8] py-1 px-2 text-sm font-medium text-white hover:bg-opacity-90">Info</button></div></div></div><div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark"><div className="border-b border-stroke px-4 py-4 dark:border-strokedark sm:px-6 xl:px-7.5"><h3 className="font-medium text-black dark:text-white">Badge Style 2</h3></div><div className="p-4 sm:p-6 xl:p-10"><div className="flex flex-wrap items-center gap-2 sm:gap-4.5"><button className="inline-flex rounded border border-primary py-1 px-2 text-sm font-medium text-primary hover:opacity-80">Primary</button><button className="inline-flex rounded border border-[#13C296] py-1 px-2 text-sm font-medium text-[#13C296] hover:opacity-80">Secondary</button><button className="inline-flex rounded border border-[#212B36] py-1 px-2 text-sm font-medium text-[#212B36] hover:opacity-80 dark:border-white dark:text-white">Dark</button><button className="inline-flex rounded border border-[#637381] py-1 px-2 text-sm font-medium text-[#637381] hover:opacity-80">Gray</button><button className="inline-flex rounded border border-[#EFEFEF] py-1 px-2 text-sm font-medium text-[#212B36] hover:opacity-80 dark:text-white">Light</button><button className="inline-flex rounded border border-[#F9C107] py-1 px-2 text-sm font-medium text-[#F9C107] hover:opacity-80">Warning</button><button className="inline-flex rounded border border-[#DC3545] py-1 px-2 text-sm font-medium text-[#DC3545] hover:opacity-80">Danger</button><button className="inline-flex rounded border border-[#3CA745] py-1 px-2 text-sm font-medium text-[#3CA745] hover:opacity-80">Success</button><button className="inline-flex rounded border border-[#3BA2B8] py-1 px-2 text-sm font-medium text-[#3BA2B8] hover:opacity-80">Info</button></div></div></div><div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark"><div className="border-b border-stroke px-4 py-4 dark:border-strokedark sm:px-6 xl:px-7.5"><h3 className="font-medium text-black dark:text-white">Badge Style 3</h3></div><div className="p-4 sm:p-6 xl:p-10"><div className="flex flex-wrap items-center gap-2 sm:gap-4.5"><button className="inline-flex rounded-full bg-primary py-1 px-3 text-sm font-medium text-white hover:bg-opacity-90">Primary</button><button className="inline-flex rounded-full bg-[#13C296] py-1 px-3 text-sm font-medium text-white hover:bg-opacity-90">Secondary</button><button className="inline-flex rounded-full bg-[#212B36] py-1 px-3 text-sm font-medium text-white hover:bg-opacity-90">Dark</button><button className="inline-flex rounded-full bg-[#637381] py-1 px-3 text-sm font-medium text-white hover:bg-opacity-90">Gray</button><button className="inline-flex rounded-full bg-[#EFEFEF] py-1 px-3 text-sm font-medium text-[#212B36] hover:bg-opacity-90">Light</button><button className="inline-flex rounded-full bg-[#F9C107] py-1 px-3 text-sm font-medium text-[#212B36] hover:bg-opacity-90">Warning</button><button className="inline-flex rounded-full bg-[#DC3545] py-1 px-3 text-sm font-medium text-white hover:bg-opacity-90">Danger</button><button className="inline-flex rounded-full bg-[#3CA745] py-1 px-3 text-sm font-medium text-white hover:bg-opacity-90">Success</button><button className="inline-flex rounded-full bg-[#3BA2B8] py-1 px-3 text-sm font-medium text-white hover:bg-opacity-90">Info</button></div></div></div><div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark"><div className="border-b border-stroke px-4 py-4 dark:border-strokedark sm:px-6 xl:px-7.5"><h3 className="font-medium text-black dark:text-white">Badge Style 4</h3></div><div className="p-4 sm:p-6 xl:p-10"><div className="flex flex-wrap items-center gap-2 sm:gap-4.5"><button className="inline-flex rounded-full border border-primary py-1 px-3 text-sm font-medium text-primary hover:opacity-80">Primary</button><button className="inline-flex rounded-full border border-[#13C296] py-1 px-3 text-sm font-medium text-[#13C296] hover:opacity-80">Secondary</button><button className="inline-flex rounded-full border border-[#212B36] py-1 px-3 text-sm font-medium text-[#212B36] hover:opacity-80 dark:border-white dark:text-white">Dark</button><button className="inline-flex rounded-full border border-[#637381] py-1 px-3 text-sm font-medium text-[#637381] hover:opacity-80">Gray</button><button className="inline-flex rounded-full border border-[#EFEFEF] py-1 px-3 text-sm font-medium text-[#212B36] hover:opacity-80 dark:text-white">Light</button><button className="inline-flex rounded-full border border-[#F9C107] py-1 px-3 text-sm font-medium text-[#F9C107] hover:opacity-80">Warning</button><button className="inline-flex rounded-full border border-[#DC3545] py-1 px-3 text-sm font-medium text-[#DC3545] hover:opacity-80">Danger</button><button className="inline-flex rounded-full border border-[#3CA745] py-1 px-3 text-sm font-medium text-[#3CA745] hover:opacity-80">Success</button><button className="inline-flex rounded-full border border-[#3BA2B8] py-1 px-3 text-sm font-medium text-[#3BA2B8] hover:opacity-80">Info</button></div></div></div></div></div></main>
 
      </DefaultLayout>
    </>
  );
};

export default Notification;
