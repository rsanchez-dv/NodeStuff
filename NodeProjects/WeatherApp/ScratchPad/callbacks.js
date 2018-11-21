var getUser = (id, callback) => {
    var user = {
        id: id,
        name: 'Rob'
    }
    setTimeout(() => {
        callback(user)
    }, 3000)
}

getUser(100, (userObject) => {
    console.log(userObject)
})