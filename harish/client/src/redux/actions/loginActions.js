const userLogin = () =>{
    return {
        type : "USERLOGIN",
        payload:"USER IS ACTIVE"
    }
}
const noLogin = () =>{
    return {
        type : "NOLOGIN",
        payload : "NO ONE IS ACTIVE"
    }
}

module.exports = { userLogin , noLogin }