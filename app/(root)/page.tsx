"use client";
import React from 'react'
import { Button } from "@/components/ui/button"
import { podcastData } from '@/constants'
import PodcastCard from '@/components/ui/PodcastCard'
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";





const Home = () => {
  // const tasks = useQuery(api.tasks.get);
  return (
    <div className='mt-9 flex flex-col gap-9'>
      <section className='flex flex-col gap-5'>
        <h1 className='text-20 text-white-1 font-bold'>Trending Podcasts</h1>

        <div className="flex min-h-screen flex-col items-center justify-between p-24 text-white-1">
      {/* {tasks?.map(({ _id, text }) => <div key={_id}>{text}</div>)} */}
    </div>

        <div className='podcast_grid'>
          {podcastData.map(({id,title,imgURL,description}) => (
            <PodcastCard key={id} id={id} title={title} imgURL={imgURL} description={description}/>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home