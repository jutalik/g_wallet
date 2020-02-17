import React from 'react';
import {View} from 'react-native';
import {Button,Text} from 'native-base';
import {CustomHeader} from '../../CustomHeader';

export class Wallet extends React.Component {
    render() {
      return (
        <View style={{ flex: 1 }}>
          <CustomHeader title="Wallet" isHome={true} navigation={this.props.navigation}/>
          <View style={{flex:1 ,justifyContent: 'center', alignItems: 'center'}}>
            <Text>Wallet!</Text>
              <Button light onPress={()=> this.props.navigation.navigate('WalletDetail')}>
                <Text> go to Wallet</Text>
              </Button>
          </View>
        </View>
      );
    }
  }
  