import React, {useState} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {icons} from '../../utils/icons';
import {COLORS, FONTFAMILY, FONTSIZE} from '../../theme/Theme';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../navigation/AppNavigator';

interface CategoryProps {
  navigation: NativeStackNavigationProp<RootStackParams, 'categories'>;
}

const itemList = [
  {id: 1, image: require('../../assets/images/category1.png'), name: 'Hoodies'},
  {id: 2, image: require('../../assets/images/category2.png'), name: 'Shorts'},
  {id: 3, image: require('../../assets/images/category3.png'), name: 'Shoes'},
  {id: 4, image: require('../../assets/images/category4.png'), name: 'Bag'},
  {
    id: 5,
    image: require('../../assets/images/category5.png'),
    name: 'Accessories',
  },
];

const Categories = ({navigation}: CategoryProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(itemList);

  const handleSearch = (text: string) => {
    setSearchQuery(text);
    if (text.trim() === '') {
      setFilteredData(itemList);
    } else {
      const filtered = itemList.filter(item =>
        item.name.toLowerCase().includes(text.toLowerCase()),
      );
      setFilteredData(filtered);
    }
  };

  return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backIcon}>
          <SvgXml xml={icons().back} />
        </TouchableOpacity>
        <View style={styles.searchBar}>
          <SvgXml
            xml={icons().search}
            width={20}
            height={20}
            style={styles.searchIcon}
          />
          <TextInput
            placeholder="Search"
            placeholderTextColor={'#27272780'}
            style={styles.input}
            value={searchQuery}
            onChangeText={handleSearch}
          />
          {searchQuery.length > 0 && (
            <TouchableOpacity onPress={() => handleSearch('')}>
              <SvgXml xml={icons().close} />
            </TouchableOpacity>
          )}
          {filteredData.length > 0 && searchQuery.length > 0 && (
            <View style={styles.suggestionsWrapper}>
              <View style={styles.suggestionsContainer}>
                {filteredData.map(item => (
                  <TouchableOpacity
                    key={item.id}
                    onPress={() => {
                      setSearchQuery(item.name);
                      navigation.navigate('hoodies');
                    }}
                    style={styles.suggestionItem}>
                    <Text style={styles.suggestionText}>{item.name}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          )}
        </View>
      </View>

      <View style={styles.categoryTextView}>
        <Text style={styles.categoryText}>
          {filteredData.length > 0 ? 'Shop by Categories' : ''}
        </Text>
      </View>
      <View style={styles.categoryListView}>
        {filteredData.length > 0 ? (
          <FlatList
            data={filteredData}
            keyExtractor={item => String(item.id)}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => {
                  if (item.name === 'Hoodies') {
                    navigation.navigate('hoodies');
                  }
                }}>
                <View style={styles.viewInsideList}>
                  <Image source={item.image} style={styles.image} />
                  <Text style={styles.itemNameText}>{item.name}</Text>
                </View>
              </TouchableOpacity>
            )}
          />
        ) : (
          <View style={styles.noResults}>
            <SvgXml
              xml={icons().searchicontoshow}
              width={100}
              height={100}
              style={{alignSelf: 'center', marginTop: 147}}
            />
            <Text style={styles.noResultsText}>
              Sorry, we couldn't find any matching result for your Search.
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 63,
    marginLeft: 27,
  },
  backIcon: {
    marginRight: 10,
  },
  searchBar: {
    flexDirection: 'row',
    backgroundColor: COLORS.grayies,
    width: '80%',
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  searchIcon: {
    marginRight: 8,
  },
  input: {
    width: '83%',
    color: '#272727',
    fontFamily: FONTFAMILY.Montserrat_Regular,
    fontSize: FONTSIZE.size_16,
    textAlignVertical: 'center',
    paddingVertical: 0,
    includeFontPadding: false,
  },
  categoryTextView: {
    marginTop: 34,
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
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  itemNameText: {
    fontSize: FONTSIZE.size_16,
    fontFamily: FONTFAMILY.Montserrat_Medium,
    marginLeft: 16,
  },
  noResults: {
    alignItems: 'center',
    marginTop: 50,
  },
  noResultsText: {
    fontSize: FONTSIZE.size_24,
    fontFamily: FONTFAMILY.Montserrat_Regular,
    marginTop: 10,
    textAlign: 'center',
  },
  suggestionsContainer: {
    position: 'absolute',
    top: 5,
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  suggestionItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f4f4f4',
  },
  suggestionText: {
    fontSize: 16,
    color: COLORS.black,
    fontFamily: FONTFAMILY.Montserrat_Bold,
  },
  suggestionsWrapper: {
    position: 'absolute',
    left: 0,
    right: 0,
    zIndex: 10,
  },
});
