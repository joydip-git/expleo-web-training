// const getData = () => {
//     const url = 'http://localhost:4000/productservice'
//     let promiseObj = fetch(url)
//     promiseObj
//         .then(data => data.json())
//         .then(res => console.log(res))
//         .catch(err => console.log(err))
// }
// module.exports = { getData }
import { getProduct } from "./getsingleproduct";

export function getData() {
    console.log('document loaded')
    var promiseObjWithResponse = fetch('http://localhost:4000/productservice')
    var promiseWithData =
        promiseObjWithResponse
            .then(resp => resp.json())
            .catch(e => console.log(e))

    promiseWithData
        .then((resultObject) => {
            var products = resultObject.data;
            if (products.length === 0) {
                window.alert('no records found')
            }
            else {
                showDataInTable(products)
            }
        })
        .catch(e => console.log(e))
}

const showDataInTable = function (products) {

    var tableBody = document.getElementById('tblProductsBody')

    for (let index = 0; index < products.length; index++) {
        const product = products[index];

        var imgElement = document.createElement('img')
        imgElement.setAttribute('src', product.imagePath)
        imgElement.setAttribute('alt', 'NA')
        imgElement.setAttribute('title', product.name)
        imgElement.setAttribute('style', 'width:50px;margin:2px')

        var imgDiv = document.createElement('div')
        imgDiv.setAttribute('class', 'img-responsive')
        imgDiv.appendChild(imgElement);

        var imageData = document.createElement('td')
        imageData.appendChild(imgDiv)

        var linkElement = document.createElement('a');
        linkElement.innerText = product.name;
        linkElement.setAttribute('href', '#')
        linkElement.addEventListener('click', () => {
            getProduct(product.id)
        })
        var nameData = document.createElement('td')
        //nameData.innerText = product.name;
        nameData.appendChild(linkElement);

        var idData = document.createElement('td')
        idData.innerText = product.id;

        var priceData = document.createElement('td')
        priceData.innerText = product.price;

        var descData = document.createElement('td')
        descData.innerText = product.description;

        var deleteColumn = document.createElement('td')
        var deleteButton = document.createElement('button')
        deleteButton.innerText = 'Delete'
        deleteButton.setAttribute('style', 'background-color:aliceblue')
        deleteColumn.addEventListener('click', (ev) => {
            // ev.preventDefault()
            // console.log(product.id)
            // fetch({

            //     method: 'DELETE',
            //     url: `http://localhost:4000/productservice/${product.id}`,
            // })
            //     .then(resp => console.log(resp.json()))
            //     .then(d => console.log(d))
            //     .catch(e => console.log(e))
            console.log('button clicked')

        })
        deleteColumn.appendChild(deleteButton);

        var tableRow = document.createElement('tr')
        tableRow.appendChild(imageData);
        tableRow.appendChild(nameData)
        tableRow.appendChild(idData)
        tableRow.appendChild(priceData)
        tableRow.appendChild(descData)
        tableRow.appendChild(deleteColumn)

        tableBody.appendChild(tableRow)
    }
}

//module.exports = { getData }