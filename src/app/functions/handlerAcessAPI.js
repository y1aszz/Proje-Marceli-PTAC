'use server'
const url="https://aula-17-10-2fa7.vercel.app";

const getUserAuthenticated = async (user) => {
    console.log(user)
   const responseOfApi = await fetch(url + "/user/authenticated",
    {
        method: "POST",
        headers: {"Content-Type": "Application/json"},
        body: JSON.stringify(user)
    });
    const useAuth = await responseOfApi.json();
    console.log(useAuth);
    return useAuth;
}

const getUsers = async () =>{
    const responseOfApi = await fetch(url+ "/users", {
        next: {revalidate: 1},
        method: "GET",
        headers: {"Content-Type": "Application/json"}
    });
    const users = await responseOfApi.json();
    return users
}

const postUser = async (user) => {
    try{
        const responseOfApi = await fetch(url + "/user", {
            method: 'POST',
            headers: { 'Content-Type': 'Application/json' },
            body: JSON.stringify(user)                           
        });
        const useSave = await responseOfApi.json();
        return useSave;
    } catch{
        return null;
    }
}
export { getUsers, getUserAuthenticated, postUser };