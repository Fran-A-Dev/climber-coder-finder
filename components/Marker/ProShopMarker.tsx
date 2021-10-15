import { ProShop } from "client";
import { MouseEventHandler } from "react";
import styles from "./Marker.module.css";

export interface MarkerProps {
  proShop: ProShop;
  lat: number;
  lng: number;
  onClick: MouseEventHandler<HTMLDivElement>;
}

function ProShopMarker({ proShop, onClick }: MarkerProps) {
  return (
    <div onClick={onClick} className={styles.marker}>
      <span
        className={styles.hovertext}
        data-hover="Click here for pro shop info"
      >
        🎒
      </span>
    </div>
  );
}

export default ProShopMarker;
