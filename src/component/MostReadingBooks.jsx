import React from 'react'
import { Books } from '../data'


const MostReadingBooks = () => {
  return (
    <div className='mx-20 my-10'>
      <h1 className='text-xl font-bold mb-5'>Most Reading Books</h1>
      <swiper-container slides-per-view = "5" autoplay="true" enabled="true">
        {
          Books.map((book, i)=>(
            <swiper-slide>
              <div className='flex flex-col items-center'>
                <a  href="">
                  <img src={book.book_cover} alt={book.title} width="200px" />
                </a>
              </div>
            </swiper-slide>
          ))
        }
      </swiper-container>
    </div>
  )
}

export default MostReadingBooks