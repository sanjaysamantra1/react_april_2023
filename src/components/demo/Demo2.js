import React from "react";

export default function Demo2() {
  function formatName(user) {
    return user.firstName + " " + user.lastName;
  }
  let user = {
    firstName: "sanjay",
    lastName: "samantra",
  };
  const img_url =
    "https://m.cricbuzz.com/a/img/v1/192x192/i1/c171004/sachin-tendulkar.jpg";
  return (
    <div>
      <h2>React Version is {React.version}</h2>
      <h2>{2 + 3 * 4}</h2>
      <h2>my name is- {user.firstName}</h2>
      <h2>my full name is- {formatName(user)}</h2>
      <img src={img_url} alt="Not available" />
      <input value={user.firstName} />
    </div>
  );
}
