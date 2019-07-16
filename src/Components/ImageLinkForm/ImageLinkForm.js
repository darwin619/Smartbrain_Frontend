import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = ( {onInputChange, onButtonSubmit} ) => {
		return (

			<div>
				<div className="pb3 pt3">
				<p style={{margin: '0 auto'}} className='tc f4 pv2 br3 shadow-5 w-70'> 
					{`This Magic Brain Will Detect Faces In Your Image. Give It A Try`} 
				</p>
				</div>
			
		
			<div style={{margin: '0 auto'}} className='form w-70 pa4 br3 shadow-2'>
			<input className='f5 pa2 w-70' type='text' onChange={onInputChange} />
			<button onClick={onButtonSubmit} className='w-30 tc grow f5 link ph3 pv2 dib black dim bg-transparent pointer'>Detect</button>
			</div>

			</div>
		
		);
	}

export default ImageLinkForm;