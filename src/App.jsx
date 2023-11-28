import Decryptor from './features/Decryptor';
import Encryptor from './features/Encryptor';

export default function App() {
	return (
		<main className='container mx-auto flex flex-col justify-evenly gap-14'>
			<section className='p-12'>
				<h1 className='text-8xl text-white text-center tracking-[-7px] font-bold italic'>
					Dencryptor
				</h1>
			</section>

			<section className='flex flex-col gap-4'>
				<h2 className='text-6xl text-white tracking-[-5px] font-bold italic'>
					Encrypt
				</h2>
				<Encryptor />
			</section>

			<section className='flex flex-col gap-4'>
				<h2 className='text-6xl text-white tracking-[-5px] font-bold italic'>
					Decrypt
				</h2>
				<Decryptor />
			</section>
		</main>
	);
}
