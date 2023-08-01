import s from "./FrienList.module.css";

export function FriendListItem({ id, avatar, name, isOnline }) {
  return (
    <li className={s.item} key={id}>
      <span style={{backgroundColor: isOnline ? "green" : "red"}} classsName={s.status}></span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
}
