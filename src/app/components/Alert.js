import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Alert({ text }) {
  return (
    <div className="flex flex-row items-end justify-center rounded-2xl bg-red-200 text-red-500 p-4">
      <FontAwesomeIcon icon={faTriangleExclamation} className="mr-2 text-xl" />
      <p className="text-sm text-center">{text}</p>
    </div>
  );
}
