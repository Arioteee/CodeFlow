import { useState } from 'react'
import { AlertTriangle, ArrowRight, ChevronDown, Play, Sparkles, X } from 'lucide-react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs'

import { ButtonToFile } from './buttons/Buttons'
import { CardForTab } from './cards/Cards'
import { MacCirclies } from './circlies/Circlies'

import { codeExamples } from '../data/CodeExample'

const Hero = () => {
	const [activeTab, setActiveTab] = useState('App.jsx')
	const [toggleDemoButton, setToggleDemoButton] = useState(false)

	return (
		<section className='relative min-h-screen flex items-center justify-center pt-16 sm:pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden'>
			<div className='absolute inset-0 opacity-30' />

			<div className='absolute top-20 left-4 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse' />
			<div className='absolute bottom-20 right-4 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000' />

			<div className='max-w-7xl mx-auto text-center relative w-full'>
				<div className='max-w-7xl mx-auto flex flex-col text-center lg:text-left lg:grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center relative'>
					<div>
						<div className='inline-flex items-center space-x-2 px-3 sm:px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-4 sm:mb-6 animate-in slide-n-from-bottom duration-700'>
							<Sparkles className='w-4 h-4 text-blue-400' />
							<span className='text-xs sm:text-sm text-blue-300'>
								Introducing CodeFlow AI
							</span>
						</div>

						<h1 className='text-5xl sm:text-5xl xl:text-6xl font-semibold mb-4 sm:mb-6 animate-in slide-in-front-bottom duration-700 animate-delay leading-tight'>
							<span className='bg-linear-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent block mb-1 sm:mb-2'>
								Code Faster
							</span>
							<span className='bg-linear-to-b from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent block mb-1 sm:mb-2'>
								Build Better
							</span>
							<span className='bg-linear-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent block mb-1 sm:mb-2'>
								With CodeFlow AI
							</span>
						</h1>

						<p className='text-md sm:text-base lg:text-lg  text-gray-400 max-w-2xl mx-auto lg:mx-0 mb-6 sm:mb-8 animation-in slide-in-from-bottom duration-700 delay-200 leading-relaxed'>
							Accelerate your development workflow with intelligent code completion,
							automated testing, and smart debugging. Ship production-ready code 10x
							faster.
						</p>

						<div className='relative flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-8 sm:mb-12 animate-in slide-in-from-bottom duration-700 delay-300'>
							<button className='group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-linear-to-b from-blue-600 to-blue-400 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-102 flex items-center justify-center space-x-2 cursor-pointer'>
								<span>Start Coding Free</span>
								<ArrowRight className='w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300' />
							</button>
							<button
								onClick={() => setToggleDemoButton(true)}
								className='group w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-2.5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 hover:bg-white/10 flex items-center justify-center space-x-2 cursor-pointer'
							>
								<div className='p-2 bg-white/10 rounded-full group-hover:bg-white/20 duration-300 transition-colors'>
									<Play className='w-4 h-4 sm:w-5 sm:h-5 fill-white' />
								</div>
								<span>Watch Demo</span>
							</button>

							<div
								className={`absolute ${
									toggleDemoButton ? 'block' : 'hidden'
								} z-100 w-auto md:w-96 lg:w-xl lg:-top-72 lg:left-1/2 bg-gray-900/50 backdrop-blur-xl border border-white/20 rounded-xl p-4 transition-all duration-700`}
							>
								<div className='flex flex-col p-4 space-y-6 bg-slate-950 rounded-lg border border-white/20'>
									<div className='flex w-full items-center justify-between'>
										<span className='flex items-center gap-2 text-xl text-amber-400'>
											<AlertTriangle /> Attention
										</span>
										<button className='cursor-pointer hover:scale-120 transition-all duration-500'>
											<X onClick={() => setToggleDemoButton(false)} />
										</button>
									</div>
									<div className='flex flex-col items-center justify-center space-y-4'>
										<span className='bg-linear-to-b from-blue-400 via-cyan-400 to-blue-400 bg-clip-text'>
											The link leads to YouTube
										</span>
										<a
											onClick={() => setToggleDemoButton(false)}
											target='_blank'
											href='https://youtu.be/xvFZjo5PgG0?si=kZ49dr6A4OPmT4ZF'
											className='md:text-xl bg-linear-to-b from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent'
										>
											Continue
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className='relative order-2 w-full '>
						<div className='relatvie bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-2xl border border-white/10'>
							<div className='bg-linear-to-br from-gray-900/20 to-gray-800/20 backdrop-blur-sm rounded-lg overflow-hidden h-[280px] sm:h-[350px] lg:h-[450px] border border-white/5'>
								{/* IDE Header */}
								<div className='flex items-center justify-between px-3 sm:px-4 py-2 s:py-3 bg-white/5 backdrop-blur-sm border-b border-white/10'>
									<div className='flex items-center space-x-2 '>
										<MacCirclies />
										<span className='text-xs sm:text-sm text-gray-300'>
											CodeFlow AI
										</span>
									</div>

									<ChevronDown className='w-3 h-3 sm:w-4 sm:h-4 text-gray-400 cursor-pointer' />
								</div>

								<div className='p-3 sm:p-4 relative h-full'>
									{/* File tabs */}
									<div className='flex space-x-1 sm:space-x-2 overflow-x-auto'>
										<ButtonToFile
											activeTab={activeTab}
											onClick={() => setActiveTab('App.jsx')}
										>
											App.jsx
										</ButtonToFile>
										<ButtonToFile
											activeTab={activeTab}
											onClick={() => setActiveTab('Hero.jsx')}
										>
											Hero.jsx
										</ButtonToFile>
										<ButtonToFile
											activeTab={activeTab}
											onClick={() => setActiveTab('Header.jsx')}
										>
											Header.jsx
										</ButtonToFile>
									</div>

									{/* Code Content */}
									<div className='relative overflow-hidden grow'>
										<SyntaxHighlighter
											language='javascript'
											style={nightOwl}
											customStyle={{
												margin: 0,
												borderRadius: '8px',
												borderTopLeftRadius: '0px',
												fontSize: '12px',
												lineHeight: '1.4',
												height: '100%',
												border: '1px solid #3c3c3c',
												wordWrap: 'break-word',
												whiteSpace: 'pre-wrap',
												textAlign: 'left',
											}}
										>
											{codeExamples[activeTab]}
										</SyntaxHighlighter>
									</div>
								</div>
							</div>

							{/* Floating Cards */}
							<CardForTab activeTab={activeTab} />
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Hero
