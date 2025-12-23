import { Link } from 'react-router-dom'
import PageTransition from '../components/PageTransition'

const NotFoundPage = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-br from-night-900 via-night-800 to-night-900 flex items-center justify-center pt-16 md:pt-20">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-8xl md:text-9xl font-bold text-trovo-green mb-8">404</div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Page Not Found</h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              The page you are looking for does not exist. Please return to the homepage or learn more about us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/">
                <button className="btn-primary">Back to Home</button>
              </Link>
              <Link to="/about">
                <button className="bg-transparent border-2 border-trovo-green text-trovo-green font-semibold py-3 px-8 rounded-full hover:bg-trovo-green hover:text-white transition-colors duration-200">
                  Learn About Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}

export default NotFoundPage
