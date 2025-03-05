import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import {COLORS} from '../theme/Theme';

interface TextInputProps {
  placeHolder: string;
  secureTextEntry?: boolean;
  boxstyle: any;
  textinputstyle: any;
  keyboardtype ?: any;
}
const TextInputCard = ({
  placeHolder,
  boxstyle,
  textinputstyle,
  secureTextEntry,
  keyboardtype,
}: TextInputProps) => {
  return (
    <View style={[boxstyle, styles.box]}>
      <TextInput
        placeholder={placeHolder}
        placeholderTextColor={'#27272780'}
        style={textinputstyle}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardtype}
      />
    </View>
  );
};

export default TextInputCard;

const styles = StyleSheet.create({
  box: {
    backgroundColor: COLORS.grayies,
    borderRadius: 10,
    height: 56,
  },
});
