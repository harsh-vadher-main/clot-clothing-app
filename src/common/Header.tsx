import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SvgXml} from 'react-native-svg';
import {COLORS, FONTFAMILY, FONTSIZE} from '../theme/Theme';

type HeaderProps = {
  leftIcon?: any;
  midText: string;
  rightIcon?: any;
};
const Header = ({leftIcon, midText, rightIcon}: HeaderProps) => {
  return (
    <View style={styles.container}>
      <SvgXml xml={leftIcon} style={styles.leftIcon} />
      <Text style={styles.midText}>{midText}</Text>
      <SvgXml xml={rightIcon} style={styles.rightIcon} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    marginTop: 63,
    marginHorizontal: 24,
    justifyContent: 'space-between',
  },
  leftIcon: {},
  rightIcon: {},
  midText: {
    fontFamily: FONTFAMILY.Montserrat_Regular,
    fontSize: FONTSIZE.size_16,
    color: COLORS.black,
  },
});
