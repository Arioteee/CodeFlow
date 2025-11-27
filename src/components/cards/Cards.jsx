import { floatingCards } from '../../data/CodeExample'

export const CardForTab = ({ activeTab }) => {
	const currentFloatingCard = floatingCards[activeTab]

	return (
		<div
			className={`hidden lg:block absolute bottom-4 right-4 transform translate-x-8 translate-y-8 w-72 backdrop-blur-2xl rounded-lg p-4 border border-white/20 shadow-2xl ${currentFloatingCard.bgColor}`}
		>
			<div className='flex items-center space-x-2 mb-2'>
				<div
					className={`w-6 h-6 flex items-center justify-center text-sm font-bold ${currentFloatingCard.iconColor} `}
				>
					{currentFloatingCard.icon}
				</div>
				<span className={`text-sm font-medium ${currentFloatingCard.textColor}`}>
					{currentFloatingCard.title}
				</span>
			</div>

			<div className={`text-sm text-left ${currentFloatingCard.contentColor}`}>
				{currentFloatingCard.content}
			</div>
		</div>
	)
}
