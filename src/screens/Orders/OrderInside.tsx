import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {FONTFAMILY, FONTSIZE, COLORS} from '../../theme/Theme';
import {SvgXml} from 'react-native-svg';
import {icons} from '../../utils/icons';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../navigation/AppNavigator';

interface OrderInsideProps {
  navigation: NativeStackNavigationProp<RootStackParams, 'orderInside'>;
}
const OrderInside = ({navigation}: OrderInsideProps) => {
  useEffect(() => {
    navigation.getParent()?.setOptions({tabBarStyle: {display: 'none'}});

    return () => {
      navigation.getParent()?.setOptions({tabBarStyle: {display: 'flex'}});
    };
  }, [navigation]);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={styles.mainView}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <SvgXml xml={icons().back} />
        </TouchableOpacity>
        <Text style={styles.orderText}>Order #456765</Text>
      </View>
      <View style={styles.detailsView}>
        <View style={styles.orderDoneIcon}>
          <SvgXml xml={icons().orderdone} />
        </View>
        <View style={styles.deliveryTextView}>
          <Text style={styles.deliveryText}>Delivered</Text>
        </View>
        <View style={styles.dateTextView}>
          <Text style={styles.dateText}>28 May</Text>
        </View>
      </View>
      <View style={styles.shippedView}>
        <View>
          <SvgXml xml={icons().orderdone} />
        </View>
        <View style={styles.shippedTextView}>
          <Text style={styles.deliveryText}>Shipped</Text>
        </View>
        <View>
          <Text style={styles.dateText}>28 May</Text>
        </View>
      </View>
      <View style={styles.shippedView}>
        <View>
          <SvgXml xml={icons().orderdone} />
        </View>
        <View style={styles.shippedTextView}>
          <Text style={styles.deliveryText}>Order Confirmed</Text>
        </View>
        <View>
          <Text style={styles.dateText}>28 May</Text>
        </View>
      </View>
      <View style={styles.orderPlacedView}>
        <View>
          <SvgXml xml={icons().orderdone} />
        </View>
        <View style={styles.shippedTextView}>
          <Text style={styles.deliveryText}>Order Placed</Text>
        </View>
        <View>
          <Text style={styles.dateText}>28 May</Text>
        </View>
      </View>
      <View style={styles.orderItemsView}>
        <Text style={styles.orderItemsText}>Order Items</Text>
      </View>
      <View style={styles.allOrderMainView}>
        <TouchableOpacity>
          <View style={styles.firstboxinside}>
            <View style={styles.iconOrder}>
              <SvgXml xml={icons().ordericons} />
            </View>
            <View style={styles.orderContent}>
              <Text style={styles.orderMainText}>4 Items</Text>
            </View>
            <View style={styles.nextIcon}>
              <Text style={styles.viewAllText}>View All</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.shippingView}>
        <Text style={styles.shippingMainText}>Shipping details</Text>
      </View>
      <View style={styles.addressView}>
        <View style={styles.mainTextView}>
          <Text style={styles.addressText}>
            2715 Ash Dr. San Jose, South Dakota 83475
          </Text>
          <Text style={styles.phoneText}>121-224-7890</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OrderInside;

const styles = StyleSheet.create({
  mainView: {
    top: 63,
    marginLeft: 27,
    flexDirection: 'row',
  },
  textView: {
    marginLeft: 69,
  },
  orderText: {
    textAlign: 'center',
    fontFamily: FONTFAMILY.Montserrat_ExtraBold,
    fontSize: FONTSIZE.size_16,
    marginLeft: 69,
    textAlignVertical: 'center',
  },
  detailsView: {
    marginTop: 42,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: 24,
    marginBottom: 51,
  },
  orderDoneIcon: {
    marginTop: 42,
  },
  deliveryTextView: {
    width: '70%',
    marginTop: 42,
  },
  dateTextView: {
    marginTop: 42,
  },
  deliveryText: {
    fontFamily: FONTFAMILY.Montserrat_Medium,
    fontSize: FONTSIZE.size_16,
  },
  dateText: {
    fontFamily: FONTFAMILY.Montserrat_Medium,
    fontSize: FONTSIZE.size_12,
  },
  shippedView: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: 24,
    marginBottom: 51,
  },
  shippedTextView: {
    width: '70%',
  },
  orderPlacedView: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: 24,
  },
  orderItemsView: {
    marginTop: 40,
    marginLeft: 24,
  },
  orderItemsText: {
    fontFamily: FONTFAMILY.Montserrat_Bold,
    fontSize: FONTSIZE.size_16,
  },
  firstboxinside: {
    flexDirection: 'row',
    backgroundColor: COLORS.grayies,
    borderRadius: 10,
    marginBottom: 12,
  },
  iconOrder: {
    marginVertical: 24,
    marginHorizontal: 20,
  },
  orderContent: {
    width: '60%',
    top: 25,
  },
  orderMainText: {
    fontFamily: FONTFAMILY.Montserrat_Medium,
    fontSize: FONTSIZE.size_16,
  },
  subText: {
    fontFamily: FONTFAMILY.Montserrat_Regular,
    fontSize: FONTSIZE.size_12,
    color: '#272727',
  },
  nextIcon: {
    marginVertical: 29,
  },
  viewAllText: {
    fontFamily: FONTFAMILY.Montserrat_Bold,
    fontSize: FONTSIZE.size_12,
    color: COLORS.purple,
  },
  allOrderMainView: {
    marginTop: 16,
    marginHorizontal: 24,
  },
  shippingView: {
    marginTop: 40,
    marginLeft: 24,
  },
  shippingMainText: {
    fontFamily: FONTFAMILY.Montserrat_Bold,
    fontSize: FONTSIZE.size_16,
  },
  addressView: {
    marginTop: 14,
    backgroundColor: COLORS.grayies,
    borderRadius: 8,
    marginBottom: 12,
    marginHorizontal: 24,
  },
  mainTextView: {
    marginLeft: 11,
    marginVertical: 11,
  },
  addressText: {
    fontSize: FONTSIZE.size_12,
    fontFamily: FONTFAMILY.Montserrat_Regular,
  },
  phoneText: {
    fontSize: FONTSIZE.size_12,
    fontFamily: FONTFAMILY.Montserrat_Regular,
    marginTop: 4,
  },
});
