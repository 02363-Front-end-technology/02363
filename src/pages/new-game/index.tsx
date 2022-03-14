import Layout from '@Components/Layouts/Layout';
import { axiosInstance } from '@Utils/axiosInstance';
import React, { useState } from 'react';
import { EApiStatus } from '@Interfaces/apiStates';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Button } from '@chakra-ui/react';

interface IFormInput {
	name: string;
}

const IndexPage = () => {
	const {
		handleSubmit,
		register,
		formState: { errors, isValid }
	} = useForm<IFormInput>({mode: 'onChange'});
	const [apiStatus, setApiStatus] = useState<EApiStatus>(EApiStatus.ready);

	const onSubmit: SubmitHandler<IFormInput> = ({ name }) => {
		setApiStatus(EApiStatus.loading);
		axiosInstance
			.post('users', { name: name })
			.then(() => setApiStatus(EApiStatus.succes))
			.catch(() => setApiStatus(EApiStatus.error));
	};

	return (
		<Layout title='Create new game'>
			<form className='space-y-6' onSubmit={handleSubmit(onSubmit)}>
				<div className='flex flex-col'>
					<label htmlFor='name'>Name</label>
					<input {...register('name', { required: true })} className='rounded-2xl border px-2 focus:outline-none' />
					{errors.name && <span>This field is required</span>}
				</div>
				<Button type='submit' className='my-button disbaled:cursor-not-allowed' disabled={!isValid} isLoading={apiStatus === EApiStatus.loading}>
					Start game
				</Button>
			</form>
		</Layout>
	);
};

export default IndexPage;
