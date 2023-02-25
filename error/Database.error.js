module.exports = class Databaseerror extends Error{
    constructor(message,code){super()
    this.message = message
    this.code = code}
}