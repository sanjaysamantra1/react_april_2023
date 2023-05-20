import React,{ useEffect,useRef,useState} from "react";

export default function UseRefDemo1() {
  const [count, setCount] = useState(0);
  const [prevCount, setPrevCount] = useState(0);
  const myRef = useRef();

  useEffect(() => {
    myRef.val = count;
  });

  return (
    <h2>
      Now: {count}, before: {myRef.val}, prev value {prevCount}
      <button onClick={()=>{
        setCount(count+1);
        setPrevCount(count);
        }}>Increment</button>
    </h2>
  );
}
