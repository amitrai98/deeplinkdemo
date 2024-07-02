import React, {useEffect} from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import {Linking, Alert} from 'react-native';
import {InAppBrowser} from 'react-native-inappbrowser-reborn';

export const HomeScreen = props => {
  const {navigation} = props;
  useEffect(() => {
    InAppBrowser.mayLaunchUrl('Url user has high chance to open', [
      'Other urls that user might open ordered by priority',
    ]);
  }, []);
  return (
    <View style={styles.conatainer}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Profile"
        onPress={() => {
          //   navigation.navigate('Profile')
          openLink();
        }}
      />
    </View>
  );
};

const sleep = async timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};
async function openLink() {
  try {
    const url = 'https://github.com/proyecto26';
    if (await InAppBrowser.isAvailable()) {
      const result = await InAppBrowser.open(url, {
        // iOS Properties
        dismissButtonStyle: 'cancel',
        preferredBarTintColor: '#453AA4',
        preferredControlTintColor: 'white',
        readerMode: false,
        animated: true,
        modalPresentationStyle: 'fullScreen',
        modalTransitionStyle: 'coverVertical',
        modalEnabled: true,
        enableBarCollapsing: false,
        // Android Properties
        showTitle: true,
        toolbarColor: '#6200EE',
        secondaryToolbarColor: 'black',
        navigationBarColor: 'black',
        navigationBarDividerColor: 'white',
        enableUrlBarHiding: true,
        enableDefaultShare: true,
        forceCloseOnRedirection: false,
        // Specify full animation resource identifier(package:anim/name)
        // or only resource name(in case of animation bundled with app).
        animations: {
          startEnter: 'slide_in_right',
          startExit: 'slide_out_left',
          endEnter: 'slide_in_left',
          endExit: 'slide_out_right',
        },
        headers: {
          'my-custom-header': 'my custom header value',
        },
      });
      await sleep(800);
      Alert.alert(JSON.stringify(result));
    } else Linking.openURL(url);
  } catch (error) {
    Alert.alert(error.message);
  }
}

const styles = StyleSheet.create({
  conatainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
