import { OutdoorCrag } from "client";
import { MouseEventHandler } from "react";
import styles from "./Card.module.css";

export interface CardProps {
  outdoorCrag: OutdoorCrag;
  onCardClose: MouseEventHandler<HTMLDivElement>;
}

function Card({ outdoorCrag, onCardClose }: CardProps) {
  if (outdoorCrag == undefined) {
    return null;
  }

  return (
    <div className={styles.card}>
      <div className="cragname">
        <div onClick={onCardClose} className={styles.close}>
          Close ✖️
        </div>
        <span dangerouslySetInnerHTML={{ __html: outdoorCrag?.cragName }} />
        <span
          dangerouslySetInnerHTML={{ __html: outdoorCrag?.suggestedRoutes }}
        />
        <span dangerouslySetInnerHTML={{ __html: outdoorCrag?.address }} />
        <span>
          <img
            src={outdoorCrag?.routePic.sourceUrl()}
            alt={outdoorCrag.routePic.altText}
          />
        </span>
      </div>
    </div>
  );
}

export default Card;
