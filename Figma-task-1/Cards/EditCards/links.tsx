/* eslint-disable react-native/no-inline-styles */
import React, {useCallback, useRef, useMemo} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

const Links = () => {
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = useMemo(() => ['10%', '80%'], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  // renders
  return (
    <GestureHandlerRootView>
      <View style={styles.container}>
        <BottomSheet
          ref={bottomSheetRef}
          index={1}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}>
          <View style={styles.contentContainer}>
            <Text>Add links and contacts</Text>
            <View
              style={{
                display: 'flex',
                width: '95%',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around',
                marginTop: 20,
              }}>
              {/* Numbers */}
              <View
                style={{
                  width: 93,
                  height: 93,
                  borderRadius: 20,
                  backgroundColor: '#FFFFFF',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 10,
                }}>
                <Icon name="call-outline" size={25} color="#2242D8" />
                <Text
                  style={{color: '#2242D8', fontSize: 12, fontWeight: '500'}}>
                  Numbers
                </Text>
              </View>
              {/* Links */}
              <View
                style={{
                  width: 93,
                  height: 93,
                  borderRadius: 20,
                  backgroundColor: '#FFFFFF',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 10,
                }}>
                <Icon name="link-outline" size={25} color="#2242D8" />
                <Text
                  style={{color: '#2242D8', fontSize: 12, fontWeight: '500'}}>
                  Links
                </Text>
              </View>
              {/* Accounts */}
              <View
                style={{
                  width: 93,
                  height: 93,
                  borderRadius: 20,
                  backgroundColor: '#FFFFFF',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 10,
                }}>
                <Icon name="logo-linkedin" size={25} color="#0A66C2" />
                <Text
                  style={{color: '#2242D8', fontSize: 12, fontWeight: '500'}}>
                  Accounts
                </Text>
              </View>
            </View>
            <View
              style={{
                display: 'flex',
                width: '95%',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around',
                marginTop: 20,
              }}>
              {/* Account */}
              <View
                style={{
                  width: 93,
                  height: 93,
                  borderRadius: 20,
                  backgroundColor: '#FFFFFF',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 10,
                }}>
                <Icon name="logo-instagram" size={25} color="#ff6ef8" />
                <Text
                  style={{color: '#2242D8', fontSize: 12, fontWeight: '500'}}>
                  Account
                </Text>
              </View>
              <View
                style={{
                  width: 93,
                  height: 93,
                  borderRadius: 20,
                  backgroundColor: '#FFFFFF',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 10,
                }}>
                <Icon name="logo-twitter" size={25} color="#1D9BF0" />
                <Text
                  style={{color: '#2242D8', fontSize: 12, fontWeight: '500'}}>
                  Links
                </Text>
              </View>
              {/* Accounts */}
              <View
                style={{
                  width: 93,
                  height: 93,
                  borderRadius: 20,
                  backgroundColor: '#FFFFFF',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 10,
                }}>
                <Icon name="logo-facebook" size={25} color="#9146FF" />
                <Text
                  style={{color: '#2242D8', fontSize: 12, fontWeight: '500'}}>
                  Accounts
                </Text>
              </View>
            </View>
            <View
              style={{
                display: 'flex',
                width: '95%',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around',
                marginTop: 20,
              }}>
              {/* Numbers */}
              <View
                style={{
                  width: 93,
                  height: 93,
                  borderRadius: 20,
                  backgroundColor: '#FFFFFF',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 10,
                }}>
                <Icon name="logo-youtube" size={25} color="#ED1D24" />
                <Text
                  style={{color: '#2242D8', fontSize: 12, fontWeight: '500'}}>
                  Account
                </Text>
              </View>
              {/* Links */}
              <View
                style={{
                  width: 93,
                  height: 93,
                  borderRadius: 20,
                  backgroundColor: '#FFFFFF',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 10,
                }}>
                <Icon name="logo-github" size={25} color="#000000" />
                <Text
                  style={{color: '#2242D8', fontSize: 12, fontWeight: '500'}}>
                  Account
                </Text>
              </View>
              {/* Accounts */}
              <View
                style={{
                  width: 93,
                  height: 93,
                  borderRadius: 20,
                  backgroundColor: '#FFFFFF',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 10,
                }}>
                <Icon name="logo-dribbble" size={25} color="#C32361" />
                <Text
                  style={{color: '#2242D8', fontSize: 12, fontWeight: '500'}}>
                  Accounts
                </Text>
              </View>
            </View>
            <View
              style={{
                display: 'flex',
                width: '95%',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around',
                marginTop: 20,
              }}>
              {/* Numbers */}
              <View
                style={{
                  width: 93,
                  height: 93,
                  borderRadius: 20,
                  backgroundColor: '#FFFFFF',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 10,
                }}>
                <Icon name="logo-behance" size={25} color="#2242D8" />
                <Text
                  style={{color: '#2242D8', fontSize: 12, fontWeight: '500'}}>
                  Account
                </Text>
              </View>
              {/* Links */}
              <View
                style={{
                  width: 93,
                  height: 93,
                  borderRadius: 20,
                  backgroundColor: '#FFFFFF',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 10,
                }}>
                <Icon name="link-outline" size={20} color="#2242D8" />
                <Text
                  style={{color: '#2242D8', fontSize: 12, fontWeight: '500'}}>
                  Links
                </Text>
              </View>
              {/* Accounts */}
              <View
                style={{
                  width: 93,
                  height: 93,
                  borderRadius: 20,
                  backgroundColor: '#FFFFFF',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 10,
                }}>
                <Icon name="logo-wechat" size={25} color="#0A66C2" />
                <Text
                  style={{color: '#2242D8', fontSize: 12, fontWeight: '500'}}>
                  Accounts
                </Text>
              </View>
            </View>
          </View>
        </BottomSheet>
      </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 700,
    backgroundColor: '#FFFFFF',
    opacity: 1,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#E9ECFB',
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
  },
});

export default Links;
