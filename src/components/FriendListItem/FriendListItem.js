import { FriendItem, FriendStatus, FriendName } from './FriendListItem.styled';

export const FriendListItem = ({ id, avatar, name, isOnline }) => {
  const backgroundColor = isOnline ? 'green' : 'red';
  return (
    <FriendItem key={id}>
      <FriendStatus style={{ backgroundColor }}> </FriendStatus>
      <img src={avatar} alt={name} width="48" />
      <FriendName>{name}</FriendName>
    </FriendItem>
  );
};
