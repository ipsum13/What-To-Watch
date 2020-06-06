import styled from "styled-components";

export const MovieWrapper = styled.div`
  position: relative;
`;

export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(${props => props.backdrop}) center no-repeat;
  background-size: cover;
  z-index: -1;
  filter: blur(15px);
  animation: fadein ease-out 1.4s;
`;

export const MovieInfo = styled.div`
  color: #939799;
  background-image: linear-gradient(rgba(0, 0, 0, 0.85) 15%, rgba(0, 0, 0, 0.2) 40%, rgba(0, 0, 0, 0.95) 95%);
  background-attachment: fixed;
  min-height: 100vh;
  text-align: left;
  padding: 3rem 5%;
  display: flex;
  justify-content: center;
  @media (max-width: 760px) {
    display: block;
  }
  @media (max-width: 464px) {
    padding: 6rem 1rem;
  }
`;

export const SidePanel = styled.div`
  position: relative;
  margin: 0 1rem;
  width: 186px;
  @media (max-width: 760px) {
    margin: 0 auto;
  }
`;

export const MainContent = styled.div`
  padding: 0 0 2rem 2rem;
  max-width: 1250px;
  overflow: auto;
  h1 {
    color: #939799;
    margin-bottom: 0.4rem;
    text-shadow: 1px 6px 22px #000;
  }
  @media (max-width: 760px) {
    padding: 0;
  }
`;

export const Title = styled.div`
  display: inline-block;
  margin-bottom: 1rem;
  width: auto;
  h4 {
    color: #d3d3d3;
    font-weight: 400;
    margin: 0.3rem 0;
  }
`;

export const SideTitle = styled(Title)`
  @media (min-width: 760px) {
    display: none;
  }
`;

export const GenreTab = styled.div`
  display: inline-block;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 3px;
  color: #ddd;
  padding: 0.2rem 0.4rem;
  margin: 0.2rem;
  text-align: center;
  :last-child {
    margin-bottom: 2rem;
  }
`;

export const SideStat = styled.div`
  font-size: 0.8rem;
  margin-bottom: 2rem;
  span {
    color: #939799;
  }
  h3 {
    color: #d3d3d3;
    margin: 0.4rem;
    font-size: 1.4rem;
    font-weight: 400;
  }
`;

export const Rating = styled.div`
  position: relative;
  margin-bottom: 2rem;
`;

export const Score = styled.p`
  position: absolute;
  margin: 0;
  right: 3rem;
  top: 0rem;
  font-weight: 600;
`;

export const MainTitle = styled(Title)`
  @media (max-width: 760px) {
    display: none;
  }
`;

export const Overview = styled.p`
  color: #939799;

  line-height: 1.5;
  margin-bottom: 3rem;
`;

/* const StyledButton = styled.button`
	padding: 1rem 2rem;
	border-radius: 3px;
	border: none;
	font-size: 0.9rem;
	background: #111;
	color: green;
	margin: 0 2rem;
	:hover {
		cursor: pointer;
		background: grey;
	}
`; */

export const Poster = styled.img`
	box-shadow: 0 0 35px black;
	transition: transform 0.3s;
    border-radius: 3px;
    width: 185px;
	height: 278px;
	@media screen and (max-width: 464px) and (min-width: 0px) {
		width: 55vw;
    height: 50vh;
    margin-right: 8rem;
	};
`;

