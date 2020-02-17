import React from 'react';
import {Image, Dimensions} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import {IMAGE} from './src/constants/Image'
import {createDrawerNavigator} from 'react-navigation-drawer';

import {SideMenu, Home, HomeDetail, Wallet,WalletDetail, Setting,SettingDetail,Profile,Login,Register,Account} from './src/component'

const navOptionHandler = (navigation) => ({
  header: null
})

const HomeStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: navOptionHandler
  },
  HomeDetail: {
    screen: HomeDetail,
    navigationOptions: navOptionHandler
  }
})


const WalletStack = createStackNavigator({
  Wallet: {
    screen: Wallet,
    navigationOptions: navOptionHandler
  },
  WalletDetail: {
    screen: WalletDetail,
    navigationOptions: navOptionHandler
  }
})


const SettingStack = createStackNavigator({
  Setting: {
    screen: Setting,
    navigationOptions: navOptionHandler
  },
  SettingDetail:{
    screen: SettingDetail,
    navigationOptions: navOptionHandler
  }
})


const MainTabs = createBottomTabNavigator({
  Home: {
    screen:HomeStack,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({tintColor}) => (
        <Image 
          source={IMAGE.ICON_HOME}
          resizeMode="contain"
          style={{width:20, height: 20}}
        />
      )
    }
  },
  Wallet: {
    screen:WalletStack,
    navigationOptions: {
      tabBarLabel: 'Wallet',
      tabBarIcon: ({tintColor}) => (
        <Image 
          source={IMAGE.ICON_BITCOIN}
          resizeMode="contain"
          style={{width:20, height: 20}}
        />
      )
    }
  },
  Setting: {
    screen:SettingStack,
    navigationOptions: {
      tabBarLabel: 'Setting',
      tabBarIcon: ({tintColor}) => (
        <Image 
          source={IMAGE.ICON_SETTINGS}
          resizeMode="contain"
          style={{width:20, height: 20}}
        />
      )
    }
  },
});

const MainStack = createStackNavigator ({
  Home: {
    screen: MainTabs,
    navigationOptions: navOptionHandler
  },
  Account: {
    screen: Account,
    navigationOptions: navOptionHandler
  },
  Profile: {
    screen: Profile,
    navigationOptions: navOptionHandler
  }
}, { initialRouteName: 'Home'})

const appDrawer = createDrawerNavigator (
  {
    drawer: MainStack
  },
  {
    contentComponent: SideMenu,
    drawerWidth: Dimensions.get('window').width * 3/4
  }
)


const authStack = createStackNavigator ({
  Login: {
    screen: Login,
    navigationOptions: navOptionHandler
  },
  Register: {
    screen: Register,
    navigationOptions: navOptionHandler
  }
})


const MainApp = createSwitchNavigator (
  {
    app: appDrawer,
    auth: authStack
  },
  {
    initialRouteName: 'auth'
  }
)
export default createAppContainer(MainApp);