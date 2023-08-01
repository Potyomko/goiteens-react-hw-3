import s from "./FrienList.module.css";
import PropTypes from "prop-types";
import {FriendListItem} from "./FriendListItem";

export function FriendList({ friends }) {
    return (
      <ul className={s.friendList}>
        {friends.map((friend) => (
          <FriendListItem
            key={friend.id}
            avatar={friend.avatar}
            status={friend.isOnline}
            name={friend.name}
          />
        ))}
      </ul>
    );
  }

  FriendList.protoTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  };
  FriendList.defaultProps = {
    friends: [
      {
        avatar: "https://picsum.photos/200/300",
        name: "no name",
        isOnline: false,
        id: 0,
      },
    ],
  };  