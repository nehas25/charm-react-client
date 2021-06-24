const url = 'http://localhost:4000/api/v1/users/60cfdee8edaa32322e9d68a2'; 
const addToCartUrl = url + '/add';
const removeFromCartUrl = url + '/remove';

class UsersModel {
    static addToCart(productid) {
        return fetch(`${addToCartUrl}/${productid}`, {method: 'PUT'})
            .then((res) => res.json())
    }

    static getUser() {
      return fetch(url)
        .then((res) => res.json())
    }

    static removeFromCart(productid) {
        return fetch(`${removeFromCartUrl}/${productid}`, {method: 'PUT'})
            .then((res) => res.json())
    }
}

export default UsersModel;