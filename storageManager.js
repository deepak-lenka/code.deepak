import Realm from 'realm'

//First I create these tables in Realm and then import them here.
import Account from '../Realm/models/account'
import Category from '../Realm/models/category'
import Currency from '../Realm/models/currency'
import Income from '../Realm/models/income'
import Outcome from '../Realm/models/outcome'


// initializing the realm object
const realm = new Realm({
  schema:[
    Account,
    Category,
    Currency,
    Income,
    Outcome
  ]
});


//this class will delete with the create, update or delete method.
class StorageManager {

  createOrUpdate(tableName, row, update=false){
    try{
      realm.write(() => {
        let account = realm.create(tableName, row, update);
        console.log("account created" + account.accountID)
      })
    }
    catch(e){
      console.log("exception at create" + e);
    }
  }

  delete(row) {
    realm.delete(row);
  }
}

//it will be used in the base class
export default StorageManager;
