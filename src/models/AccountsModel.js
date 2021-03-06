const url = 'http://peaceful-temple-57415.herokuapp.com/api/v1/accounts';

class AccountsModel {
    static login(userData) {
        return fetch(`${url}/login`, {
          method: 'POST',
          headers: { 
            'Content-Type': 'application/json' 
          },
          body: JSON.stringify(userData)
        })
        .then((res) => res.json())
    }
    
    static create(accountData) {
      return fetch(url, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json' 
        },
        body: JSON.stringify(accountData)
      })
      .then((res) => res.json())
    }
}

export default AccountsModel;