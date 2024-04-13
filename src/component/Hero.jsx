import React from 'react'
import { Books } from '../data'
const Hero = () => {
  return (
    <>
        <div className='mt-16 mx-10 md:mx-40 flex gap-28'>
           <div>
                <h1 className='text-7xl font-bold mb-10'>Unlock Worlds, <br />turn pages...</h1>
                <p className='text-xl'>
                    "Journey through the pages, find solace in words, and let the stories within shape your world. "
                </p>
           </div>
           <div className='w-72'>
              <swiper-container effect = "cards" autoplay="true">
                {
                  Books.map((book, i) => (
                    <swiper-slide>
                      <img src={book.book_cover} alt={book.title} width="200px" />
                    </swiper-slide>
                  ))
                }
              </swiper-container>
           </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#D3D9D1" fill-opacity="1" d="M0,64L18.5,80C36.9,96,74,128,111,165.3C147.7,203,185,245,222,218.7C258.5,192,295,96,332,80C369.2,64,406,128,443,154.7C480,181,517,171,554,149.3C590.8,128,628,96,665,122.7C701.5,149,738,235,775,250.7C812.3,267,849,213,886,160C923.1,107,960,53,997,53.3C1033.8,53,1071,107,1108,112C1144.6,117,1182,75,1218,69.3C1255.4,64,1292,96,1329,106.7C1366.2,117,1403,107,1422,101.3L1440,96L1440,320L1421.5,320C1403.1,320,1366,320,1329,320C1292.3,320,1255,320,1218,320C1181.5,320,1145,320,1108,320C1070.8,320,1034,320,997,320C960,320,923,320,886,320C849.2,320,812,320,775,320C738.5,320,702,320,665,320C627.7,320,591,320,554,320C516.9,320,480,320,443,320C406.2,320,369,320,332,320C295.4,320,258,320,222,320C184.6,320,148,320,111,320C73.8,320,37,320,18,320L0,320Z"></path></svg>
    </>
  )
}

export default Hero