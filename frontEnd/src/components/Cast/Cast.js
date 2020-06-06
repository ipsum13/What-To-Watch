import React, { Component } from "react";
import {
  StyledCast,
  CastGrid,
  CastProfile,
  CastDetails,
  CastMember,
  CreditCharacter,
  CreditName,
  SeeMoreContainer,
  SeeMore,
} from "./Cast.styled";

export const CAST_PATH = "https://image.tmdb.org/t/p/w185";

class Cast extends Component {
  constructor() {
    super();
    this.state = {
      castCount: 6,
    };
  }

  seeMore = () => {
    const { credits } = this.props;
    const { castCount } = this.state;
    if (castCount === credits.length) return;
    this.setState({ castCount: castCount + 6 });
  };

  render() {
    const { credits } = this.props;
    const { castCount } = this.state;
    const cast = credits.cast.slice(0, castCount);

    return (
      <StyledCast>
        <h2>Cast &amp; Crew</h2>
        <CastGrid>
          {cast &&
            cast.map((credit) => (
              <CastMember data-testid="movie-credit" key={credit.credit_id}>
                <CastProfile
                  data-testid="credit-photo"
                  src={
                    credit.profile_path
                      ? `${CAST_PATH}${credit.profile_path}`
                      : "../../images/no_image.jpg"
                  }
                  alt={credit.name}
                />
                <CastDetails>
                  <CreditName data-testid="credit-name">
                    {credit.name}
                  </CreditName>
                  <CreditCharacter data-testid="credit-character">
                    {credit.character}
                  </CreditCharacter>
                </CastDetails>
              </CastMember>
            ))}
        </CastGrid>

        {castCount < credits.cast.length && (
          <SeeMoreContainer>
            <SeeMore onClick={this.seeMore}>See More</SeeMore>
          </SeeMoreContainer>
        )}
      </StyledCast>
    );
  }
}

export default Cast;
