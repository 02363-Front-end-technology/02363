import React from 'react';
import { useToast, Wrap } from '@chakra-ui/react';

type IProps = {
	status: "error" | "info" | "warning" | "success";
	message: string;
}

const BuyToast: React.FC<IProps> = ({status,message}) => {
	const toast = useToast();
	return (
		<Wrap>
			{toast({
				title: message,
				status: status,
				isClosable: true
			})}
		</Wrap>);

};

export default BuyToast;
