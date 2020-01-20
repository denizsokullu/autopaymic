import React from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const AccountCard = (props) => {
  const { navigate } = props.navigation;
  const { data } = props;
  const goToItem = () => {
    return navigate('PayeeIndex', { id: data.id });
  }

  let account = {};

  if (data.bank_account !== null) {
    account.name = data.bank_account.name;
    let number = data.bank_account.account_number;
    account.last4 =  number.substr(number.length - 4);
  } else if (data.credit_card !== null) {
    account.name = data.credit_card.name;
    let number = data.credit_card.card_number;
    account.last4 =  number.substr(number.length - 4);
  }

  return (
    <TouchableWithoutFeedback onPress={goToItem} activeOpacity='1.0'>
      <View style={styles.outerContainer}>
        <View style={styles.container}>
          <View style={styles.mainSection}>
            <View style={styles.leftSection}>
              <View style={{ flex: 4 }}>
                <Text style={styles.accountName} ellipsizeMode='tail' numberOfLines={1}>{data.name}</Text>
              </View>
              <View style={{ flex: 2 }}>
                <Text style={styles.accountType}>{data.type.toUpperCase()}</Text>
              </View>
              <View style={{ flex: 4 }}>
                <Text style={styles.occurance}>{data.recurring_contract ? data.recurring_contract.duration_type : 'Due Now'}</Text>
              </View>
            </View>
            <View style={styles.rightSection}>
              <Text style={{ textAlign: 'right' }}>{account.name} ****{account.last4}</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', marginTop: 12 }}>
                {/* <View style={{ marginRight: 32 }}>
                {
                  data.due.type == 'fixed'
                  ?
                    <Text style={{ fontSize: 20, fontWeight: '500' }}>${data.due.amount}</Text>
                  :
                    <View >
                      <Text style={{ textAlign: 'right', fontSize: 20, fontWeight: '500' }}>Pay Full</Text>
                      <Text style={{ textAlign: 'right', fontSize: 14, fontWeight: '500' }}>avg ${data.due.average}</Text>
                    </View>
                }
                </View> */}
              </View>
              <View style={{ position: 'absolute', top: 40, right: 0 }}>
                  <Icon name="chevron-right" size={20}/>
                </View>
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    backgroundColor: 'rgb(215, 215, 215)',
    marginHorizontal: 16,
    borderWidth: 1,
    borderColor: 'rgb(151, 151, 151)',
    marginBottom: 12,
  },
  container: {
    marginHorizontal: 12,
    marginVertical: 8
  },
  mainSection: {
    flex: 3,
    flexDirection: 'row',
  },
  accountName: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 4,
  },
  accountType: {
    marginBottom: 4,
  },
  occurance: {
    fontSize: 18,
    fontWeight: '500',
  },
  leftSection: {
    flex: 1,
    marginTop: 8,
    paddingRight: 16,
  },
  rightDirection: {
    flex: 1,
  }
});

export default AccountCard
