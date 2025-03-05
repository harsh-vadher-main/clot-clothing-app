import {
  Image,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLORS, FONTFAMILY, FONTSIZE} from '../theme/Theme';
import axios from 'axios';
import {SvgXml} from 'react-native-svg';
import {icons} from '../utils/icons';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../navigation/AppNavigator';
// import useSWR from 'swr';

// const api = axios.create({
//   baseURL: 'https://jsonplaceholder.typicode.com',
//   headers: {'Content-Type': 'application/json'},
// });

// interface Post {
//   id: number;
//   title: string;
// }
// interface User {
//   id: number;
//   title: string;
//   price: number;
//   description: string;
//   category: string;
//   image: string;
// }

interface ProfileProps {
  navigation: NativeStackNavigationProp<RootStackParams, 'profile'>;
}

interface CommonButtonProps {
  name: string;
}
const AddressButton = ({onPress}: any) =>
  // {name}: CommonButtonProps,
  {
    return (
      <TouchableOpacity onPress={onPress}>
        <View style={styles.addressButton}>
          <Text style={styles.addressText}>Address</Text>
          <SvgXml xml={icons().next} style={styles.svgIcon} />
        </View>
      </TouchableOpacity>
    );
  };
const WishlistButton = ({onPress}: any) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.nextButtons}>
        <Text style={styles.addressText}>Wishlist</Text>
        <SvgXml xml={icons().next} style={styles.svgIcon} />
      </View>
    </TouchableOpacity>
  );
};
const PaymentButton = ({onPress}: any) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.nextButtons}>
        <Text style={styles.addressText}>Payment</Text>
        <SvgXml xml={icons().next} style={styles.svgIcon} />
      </View>
    </TouchableOpacity>
  );
};
const HelpButton = ({navigation}: ProfileProps) => {
  return (
    <TouchableOpacity>
      <View style={styles.nextButtons}>
        <Text style={styles.addressText}>Help</Text>
        <SvgXml xml={icons().next} style={styles.svgIcon} />
      </View>
    </TouchableOpacity>
  );
};
const SupportButton = ({navigation}: ProfileProps) => {
  return (
    <TouchableOpacity>
      <View style={styles.nextButtons}>
        <Text style={styles.addressText}>Support</Text>
        <SvgXml xml={icons().next} style={styles.svgIcon} />
      </View>
    </TouchableOpacity>
  );
};
const Profile = ({navigation}: ProfileProps) => {
  // const [posts, setPosts] = useState<Post[]>([]);
  // const [loading, setLoading] = useState(true);
  // const [newTitle, setNewTitle] = useState('');
  // const [editingId, setEditingId] = useState<number | null>(null);

  // // const fetchPosts = async () => {
  // //   try{
  // //     const response = await api.get
  // //   }
  // // }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={styles.imageView}>
        <Image
          source={require('../assets/images/HomeImage1.png')}
          style={styles.profileImage}
        />
      </View>
      <View style={styles.mainView}>
        <View style={styles.userDetailBox}>
          <View>
            <Text style={styles.userNameText}>Gilbert Jones</Text>
            <Text style={styles.userEmail}>Glbertjones001@gmail.com</Text>
            <Text style={styles.userNumber}>121-224-7890</Text>
          </View>

          <TouchableOpacity>
            <View style={styles.editButton}>
              <Text style={styles.editButtonText}>Edit </Text>
            </View>
          </TouchableOpacity>
        </View>
        <AddressButton onPress={() => navigation.navigate('address')} />
        <WishlistButton onPress={() => navigation.navigate('wishlist')} />
        <PaymentButton onPress={() => navigation.navigate('payment')} />
        <HelpButton />
        <SupportButton />
        <View style={{marginTop: 35}}>
          <TouchableOpacity>
            <Text style={styles.signOutText}>Sign Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  profileImage: {
    height: 80,
    width: 80,
    borderRadius: 100,
    alignSelf: 'center',
  },
  imageView: {
    marginTop: 129,
    marginHorizontal: 155,
  },

  mainView: {
    marginHorizontal: 24,
    marginTop: 32,
  },
  userDetailBox: {
    backgroundColor: COLORS.grayies,
    borderRadius: 10,
    height: 96,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  userNameText: {
    fontSize: FONTSIZE.size_16,
    fontFamily: FONTFAMILY.Montserrat_ExtraBold,
    marginTop: 13,
    marginLeft: 16,
  },
  userEmail: {
    fontFamily: FONTFAMILY.Montserrat_Regular,
    fontSize: FONTSIZE.size_16,
    color: '#27272780',
    marginLeft: 16,
    // marginTop: 8,
  },
  userNumber: {
    fontFamily: FONTFAMILY.Montserrat_Regular,
    fontSize: FONTSIZE.size_16,
    lineHeight: 20,
    color: '#27272780',
    marginLeft: 16,
    // marginTop: 8,
    marginBottom: 8,
  },
  editButton: {
    marginHorizontal: 20,
  },
  editButtonText: {
    marginTop: 39,
    fontSize: FONTSIZE.size_12,
    color: COLORS.purple,
    fontFamily: FONTFAMILY.Montserrat_Bold,
  },
  addressButton: {
    backgroundColor: COLORS.grayies,
    marginTop: 26,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 10,
  },
  nextButtons: {
    marginTop: 8,
    backgroundColor: COLORS.grayies,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 10,
  },
  addressText: {
    fontSize: FONTSIZE.size_16,
    fontFamily: FONTFAMILY.Montserrat_Regular,
    marginLeft: 16,
    marginVertical: 16,
  },
  svgIcon: {
    marginVertical: 16,
    marginHorizontal: 12,
  },
  signOutText: {
    color: '#FA3636',
    fontFamily: FONTFAMILY.Montserrat_Bold,
    fontSize: FONTSIZE.size_14,
    textAlign: 'center',
  },
});

// const fetcher = async (url: string) => {
//   const response = await fetch(url);
//   if (!response.ok) throw new Error('Failed to fetch data');
//   return response.json();
// };

// const {data, error, isLoading} = useSWR<User[]>(
//   'https://fakestoreapi.com/products',
//   fetcher,
// );

// if (isLoading) return <ActivityIndicator size={'large'} color={'blue'} />;
// if (error) return <Text>Error : {error.message}</Text>;

{
  /* <View> */
}
{
  /* <FlatList
          data={data}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <View
              style={{
                marginBottom: 20,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                source={{uri: item.image}}
                style={{width: 80, height: 80, borderRadius: 10}}
              />
              <View style={{marginLeft: 10}}>
                <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                  {item.title}
                </Text>
                <Text style={{color: 'gray'}}>${item.price}</Text>
                <Text>{item.description}</Text>
              </View>
            </View>
          )}
        /> */
}
{
  /* </View> */
}
