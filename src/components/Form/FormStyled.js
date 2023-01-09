import styled from '@emotion/styled';

export const FormStyled = styled.form`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  margin-right: auto;
  margin-left: auto;

  label {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 22px;
    font-weight: 500;

    @media screen and (max-width: 767px) {
      font-size: 14px;
    }
  }

  button {
    display: flex;
    margin-right: auto;
    margin-left: auto;
    width: 250px;
    font-size: 22px;
    font-weight: 700;
    margin-top: 30px;
    margin-bottom: 30px;
    background-size: contain;
    color: #134c15;
    -webkit-text-stroke: 1px black;
    font-family: 'Philosopher', sans-serif;

    @media screen and (max-width: 767px) {
      width: 200px;
    }
  }
`;
