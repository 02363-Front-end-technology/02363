import '../styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-supabase';
import { supabase } from '@Utils/supabaseClient';

const MyApp = ({ Component, pageProps }) => {
	return (
		<Provider value={supabase}>
			<ChakraProvider>
				<Component {...pageProps} />
			</ChakraProvider>
		</Provider>
	);
};

export default MyApp;
