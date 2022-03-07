import { Button } from '@chakra-ui/react';
import React, { ReactNode } from 'react';


const NavBar = () => (
	<div className='bg-gradient-to-tl from-blue-700'>
        <nav className='flex flex-row items-center py-4'>
            <div className='basis-1/3 px-5'>
                02363 shop
            </div>
            <div className='basis-1/3'>
                <input className='rounded-full' type='text' placeholder='Search'/>
            </div>
            <div className='basis-1/3 flex space-x-6'>
                <Button>Sign in</Button>

                <Button>My Cart</Button>
            </div>
        </nav>
		
		
	</div>
);

export default NavBar;
