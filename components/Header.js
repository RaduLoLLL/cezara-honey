import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Header.module.css";
import { useRouter } from "next/router";
export default function Header() {
  const router = useRouter();

  const isActive = (path) => {
    if (router.pathname === path) {
      return "activeLink";
    }
    return "";
  };
  return (
    <div className={styles.header}>
      <Image src="/Logo.svg" width={218} height={100} />
      <nav>
        <ul className={styles.nav}>
          <li>
            <Link href="/">
              <a href="#" className={isActive("/") ? styles.activeLink : ""}>
                Acasă
              </a>
            </Link>
          </li>
          <li>
            <Link href="/magazin">
              <a
                href="#"
                className={isActive("/magazin") ? styles.activeLink : ""}
              >
                Magazin
              </a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a
                href="#"
                className={isActive("/contact") ? styles.activeLink : ""}
              >
                Contact
              </a>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="icon-nav">
        <div className={styles.image}>
          <Link href="/cart">
            <Image src="/shopping.svg" width={50} height={50} />
          </Link>
        </div>
        <div className={styles.image}>
          <Link href="/profile">
            <Image src="/user.svg" width={50} height={50} />
          </Link>
        </div>
        <div className={styles.image}>
          <Link href="/settings">
            <Image src="/settings.svg" width={50} height={50} />
          </Link>
        </div>
      </div>
    </div>
  );
}
