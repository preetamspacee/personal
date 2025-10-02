import dynamic from 'next/dynamic'

// Dynamically import the optimized welcome page for better performance
const OptimizedWelcomePage = dynamic(() => import('@/components/advanced/OptimizedWelcomePage').then(m => ({ default: m.OptimizedWelcomePage })), {
  loading: () => (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="text-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto mb-4"></div>
        <p className="text-gray-400">Loading BSM Platform...</p>
      </div>
    </div>
  ),
  ssr: false
})

export default function Home() {
  return <OptimizedWelcomePage />
}
