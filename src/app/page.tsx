import dynamic from 'next/dynamic'

// Dynamically import the ultra-fast welcome page for maximum performance
const LightningFastWelcomePage = dynamic(() => import('@/components/advanced/LightingFastWelcomePage').then(m => ({ default: m.LightningFastWelcomePage })), {
  loading: () => (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#f9fafc] to-[#eef3ff]">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-indigo-500 mx-auto mb-4"></div>
        <p className="text-gray-600">Loading BSM Platform...</p>
      </div>
    </div>
  ),
  ssr: false
})

export default function Home() {
  return <LightningFastWelcomePage />
}
