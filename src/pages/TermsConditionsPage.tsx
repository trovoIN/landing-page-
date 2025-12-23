import { useEffect } from 'react'

const TermsConditionsPage = () => {
  useEffect(() => {
    document.title = 'Terms & Conditions - Trovo Fintech'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-night-900 text-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-trovo-green to-trovo-green-dark text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms & Conditions</h1>
          <p className="text-xl opacity-90">Terms of service for using Trovo Fintech platform</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 text-white">
        <div className="container-custom max-w-4xl">
          {/* Eligibility */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">1. Eligibility</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Users must be at least 18 years old and legally competent to contract under Indian law</li>
              <li>Certain financial services (e.g., credit card-linked loans, BNPL, or P2P lending) require a minimum CIBIL score of 675+</li>
              <li>Users must have a valid PAN and bank account in India</li>
            </ul>
          </div>

          {/* User Responsibilities */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">2. User Responsibilities</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Provide accurate and truthful details during registration and while using services</li>
              <li>Keep login credentials confidential and secure</li>
              <li>Report unauthorized use immediately to Trovo support</li>
              <li>Use services only for lawful and personal purposes</li>
              <li>Ensure timely repayment of loans, EMIs, and other obligations availed via Trovo</li>
            </ul>
          </div>

          {/* Usage of Services */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">3. Usage of Services</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Each user is entitled to one account unless Trovo explicitly allows multiple accounts</li>
              <li>Services include: credit card bill management, UPI transactions, reward redemptions, credit score tracking, shared credit tracker, and loan facilitation</li>
              <li>Trovo reserves the right to update, modify, or discontinue any service at its discretion</li>
              <li>Continued usage after updates implies acceptance of modified terms</li>
            </ul>
          </div>

          {/* Prohibited Activities */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">4. Prohibited Activities</h2>
            <p className="text-gray-700 mb-4">Users shall not:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Use the app for unlawful, fraudulent, or unauthorized purposes</li>
              <li>Attempt to hack, decompile, or reverse-engineer the platform</li>
              <li>Post harmful, defamatory, or obscene content</li>
              <li>Misuse services for money laundering, terror financing, or tax evasion</li>
              <li>Exploit system vulnerabilities or attempt to manipulate reward systems</li>
            </ul>
          </div>

          {/* Disclaimers */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">5. Disclaimers</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Trovo services are provided on an "as is" and "as available" basis</li>
              <li>Trovo does not guarantee uninterrupted, timely, secure, or error-free operation</li>
              <li>Trovo is not liable for failures caused by banks, card networks, UPI operators, or telecom providers</li>
              <li>Any disputes with third-party merchants must be resolved directly with them</li>
            </ul>
          </div>

          {/* Termination & Suspension */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">6. Termination & Suspension</h2>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">By User:</h3>
              <p className="text-gray-700">Users may close or delete their account anytime via the app.</p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">By Trovo:</h3>
              <p className="text-gray-700 mb-2">Accounts may be suspended or terminated if:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Terms are violated</li>
                <li>Fraudulent/malicious activity is detected</li>
                <li>Required by law or regulator</li>
              </ul>
            </div>

            <div className="p-4 bg-yellow-400/10 border border-yellow-300/40 rounded-lg">
              <p className="text-yellow-100">
                <strong>Important:</strong> Account deletion does not absolve pending financial obligations (e.g., active loan repayments).
              </p>
            </div>
          </div>

          {/* Service Availability */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">7. Service Availability</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Services are currently available only in India</li>
              <li>Trovo may expand to other jurisdictions in the future</li>
              <li>Some features may be restricted based on location, KYC status, or credit profile</li>
              <li>Trovo reserves the right to modify service availability without prior notice</li>
            </ul>
          </div>

          {/* Limitation of Liability */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">8. Limitation of Liability</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Trovo's liability is limited to the amount of fees paid by the user in the 12 months preceding the claim</li>
              <li>Trovo is not liable for indirect, incidental, special, or consequential damages</li>
              <li>Users acknowledge that financial markets and services carry inherent risks</li>
              <li>Trovo does not guarantee any specific financial outcomes or returns</li>
            </ul>
          </div>

          {/* Governing Law */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">9. Governing Law</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>These terms are governed by the laws of India</li>
              <li>Any disputes will be subject to the exclusive jurisdiction of courts in Bangalore, Karnataka</li>
              <li>Users agree to attempt resolution through mediation before pursuing legal action</li>
            </ul>
          </div>

          {/* Updates to Terms */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">10. Updates to Terms</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Trovo may update these terms from time to time</li>
              <li>Users will be notified of significant changes via email or in-app notification</li>
              <li>Continued use of services after updates constitutes acceptance of new terms</li>
              <li>Users who disagree with updates may terminate their account</li>
            </ul>
          </div>

          {/* Summary Table */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Reference</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-white/10">
                <thead>
                  <tr className="bg-night-800/80">
                    <th className="border border-white/10 px-4 py-2 text-left font-semibold">Requirement</th>
                    <th className="border border-white/10 px-4 py-2 text-left font-semibold">Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-white/10 px-4 py-2">Minimum Age</td>
                    <td className="border border-white/10 px-4 py-2">18+ years</td>
                  </tr>
                  <tr>
                    <td className="border border-white/10 px-4 py-2">PAN Requirement</td>
                    <td className="border border-white/10 px-4 py-2">Mandatory for all users</td>
                  </tr>
                  <tr>
                    <td className="border border-white/10 px-4 py-2">CIBIL Score</td>
                    <td className="border border-white/10 px-4 py-2">675+ for credit features</td>
                  </tr>
                  <tr>
                    <td className="border border-white/10 px-4 py-2">Account Limit</td>
                    <td className="border border-white/10 px-4 py-2">One account per user</td>
                  </tr>
                  <tr>
                    <td className="border border-white/10 px-4 py-2">Governing Law</td>
                    <td className="border border-white/10 px-4 py-2">Indian law, Bangalore jurisdiction</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Contact */}
          <div className="mb-12 p-6 bg-night-800/60 rounded-lg border border-white/10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-700">
              If you have any questions about these Terms & Conditions, please contact us at:
              <br />
              <strong>Email:</strong> support@trovo.online
              <br />
              <strong>Company:</strong> Trovo Fintech Private Limited
              <br />
              <strong>Grievance Response:</strong> Acknowledgment within 48 hours, resolution within 30 days
            </p>
          </div>

        </div>
      </section>
    </div>
  )
}

export default TermsConditionsPage
