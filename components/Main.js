import style from "../styles/Main.module.css";
import Image from "next/image";
export default function Main() {
  return (
    <div>
      <div className={style.mainContainer}>
        <Image src="/Pattern1.svg" width={1920} height={787} />
      </div>
    </div>
  );
}
