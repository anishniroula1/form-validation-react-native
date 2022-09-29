import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { Question } from './type';

interface Props {
  question: Question;
  onChange: any;
  onBlur?: any;
  messageOnEmpty?: string;
  containerStyle?: any;
  labelStyle?: any;
  listContainerStyle?: any;
  itemTitle?: any;
  disabled?: boolean;
  selectedItemBackground?: any
}
const PickerQuestion = ({
  question,
  onChange,
  onBlur,
  messageOnEmpty,
  containerStyle,
  labelStyle,
  itemTitle,
  listContainerStyle,
  disabled = false,
  selectedItemBackground
}: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  useEffect(() => {
    if (!question.value) {
      setSelectedIndex(-1);
      return;
    }
    const questionValue = Array.isArray(question?.value)
      ? question?.value[0]?.label || question.value[0]
      : question.value;
    const defaultIndex =
      question?.data?.findIndex((listItem: any) => listItem === questionValue) ?? -1;
    if (defaultIndex > -1) {
      setSelectedIndex(defaultIndex);
    }
  }, [question?.data]);

  const onItemPress = (item: any, index: number) => {
    setSelectedIndex(index);
    onChange({ [question.key]: item });
  };

  return (
    <View style={containerStyle ?? styles.container}>
      {question?.label && <Text style={labelStyle ?? styles.label}>{question.label}</Text>}
      <View>
        {question?.data?.length === 0 || !question?.data ? (
          <Text style={styles.message}>{messageOnEmpty ? messageOnEmpty : ''}</Text>
        ) : (
          <View style={[listContainerStyle, styles.listContainer]}>
            {question?.data?.map((res, index) => {
              const isSelected = index === selectedIndex;
              return (
                <TouchableOpacity
                  disabled={disabled}
                  key={index}
                  style={[
                    styles.responseLabel,
                    styles.itemContainer,
                    isSelected && (selectedItemBackground ?? styles.selectedItemBackground),
                  ]}
                  onPress={() => onItemPress(res.value ?? res, index)}>
                  <Text
                    style={[itemTitle, styles.itemTitle, isSelected && styles.selectedItemTitle]}>
                    {res.label ?? res}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        )}
      </View>
      {!!question.error && (
        <View style={styles.errorContainer}>
          <Image style={styles.warning} source={require('../assets/warning.png')} />
          <Text style={styles.error}>
            {question?.error?.message ?? question?.error?.title ?? question.error}
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    margin: 12,
    paddingBottom: 0,
    padding: 10,
  },
  label: {
    fontWeight: '600',
    paddingBottom: 8,
    fontSize: 16,
  },
  listContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
  },

  responseLabel: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
    backgroundColor: '#fcf4f4',
    marginTop: 10,
    marginRight: 10,
  },
  itemContainer: {
    padding: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
  selectedItemBackground: {
    backgroundColor: '#c84648',
  },
  selectedItemTitle: {
    color: '#fff',
  },
  itemTitle: {
    fontWeight: '600',
  },
  value: {
    marginTop: 10,
    fontSize: 18,
  },
  message: {
    marginTop: 5,
    marginRight: 5,
    fontWeight: '600',
    fontSize: 16,
    color: '#c84648',
  },
  errorContainer: {
    marginTop: 10,
    flexDirection: 'row',
  },
  warning: {
    height: 15,
    width: 15,
    marginTop: 2.3,
  },
  error: {
    color: '#f90201',
    paddingLeft: 5,
    fontSize: 15,
  },
});

export default PickerQuestion;
