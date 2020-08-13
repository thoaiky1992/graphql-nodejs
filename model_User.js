let arrUser = [
    { id : 1 , name : 'Ky' , email : 'thoaiky1992@gmail.com'},
    { id : 2 , name : 'Danh' , email : 'danhnguyen@gmail.com'}
]
var getAllUser = (args) => {
    return arrUser;
}
var getUserById = (args) => {
    return arrUser.filter(u => u.id === args.id)[0]
}
module.exports = {
    getAllUser,
    getUserById
}