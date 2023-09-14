'use server'

const users = [//criando um afunção chamada users
    {
        name: "yas",
        email: "yasLinda@gmail.com",
        password: "1234",
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
    },
    {
        name: "jen",
        email: "jenzinha@gmail.com",
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
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