import React, { useState } from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Notification from './Notification';

export function App() {
  const [options, setOptions] = useState({ good: 0, neutral: 0, bad: 0 });

  const handleFeedback = option => {
    setOptions(prevOptions => ({
      ...prevOptions,
      [option]: options[option] + 1,
    }));
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = options;
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    if (!countTotalFeedback()) {
      return 0;
    }
    return Math.round((options.good / countTotalFeedback()) * 100);
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(options)}
          onLeaveFeedback={handleFeedback}
        />{' '}
      </Section>

      <Section title="Statistics">
        {countTotalFeedback() ? (
          <Statistics
            good={options.good}
            neutral={options.neutral}
            bad={options.bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback"></Notification>
        )}
      </Section>
    </div>
  );
}
