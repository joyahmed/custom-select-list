import React, { useState } from 'react';
import './index.css';

const SelectList = ({ selected, setSelected }) => {
	const [isActive, setIsActive] = useState(false);
	const [items, setItems] = useState([]);
	const [parent, setParent] = useState('');
	const [showChildren, setShowChildren] = useState(false);

	const options = [
		{
			name: 'JavaScript',
			children: ['Next.js', 'Remix.js', 'Blitz.js', 'React', 'Angular']
		},
		{
			name: 'C#',
			children: ['MVC', 'Blazor']
		},
		{
			name: 'Python',
			children: ['DJango', 'Tkinter']
		}
	];
	return (
		<div className='dropdown'>
			<div
				className='dropdown-button z-1'
				onClick={() => setIsActive(!isActive)}>
				{selected ? selected : 'Select Item'}
				{/* <input
					className='bg-transparent outline-none'
					type='text'
					value={selected}
					placeholder={selected ? selected : 'Search'}
				/> */}
			</div>

			{isActive && (
				<>
					<div
						className='dropdown-content'
						onClick={e => setSelected(e.target.textContent)}>
						{!showChildren &&
							options.map(option => (
								<div
									onClick={e => {
										setSelected(option);
										setIsActive(true);
										setShowChildren(!showChildren);
									}}>
									<div
										className={`dropdown-item transition-all duration-200 ${
											!showChildren ? 'opacity-100' : 'opacity-0'
										}`}
										onClick={e => {
											setItems(option.children);
											setParent(e.target.textContent);
										}}>
										<span className='flex relative items-center justify-between w-full bg-transparent z-2'>
											{option.name}
										</span>
									</div>
								</div>
							))}
					</div>
					{parent && showChildren && (
						<div className='dropdown-content'>
							{items &&
								items.map((item, index) => (
									<>
										{index === 0 && (
											<div
												className={`relative flex items-center px-2 border-0 cursor-pointer py-2`}
												onClick={() => setShowChildren(!showChildren)}>
												<span className='mr-2'>
													<svg
														xmlns='http://www.w3.org/2000/svg'
														className='h-5 w-5'
														viewBox='0 0 20 20'
														fill='currentColor'>
														<path
															fillRule='evenodd'
															d='M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z'
															clipRule='evenodd'
														/>
													</svg>
												</span>
												{parent && parent}
												<div
													className='absolute top-1 right-2 px-2 py-2 rounded-full text-[8px] cursor-pointer bg-gray-700 hover:bg-gray-800'
													onClick={() => setIsActive(false)}>
													<svg
														xmlns='http://www.w3.org/2000/svg'
														className='h-3 w-3 bg-transparent'
														viewBox='0 0 20 20'
														stroke='#FF4500'
														fill='currentColor'>
														<path
															fillRule='evenodd'
															d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
															clipRule='evenodd'
														/>
													</svg>
												</div>
											</div>
										)}
										<div
											className='dropdown-item cursor-pointer px-10'
											onClick={e => setSelected(e.target.textContent)}>
											{item}
										</div>
									</>
								))}
						</div>
					)}
				</>
			)}

			<svg
				className='absolute top-1 right-9 px-2 py-2 cursor-pointer h-10 w-10  bg-transparent'
				onClick={() => setSelected(null)}
				xmlns='http://www.w3.org/2000/svg'
				fill='none'
				viewBox='0 0 24 24'
				stroke='#FF4500'
				stroke-width='1.5'>
				<path
					stroke-linecap='round'
					stroke-linejoin='round'
					d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
				/>
			</svg>

			<svg
				xmlns='http://www.w3.org/2000/svg'
				className='absolute top-1 right-2 px-2 py-2 cursor-pointer h-10 w-10 z-1 bg-transparent'
				fill='none'
				viewBox='0 0 24 24'
				stroke='currentColor'
				strokeWidth={2}>
				<path strokeLinecap='round' strokeLinejoin='round' d='M19 9l-7 7-7-7' />
			</svg>
		</div>
	);
};

export default SelectList;
