import { TailSpin } from "react-loader-spinner";
import SpinnerStyles from "./spinner.module.css";

function Spinner() {
  return (
    <div className={SpinnerStyles.main}>
      <TailSpin
        color="white"
        width="96"
        visible={true}
      />
    </div>
  );
}

export default Spinner;
