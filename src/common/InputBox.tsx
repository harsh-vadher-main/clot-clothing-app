import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

type inputProps = {
  placeHolder: string;
  onchangetext: any;
  contentStyle: any;
};
const InputBox = ({placeHolder, onchangetext, contentStyle}: inputProps) => {
  return (
    <View>
      <TextInput
        placeholder={placeHolder}
        onChangeText={onchangetext}
        style={contentStyle ? '' : styles.inputBox}
      />
    </View>
  );
};

export default InputBox;

const styles = StyleSheet.create({
    inputBox : {
        backgroundColor : 'f4f4f4',
        
    }
});
