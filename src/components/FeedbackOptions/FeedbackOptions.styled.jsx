import styled from '@emotion/styled';

export const FeedbackWrapper = styled.div`
  display: flex;
`;

export const FeedbackButton = styled.button`
  &:not(:last-child) {
    margin-right: 40px;
  }
  width: 100px;
  height: 50px;
  background-color: #e4e9ed;
  border: 1px solid #030e1845;
  border-radius: 10px;
  transform: scale(1);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:nth-of-type(1):hover,
  &:nth-of-type(1):focus {
    transform: scale(1.1);
    background-color: #66df4edc;
    color: #fff;
  }

  &:nth-of-type(2):hover,
  &:nth-of-type(2):focus {
    transform: scale(1.1);
    background-color: #93a790dc;
    color: #fff;
  }

  &:nth-of-type(3):hover,
  &:nth-of-type(3):focus {
    transform: scale(1.1);
    background-color: #f10b0bdf;
    color: #fff;
  }
`;
