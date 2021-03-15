import {
  Navbar,
  NavDropdown,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import style from "../styles/Header.module.css";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  const isActive = (link) => {
    if (router.pathname === link) return "activeLink";
    else return null;
  };
  return (
    <Navbar expand="lg" className="container ">
      <Navbar.Brand href="#home">
        <Link href="/">
          <Image src="/Logo.svg" width={218} height={100} />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="text-center">
        <Nav className={`mx-auto`}>
          <Link href="/" passHref>
            <Nav.Link
              className={`${style.navLinks} ${
                isActive("/") ? style.activeLink : ""
              } mx-3`}
            >
              Acasa
            </Nav.Link>
          </Link>
          <Link href="/magazin" passHref>
            <Nav.Link
              className={`${style.navLinks} ${
                isActive("/magazin") ? style.activeLink : ""
              } mx-3`}
            >
              Magazin
            </Nav.Link>
          </Link>
          <Link href="/contact" passHref>
            <Nav.Link
              className={`${style.navLinks} ${
                isActive("/contact") ? style.activeLink : ""
              } mx-3`}
            >
              Contact
            </Nav.Link>
          </Link>
        </Nav>
        <div className="d-flex justify-content-between mt-5 mt-lg-0">
          <div className="mx-2">
            <Image src="/shopping.svg" width={50} height={50} />
          </div>
          <div className="mx-2">
            <Image src="/user.svg" width={50} height={50} />
          </div>
          <div className="mx-2">
            <Image src="/settings.svg" width={50} height={50} />
          </div>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}
