import React from 'react';
import {View} from 'react-native';
import {Text} from 'native-base';
import {CustomHeader} from '../CustomHeader';


export class Account extends React.Component {
    render() {
      return (
        <View style={{ flex: 1 }}>
          <CustomHeader title="Account" isHome={true} navigation={this.props.navigation}/>
          <View style={{flex:1 ,justifyContent: 'center', alignItems: 'center'}}>
            <Text>Account</Text>
          </View>
        </View>
      );
    }
  }