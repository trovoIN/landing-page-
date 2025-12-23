interface RewardsMockupProps {
  isInView: boolean
  isHovered?: boolean
}

const RewardsMockup: React.FC<RewardsMockupProps> = () => {
  return (
    <div className="relative w-full max-w-sm lg:max-w-md h-[350px] lg:h-[450px] bg-white/95 backdrop-blur-xl rounded-3xl p-4 lg:p-6 border border-trovo-green/20 shadow-xl">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="text-2xl lg:text-3xl font-black text-gray-900">Trovo</div>
        <div className="w-7 h-7 lg:w-9 lg:h-9 rounded-lg bg-trovo-green/20" aria-hidden="true" />
      </div>
      
      {/* Credit Card Rewards Dashboard */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-5 text-white shadow-lg mb-4">
        <div className="flex items-center justify-between mb-3">
          <h4 className="text-lg font-bold">Credit Card Rewards</h4>
          <div className="w-3 h-3 bg-white rounded-full" />
        </div>
        <div className="text-2xl font-bold mb-2">Smart rewards system</div>
        <p className="text-sm opacity-90">Transform every payment into earnings</p>
      </div>
      
      {/* Reward Categories */}
      <div className="space-y-3">
        {[
          { category: "Bill Payments", multiplier: "5x", earned: "₹245" },
          { category: "Online Shopping", multiplier: "3x", earned: "₹189" },
          { category: "Fuel & Travel", multiplier: "4x", earned: "₹156" }
        ].map((reward, idx) => (
          <div key={idx} className="flex items-center justify-between bg-gray-50 rounded-xl p-3">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-trovo-green rounded-lg flex items-center justify-center">
                <span className="text-white text-sm font-bold">{reward.multiplier}</span>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">{reward.category}</p>
                <p className="text-xs text-gray-500">This month</p>
              </div>
            </div>
            <span className="text-sm font-bold text-trovo-green">{reward.earned}</span>
          </div>
        ))}
      </div>

      {/* Quick Convert Button */}
      <div className="mt-4 bg-trovo-green/10 border border-trovo-green/30 rounded-xl p-4 text-center">
        <div className="w-6 h-6 rounded-full bg-trovo-green mx-auto mb-2" aria-hidden="true" />
        <div className="text-sm font-bold text-trovo-green">Convert to Cash</div>
        <div className="text-xs text-gray-600">12,450 points available</div>
      </div>
    </div>
  )
}

export default RewardsMockup
