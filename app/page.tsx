import Image from "next/image";
import Style from "./app.module.scss";
import Block1 from "./components/block1";
import Block2 from "./components/Block2";
import Block3 from "./components/Block3";

export default function Home() {
  return (
    <div>
        <Block1/>
        <Block2/>
        <Block3/>
    </div>
  );
}
