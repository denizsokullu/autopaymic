import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, TextInput, Button, Picker, Modal } from 'react-native';
import Constants from 'expo-constants';
import { accounts } from '../../Services/AccountService';
import { createPayee } from '../../Services/PayeeService';
import { Formik } from 'formik';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

class PayeeCreate extends React.Component {
  static navigationOptions = {
    header: null
  };

  state = {
    name: 'Some name',
    type: '',
    accountModalVisible: false,
    typeModalVisible: false,
    accounts: [],
    types: [
      'individual',
      'institution',
      'utility',
    ]
  };

  setModalVisible(value) {
    this.setState({accountModalVisible: value});
  }

  setTypeModalVisible(value) {
    this.setState({typeModalVisible: value});
  }

  createPayee(data) {
    console.log(data);
    createPayee(data).then(() => {
      this.props.navigation.navigate('Home');
    })
  }

  componentDidMount() {
    accounts().then(accounts => {
      const creditCards = accounts.credit_cards;
      const bankAccounts = accounts.bank_accounts;

      const allAccounts = [...creditCards, ...bankAccounts].map((account, index) => {
        account.list_id = index;
        return account;
      })

      this.setState({accountCount: allAccounts.length, accounts: allAccounts});
    });
  }



  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Formik
            initialValues={{ name: '', paymentAccount: null, amount: '0' }}
            onSubmit={this.createPayee.bind(this)}
          >
            {({ handleChange, handleBlur, handleSubmit, values, setFieldValue }) => (
              <View>
                <View>
                  <Text style={styles.inputLabel}>Payee Name</Text>
                  <TextInput
                    onChangeText={handleChange('name')}
                    onBlur={handleBlur('name')}
                    value={values.name}
                    style={styles.textInput}
                  />
                </View>
                <View>
                  <Text style={styles.inputLabel}>Payment Amount</Text>
                  <TextInput
                    onChangeText={handleChange('amount')}
                    onBlur={handleBlur('amount')}
                    value={values.amount}
                    style={styles.textInput}
                  />
                </View>
                <View>
                  <Text style={styles.inputLabel}>Pay from</Text>
                  <TouchableWithoutFeedback onPress={() => {this.setModalVisible(true)}}>
                    <View style={styles.textInput}>
                      <Text>{values.paymentAccount ? values.paymentAccount.name : 'Tap here to select payment account'}</Text>
                    </View>
                    <View>
                      <Modal
                        animationType="slide"
                        transparent={false}
                        visible={this.state.accountModalVisible}
                        >
                        <View style={{marginTop: 22}}>
                          <View>
                              <Picker
                            selectedValue={values.paymentAccount ? values.paymentAccount.name : null}
                            style={styles.pickerItem}
                            onValueChange={(itemValue, itemIndex) => {
                              setFieldValue('paymentAccount', this.state.accounts[itemIndex])
                              this.setState({accountModalVisible: false})
                            }}>
                                {
                                  this.state.accounts.map(account => {
                                    return <Picker.Item label={account.name} value={account.name} key={account.list_id}/>
                                  })
                                }
                            </Picker>
                          </View>
                        </View>
                      </Modal>
                    </View>
                  </TouchableWithoutFeedback>
                </View>
                <View>
                  <Text style={styles.inputLabel}>Payee Type</Text>
                  <TouchableWithoutFeedback onPress={() => {this.setTypeModalVisible(true)}}>
                    <View style={styles.textInput}>
                      <Text>{values.type ? values.type.charAt(0).toUpperCase() + values.type.substring(1) : 'Tap here to select payee type'}</Text>
                    </View>
                    <View>
                      <Modal
                        animationType="slide"
                        transparent={false}
                        visible={this.state.typeModalVisible}
                        >
                        <View style={{marginTop: 22}}>
                          <View>
                              <Picker
                            selectedValue={values.type ? values.type : null}
                            style={styles.pickerItem}
                            onValueChange={(itemValue, itemIndex) => {
                              setFieldValue('type', itemValue)
                              this.setState({typeModalVisible: false})
                            }}>
                                {
                                  this.state.types.map((type, id) => {
                                    return <Picker.Item label={type.charAt(0).toUpperCase() + type.substring(1)} value={type} key={id}/>
                                  })
                                }
                            </Picker>
                          </View>
                        </View>
                      </Modal>
                    </View>
                  </TouchableWithoutFeedback>
                </View>

                <View>
                  <Button onPress={handleSubmit} title="Add Payee"/>
                </View>

              </View>



            )}
          </Formik>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'100%',
    backgroundColor: '#fff',
    margin: 12,
    paddingTop: Constants.statusBarHeight,
  },
  pickerContainer: {
    flexDirection: 'row',
  },
  picker: {
    flex: 1,
  },
  pickerItem: {
    height: 100,
    // width: 300,
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8,
    marginBottom: 12,
    marginRight: 24,
    paddingLeft: 12,
    justifyContent: 'center',
  },
  inputLabel: {
    fontWeight: '500',
    fontSize: 14,
  }
});

export default PayeeCreate
