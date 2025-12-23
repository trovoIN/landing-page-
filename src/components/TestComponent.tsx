import React from 'react'
import WhyTrovoSection from './WhyTrovoSection'
import EarlyAccessSection from './EarlyAccessSection'

const TestComponent: React.FC = () => {
  return (
    <div>
      <h1>Testing Components</h1>
      <div style={{ border: '2px solid red', margin: '20px 0' }}>
        <h2>Why Trovo Section:</h2>
        <WhyTrovoSection />
      </div>
      <div style={{ border: '2px solid blue', margin: '20px 0' }}>
        <h2>Early Access Section:</h2>
        <EarlyAccessSection />
      </div>
    </div>
  )
}

export default TestComponent
