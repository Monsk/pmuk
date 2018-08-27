import React from 'react';
import {
  createBottomTabNavigator,
  createStackNavigator,
  createSwitchNavigator
}
from 'react-navigation';
import {
  StyleSheet,
} from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import Ionicons from 'react-native-vector-icons/Ionicons';
import reducers from './reducers';

import Loading from './screens/Loading';
import AuthScreen from './screens/AuthScreen';
import HomeScreen from './screens/HomeScreen';
import CustomerListScreen from './screens/CustomerListScreen';
import CustomerScreen from './screens/CustomerScreen';
import CustomerEditScreen from './screens/CustomerEditScreen';
import CustomerAddScreen from './screens/CustomerAddScreen';
import ArticDumpTruckForm from './screens/Forms/ArticDumpTruckForm';
import Profile from './screens/Profile';

class App extends React.Component {
  componentWillMount() {
  const config = {
    apiKey: 'AIzaSyAQKT9w_mtyaS1eVnwb6lKh2x05uTluNpw',
    authDomain: 'pmuk-454e5.firebaseapp.com',
    databaseURL: 'https://pmuk-454e5.firebaseio.com',
    projectId: 'pmuk-454e5',
    storageBucket: 'pmuk-454e5.appspot.com',
    messagingSenderId: '578920080424'
  };

  firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    const MainNavigator = createSwitchNavigator({
        Loading,
        Auth: AuthScreen,
        main: {
          screen: createBottomTabNavigator({
            Home: createStackNavigator({
              HomeScreen,
              ArticDumpTruckForm
            }, {
              navigationOptions: {
                headerStyle: {
                  backgroundColor: '#22252C',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
              },
            }),
            Customers: createStackNavigator({
              CustomerList: CustomerListScreen,
              Customer: CustomerScreen,
              CustomerAdd: CustomerAddScreen,
              CustomerEdit: CustomerEditScreen,
            }, {
              navigationOptions: {
                headerStyle: {
                  backgroundColor: '#22252C',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
              },
            }),
            Profile: createStackNavigator({
              Profile
            }, {
              navigationOptions: {
                headerStyle: {
                  backgroundColor: '#22252C',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
              },
            })
          },
          // {
          //   contentComponent:(props) => (
          //       <View style={{ flex: 1 }}>
          //           <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
          //               <DrawerItems {...props} />
          //           </SafeAreaView>
          //           <View style={{ position: 'absolute', bottom: 0, left: 0 }} >
          //             <LogoutButton />
          //           </View>
          //       </View>
          //   ),
          //   drawerOpenRoute: 'DrawerOpen',
          //   drawerCloseRoute: 'DrawerClose',
          //   drawerToggleRoute: 'DrawerToggle'
          // },
          {
            initialRouteName: 'Home'
          }, {
          navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
              const { routeName } = navigation.state;
              let iconName;
              if (routeName === 'Home') {
                iconName = `ios-information-circle${focused ? '' : '-outline'}`;
              } else if (routeName === 'Customers') {
                iconName = `ios-options${focused ? '' : '-outline'}`;
              }

              // You can return any component that you like here! We usually use an
              // icon component from react-native-vector-icons
              return <Ionicons name={iconName} size={25} color={tintColor} />;
            },
          }),
          tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          },
        }
        ),

        }
      });

    return (
      <Provider store={store}>
        <MainNavigator style={styles.rootStyle} />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  rootStyle: {
    flex: 1,
    backgroundColor: '#197392',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default App;
