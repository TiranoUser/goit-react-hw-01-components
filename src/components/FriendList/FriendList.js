import { FriendListItem } from 'components/FriendListItem/FriendListItem';

import { FriendStyle, FriendSection } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendSection>
      <FriendStyle>
        {friends.map(({ id, isOnline, avatar, name }) => (
          <FriendListItem
            id={id}
            isOnline={isOnline}
            avatar={avatar}
            name={name}
          />
        ))}
      </FriendStyle>
    </FriendSection>
  );
};
