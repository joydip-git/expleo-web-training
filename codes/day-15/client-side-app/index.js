// (function () {
//     var promiseObjWithResponse = fetch('http://localhost:4000/productservice')
//     var promiseWithData =
//         promiseObjWithResponse
//             .then(resp => resp.json())
//             .catch(e => console.log(e))

//     promiseWithData
//         .then(data => console.log(data))
//         .catch(e => console.log(e))
// })();
//IIFE --> Immediately Invocable Function Expression (pronounced as IIFY)

function getData() {

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

    //showDataInTable(null)
}
getData();

//function declaration
//this is hoisted, so can be called earlier
// function showDataInTable(products) {

// }

//function expression
//this is NOT hoisted, so can't be called earlier untill and unless the call is being made from an asynchronous function
//in that case, the variable will get assigned to the function reference
//when the asynchornous callback is executed, by that time the function reference exists

const showDataInTable = function (products) {

    var tableBody = document.getElementById('tblProductsBody')
    //console.log(tableBody.getRootNode());
    //console.log(tableBody.children)

    for (let index = 0; index < products.length; index++) {
        const product = products[index];

        var imgElement = document.createElement('img')
        imgElement.setAttribute('src', product.imagePath)
        imgElement.setAttribute('alt', 'NA')
        imgElement.setAttribute('title', product.name)
        imgElement.setAttribute('style', 'width:50px;margin:2px')
        //imageData.innerHTML = imgElement

        var imgDiv = document.createElement('div')
        imgDiv.setAttribute('class', 'img-responsive')
        imgDiv.appendChild(imgElement);

        var imageData = document.createElement('td')
        imageData.appendChild(imgDiv)

        var nameData = document.createElement('td')
        nameData.innerText = product.name;

        var idData = document.createElement('td')
        idData.innerText = product.id;

        var priceData = document.createElement('td')
        priceData.innerText = product.price;

        var descData = document.createElement('td')
        descData.innerText = product.description;

        var tableRow = document.createElement('tr')
        tableRow.appendChild(imageData);
        tableRow.appendChild(nameData)
        tableRow.appendChild(idData)
        tableRow.appendChild(priceData)
        tableRow.appendChild(descData)

        tableBody.appendChild(tableRow)
    }
}