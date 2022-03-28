import FrontpageLayout from '@Components/layouts/FrontpageLayout';
import { axiosInstance } from '@Utils/axiosInstance';
import React, { useState } from 'react';
import { EApiStatus } from '@Interfaces/apiStates';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { IUser } from '@Interfaces/index';
import style from '@Styles/FrontpageLayout.module.css';
import Link from 'next/link';

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

	const router = useRouter();

	const onSubmit: SubmitHandler<IFormInput> = ({ name }) => {
		setApiStatus(EApiStatus.loading);
		axiosInstance
			.post<IUser>('users', { name: name })
			.then((r) => {
				setApiStatus(EApiStatus.succes);
				localStorage.setItem("currentUser", r.data.id)
				router.push({ pathname: '/game', query: { uuid: r.data.id } });
			})
			.catch(() => setApiStatus(EApiStatus.error));
	};

	return (
		<FrontpageLayout title='Create new game'>
			<form onSubmit={handleSubmit(onSubmit)} className={style.content}>
				<div className={style.inputContainer}>
					<label htmlFor='name'>Game name</label>
					<input type="text" id='name' {...register('name', { required: true })} className={style.input} />
					<div className={style.error}>{errors.name && <span>The game name is required</span>}</div>
				</div>
				<div className={style.buttonContainer}>
					<Link href='/'>
						<button className={"btn"}><a data-cy='/'>Back</a></button>
					</Link>
					<input type='submit' className={"btn"} disabled={!isValid} data-cy='submit' value="Start" />
				</div>
			</form>
		</FrontpageLayout>
	);
};

export default IndexPage;
