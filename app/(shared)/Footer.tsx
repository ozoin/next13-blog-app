import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-wh-900 text-wh-50 py-10 px-10">
        <div className="justify-betweem mx-auto gap-16 sm:flex">
            <div className="mt-16 basis-1/2 sm:mt-0">
                <h4 className="font-bold"> BLOG OF THE FUTURE</h4>
                <p className="my-5"> BLOG DECRIPTION</p>
            </div>

            <div className="mt-16 basis-1/4 sm:mt-0">
                <h4 className="font-bold">LINKS</h4>
                <p className="my-5"> Massa orc senectus</p>
                <p className="my-5"> Some random link again</p>
                <p> Random text</p>
            </div>

            <div className="mt-16 basis-1/4 sm:mt-0">
                <h4 className="font-bold">LINKS</h4>
                <p className="my-5"> Massa orc senectus</p>
                <p className="my-5"> Some random link again</p>
                <p> Random text</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer