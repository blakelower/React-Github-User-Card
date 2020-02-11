import React from "react";

const UserCard = props => {
  console.log("usercard", props);
  const { login, id, avatar_url, bio } = props.user;
  return (
    <div>
      <img src={avatar_url} />
      <p>Name: {login}</p>
      <p>Id: {id}</p>
      <p>{bio}</p>
    </div>
  );
};
export default UserCard;
