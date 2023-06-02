/* eslint-disable react-native/no-inline-styles */
import {BlurView} from '@react-native-community/blur';
import React from 'react';
import {Modal, StyleSheet, Text, Pressable, View} from 'react-native';

const Logout = ({modalVisible, setModalVisible, navigation}) => {
  return (
    <View style={styles.centeredView}>
      <BlurView
        style={styles.blurView}
        blurType="dark"
        blurAmount={20}
        reducedTransparencyFallbackColor="white"
      />
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              Are you sure you want to logout?
            </Text>
            <Text
              style={{
                color: '#2242D8',
                fontSize: 12,
                width: 200,
                textAlign: 'center',
                marginBottom: 40,
              }}>
              You will need to again enter your details to login
            </Text>
            <View style={{width: '100%', gap: 10}}>
              <Pressable
                style={{
                  width: '90%',
                  height: 45,
                  borderRadius: 12,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  alignSelf: 'center',
                  backgroundColor: '#2242D8',
                }}
                onPress={() => {
                  navigation.navigate('Home');
                  setModalVisible(false);
                }}>
                <Text style={{color: '#FFFFFF', fontWeight: '500'}}>
                  Yes, I want to
                </Text>
              </Pressable>
              <Pressable
                style={{
                  width: '90%',
                  height: 45,
                  borderWidth: 1,
                  borderRadius: 12,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  alignSelf: 'center',
                  borderColor: '#2242D8',
                }}
                onPress={() => setModalVisible(false)}>
                <Text style={{color: '#2242D8', fontWeight: '500'}}>
                  No, I don’t want to
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#00001226',
  },
  blurView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
  },
  modalView: {
    backgroundColor: 'white',
    borderTopEndRadius: 15,
    borderTopStartRadius: 15,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '100%',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    color: '#2242D8',
    fontWeight: 'bold',
    fontSize: 15,
  },
});

export default Logout;
