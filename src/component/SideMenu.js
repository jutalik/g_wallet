import React from 'react';
import {View,Image,SafeAreaView,ScrollView} from 'react-native';
import {Text, List, ListItem} from 'native-base';
import {IMAGE} from '../constants/Image'

export class SideMenu extends React.Component {
    render() {
      return(
        <SafeAreaView style={{flex:1}}>
          <View style={{height: 150, alignItems: 'center', justifyContent: 'center'}}>
            <Image source={IMAGE.ICON_USER_DEFAULT}
              style={{height: 120, width: 120, borderRadius: 60}}
            />
          </View>
          <ScrollView>
            
            <List>
              <ListItem onPress={() => this.props.navigation.navigate('Home')}>
                <Text>Home</Text> 
              </ListItem>
              <ListItem onPress={() => this.props.navigation.navigate('Account')}>
                <Text>Account</Text> 
              </ListItem>
              <ListItem onPress={() => this.props.navigation.navigate('Profile')}>
                <Text>Profile</Text>
              </ListItem>
            </List>
          </ScrollView>
  
          <List>
            <ListItem noBorder onPress={()=>this.props.navigation.navigate('auth')}>
              <Text>LogOut</Text>
            </ListItem>
          </List>
        </SafeAreaView>
      )
    }
  }
  
  