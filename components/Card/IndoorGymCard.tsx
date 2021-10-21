import { IndoorGym } from "client";
import { MouseEventHandler } from "react";
import styles from "./Card.module.css";

export interface CardProps {
  indoorGym: IndoorGym;
  onCardClose: MouseEventHandler<HTMLDivElement>;
}

function Card({ indoorGym, onCardClose }: CardProps) {
  if (indoorGym == undefined) {
    return null;
  }

  return (
    <div className={styles.card}>
      <div className="cragname">
        <div onClick={onCardClose} className={styles.close}>
          Close ✖️
        </div>
        <span dangerouslySetInnerHTML={{ __html: indoorGym?.gymName }} />
        <span dangerouslySetInnerHTML={{ __html: indoorGym?.description }} />
      </div>
    </div>
  );
}

export default Card;
