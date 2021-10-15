import { LibationFood } from "client";
import { MouseEventHandler } from "react";
import styles from "./Marker.module.css";

export interface MarkerProps {
  libationFood: LibationFood;
  lat: number;
  lng: number;
  onClick: MouseEventHandler<HTMLDivElement>;
}

function LibationFoodMarker({ libationFood, onClick }: MarkerProps) {
  return (
    <div onClick={onClick} className={styles.marker}>
      <span
        className={styles.hovertext}
        data-hover="Click here for Food and Booze info"
      >
        🍻
      </span>
    </div>
  );
}

export default LibationFoodMarker;
