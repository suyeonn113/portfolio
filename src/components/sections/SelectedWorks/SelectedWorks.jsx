import AirSeoulWork from "./work-items/AirSeoulWork";
import DaisomallWork from "./work-items/DaisomallWork";
import FragfarmWork from "./work-items/FragfarmWork";
import YouthCenterWork from "./work-items/YouthCenterWork";
import styles from "./SelectedWorks.module.scss";

export default function SelectedWorks() {
  return (
    <section className={styles.section} id="work" aria-labelledby="work-title">
      <header className={styles.heading}>
        <div>
          <h2 id="work-title">Projects</h2>
          <p>(2025–2026)</p>
        </div>
        <span>Four projects</span>
      </header>

      <DaisomallWork />
      <AirSeoulWork />
      <YouthCenterWork />
      <FragfarmWork />
    </section>
  );
}
