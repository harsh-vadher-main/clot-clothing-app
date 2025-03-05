import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {FONTFAMILY, FONTSIZE} from '../theme/Theme';
import {SvgXml} from 'react-native-svg';
import {icons} from '../utils/icons';

type props = {
  backIcon?: any;
  midText: string;
  style?: string|number
  //   navigation : NativeStackNavigationProp<RootStackParams,'notification'>
};
const NavHeader = ({midText}: props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{midText}</Text>
    </View>
  );
};

export default NavHeader;

const styles = StyleSheet.create({
  container: {
    marginTop: 71,
  },

  text: {
    textAlign: 'center',
    fontFamily: FONTFAMILY.Montserrat_ExtraBold,
    fontSize: FONTSIZE.size_16,
    // marginLeft: 145,
    // marginRight: 153,
  },
});
