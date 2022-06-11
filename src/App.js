import { useState } from 'react';
import './index.css';
import SelectList from './SelectList';

const App = () => {
	const [selected, setSelected] = useState('');
	return (
		<div className='flex flex-col items-center justify-center h-screen w-screen'>
			<span className='text-[4rem]'>🐯</span>
			<SelectList selected={selected} setSelected={setSelected} />
		</div>
	);
};

export default App;
