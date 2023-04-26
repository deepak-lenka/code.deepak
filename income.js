const income = {
  name: 'Income',
  primaryKey:'incomeID',
  properties: {
    incomeID: 'int',
    amount: 'double',
    category: 'Category',
    account: 'Account',
    transactionDate: 'date',
    place: 'string',
    comment: 'string',
    created: 'date',
    modified: 'date'
  }
}

export default income;
