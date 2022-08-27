import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
  Platform,
  Keyboard,
} from 'react-native';
import Simple from './Simple';
import { generateRandomString } from './AlertMessage';
import { Question } from './type';
import AnimatedLabel from './AnimatedLabel';

interface Props {
  question: Question;
  onBlur: any;
  onChange: any;
  boxHeight?: number;
  defaultValue?: any;
  singleChoice?: boolean;
  editable?: boolean;
  labelStyle?: any;
  inputStyle?: any;
  topLabelStyle?: any;
}
const SearchableDropdown = ({
  question,
  onBlur,
  onChange,
  boxHeight,
  defaultValue,
  singleChoice = false,
  editable = true,
  labelStyle,
  inputStyle,
  topLabelStyle,
}: Props) => {
  let questionValue = question?.value ?? [];
  const [search, setSearch] = useState('');
  const [isDisplayingOptions, setIsDisplayingOptions] = useState(false);
  const [changeColor, setChangeColor] = useState(false);

  useEffect(() => {
    if (defaultValue) {
      setSearch(defaultValue);
    }
  }, [defaultValue]);

  const [savedItems, setSavedItems] = useState(question?.data ?? []);
  const [items, setItems] = useState(question?.data ?? []);

  const removeItem = (itemToRemove: any) => {
    const index = questionValue?.findIndex((value: any) => value.value === itemToRemove?.value);
    const data = [...questionValue];
    data.splice(index, 1);
    onChange({ [question.key]: data });
  };

  const handleOnFocus = () => {
    setChangeColor(true);
    setIsDisplayingOptions(true);
  };

  const handleOnBlur = (event: any) => {
    setChangeColor(false);
    return onBlur && onBlur(event);
  };

  const onChangeText = (value: any) => {
    setIsDisplayingOptions(true);
    setSearch(value);
    if (value.length === 0) {
      setItems(savedItems);
    } else {
      let data: Array<any> = [];
      savedItems?.forEach((item: any) => {
        if (item.value.toLowerCase().includes(value.toLowerCase())) {
          data.push(item);
        }
      });
      setItems(data);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <AnimatedLabel
        question={{ value: search || questionValue, label: question?.label }}
        labelStyle={topLabelStyle ?? styles.labelStyle}
      />
      <TouchableOpacity
        onPress={() => setIsDisplayingOptions((newbol) => !newbol)}
        style={
          !!question.error
            ? styles.inputWrapperOnError
            : changeColor || isDisplayingOptions
            ? styles.inputWrapperOnFocus
            : styles.inputWrapper
        }>
        <View style={{ flex: 1 }}>
          <TextInput
            clearButtonMode={question.clearButtonMode ?? 'always'}
            style={[inputStyle, styles.inputContainer]}
            placeholder={
              singleChoice
                ? questionValue[0]?.label ?? question.placeholder ?? question.label ?? ''
                : question.placeholder ?? question.label ?? ''
            }
            placeholderTextColor={
              singleChoice ? '#9f9b9b' : question.placeholderTextColor ?? '#9f9b9b'
            }
            underlineColorAndroid={question.underlineColorAndroid ?? 'transparent'}
            value={search}
            onFocus={() => handleOnFocus()}
            onBlur={() => {
              handleOnBlur(question.key);
              // setIsDisplayingOptions(false);
            }}
            onChangeText={(value) => onChangeText(value)}
            editable={editable}
          />
        </View>
        <View style={{ flex: 0 }}>
          {!isDisplayingOptions ? (
            <TouchableWithoutFeedback onPress={() => setIsDisplayingOptions(true)}>
              <Image
                style={
                  !!question.error
                    ? styles.imageOnError
                    : changeColor || isDisplayingOptions
                    ? styles.imageOnFocus
                    : styles.image
                }
                source={require('../assets/down.png')}
              />
            </TouchableWithoutFeedback>
          ) : (
            <TouchableWithoutFeedback
              onPress={() => {
                setIsDisplayingOptions(false);
                Keyboard.dismiss();
              }}>
              <Image
                style={
                  !!question.error
                    ? styles.imageOnError
                    : changeColor || isDisplayingOptions
                    ? styles.imageOnFocus
                    : styles.image
                }
                source={require('../assets/up.png')}
              />
            </TouchableWithoutFeedback>
          )}
        </View>
      </TouchableOpacity>
      {isDisplayingOptions &&
        (items?.length > 0 ? (
          <ScrollView nestedScrollEnabled={true} style={{ height: boxHeight ?? 200 }}>
            {items?.map((item: any, index: number) => {
              return (
                <Simple
                  labelStyle={labelStyle}
                  key={index}
                  items={items}
                  search={search}
                  item={item}
                  selectedValues={questionValue}
                  onPress={() => {
                    if (!questionValue?.some((value: any) => value.value === item.value))
                      if (singleChoice) {
                        onChange({ [question.key]: [item] });
                        setSearch(item.label);
                        setIsDisplayingOptions(false);
                      } else {
                        onChange({ [question.key]: [...questionValue, item] });
                      }
                    else {
                      removeItem(item);
                    }
                  }}
                />
              );
            })}
          </ScrollView>
        ) : (
          <ScrollView nestedScrollEnabled={true} style={{ height: 40 }}>
            {!singleChoice && (
              <Simple
                labelStyle={labelStyle}
                search={search}
                onPress={() => {
                  setSavedItems([...savedItems, { label: search, value: search }]);
                  setItems([...items, { label: search, value: search }]);
                  onChange({
                    [question.key]: [
                      ...questionValue,
                      {
                        label: search,
                        value: search,
                        id: generateRandomString(6),
                      },
                    ],
                  });
                }}
              />
            )}
          </ScrollView>
        ))}
      <View style={styles.choice}>
        {!singleChoice &&
          questionValue?.map((value: any, key: number) => {
            return (
              <TouchableOpacity
                key={key}
                style={styles.selectionWrapper}
                onPress={() => removeItem(value)}>
                <Text style={styles.scheduleItemTitle}>{value.value}</Text>
                <Text style={styles.insideText}>X</Text>
              </TouchableOpacity>
            );
          })}
      </View>
      {!!question.error && (
        <View style={styles.errorContainer}>
          <Image style={styles.warning} source={require('../assets/warning.png')} />
          <Text style={styles.error}>
            {question?.error?.message ?? question?.error?.title ?? question?.error}
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: -5,
    margin: Platform.OS === 'ios' ? 12 : 2,
    marginBottom: 10,
    padding: 10,
    flexDirection: 'column',
  },
  labelStyle: {
    color: '#9f9b9b',
    fontSize: 15,
    marginLeft: 7,
  },
  inputWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: '#D7C7C7FF',
    borderBottomWidth: 1,
  },
  inputWrapperOnFocus: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: '#0e9de3',
    borderBottomWidth: 1,
  },
  inputWrapperOnError: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: '#f90201',
    borderBottomWidth: 1,
  },
  inputContainer: {
    height: 40,
    padding: 10,
    fontSize: 20,
  },
  choice: {
    flexDirection: 'row',
    marginTop: 15,
    maxWidth: '100%',
    flexWrap: 'wrap',
  },
  image: {
    height: 25,
    width: 25,
    tintColor: '#D7C7C7FF',
  },
  imageOnFocus: {
    height: 25,
    width: 25,
    tintColor: '#0e9de3',
  },
  imageOnError: {
    height: 25,
    width: 25,
    tintColor: '#f90201',
  },
  scheduleItemTitle: {
    fontSize: 16,
    padding: 5,
  },
  insideText: {
    color: 'white',
    fontSize: 16,
    padding: 5,
    borderRadius: 10,
    backgroundColor: '#c84648',
  },
  selectionWrapper: {
    flexDirection: 'row',
    backgroundColor: '#e3e7e7',
    borderRadius: 30,
    marginLeft: 12,
    marginBottom: 10,
  },
  errorContainer: {
    flexDirection: 'row',
    paddingLeft: 10,
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

export default SearchableDropdown;
