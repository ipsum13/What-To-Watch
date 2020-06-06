import styled from "styled-components";

export const Background = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100vh;
background: url("./images/movies.png") center no-repeat;
background-size: cover;
z-index: -1;
filter: blur(10px);
`;