import Link from "next/link";
import styles from "./navbar.module.css";
import Image from "next/image";
// import './globals.css'
import { Noto_Sans_Thai } from "next/font/google";

const notoSansThai = Noto_Sans_Thai({
  variable: "--font-geist-noto",

  subsets: ["thai"], // important: use 'thai'
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // pick weights you need
});

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      
      <div className={styles.fl}>
        <Image
          src="/images/icons/logo.png"
          alt="Logo"
          width={120} // set your image width
          height={60}
        />
        <div className="title-left">MULTI</div>
        <div className="title-right">SHOP</div>
      </div>
      {/* <ul>
        <li>
          <a href="/">
            <h2 className={styles.title}>Home</h2>
          </a>
        </li>
        <li>
          <Link href={"/pages/about"}>
            <h2 >About</h2>
          </Link>
        </li>
        <li>
          <Link href={"/pages/info"}>
            <h2 >Info</h2>
          </Link>
        </li>
      </ul> */}
    </nav>
  );
}
