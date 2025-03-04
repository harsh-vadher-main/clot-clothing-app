import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {SvgXml} from 'react-native-svg';
import {icons} from '../../utils/icons';
import {COLORS, FONTFAMILY, FONTSIZE} from '../../theme/Theme';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../navigation/AppNavigator';

interface HoodieProps {
  navigation: NativeStackNavigationProp<RootStackParams, 'hoodies'>;
}
const hoodieData = [
  {
    id: 1,
    image: require('D:/React-native/Clot/src/assets/images/Hoodie1.png'),
    name: "Men's Fleece Pullover Hoodie",
    price: '$100.00',
  },
  {
    id: 2,
    image: require('D:/React-native/Clot/src/assets/images/Hoodie2.png'),
    name: 'Fleece Pullover Skate Hoodie',
    price: '$150.97',
  },
  {
    id: 3,
    image: require('D:/React-native/Clot/src/assets/images/Hoodie3.png'),
    name: 'Fleece Skate Hoodie',
    price: '$110.00',
  },
  {
    id: 4,
    image: require('D:/React-native/Clot/src/assets/images/Hoodie4.png'),
    name: "Men's Fleece Pullover Hoodie",
    price: '$128.97',
  },
  {
    id: 5,
    image: require('D:/React-native/Clot/src/assets/images/Hoodie5.png'),
    name: "Men's Fleece Hoodie ",
    price: '$100.90',
  },
  {
    id: 6,
    image: require('D:/React-native/Clot/src/assets/images/Hoodie6.png'),
    name: "Men's Pullover Hoodie",
    price: '$90.00',
  },
];

const Hoodie = ({navigation}: HoodieProps) => {
  const [favourites, setFavourites] = useState<number[]>([]);

  const handleFavourites = (id: number) => {
    if (favourites.includes(id)) {
      setFavourites(favourites.filter(favId => favId !== id));
    } else {
      setFavourites([...favourites, id]);
    }
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      {/* <ScrollView> */}
      {/* <View style={{flex: 1, backgroundColor: '#fff'}}> */}
      <View style={styles.svgIconBack}>
        <SvgXml xml={icons().back} onPress={() => navigation.goBack()} />
      </View>
      <View style={styles.hoodieViewMain}>
        <Text style={styles.hoodieText}>Hoodies</Text>
        <Text style={styles.hoodieTotal}>(240)</Text>
      </View>

      <FlatList
        data={hoodieData}
        numColumns={2}
        keyExtractor={item => String(item.id)}
        columnWrapperStyle={styles.columnWrapper}
        renderItem={({item}) => {
          return (
            <View style={styles.mainInsiderView}>
              <View style={styles.favouriteIcon}>
                <TouchableOpacity onPress={() => handleFavourites(item.id)}>
                  <SvgXml
                    xml={
                      favourites.includes(item.id)
                        ? icons().filledheart
                        : icons().blankheart
                    }
                  />
                </TouchableOpacity>
              </View>
              <TouchableOpacity>
                <Image source={item.image} style={styles.image} />
              </TouchableOpacity>
              <View style={styles.itemNameView}>
                <Text numberOfLines={1} style={styles.itemNameText}>
                  {item.name}
                </Text>
                <Text style={styles.itemPriceText}>{item.price}</Text>
              </View>
            </View>
          );
        }}
      />
      {/* </View> */}
      {/* </ScrollView> */}
    </SafeAreaView>
  );
};

export default Hoodie;

const styles = StyleSheet.create({
  svgIconBack: {
    marginTop: 63,
    marginLeft: 27,
  },
  hoodieViewMain: {
    flexDirection: 'row',
    marginLeft: 24,
    marginTop: 16,
    marginBottom: 23,
    alignItems: 'center',
  },
  hoodieText: {
    fontSize: FONTSIZE.size_16,
    fontFamily: FONTFAMILY.Montserrat_Bold,
  },
  hoodieTotal: {
    fontSize: FONTSIZE.size_16,
    fontFamily: FONTFAMILY.Montserrat_Bold,
    marginLeft: 8,
  },
  columnWrapper: {
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  mainInsiderView: {
    backgroundColor: COLORS.grayies,
    borderRadius: 8,
    marginHorizontal: 15, /////////////////////////////////////////////////////////////////
    flex: 1,
    overflow: 'hidden',
  },
  favouriteIcon: {
    position: 'absolute',
    right: 10,
    top: 5,
    zIndex: 1,
  },
  image: {
    height: 220,
    width: '100%',
    resizeMode: 'cover',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  itemNameView: {
    padding: 10,
  },
  itemNameText: {
    fontSize: FONTSIZE.size_14,
    fontFamily: FONTFAMILY.Montserrat_Medium,
    color: COLORS.black,
    marginBottom: 4,
  },
  itemPriceText: {
    fontSize: FONTSIZE.size_14,
    fontFamily: FONTFAMILY.Montserrat_Bold,
    color: COLORS.black,
  },
});
