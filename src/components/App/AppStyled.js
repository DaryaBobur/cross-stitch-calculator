import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  font-family: 'Philosopher', sans-serif;
  @media screen and (max-width: 767px) {

padding: 15px;
}
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 50px;
  font-family: 'Philosopher', sans-serif;
  font-weight: 700;
`;

export const Wrap = styled.div`
  width: 630px;
  display: inline-flex;
  flex-direction: column;
  padding: 20px;
  border: 2px solid green;
  border-radius: 20px;
  margin-right: auto;
  margin-left: auto;

  @media screen and (max-width: 767px) {
    padding: 10px;
    width: 280px;
    border: none;

  }
`;
