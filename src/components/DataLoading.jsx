import React from 'react'

const DataLoading = () => {
  return (
   <>
     <div className='className="fixed left-0 top-0 z-999999 h-screen flex items-center flex-col justify-center w-scree bg-white/10 dark:bg-black lg:left-[-100px]'>
     {/* <div id="" className="fixed left-0 top-0 z-999999 h-screen flex items-center justify-center w-screen bg-white/20">
      <div className="w-16 h-16 rounded-full  border-6 border-solid border-[#13ef63] border-t-transparent animate-spin"></div>
      <h1>Loading...</h1>
    </div> */}

    <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-live="polite"
        aria-busy="true"
        aria-labelledby="title-08a desc-08a"
        className="h-16 w-16"
      >
        <title id="title-08a">Icon title</title>
        <desc id="desc-08a">Some desc</desc>
        <path
          d="M7 8H3V16H7V8Z"
          className="animate animate-bounce fill-[#13ef63] "
        />
        <path
          d="M14 8H10V16H14V8Z"
          className="animate animate-bounce fill-[#13ef63] [animation-delay:.2s]"
        />
        <path
          d="M21 8H17V16H21V8Z"
          className="animate animate-bounce fill-[#13ef63] [animation-delay:.4s]"
        />
      </svg>
      <h1>Loading...</h1>
     
      </div>
   </>
  )
}

export default DataLoading