import React from "react";

const FollowersCard = props => {
  console.log("followers", props);
  const { login, id, avatar_url } = props.followers;
  return (
    <div>
      <img src={avatar_url} />
      <p>Name: {login}</p>
      <p>Id: {id}</p>
    </div>
  );
};
export default FollowersCard;
