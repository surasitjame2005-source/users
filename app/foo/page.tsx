"use client";
import { useEffect, useState } from "react";

const Foo = () => {
  useEffect(() => {
    console.log("Foo");
  });
  return (
    <>
      <div>Foo</div>
    </>
  );
};
const FooPage = () => {
  const [x, setX] = useState();
  const [isShow, setIsShow]= useState(false)
  return (
    <div>
      <button className="bg-amber-400 rounded-xl p-2 m-2" onClick={()=>{setIsShow(!isShow)}}>Toggle</button>
      { isShow && <Foo></Foo>}
    </div>
  );
};
export default FooPage;