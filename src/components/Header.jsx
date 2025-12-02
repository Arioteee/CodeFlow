import { useState } from 'react'
import { Menu, X } from 'lucide-react'

import { MenuLink } from './links/Links'

const Header = ({ scrolled }) => {
	const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false)

	return (
		<header
			className={`fixed top-0 w-full z-50 transition-none ${
				scrolled
					? 'bg-slate-950/80 backdrop-blur-lg border-b border-slate-800'
					: 'bg-slate-950/20 backdrop-blur-sm'
			}`}
		>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<nav className='flex justify-between items-center h-14 sm:h-16 md:h-20'>
					{/* Logotype */}
					<div className='flex space-x-1 items-center group cursor-pointer'>
						<div className='w-6 h-6 sm:w-8 sm:h-8'>
							<img src='/logo.png' alt='Logotype CodeFlow' />
						</div>
						<span className='text-lg sm:text-xl md:text-2xl font-medium'>
							<span className='text-white'>Code</span>
							<span className='text-blue-400'>Flow</span>
						</span>
					</div>

					{/* Nav Links */}
					<ul className='hidden md:flex items-center space-x-6 lg:space-x-8'>
						<MenuLink AnchorID={'#features'}>Features</MenuLink>
						<MenuLink AnchorID={'#pricing'}>Pricing</MenuLink>
						<MenuLink AnchorID={'#testimonials'}>Testimonials</MenuLink>
					</ul>

					<button
						className='md:hidden p-2 text-gray-300 hover:text-white'
						onClick={() => setMobileMenuIsOpen(prev => !prev)}
					>
						{mobileMenuIsOpen ? (
							<X className='w-5 h-5 sm:w-6 sm:h-6' />
						) : (
							<Menu className='w-5 h-5 sm:w-6 sm:h-6' />
						)}
					</button>
				</nav>
			</div>

			{mobileMenuIsOpen && (
				<nav className='md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-slate-800 animate-in slide-in-from-top duration-300'>
					<ul className='px-4 py-4 sm:py-6 space-y-3 sm:space-y-4'>
						<MenuLink AnchorID={'#features'} onClick={() => setMobileMenuIsOpen(false)}>
							Features
						</MenuLink>
						<MenuLink AnchorID={'#pricing'} onClick={() => setMobileMenuIsOpen(false)}>
							Pricing
						</MenuLink>
						<MenuLink
							AnchorID={'#testimonials'}
							onClick={() => setMobileMenuIsOpen(false)}
						>
							Testimonials
						</MenuLink>
					</ul>
				</nav>
			)}
		</header>
	)
}

export default Header
