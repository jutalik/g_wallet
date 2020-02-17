import React from 'react';
import {View} from 'react-native';
import {Button,Text} from 'native-base';
import {CustomHeader} from '../../CustomHeader';

export class Setting extends React.Component {
    render() {
      return (
        <View style={{ flex: 1 }}>
          <CustomHeader title="Setting" isHome={true} navigation={this.props.navigation}/>
          <View style={{flex:1 ,justifyContent: 'center', alignItems: 'center'}}>
            <Text>Setting!</Text>
              <Button light onPress={()=> this.props.navigation.navigate('SettingDetail')}>
                <Text> go to Setting</Text>
              </Button>
          </View>
        </View>
      );
    }
  }