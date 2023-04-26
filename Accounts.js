//now importing the base class where the crud methods are called for every table
import Base from './base';

//inherting all the base methods
class Accounts extends Base {
  constructor() {
      //calling the base class constructor and passing Account table, so the data will be created in the account table
      super('Account');
  }
}

export default Accounts;
