import React from 'react';

const Rank = ({ name, entries }) => {
	return (
		<div>
			<div className='white f3' style={{cursor:'default'}}>
				{`${name}, your current entry count is...`}
			</div>
			<div className='white f1' style={{cursor:'default'}}>
				{entries}
			</div>
		</div>
	);
}

export default Rank;