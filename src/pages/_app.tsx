import '../styles/globals.css';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { Provider } from 'react-supabase';
import { supabase } from '@Utils/supabaseClient';
import { RecoilRoot } from 'recoil';
import { Toaster } from 'react-hot-toast';

const MyApp = ({ Component, pageProps }) => {

	return (
		<RecoilRoot>
			<div><Toaster/></div>
			<Provider value={supabase}>
				<ChakraProvider>
					<Component {...pageProps} />
				</ChakraProvider>
			</Provider>
		</RecoilRoot>
	);
};

export default MyApp;
