/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Logout from '../logout';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Settings({navigation}) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View
      style={{
        padding: 10,
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        flex: 1,
      }}>
      <View
        style={{
          width: '100%',
          padding: 10,
          gap: 10,
          marginBottom: 10,
        }}>
        <Text
          style={{
            textAlign: 'left',
            fontSize: 30,
            fontWeight: 'bold',
            color: '#2242D8',
            marginBottom: 20,
          }}>
          Settings
        </Text>
        <View
          style={{
            height: 100,
            width: '100%',
            borderWidth: 2,
            borderRadius: 15,
            borderColor: '#2242D8',
            shadowColor: 'grey',
            shadowOpacity: 5,
            backgroundColor: '#EAEDFB',
          }}
        />
      </View>
      {/* profiles */}
      <View
        style={{
          width: '100%',
          padding: 10,
          gap: 10,
        }}>
        <Pressable style={styles.btnContainer}>
          <Text style={styles.btnText}>Profile</Text>
          <Icon name="right" size={20} color="#2242D8" />
        </Pressable>

        <Pressable style={styles.btnContainer}>
          <Text style={styles.btnText}>Share App</Text>
          <Icon name="right" size={20} color="#2242D8" />
        </Pressable>

        <Pressable style={styles.btnContainer}>
          <Text style={styles.btnText}>Rate us</Text>
          <Icon name="right" size={20} color="#2242D8" />
        </Pressable>

        <Pressable style={styles.btnContainer}>
          <Text style={styles.btnText}>About app</Text>
          <Icon name="right" size={20} color="#2242D8" />
        </Pressable>

        <Pressable style={styles.btnContainer}>
          <Text style={styles.btnText}>Contact us</Text>
          <Icon name="right" size={20} color="#2242D8" />
        </Pressable>
        <Pressable style={styles.btnContainer}>
          <Text style={styles.btnText}>Privacy Policy</Text>
          <Icon name="right" size={20} color="#2242D8" />
        </Pressable>
        <Pressable
          style={{
            height: 50,
          }}
          onPress={() => {
            setModalVisible(true);
            AsyncStorage.removeItem('token');
          }}>
          <Text style={{padding: 10, color: 'red', fontWeight: '500'}}>Logout?</Text>
        </Pressable>
        <Logout
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          navigation={navigation}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    height: 55,
    backgroundColor: '#F4F6FD',
    borderRadius: 20,
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 20,
  },
  btnText: {
    padding: 10,
    color: '#2242D8',
    fontWeight: '500',
    marginLeft: 10,
  },
});
