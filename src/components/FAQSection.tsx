import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import NativeSEO from './NativeSEO'
import { generateFAQStructuredData } from '../utils/seo'

const FAQSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null)

  const faqs = [
    {
      question: "What is Trovo Fi and how does it work?",
      answer: "Trovo Fi is India's revolutionary fintech platform that transforms your unused credit card points into instant cash rewards. Simply connect your credit cards, and our advanced algorithm converts your accumulated points into real money that you can use for UPI payments, online shopping, or direct bank transfers."
    },
    {
      question: "How does Trovo Fi convert credit card points to cash?",
      answer: "Trovo Fi uses secure API integrations with major Indian banks to access your credit card point balances. Our proprietary technology calculates the optimal conversion rate and instantly transfers the cash equivalent to your Trovo wallet, which you can then use for payments or withdraw to your bank account."
    },
    {
      question: "Is Trovo Fi safe and secure for my financial data?",
      answer: "Absolutely! Trovo Fi follows all RBI (Reserve Bank of India) guidelines and implements bank-grade security measures. All data is encrypted using 256-bit SSL encryption, stored securely in India, and we are fully compliant with data localization requirements. We never store your banking passwords or sensitive credentials."
    },
    {
      question: "Which credit cards are supported by Trovo Fi?",
      answer: "Trovo Fi supports all major Indian credit cards including HDFC, ICICI, SBI, Axis Bank, Kotak Mahindra, Yes Bank, and many more. We continuously add support for new banks and card types to ensure maximum compatibility for our users."
    },
    {
      question: "How much cashback can I earn with Trovo Fi?",
      answer: "With Trovo Fi, you can earn guaranteed UPI cashback of up to 2% on all transactions, plus convert your existing credit card points (which often go unused) into instant cash. Most users save ₹2,000-₹5,000 per month by optimizing their credit card usage through our platform."
    },
    {
      question: "What makes Trovo Fi different from other fintech apps?",
      answer: "Trovo Fi is the only platform in India that focuses specifically on credit card point optimization. Unlike other apps that only offer basic UPI payments, we provide point conversion, guaranteed cashback, secure money sharing, tap-to-pay technology, and comprehensive financial insights - all in one app."
    },
    {
      question: "How do I get started with Trovo Fi?",
      answer: "Getting started is simple! Download the Trovo Fi app, complete the quick verification process, securely connect your credit cards, and start converting your points immediately. The entire setup takes less than 5 minutes, and you can see your available points and potential earnings instantly."
    },
    {
      question: "Is there any fee for using Trovo Fi services?",
      answer: "Trovo Fi offers a freemium model - basic point conversion and UPI payments are completely free. Premium features like advanced analytics, higher conversion rates, and priority customer support are available through our affordable subscription plans starting at just ₹99/month."
    }
  ]

  const structuredData = generateFAQStructuredData(faqs)

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index)
  }

  return (
    <>
      <NativeSEO structuredData={structuredData} />
      <section 
        className="section-padding bg-gradient-to-br from-white to-gray-50"
        ref={ref}
        id="faq"
        aria-labelledby="faq-heading"
      >
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions about <span className="text-trovo-green">Trovo Fi</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about our revolutionary fintech platform and services
            </p>
          </motion.div>

          <motion.div 
            className="max-w-4xl mx-auto space-y-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <button
                  className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-trovo-green/20"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={expandedFAQ === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </h3>
                    <motion.div
                      animate={{ rotate: expandedFAQ === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      <svg 
                        className="w-6 h-6 text-trovo-green" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </motion.div>
                  </div>
                </button>
                
                <motion.div
                  id={`faq-answer-${index}`}
                  initial={false}
                  animate={{ 
                    height: expandedFAQ === index ? "auto" : 0,
                    opacity: expandedFAQ === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                >
                  <div className="px-6 pb-6">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <p className="text-gray-600 mb-6">
              Still have questions? We're here to help!
            </p>
            <motion.a
              href="mailto:support@trovo.online"
              className="inline-flex items-center px-6 py-3 bg-trovo-green text-white font-semibold rounded-full hover:bg-trovo-green-dark transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact Support
            </motion.a>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default FAQSection
