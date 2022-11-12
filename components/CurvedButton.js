import React from 'react'

const CurvedButton = ({width, height, bg, title}) => {
  return (
    <div className={`${width} ${height} ${bg} flex flex-row justify-center items-center rounded-2xl border-t-[1px] border-l-[1px] border-b-[3px] border-r-[3px]`}>
        <span className='font-medium text-base'>{title}</span>
    </div>
  )
}

export default CurvedButton