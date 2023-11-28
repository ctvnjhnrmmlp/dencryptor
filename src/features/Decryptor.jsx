import { useRef, useState } from 'react';

import { FaCopy } from 'react-icons/fa';
import encrypt from '../../utilities/encrypt';

export default function Decryptor() {
	const [text, setText] = useState();
	const textareaRef = useRef();
	const encryptedTextAreaRef = useRef();

	const handleDecryptText = () => {
		setText(() => {
			return encrypt(textareaRef.current.value);
		});
	};

	const handleCopyText = () => {
		navigator.clipboard.writeText(encryptedTextAreaRef.current.value);
	};

	return (
		<div className='flex flex-col gap-4'>
			<textarea
				id='message'
				rows='1'
				className='block p-8 w-full text-2xl text-white bg-black rounded-lg border border-gray-300 focus:ring-white focus:border-white'
				placeholder='Decrypt something...'
				ref={textareaRef}
				onChange={() => handleDecryptText()}
			></textarea>
			<div className='flex gap-2'>
				<textarea
					id='message'
					rows='1'
					className='block p-8 w-full text-2xl text-white bg-black rounded-lg border border-gray-300 focus:ring-white focus:border-white'
					ref={encryptedTextAreaRef}
					disabled
					value={text}
				></textarea>
				<button
					type='button'
					className='text-black text-4xl font-bold tracking-[-3px] italic bg-white hover:bg-black hover:text-white focus:ring-4 focus:ring-gray-300 rounded-lg px-8 py-5'
					onClick={() => handleCopyText()}
				>
					<FaCopy />
				</button>
			</div>
		</div>
	);
}
