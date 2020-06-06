import styled from "styled-components";

export const TrailerContainer = styled.div` 
position: relative,
paddingBottom: 56.25% /* 16:9 */,
paddingTop: 25px,
height: 0
`;

export const Title = styled.h2`
  margin: 2.5rem 0 2rem;
`;

export const YoutubeFrame = styled.iframe`
    position: absolute,
    top: 0,
    left: 0,
    width: 100%,
    height: 100%
`;
