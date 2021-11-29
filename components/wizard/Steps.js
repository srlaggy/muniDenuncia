import React, { useContext, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import StepHeader from './components/stepbar/StepHeader';
import StepsContext from './context/stepsContext';

const Steps = ({ routes, num }) => {
  const stepsContext = useContext(StepsContext);
  const { setSteps, setCurrentStep } = stepsContext;
  useEffect(() => {
    setSteps([...routes]);
    setCurrentStep(num);
  }, []);

  return (
    <View style={styles.container}>
      <StepHeader />
      {/* <StepContent /> */}
      {/* <StepFooter /> */}
    </View>
  );
};

export default Steps;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    // borderWidth: 2,
    // borderColor: "blue"
  },
});