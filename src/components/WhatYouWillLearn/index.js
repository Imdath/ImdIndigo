import './index.css'

const WhatYouWillLearn = () => (
  <div className="wywl-section">
    <div className="placement-heading-container">
      <h1 className="wcu-heading">What will you Learn in ACCA?</h1>
      <hr className="hr-line" />
    </div>
    <div className="wywl-cards-container">
      <div className="wywl-card">
        <div className="card-heading-container">
          <h1 className="wywl-card-heading">Knowledge Level</h1>
        </div>
        <ul className="card-description-container">
          <li className="wywl-card-details">Business and Technology (BT)</li>
          <li className="wywl-card-details">Management Accounting (MA)</li>
          <li className="wywl-card-details">Financial Accounting (FA)</li>
        </ul>
        <div className="card-footer-container">
          <h1 className="wywl-card-heading">3 papers</h1>
        </div>
      </div>
      <div className="wywl-card">
        <div className="card-heading-container">
          <h1 className="wywl-card-heading">Skill Level</h1>
        </div>
        <ul className="card-description-container">
          <li className="wywl-card-details">Corporate and Business Law (LW)</li>
          <li className="wywl-card-details">Performance Management (PM)</li>
          <li className="wywl-card-details">Taxation (TX)</li>
          <li className="wywl-card-details">Financial Reporting (FR)</li>
          <li className="wywl-card-details">Audit and Assurance (AA)</li>
          <li className="wywl-card-details">Financial Management (FM)</li>
        </ul>
        <div className="card-footer-container">
          <h1 className="wywl-card-heading">6 papers</h1>
        </div>
      </div>
      <div className="wywl-card">
        <div className="card-heading-container">
          <h1 className="wywl-card-heading">Professional Level</h1>
        </div>
        <ul className="card-description-container">
          <h1 className="card-inside-heading">Compulsory</h1>
          <li className="wywl-card-details">SBL - Strategic Business Leader</li>
          <li className="wywl-card-details">
            SBR - Strategic Business Reporting
          </li>
          <h1 className="card-inside-heading">Two out of the following</h1>
          <li className="wywl-card-details">
            Advanced Financial Management (AFM)
          </li>
          <li className="wywl-card-details">
            Advanced Performance Management (APM)
          </li>
          <li className="wywl-card-details">Advanced Taxation (ATX)</li>
          <li className="wywl-card-details">
            Advanced Audit and Assurance (AAA)
          </li>
        </ul>
        <div className="card-footer-container">
          <h1 className="wywl-card-heading">3 papers</h1>
        </div>
      </div>
    </div>
  </div>
)

export default WhatYouWillLearn
