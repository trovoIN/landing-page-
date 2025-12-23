import PageTransition from '../components/PageTransition'
import NativeSEO from '../components/NativeSEO'

const ThankYouPage = () => {
  return (
    <PageTransition>
      <NativeSEO title="Thanks — Trovo Fi" description="Thanks for joining the Trovo early access. We’ll notify you before launch." />
      <main id="content" className="section-padding">
        <div className="container-custom text-center">
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-gray-900">Thanks for joining</h1>
          <p className="mt-4 text-gray-600">We’ll notify you before launch.</p>
          <a className="btn-primary mt-8 inline-block" href="/">Back to Home</a>
        </div>
      </main>
    </PageTransition>
  )
}

export default ThankYouPage