import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Pressable,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../navigation/AppNavigator';
import {SafeAreaView} from 'react-native-safe-area-context';
import {SvgXml} from 'react-native-svg';
import {icons} from '../../utils/icons';
import {COLORS, FONTFAMILY, FONTSIZE} from '../../theme/Theme';
import RBSheet from 'react-native-raw-bottom-sheet';

interface ProductScreenProps {
  navigation: NativeStackNavigationProp<RootStackParams, 'productmainscreen'>;
  product: {
    id: number;
    name: string;
    image: any[];
    price: string;
    description: string;
    rating: number;
  };
}

interface Product {
  id: number;
  image: any[];
  name: string;
  price: string;
  description: string;
  rating: number;
}
const data: Product = {
  id: 1,
  image: [
    require('../../assets/images/mainlist1.png'),
    require('../../assets/images/productimage2.png'),
    require('../../assets/images/productimage3.png'),
  ],
  name: "Men's Harrington Jacket",
  price: '$148',
  description:
    'Built for life and made to last, this full-zip corduroy jacket is part of our Nike Life collection. The spacious fit gives you plenty of room to layer underneath, while the soft corduroy keeps it casual and timeless.',
  rating: 3,
};

const SizeButton = () => {
  const sizes = ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'];
  const [selectedCategory, setSelectedCategory] = useState<string>('S');
  const handleCategorySwitch = (category: string) => {
    setSelectedCategory(category);
  };
  const refRBSheet = useRef<RBSheet | null>(null);
  return (
    <>
      <TouchableOpacity onPress={() => refRBSheet.current?.open()}>
        <View style={styles.bottomSheetComponentView}>
          <Text style={styles.sizeText}>Size</Text>
          <Text style={styles.sizeComingText}>{selectedCategory}</Text>
          <View style={styles.iconView}>
            <SvgXml xml={icons().dropdown} />
          </View>
        </View>
      </TouchableOpacity>

      <RBSheet
        ref={refRBSheet}
        height={300}
        openDuration={250}
        draggable={true}
        closeOnPressMask={true}
        customStyles={{
          container: {
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
          },
          wrapper: {
            backgroundColor: 'rgba(0,0,0,0.5)',
          },
          draggableIcon: {
            backgroundColor: '#000',
          },
        }}>
        <View>
          <Text
            style={{
              textAlign: 'center',
              fontSize: FONTSIZE.size_20,
              fontFamily: FONTFAMILY.Montserrat_Bold,
            }}>
            Sizes
          </Text>
          <FlatList
            data={sizes}
            keyExtractor={(item, index) => index.toString()}
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
                      selectedCategory === item && styles.selectedSortTextMain,
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
    </>
  );
};

const ColourButton = () => {
  const refRBColorSheet = useRef<RBSheet | null>(null);
  const colors = ['Orange', 'Black', 'Red', 'Yellow', 'Blue'];
  const [selectedColor, setSelectedColor] = useState<string>('Orange');

  const handleColorSwitch = (color: string) => {
    setSelectedColor(color);
  };

  return (
    <>
      <TouchableOpacity onPress={() => refRBColorSheet.current?.open()}>
        <View style={styles.bottomSheetComponentView}>
          <Text style={styles.ColorText}>Color</Text>
          <Text style={styles.sizeComingText}>{selectedColor}</Text>
          <View style={styles.iconView}>
            <SvgXml xml={icons().dropdown} />
          </View>
        </View>
      </TouchableOpacity>

      <RBSheet
        ref={refRBColorSheet}
        height={300}
        openDuration={250}
        draggable={true}
        closeOnPressMask={true}
        customStyles={{
          container: {
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
          },
          wrapper: {
            backgroundColor: 'rgba(0,0,0,0.5)',
          },
          draggableIcon: {
            backgroundColor: '#000',
          },
        }}>
        <View>
          <Text
            style={{
              textAlign: 'center',
              fontSize: FONTSIZE.size_20,
              fontFamily: FONTFAMILY.Montserrat_Bold,
            }}>
            Colors
          </Text>
          <FlatList
            data={colors}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={styles.flatListView1}
            renderItem={({item, index}) => (
              <View style={styles.insidebtmsheet}>
                <Pressable
                  style={[
                    styles.CategoryBtn,
                    selectedColor === item && styles.selectedSortBtn,
                  ]}
                  onPress={() => handleColorSwitch(item)}>
                  <Text
                    style={[
                      styles.CategoryText,
                      selectedColor === item && styles.selectedSortTextMain,
                    ]}>
                    {item}
                  </Text>
                  <View
                    style={[
                      styles.colorRound,
                      {backgroundColor: item.toLowerCase()},
                      selectedColor === item && {
                        borderWidth: 2,
                        borderColor: '#fff',
                      },
                    ]}
                  />
                  {selectedColor === item ? (
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
    </>
  );
};

const QuantityButton = () => {
  const [quantity, setQuantity] = useState<number>(0);
  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity === 0) {
      setQuantity(0);
    } else setQuantity(quantity - 1);
  };
  return (
    <View style={styles.bottomSheetComponentView}>
      <Text style={styles.colorText}>Quantity</Text>
      <View style={styles.iconView}>
        <TouchableOpacity onPress={() => increaseQuantity()}>
          <SvgXml xml={icons().incrementbutton} />
        </TouchableOpacity>
        <Text style={styles.quantityNumber}>{quantity}</Text>
        <TouchableOpacity onPress={() => decreaseQuantity()}>
          <SvgXml xml={icons().decrementbutton} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const ProductMainScreen = ({
  navigation,
  product = data,
}: ProductScreenProps) => {
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rating)) {
        stars.push(<SvgXml xml={icons().filledstar} />);
      } else {
        stars.push(<SvgXml xml={icons().blankstar} />);
      }
    }
    return stars;
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <ScrollView>
        <View style={styles.headerView}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <SvgXml xml={icons().back} />
          </TouchableOpacity>
          <TouchableOpacity>
            <SvgXml xml={icons().mainproductlike} />
          </TouchableOpacity>
        </View>
        <View>
          <FlatList
            data={product.image}
            horizontal
            keyExtractor={(_, index) => index.toString()}
            contentContainerStyle={{paddingLeft: 24}}
            renderItem={({item, index}) => {
              return (
                <View
                  style={[
                    styles.imageView,
                    index === 0 ? {marginLeft: 0} : {marginLeft: 10},
                  ]}>
                  <Image source={item} style={styles.imageMain} />
                </View>
              );
            }}
          />

          <View style={styles.pricenameView}>
            <View>
              <Text style={styles.productNameText}>{product.name}</Text>
            </View>
            <Text style={styles.productPrice}>{product.price}</Text>
          </View>
        </View>
        <View style={{marginTop: 33}}>
          <SizeButton />
          <ColourButton />
          <QuantityButton />
        </View>
        <View style={styles.productdescriptionView}>
          <Text style={styles.descriptionText}>{product.description}</Text>
        </View>
        <View style={styles.shippingView}>
          <Text style={styles.shippingText}>Shipping & Returns</Text>
          <Text style={styles.shippingText1}>
            Free standard shipping and free 60-day returns
          </Text>
        </View>
        <View style={styles.reviewsMainView}>
          <Text style={styles.reviewText}>Reviews</Text>
          <Text style={styles.ratingText}>4.5 Ratings</Text>
          <Text style={styles.totalReviewText}>213 Reviews</Text>
          <View style={styles.userReviewMain}>
            <Image
              source={require('../../assets/images/reviewimage1.png')}
              style={styles.reviewImage}
            />
            <Text style={styles.userNameText}>Alex Morgan</Text>
            <Text style={{marginTop: 12}}>{renderStars(product.rating)}</Text>
          </View>
          <Text style={styles.descriptionTextUSer}>
            Gucci transcribes its heritage, creativity, and innovation into a
            plenitude of collections. From staple items to distinctive
            accessories.
          </Text>
          <Text style={styles.timeText}>12 days ago</Text>
          <View style={styles.userReviewMain}>
            <Image
              source={require('../../assets/images/reviewimage2.png')}
              style={styles.reviewImage}
            />
            <Text style={styles.userNameText}>Alex Morgan</Text>
            <Text style={{marginTop: 12}}>{renderStars(product.rating)}</Text>
          </View>
          <Text style={styles.descriptionTextUSer}>
            Gucci transcribes its heritage, creativity, and innovation into a
            plenitude of collections. From staple items to distinctive
            accessories.
          </Text>
          <Text style={styles.timeText}>12 days ago</Text>
        </View>
      </ScrollView>
      <TouchableOpacity>
        <View style={{width: '100%', height: 80}}>
          <View style={styles.bottomView}>
            <Text style={styles.bottomPriceText}>{product.price}</Text>
            <Text style={styles.bottomAddText}>Add to Cart</Text>
          </View>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ProductMainScreen;

const styles = StyleSheet.create({
  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 24,
    marginTop: 63,
  },
  imageView: {
    marginTop: 24,
  },
  imageMain: {
    width: 161,
    height: 248,
    resizeMode: 'cover',
  },
  pricenameView: {
    marginHorizontal: 24,
    marginTop: 24,
  },
  productNameText: {
    fontFamily: FONTFAMILY.Montserrat_ExtraBold,
    fontSize: FONTSIZE.size_16,
  },
  productPrice: {
    fontFamily: FONTFAMILY.Montserrat_ExtraBold,
    color: COLORS.purple,
    marginTop: 15,
  },
  bottomSheetComponentView: {
    marginHorizontal: 24,
    flexDirection: 'row',
    width: '88%',
    height: 56,
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: COLORS.grayies,
    marginBottom: 12,
  },
  sizeText: {
    fontFamily: FONTFAMILY.Montserrat_Medium,
    fontSize: FONTSIZE.size_16,
    marginVertical: 18,
    marginLeft: 16,
    width: '70%',
  },
  ColorText: {
    fontFamily: FONTFAMILY.Montserrat_Medium,
    fontSize: FONTSIZE.size_16,
    marginVertical: 18,
    marginLeft: 16,
    width: '60%',
  },
  sizeComingText: {
    marginRight: 29,
    fontSize: FONTSIZE.size_16,
    fontFamily: FONTFAMILY.Montserrat_ExtraBold,
  },
  iconView: {
    flexDirection: 'row',
  },
  colorText: {
    fontFamily: FONTFAMILY.Montserrat_Medium,
    fontSize: FONTSIZE.size_16,
    marginVertical: 18,
    marginLeft: 16,
    width: '50%',
  },
  quantityNumber: {
    textAlignVertical: 'center',
    marginHorizontal: 23,
    fontFamily: FONTFAMILY.Montserrat_Medium,
    fontSize: FONTSIZE.size_16,
  },
  productdescriptionView: {
    marginHorizontal: 24,
    marginTop: 26,
  },
  descriptionText: {
    fontFamily: FONTFAMILY.Montserrat_Regular,
    fontSize: FONTSIZE.size_12,
    color: '#27272780',
    letterSpacing: 0.5,
  },
  shippingView: {
    marginHorizontal: 24,
    marginTop: 24,
  },
  shippingText: {
    fontFamily: FONTFAMILY.Montserrat_ExtraBold,
    marginBottom: 12,
  },
  shippingText1: {
    fontFamily: FONTFAMILY.Montserrat_Regular,
    color: '#27272780',
  },
  reviewsMainView: {
    marginHorizontal: 24,
    marginTop: 24,
  },
  reviewText: {
    fontFamily: FONTFAMILY.Montserrat_ExtraBold,
    fontSize: FONTSIZE.size_16,
  },
  ratingText: {
    fontFamily: FONTFAMILY.Montserrat_ExtraBold,
    fontSize: FONTSIZE.size_24,
    marginTop: 12,
  },
  totalReviewText: {
    fontFamily: FONTFAMILY.Montserrat_Regular,
    fontSize: FONTSIZE.size_12,
    marginTop: 12,
    color: '#27272780',
  },
  userReviewMain: {
    marginTop: 16,
    flexDirection: 'row',
  },
  reviewImage: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  userNameText: {
    fontFamily: FONTFAMILY.Montserrat_ExtraBold,
    textAlignVertical: 'center',
    marginLeft: 12,
    width: '60%',
  },
  descriptionTextUSer: {
    fontFamily: FONTFAMILY.Montserrat_Regular,
    fontSize: FONTSIZE.size_12,
    letterSpacing: 0.5,
    marginTop: 4,
    color: '#27272780',
  },
  timeText: {
    fontFamily: FONTFAMILY.Montserrat_Medium,
    marginTop: 4,
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
  colorRound: {
    height: 16,
    width: 16,
    borderRadius: 20,
    position: 'absolute',
    right: 71,
    marginVertical: 20,
    alignSelf: 'center',
  },
  bottomView: {
    width: '90%',
    borderRadius: 30,
    flexDirection: 'row',
    height: 52,
    backgroundColor: COLORS.purple,
    marginHorizontal: 24,
    marginVertical: 14,
  },
  bottomPriceText: {
    fontSize: FONTSIZE.size_16,
    fontFamily: FONTFAMILY.Montserrat_Bold,
    color: '#fff',
    marginLeft: 24,
    marginVertical: 16.5,
  },
  bottomAddText: {
    fontSize: FONTSIZE.size_16,
    fontFamily: FONTFAMILY.Montserrat_Bold,
    color: '#fff',
    position: 'absolute',
    right: 24,
    marginVertical: 16,
  },
});
