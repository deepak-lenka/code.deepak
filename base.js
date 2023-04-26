//importing the storageManager class I created in the storageManager module.
import StorageManager from './storageManager'
const storageManager = new StorageManager();


//Since Accounts, Cateogories, income outcome. Every table will add, delete and update methods, I created a base class
// that will deal with the crud for all the tables.
class Base {
  
  //this super contructor will be called in the Accounts.js file which will extend this base class, and the table name will
  // be passed in the it. It can be Account, Category, Income, Outcome all tables.
  constructor(tableName){
      console.log("into base")
      this.tableName = tableName;
  }
  
  //calling the storageManager class methods
  
  create(row){
    storageManager.createOrUpdate(this.tableName, row);
  }

  update(row){
    storageManager.createOrUpdate(tableName, row, true);
  }

  delete(row){
    storageManager.delete(row)
  }

}

export default Base;
