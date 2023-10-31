import { Profile } from '../Profile/Profile';
import user from '../../Data/user.json';
import { GlobalStyle } from 'components/GlobalStyle';
import { Statistics } from '../Statistics/Statistics';
import data from '../../Data/data.json';
import { FriendList } from 'components/FriendList/FriendList';
import friends from '../../Data/friends.json';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';
import transactions from '../../Data/transactions.json';

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
      <Statistics title="Upload stats." stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory deals={transactions} />
    </div>
  );
};
