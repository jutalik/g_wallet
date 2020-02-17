import React from 'react';
import {View} from 'react-native';
import {Text} from 'native-base';
import {CustomHeader} from '../../CustomHeader';

export class HomeDetail extends React.Component {
    render() {
      return (
        <View style={{ flex: 1 }}>
          <CustomHeader title="HomeDetail" navigation={this.props.navigation}/>
          <View style={{flex:1 ,justifyContent: 'center', alignItems: 'center'}}>
            <Text>HomeDetail!!!</Text>
          </View>
        </View>
      );
    }
  }