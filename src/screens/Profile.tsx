import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

const Profile = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <Image
        source={require('../assets/images/HomeImage1.png')}
        style={styles.profileImage}
      />
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  profileImage: {
    height: 80,
    width: 80,
    borderRadius: 100,
    marginHorizontal: 155,
    marginVertical: 129,
  },
});
