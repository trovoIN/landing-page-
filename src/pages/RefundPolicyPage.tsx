import { useEffect } from 'react'

const RefundPolicyPage = () => {
  useEffect(() => {
    document.title = 'Refund Policy - Trovo Fintech'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-night-900 text-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-trovo-green to-trovo-green-dark text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Refund Policy</h1>
          <p className="text-xl opacity-90">Our commitment to fair and transparent refund processes</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 text-white">
        <div className="container-custom max-w-4xl">
          {/* Eligibility for Refunds */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">1. Eligibility for Refunds</h2>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Trovo Fintech is committed to providing excellent service and ensuring customer satisfaction. 
                Refunds may be considered under the following circumstances:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Service fees charged due to technical errors on our platform</li>
                <li>Duplicate charges for the same transaction</li>
                <li>Overcharging beyond the disclosed fee structure</li>
                <li>Service unavailability preventing access to your cashback rewards</li>
                <li>Unauthorized transactions (subject to investigation)</li>
              </ul>
            </div>
          </div>

          {/* Refund Process */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">2. Refund Process</h2>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">2.1 How to Request a Refund</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Contact our customer support team at support@trovo.online</li>
                <li>Provide your registered email address and transaction details</li>
                <li>Include the reason for requesting a refund with supporting documentation</li>
                <li>Submit your request within 30 days of the transaction date</li>
              </ul>
              
              <h3 className="text-lg font-semibold text-gray-800 mt-6">2.2 Processing Timeline</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Acknowledgment of refund request: Within 24 hours</li>
                <li>Investigation and review: 3-5 business days</li>
                <li>Refund processing (if approved): 7-10 business days</li>
                <li>Bank credit time: 2-5 business days (varies by bank)</li>
              </ul>
            </div>
          </div>

          {/* Non-Refundable Items */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">3. Non-Refundable Items</h2>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                The following services and fees are generally non-refundable:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Cashback rewards that have been successfully credited to your account</li>
                <li>Transaction fees for successful UPI cashback redemptions</li>
                <li>Subscription fees for premium features (after the cooling-off period)</li>
                <li>Third-party payment processing fees</li>
                <li>Services used or consumed before the refund request</li>
                <li>Promotional or discounted services</li>
              </ul>
            </div>
          </div>

          {/* Cashback Reversals */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">4. Cashback Reversals</h2>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                In certain circumstances, Trovo reserves the right to reverse cashback credits:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Fraudulent or suspicious transactions</li>
                <li>Misuse of the platform or violation of terms</li>
                <li>Technical errors resulting in incorrect cashback calculations</li>
                <li>Cancelled or returned purchases from partner merchants</li>
                <li>Account closure or suspension due to policy violations</li>
              </ul>
              <div className="bg-yellow-400/10 border-l-4 border-yellow-500/50 p-4 mt-4">
                <p className="text-sm text-yellow-100">
                  <strong>Note:</strong> Users will be notified via email before any cashback reversals are processed, 
                  with an explanation of the reason for the reversal.
                </p>
              </div>
            </div>
          </div>

          {/* Partial Refunds */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">5. Partial Refunds</h2>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Partial refunds may be considered in the following situations:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Service interruptions affecting a portion of your transaction period</li>
                <li>Partial service failures or feature unavailability</li>
                <li>Pro-rated refunds for subscription cancellations (where applicable)</li>
                <li>Reduced service quality compared to our standard offerings</li>
              </ul>
            </div>
          </div>

          {/* Refund Methods */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">6. Refund Methods</h2>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Refunds will be processed using the following methods:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li><strong>Original Payment Method:</strong> Refunds will typically be credited back to the original payment method used</li>
                <li><strong>Bank Transfer:</strong> Direct bank transfer to your registered account (if original method is unavailable)</li>
                <li><strong>UPI Transfer:</strong> Instant refund via UPI to your linked mobile number</li>
                <li><strong>Wallet Credit:</strong> Credit to your Trovo wallet (only with explicit user consent)</li>
              </ul>
              <div className="bg-blue-500/10 border-l-4 border-blue-400/60 p-4 mt-4">
                <p className="text-sm text-blue-100">
                  <strong>Processing Note:</strong> International transactions may take 15-20 business days for refund processing 
                  due to banking regulations and currency conversion requirements.
                </p>
              </div>
            </div>
          </div>

          {/* Dispute Resolution */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">7. Dispute Resolution</h2>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                If you disagree with a refund decision:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Contact our grievance officer at grievance@trovo.online</li>
                <li>Provide additional documentation supporting your claim</li>
                <li>Request an escalated review of your case</li>
                <li>Alternative dispute resolution through mediation (if applicable)</li>
              </ul>
              
              <div className="bg-night-800/60 p-6 rounded-lg mt-6 border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-3">Grievance Officer Contact</h3>
                <div className="space-y-2 text-gray-300">
                  <p><strong>Name:</strong> Rajesh Kumar Singh</p>
                  <p><strong>Email:</strong> grievance@trovo.online</p>
                  <p><strong>Phone:</strong> +91-80-4040-1234</p>
                  <p><strong>Address:</strong> Trovo Fintech Private Limited, 42 Brigade Road, Bangalore - 560025</p>
                  <p><strong>Response Time:</strong> 7 business days</p>
                </div>
              </div>
            </div>
          </div>

          {/* Consumer Rights */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">8. Consumer Rights</h2>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                As a consumer, you have the following rights under Indian consumer protection laws:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Right to fair and transparent pricing</li>
                <li>Right to be informed about all charges and fees</li>
                <li>Right to quality service and support</li>
                <li>Right to grievance redressal</li>
                <li>Right to consumer forum proceedings (as per Consumer Protection Act, 2019)</li>
              </ul>
              
              <div className="bg-green-500/10 border-l-4 border-green-400/70 p-4 mt-4">
                <p className="text-sm text-green-100">
                  <strong>Consumer Helpline:</strong> For consumer complaints beyond our resolution, 
                  contact the National Consumer Helpline at 1915 or visit consumerhelpline.gov.in
                </p>
              </div>
            </div>
          </div>

          {/* Policy Updates */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">9. Policy Updates</h2>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                This refund policy may be updated periodically to reflect changes in our services, 
                regulatory requirements, or business practices. Significant changes will be communicated 
                to users via email and prominently displayed on our platform.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>Last updated:</strong> December 2024
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-br from-night-900 via-night-800 to-trovo-green/20 p-8 rounded-lg border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-6">Need Help?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Customer Support</h3>
                <div className="space-y-2 text-gray-300">
                  <p><strong>Email:</strong> support@trovo.online</p>
                  <p><strong>Phone:</strong> +91-80-4040-1234</p>
                  <p><strong>Hours:</strong> Monday to Friday, 9:00 AM to 6:00 PM IST</p>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Refund Queries</h3>
                <div className="space-y-2 text-gray-300">
                  <p><strong>Email:</strong> refunds@trovo.online</p>
                  <p><strong>Response Time:</strong> Within 24 hours</p>
                  <p><strong>Processing:</strong> 7-10 business days</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default RefundPolicyPage
