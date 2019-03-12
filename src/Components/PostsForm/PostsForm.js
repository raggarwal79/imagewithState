import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './PostsForm.css';

export default class PostsForm extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			postTitle: '',
			postUrl: ''
		};
	};
	
	//Clear the post fields
	clearPostForm = () => this.setState({postTitle: '', postUrl: ''});
	
	//On input change, update the state
	handleInputChange = (e) => this.setState({[e.target.name]: e.target.value});
	
	//Handle form submit and save the post
	handleSubmit = e => {
		e.preventDefault(); //Preventing form submit
		this.props.addPost({
			postTitle: this.state.postTitle,
			postUrl: this.state.postUrl
		});
		this.clearPostForm();
		this.focusPostUrl();
	};
	
	//Focus the Post URL field on load, else user needs to manually focus
	componentDidMount(){
	   this.focusPostUrl(); 
	}
	
	//Method to focus the Post URL field
	focusPostUrl = () => this.postUrlInput ? this.postUrlInput.focus() : null;
	
	render() {
		const {postTitle, postUrl} = this.state;
		return (
			<div className="postForm">
				<form autoComplete="off" onSubmit={(e) => this.handleSubmit(e)}>
					<input type="url" name="postUrl" placeholder="Enter URL" value={postUrl} onChange={(e) => this.handleInputChange(e)} ref={(input) => { this.postUrlInput = input; }} required />
					<input type="text" name="postTitle" placeholder="Title" value={postTitle} onChange={(e) => this.handleInputChange(e)} required />
				
					<button type="submit" className="submitBtn" disabled={postTitle === '' || postUrl === ''}>New Post</button>
				</form>
			</div>
		);
	}
}

PostsForm.propTypes = {
	addPost: PropTypes.func.isRequired
};