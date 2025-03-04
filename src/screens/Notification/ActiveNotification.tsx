import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import NavHeader from '../../common/NavHeader';
import {SvgXml} from 'react-native-svg';
import {icons} from '../../utils/icons';
import {COLORS, FONTFAMILY, FONTSIZE} from '../../theme/Theme';

const ActiveNotification = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <NavHeader midText="Notifications" />
      <View style={styles.container}>
        <TouchableOpacity>
          <View style={styles.activeView}>
            <View style={styles.svgicon}>
              <SvgXml xml={icons().activenotification} />
            </View>
            <View style={styles.textView}>
              <Text style={styles.notifiText}>
                Gilbert, you placed and order check your order history for full
                details
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.inactiveView}>
            <View style={styles.svgicon}>
              <SvgXml xml={icons().inactivenotificationicon} />
            </View>
            <View style={styles.textView}>
              <Text style={styles.notifiText}>
                Gilbert, Thank you for shopping with us we have canceled order
                #24568.
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.inactiveView}>
            <View style={styles.svgicon}>
              <SvgXml xml={icons().inactivenotificationicon} />
            </View>

            <View style={styles.textView}>
              <Text style={styles.notifiText}>
                Gilbert, your Order #24568 has been confirmed check your order
                history for full details
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ActiveNotification;

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    marginHorizontal: 24,
    width: '90%',
  },
  activeView: {
    flexDirection: 'row',
    backgroundColor: COLORS.grayies,
    borderRadius: 10,
    marginBottom: 10,
  },
  svgicon: {
    marginTop: 24,
    marginLeft: 20,
  },
  textView: {
    marginVertical: 17,
    width: '80%',
    marginLeft: 21,
  },
  notifiText: {
    fontSize: FONTSIZE.size_12,
    fontFamily: FONTFAMILY.Montserrat_Regular,
  },
  inactiveView: {
    flexDirection: 'row',
    backgroundColor: COLORS.grayies,
    borderRadius: 10,
    marginBottom: 10,
  },
});
