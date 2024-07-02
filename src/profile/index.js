import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';

export const ProfileScreen = props => {
  const {item} = props;
  return (
    <View style={styles.conatainer}>
      <Text>Profile Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => props.navigation.navigate('Detail')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  conatainer: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});
