import Image from 'next/image'
import React from 'react'

const Services = () => {
  return <section className="body-font mb-[100px] mt-[100px]">
  <div className="container px-5  mx-auto">
    <div className="text-center mb-10">
      <h1 className="text-myBlackHead scroll-m-20 text-xl font-extrabold tracking-tight lg:text-2xl">
        Our Services
      </h1>
      <div className="flex mt-2 justify-center">
        <div className="w-16 h-1 rounded-full bg-myRedColour inline-flex" />
      </div>
    </div>
    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
      {/*Delivery*/}
      <div className="group p-4 mx-auto lg:w-1/3 flex flex-col text-center items-center">
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full mb-5 flex-shrink-0">
          <Image src={require("../../public/van.png")} alt='Delivery' width={100} height={100} className='w-20 h-20' />
        </div>
        <div className="flex-grow">
          <h2 className="text-myBlackHead group-hover:text-myRedColour duration-300 capitalize scroll-m-20 text-lg font-bold tracking-tight lg:text-xl mb-3">
            Free Delivery
          </h2>
          <p className="text-myBlackPara group-hover:text-myBlackPara/80 line-clamp-2 scroll-m-20 text-base font-semibold tracking-tight">
           Free Delivery on order Above $100
          </p>
        </div>
      </div>
      {/*24/7 services*/}
      <div className="group p-4 mx-auto lg:w-1/3 flex flex-col text-center items-center">
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full mb-5 flex-shrink-0">
          <Image src={require("../../public/customerService.png")} alt='Delivery' width={100} height={100} className='w-20 h-20' />
        </div>
        <div className="flex-grow">
          <h2 className="text-myBlackHead group-hover:text-myRedColour duration-300 capitalize scroll-m-20 text-lg font-bold tracking-tight lg:text-xl mb-3">
           24/7 customer service
          </h2>
          <p className="text-myBlackPara group-hover:text-myBlackPara/80 line-clamp-2 scroll-m-20 text-base font-semibold tracking-tight transition-colors">
           For Queries and questions Feel Free to Contact
          </p>
        </div>
      </div>
      {/*Money Back*/}
      <div className="group p-4 mx-auto lg:w-1/3 flex flex-col text-center items-center">
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full mb-5 flex-shrink-0">
          <Image src={require("../../public/moneyBack.webp")} alt='Delivery' width={100} height={100} className='w-20 h-20' />
        </div>
        <div className="flex-grow">
          <h2 className="text-myBlackHead group-hover:text-myRedColour duration-300 capitalize scroll-m-20 text-lg font-bold tracking-tight lg:text-xl mb-3">
            Money Back Gurantee
          </h2>
          <p className="text-myBlackPara group-hover:text-myBlackPara/80 line-clamp-2 scroll-m-20 text-base font-semibold tracking-tight">
           Get Money Back Gurantee On Damage Products
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
}
export default Services