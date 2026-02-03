import Image from 'next/image'
import './DocuSignSuccess.css'

export default function DocuSignSuccessPage() {
  return (
    <div className="docusign-success">
      <div className="docusign-success-inner">
      

        <div className="docusign-success-card">
          <div className="docusign-success-icon-wrap">
            <div className="docusign-success-icon">
              <svg fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>

          <h1 className="docusign-success-title">
            Document Signed Successfully!
          </h1>

          <p className="docusign-success-message">
            Thank you for signing the document.
          </p>
          <p className="docusign-success-next">
            Please proceed to the next step to complete your application.
          </p>
        </div>
      </div>
    </div>
  )
}
