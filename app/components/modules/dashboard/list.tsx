import styles from "./dashboard.module.css";
import ListItem from "./list-item";

export default function List() {
  return (
    <div
      className={`px-[80px] flex flex-col gap-[20px] rounded-[10px] mt-[10px] ${styles.listContainer} py-[20px]`}
    >
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
    </div>
  );
}
