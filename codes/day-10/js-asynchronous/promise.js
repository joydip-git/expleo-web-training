/*
class Watcher {
    constructor() {
        this.responseData = null;
        this.errorData = null;
    }
    setResponseData(data) {
        this.responseData = data
    }
    setError(err) {
        this.errorData = err
    }
    onSuccess(successCallback) {
        successCallback(this.responseData)
    }
    onFailure(failureCallback) {
        failureCallback(this.errorData)
    }
}

const divide = (a, b) => {
    return b !== 0 ? a / b : new Error('can not divide by zero')
}

const getData = () => {
    let watcher = new Watcher();
    try {
        let res = divide(10, 5)
        watcher.setResponseData(res)
    } catch (e) {
        watcher.setError(e)
    }
    return watcher;
}

let watcherObj = getData();
watcherObj.onSuccess((result) => console.log(result));
watcherObj.onFailure(err => console.log(err))
*/
//Promise()