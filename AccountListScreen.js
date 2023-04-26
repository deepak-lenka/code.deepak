import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'

//finally importing account Class that inherits all the base class methods.
import Accounts from '../Business/Accounts';
const accountsObj = new Accounts();

// Styles
import styles from './Styles/AccountListScreenStyle'


//dont worry about any other stuff, just focus on the componentWillMount method. It just calls the create method which is 
// inherited from the base class.
class AccountListScreen extends Component {
  //calling the create method before the component mounts.
  componentWillMount()  {
      accountsObj.create({
        accountID: 7,
        name: 'test',
        type: 'male',
        balance: 200000,
        created: new Date(),
        modified: new Date()
      })
  }

  render () {
    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior='position'>
          <Text>AccountListScreen</Text>
        </KeyboardAvoidingView>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountListScreen)
