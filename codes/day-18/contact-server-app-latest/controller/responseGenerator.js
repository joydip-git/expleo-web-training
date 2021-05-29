const generateResponse = (respData, respMessage) => {
    return {
        data: respData,
        message: respMessage
    }
}
module.exports = {
    generateResponse
}