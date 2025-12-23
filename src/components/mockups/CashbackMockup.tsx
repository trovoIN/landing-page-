interface CashbackMockupProps {
  isInView: boolean
  isHovered?: boolean
}

const CashbackMockup: React.FC<CashbackMockupProps> = () => {
  return (
    <div className="relative w-full max-w-sm lg:max-w-md h-[350px] lg:h-[450px] bg-white/95 backdrop-blur-xl rounded-3xl p-4 lg:p-6 border border-trovo-green/20 shadow-xl">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="text-2xl lg:text-3xl font-black text-gray-900">Trovo</div>
        <div className="w-7 h-7 lg:w-9 lg:h-9 rounded-lg bg-trovo-green/20" aria-hidden="true" />
      </div>
      
      {/* UPI Cashback Dashboard */}
      <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl p-5 text-white shadow-lg mb-4">
        <div className="flex items-center justify-between mb-3">
          <h4 className="text-lg font-bold">UPI Cashback</h4>
          <div className="w-3 h-3 bg-white rounded-full" />
        </div>
        <div className="text-2xl font-bold mb-2">1% guaranteed cashback</div>
        <p className="text-sm opacity-90">Every UPI payment earns you money</p>
      </div>
      
      {/* Today's Cashback */}
      <div className="bg-gray-50 rounded-xl p-4 mb-4">
        <div className="flex items-center justify-between mb-3">
          <h5 className="text-sm font-semibold text-gray-700">Today's Earnings</h5>
          <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Live</span>
        </div>
        <div className="text-3xl font-bold text-trovo-green mb-2">₹127</div>
        <div className="flex items-center text-sm text-gray-600">
          <span className="mr-2">From 23 transactions</span>
          <span className="text-green-600">+₹12 since 1hr</span>
        </div>
      </div>
      
      {/* Recent UPI Transactions */}
      <div className="space-y-2">
        {[
          { merchant: "Swiggy", amount: "₹245", cashback: "+₹2.45", time: "2m ago" },
          { merchant: "Amazon", amount: "₹1,580", cashback: "+₹15.80", time: "1h ago" }
        ].map((transaction, idx) => (
          <div key={idx} className="flex items-center justify-between bg-white border border-gray-100 rounded-lg p-3">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-trovo-green/20 rounded-lg flex items-center justify-center">
                <span className="text-trovo-green text-xs" aria-hidden="true">↻</span>
              </div>
              <div>
                <p className="text-xs font-medium text-gray-900">{transaction.merchant}</p>
                <p className="text-xs text-gray-500">{transaction.amount} — {transaction.time}</p>
              </div>
            </div>
            <span className="text-xs font-bold text-green-600">{transaction.cashback}</span>
          </div>
        ))}
      </div>

      {/* Auto-Collect Status */}
      <div className="mt-4 bg-blue-50 border border-blue-200 rounded-xl p-3 text-center">
        <div className="w-5 h-5 rounded-full bg-blue-400 mx-auto mb-1" aria-hidden="true" />
        <div className="text-xs font-medium text-blue-800">Auto-collect enabled</div>
        <div className="text-xs text-blue-600">Cashback credited instantly</div>
      </div>
    </div>
  )
}

export default CashbackMockup
