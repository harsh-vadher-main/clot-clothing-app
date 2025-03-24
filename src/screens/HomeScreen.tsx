import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Dimensions,
  FlatList,
  Pressable,
  ScrollView,
  Alert,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLORS, FONTFAMILY, FONTSIZE} from '../theme/Theme';
import {SvgXml} from 'react-native-svg';
import {icons} from '../utils/icons';
import RBSheet from 'react-native-raw-bottom-sheet';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../navigation/AppNavigator';
import {useDispatch, useSelector} from 'react-redux';
import {
  toggleWishlist,
} from '../redux/features/cartSlice';
import {RootState} from '../redux/store';

interface HomeScreenProps {
  navigation: NativeStackNavigationProp<RootStackParams, 'homescreen'>;
  item: Item;
}
type RBSheet = any;
const data = ['Men', 'Women', 'Kids'];
export interface Item {
  id: number;
  image: any;
  name: string;
  price: string;
}
const itemList = [
  {
    id: 1,
    image: require('../assets/images/category1.png'),
    name: 'Hoodies',
  },
  {
    id: 2,
    image: require('../assets/images/category2.png'),
    name: 'Shorts',
  },
  {
    id: 3,
    image: require('../assets/images/category3.png'),
    name: 'Shoes',
  },
  {
    id: 4,
    image: require('../assets/images/category4.png'),
    name: 'Bag',
  },
  {
    id: 5,
    image: require('../assets/images/category5.png'),
    name: 'Accesories',
  },
];

export const itemList2: Item[] = [
  {
    id: 11,
    image: require('../assets/images/mainlist1.png'),
    name: "Men's Harrington Jacket",
    price: '$148.00',
  },
  {
    id: 12,
    image: require('../assets/images/mainlist2.png'),
    name: "Max Cirro Men's Slides",
    price: '$55.00',
  },
  {
    id: 13,
    image: require('../assets/images/mainlist3.png'),
    name: "Men's Coaches Jacket",
    price: '$66.97',
  },
];

const nextData = [
  {
    id: 1,
    image: require('../assets/images/homebottom1.png'),
    name: "Men's Harrington Jacket",
    price: '$148.00',
  },
  {
    id: 2,
    image: require('../assets/images/homebottom2.png'),
    name: "Men's CottonJacket",
    price: '$55.00',
  },
  {
    id: 3,
    image: require('../assets/images/homebottom3.png'),
    name: "Men's Nike Trousers",
    price: '$66.97',
  },
];

const HomeScreen = ({navigation, item}: HomeScreenProps) => {
  const [favourites, setFavourites] = useState<number[]>([]);
  const [favouritesNext, setFavouritesNext] = useState<number[]>([]);
  const dispatch = useDispatch();

  const handleFavourites = (id: number): void => {
    if (favourites.includes(id)) {
      setFavourites(favourites.filter(favId => favId !== id));
    } else {
      setFavourites([...favourites, id]);
    }
  };
  const handleFavouritesNext = (id: number): void => {
    if (favouritesNext.includes(id)) {
      setFavouritesNext(favouritesNext.filter(favId => favId !== id));
    } else {
      setFavouritesNext([...favouritesNext, id]);
    }
  };
  const wishlistItems = useSelector((state: RootState) => state.wishlist.items);

  // const [itemList2Data, setItemList2Data] = useState(itemList2);
  // const [nextDataData, setNextDataData] = useState(nextData);
  // const handleFavourites = (id: number, isItemList2: boolean) => {
  //   if (isItemList2) {
  //     const updatedItemList2 = itemList2Data.map(item =>
  //       item.id === id ? {...item, favourite: !item.favourite} : item,
  //     );
  //     setItemList2Data(updatedItemList2);
  //   } else {
  //     const updatedNextData = nextDataData.map(item =>
  //       item.id === id ? {...item, is_favourite: !item.is_favourite} : item,
  //     );
  //     setNextDataData(updatedNextData);
  //   }
  // };
  const handleCategorySwitch = (category: string) => {
    setSelectedCategory(category);
  };
  const [selectedCategory, setSelectedCategory] =
    useState<string>('Categories');
  const refRBsheet = useRef<RBSheet>(null);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff', width: '100%'}}>
      <ScrollView>
        <View style={styles.container}>
          <View>
            <TouchableOpacity>
              <Image
                source={require('../assets/images/HomeImage1.png')}
                style={styles.image}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.dropDownView}>
            <TouchableOpacity onPress={() => refRBsheet.current.open()}>
              <Text style={styles.dropDownText}>{selectedCategory}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => refRBsheet.current.open()}>
              <SvgXml xml={icons().dropdown} style={styles.dropIcon} />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={() => navigation.navigate('wishlist')}>
              <SvgXml xml={icons().HomeCart} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.inputView}>
          <SvgXml xml={icons().search} style={styles.searchIcon} />
          <View style={styles.inputinside}>
            <TextInput
              placeholder="Search"
              style={styles.textInput}
              // onChangeText={text => setUserInput(text)}
              clearButtonMode="always"
              placeholderTextColor={'black'}
            />
          </View>
        </View>
        <View style={styles.categoryViewall}>
          <Text style={styles.categoryText}>Categories</Text>
          <TouchableOpacity onPress={() => navigation.navigate('categories')}>
            <Text style={styles.seeAllText}>See All</Text>
          </TouchableOpacity>
        </View>
        <View>
          <FlatList
            data={itemList}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => String(item.id)}
            renderItem={({item}) => {
              return (
                <View style={styles.flatListView}>
                  <Image
                    source={item.image}
                    style={styles.categotyImageStyle}
                  />
                  <View>
                    <Text style={styles.itemNameText}>{item.name}</Text>
                  </View>
                </View>
              );
            }}
          />
        </View>
        <View style={styles.topSellingView}>
          <TouchableOpacity>
            <Text style={styles.topsellingText}>Top Selling</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.seeAllText}>See All</Text>
          </TouchableOpacity>
        </View>

        <View>
          <FlatList
            data={itemList2}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => String(item.id)}
            renderItem={({item}) => {
              const isWishlisted = wishlistItems.some(
                wishlistItem => wishlistItem.id === item.id,
              );
              return (
                <TouchableOpacity
                  onPress={() => navigation.navigate('productmainscreen')}>
                  <View style={styles.flatListView2}>
                    <View style={styles.favouriteButton}>
                      <TouchableOpacity
                        onPress={() => {
                          dispatch(toggleWishlist(item));
                        }}>
                        <SvgXml
                          xml={
                            isWishlisted
                              ? icons().filledheart
                              : icons().blankheart
                          }
                        />
                      </TouchableOpacity>
                    </View>
                    <Image source={item.image} style={styles.mainImageList} />
                    <View>
                      <Text style={styles.mainItemName}>{item.name}</Text>
                    </View>
                    <View>
                      <Text style={styles.itemPrice}>{item.price}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <View style={styles.nextflatlistview}>
          <Text style={styles.newInText}>New In</Text>
          <TouchableOpacity>
            <Text style={styles.seeAllText}>See All</Text>
          </TouchableOpacity>
        </View>
        <View style={{marginBottom: 10}}>
          <FlatList
            data={nextData}
            horizontal
            keyExtractor={item => String(item.id)}
            renderItem={({item}) => {
              return (
                <View style={styles.flatListView2}>
                  <View style={styles.favouriteButton}>
                    <TouchableOpacity
                      onPress={() => handleFavouritesNext(item.id)}>
                      <SvgXml
                        xml={
                          favouritesNext.includes(item.id)
                            ? icons().filledheart
                            : icons().blankheart
                        }
                      />
                    </TouchableOpacity>
                  </View>
                  <Image source={item.image} style={styles.mainImageList} />
                  <View>
                    <Text style={styles.mainItemName}>{item.name}</Text>
                  </View>
                  <View>
                    <Text style={styles.itemPrice}>{item.price}</Text>
                  </View>
                </View>
              );
            }}
          />
        </View>
        <RBSheet
          ref={refRBsheet}
          useNativeDriver={false}
          closeOnPressMask={true}
          closeOnPressBack={true}
          draggable={true}
          height={Dimensions.get('window').height / 2.5}
          customStyles={{
            container: {
              borderTopRightRadius: 20,
              borderTopLeftRadius: 20,
            },
            draggableIcon: {
              backgroundColor: '#9B9B9B',
              marginTop: 5,
            },
          }}>
          <View>
            <View style={styles.btmsheetView}>
              <Text style={styles.clearText}>Clear</Text>
              <Text style={styles.categoryTitleSheet}>Categories</Text>
              <View style={styles.svgbtmsheet}>
                <TouchableOpacity onPress={() => refRBsheet.current.close()}>
                  <SvgXml xml={icons().cross} />
                </TouchableOpacity>
              </View>
            </View>

            <FlatList
              data={data}
              keyExtractor={item => item}
              contentContainerStyle={styles.flatListView1}
              renderItem={({item}) => (
                <View style={styles.insidebtmsheet}>
                  <Pressable
                    style={[
                      styles.CategoryBtn,
                      selectedCategory === item && styles.selectedSortBtn,
                    ]}
                    onPress={() => handleCategorySwitch(item)}>
                    <Text
                      style={[
                        styles.CategoryText,
                        selectedCategory === item &&
                          styles.selectedSortTextMain,
                      ]}>
                      {item}
                    </Text>
                    {selectedCategory === item ? (
                      <SvgXml xml={icons().done} style={styles.selectedBtn} />
                    ) : (
                      ''
                    )}
                  </Pressable>
                </View>
              )}
            />
          </View>
        </RBSheet>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    // width: '90%',
    height: 40,
    flexDirection: 'row',
    marginTop: 63,
    marginHorizontal: 28,
    justifyContent: 'space-between',
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  dropdown: {
    backgroundColor: '#f5f5f5',
    borderWidth: 0,
    borderRadius: 40,
    width: '60%',
    height: 40,
    alignSelf: 'center',
    bottom: 5, ////////////////////////////////
  },

  dropDownText: {
    fontSize: FONTSIZE.size_14,
    fontFamily: FONTFAMILY.Montserrat_Bold,
    textAlign: 'center',
    marginLeft: 14,
  },
  dropIcon: {
    marginHorizontal: 12,
    marginVertical: 12,
  },
  dropDownView: {
    flexDirection: 'row',
    backgroundColor: '#f4f4f4',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 40,
  },
  placeHolderStyle: {
    fontSize: FONTSIZE.size_12,
    fontFamily: FONTFAMILY.Montserrat_Medium,
  },
  inputView: {
    backgroundColor: '#f4f4f4',
    marginHorizontal: 24,
    marginVertical: 24,
    borderRadius: 40,
    height: 40,
    flexDirection: 'row',
  },
  searchIcon: {
    marginTop: 11,
    marginLeft: 13,
  },
  textInput: {
    textAlignVertical: 'center',
    fontSize: FONTSIZE.size_16,
    color: COLORS.black,
    fontFamily: FONTFAMILY.Montserrat_Regular,
    width: '90%',
  },
  inputinside: {
    marginLeft: 12,
    width: '50%',
  },
  categoryViewall: {
    flexDirection: 'row',
    marginHorizontal: 24,
    justifyContent: 'space-between',
    height: 20,
  },
  categoryText: {
    fontFamily: FONTFAMILY.Montserrat_Bold,
    fontSize: FONTSIZE.size_16,
  },
  seeAllText: {
    fontSize: FONTSIZE.size_16,
    fontFamily: FONTFAMILY.Montserrat_Regular,
  },
  btmsheetView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginHorizontal: 16,
  },
  categoryTitleSheet: {
    fontSize: FONTSIZE.size_24,
    textAlign: 'center',
    fontFamily: FONTFAMILY.Montserrat_ExtraBold,
  },
  clearText: {
    marginLeft: 24,
    fontFamily: FONTFAMILY.Montserrat_Regular,
    textAlignVertical: 'center',
  },
  svgbtmsheet: {
    top: 5,
  },
  flatListView1: {
    width: '100%',
  },
  insidebtmsheet: {
    marginTop: 24,
  },
  CategoryBtn: {
    marginHorizontal: 24,
    backgroundColor: COLORS.grayies,
    borderRadius: 30,
  },
  CategoryText: {
    marginLeft: 34,
    marginVertical: 18,
    fontFamily: FONTFAMILY.Montserrat_Medium,
    fontSize: FONTSIZE.size_16,
  },
  selectedSortBtn: {
    backgroundColor: COLORS.purple,
  },
  selectedSortTextMain: {
    color: COLORS.white,
  },
  selectedBtn: {
    position: 'absolute',
    top: 18,
    right: 14,
  },
  flatListView: {
    marginTop: 16,
    marginHorizontal: 16,
  },
  flatListView2: {
    backgroundColor: '#f4f4f4',
    marginTop: 16,
    marginHorizontal: 12,
    borderRadius: 10,
  },
  favouriteButton: {
    position: 'absolute',
    top: 9,
    right: 12,
    width: 20,
    zIndex: 1,
  },
  categotyImageStyle: {
    height: 56,
    width: 56,
    borderRadius: 40,
  },
  mainImageList: {
    height: 220,
    width: 159,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  mainItemName: {
    fontSize: FONTSIZE.size_12,
    fontFamily: FONTFAMILY.Montserrat_Regular,
    marginLeft: 4,
    marginTop: 8,
  },
  itemPrice: {
    fontFamily: FONTFAMILY.Montserrat_Bold,
    marginLeft: 4,
    marginBottom: 16,
  },

  itemNameText: {
    fontSize: FONTSIZE.size_12,
    fontFamily: FONTFAMILY.Montserrat_Bold,
    textAlign: 'center',
  },
  topSellingView: {
    marginTop: 24,
    flexDirection: 'row',
    marginHorizontal: 24,
    justifyContent: 'space-between',
  },
  topsellingText: {
    fontSize: FONTSIZE.size_16,
    fontFamily: FONTFAMILY.Montserrat_Bold,
  },
  nextflatlistview: {
    marginTop: 24,
    flexDirection: 'row',
    marginHorizontal: 24,
    justifyContent: 'space-between',
  },
  newInText: {
    color: COLORS.purple,
    fontSize: FONTSIZE.size_16,
    fontFamily: FONTFAMILY.Montserrat_Bold,
  },
});
