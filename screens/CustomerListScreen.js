import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  TouchableOpacity,
  Image,
  ListView
} from 'react-native';
import {
  customersFetch,
  customerFetch
 } from '../actions';
import ListItem from '../components/ListItem';

class CustomerListScreen extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Customers',
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Image
            source={require('../assets/menu.png')}
            style={{ width: 30, height: 30, marginLeft: 10 }}
          />
        </TouchableOpacity>
      ),
      headerRight: (
        <TouchableOpacity onPress={() => navigation.push('CustomerAdd')}>
          <Image
            source={require('../assets/add.png')}
            style={{ width: 30, height: 30, marginRight: 10 }}
          />
        </TouchableOpacity>
      ),
    };
  };

  componentWillMount() {
    this.props.customersFetch();
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    // nextProps are the next set of props that this component
    // will be rendered with. this.props is still the old set of props
    this.createDataSource(nextProps);
  }

  onRowPress = (customer) => {
    const { uid, name } = customer;
    this.props.customerFetch({ uid });
    this.props.navigation.push('Customer', { uid, name });
  }

  createDataSource({ customers }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(customers);
  }

  renderRow(customer) {
    return (
      <ListItem
      title={customer.name}
      onRowPress={() => this.onRowPress(customer)}
      />
  );
  }

  render() {
    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow.bind(this)}
      />
    );
  }
}

const mapStateToProps = (state) => {
  const customers = _.map(state.customerList, (val, uid) => {
    return { ...val, uid }; // { name: 'S', uid: 'ha98e9n'}
  });
  return { customers };
};

export default connect(mapStateToProps, { customersFetch, customerFetch })(CustomerListScreen);
