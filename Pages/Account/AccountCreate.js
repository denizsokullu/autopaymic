import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, TextInput, TouchableWithoutFeedback, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import Constants from 'expo-constants';
import { createBankAccount, createCreditCard } from '../../Services/AccountService';
import { Formik } from 'formik';

class AccountCreate extends React.Component {
  state = {
    type: 'bankAccount'
  }

  createBankAccount(values) {
    createBankAccount(values).then((data) => {
      console.log(data);
      this.props.navigation.navigate('AccountsHome');
    });
  }

  createCreditCard(values) {
    createCreditCard(values).then((data) => {
      this.props.navigation.navigate('AccountsHome');
    });
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.typeSelectorContainer}>
          <TouchableWithoutFeedback onPress={() => this.setState({type: 'bankAccount'})} activeOpacity='1.0'>
            <View style={this.state.type == 'bankAccount' ? styles.typeSelectorHighlighted : styles.typeSelector }>
              <Text>Bank Account</Text>
            </View>

          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={() => this.setState({type: 'creditCard'})} activeOpacity='1.0'>
            <View style={this.state.type == 'creditCard' ? styles.typeSelectorHighlighted : styles.typeSelector }>
              <Text>Credit Card</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
        {
          this.state.type == 'bankAccount' ?
          <View style={styles.form}>
            <Formik
              initialValues={{ name: '', account_number: '', routing_number: '', }}
              onSubmit={this.createBankAccount.bind(this)}
            >
              {({ handleChange, handleBlur, handleSubmit, values }) => (
                <View>
                  <Text>Name</Text>
                  <TextInput
                    onChangeText={handleChange('name')}
                    onBlur={handleBlur('name')}
                    value={values.name}
                    style={styles.textInput}
                  />
                  <Text>Routing Number</Text>
                  <TextInput
                    onChangeText={handleChange('routing_number')}
                    onBlur={handleBlur('routing_number')}
                    keyboardType='number-pad'
                    value={values.routing_number}
                    style={styles.textInput}
                  />
                  <Text>Account Number</Text>
                  <TextInput
                    onChangeText={handleChange('account_number')}
                    onBlur={handleBlur('account_number')}
                    keyboardType='number-pad'
                    value={values.account_number}
                    style={styles.textInput}
                  />
                  <Button onPress={handleSubmit} title="Add"/>
                  <Button onPress={() => navigate('AccountsHome') }title="Cancel" />
                </View>
              )}
            </Formik>
          </View> :
          <View style={styles.form}>
            <Formik
              initialValues={{ name: '', card_number: '', expiration_month: '', expiration_year: '', security_code: '' }}
              onSubmit={this.createCreditCard.bind(this)}
            >
              {({ handleChange, handleBlur, handleSubmit, values }) => (
                <View>
                  <Text>Name</Text>
                  <TextInput
                    onChangeText={handleChange('name')}
                    onBlur={handleBlur('name')}
                    value={values.name}
                    style={styles.textInput}
                  />
                  <Text>Card Number</Text>
                  <TextInput
                    onChangeText={handleChange('card_number')}
                    onBlur={handleBlur('card_number')}
                    keyboardType='number-pad'
                    value={values.card_number}
                    style={styles.textInput}
                  />
                  <Text>Expiration Month</Text>
                  <TextInput
                    onChangeText={handleChange('expiration_month')}
                    onBlur={handleBlur('expiration_month')}
                    keyboardType='number-pad'
                    value={values.expiration_month}
                    style={styles.textInput}
                  />
                  <Text>Expiration Year</Text>
                  <TextInput
                    onChangeText={handleChange('expiration_year')}
                    onBlur={handleBlur('expiration_year')}
                    keyboardType='number-pad'
                    value={values.expiration_year}
                    style={styles.textInput}
                  />
                  <Text>Security Code</Text>
                  <TextInput
                    onChangeText={handleChange('security_code')}
                    onBlur={handleBlur('security_code')}
                    keyboardType='number-pad'
                    value={values.security_code}
                    style={styles.textInput}
                  />
                  <Button onPress={handleSubmit} title="Add"/>
                  <Button onPress={() => navigate('AccountsHome') }title="Cancel" />
                </View>
              )}
            </Formik>
          </View>
        }


      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width:'100%',
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight
  },
  form: {
    paddingLeft: 32,
    paddingRight: 32,
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
  },
  typeSelectorContainer: {
    paddingTop: 24,
    paddingLeft: 32,
    paddingRight: 32,
    flexDirection: 'row',
    height: 10,
    marginBottom: 74,
  },
  typeSelector: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'rgb(151, 151, 151)',
    borderWidth: 1,
    height: 50,
  },
  typeSelectorHighlighted: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'rgb(151, 151, 151)',
    borderWidth: 1,
    height: 50,
    backgroundColor: 'rgb(215, 215, 215)',
  }
});

export default AccountCreate
