import React from 'react'

const Loader = () => {
  return (
   <>
      <div id="" className="fixed left-0 top-0 z-999999 h-screen flex items-center justify-center w-screen bg-white/20">
      <div className="w-16 h-16 rounded-full animate-spin border-4 border-solid border-primary border-t-transparent"></div>
    </div>
   </>
  )
}

export default Loader