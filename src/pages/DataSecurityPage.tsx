import { motion } from 'framer-motion'
import { useEffect } from 'react'

const DataSecurityPage = () => {
  useEffect(() => {
    document.title = 'Data Security - Trovo Fintech'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-night-900 text-white">
      {/* Header */}
      <motion.section 
        className="bg-gradient-to-br from-trovo-green to-trovo-green-dark text-white py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container-custom text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Data Security
          </motion.h1>
          <motion.p 
            className="text-xl opacity-90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            How we protect your financial data with enterprise-grade security
          </motion.p>
        </div>
      </motion.section>

      {/* Content */}
      <motion.section 
        className="py-20 text-white"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="container-custom max-w-4xl">
          
          {/* Security Overview */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">1. Security Overview</h2>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                At Trovo Fintech, we understand that your financial data is your most valuable asset. 
                We have implemented comprehensive security measures that meet and exceed industry standards 
                to ensure your information remains protected at all times.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="bg-night-800/70 p-6 rounded-lg border border-trovo-green/30">
                  <h3 className="font-semibold text-green-200 mb-2">256-bit Encryption</h3>
                  <p className="text-sm text-green-100">Bank-grade SSL/TLS encryption for all data transmission</p>
                </div>
                <div className="bg-night-800/70 p-6 rounded-lg border border-white/15">
                  <h3 className="font-semibold text-blue-200 mb-2">ISO 27001 Certified</h3>
                  <p className="text-sm text-blue-100">International standard for information security management</p>
                </div>
                <div className="bg-night-800/70 p-6 rounded-lg border border-white/15">
                  <h3 className="font-semibold text-purple-200 mb-2">PCI DSS Compliant</h3>
                  <p className="text-sm text-purple-100">Payment card industry data security standards</p>
                </div>
              </div>
            </div>
          </div>

          {/* Data Encryption */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">2. Data Encryption & Storage</h2>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">2.1 Encryption Standards</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li><strong>Data in Transit:</strong> All communications use TLS 1.3 encryption with 256-bit AES cipher suites</li>
                <li><strong>Data at Rest:</strong> Database encryption using AES-256 with rotating encryption keys</li>
                <li><strong>API Communications:</strong> OAuth 2.0 with JWT tokens and rate limiting</li>
                <li><strong>Mobile Apps:</strong> Certificate pinning and encrypted local storage</li>
              </ul>
              
              <h3 className="text-lg font-semibold text-gray-800 mt-6">2.2 Secure Storage Infrastructure</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Data centers located in India with 24/7 physical security monitoring</li>
                <li>Redundant backup systems across multiple geographically distributed locations</li>
                <li>Air-gapped backup systems for critical financial data</li>
                <li>Automated threat detection and intrusion prevention systems</li>
              </ul>
            </div>
          </div>

          {/* Access Controls */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">3. Access Controls & Authentication</h2>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">3.1 Multi-Factor Authentication</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>SMS-based OTP verification for all transactions</li>
                <li>Biometric authentication support (fingerprint, face recognition)</li>
                <li>Hardware security module (HSM) for cryptographic operations</li>
                <li>Session timeout and automatic logout for inactive sessions</li>
              </ul>
              
              <h3 className="text-lg font-semibold text-gray-800 mt-6">3.2 Internal Access Management</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Role-based access control (RBAC) with principle of least privilege</li>
                <li>All administrative access logged and monitored</li>
                <li>Regular access reviews and permission audits</li>
                <li>Mandatory background checks for all employees with data access</li>
              </ul>
            </div>
          </div>

          {/* Monitoring & Threat Detection */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">4. Monitoring & Threat Detection</h2>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">4.1 Real-time Monitoring</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>24/7 Security Operations Center (SOC) monitoring</li>
                <li>AI-powered fraud detection and anomaly identification</li>
                <li>Real-time transaction monitoring and risk scoring</li>
                <li>Automated incident response and escalation procedures</li>
              </ul>
              
              <h3 className="text-lg font-semibold text-gray-800 mt-6">4.2 Vulnerability Management</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Regular penetration testing by certified ethical hackers</li>
                <li>Automated vulnerability scanning and patch management</li>
                <li>Bug bounty program with responsible disclosure policy</li>
                <li>Annual third-party security audits and assessments</li>
              </ul>
            </div>
          </div>

          {/* Compliance & Regulations */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">5. Compliance & Regulatory Standards</h2>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">5.1 Indian Regulations</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li><strong>RBI Guidelines:</strong> Compliance with Reserve Bank of India digital payment guidelines</li>
                <li><strong>IT Act 2000:</strong> Adherence to Information Technology Act and amendment rules</li>
                <li><strong>DPDP Act 2023:</strong> Full compliance with Digital Personal Data Protection Act</li>
                <li><strong>UPI Guidelines:</strong> Certified compliance with NPCI UPI security standards</li>
              </ul>
              
              <h3 className="text-lg font-semibold text-gray-800 mt-6">5.2 International Standards</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li><strong>ISO 27001:2013:</strong> Information Security Management Systems certification</li>
                <li><strong>PCI DSS Level 1:</strong> Payment Card Industry Data Security Standards compliance</li>
                <li><strong>SOC 2 Type II:</strong> Service Organization Control audit compliance</li>
                <li><strong>GDPR Ready:</strong> European General Data Protection Regulation readiness</li>
              </ul>
            </div>
          </div>

          {/* Data Minimization */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">6. Data Minimization & Retention</h2>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">6.1 Data Collection Principles</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>We only collect data that is essential for service delivery</li>
                <li>No unnecessary personal information is stored or processed</li>
                <li>User consent required for all non-essential data collection</li>
                <li>Regular data audits to identify and remove redundant information</li>
              </ul>
              
              <h3 className="text-lg font-semibold text-gray-800 mt-6">6.2 Data Retention Policy</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li><strong>Transaction Data:</strong> Retained for 10 years as per RBI guidelines</li>
                <li><strong>Personal Information:</strong> Deleted within 3 years of account closure</li>
                <li><strong>Marketing Data:</strong> Removed immediately upon user opt-out</li>
                <li><strong>Log Files:</strong> Automatically purged after 12 months</li>
              </ul>
            </div>
          </div>

          {/* Incident Response */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">7. Incident Response & Recovery</h2>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">7.1 Incident Response Plan</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Immediate containment and assessment of security incidents</li>
                <li>User notification within 72 hours of confirmed data breach</li>
                <li>Regulatory reporting as required by law</li>
                <li>Post-incident analysis and security enhancement measures</li>
              </ul>
              
              <h3 className="text-lg font-semibold text-gray-800 mt-6">7.2 Business Continuity</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>99.9% uptime guarantee with redundant infrastructure</li>
                <li>Disaster recovery plan tested quarterly</li>
                <li>Real-time data replication across multiple data centers</li>
                <li>Emergency communication channels for critical updates</li>
              </ul>
            </div>
          </div>

          {/* User Security Best Practices */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">8. User Security Best Practices</h2>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                While we provide robust security infrastructure, user vigilance is equally important:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Use strong, unique passwords and enable two-factor authentication</li>
                <li>Never share your login credentials or OTP with anyone</li>
                <li>Log out of your account when using shared or public devices</li>
                <li>Keep your mobile app updated to the latest version</li>
                <li>Report suspicious activities immediately to our security team</li>
                <li>Be cautious of phishing emails or fake websites impersonating Trovo</li>
              </ul>
              
              <div className="bg-yellow-400/10 border-l-4 border-yellow-400/60 p-4 mt-4">
                <p className="text-sm text-yellow-100">
                  <strong>Security Alert:</strong> Trovo will never ask for your password, PIN, or OTP via email, SMS, or phone calls. 
                  Report any suspicious communications to security@trovo.online immediately.
                </p>
              </div>
            </div>
          </div>

          {/* Security Certifications */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">9. Security Certifications & Audits</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Current Certifications</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">ISO 27001:2013 - Valid until Dec 2025</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">PCI DSS Level 1 - Annual recertification</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">SOC 2 Type II - Quarterly audits</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Regular Audits</h3>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Internal Security Audits:</strong> Monthly</p>
                  <p><strong>Third-party Penetration Testing:</strong> Quarterly</p>
                  <p><strong>Compliance Audits:</strong> Bi-annually</p>
                  <p><strong>Risk Assessment:</strong> Annually</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Security Team */}
          <div className="bg-gradient-to-br from-night-900 via-night-800 to-trovo-green/20 p-8 rounded-lg border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-6">Security Contact Information</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Security Team</h3>
                <div className="space-y-2 text-gray-300">
                  <p><strong>Email:</strong> security@trovo.online</p>
                  <p><strong>Emergency Hotline:</strong> +91-80-4040-9999</p>
                  <p><strong>Response Time:</strong> Within 1 hour for critical issues</p>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Bug Bounty Program</h3>
                <div className="space-y-2 text-gray-300">
                  <p><strong>Email:</strong> bugbounty@trovo.online</p>
                  <p><strong>Rewards:</strong> ₹10,000 - ₹1,00,000</p>
                  <p><strong>Response:</strong> Within 48 hours</p>
                </div>
              </div>
            </div>
            <div className="mt-6 p-4 bg-night-800/70 rounded border border-white/10">
              <p className="text-sm text-gray-300">
                <strong>Responsible Disclosure:</strong> We appreciate security researchers who help us maintain the highest 
                security standards. Please report vulnerabilities responsibly through our official channels.
              </p>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  )
}

export default DataSecurityPage
