import { title } from 'process'
import React from 'react'
import Image from 'next/image'
const PodcastCard = ({id,title,imgURL,description}: {id: number,title:string,imgURL:string,description:string}) => {
  return (
    <div className='cursor-pointer'>
        <figure className='flex flex-col gap-2'>
            <Image src={imgURL} width={174} height={174} alt={title} className='aspect-square h-fit w-full rounded-xl 2xl:size-[200px]'/>
            <div className='flex flex-col'>
                <h1 className='text-16 text-white-1 truncate font-bold'>{title}</h1>
                <h2 className='text-12 text-white-1 truncate font-normal capitalize'>{description}</h2>
            </div>
        </figure>
    </div>
  )
}

export default PodcastCard