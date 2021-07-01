const url = 'https://peaceful-temple-57415.herokuapp.com/api/v1/dresses';

class DressesModel {
    static all() {
        return fetch(url)
            .then((res) => res.json())
    }
}

export default DressesModel;