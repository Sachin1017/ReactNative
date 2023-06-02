/* eslint-disable react-native/no-inline-styles */
import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {TextInput} from 'react-native';
import {StyleSheet} from 'react-native';

const General = () => {
  const [bg, setBg] = useState(false);

  const styles = StyleSheet.create({
    input: {
      width: '100%',
      color: '#2242D8',
      paddingHorizontal: 10,
      height: 50,
      borderWidth: 1,
      borderRadius: 20,
      borderColor: bg ? '#2242D880' : '#2242D82B',
      marginBottom: 10,
    },
    header: {
      fontSize: 14,
      fontWeight: '500',
      color: '#000000',
      marginBottom: 10,
    },
    container: {
      marginTop: 20,
    },
    bioContainer: {
      width: '100%',
      height: 100,
      borderWidth: 1,
      borderRadius: 20,
      borderColor: '#2242D880',
      marginBottom: 10,
    },
  });
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#FFFFFF',
      }}>
      <View style={styles.container}>
        <Text style={styles.header}>Card name</Text>
        <TextInput
          onFocus={() => setBg(true)}
          placeholder="Card name"
          style={styles.input}
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.header}>Personal details</Text>
        <TextInput placeholder="Personal details" style={styles.input} />
      </View>
      <View style={styles.container}>
        <Text style={styles.header}>Company details</Text>
        <TextInput placeholder="Company name" style={styles.input} />
        <TextInput placeholder="Designation" style={styles.input} />
        <TextInput placeholder="Department" style={styles.input} />
        <TextInput
          placeholder="Bio"
          style={{
            width: '100%',
            color: '#2242D8',
            paddingHorizontal: 10,
            height: 100,
            borderWidth: 1,
            borderRadius: 20,
            borderColor: bg ? '#2242D880' : '#2242D82B',
          }}
        />
      </View>
    </View>
  );
};

export default General;
