import { ProShop } from "client";
import { MouseEventHandler } from "react";
import styles from "./Card.module.css";

export interface CardProps {
  proShop: ProShop;
  onCardClose: MouseEventHandler<HTMLDivElement>;
}

function Card({ proShop, onCardClose }: CardProps) {
  if (proShop == undefined) {
    return null;
  }

  return (
    <div className={styles.card}>
      <div className="cragname">
        <div onClick={onCardClose} className={styles.close}>
          Close ✖️
        </div>
        <span dangerouslySetInnerHTML={{ __html: proShop?.shopName }} />
        <span dangerouslySetInnerHTML={{ __html: proShop?.description }} />
      </div>
    </div>
  );
}

export default Card;
