import { MouseEventHandler } from "react";
import { OutdoorCrag } from "client";
import { MouseEvent } from "react";
import styles from "./Marker.module.css";
import googleMapReact from "google-map-react";

export interface MarkerProps {
  outdoorCrag: OutdoorCrag;
  lat: number;
  lng: number;
  onClick: MouseEventHandler<HTMLDivElement>;
}

function CragMarker({ outdoorCrag, onClick }: MarkerProps) {
  return (
    <div onClick={onClick} className={styles.marker}>
      <span className={styles.hovertext} data-hover="Click here for crag info">
        🧗🏾‍♂️
      </span>
    </div>
  );
}

export default CragMarker;
