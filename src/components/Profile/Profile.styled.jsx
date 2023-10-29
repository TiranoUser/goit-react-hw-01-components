import styled from 'styled-components';

export const UserProfile = styled.div`
  color: ${p => p.theme.colors.grey};
  text-align: center;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 1px 3px rgba(0, 0, 0, 0.12),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: ${p => p.theme.spacing(1)};
  width: 260px;
  margin-top: ${p => p.theme.spacing(8)};
  margin-bottom: ${p => p.theme.spacing(15)};
  padding-top: ${p => p.theme.spacing(5)};
`;

export const UserPhoto = styled.img`
  width: 100px;
  border-radius: 50%;
  margin: 0 auto;
  margin-bottom: ${p => p.theme.spacing(5)};
`;

export const UserName = styled.p`
  font-weight: 600;
  font-size: 20px;
  color: ${p => p.theme.colors.black};
  margin-bottom: ${p => p.theme.spacing(2)};
`;

export const UserTag = styled.p`
  color: ${p => p.theme.colors.grey};
  font-weight: 600;
  margin-bottom: ${p => p.theme.spacing(2)};
`;

export const UserLocation = styled.p`
  color: ${p => p.theme.colors.grey};
  font-weight: 600;
  margin-bottom: ${p => p.theme.spacing(6)};
`;

export const UserStats = styled.p`
  display: flex;
  border-top: 0.5px solid ${p => p.theme.colors.grey};
`;

export const UserStatsInfo = styled.li`
  display: flex;
  flex-direction: column;
  width: calc(33.3333%);
  padding: 16px 12px;
  background: ${p => p.theme.colors.white};
  border-right: 0.5px solid ${p => p.theme.colors.grey};
`;

export const UserLabel = styled.span`
  font-size: 14px;
  color: ${p => p.theme.colors.grey};
  margin-bottom: ${p => p.theme.spacing(1)};
`;

export const UserQuantity = styled.span`
  font-weight: 700;
  color: ${p => p.theme.colors.black};
`;
