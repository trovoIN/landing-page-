interface TapPayMockupProps {
  isInView: boolean
  isHovered?: boolean
}

const TapPayMockup: React.FC<TapPayMockupProps> = () => {
  const payments = [
    { place: 'Coffee Day', amount: '₹185', status: 'Success', time: '5m ago' },
    { place: 'Metro Station', amount: '₹45', status: 'Success', time: '2h ago' },
  ]

  return (
    <div className="relative w-full max-w-sm lg:max-w-md h-[350px] lg:h-[450px] bg-white/95 backdrop-blur-xl rounded-3xl p-4 lg:p-6 border border-trovo-green/20 shadow-xl">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="text-2xl lg:text-3xl font-black text-gray-900">Trovo</div>
        <div className="w-7 h-7 lg:w-9 lg:h-9 rounded-lg bg-trovo-green/20" aria-hidden="true" />
      </div>

      {/* Tap to Pay Feature */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-5 text-white shadow-lg mb-4">
        <div className="flex items-center justify-between mb-3">
          <h4 className="text-lg font-bold">Tap to Pay</h4>
          <div className="w-3 h-3 bg-white rounded-full" />
        </div>
        <div className="text-2xl font-bold mb-2">Quick tap payments</div>
        <p className="text-sm opacity-90">No PIN up to ₹2000 per transaction</p>
      </div>

      {/* Payment Demo */}
      <div className="bg-gray-50 rounded-xl p-4 mb-4">
        <div className="text-center">
          <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mx-auto mb-4 flex items-center justify-center">
            <span className="text-white text-2xl" aria-hidden="true">NFC</span>
          </div>
          <p className="text-sm font-medium text-gray-700 mb-2">Ready to Pay</p>
          <p className="text-2xl font-bold text-gray-900 mb-1">₹1,250</p>
          <p className="text-xs text-gray-500">Just tap your phone to pay</p>
        </div>
      </div>

      {/* Recent Tap Payments */}
      <div className="space-y-2">
        <h5 className="text-sm font-semibold text-gray-700 mb-2">Recent Tap Payments</h5>
        {payments.map((payment, idx) => (
          <div key={idx} className="flex items-center justify-between bg-white border border-gray-100 rounded-lg p-3">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                <span className="text-green-600 text-xs" aria-hidden="true">OK</span>
              </div>
              <div>
                <p className="text-xs font-medium text-gray-900">{payment.place}</p>
                <p className="text-xs text-gray-500">{payment.amount} — {payment.time}</p>
              </div>
            </div>
            <span className="text-xs font-medium text-green-600">{payment.status}</span>
          </div>
        ))}
      </div>

      {/* Daily Limit Status */}
      <div className="mt-4 bg-orange-50 border border-orange-200 rounded-xl p-3">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs font-medium text-orange-800">Daily Limit</div>
            <div className="text-xs text-orange-600">₹1,770 remaining</div>
          </div>
          <div className="text-sm" aria-hidden="true">Status</div>
        </div>
        <div className="mt-2 bg-orange-200 rounded-full h-1.5">
          <div className="bg-orange-500 h-1.5 rounded-full w-[11.5%]" />
        </div>
      </div>
    </div>
  )
}

export default TapPayMockup
