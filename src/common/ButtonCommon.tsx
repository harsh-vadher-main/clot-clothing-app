import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export type buttonProps = {
  name: string;
  textStyle: any;
  viewStyle: any;
};
const ButtonCommon = ({name, textStyle, viewStyle}: buttonProps) => {
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{name}</Text>
    </View>
  );
};

export default ButtonCommon;

const styles = StyleSheet.create({});
