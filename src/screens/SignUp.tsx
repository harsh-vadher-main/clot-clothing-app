import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import ButtonCommon from '../common/ButtonCommon';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/Theme';
import {SafeAreaView} from 'react-native-safe-area-context';
import {SvgXml} from 'react-native-svg';
import {icons} from '../utils/icons';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {RootStackParams} from '../navigation/AppNavigator';

interface SignUpProps {
  navigation: NativeStackNavigationProp<RootStackParams, 'SignUp'>;
}

const SignUp = ({navigation}: SignUpProps) => {
  const [email, setEmail] = useState<any>('');

  const [error, setError] = useState<any>({email: ''});

  const validateEmail = () => {
    let isValid = true;
    let newErrors = {email: ''};

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email.trim()) {
      newErrors.email = 'Email is required.';
      isValid = false;
    } else if (!emailRegex.test(email)) {
      newErrors.email = 'Enter a valid email address.';
      isValid = false;
    }
    setError(newErrors);
    return isValid;
  };

  const handleSignUp = () => {
    if (validateEmail()) {
      navigation.navigate('SignUp2');
    }
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <ScrollView>
        <Text style={styles.topText}>Sign in</Text>
        <View style={styles.inputView}>
          {error.email ? (
            <Text style={styles.errorEmail}>{error.email}</Text>
          ) : null}
          <TextInput
            placeholder="Email Address"
            placeholderTextColor={'#27272780'}
            style={styles.textInput}
            onChangeText={setEmail}
            value={email}
          />
          <TouchableOpacity onPress={handleSignUp}>
            <ButtonCommon
              name="Continue"
              textStyle={styles.btnText}
              viewStyle={styles.btnView}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('createaccount')}>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 16,
              }}>
              <Text style={styles.dontText}>Don't have an account? </Text>
              <Text style={styles.createText}>Create One </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.signUpView}>
          <TouchableOpacity>
            <View style={styles.appleView}>
              <SvgXml xml={icons().apple} style={styles.svgIconApple} />
              <Text style={styles.appleText}>Continue with Apple </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.googleView}>
              <SvgXml xml={icons().goggle} style={styles.svgIconApple} />
              <Text style={styles.appleText}>Continue With Google </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.facebookView}>
              <SvgXml xml={icons().facebook} style={styles.svgIconApple} />
              <Text style={styles.appleText}>Continue With Facebook </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  topText: {
    fontSize: FONTSIZE.size_32,
    fontFamily: FONTFAMILY.Montserrat_Bold,
    marginTop: 123,
    left: 27,
    color: '#272727',
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
  },
  inputView: {
    marginTop: 32,
    marginHorizontal: 23,
    gap: 16,
  },
  errorEmail: {
    color: 'red',
    fontSize: FONTSIZE.size_14,
    fontFamily: FONTFAMILY.Montserrat_Regular,
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
  dontText: {
    fontSize: FONTSIZE.size_12,
    fontFamily: FONTFAMILY.Montserrat_Regular,
  },
  createText: {
    fontSize: FONTSIZE.size_12,
    fontFamily: FONTFAMILY.Montserrat_Bold,
  },
  signUpView: {
    paddingTop: 71,
    marginHorizontal: 23,
    gap: 12,
  },
  appleView: {
    flexDirection: 'row',
    marginTop: 71,
    height: 49,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.grayies,
    borderRadius: BORDERRADIUS.radius_25,
    gap: 12.15,
  },
  googleView: {
    flexDirection: 'row',
    height: 49,
    marginTop: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.grayies,
    borderRadius: BORDERRADIUS.radius_25,
    gap: 12.15,
  },
  facebookView: {
    flexDirection: 'row',
    height: 49,
    marginTop: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.grayies,
    borderRadius: BORDERRADIUS.radius_25,
    gap: 12.15,
  },
  appleText: {
    fontSize: FONTSIZE.size_16,
    fontFamily: FONTFAMILY.Montserrat_Regular,
    textAlign: 'center',
  },
  svgIconApple: {
    position: 'absolute',
    left: 20,
    bottom: 15,
  },
});