const outcome = {
  name: 'Outcome',
  primaryKey:'outcomeID',
  properties: {
    outcomeID: 'int',
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

export default outcome;
