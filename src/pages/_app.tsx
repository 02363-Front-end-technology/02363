import '../styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-supabase';
import { supabase } from '@Utils/supabaseClient';
import { RecoilRoot } from 'recoil';

const IdleGameApp = ({ Component, pageProps }) => {

	return (
		<RecoilRoot>
			<Provider value={supabase}>
				<ChakraProvider>
					<Component {...pageProps} />
				</ChakraProvider>
			</Provider>
		</RecoilRoot>
	);
};

export default IdleGameApp;
