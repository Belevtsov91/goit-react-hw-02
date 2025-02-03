import { useState, useEffect } from "react";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";
import Notification from "./components/Notification/Notification";
import styles from "./App.module.css";

const App = () => {

  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = localStorage.getItem("feedback");
    return savedFeedback ? JSON.parse(savedFeedback) : { good: 0, neutral: 0, bad: 0 };
  });


  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);


  const updateFeedback = (feedbackType) => {
    setFeedback(prev => ({
      ...prev,
      [feedbackType]: prev[feedbackType] + 1, // Увеличиваем выбранный отзыв
    }));
  };


  const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
    localStorage.removeItem("feedback"); // Очистка localStorage
  };


  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  

  const positivePercentage = totalFeedback ? Math.round((feedback.good / totalFeedback) * 100) : 0;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Sip Happens Café</h1>
      <p className={styles.subtitle}>
        Please leave your feedback about our service by selecting one of the options below.
      </p>

      {/* Кнопки отзывов + кнопка Reset */}
      <Options 
        options={Object.keys(feedback)} 
        updateFeedback={updateFeedback} 
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback} 
      />

      {/* Условный рендеринг: если есть отзывы → Feedback, если нет → Notification */}
      {totalFeedback > 0 ? (
        <Feedback 
          good={feedback.good} 
          neutral={feedback.neutral} 
          bad={feedback.bad} 
          total={totalFeedback}
          positivePercentage={positivePercentage}
        />
      ) : (
        <Notification message="No feedback yet" />
      )}
    </div>
  );
};

export default App;
