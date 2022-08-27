import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import SideBySideItem from './SideBySideItem';
import { Question } from './type';

interface Props {
  question: Question;
  onBlur: any;
  onChange: any;
  labelStyle?: any;
  radioTextStyle?: any;
  ref?: any;
  disabled?: boolean;
}
const SelectAllQuestion = ({
  question,
  onChange,
  onBlur,
  ref,
  labelStyle,
  radioTextStyle,
  disabled,
}: Props) => {
  const [products, setProducts] = useState(question?.data ?? []);
  const [isSelectAll, setSelectAll] = useState(false);

  const handleChange = (value: any) => {
    let temp = products.map((product) => {
      if (value === product.value) {
        return { ...product, isChecked: !product.isChecked };
      }
      return product;
    });
    question.value = temp;
    setProducts(question.value);
  };

  useEffect(() => {
    let selected = products.filter((product) => product.isChecked);
    onChange({ [question.key]: selected });
  }, [products]);

  useEffect(() => {
    let temp;
    if (!isSelectAll) {
      temp = products.map((product) => {
        return { ...product, isChecked: false };
      });
    } else {
      temp = products.map((product) => {
        return { ...product, isChecked: true };
      });
    }
    setProducts(temp);
  }, [isSelectAll]);

  useEffect(() => {
    let arrayFiltered: any;
    if (question.value?.length > 0) {
      arrayFiltered = question?.data?.filter((data) => {
        return question?.value?.some((val: any) => {
          if (data.value === val.value) {
            data.isChecked = true;
          }
          return data;
        });
      });
    }
    setProducts(question?.data ?? arrayFiltered);
  }, []);

  const handleSelectAllChange = () => {
    setSelectAll(!isSelectAll);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.selectAllSmallText}>{isSelectAll ? 'Unselect' : 'Select'} all</Text>
      <SideBySideItem
        firstItem={
          question?.label && <Text style={[labelStyle, styles.label]}>{question.label}</Text>
        }
        secondItem={
          <TouchableOpacity
            onBlur={() => onBlur(question.key)}
            style={isSelectAll ? styles.radioCircleOnFocusSelectAll : styles.radioCircleSelectAll}
            onPress={() => handleSelectAllChange()}>
            {isSelectAll && <Text style={styles.selectAllChecked}>√</Text>}
          </TouchableOpacity>
        }
        flex2={0}
      />
      {products.map((res, index) => {
        return (
          <TouchableOpacity
            disabled={disabled}
            onBlur={() => onBlur(question.key)}
            onPress={() => handleChange(res.value)}
            key={index}
            style={styles.dataContainer}>
            <Text style={[radioTextStyle, styles.radioText]}>{res.label}</Text>
            <View
              style={
                !!question.error
                  ? styles.radioCircleOnError
                  : res.isChecked
                  ? styles.radioCircleOnFocus
                  : styles.radioCircle
              }>
              {res.isChecked && <Text style={styles.checked}>√</Text>}
            </View>
          </TouchableOpacity>
        );
      })}
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
    marginTop: 12,
    marginRight: 12,
    marginLeft: 12,
    padding: 10,
  },
  selectAllSmallText: {
    textAlign: 'right',
    marginBottom: 10,
  },
  selectAll: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  selectAllChecked: {
    color: '#0e9de3',
    fontWeight: 'bold',
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    marginRight: 35,
    fontSize: 20,
    fontWeight: '500',
  },
  dataContainer: {
    marginBottom: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  radioText: {
    marginRight: 35,
    fontSize: 20,
    fontWeight: '500',
  },
  radioCircleSelectAll: {
    borderRadius: 7,
    height: 30,
    width: 30,
    borderWidth: 2,
    borderColor: '#696464',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  radioCircleOnFocusSelectAll: {
    borderRadius: 7,
    height: 30,
    width: 30,
    borderWidth: 2,
    borderColor: '#0e9de3',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  radioCircle: {
    borderRadius: 7,
    height: 30,
    width: 30,
    borderWidth: 2,
    borderColor: '#696464',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioCircleOnFocus: {
    borderRadius: 7,
    height: 30,
    width: 30,
    borderWidth: 2,
    borderColor: '#0e9de3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioCircleOnError: {
    borderRadius: 7,
    height: 30,
    width: 30,
    borderWidth: 2,
    borderColor: '#f90201',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checked: {
    color: '#0e9de3',
    fontWeight: 'bold',
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  result: {
    marginTop: 20,
    color: 'white',
    fontWeight: '600',
    backgroundColor: '#F3FBFE',
  },
  errorContainer: {
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

export default SelectAllQuestion;
