import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar/navbar";
import "./globals.css";

export default function Home() {
  return (
    <div className="homepage">
      <div className="bg-home">
        <Image
          src="/images/bg/bg-home.png"
          alt="Logo"
          width={1970} // set your image width
          height={480}
        />
      </div>
     <div className="item-custom">
       <div className="grid grid-cols-12 ">
        <div className="col-span-4 ">
          <h2>ฟิลเตอร์</h2>
          <h3>ราคา/แผ่น</h3>
        </div>
        <div className="col-span-8 ">Col 8</div>
      </div>
     </div>
    </div>
  );
}
