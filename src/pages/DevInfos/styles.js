import styled from 'vue-styled-components';
import colors from '../../styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 0;
  max-width: 600px;
  margin: 0 auto;

  h1 {
    color: ${colors.lightBlue};
    margin-bottom: 24px;
  }

  .error-info {
    color: ${colors.orange};
    font-size: clamp(2rem, 3vw, 5rem);
  }
`;

export const PersonalInfo = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 30vw;
    max-width: 300px;
    border-radius: 50%;
    border: 5px solid ${colors.lightBlue};
    margin-bottom: 24px;
  }

  h3 {
    font-size: clamp(2rem, 3vw, 5rem);

    > span {
      color: ${colors.lightBlue};
    }
    margin-bottom: 8px;
  }

  > span {
    color: ${colors.yellow};
    font-size: clamp(1.5rem, 1.5vw, 2rem);
  }

  > p {
    text-align: center;
    margin: 32px 24px;
    font-size: clamp(1.2rem, 1.2vw, 2rem);
    color: ${colors.white};
  }

  a {
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
    background: ${colors.pink};
    color: ${colors.white};
    font-size: clamp(1.2rem, 1.2vw, 2rem);
    font-weight: 700;
    border-radius: 4px;
    border: 2px solid ${colors.pink};
    transition: color 0.6s, background-color 0.6s;

    &:hover {
      transition: color 0.6s, background-color 0.6s;
      color: ${colors.pink};
      background: transparent;
    }
  }
`;