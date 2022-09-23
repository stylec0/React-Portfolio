import React from 'react'
import './Recommendations.css'
import PIC1 from '../../assets/ArthurD.jpg'
import PIC2 from '../../assets/Jason-Nguyen.jpg'
import PIC3 from '../../assets/Elsbeth.png'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Navigation } from "swiper";

const data = [
  {
    pic: PIC1,
    name: 'Arthur Damato',
    review: 'I had the distinct pleasure of teaching Charles while he went through a 12-week, full-stack, coding bootcamp at General Assembly. Charles was an exemplary student who went above and beyond the class, took initiative, and produced great work. I was impressed by the projects that he produced and his aptitude for the languages we were teaching. In Charles, you will find an employee who works hard and is curious. Someone who is a consummate learner, and who tries their best. I believe that whatever roles he takes, he will prove himself more than capable in short time. In addition to his work skills, Charles is an affable man who can make friends easily. In collaborative team environments, having his skills for communication will be an asset for team building and project management. These soft skills are an excellent complement to his hard skills and that is why I recommend Charles to any potential employer.'
  },
  {
    pic: PIC2,
    name: 'Jason Nguyen',
    review: 'If you are looking for a committed and passionate professional who excels in the IT field, Charles is no doubt a strong candidate for IT and business recruiters. Not only is he capable of resolving IT-related problems with critical thinking skills, Charles is capable at breaking down problems or projects to a step-by-step results-driven method for his team and himself. Throughout the Learning and Development phase at Year Up, he consistently surprised me with his quick ability to adopt feedback and apply them to furthering his own professional experience and to others. Charles is a great team dynamic when accomplishing a task or project goal. He is incredibly diverse in his background in graphic, programming, and windows-based platforms. Without a doubt, I am looking forward to his bright career and potential to excel in all that he does.'
  },
  {
    pic: PIC3,
    name: 'Elsbeth Cockcroft',
    review: 'Charles is a self-motivator that is willing to work for the good of the whole. His personality and experiences have made him an ideal candidate for working with others. He is not a “me first” kind of person; instead Charles wants to see everyone achieve success. I was repeatedly impressed with Charles’s decision making skills and his willingness to work for what must be done. Charles is a man who truly understands the meaning of responsibility and commitment; if he is set to a task not only will he complete it, but it will be done to the best of his ability in a manner that goes above and beyond the stated expectations. '
  },
]


const Recommendations = () => {
  return (
    <section id='recommendations'>
      <h2 className='section-headers'>Recommendations</h2>

      <Swiper className="container recommendations_container"
      // install Swiper modules
      modules={[Navigation, Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ dynamicBullets: true, clickable: true }}>
        {
          data.map(({pic, name, review}, index) => {
            return (
      <SwiperSlide className="recommendation">
        <div className="client_avatar">
          <img src={pic} alt='Icon One'/>
          </div>
          <h5 classaName='client_name'>{name}</h5>
          <small className='client_review'>{review}</small>
      </SwiperSlide>
            )
          })
        }
    </Swiper>
    </section>
  )
}

export default Recommendations