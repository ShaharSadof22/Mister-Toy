import Axios from 'axios'
const axios = Axios.create({
    withCredentials: true
});

const BASE_URL = (process.env.NODE_ENV !== 'development')
? '/api/toy'
: '//localhost:3030/api/toy';

export const toyService = {
    query,
    getById,
    save,
    remove,
    getDataPricePerType,
    getDataToysPerYear
}

async function query() {
    const res = await axios.get(BASE_URL)
    return res.data
}
async function getById(toyId) {
    const res = await axios.get(`${BASE_URL}/${toyId}`)
      return res.data
}
function save(toyToAdd, toyId = false) {
    if (toyId) {
        // return axios.put(`BASE_URL/${toy._id}`, toy)
    }
    else {
        const toy = {
            name: toyToAdd.name,
            createdAt: toyToAdd.CreatedAt,
            price: +toyToAdd.price,
            type: "Funny",
            inStock: true,
            imgURL: toyToAdd.imgURL
        }
        return axios.put(`${BASE_URL}/add`, toy)
    }
}
function remove(toyId) {
    return axios.delete(`${BASE_URL}/${toyId}`)
}
function getDataPricePerType(toys) {
    var dataPricePerType = {}

    toys.forEach(toy => {
        dataPricePerType[toy.type] ?
            dataPricePerType[toy.type].push(toy.price) :
            dataPricePerType[toy.type] = [toy.price]
    })
    let labels = Object.keys(dataPricePerType)
    let datas = Object.values(dataPricePerType)
    let data = []
    datas.forEach(list => {
        let sum = list.reduce((a, b) => {
            return a + b;
        }, 0);
        data.push(+(sum / list.length).toFixed(2))
    })
    dataPricePerType = {
        labels,
        datasets: [{
            data,
            backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
            ],
            hoverBackgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
            ]
        }]
    }
    return Promise.resolve(dataPricePerType)
}
function getDataToysPerYear(toys) {
    var dataToyPerYear = {}

    toys.forEach(toy => {
        const year = toy.createdAt.substr(0, 4);
        dataToyPerYear[year] ?
            dataToyPerYear[year]++ :
            dataToyPerYear[year] = 1
    })

    let labels = Object.keys(dataToyPerYear)
    let data = Object.values(dataToyPerYear)

    dataToyPerYear = {
        labels,
        datasets: [{
            data,
            backgroundColor: labels.map(label => '#FF6384')
            ,
            hoverBackgroundColor: [
                '#FF6384'
            ]
        }]
    }
    return Promise.resolve(dataToyPerYear)
}
