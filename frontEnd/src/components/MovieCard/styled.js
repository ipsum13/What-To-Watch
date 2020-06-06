import styled from 'styled-components';

export const SearchPoster = styled.img`
	box-shadow: 0 0 35px black;
	transition: transform 0.3s;
    border-radius: 3px;
    width: 385px;
	height: 478px;
	margin-bottom: 50px;
	@media screen and (max-width: 464px) and (min-width: 0px) {
		width: 45vw;
		height: 40vh;
	};
`;

export const Poster = styled.img`
	box-shadow: 0 0 35px black;
	transition: transform 0.3s;
    border-radius: 3px;
    width: 185px;
	height: 278px;
	@media screen and (max-width: 464px) and (min-width: 0px) {
		width: 45vw;
		height: 40vh;
	};
`;

export const Carousel = styled.img`
box-shadow: 0 0 35px black;
transition: transform 0.3s;
border: 3rem;
width: 19vw;
height: 65vh;
margin-top: 1rem;
@media screen and (max-width: 464px) and (min-width: 0px) {
	width: 40vw;
	height: 52vh;
};
@media screen and (max-width: 1024px) and (min-width: 577px) {
	width: 24vw;
	height: 36vh;
};

`;

export const StyledMovie = styled.div`
	width: 185px;
	height: 278px;
	position: relative;
	margin: 0 auto;
	transition: 0.3s;
	a {
		text-decoration: none;
		color: #fff;
	}
	h3 {
		margin: 0;
		text-align: center;
	}
	h5 {
		margin: 0.5rem 0 0.7rem;
		font-weight: 400;
	}
	:hover {
		transform: scale(1.05);
	}

	@media screen and (max-width: 464px) and (min-width: 0px) {
		width: 40vw;
		height: 40vh;
	};
`;

export const StyledCarousel = styled.div`
	width: 19vw;
	height: 70vh;
	@media screen and (max-width: 464px) and (min-width: 0px) {
		width: 40vw;
		height: 58vh;
	};
	@media screen and (max-width: 1024px) and (min-width: 577px){
		width: 24vw;
		height: 40vh;
	};
	
	position: relative;
	margin: 0 auto;
	transition: 0.3s;
	a {
		text-decoration: none;
		color: #fff;
	}
	h3 {
		margin: 0;
		text-align: center;
	}
	h5 {
		margin: 0.5rem 0 0.7rem;
		font-weight: 400;
	}
	:hover {
		transform: scale(1.05);
	}
`;

export const Overlay = styled.div`
	background: rgba(0, 0, 0, 0.8);
	width: 385px;
	height: 478px;
	overflow: hidden;
	position: absolute;
	top: 0;
	left: 0;
	border-radius: 3px;
	padding: 1rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	opacity: 0;
	transition: opacity 0.3s;
	:hover {
		opacity: 1;
	}
`;

