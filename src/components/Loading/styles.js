import styled, {  keyframes } from 'vue-styled-components';
import colors from '../../styles/colors';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const appear = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background: transparent;
  animation: ${appear} 0.4s ease-out both;
  
  img {
    animation: ${rotate} 1.8s linear infinite;
    width: 16w;
    max-width: 200px;
    margin-bottom: 16px;
  }

  h2 {
    font-size: clamp(2rem, 3vw, 5rem);
    color: ${colors.darkBlue};
  }
`;
