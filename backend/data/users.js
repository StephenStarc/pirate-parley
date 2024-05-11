import bcrpyt from 'bcryptjs'

const data = [
    {
        name:'Admin User',
        email:'admin@email.com',
        password: bcrpyt.hashSync('123456', 10),
        isAdmin:true,
    },
    {
        name:'Luffy',
        email:'luffy@email.com',
        password: bcrpyt.hashSync('123456', 10),
        isAdmin:false,
    },
    {
        name:'Dragon',
        email:'dragon@email.com',
        password: bcrpyt.hashSync('123456', 10),
        isAdmin:false,
    }
]

export default data