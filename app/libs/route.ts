import CredentialsProvider from "next-auth/providers/credentials";

export const NEXT_AUTH = {
providers: [
    CredentialsProvider({
        name:"Email",
        credentials: {
            username: {label:"Username",type:"text",placeholder:"Email"},
            password: {label:"Password",type:"password",placeholder:"Password"}
        },
        async authorize(credentials:any) {
            console.log(credentials);
            return {
                id: "user1",
                name: "User 1",
                email:"abc@gmail.com"
            }
        }
    })
],
secret: process.env.NEXTAUTH_SECRET,
callbacks: {
    session:({session,token,user}:any)=>{
        console.log(session);
        if(session.user){
            session.user.id = token.sub;
        }
        return session;
    }
    
}
}
