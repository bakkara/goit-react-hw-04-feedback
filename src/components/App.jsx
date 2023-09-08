import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Layout } from "./Layout";
import { Notification } from "./Notification/Notification";
import { Section } from "./Section/Section";
import { Statistics } from "./Statistics/Statistics";
import { useState } from 'react';

export const App = () => {
  const [options, setOptions] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const onLeaveFeedback = (option) => {
    setOptions((prevState) => ({
      ...prevState,
      [option]: prevState[option] + 1,
    }));
  };

  const { good, neutral, bad } = options;
  const optionKeys = Object.keys(options);

  const countTotalFeedback =  good + neutral + bad;

  const countPositiveFeedbackPercentage = countTotalFeedback ? Math.round((good / countTotalFeedback) * 100) : 0;
  
  
    
    return (
          <Layout>
            <Section title="Please leave feedback">
              <FeedbackOptions options={optionKeys} onLeaveFeedback={onLeaveFeedback} />
            </Section>

            <Section title="Statistics">
              {countTotalFeedback ?
                <Statistics good={good} neutral={neutral} bad={bad} total={countTotalFeedback} positivePercentage={countPositiveFeedbackPercentage} />
                :
                <Notification message="There is no feedback" />
                
              }
            </Section>
     </Layout>
    ); 
  }

