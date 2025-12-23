import LetterGlitch from './LetterGlitch'

const EncryptionBadge = () => {
    return (
        <div className="fixed top-8 right-8 md:top-12 md:right-12 z-50 w-72 h-32">
            <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-trovo-green/30">
                {/* Matrix background */}
                <div className="absolute inset-0">
                    <LetterGlitch
                        glitchColors={['#1DB954', '#22D760', '#18a147']}
                        glitchSpeed={80}
                        smooth={true}
                        outerVignette={false}
                        centerVignette={false}
                    />
                </div>

                {/* Text overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-night-900/60 backdrop-blur-sm">
                    <div className="text-center">
                        <p className="text-trovo-green text-2xl font-bold font-mono tracking-wider">
                            256-BIT
                        </p>
                        <p className="text-white text-sm font-mono mt-1">
                            ENCRYPTION
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EncryptionBadge
