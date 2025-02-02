'use client'

import { z } from 'zod'

import { Button } from '@/shared/ui/button'
import { zodResolver } from '@hookform/resolvers/zod'

import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/shared/ui/form'
import { Input } from '@/shared/ui/input'
import { useForm } from 'react-hook-form'

const formSchema = z.object({
	username: z.string().min(2, {
		message: 'Username must be at least 2 characters.',
	}),
	password: z.string().min(8, {
		message: 'Password must be at least 8 characters.',
	}),
})

export function AuthForm() {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			username: '',
			password: '',
		},
	})

	function onSubmit(values: z.infer<typeof formSchema>) {
		console.log(values)
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className='space-y-8 bg-black/15 dark:bg-secondary/35 py-4 px-8 rounded-lg'
			>
				<FormField
					control={form.control}
					name='username'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Username</FormLabel>
							<FormControl>
								<Input placeholder='Username' {...field} />
							</FormControl>
							<FormDescription>
								This is your public display name.
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='password'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Password</FormLabel>
							<FormControl>
								<Input placeholder='Password' {...field} />
							</FormControl>
							<FormDescription>This is your password.</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button className='w-full' type='submit'>
					Login
				</Button>
			</form>
		</Form>
	)
}
