import React, { useMemo, useState } from "react";
const f2 = function(name){
    console.log('F2 called')
    return name;
  }
export default function UseMemoDemo2() {
  const [a, setA] = useState(10);
  const [b, setB] = useState(20);

  const f1 = function(){
    console.log('I am f1...')
  }
  
  const myname = useMemo(()=>{
    f2('Sanjay')
  },[b])

  return <div>
    UseMemoDemo2
    <div>A value is: {a}</div>
    <div>My Name value is: {myname}</div>
    <button onClick={()=>{setA(a+1)}}>Update A</button>

    <button onClick={f1}>btn-1</button>

  </div>;
}
