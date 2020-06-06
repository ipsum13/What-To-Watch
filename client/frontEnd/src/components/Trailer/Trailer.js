import React, { Component } from 'react';
import { TrailerContainer, Title, YoutubeFrame } from './Trailer.styled';

class Trailer extends Component {
	render() {
		const { id } = this.props;
		return (
            <div className="container">
			<div className="embed-responsive embed-responsive-16by9">
				<Title>Trailer</Title>
				{/* <YouTube opts={opts} videoId="mP0VHJYFOAU" /> */}
				<iframe className="embed-responsive-item">
            
					src={`https://www.youtube.com/embed/${id}`}
					
				</iframe>
			</div>
            </div>
		);
	}
}

export default Trailer;
