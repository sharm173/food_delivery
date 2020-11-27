import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import { createSwitchNavigator } from 'react-navigation';

import Home from './screens/Home'
import Search from './screens/Search'
import Orders from './screens/Orders'
import Account from './screens/Account'

import RestaurantMenu from './screens/RestaurantMenu'
import ItemDetail from './screens/ItemDetail'
import Cart from './screens/Cart'
import Checkout from './screens/Checkout'

import CompletedOrderDetail from './screens/CompletedOrderDetail'
import InProgressOrderDetail from './screens/InProgressOrderDetail'

import Icon from 'react-native-vector-icons/Ionicons'

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>App.js</Text>
      </View>
    );
  }
}

const BottomTabNavigator = createBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-home" color={tintColor} size={24} />
      )
    }
  },
  Search: {
    screen: Search,
    navigationOptions: {
      tabBarLabel: 'Search',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-search" color={tintColor} size={24} />
      )
    }
  },
  Orders: {
    screen: Orders,
    navigationOptions: {
      tabBarLabel: 'Orders',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-document" color={tintColor} size={24} />
      )
    }
  },
  Account: {
    screen: Account,
    navigationOptions: {
      tabBarLabel: 'Account',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-person" color={tintColor} size={24} />
      )
    }
  },

},
  {
    tabBarOptions: {
      activeTintColor: '#ff574d',
      inactiveTintColor: '#353c59',
      style: {
        backgroundColor: '#f5f8fb'
      }
    }
  }
);
const BookingFlow = createStackNavigator({
  Home: {
    screen: BottomTabNavigator,
    navigationOptions: {
      header: null,
    }
  },
  RestaurantMenu: {
    screen: RestaurantMenu
  },
  ItemDetail: {
    screen: ItemDetail
  },
  Cart: {
    screen: Cart,
    navigationOptions: {
      title: "Order Cart",
      headerStyle: {
        backgroundColor: '#f5f8fb'
      }
    }
  },
  Checkout: {
    screen: Checkout,
    navigationOptions: {
      title: "Checkout",
      headerStyle: {
        backgroundColor: '#f5f8fb'
      }
    }
  },
  CompletedOrderDetail: {
    screen: CompletedOrderDetail,
    navigationOptions: {
      title: "Order Detail",
      headerStyle: {
        backgroundColor: '#f5f8fb'
      }
    }
  },
  InProgressOrderDetail: {
    screen: InProgressOrderDetail,
    navigationOptions: {
      title: "Order Detail",
      headerStyle: {
        backgroundColor: '#f5f8fb'
      }
    }
  }
}

);


export default createAppContainer(BookingFlow);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
