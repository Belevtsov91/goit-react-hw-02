import PropTypes from "prop-types"; 
import styles from "./Options.module.css";

const Options = ({ options, updateFeedback, resetFeedback, totalFeedback }) => {
  return (
    <div className={styles.buttons}>
      {options.map(option => (
        <button
          key={option}
          className={styles.button}
          onClick={() => updateFeedback(option)}
        >
          {option}
        </button>
      ))}

      {totalFeedback > 0 && (
        <button className={styles.reset} onClick={resetFeedback}>
          Reset
        </button>
      )}
    </div>
  );
};


Options.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  updateFeedback: PropTypes.func.isRequired,
  resetFeedback: PropTypes.func.isRequired,
  totalFeedback: PropTypes.number.isRequired,
};

export default Options;
