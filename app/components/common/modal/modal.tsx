import styles from "./modal.module.css";
import { AiOutlineClose } from "react-icons/ai";

interface ModalProps {
  children: React.ReactNode;
  onClose: (modalState: boolean) => void;
}
export default function Modal({ children, onClose }: ModalProps) {
  return (
    <div
      className={`fixed top-0 bottom-0 right-0 left-0 modal ${styles.overlay} z-10 flex justify-center items-center`}
    >
      <div className="relative">
        <AiOutlineClose
          className={`absolute ${styles.closeBtn} cursor-pointer`}
          onClick={() => onClose(false)}
        />
        {children}
      </div>
    </div>
  );
}
