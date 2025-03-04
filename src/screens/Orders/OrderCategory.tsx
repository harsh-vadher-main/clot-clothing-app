import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import NavHeader from '../../common/NavHeader';
import {SvgXml} from 'react-native-svg';
import {COLORS, FONTFAMILY, FONTSIZE} from '../../theme/Theme';
import {icons} from '../../utils/icons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParams } from '../../navigation/AppNavigator';

const Categories = ['Processing', 'Shipped', 'Delivered', 'Returned', 'Cancel'];

interface OrderCategoryProps {
  navigation : NativeStackNavigationProp<RootStackParams,'orderCategory'>
}

const OrderCategory = ({navigation} : OrderCategoryProps) => {
  const [category, setCategories] = useState<string>('');

  const handleCategory = (category: string) => {
    setCategories(category);
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <NavHeader midText="Orders" />
      <View style={styles.mainView}>
        <FlatList
          data={Categories}
          keyExtractor={item => item}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => {
            return (
              <View style={styles.innerView}>
                <TouchableOpacity
                  style={[
                    styles.CategoryBtn,
                    category === item && styles.selectedCategoryBtn,
                  ]}
                  onPress={() => handleCategory(item)}>
                  <Text
                    style={[
                      styles.CategoryText,
                      category === item && styles.selectedCategoryTextMain,
                    ]}>
                    {item}
                  </Text>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </View>
      <View style={styles.orderboxmain}>
        <TouchableOpacity onPress={() => navigation.navigate('orderInside')}>
          <View style={styles.firstboxinside}>
            <View style={styles.iconOrder}>
              <SvgXml xml={icons().ordericons} />
            </View>
            <View style={styles.orderContent}>
              <Text style={styles.orderMainText}>Order #456765</Text>
              <Text style={styles.subText}>4 items</Text>
            </View>
            <View style={styles.nextIcon}>
              <SvgXml xml={icons().next} />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.firstboxinside}>
            <View style={styles.iconOrder}>
              <SvgXml xml={icons().ordericons} />
            </View>
            <View style={styles.orderContent}>
              <Text style={styles.orderMainText}>Order #454569</Text>
              <Text style={styles.subText}>2 items</Text>
            </View>
            <View style={styles.nextIcon}>
              <SvgXml xml={icons().next} />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.firstboxinside}>
            <View style={styles.iconOrder}>
              <SvgXml xml={icons().ordericons} />
            </View>
            <View style={styles.orderContent}>
              <Text style={styles.orderMainText}>Order #454809</Text>
              <Text style={styles.subText}>1 item</Text>
            </View>
            <View style={styles.nextIcon}>
              <SvgXml xml={icons().next} />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default OrderCategory;

const styles = StyleSheet.create({
  mainView: {
    marginTop: 40,
    marginHorizontal: 27,
  },
  innerView: {
    marginRight: 13,
  },
  CategoryBtn: {
    backgroundColor: COLORS.grayies,
    justifyContent: 'space-between',
    borderRadius: 20,
  },
  selectedCategoryBtn: {
    backgroundColor: COLORS.purple,
  },
  CategoryText: {
    color: COLORS.black,
    fontFamily: FONTFAMILY.Montserrat_Regular,
    marginHorizontal: 8,
    marginVertical: 4,
  },
  selectedCategoryTextMain: {
    color: COLORS.white,
  },
  orderboxmain: {
    marginTop: 24,
    marginHorizontal: 24,
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
  nextIcon: {
    justifyContent: 'flex-end',
    marginLeft: 67,
    marginVertical: 24,
  },
  orderContent: {
    width: '50%',
    marginVertical: 16,
  },
  orderMainText: {
    fontFamily: FONTFAMILY.Montserrat_Bold,
    fontSize: FONTSIZE.size_16,
  },
  subText: {
      fontFamily: FONTFAMILY.Montserrat_Regular,
      fontSize: FONTSIZE.size_12,
      color: '#272727',
  },
});
