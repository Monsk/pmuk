import React from 'react';
import {
  createBottomTabNavigator,
  createDrawerNavigator,
  createStackNavigator,
  DrawerItems
}
from 'react-navigation';
import {
  View,
  SafeAreaView
} from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LogoutButton from './components/LogoutButton';

import AuthScreen from './screens/AuthScreen';
import HomeScreen from './screens/HomeScreen';
import CustomerListScreen from './screens/CustomerListScreen';
import CustomerScreen from './screens/CustomerScreen';
import CustomerEditScreen from './screens/CustomerEditScreen';
import CustomerAddScreen from './screens/CustomerAddScreen';
import ArticDumpTruckForm from './screens/Forms/ArticDumpTruckForm';

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

    const MainNavigator = createBottomTabNavigator({
        Auth: AuthScreen,
        main: {
          screen: createDrawerNavigator({
            Home: createStackNavigator({
              HomeScreen,
              ArticDumpTruckForm
            }, {
              navigationOptions: {
                headerStyle: {
                  backgroundColor: '#197392',
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
                  backgroundColor: '#197392',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
              },
            })
          },
          {
            contentComponent:(props) => (
                <View style={{ flex: 1 }}>
                    <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
                        <DrawerItems {...props} />
                    </SafeAreaView>
                    <View style={{ position: 'absolute', bottom: 0, left: 0 }} >
                      <LogoutButton />
                    </View>
                </View>
            ),
            drawerOpenRoute: 'DrawerOpen',
            drawerCloseRoute: 'DrawerClose',
            drawerToggleRoute: 'DrawerToggle'
          },
          {
            initialRouteName: 'Home'
          }
        ),

        }
      });

    return (
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    );
  }
}

export default App;
