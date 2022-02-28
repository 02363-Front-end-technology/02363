import { SubmitHandler, Controller, useForm } from 'react-hook-form';
import { Input } from '@chakra-ui/input';
import { Button } from '@chakra-ui/react';
import axios from 'axios';

interface IFormInput {
	name: string;
}

const IndexPage = () => {
	const { control, handleSubmit } = useForm<IFormInput>();

	const onSubmit: SubmitHandler<IFormInput> = ({ name }) => {
		axios
			.post('http://localhost:3000/api/users', { name: name })
			.then(() => console.log('added'))
			.catch(() => console.log('failed'));
	};

	return (
		<div className='flex min-h-screen items-center justify-center bg-gradient-to-r from-blue-700'>
			<form className='space-y-6' onSubmit={handleSubmit(onSubmit)}>
				<div>
				<label htmlFor='name'>Name</label>
				<Controller name='name' control={control} defaultValue='' render={({ field }) => <Input {...field} />} />
				</div>
				<Button type='submit'>Start Game</Button>
			</form>
		</div>
	);
};

export default IndexPage;
