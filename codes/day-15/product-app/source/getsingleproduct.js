export const getProduct = (id) => {
    fetch('http://localhost:4000/productservice/' + id)
        .then(
            resp =>
                resp.json()
                    .then(res => {
                        document.getElementById('nameSpan').innerText = res.data.description;
                        // localStorage.setItem('data', JSON.stringify(res.data))
                    })
                    .catch(e => console.log(e))
        )
        .catch(e => console.log(e))
}