'use client'

import useScrollTop from '@/hooks/use-scroll-top'
import Logo from './logo'

import { cn } from '@/shared/lib/utils'
import { ModeToggle } from '@/shared/ui/mode-toggle'

const Header = () => {
	const scrolled = useScrollTop()

	return (
		<div
			className={cn(
				'z-50 bg-background dark:bg-[#1f1f1f] fixed top-0 flex items-center w-full p-2',
				scrolled && 'border-b shadow-sm'
			)}
		>
			<Logo />
			<div className='md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2'>
				<ModeToggle />
			</div>
		</div>
	)
}

export default Header
