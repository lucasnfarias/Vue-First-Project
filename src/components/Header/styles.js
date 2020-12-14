import styled from 'vue-styled-components';
import colors from '../../styles/colors';

const headerProps = {
  pathname: String,
}

export const Container = styled('div', headerProps)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 32px;
  width: 100%;
  margin: 0 auto;
  background: ${colors.lightBlack};
  box-shadow: 2px 2px 2px rgba(255, 255, 255, 0.15);

  img {
    width: 10vw;
    max-width: 64px;
  }

  a {
    color: ${colors.dutchWhite};
    text-decoration: none;
    margin-left: 16px;
    font-size: clamp(1rem, 2vw, 3rem);
    transition: color 0.5s, text-decoration 0.5s;

    &:hover {
      transition: color 0.5s, text-decoration 0.5s;
      color: ${colors.lightBlue};
      text-decoration: underline;
    }
  }

  .router-link-active {
    text-decoration: underline;
    color: ${colors.lightBlue};
  }
`;
