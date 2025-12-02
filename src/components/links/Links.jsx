export const MenuLink = ({ AnchorID, children, onClick }) => {
	return (
		<li className='text-gray-300 hover:text-white text-sm lg:text-base'>
			<a href={AnchorID} onClick={onClick}>
				{children}
			</a>
		</li>
	)
}
