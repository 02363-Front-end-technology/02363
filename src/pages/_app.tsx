import '../styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-supabase';
import { supabase } from '@Utils/supabaseClient';
import { RecoilRoot } from 'recoil';
import { useEffect } from 'react';
import { themeChange } from 'theme-change';

const MyApp = ({ Component, pageProps }) => {

	useEffect(() => {
	themeChange(false);
	}, []);

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

export default MyApp;
