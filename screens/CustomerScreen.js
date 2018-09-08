import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ListView,
  StyleSheet,
} from 'react-native';
import ListItem from '../components/ListItem';
import { formTypes } from './Forms/formTypes';


class CustomerScreen extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.state.params.title,
      headerRight: (
        <TouchableOpacity onPress={() => navigation.push('CustomerEdit')}>
          <Image
            source={require('../assets/edit.png')}
            style={{ width: 30, height: 30, marginRight: 10 }}
          />
        </TouchableOpacity>
      ),
    };
  }

  componentWillMount() {
    this.createDataSource(this.props);
  }

  componentDidMount() {
    this.updateTitle();
  }

  createDataSource({ forms }) {
    console.log(forms);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(forms);
  }

  checkForUpdate() {
    if (this.props.navigation.state.params.title !== this.props.currentCustomer.name) {
      this.updateTitle();
    }
  }

  updateTitle = () => {
    const { name } = this.props.currentCustomer;
    const { setParams } = this.props.navigation;
    setParams({ title: name });
  }

  renderRow(form) {
    const selectedForm = formTypes.find(obj => obj.type === form.formType);

    if (typeof selectedForm !== 'undefined') {
      return (
        <ListItem
        title={selectedForm.title}
        />
      );
    }
    return null;
  }

  render() {
    this.checkForUpdate();
    return (
      <View>
        <View style={styles.container}>
          <Text style={styles.h1}>Saved reports</Text>
        </View>
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
  h1: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  container: {
    justifyContent: 'center',
    paddingTop: 40,
    padding: 20,
    backgroundColor: '#ffffff',
  },
});

const mapStateToProps = (state) => {
  const { currentCustomer } = state;
  const forms = _.map(currentCustomer.forms, (val, uid) => {
    return { ...val, uid }; // { name: 'S', uid: 'ha98e9n'}
  });
  return { currentCustomer, forms };
};

export default connect(mapStateToProps)(CustomerScreen);
