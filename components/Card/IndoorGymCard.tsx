import { IndoorGym } from "client";
import styles from "./Card.module.css";

export interface CardProps {
  indoorGym: IndoorGym;
}

function Card({ indoorGym }: CardProps) {
  if (indoorGym == undefined) {
    return null;
  }

  return (
    <div className={styles.card}>
      <div className="cragname">
        <span dangerouslySetInnerHTML={{ __html: indoorGym?.gymName }} />
        <span dangerouslySetInnerHTML={{ __html: indoorGym?.description }} />
      </div>
    </div>
  );
}

export default Card;
