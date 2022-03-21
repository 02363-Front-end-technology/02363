import FrontpageLayout from '@Components/layouts/FrontpageLayout';
import React from 'react';
import { GetStaticProps } from 'next';
import { supabase } from '@Utils/supabaseClient';
import { IUser } from '@Interfaces/index';
import dayjs from 'dayjs';
import Button from '@Components/Button';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import style from '@Styles/FrontpageLayout.module.css';
import Link from 'next/link';

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
		<FrontpageLayout title='Load game'>
			<form onSubmit={handleSubmit(onSubmit)} className={style.content}>
				<div className={style.inputContainer}>
					<label htmlFor='uuid'>Name</label>
					<select {...register('uuid', { required: true })}>
						{users.map((u) => (
							<option key={u.id} value={u.id}>
								{u.name} {dayjs(u.createdAt).format('DD-MM-YYYY').toString()}
							</option>
						))}{' '}
						{/*TODO should be last login date and balance*/}
					</select>
				</div>
				<div className={style.buttonContainer}>
					<Link href='/'>
						<button className={style.btn}><a data-cy='/'>Back</a></button>
					</Link>
					<input type='submit' className={style.btn} disabled={!isValid} data-cy='submit' value="Load" />
					{errors.uuid && <span>This field is required</span>}
				</div>
			</form>
		</FrontpageLayout>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const { data: users } = await supabase.from('users').select('*');

	return { props: { users }, revalidate: 600 };
};

export default IndexPage;
