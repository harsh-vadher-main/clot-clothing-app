import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {SvgXml} from 'react-native-svg';
import {icons} from '../utils/icons';
import ButtonCommon from '../common/ButtonCommon';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/Theme';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../navigation/AppNavigator';

interface createAccountProps {
  navigation: NativeStackNavigationProp<RootStackParams, 'createaccount'>;
}
const CreateAccount = ({navigation}: createAccountProps) => {
  const [firstname, setFirstName] = useState<string>('');
  const [lastname, setLastName] = useState<string>('');
  const [email, setEmail] = useState<any>('');
  const [password, setPassword] = useState<any>('');
  const [error, setError] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
  });

  const validFields = () => {
    let isValid = true;
    let newErrors = {firstname: '', lastname: '', email: '', password: ''};

    if (!firstname.trim()) {
      newErrors.firstname = 'Firstname is required!';
      isValid = false;
    }

    if (!lastname.trim()) {
      newErrors.lastname = 'Lastname is required';
      isValid = false;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email.trim()) {
      newErrors.email = 'Email is required!';
      isValid = false;
    } else if (!emailRegex.test(email)) {
      newErrors.email = 'Enter a valid Email!';
      isValid = false;
    }

    if (!password.trim()) {
      newErrors.password = 'Password is required!';
      isValid = false;
    } else if (password.length < 6) {
      newErrors.password = 'Password should contain atleast 6 charactor!';
      isValid = false;
    }

    setError(newErrors);
    return isValid;
  };

  const handleCreateAccount = () => {
    if (validFields()) {
      navigation.navigate('tellUsScreen');
    }
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <ScrollView>
        <SvgXml
          xml={icons().back}
          style={styles.svgIcon}
          onPress={() => navigation.navigate('SignUp')}
        />
        <Text style={styles.headerText}>Create Account</Text>
        <View style={styles.inputView}>
          {error.firstname ? (
            <Text style={styles.firstNameError}>{error.firstname}</Text>
          ) : null}
          <TextInput
            placeholder="Firstname"
            placeholderTextColor={'#27272780'}
            style={styles.textInput}
            onChangeText={setFirstName}
            value={firstname}
          />
          {error.lastname ? (
            <Text style={styles.lastNameError}>{error.lastname}</Text>
          ) : null}
          <TextInput
            placeholder="Lastname"
            placeholderTextColor={'#27272780'}
            style={styles.textInput1}
            onChangeText={setLastName}
            value={lastname}
          />
          {error.email ? (
            <Text style={styles.emailError}>{error.email}</Text>
          ) : null}
          <TextInput
            placeholder="Email Address"
            placeholderTextColor={'#27272780'}
            style={styles.textInput2}
            onChangeText={setEmail}
            value={email}
          />
          {error.password ? (
            <Text style={styles.passwordError}>{error.password}</Text>
          ) : null}
          <TextInput
            placeholder="Password"
            placeholderTextColor={'#27272780'}
            style={styles.textInput3}
            onChangeText={setPassword}
            value={password}
            secureTextEntry
          />
          <TouchableOpacity /*{onPress={handleCreateAccount}}**/ onPress={() => navigation.navigate('bottomtabs')}>
            <ButtonCommon
              name="Continue"
              textStyle={styles.btnText}
              viewStyle={styles.btnView}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('forgetpassword')}>
          <View style={styles.forgetView}>
            <Text style={styles.forgetText}>Forgot Password? </Text>
            <Text style={styles.resetText}>Reset </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreateAccount;

const styles = StyleSheet.create({
  svgIcon: {
    marginTop: 63,
    marginLeft: 27,
  },
  headerText: {
    fontSize: FONTSIZE.size_32,
    marginLeft: 27,
    marginTop: 20,
  },
  btnText: {
    fontSize: FONTSIZE.size_18,
    textAlign: 'center',
    color: COLORS.white,
    fontFamily: FONTFAMILY.Montserrat_Medium,
  },
  btnView: {
    backgroundColor: COLORS.purple,
    width: '100%',
    padding: SPACING.space_10,
    borderRadius: BORDERRADIUS.radius_25,
    marginTop: 40,
  },
  inputView: {
    marginTop: 32,
    marginHorizontal: 23,
    gap: 16,
  },
  textInput: {
    width: '100%',
    height: 56,
    borderRadius: 6,
    backgroundColor: '#f4f4f4',
    fontSize: FONTSIZE.size_16,
    fontFamily: FONTFAMILY.Montserrat_Regular,
    color: COLORS.black,
  },
  textInput1: {
    width: '100%',
    height: 56,
    borderRadius: 6,
    backgroundColor: '#f4f4f4',
    fontSize: FONTSIZE.size_16,
    fontFamily: FONTFAMILY.Montserrat_Regular,
    color: COLORS.black,
    marginTop: 16,
  },

  textInput2: {
    width: '100%',
    height: 56,
    borderRadius: 6,
    backgroundColor: '#f4f4f4',
    fontSize: FONTSIZE.size_16,
    fontFamily: FONTFAMILY.Montserrat_Regular,
    color: COLORS.black,
    marginTop: 16,
  },
  textInput3: {
    width: '100%',
    height: 56,
    borderRadius: 6,
    backgroundColor: '#f4f4f4',
    fontSize: FONTSIZE.size_16,
    fontFamily: FONTFAMILY.Montserrat_Regular,
    color: COLORS.black,
    marginTop: 16,
  },
  forgetView: {
    flexDirection: 'row',
    marginTop: 40,
    marginLeft: 23,
  },
  forgetText: {
    fontSize: FONTSIZE.size_12,
    fontFamily: FONTFAMILY.Montserrat_Regular,
  },
  resetText: {
    fontSize: FONTSIZE.size_12,
    fontFamily: FONTFAMILY.Montserrat_Bold,
  },
  firstNameError: {
    color: 'red',
    fontSize: FONTSIZE.size_14,
    fontFamily: FONTFAMILY.Montserrat_Regular,
  },
  lastNameError: {
    top: 20,
    color: 'red',
    fontSize: FONTSIZE.size_14,
    fontFamily: FONTFAMILY.Montserrat_Regular,
  },
  emailError: {
    top: 20,
    color: 'red',
    fontSize: FONTSIZE.size_14,
    fontFamily: FONTFAMILY.Montserrat_Regular,
  },
  passwordError: {
    top: 20,
    color: 'red',
    fontSize: FONTSIZE.size_14,
    fontFamily: FONTFAMILY.Montserrat_Regular,
  },
});