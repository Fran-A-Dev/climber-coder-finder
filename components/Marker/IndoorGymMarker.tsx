import { IndoorGym } from "client";
import { MouseEventHandler } from "react";
import styles from "./Marker.module.css";

export interface MarkerProps {
  indoorGym: IndoorGym;
  lat: number;
  lng: number;
  onClick: MouseEventHandler<HTMLDivElement>;
}

function IndoorGymMarker({ indoorGym, onClick }: MarkerProps) {
  return (
    <div onClick={onClick} className={styles.marker}>
      <span className={styles.hovertext} data-hover="Indoor Rock Gym Info">
        🪨
      </span>
    </div>
  );
}

export default IndoorGymMarker;
