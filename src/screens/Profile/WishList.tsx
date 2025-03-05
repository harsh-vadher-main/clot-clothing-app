import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../navigation/AppNavigator';
import {SafeAreaView} from 'react-native-safe-area-context';
import {icons} from '../../utils/icons';
import {SvgXml} from 'react-native-svg';
import {COLORS, FONTFAMILY, FONTSIZE} from '../../theme/Theme';

interface WishListProps {
  navigation: NativeStackNavigationProp<RootStackParams, 'wishlist'>;
}
const WishList = ({navigation}: WishListProps) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <ScrollView>
        <View
          style={{marginTop: 63, marginHorizontal: 27, flexDirection: 'row'}}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <SvgXml xml={icons().back} />
          </TouchableOpacity>
          <View style={{marginTop: 11}}>
            <Text style={styles.addressText}>Wishlist</Text>
          </View>
        </View>

        <View style={styles.itemMain}>
          <View style={styles.itemView}>
            <SvgXml xml={icons().blankheartbig} style={styles.heartIcon} />
            <View style={styles.MainText}>
              <Text style={styles.boldText}>My Favourite </Text>
              <Text style={styles.productCount}>12 Products</Text>
            </View>
            <SvgXml xml={icons().next} style={styles.nextIcon} />
          </View>
          <View style={styles.itemView1}>
            <SvgXml xml={icons().blankheartbig} style={styles.heartIcon} />
            <View style={styles.MainText}>
              <Text style={styles.boldText}>T-Shirts</Text>
              <Text style={styles.productCount}>4 Products</Text>
            </View>
            <SvgXml xml={icons().next} style={styles.nextIcon} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default WishList;

const styles = StyleSheet.create({
  addressText: {
    fontSize: FONTSIZE.size_14,
    fontFamily: FONTFAMILY.Montserrat_ExtraBold,
    marginHorizontal: 97,
  },
  itemMain: {
    marginTop: 32,
  },
  itemView: {
    flexDirection: 'row',
    backgroundColor: COLORS.grayies,
    height: 72,
    width: '88%',
    borderRadius: 10,
    marginHorizontal: 24,
    // justifyContent: 'space-between',
  },
  heartIcon: {
    marginVertical: 24,
    marginLeft: 20,
  },
  MainText: {
    marginHorizontal: 20,
    marginTop: 16,
  },
  boldText: {
    fontFamily: FONTFAMILY.Montserrat_Bold,
    fontSize: FONTSIZE.size_16,
  },
  productCount: {
    fontSize: FONTSIZE.size_12,
    fontFamily: FONTFAMILY.Montserrat_Regular,
    color: '#27272790',
  },
  nextIcon: {
    position: 'absolute',
    right: 8,
    marginVertical: 24,
  },
  itemView1: {
    flexDirection: 'row',
    backgroundColor: COLORS.grayies,
    height: 72,
    width: '88%',
    borderRadius: 10,
    marginHorizontal: 24,
    marginTop: 8,
  },
});
