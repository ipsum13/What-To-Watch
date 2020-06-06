import styled from 'styled-components';
import { MovieGrid } from '../Home/Home.styled';


export const Title = styled.h2`
	margin: 2.5rem 0 2rem;
`;

export const RecMovieGrid = styled(MovieGrid)`
	
	grid-template-columns: repeat(4, 1fr);
	
	@media (max-width: 1024px) {
		grid-template-columns: repeat(3, 1fr);
	}
	@media (max-width: 930px) {
		grid-template-columns: repeat(2, 1fr);
	}
	@media (max-width: 820px) {
		grid-template-columns: repeat(2, 1fr);
	}
	@media (max-width: 620px) {
		grid-template-columns: repeat(2, 1fr);
	}
	@media (max-width: 464px) {
		grid-template-columns: repeat(2, 1fr);
		grid-row-gap: 2rem;
		grid-column-gap: 1rem;
		margin-right: 1rem;
		
	}
`;

export const SeeMoreContainer = styled.div`
	width: 100%;
	padding: 2rem 0;
	text-align: center;
`;

export const SeeMoreButton = styled.div`
	
	display: inline-block;
	margin: 0 auto;
	text-align: center;
	width: 20%;
	background: rgba(0, 0, 0, 0.4);
	padding: 1rem;
	border-radius: 3px;
	cursor: pointer;
	transition: 0.3s;
	&:hover {
		color: #fff;
	}
	@media (max-width: 464px) {
		width: 40%;
	}
`;