import {useState} from 'react'

import './index.css'

const KickOff = () => {
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
      <div className="kickoff-container">
        <div className="kickoff-description-container">
          <h1 className="kickoff-heading">
            Kick off your ACCA Prep journey with IndigoLearn
          </h1>
          <p className="kickoff-para">
            Sign-in and get instant access to our FREE Courses
          </p>
          <img
            className="kickoff-image"
            src="https://res.cloudinary.com/dextfnjwj/image/upload/v1672214703/Screenshot_360_ayiimo.png"
            alt="kick off"
          />
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

export default KickOff
