import Image from 'next/image';

type IProps = {
	src: string;
};
const Add: React.FC<IProps> = ({ src }) => <Image alt='Add' src={src} layout='fixed' width={300} height={200} />;

export default Add;
