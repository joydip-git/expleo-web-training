document.getElementById('btn1').addEventListener('click', () => {
    let respPromise = fetch('http://127.0.0.1:8081/productservice')
    // let dataPromise =
    //     respPromise
    //         .then(resp => { return resp.json() })

    // dataPromise.then(data => console.log(data))
    respPromise
        .then(resp => resp.json())
        .then(data => console.log(data))

    /*
        const request = new XMLHttpRequest()
        request.onreadystatechange = () => {
            if (request.readyState === 4 && request.status === 200) {
                console.log(JSON.parse(request.responseText))
            } else {
                console.log(`Ready State:${request.readyState}`)
            }
        }
        //request.addEventListener('readystatechange', () => { })
        request.open('GET', 'http://127.0.0.1:8081/productservice', true)
        request.send();
    */
})