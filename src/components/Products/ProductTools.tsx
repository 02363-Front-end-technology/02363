/** contributors
 * Tobias Maneschijn
 */

import React from 'react';

type Props = {
	defaultSortValue: "price" | "rating" | "name";
	defaultDirValue: "ascending" | "descending";
    onSortChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    onDirChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const ProductTools = (props: Props) => {
    
	// return a div with selection boxes for sorting by price, rating, etc.
	return (
		<div className=' ml-4 mt-4 flex w-full flex-row content-start justify-start space-x-4'>
            <div className='form-control w-full max-w-xs'>
				<label htmlFor={"sortBy"} className='label'>
					<span className='label-text'>Sort by</span>
				</label>
				<select defaultValue={props.defaultSortValue} onChange={props.onSortChange} id='sortBy' className='select select-primary w-full max-w-xs'>
					<option value='price'>Price</option>
					<option value='rating'>Rating</option>
					<option value='name'>Name</option>
				</select>
			</div>
            <div className='form-control w-full max-w-xs'>
				<label htmlFor={"direction"} className='label'>
					<span className='label-text'>Direction</span>
				</label>
				<select defaultValue={props.defaultDirValue} id='direction' onChange={props.onDirChange} className='select select-primary w-full max-w-xs'>
					<option value='ascending'>Ascending ↑</option>
					<option value='descending'>Descending ↓</option>
				</select>
			</div>
		</div>
	);

	return <div>ProductTools</div>;
};

export default ProductTools;
