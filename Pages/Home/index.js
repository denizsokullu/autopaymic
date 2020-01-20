import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import Constants from 'expo-constants';
import { payees } from '../../Services/PayeeService';
import AccountCard from '../../Components/AccountCard';

export default class Home extends React.Component {
  state = {
    payees: []
  };

  fetchData() {
    payees().then(payees => {
      this.setState({ payees: payees });
    })
  }

  componentDidMount() {
    this.fetchData.bind(this)();
    this.willFocusSubscription = this.props.navigation.addListener(
      'willFocus', this.fetchData.bind(this)
    );
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.topSection}>
          <View style={styles.sectionLeft}>
            <Text style={styles.topText}>
              Total this month for 8 payees: $4250
            </Text>
            <Text style={styles.topText}>
              Total next month for 10 payees: $4600
            </Text>
          </View>
          <View style={styles.sectionRight}>
            <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('PayeeCreate')}>
              <Icon name="plus" size={30}/>
            </TouchableWithoutFeedback>
          </View>
        </View>
        <View style={styles.listSection}>
          <FlatList
          data={this.state.payees}
          renderItem={({ item }) => <AccountCard data={item} navigation={this.props.navigation}/>}
          keyExtractor={item => item.id.toString()}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    width:'100%',
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
  },
  topSection: {
    flex: 0.4,
    flexDirection: 'row',
  },
  sectionLeft: {
    flex: 12,
  },
  sectionRight: {
    flex: 1,
    alignItems: 'center',
    marginRight: 8,
    marginTop: 8,
  },
  listSection: {
    flex: 5,
  },
  item: {
    backgroundColor: 'rgb(215, 215, 215)',
    marginHorizontal: 16,
    borderWidth: 1,
    borderColor: 'rgb(151, 151, 151)',
  },
  title: {
    fontSize: 32,
  },
  topText: {
    fontSize: 18,
    fontWeight: '500',
    paddingLeft: 12,
    paddingRight: 12,
  }
});
