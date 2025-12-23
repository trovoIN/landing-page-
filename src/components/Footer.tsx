import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const legalLinks = [
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Terms & Conditions', path: '/terms-conditions' },
    { name: 'Refund Policy', path: '/refund-policy' },
    { name: 'Data Security', path: '/data-security' }
  ]

  return (
    <footer className="bg-gray-900 text-white" role="contentinfo" itemScope itemType="https://schema.org/Organization">
      <div className="container-custom">
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img src="/trovo.svg" alt="Trovo Fi Logo" className="h-8 w-auto" itemProp="logo" />
              <span className="text-xl font-bold" itemProp="name">Trovo</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6" itemProp="description">
              Trovo Fi Private Limited
              <br />
              Made in India. Data stored in India.
            </p>
            <div className="text-sm text-gray-500 space-y-2">
              <p itemProp="email">support@trovo.online</p>
              <meta itemProp="url" content="https://trovo.app" />
              <meta itemProp="industry" content="Financial Technology" />
            </div>
            <div className="mt-4 flex items-center gap-3 text-gray-400">
              <a href="https://www.facebook.com/share/1D86KnXRSx/" rel="me noopener" aria-label="Trovo on Facebook" className="hover:text-white">Facebook</a>
              <a href="https://x.com/TROVOFI?t=-ZT6oQYStT4SjfFydYiaPw&s=08" rel="me noopener" aria-label="Trovo on X (Twitter)" className="hover:text-white">X</a>
              <a href="https://www.instagram.com/trovofi?igsh=ZjA5cWt2MGdkaG94&utm_source=qr" rel="me noopener" aria-label="Trovo on Instagram" className="hover:text-white">Instagram</a>
              <a href="https://www.linkedin.com/company/trovo-fi-private-limited" rel="me noopener" aria-label="Trovo on LinkedIn" className="hover:text-white">LinkedIn</a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Legal & Policies</h3>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-gray-400 hover:text-trovo-green transition-colors duration-200">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Security</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <p>End-to-end encryption</p>
              <p>Multi-factor authentication</p>
              <p>Data stays in India</p>
            </div>
          </div>
        </div>

        <div className="border-top border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>© {currentYear} Trovo Fi Private Limited. All rights reserved.</p>
            <a href="/join" className="mt-3 md:mt-0 underline hover:text-white">Join Early Access</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
