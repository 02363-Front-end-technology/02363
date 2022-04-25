import Image from 'next/image';

type IProps = {
	src: string;
	title: string;
	width: number;
	height: number;
};
/** 
 *	author: @tobiasmaneschijn
*/
function Ad({ src, title }) {
	return (
		<div className='relative hover:cursor-pointer hover:opacity-50 transition duration-150'>
			<Image className='brightness-50 ' alt={"Ad"} src={src} layout='fill' objectFit='cover' />
			<div className='relative w-full'>
				<h2 className='pb-8 pt-14 text-center text-4xl font-semibold text-slate-200'>{title}</h2>
			</div>
		</div>
	);
}

export default Ad;
