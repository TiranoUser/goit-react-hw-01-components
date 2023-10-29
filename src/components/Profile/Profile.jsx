import {
  UserProfile,
  UserPhoto,
  UserName,
  UserTag,
  UserLocation,
  UserStats,
  UserStatsInfo,
  UserLabel,
  UserQuantity,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <UserProfile>
      <div>
        <UserPhoto src={avatar} alt={username} />
        <UserName>{username}</UserName>
        <UserTag>@{tag}</UserTag>
        <UserLocation>{location}</UserLocation>
      </div>
      <UserStats>
        <UserStatsInfo>
          <UserLabel>Followers</UserLabel>
          <UserQuantity>{stats.followers}</UserQuantity>
        </UserStatsInfo>
        <UserStatsInfo>
          <UserLabel>Views</UserLabel>
          <UserQuantity>{stats.views}</UserQuantity>
        </UserStatsInfo>
        <UserStatsInfo>
          <UserLabel>Likes</UserLabel>
          <UserQuantity>{stats.likes}</UserQuantity>
        </UserStatsInfo>
      </UserStats>
    </UserProfile>
  );
};
