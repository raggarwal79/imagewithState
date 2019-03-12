import React from 'react';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('Test case for testing post form',() =>{
	let wrapper;
	
	configure({adapter: new Adapter()});
	it('add new post check',()=>
	{
		wrapper = mount((
			<App />
		));
		wrapper.find('input[name="postUrl"]').simulate('change', {target: {name: 'postUrl', value: 'https://res.cloudinary.com/twenty20/private_images/t_watermark-criss-cross-10/v1450248078000/photosp/e41c1f0f-2ed5-4f78-b92b-9900340b5d1a/stock-photo-river-travel-adventure-walking-foot-feet-boots-hike-going-e41c1f0f-2ed5-4f78-b92b-9900340b5d1a.jpg'}});
		wrapper.find('input[name="postTitle"]').simulate('change', {target: {name: 'postTitle', value: 'Hiking'}});
		wrapper.find('button').simulate('submit');
		
		expect(wrapper.state('posts')).toEqual([{postUrl: 'https://res.cloudinary.com/twenty20/private_images/t_watermark-criss-cross-10/v1450248078000/photosp/e41c1f0f-2ed5-4f78-b92b-9900340b5d1a/stock-photo-river-travel-adventure-walking-foot-feet-boots-hike-going-e41c1f0f-2ed5-4f78-b92b-9900340b5d1a.jpg', postTitle: 'Hiking'}]);
	})
})