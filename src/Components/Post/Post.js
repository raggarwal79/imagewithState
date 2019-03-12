import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Post.css';

export default class Post extends Component {
	render() {
		const {post} = this.props;
		return (
			<div className="postContainer">
				<div className="postTitle textCenter">{post.postTitle}</div>
				<div className="postImage">
					<img src={post.postUrl} alt={post.postTitle} />
				</div>
			</div>
		);
	}
}

Post.propTypes = {
	post: PropTypes.object.isRequired
};