/* eslint-disable react-native/no-inline-styles */
import {Text, View, Pressable, TextInput, Image, FlatList} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Contacts({navigation}) {
  return (
    <View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 20,
        }}>
        <Text
          style={{
            color: '#2242D8',
            fontSize: 30,
            fontWeight: '500',
          }}>
          Contacts
        </Text>
        <Pressable
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            width: 130,
            gap: 5,
            backgroundColor: '#EAEDFB',
            borderRadius: 20,
            height: 32,
            borderColor: '#2242D8',
            borderWidth: 0.5,
          }}>
          <Icon name="add" size={20} color="#2242D8" />
          <Text>Create group</Text>
        </Pressable>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '90%',
          alignSelf: 'center',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            backgroundColor: '#EAEDFB',
            paddingLeft: 10,
            borderRadius: 20,
            width: '85%',
            height: 50,
            gap: 10,
          }}>
          <Icon name="search" size={20} color="#2242D8" />
          <TextInput placeholder="Search by job, name..." style={{flex: 1}} />
        </View>
        <View
          style={{
            backgroundColor: '#EAEDFB',
            borderRadius: 20,
            width: 50,
            height: 50,
            justifyContent: 'center',
          }}>
          <Icon
            name="md-swap-vertical"
            size={14}
            color="#2242D8"
            style={{
              borderWidth: 2,
              width: 18,
              height: 18,
              borderRadius: 4,
              borderColor: '#2242D8',
              padding: 2,
              alignSelf: 'center',
            }}
          />
        </View>
      </View>
      <View
        style={{
          width: '90%',
          alignSelf: 'center',
          marginVertical: 20,
        }}>
        <FlatList
          data={ContactsDetails}
          renderItem={({item}) => {
            return (
              <RenderItem
                title={item.title}
                subTitle={item.subTitle}
                img1={item.img1}
                img2={item.img2}
                img3={item.img3}
                img4={item.img4}
                navigation={navigation}
              />
            );
          }}
        />
      </View>
    </View>
  );
}

const ContactsDetails = [
  {
    img1: require('../icons/contacts/contact11.png'),
    img2: require('../icons/contacts/contact12.png'),
    img3: require('../icons/contacts/contact13.png'),
    img4: require('../icons/contacts/contact14.png'),
    title: 'All contacts',
    subTitle: '35 contacts',
  },
  {
    img1: require('../icons/contacts/contact21.png'),
    img2: require('../icons/contacts/contact22.png'),
    img3: require('../icons/contacts/contact23.png'),
    img4: require('../icons/contacts/contact24.png'),
    title: 'Recently added',
    subTitle: '30 contacts',
  },
  {
    img1: require('../icons/contacts/contact31.png'),
    img2: require('../icons/contacts/contact32.png'),
    img3: require('../icons/contacts/contact33.png'),
    img4: require('../icons/contacts/contact34.png'),
    title: 'Live contacts',
    subTitle: '40 contacts',
  },
  {
    img1: '',
    img2: '',
    img3: '',
    img4: '',
    title: 'Scanned',
    subTitle: '0 contacts',
  },
];

const RenderItem = ({title, subTitle, img1, img2, img3, img4, navigation}) => {
  return (
    <Pressable
      style={{
        borderWidth: 0.5,
        borderRadius: 10,
        borderColor: '#2242D8',
        marginVertical: 5,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 110,
        padding: 20,
        backgroundColor: '#EAEDFB4F',
      }}
      onPress={() => navigation.navigate(title)}>
      <View
        style={{
          position: 'relative',
        }}>
        {img1 ? (
          <Image
            source={img1}
            style={{
              width: 60,
              height: 60,
              alignSelf: 'center',
              backgroundColor: '#D9D9D957',
              borderRadius: 30,
            }}
          />
        ) : (
          <View
            style={{
              width: 60,
              height: 60,
              alignSelf: 'center',
              backgroundColor: '#D9D9D957',
              borderRadius: 30,
            }}
          />
        )}
        {img2 ? (
          <Image
            source={img2}
            style={{
              width: 30,
              height: 30,
              position: 'absolute',
              left: -5,
              top: 40,
              backgroundColor: '#D9D9D957',
              borderRadius: 30,
            }}
          />
        ) : (
          <View
            style={{
              width: 30,
              height: 30,
              position: 'absolute',
              left: -5,
              top: 40,
              backgroundColor: '#D9D9D957',
              borderRadius: 30,
            }}
          />
        )}
        {img3 ? (
          <Image
            source={img3}
            style={{
              width: 30,
              height: 30,
              position: 'absolute',
              left: 15,
              top: 40,
              backgroundColor: '#D9D9D957',
              borderRadius: 30,
            }}
          />
        ) : (
          <View
            style={{
              width: 30,
              height: 30,
              position: 'absolute',
              left: 15,
              top: 40,
              backgroundColor: '#D9D9D957',
              borderRadius: 30,
            }}
          />
        )}
        {img4 ? (
          <Image
            source={img4}
            style={{
              width: 30,
              height: 30,
              position: 'absolute',
              left: 35,
              top: 40,
              backgroundColor: '#D9D9D957',
              borderRadius: 30,
            }}
          />
        ) : (
          <View
            style={{
              width: 30,
              height: 30,
              position: 'absolute',
              left: 35,
              top: 40,
              backgroundColor: '#D9D9D957',
              borderRadius: 30,
            }}
          />
        )}
      </View>
      <View
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'center',
          gap: 5,
        }}>
        <Text style={{color: '#2242D8', fontSize: 15, fontWeight: '500'}}>
          {title}
        </Text>
        <Text style={{fontSize: 10, color: '#2242D8', fontWeight: '300'}}>
          {subTitle}
        </Text>
      </View>
      <Icon name="chevron-forward" size={20} color="#2242D8" />
    </Pressable>
  );
};
