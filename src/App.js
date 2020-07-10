import React from 'react';
import Profile from './components/Profile/Profile';
// import Statistics from './components/Statistics/Statistics';
// import FriendList from './components/FriendList/FriendList';
// import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import user from './jsonsdata/user.json';
// import statisticalData from './jsonsdata/statistical-data.json';
// import friends from './jsonsdata/friends.json';
// import transactions from './jsonsdata/transactions.json';

const App = () => (
  <>
    <Profile user={user} />
    {/* Where user it's prop(contains name, tag etc. in a component Profile), ={user} - it's an data object(user.json) */}
    {/* <Profile
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    /> */}
    {/* <Statistics title="Upload stats" stats={statisticalData} /> */}
    {/* <FriendList friends={friends} /> */}
    {/* <TransactionHistory items={transactions} /> */}
  </>
);

export default App;
