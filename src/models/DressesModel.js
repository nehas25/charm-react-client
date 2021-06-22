const url = 'http://localhost:4000/api/v1/dresses';

class DressesModel {
    static all() {
        return fetch(url)
            .then((res) => res.json())
    }

    static getDress(dressid) {
        return fetch(`${url}/${dressid}`)
            .then((res) => res.json())
    }
}

export default DressesModel;