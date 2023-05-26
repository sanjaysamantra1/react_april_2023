import React from "react";
import { Route, Routes } from "react-router-dom";
import Parent from "../comp-communication/Parent";
import ConditionalDemo1 from "../conditional/ConditionalDemo1";
import ConditionalDemo2 from "../conditional/ConditionalDemo2";
import Demo1 from "../demo/Demo1";
import Demo2 from "../demo/Demo2";
import Demo3 from "../demo/Demo3";
import Demo4 from "../demo/Demo4";
import Demo5 from "../demo/Demo5";
import Demo6 from "../demo/Demo6";
import Addition1 from "../events/Addition1";
import Addition2 from "../events/Addition2";
import EventDemo1 from "../events/EventDemo1";
import EventDemo2 from "../events/EventDemo2";
import EventDemo3 from "../events/EventDemo3";
import ForceUpdateDemo1 from "../forceUpdate/ForceUpdateDemo1";
import ForceUpdateDemo2 from "../forceUpdate/ForceUpdateDemo2";
import FormDemo1 from "../form/FormDemo1";
import FormDemo2 from "../form/FormDemo2";
import FormDemo3 from "../form/FormDemo3";
import FormDemo4 from "../form/FormDemo4";
import ClickCounter from "../hoc/ClickCounter";
import ClickCounterWithHOC from "../hoc/ClickCounterWithHOC";
import HoverCounter from "../hoc/HoverCounter";
import HoverCounterWithHOC from "../hoc/HoverCounterWithHOC";
import UseCallBackDemo1 from "../hooks/UseCallBackDemo1";
import UseEffectDemo1 from "../hooks/UseEffectDemo1";
import UseEffectDemo2 from "../hooks/UseEffectDemo2";
import UseEffectDemo3 from "../hooks/UseEffectDemo3";
import UseMemoDemo1 from "../hooks/UseMemoDemo1";
import UseMemoDemo2 from "../hooks/UseMemoDemo2";
import UseRefDemo1 from "../hooks/UseRefDemo1";
import HttpDemo1 from "../http/HttpDemo1";
import HttpDemo2 from "../http/HttpDemo2";
import HttpDemo3 from "../http/HttpDemo3";
import HttpDemo4 from "../http/HttpDemo4";
import HttpDemo5 from "../http/HttpDemo5";
import HttpDemo6 from "../http/HttpDemo6";
import LifeCycleDemo1 from "../lifecycle/LifeCycleDemo1";
import LifeCycleDemo2 from "../lifecycle/LifeCycleDemo2";
import ListDemo1 from "../listItem/ListDemo1";
import ListDemo2 from "../listItem/ListDemo2";
import ProductList from "../listItem/ProductList";
import ProductsTable from "../listItem/ProductsTable";
import SearchDemo from "../listItem/SearchDemo";
import UserList from "../listItem/UserList";
import MemoParent from "../memo/MemoParent";
import Greet from "../Props/Greet";
import RefDemo1 from "../ref/RefDemo1";
import RefDemo2 from "../ref/RefDemo2";
import RefDemo3 from "../ref/RefDemo3";
import RefDemo4 from "../ref/RefDemo4";
import AboutUs from "../routing/AboutUs";
import Careers from "../routing/Careers";
import ContactUs from "../routing/ContactUs";
import Home from "../routing/Home";
import NotFound from "../routing/NotFound";
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
      {/* <EventDemo3 /> */}
      {/* <Addition1 /> */}
      {/* <Addition2 /> */}
      {/* <Parent /> */}
      {/* <Demo5 /> */}
      {/* <Demo6 /> */}
      {/* <MemoParent /> */}
      {/* <UseMemoDemo1 /> */}
      {/* <UseMemoDemo2 /> */}
      {/* <UseCallBackDemo1 /> */}
      {/* <LifeCycleDemo1 name="Rahul" /> */}
      {/* <LifeCycleDemo2 /> */}
      {/* <UseEffectDemo1 /> */}
      {/* <UseEffectDemo2 /> */}
      {/* <UseEffectDemo3 /> */}
      {/* <UseRefDemo1 /> */}
      {/* <RefDemo1 /> */}
      {/* <RefDemo2 /> */}
      {/* <RefDemo3 /> */}
      {/* <RefDemo4 /> */}
      {/* <FormDemo1 /> */}
      {/* <FormDemo2 /> */}
      {/* <FormDemo3 /> */}
      {/* <FormDemo4 /> */}
      {/* <HttpDemo1 /> */}
      {/* <HttpDemo2 /> */}
      {/* <HttpDemo3 /> */}
      {/* <HttpDemo4 /> */}
      {/* <HttpDemo5 /> */}
      {/* <HttpDemo6 /> */}
      {/* <ClickCounter />
      <HoverCounter /> */}
      {/* <HoverCounterWithHOC />
      <ClickCounterWithHOC /> */}

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/aboutus" element={<AboutUs />} />
        <Route exact path="/careers" element={<Careers />} />
        <Route exact path="/contactus" element={<ContactUs />} />
        <Route exact path="/productlist" element={<ProductList />} />
        <Route path="*" element={<NotFound />} /> 
      </Routes>

    </div>
  );
}
