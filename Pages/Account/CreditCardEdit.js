import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, TouchableWithoutFeedback, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import Constants from 'expo-constants';
import { creditCard } from '../../Services/AccountService';

class CreditCardEdit extends React.Component {
  state = {}

  componentDidMount() {
    creditCard(this.props.navigation.getParam('id')).then(creditCard => this.setState({ creditCard: creditCard }));
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Button title='Update'/>
        <Button title='Back'/>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'100%',
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight
  }
});

export default CreditCardEdit
