import './App.css';
import { Statistics } from './components/Statistics';
import data from './data.json';
import {FriendList} from "./components/FriendList";
import friends from "./friends.json";

function App() {
  return (
    <>
      <Statistics stats={data} title='Upload stats'/>
      <FriendList friends={friends} />,
      </>
  );
}

export default App;
