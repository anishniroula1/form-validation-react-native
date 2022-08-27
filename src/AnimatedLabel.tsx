import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, Text } from 'react-native';
import { Question } from './type';

interface Props {
  question: Question | any;
  labelStyle: any;
}
export default function AnimatedLabel({ question, labelStyle }: Props) {
  const { showTopLabel = true } = question;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (!!question?.value) {
      Animated.timing(fadeAnim, {
        useNativeDriver: true,
        toValue: 1,
        duration: 500,
      }).start();
    } else {
      Animated.timing(fadeAnim, {
        useNativeDriver: true,
        toValue: 0,
        duration: 500,
      }).start();
    }
  }, [question?.value]);
  return (
    <>
      {showTopLabel && (
        <Animated.View style={{ opacity: fadeAnim }}>
          <Text style={labelStyle ? labelStyle : styles.labelStyle}>
            {!!question?.value && question?.label}
          </Text>
        </Animated.View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  labelStyle: {
    color: '#9f9b9b',
    fontSize: 15,
    marginLeft: 20,
    marginBottom: -10,
  },
});
