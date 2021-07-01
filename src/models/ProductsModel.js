const url = 'https://peaceful-temple-57415.herokuapp.com/api/v1/products';

class ProductsModel {
    // static all() {
    //     return fetch(url)
    //         .then((res) => res.json())
    // }

    static getProductDetails(prodids) {
      let urlWithParams = `${url}/fetchdetails`;
      for(const prodid of prodids){
        if(urlWithParams.indexOf('?') === -1) {
          urlWithParams += '?prodids[]=' + prodid;
        } else {
          urlWithParams += '&prodids[]=' + prodid;
        }
      }
      console.log('urlWithParams ==> ', urlWithParams);
      
      return fetch(urlWithParams)
          .then((res) => res.json())
    }

    static getProduct(prodid) {
        return fetch(`${url}/${prodid}`)
            .then((res) => res.json())
    }
}

export default ProductsModel;