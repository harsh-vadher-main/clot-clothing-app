import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS, FONTFAMILY, FONTSIZE} from '../theme/Theme';
import {SvgXml} from 'react-native-svg';

interface GrayBoxProps {
  text?: string;
  icon1?: any;
  iconstyle?: any;
  nexticon?: any;
  textEdit?: string;
  nextIconStyle: any;
}
const GrayBox = ({
  text,
  icon1,
  iconstyle,
  nexticon,
  textEdit,
  nextIconStyle,
}: GrayBoxProps) => {
  return (
    <View style={styles.mainViewBox1}>
      <Text style={styles.addressTextMain}>{text}</Text>
      <SvgXml xml={icon1} style={iconstyle} />
      <TouchableOpacity>
        <Text style={styles.editButton}>{textEdit}</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <SvgXml xml={nexticon} style={nextIconStyle} />
      </TouchableOpacity>
    </View>
  );
};

export default GrayBox;

const styles = StyleSheet.create({
  mainViewBox1: {
    marginTop: 12,
    backgroundColor: COLORS.grayies,
    height: 72,
    width: '90%',
    marginHorizontal: 24,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  addressTextMain: {
    marginTop: 28,
    marginLeft: 17,
    fontFamily: FONTFAMILY.Montserrat_Regular,
    fontSize: FONTSIZE.size_14,
  },
  editButton: {
    marginVertical: 29,
    marginRight: 29,
    fontSize: FONTSIZE.size_12,
    fontFamily: FONTFAMILY.Montserrat_Bold,
  },
});
