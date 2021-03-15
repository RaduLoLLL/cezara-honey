import Link from "next/link";
import style from "../styles/Hero.module.css";
import { Button } from "react-bootstrap";

export default function Hero() {
  return (
    <div className={style.heroSection}>
      <div
        className={` d-flex flex-column align-items-md-end justify-content-end align-items-sm-center ${style.container}`}
      >
        <div className={`${style.content} text-white`}>
          <h1 className={`${style.heading}`}>Miere Naturala</h1>
          <h2 className={`${style.subHeading}`}>Nou!</h2>
          <p className={`${style.description}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            lacinia finibus dapibus. Maecenas non efficitur orci, eget lobortis
            sapien. Curabitur elit quam, gravida quis leo ut, tempor aliquam
            elit.
          </p>
          <Button className={`px-5 py-2 ${style.button}`}>
            <Link href="/magazin">
              <a href="#" className={`${style.buttonText}`}>
                Cumpără
              </a>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
