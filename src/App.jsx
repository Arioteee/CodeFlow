import { useEffect, useState } from 'react'

import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {
	const [scrolled, setScrolled] = useState(false)

	useEffect(() => {
		function handleScroll() {
			setScrolled(window.scrollY > 50)
		}

		window.addEventListener('scroll', handleScroll)

		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	return (
		<div className='min-h-screen bg-slate-950 text-white overflow-hidden'>
			<Header scrolled={scrolled} />
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
