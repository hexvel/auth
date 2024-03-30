import { Poppins } from 'next/font/google'
import Image from 'next/image'

import { cn } from '@/shared/lib/utils'

const font = Poppins({
	subsets: ['latin'],
	weight: ['400', '600'],
})

const Logo = () => {
	return (
		<div className='hidden md:flex items-center gap-x-2'>
			<Image
				className='rounded-full'
				src='/logo.jpg'
				height='40'
				width='40'
				alt='Logo'
			/>
			<p className={cn('font-semibold', font.className)}>Authorization</p>
		</div>
	)
}

export default Logo
