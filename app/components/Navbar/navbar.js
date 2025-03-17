import Link from "next/link";
import styles from "./navbar.module.css";
export default function Navbar() {
  return (
    <nav>
      <div className={styles.fl}>
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
