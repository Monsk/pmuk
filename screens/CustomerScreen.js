import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Image,
  ListView,
  StyleSheet,
} from 'react-native';
import ListItem from '../components/ListItem';
import { CardSection } from '../components/common/CardSection';
import { formTypes } from './Forms/formTypes';


class CustomerScreen extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
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

  createDataSource({ forms }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(forms);
  }

  renderRow(form) {
    const selectedForm = formTypes.find(obj => obj.type === form.formType);
    const creationDate = new Date(form.createdAt);

    if (typeof selectedForm !== 'undefined') {
      return (
        <ListItem
        title={selectedForm.title}
        subtitle={creationDate.toDateString()}
        />
      );
    }
    return null;
  }

  render() {
    return (
      <ScrollView stickyHeaderIndices={[0]}>
        <View style={styles.container}>
          <Text style={styles.h1}>{this.props.currentCustomer.name}</Text>
          <CardSection>
            <Text>Phone: +44 7827912961</Text>
          </CardSection>
        </View>
        <View style={styles.container}>
          <Text style={styles.h2}>Saved reports</Text>
        </View>
        <ListView
          enableEmptySections
          dataSource={this.dataSource}
          renderRow={this.renderRow.bind(this)}
        />
    </ScrollView>
   );
 }
}

const styles = StyleSheet.create({
  h1: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  h2: {
    fontSize: 18,
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
