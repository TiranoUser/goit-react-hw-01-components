import { Profile } from '../Profile/Profile';
import user from '../../user.json';
import { GlobalStyle } from 'components/GlobalStyle';

export const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </div>
  );
};
