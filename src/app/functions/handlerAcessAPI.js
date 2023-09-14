'use server'

const users = [//criando um afunção chamada users
    {
        name: "yas",
        email: "yasLinda@gmail.com",
        password: "1234",
        token: ""
    },
    {
        name: "jen",
        email: "jenzinha@gmail.com",
        token: ""
    }
];

const getUserAuthenticated = (user) => {
    return users.find(u => u.email === user.password && u.password ===user.password);
    //users.find tenta encontrar um usuario na lista
    //compara o email fornecido pelo usuario com o campo 'password' na lista de usuarios
    //compara a senha fornecida pelo usuario com o campo 'password' na lista de usuarios
}

const getUsers = () =>{//cria a função getUsers
        return users//retorna as informações que estao dentro da função 'users'
}
export { getUsers, getUserAuthenticated };