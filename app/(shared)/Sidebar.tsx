import React from 'react'
import Subscribe from './Subscribe'

type Props = {}

const Sidebar = (props: Props) => {
  return (
    <section>
        <h4 className="bg-wh-900 py-3 px-5 text-wh-50 text-center text-sm font-bold">
            Subscribe and follow!
        </h4>
        <Subscribe/>
        <div className="bg-wh-900 my-8">
            Advert image
        </div>
        <h4 className="bg-wh-900 py-3 px-5 text-wh-50 text-center text-sm font-bold">
            About the blog
        </h4>
        <div className="bg-wh-900 my-8">
            Profile Image
        </div>
        <h4 className=" py-3 px-5 text-wh-500 text-center font-bold">
            Jeffrey Epstein
        </h4>
        <p className='text-wh-500 text-center text-sm'>Some textSome textSome textSome textSome textSome textSome text</p>
    </section>
  )
}

export default Sidebar