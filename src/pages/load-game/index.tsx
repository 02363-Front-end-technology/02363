import Layout from '@Components/layouts/Layout';
import React from 'react';
import { GetStaticProps } from 'next';
import { supabase } from '@Utils/supabaseClient';
import { IUser } from '@Interfaces/index';
import dayjs from 'dayjs';
import Button from '@Components/Button';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

interface IFormInput {
	uuid: string;
}

type Props = {
	users: IUser[];
};

const IndexPage: React.FC<Props> = ({ users }) => {
	const {
		handleSubmit,
		register,
		formState: { errors, isValid }
	} = useForm<IFormInput>();

	const router = useRouter();

	const onSubmit: SubmitHandler<IFormInput> = ({ uuid }) => {
		localStorage.setItem("currentUser", uuid)
		router.push({ pathname: '/game', query: { uuid: uuid } });
	};

	return (
		<Layout title='Load game'>
			<form className='space-y-6' onSubmit={handleSubmit(onSubmit)}>
				<div className='flex flex-col'>
					<label htmlFor='uuid'>Name</label>
					<select {...register('uuid', { required: true })} className='focus:outline-none '>
						{users.map((u) => (
							<option key={u.id} value={u.id}>
								{u.name} {dayjs(u.createdAt).format('DD-MM-YYYY').toString()}
							</option>
						))}{' '}
						{/*TODO should be last login date and balance*/}
					</select>
				</div>
				<Button type='submit' disabled={!isValid} className='my-button' data-cy='submit'>
					Start game
				</Button>
				{errors.uuid && <span>This field is required</span>}
			</form>
		</Layout>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const { data: users } = await supabase.from('users').select('*');

	return { props: { users }, revalidate: 600 };
};

export default IndexPage;
