import { useRef, useState } from 'react';

import { FaCopy } from 'react-icons/fa';
import decrypt from '../../utilities/decrypt';

export default function Encryptor() {
	const [text, setText] = useState();
	const textareaRef = useRef();
	const encryptedTextAreaRef = useRef();

	const handleEncryptText = () => {
		setText(() => {
			return decrypt(textareaRef.current.value);
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
				placeholder='Encrypt something...'
				ref={textareaRef}
				onChange={() => handleEncryptText()}
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
