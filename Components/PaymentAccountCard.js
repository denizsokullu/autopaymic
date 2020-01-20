import React from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { deleteBankAccount, deleteCreditCard } from '../Services/AccountService';

const PaymentAccountCard = (props) => {
  const { navigate } = props.navigation;
  const { data } = props;
  const goToEdit = () => {
    return navigate('paymentEdit', { id: data.id });
  }

  const deleteItem = () => {
    if(data.account_number) {
      deleteBankAccount(data.id).then(props.loadItems);
    } else {
      deleteCreditCard(data.id).then(props.loadItems);
    }
  }

  return (
      <View style={styles.outerContainer}>
        <View style={styles.container}>
          <View style={styles.mainSection}>
            <View style={styles.leftSection}>
              <Text>{data.name}</Text>
            </View>

            <View style={styles.rightSection}>
              {/* <TouchableWithoutFeedback>
                <Text>Edit</Text>
              </TouchableWithoutFeedback> */}
              <TouchableWithoutFeedback onPress={deleteItem}>
                <Text>Delete</Text>
              </TouchableWithoutFeedback>
            </View>

          </View>
        </View>
      </View>
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
  leftSection: {
    flex: 1,
    alignItems: 'flex-start',
  },
  rightDirection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default PaymentAccountCard
