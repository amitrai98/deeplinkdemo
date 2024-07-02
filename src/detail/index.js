import React, {Component} from 'react';
import {View, Text, StyleSheet, Linking} from 'react-native';

export class DetailScreen extends Component {
  componentDidMount() {
    Linking.getInitialURL()
      .then(url => {
        if (url) {
          this.handleOpenURL(url);
        }
      })
      .catch(err => {});
    Linking.addEventListener('url', this.handleOpenURL);
  }

  componentWillUnmount() {
    Linking.removeEventListener('url', this.handleOpenURL);
  }

  // open your gateway
  openGateWay = async () => {
    const BASEURL = 'google.come';
    const addNewOrderGatewayToken = 'my token';
    // const {addNewOrderGatewayToken} = this.props;
    const url = `${BASEURL}${addNewOrderGatewayToken}`;
    const canOpen = await Linking.canOpenURL(url);
    if (canOpen) {
      //   this.props.dispatch(setPaymentStatus('checked'));
      Linking.openURL(url);
    }
  };

  // handle gateway callbacks
  handleOpenURL = url => {
    console.log('handle url is ' + JSON.stringify(url));
    // if (isSucceedPayment(url)) {
    //   // your condition
    //   // handle success payment
    // } else {
    //   // handle failure
    // }
  };

  render() {
    return (
      <View>
        <Text>Detail screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  conatainer: {
    backgroundColor: 'gray',
    paddingVertical: 10,
    paddingHorizontal: 2,
  },
});
