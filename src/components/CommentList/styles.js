import styled from 'vue-styled-components';
import colors from '../../styles/colors';

const buttonProps = {
  hasComment: String,
};

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
`;

export const CommentForm = styled.form`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;

    & + div {
      margin-top: 16px;
    }

    label {
      margin-bottom: 4px;
    }

    input, textarea {
      border: 1px solid ${colors.dutchWhite};
      padding: 8px;
      background: ${colors.lightBlack};
      border-radius: 4px;
      color: ${colors.white};

      &:focus {
        border-color: ${colors.lightBlue};
      }
    }
  }
`;

export const CommentButton = styled('button', buttonProps)`
  display: flex;
  width: 50%;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  margin-top: 16px;
  border-radius: 8px;
  background: ${({ hasComment }) => hasComment ? colors.orange : colors.mediumGray};
  color: ${colors.white};
  font-weight: bold;
`;

export const NoComments = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  border: 1px solid ${colors.yellow};
  border-radius: 4px;
  padding: 48px;

  h2 {
    color: ${colors.yellow};
  }
`;

export const CommentList = styled.ul`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  list-style: none;
  margin-top: 24px;

  li {
    display: flex;
    width: 100%;
    align-items: flex-start;
    justify-content: space-between;
    border: 1px solid ${colors.pink};
    border-radius: 4px;
    padding: 16px;

    & + li {
      margin-top: 8px;
    }

    div {
      color: ${colors.pink};

      p {
        margin-top: 8px;
        white-space: pre-wrap;
      }
    }

    button {
      display: flex;
      width: fit-content;
      background: transparent;
      color: ${colors.pink};
      font-weight: bold;
      transition: text-decoration 0.5s, color 0.5s;

      &:hover {
        transition: text-decoration 0.5s, color 0.5s;
        text-decoration: underline;
        color: ${colors.orange};
      }
    }
  }
`;