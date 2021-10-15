import { ProShop } from "client";
import styles from "./Card.module.css";

export interface CardProps {
  proShop: ProShop;
}

function Card({ proShop }: CardProps) {
  if (proShop == undefined) {
    return null;
  }

  return (
    <div className={styles.card}>
      <div className="cragname">
        <span dangerouslySetInnerHTML={{ __html: proShop?.shopName }} />
        <span dangerouslySetInnerHTML={{ __html: proShop?.description }} />
      </div>
    </div>
  );
}

export default Card;
