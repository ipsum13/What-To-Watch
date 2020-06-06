import styled from "styled-components";

export const StyledCast = styled.div`
  margin-bottom: 2rem;
`;

export const CastGrid = styled.div`
  color: #939799;
  margin: 0 auto;
  display: grid;
  padding: 4rem 1rem 2rem 0rem;
  grid-template-columns: repeat(5, 1fr);
  grid-row-gap: 2rem;
  max-width: 1250px;
  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 820px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 620px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const CastMember = styled.div`
  display: flex;
  flex-direction: column;
  background: rgba(0, 0, 0, 0.4);
  width: 100%;
  @media (max-width: 464px) {
    display: grid;
    grid-template-columns: auto auto;
	}
`;

export const CastProfile = styled.img`
  width: 140px;
  height: 160px;
  padding: 0 1rem;
  @media (max-width: 464px) {
    
	}
`;

export const CastDetails = styled.div`
  display: block;
  width: 140px;
  
  padding: 0 1rem;
  
  @media (max-width: 464px) {
    display: inline-block;
	}
`;

export const CreditName = styled.h3`
  color: #939799;
`;

export const CreditCharacter = styled.h4`
  color: #939799;
  margin: 0;
  font-weight: 400;
`;

export const SeeMoreContainer = styled.div`
	width: 100%;
	text-align: center;
`;

export const SeeMore = styled.div`
	color: #99ccff;
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