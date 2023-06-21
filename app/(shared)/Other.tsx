import React from 'react'
import Card from './Card'
import { Post } from '@prisma/client'

type Props = {
  otherPosts?: Array<Post>
}

const Other = ({otherPosts}: Props) => {
  return (
    <section className="pt-4 mb-16">
        <hr className="border-1" />
        <p className='font-bold text-2xl my-8'>Other trending posts</p>
        <div className="sm:grid grid-cols-2 gap-16">
            <Card imageHeight='h-80' isLongForm={true} className="bg-wh-500 mt-5 sm:mt-0" post={otherPosts[0]}></Card>
            <Card imageHeight='h-80' isLongForm={true} className="bg-wh-500 mt-5 sm:mt-0" post={otherPosts[1]}></Card>
            <Card imageHeight='h-80' isLongForm={true} className="bg-wh-500 mt-5 sm:mt-0" post={otherPosts[2]}></Card>
            <Card imageHeight='h-80' isLongForm={true} className="bg-wh-500 mt-5 sm:mt-0" post={otherPosts[3]}></Card>
        </div>
    </section>
  )
}

export default Other