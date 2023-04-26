const account = {
  name: 'Account',
  primaryKey: 'accountID',
  properties:{
    accountID: 'int',
    name:'string',
    type:'string',
    currency:'Currency',
    balance:'double',
    created:'date',
    modified:'date'
  }
}

export default account;
