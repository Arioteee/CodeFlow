export const ButtonToFile = ({ children, activeTab, onClick }) => {
	return (
		<button
			className={`px-3 py-2 backdrop-blur-sm text-xs sm:text-sm rounded-t-lg border border-b-0 transition-all duration-200 whitespace-nowrap
                  ${
						activeTab === children
							? 'bg-blue-500/30 text-white border-blue-400/20'
							: 'bg-white/5 text-gray-300 border-white/10 hover:bg-white/10'
					}`}
			onClick={onClick}
		>
			{children}
		</button>
	)
}
