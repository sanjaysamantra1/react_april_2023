import React from "react";
import Body from "./components/body/Body";
import Carousel from "./components/carousel/Carousel";
import Categories from "./components/categories/Categories";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import {
  myInterceptor1,
  logTimeInterceptor,
  responseInterceptor1
} from "./components/http/myInterceptor1";
import Navbar from "./components/navbar/Navbar";
import { MyContext } from "./utils/userContext";

// myInterceptor1();
// logTimeInterceptor();
// responseInterceptor1();

export default function App() {
  console.log(MyContext)
  return (
    <div>
      {/* <Header /> */}
      <Navbar />
      {/* <Categories/> */}
      {/* <Carousel /> */}
      <MyContext.Provider value='sachin'>
        <Body />
      </MyContext.Provider>
      <Footer />
    </div>
  );
}
