import React from "react";
import Demo1 from "../demo/Demo1";
import Demo2 from "../demo/Demo2";

export default function ConditionalDemo1() {
  let n = 6;

  let unreadMessages = ["msg-1", "msg-2"];

  //   return <div>{n % 2 === 0 ? `${n} is Even Number` : `${n} is Odd Number`}</div>;
  //   return <div>{n % 2 === 0 ? <Demo1 /> : <Demo2/>}</div>;

  /* if (n % 2 === 0) {
    return <Demo1 />;
  } else {
    return <Demo2 />;
  } */

  return (
    <div>
      {unreadMessages.length > 0 && (
        <h2>You have {unreadMessages.length} unread messages.</h2>
      )}
    </div>
  );
}
