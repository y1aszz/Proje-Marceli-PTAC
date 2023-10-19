'use server'
const url="https://aula-17-10-m2vq19h7a-y1aszz.vercel.app";

const getUserAuthenticated = async (user) => {
   const responseOfApi = await fetch(url + "/user/authenticated",
    {
        method: "POST",
        header: {"Content-Type": "application/json"},
        body: JSON.stringify(user)
    });
    const useAuth = await responseOfApi.json();
    return useAuth;
}

const getUsers = async () =>{
         
}
export { getUsers, getUserAuthenticated };