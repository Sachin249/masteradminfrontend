import React  from 'react'

const Alert = (props) => {

  return (
  
  
    
      props.alertBox&&
    props.alert && 

<div className='w-screen h-screen flex justify-center items-center bg-black/70 fixed top-0 right-0 opacity-100 z-9999'>

<div className='bg-white'>
<div
  className=
  {props?.alert?.color==='green'?'flex w-full flex-col rounded border-[0.5px] border-emerald-100 bg-emerald-50 px-8 py-8 text-sm text-emerald-500 border-l-6 border-[#34D399] bg-[#34D399] bg-opacity-[15%] dar:bg-[#1B1B24]  shadow-sm':'flex w-full flex-col rounded border-[0.5px] border-emerald-100 bg-emerald-50 px-8 py-8 text-sm text-emerald-500 border-l-6 border-[#f97d79] bg-[#fc865e] bg-opacity-[15%] dar:bg-[#1B1B24]  shadow-sm'}
  role="alert"
>

  <div className="mb-2 flex items-center gap-4">
  
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-12 w-12 shrink-0 bg-[#34D3"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.5"
      role="graphics-symbol"
      aria-labelledby="title-21 desc-21"
    >
      <title id="title-21">Icon title</title>
      <desc id="desc-21">A more detailed description of the icon</desc>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>

    <h3 className="flex-1 font-semibold text-[15px]"
    style={{color:props.alert?.color}}>
    {props.alert.message}
    </h3>

    <button
      aria-label="Close"
      className="inline-flex h-8 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded-full px-4 text-xs font-medium tracking-wide text-emerald-500 transition duration-300 hover:bg-emerald-100 hover:text-emerald-600 focus:bg-emerald-200 focus:text-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:text-emerald-300 disabled:shadow-none disabled:hover:bg-transparent"
      onClick={()=> props.setAlertBox(false)} 
    >
      <span className="relative only:-mx-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.5"
          role="graphics-symbol"
          aria-labelledby="title-22 desc-22"
        >
          <title id="title-22">Icon title</title>
          <desc id="desc-22">
            A more detailed description of the icon
          </desc>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </span>
    </button>
  </div>

 
 
   {/* <div className="mt-4 flex gap-2 px-9">
    <button className="inline-flex h-8 items-center justify-center gap-2 whitespace-nowrap rounded bg-emerald-500 px-4 text-xs font-medium tracking-wide text-white transition duration-300 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
      <span>proceed</span>
    </button>
    <button className="inline-flex h-8 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded px-4 text-xs font-medium tracking-wide text-emerald-500 transition duration-300 hover:bg-emerald-100 hover:text-emerald-600 focus:bg-emerald-200 focus:text-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:text-emerald-300 disabled:shadow-none disabled:hover:bg-transparent">
      <span className="relative">Cancel</span>
    </button>
  </div> */}
</div>
</div>
</div> 

 
    
  )
}

export default Alert





{/* <div>
<div className="popup-box z-10 sm:hidde max-w-[px]">
<div className=" bo max-w-[278px] mx-auto bg-white mt-[250px] p-5 rounded-sm lg:relative lg:left-[140px]">


<span style={{display: "flex",  justifyContent: "center",  alignItems: "center"}}>{props.alert.color==="red"?<RxCrossCircled size={90} color="#ab408a" />:<AiOutlineCheckCircle size={90} color="#ab408a"/>}</span>


<h1 className=" text-center" style={{fontSize:'18px',paddingBottom:'20px',marginTop:'17px',
 color:props.alert?.color}} >{props.alert.message}</h1>

    <Button style={{width:'30%',left: '35%',background: '#ab408a',color: '#fff' ,marginTop:-25,marginBottom:5,}}
onClick={ ()=> props.setAlertBox(false)}   
>
OK</Button>
 
</div>

</div>
</div>  */}


{/* <div className=''>
<div className='max-w-[400px] mx-auto mt-2 absolute opacity-80 z-99999 left-54 top-[50%]'>
<div
  className=
  'flex w-full flex-col rounded border-[0.5px] border-emerald-100 bg-emerald-50 px-3 py-5 text-sm text-emerald-500 border-l-6 border-[#34D399] bg-[#34D399] bg-opacity-[15%] dar:bg-[#1B1B24]  shadow-sm'
  role="alert"
>

  <div className="mb-2 flex items-center gap-4">
  
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-12 w-12 shrink-0 bg-[#34D3"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.5"
      role="graphics-symbol"
      aria-labelledby="title-21 desc-21"
    >
      <title id="title-21">Icon title</title>
      <desc id="desc-21">A more detailed description of the icon</desc>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>

    <h3 className="flex-1 font-semibold text-[15px]">
    {props.alert.message}
    </h3>

    <button
      aria-label="Close"
      className="inline-flex h-8 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded-full px-4 text-xs font-medium tracking-wide text-emerald-500 transition duration-300 hover:bg-emerald-100 hover:text-emerald-600 focus:bg-emerald-200 focus:text-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:text-emerald-300 disabled:shadow-none disabled:hover:bg-transparent"
      onClick={()=> props.setAlertBox(false)} 
    >
      <span className="relative only:-mx-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.5"
          role="graphics-symbol"
          aria-labelledby="title-22 desc-22"
        >
          <title id="title-22">Icon title</title>
          <desc id="desc-22">
            A more detailed description of the icon
          </desc>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </span>
    </button>
  </div>

 
 
   <div className="mt-4 flex gap-2 px-9">
    <button className="inline-flex h-8 items-center justify-center gap-2 whitespace-nowrap rounded bg-emerald-500 px-4 text-xs font-medium tracking-wide text-white transition duration-300 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
      <span>proceed</span>
    </button>
    <button className="inline-flex h-8 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded px-4 text-xs font-medium tracking-wide text-emerald-500 transition duration-300 hover:bg-emerald-100 hover:text-emerald-600 focus:bg-emerald-200 focus:text-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:text-emerald-300 disabled:shadow-none disabled:hover:bg-transparent">
      <span className="relative">Cancel</span>
    </button>
  </div>
</div>
</div> 
</div> */}
