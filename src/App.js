import React, { Component } from 'react';
import PostsForm from './Components/PostsForm/PostsForm';
import PostsList from './Components/PostsList/PostsList';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			posts: []
		};
	};
	
	//Add the post to state on submit.
	//Post will be added in the beginning of the array, so that lastest post will be shown on top
	addPost = newPost => {
		this.setState({posts: [newPost, ...this.state.posts]});
	};
  
	render() {
		const {posts} = this.state;
		return (
			<div className="App">
				<PostsForm addPost={this.addPost} />
				<PostsList posts={posts} />
			</div>
		);
	}
}

export default App;
