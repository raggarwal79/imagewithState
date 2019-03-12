import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Post from '../Post/Post';
import './PostsList.css';

export default class PostsList extends Component {
	render() {
		const {posts} = this.props;
		return (
			<div className="postsList">
				{
					posts.length > 0 ? posts.map(function(post, index){
						return (
							<Post key={index} post={post} />
						)
					}) : <div className="noPosts textCenter">No Posts</div>
				}
			</div>
		);
	}
}

PostsList.propTypes = {
	posts: PropTypes.array.isRequired
};