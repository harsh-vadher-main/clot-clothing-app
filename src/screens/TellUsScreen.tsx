import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLORS, FONTFAMILY, FONTSIZE} from '../theme/Theme';
import DropDownPicker from 'react-native-dropdown-picker';
import {SvgXml} from 'react-native-svg';
import {icons} from '../utils/icons';
import ButtonCommon from '../common/ButtonCommon';
const category = ['Men', 'Women'];
import {SPACING, BORDERRADIUS} from '../theme/Theme';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../navigation/AppNavigator';

interface tellUsProps {
  navigation: NativeStackNavigationProp<RootStackParams, 'tellUsScreen'>;
}
const TellUsScreen = ({navigation}: tellUsProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Men');
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');
  const [item, setItems] = useState([
    {label: '18-25', value: '18-25'},
    {label: '26-35', value: '26-35'},
    {label: '36-45', value: '36-45'},
    {label: '45+', value: '45+'},
  ]);
  const handleCategory = (category: string) => {
    setSelectedCategory(category);
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <View>
        <Text style={styles.tellusText}>Tell us About yourslef</Text>
      </View>
      <View>
        <Text style={styles.whyText}>Who do you shop for ?</Text>
      </View>
      <View>
        <FlatList
          data={category}
          horizontal={true}
          keyExtractor={item => item}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                style={[
                  styles.touchableButton,
                  selectedCategory === item && styles.selectedBtn,
                ]}
                onPress={() => handleCategory(item)}>
                <Text
                  style={[
                    styles.btnText,
                    selectedCategory === item && styles.selectedCategoryText,
                  ]}>
                  {item}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <View style={styles.howoldView}>
        <Text style={styles.howoldText}>How Old are you ?</Text>
      </View>
      <View style={{marginHorizontal: 24}}>
        <DropDownPicker
          open={open}
          value={value}
          items={item}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          placeholder="Age Range"
          style={styles.dropdown}
          textStyle={styles.dropDownText}
          dropDownContainerStyle={styles.dropdownContainer}
          ArrowDownIconComponent={() => <SvgXml xml={icons().dropdown} />}
        />
      </View>
      <View style={styles.bottomView}>
        <TouchableOpacity onPress={() => navigation.navigate('bottomtabs')}>
          <ButtonCommon
            name="Finish"
            textStyle={styles.finishBtnText}
            viewStyle={styles.finishBtnView}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default TellUsScreen;

const styles = StyleSheet.create({
  tellusText: {
    marginTop: 161,
    marginLeft: 24,
    fontSize: FONTSIZE.size_24,
    fontFamily: FONTFAMILY.Montserrat_Bold,
  },
  whyText: {
    fontSize: FONTSIZE.size_16,
    fontFamily: FONTFAMILY.Montserrat_Regular,
    marginLeft: 24,
    marginTop: 49,
  },
  touchableButton: {
    height: 52,
    width: 161,
    borderRadius: 30,
    marginLeft: 24,
    marginTop: 22,
    gap: 20,
    backgroundColor: COLORS.grayies,
  },
  selectedBtn: {
    backgroundColor: COLORS.purple,
  },
  btnText: {
    paddingVertical: 16,
    textAlign: 'center',
    // paddingHorizontal: 40,
    fontSize: FONTSIZE.size_16,
    fontFamily: FONTFAMILY.Montserrat_Regular,
  },
  selectedCategoryText: {
    color: COLORS.white,
  },
  howoldView: {
    marginTop: 56,
    marginLeft: 24,
  },
  howoldText: {
    fontSize: FONTSIZE.size_16,
    fontFamily: FONTFAMILY.Montserrat_Medium,
  },
  dropdown: {
    backgroundColor: '#f5f5f5',
    borderWidth: 0,
    borderRadius: 20,
    paddingHorizontal: 16,
    marginTop: 13,
  },
  dropdownContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  dropDownText: {
    fontSize: FONTSIZE.size_16,
    fontFamily: FONTFAMILY.Montserrat_Medium,
  },
  finishBtnText: {
    fontSize: FONTSIZE.size_18,
    textAlign: 'center',
    color: COLORS.white,
    fontFamily: FONTFAMILY.Montserrat_Medium,
  },
  finishBtnView: {
    backgroundColor: COLORS.purple,
    width: '90%',
    padding: SPACING.space_10,
    borderRadius: BORDERRADIUS.radius_25,
    marginHorizontal: 24,
    marginVertical: 14,
  },
  bottomView: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#f4f4f4',
  },
});