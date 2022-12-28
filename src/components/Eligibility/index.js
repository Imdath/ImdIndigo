import {TiTick} from 'react-icons/ti'

import './index.css'

const Eligibility = () => (
  <div className="eligibility-container">
    <div className="placement-heading-container">
      <h1 className="wcu-heading">ACCA - Eligibility</h1>
      <hr className="hr-line" />
    </div>
    <div className="eligible-description-container">
      <h1 className="eligibility-heading">
        To appear for the ACCA course examination a candidate should have
      </h1>
      <div className="eligible-description">
        <TiTick className="tick-icon" />
        <p className="eligible-para">Qualified the 10+2 exams</p>
      </div>
      <div className="eligible-description">
        <TiTick className="tick-icon" />
        <p className="eligible-para">
          An aggregate of 65% in Mathematics / Accounts and English and a
          minimum of 50% in other subjects
        </p>
      </div>
      <div className="eligible-description">
        <TiTick className="tick-icon" />
        <p className="eligible-para">
          Others can still register for the ACCA course with Foundation in
          Accountancy (FIA)
        </p>
      </div>
    </div>
  </div>
)

export default Eligibility
