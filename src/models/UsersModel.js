const url = 'http://localhost:4000/api/v1/users/60cfdee8edaa32322e9d68a2'; 
const cartUrl = url + '/add';

class UsersModel {
    static addToCart(productid) {
        return fetch(`${cartUrl}/${productid}`, {method: 'PUT'})
            .then((res) => res.json())
    }

    static getUser(url) {
      return fetch(url)
        .then((res) => {
          console.log(res.json())
          return res.json()
        }
          )
    }

    // static removeFromCart(dressid) {
    //     return fetch(`${url}/${dressid}`)
    //         .then((res) => res.json())
    // }
}

export default UsersModel;