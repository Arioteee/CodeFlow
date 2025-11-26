import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {
	return (
		<div className='min-h-screen bg-slate-950 text-white overflow-hidden'>
			<Header />
			<main>
				<Hero />
				<Features />
				<Pricing />
				<Testimonials />
			</main>
			<Footer />
		</div>
	)
}

export default App
