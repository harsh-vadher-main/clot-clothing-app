import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import {RootStackParams} from '../navigation/AppNavigator';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {toggleWishlist} from '../redux/features/cartSlice';
import {SvgXml} from 'react-native-svg';
import {icons} from '../utils/icons';
import {FONTFAMILY, FONTSIZE} from '../theme/Theme';

interface FavouriteScreenProps {
  navigation: NativeStackNavigationProp<RootStackParams, 'favourites'>;
}
const MyFavourites = ({navigation}: FavouriteScreenProps) => {
  const dispatch = useDispatch();
  const wishlistItems = useSelector(
    (state: RootState) => state.wishlist.items ?? [],
  );
  console.log('Wishlist Items:', wishlistItems);

  return (
    <View style={styles.container}>
      {wishlistItems.length === 0 ? (
        <Text style={styles.emptyText}>No items in your wishlist</Text>
      ) : (
        <FlatList
          data={wishlistItems}
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
      )}
    </View>
  );
};

export default MyFavourites;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  emptyText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
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
  itemContainer: {marginBottom: 20, alignItems: 'center'},
  image: {width: 100, height: 100, resizeMode: 'contain'},
  itemName: {fontSize: 16, marginTop: 5},
});
