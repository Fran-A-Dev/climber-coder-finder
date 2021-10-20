import { LibationFood } from "client";
import { MouseEventHandler } from "react";

import styles from "./Card.module.css";

export interface CardProps {
  libationFood: LibationFood;
  onCardClose: MouseEventHandler<HTMLDivElement>;
}

function Card({ libationFood, onCardClose }: CardProps) {
  if (libationFood == undefined) {
    return null;
  }

  return (
    <div className={styles.card}>
      <div className="cragname">
        <div onClick={onCardClose} className={styles.close}>
          Close ✖️
        </div>
        <span
          dangerouslySetInnerHTML={{ __html: libationFood?.restaurantName }}
        />
        <span dangerouslySetInnerHTML={{ __html: libationFood?.description }} />
        <div>
          Booze & BYOB Friendly
          <input type="checkbox" checked={libationFood?.alcohol}></input>
        </div>
      </div>
    </div>
  );
}

export default Card;
