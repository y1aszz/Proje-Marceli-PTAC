import { getUsers } from "@/app/functions/handlerAcessAPI";//importação

export default async function Dashboard() {
   const users = getUsers();//retorna a lista de usuarios estabelecida no handlerAcessAPI
    return (
        <div>
            <h1>Dashboard</h1>
            <h3 className="h3Lista">Lista de Usuarios:</h3>
            <ul>
                {users?.map((user, index) => (
                    <li key={index}>{user.name}, {user.email}</li>//vai exibir as informações nome e email que foram pegas do formulario que criamos no js
                ))}
            </ul>
        </div>
    );
};