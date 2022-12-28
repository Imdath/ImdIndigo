import {useState} from 'react'

import {BsFillEmojiSmileFill, BsFillPeopleFill} from 'react-icons/bs'

import {MdOutlineMenuBook} from 'react-icons/md'

import {FaPlayCircle} from 'react-icons/fa'

import './index.css'

const BecomeAcca = () => {
  const [request, setRequest] = useState(false)

  const submitForm = event => {
    event.preventDefault()
    setRequest(true)
  }

  const closeButton = () => {
    setRequest(false)
  }

  const showModal = () => (
    <div className="modal">
      <div className="overlay">
        <div className="modal-content">
          <h1 className="request-success">Request Successful</h1>
          <button type="button" onClick={closeButton} className="ok-button">
            OK
          </button>
        </div>
      </div>
    </div>
  )

  return (
    <>
      <div className="become-container">
        <div className="become-des-container">
          <h1 className="become-heading">Become ACCA in 18 months</h1>
          <p className="become-para">
            Acquire globally recognized accountancy qualification, ACCA (also
            called as Global CA), and get placed in top MNCs & Big4s. Begin ACCA
            prep with 1FIN now.
          </p>
          <ul className="become-cards-container">
            <li className="become-card">
              <div className="become-icon-container">
                <BsFillEmojiSmileFill className="become-icon" />
                <h1 className="icon-heading">Registered Users</h1>
              </div>
              <p className="users">249,022</p>
            </li>
            <li className="become-card">
              <div className="become-icon-container">
                <MdOutlineMenuBook className="become-icon" />
                <h1 className="icon-heading">Courses Enrolled</h1>
              </div>
              <p className="users">65,171</p>
            </li>
            <li className="become-card">
              <div className="become-icon-container">
                <FaPlayCircle className="become-icon" />
                <h1 className="icon-heading">Minutes Watched</h1>
              </div>
              <p className="users">2,090,935,459</p>
            </li>
            <li className="become-card">
              <div className="become-icon-container">
                <BsFillPeopleFill className="become-icon" />
                <h1 className="icon-heading">Faculty</h1>
              </div>
              <p className="users">8 Experts</p>
            </li>
          </ul>
          <div className="button-container">
            <button className="brochure-button" type="button">
              Download Brochure
            </button>
            <img
              className="kickoff-image"
              src="https://res.cloudinary.com/dextfnjwj/image/upload/v1672214703/Screenshot_360_ayiimo.png"
              alt="kick off"
            />
          </div>
        </div>
        <form className="form-container" onSubmit={submitForm}>
          <h1 className="form-heading">
            Aspiring to be an ACCA? Get in touch with us!
          </h1>
          <input
            type="text"
            className="text-input"
            placeholder="Phone Number*"
          />
          <input type="email" className="text-input" placeholder="Email ID" />
          <select className="text-input">
            <option>CA</option>
            <option>Bcom</option>
            <option>CS</option>
            <option>CMA</option>
            <option>Other</option>
          </select>
          <select className="text-input">
            <option>ACCA Level 1</option>
            <option> ACCA Level 2</option>
            <option>ACCA Level 3</option>
          </select>
          <button type="submit" className="text-input button-request">
            Request Call Back
          </button>
        </form>
      </div>
      {request && showModal()}
    </>
  )
}

export default BecomeAcca
