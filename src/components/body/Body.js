import React from "react";
import ConditionalDemo1 from "../conditional/ConditionalDemo1";
import ConditionalDemo2 from "../conditional/ConditionalDemo2";
import Demo1 from "../demo/Demo1";
import Demo2 from "../demo/Demo2";
import Demo3 from "../demo/Demo3";
import Demo4 from "../demo/Demo4";
import Addition1 from "../events/Addition1";
import EventDemo1 from "../events/EventDemo1";
import EventDemo2 from "../events/EventDemo2";
import ForceUpdateDemo1 from "../forceUpdate/ForceUpdateDemo1";
import ForceUpdateDemo2 from "../forceUpdate/ForceUpdateDemo2";
import ListDemo1 from "../listItem/ListDemo1";
import ListDemo2 from "../listItem/ListDemo2";
import ProductList from "../listItem/ProductList";
import ProductsTable from "../listItem/ProductsTable";
import SearchDemo from "../listItem/SearchDemo";
import UserList from "../listItem/UserList";
import Greet from "../Props/Greet";
import StateDemo0 from "../state/StateDemo0";
import StateDemo1 from "../state/StateDemo1";
import StateDemo2 from "../state/StateDemo2";
import StateDemo3 from "../state/StateDemo3";
import StateDemo4 from "../state/StateDemo4";
import StateDemo5 from "../state/StateDemo5";
import "./Body.css";

export default function Body() {
  return (
    <div className="body">
      {/* <div>This is My Body Component</div> */}
      {/* <Demo1/> */}
      {/* <Demo2 /> */}
      {/* <Demo3 /> */}
      {/* <Demo4/> */}
      {/* <ConditionalDemo1 /> */}
      {/* <ConditionalDemo2 /> */}
      {/* <ListDemo1 /> */}
      {/* <ListDemo2 /> */}
      {/* <UserList /> */}
      {/* <ProductsTable /> */}
      {/* <ProductList /> */}
      {/* <ForceUpdateDemo1 /> */}
      {/* <ForceUpdateDemo2 /> */}
      {/* <Greet name='Sachin Tendulkar' msg="Good Morning" age={40}>
        <>
          <h3>This is The Content From Body Component</h3>
          <h4>This is heading-4 from Parent</h4>
        </>
      </Greet>
      <Greet name="Usman" /> */}
      {/* <StateDemo0 /> */}
      {/* <StateDemo1 /> */}
      {/* <StateDemo2 /> */}
      {/* <StateDemo3 /> */}
      {/* <StateDemo4/> */}
      {/* <StateDemo5 /> */}
      {/* <SearchDemo /> */}
      {/* <EventDemo1 /> */}
      {/* <EventDemo2/> */}
      <Addition1 />
    </div>
  );
}
