import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange,onDetect }) => {
	return (
		<div>
			<p className='f3 center' style={{cursor:'default'}}>
				{'This Web App detects any faces in the photos you give'}
			</p>
			<div className='form pa4 br3 shadow-2 center'>
				<input className='f4 pa2 w-70 center br2' type='text' 
					placeholder='Give me an image url...'
					style={{background:'lightblue'}} 
					onChange={onInputChange}
				 />
				<button className='w-30 grow f4 link ph3 pv2 glow white bg-light-purple br2'
					onClick={onDetect}>
					{'Detect'}
				</button>
			</div>
		</div>
	);
}

export default ImageLinkForm;