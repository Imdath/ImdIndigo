import {HiOutlineLightBulb} from 'react-icons/hi'

import {MdMenuBook, MdTimer} from 'react-icons/md'

import {TiGroup} from 'react-icons/ti'

import {GiAudioCassette} from 'react-icons/gi'

import {BsLaptop, BsCalendarCheck} from 'react-icons/bs'

import './index.css'

const WhyChooseUs = () => (
  <div className="wcu-container">
    <div className="wcu-heading-container">
      <h1 className="wcu-heading">Why Choose Us ?</h1>
      <hr className="hr-line" />
    </div>
    <div className="wcu-cards">
      <div className="expert-card">
        <HiOutlineLightBulb className="expert-icon" />
        <h1 className="expert-heading">Expert Faculty</h1>
        <p className="expert-description">
          Our Faculty are subject matter expertise with practical experience.
          They believe in #StudentFirst principle
        </p>
      </div>
      <div className="expert-card">
        <TiGroup className="expert-icon" />
        <h1 className="expert-heading">Complete Success Package</h1>
        <p className="expert-description">
          Leading Exam Prep Destination with Video classes, Live sessions, Doubt
          resolution Forums, E-notes from Kaplan, MCQs, Practice tests,
          Webinars.
        </p>
      </div>
      <div className="expert-card">
        <GiAudioCassette className="expert-icon" />
        <h1 className="expert-heading">Placements</h1>
        <p className="expert-description">
          Resume building workshops, mock interviews and placement drives will
          help you impress the top employers and get the dream job.
        </p>
      </div>
    </div>
    <div className="other-cards-container">
      <div className="other-card">
        <h1 className="other-heading">Levels</h1>
        <div className="other-icon-container">
          <MdMenuBook className="other-icon" />
          <p className="other-description">Three (13 papers)</p>
        </div>
      </div>
      <div className="other-card">
        <h1 className="other-heading">Duration</h1>
        <div className="other-icon-container">
          <MdTimer className="other-icon" />
          <p className="other-description">6-30 months</p>
        </div>
      </div>
      <div className="other-card">
        <h1 className="other-heading">Exams</h1>
        <div className="other-icon-container">
          <BsLaptop className="other-icon" />
          <p className="other-description">Quarterly (Online)</p>
        </div>
      </div>
      <div className="other-card">
        <h1 className="other-heading">Exemptions</h1>
        <div className="other-icon-container">
          <BsCalendarCheck className="other-icon" />
          <p className="other-description">Upto 9 papers</p>
        </div>
      </div>
    </div>
  </div>
)

export default WhyChooseUs
