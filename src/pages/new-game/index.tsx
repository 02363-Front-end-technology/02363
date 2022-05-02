/** contributors
 * Oliver Christensen
 * Loui
 */
import FrontpageLayout from '@Components/layouts/FrontpageLayout';
import { axiosInstance } from '@Utils/axiosInstance';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { IUser } from '@Interfaces/index';
import style from '@Styles/FrontpageLayout.module.css';
import Link from 'next/link';
import { useSetRecoilState } from 'recoil';
import { currentUserIdState } from '../../atoms';

interface IFormInput {
	name: string;
}

const IndexPage = () => {
	const setCurrentUserId = useSetRecoilState(currentUserIdState);

	const {
		handleSubmit,
		register,
		formState: { errors, isValid }
	} = useForm<IFormInput>({ mode: 'onChange' });

	const router = useRouter();

	const onSubmit: SubmitHandler<IFormInput> = ({ name }) => {
		axiosInstance
			.post<IUser>('/api/users', { name: name })
			.then((r) => {
				setCurrentUserId(r.data.id);
				router.push({ pathname: '/game', query: { uuid: r.data.id } });
			})
			.catch((err) => console.error(err));
	};

	return (
		<FrontpageLayout title='Create new game'>
			<form onSubmit={handleSubmit(onSubmit)} className={style.content}>
				<div className={style.inputContainer}>
					<label htmlFor='name'>Game name</label>
					<input type='text' id='name' {...register('name', { required: true })} className={style.input} />
					<div className={style.error}>{errors.name && <span>The game name is required</span>}</div>
				</div>
				<div className={style.buttonContainer}>
					<Link href='/' passHref={true}>
						<button className='btn'>
							<a data-cy='/'>Back</a>
						</button>
					</Link>
					<input type='submit' className='btn' disabled={!isValid} data-cy='submit' value='Start' />
				</div>
			</form>
		</FrontpageLayout>
	);
};

export default IndexPage;
