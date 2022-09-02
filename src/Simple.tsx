import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface Props {
  selectedValues?: any;
  item?: any;
  onPress?: any;
  items?: any;
  search?: any;
  index?: any;
  labelStyle?: any;
  canCreate?: boolean;
}
const Simple = ({
  selectedValues = [],
  item,
  onPress,
  items,
  search,
  index,
  labelStyle,
  canCreate,
}: Props) => {
  return (
    <View key={index}>
      {!!items && items?.length > 0 ? (
        <TouchableOpacity style={styles.container} onPress={onPress}>
          <Text style={[labelStyle, styles.label]}>{item?.label}</Text>
          {Array.isArray(selectedValues) &&
            selectedValues?.some((value: any) => value.value === item?.value) && (
              <Text style={styles.checkMark}>√</Text>
            )}
        </TouchableOpacity>
      ) : (
          <>
            {canCreate && (<TouchableOpacity style={styles.container} onPress={onPress}>
              <Text style={[labelStyle, styles.label]}>{search}</Text>
            </TouchableOpacity>)}
          </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    paddingBottom: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#D7C7C7FF',
  },
  label: {
    fontSize: 15,
  },
  checkMark: {
    fontWeight: 'bold',
    color: '#0e9de3',
  },
});

export default Simple;
