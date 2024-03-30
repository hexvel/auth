import { Button } from '@/shared/ui/button'
import Link from 'next/link'

export const HomePage = () => {
	return (
		<Link href='/auth'>
			<Button>Авторизоваться</Button>
		</Link>
	)
}
