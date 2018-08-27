import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  TouchableOpacity,
  Image,
  ListView,
  ActivityIndicator,
  StyleSheet
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

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  componentWillMount() {
    this.props.customersFetch();
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    // nextProps are the next set of props that this component
    // will be rendered with. this.props is still the old set of props
    this.createDataSource(nextProps);
    this.setState({
      loading: false
    });
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

  renderSpinner() {
    if (this.state.loading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator size="large" />
        </View>
      );
    }
  }

  render() {
    return (
      <View style={styles.page}>
        {this.renderSpinner()}
        <ListView
          enableEmptySections
          dataSource={this.dataSource}
          renderRow={this.renderRow.bind(this)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1
  },
  container: {
    marginTop: 20
  }
});

const mapStateToProps = (state) => {
  const customers = _.map(state.customerList, (val, uid) => {
    return { ...val, uid }; // { name: 'S', uid: 'ha98e9n'}
  });
  return { customers };
};

export default connect(mapStateToProps, { customersFetch, customerFetch })(CustomerListScreen);
