import React from 'react'
import './Books.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'


function Books() {

  const book_array = [
    {
      title: "Shri Datta Vedam",
      description: "A series of speeches given by His Holiness Shri Datta Swami at Srisailam"
    },
    {
      title: "Sri Datta Guru Bhagavat Gita",
      description: "Song of Preacher-God Shri Datta"
    },
    {
      title: "Avatara Sutras",
      description: "Condensed Aphorisms on the Human Incarnation God"
    },
    {
      title: "Questions and Answers",
      description: "Swami answers to the questions asked by various devotees"
    }
  ];

  return (
    <div className="b-wrapper" >
      <div className="b-heading">
        <span>Spiritual Books</span>
        <span>written by Swami</span>
        <span>All the divine works of Swamiji are available for free download.</span>
        <br />
        <button className="button n-button">View All</button>
        <div className="blur b-blur1" style={{ background: "var(--purple)" }}></div>
        <div className="blur b-blur2" style={{ background: "skyblue" }}></div>
      </div>   
      <Swiper
        spaceBetween={30}
        slidesPerView={4}
        grabCursor={true}
        className="books-slider"
      >
          {book_array.map((client, index)=>{
            return(
              <SwiperSlide key={index}>
              <div className='eachbook'>
                  <span>{client.title}</span>
                  <span>{client.description}</span>
                  <button className="c-button">Download</button>
              </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  )
}

export default Books