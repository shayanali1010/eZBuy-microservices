import React from 'react'

const Categories = () => {
    const categories: string[] = ['Laptops', 'PC & Computers', 'Cell Phones', 'Tablets', 'Gaming & VR', 'Networking', 'Cameras', 'Sounds', 'Office', 'Storage, USB', 'Accessories', 'Clearance']
  return (
    <div className='text-[13px] min-h-[180px] sm:min-h-[97%] lg:min-h-[470px] bg-white md:pt-5 pt-14 px-12 leading-[30px] align-middle font-semibold text-black list-none rounded-lg'>
      {categories.map((item, key)=>(
        <li className="cursor-pointer hover:text-green-500" key={key}>{item}</li>
      ))}
    </div>
  )
}

export default Categories
