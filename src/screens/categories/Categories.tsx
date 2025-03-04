import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {SvgXml} from 'react-native-svg';
import {icons} from '../../utils/icons';
import {COLORS, FONTFAMILY, FONTSIZE} from '../../theme/Theme';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../navigation/AppNavigator';

interface categoryProps {
  navigation: NativeStackNavigationProp<RootStackParams, 'categories'>;
}
const itemList = [
  {
    id: 1,
    image: require('D:/React-native/Clot/src/assets/images/category1.png'),
    name: 'Hoodies',
  },
  {
    id: 2,
    image: require('D:/React-native/Clot/src/assets/images/category2.png'),
    name: 'Shorts',
  },
  {
    id: 3,
    image: require('D:/React-native/Clot/src/assets/images/category3.png'),
    name: 'Shoes',
  },
  {
    id: 4,
    image: require('D:/React-native/Clot/src/assets/images/category4.png'),
    name: 'Bag',
  },
  {
    id: 5,
    image: require('D:/React-native/Clot/src/assets/images/category5.png'),
    name: 'Accesories',
  },
];

const Categories = ({navigation}: categoryProps) => {
  return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
      <View style={styles.backIcon}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <SvgXml xml={icons().back} />
        </TouchableOpacity>
      </View>
      <View style={styles.categoryTextView}>
        <Text style={styles.categoryText}>Shop by Categories</Text>
      </View>
      <View style={styles.categoryListView}>
        <FlatList
          data={itemList}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  if (item.name === 'Hoodies') {
                    navigation.navigate('hoodies');
                  }
                }}>
                <View style={styles.viewInsideList}>
                  <View style={styles.ImageView}>
                    <Image source={item.image} style={styles.image} />
                  </View>
                  <View style={styles.itemNameView}>
                    <Text style={styles.itemNameText}>{item.name}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  backIcon: {
    marginTop: 63,
    marginLeft: 27,
  },
  categoryTextView: {
    marginTop: 16,
    marginLeft: 24,
  },
  categoryText: {
    fontSize: FONTSIZE.size_24,
    fontFamily: FONTFAMILY.Montserrat_Bold,
  },
  categoryListView: {
    marginTop: 14,
    marginHorizontal: 24,
    marginVertical: 20,
  },
  viewInsideList: {
    flexDirection: 'row',
    marginVertical: 10,
    backgroundColor: COLORS.grayies,
    height: 64,
    borderRadius: 10,
  },
  ImageView: {
    marginHorizontal: 12,
    marginVertical: 12,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  itemNameView: {
    marginLeft: 16,
    marginTop: 22,
  },
  itemNameText: {
    fontSize: FONTSIZE.size_16,
    fontFamily: FONTFAMILY.Montserrat_Medium,
  },
});
