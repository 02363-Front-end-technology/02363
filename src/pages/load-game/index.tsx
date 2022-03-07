import Layout from '@Components/Layouts/Layout';
import { EApiStatus } from "@Interfaces/apiStates";
import React, { useState } from "react";
import { axiosInstance } from "@Utils/axiosInstance";
import { GetStaticProps } from "next";
import { supabase } from "@Utils/supabaseClient";
import { IUser } from "@Interfaces/index";
import dayjs from "dayjs";
import Button from "@Components/Button";
import { SubmitHandler, useForm } from 'react-hook-form';

interface IFormInput {
	uuid: string;
}

type Props = {
	users: IUser[]
}

const IndexPage: React.FC<Props> = ({users}) => {
	const { handleSubmit, register, formState: {errors, isValid} } = useForm<IFormInput>();
	const [apiStatus, setApiStatus] = useState<EApiStatus>(EApiStatus.ready);

	const onSubmit: SubmitHandler<IFormInput> = ({ uuid }) => {
		setApiStatus(EApiStatus.loading);
		axiosInstance
			.get(`users/${uuid}`)
			.then(() => setApiStatus(EApiStatus.succes))
			.catch(() => setApiStatus(EApiStatus.error));
	};

	return (
		<Layout title='Load game'>
			<form className='space-y-6' onSubmit={handleSubmit(onSubmit)}>
				<div className='flex flex-col'>
					<label htmlFor='uuid'>Name</label>
					<select {...register('uuid', {required: true})} className='focus:outline-none '>
						{users.map((u) =><option key={u.id} value={u.id}>{u.name} {dayjs(u.createdAt).format('DD-MM-YYYY').toString()}</option>)} {/*TODO should be last login date and balance*/}
					</select>
				</div>
				<Button type='submit' isLoading={EApiStatus.loading === apiStatus} disabled={!isValid} className='my-button'>Start game</Button>
				{errors.uuid && <span>This field is required</span>}
			</form>
		</Layout>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const { data: users } = await supabase.from('users').select('*');

	return { props: { users } };
};

export default IndexPage;
