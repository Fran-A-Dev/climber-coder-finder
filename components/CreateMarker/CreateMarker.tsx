import Link from "next/link";
import styles from "./CreateMarker.module.css";

export default function CreateMarker() {
  return (
    <Link href="/submit">
      <a className={styles.createMarker}>
        <svg viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke-width="7.5"
          ></circle>
          <line x1="32.5" y1="50" x2="67.5" y2="50" strokeWidth="5"></line>
          <line x1="50" y1="32.5" x2="50" y2="67.5" strokeWidth="5"></line>
        </svg>
        <span>New Location</span>
      </a>
    </Link>
  );
}
