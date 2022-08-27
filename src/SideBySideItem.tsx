import React from 'react';
import { StyleSheet, View } from 'react-native';
interface Props {
  firstItem: any;
  secondItem?: any;
  flex1?: number;
  flex2?: number;
  thirdItem?: any;
  flex3?: number;
  fourthItem?: any;
  flex4?: number;
  fifthItem?: any;
  flex5?: number;
  container?: any;
}

const SideBySideItem = ({
  firstItem,
  secondItem,
  flex1,
  flex2,
  thirdItem,
  flex3,
  fourthItem,
  flex4,
  fifthItem,
  flex5,
  container,
}: Props) => {
  return (
    <View style={container ? [styles.sideBySide, container] : styles.sideBySide}>
      <View style={{ flex: flex1 ?? 1 }}>{firstItem}</View>
      <View style={{ flex: flex2 ?? 1 }}>{secondItem}</View>
      {thirdItem && <View style={{ flex: flex3 ?? 1 }}>{thirdItem}</View>}
      {fourthItem && <View style={{ flex: flex4 ?? 1 }}>{fourthItem}</View>}
      {fifthItem && <View style={{ flex: flex5 ?? 1 }}>{fifthItem}</View>}
    </View>
  );
};

const styles = StyleSheet.create({
  sideBySide: {
    flexDirection: 'row',
  },
  boxInside: {
    flex: 1,
  },
});

export default SideBySideItem;
