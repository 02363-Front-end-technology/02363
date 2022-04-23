import FrontpageLayout from '@Components/layouts/FrontpageLayout';
import React from 'react';
import { GetStaticProps } from 'next';
import { supabase } from '@Utils/supabaseClient';
import { IUser } from '@Interfaces/index';
import dayjs from 'dayjs';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import style from '@Styles/FrontpageLayout.module.css';
import Link from 'next/link';
import { useSetRecoilState } from 'recoil';
import { currentUserIdState } from '../../atoms/user';

interface IFormInput {
	uuid: string;
}

type Props = {
	users: IUser[];
};

const LoadGame: React.FC<Props> = ({ users }) => {
	const setUserId = useSetRecoilState(currentUserIdState);
	const {
		handleSubmit,
		register,
		formState: { errors, isValid }
	} = useForm<IFormInput>();

	const router = useRouter();

	const onSubmit: SubmitHandler<IFormInput> = ({ uuid }) => {
		setUserId(uuid);
		router.push({ pathname: '/game', query: { uuid: uuid } });
	};

	return (
		<FrontpageLayout title='Load game'>
			<form onSubmit={handleSubmit(onSubmit)} className={style.content}>
				<div className={style.inputContainer}>
					<label htmlFor='uuid'>Name</label>
					<select {...register('uuid', { required: true })}>
						{users
							.sort((a, b) => (a.last_login < b.last_login ? 1 : -1))
							.map((user) => (
								<option key={user.id} value={user.id}>
									{user.name} {user.last_login && `(${dayjs(user.last_login).format('DD/MM/YYYY')})`}
								</option>
							))}
					</select>
				</div>
				<div className={style.buttonContainer}>
					<Link href='/' passHref={true}>
						<button className={style.btn}>
							<a data-cy='back'>Back</a>
						</button>
					</Link>
					<input type='submit' className={style.btn} disabled={!isValid} data-cy='submit' value='Load' />
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

export default LoadGame;
