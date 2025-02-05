import PropTypes from "prop-types";
import styles from "./Description.module.css";

const Description = ({ title, subtitle }) => {
  return (
    <div className={styles.description}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.subtitle}>{subtitle}</p>
    </div>
  );
};

Description.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default Description;
