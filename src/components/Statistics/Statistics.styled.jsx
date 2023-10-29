import styled from 'styled-components';

export const StatSection = styled.section`
  margin-bottom: 16px;
`;

export const StatTitle = styled.h2`
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 32px;
  color: rgb(153, 164, 176);
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: center;
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  padding: 16px 24px;
  color: rgb(29, 14, 14);
`;

export const StatLabel = styled.span`
  margin-bottom: 8px;
`;

export const StatPercentage = styled.span`
  font-size: 24px;
`;
