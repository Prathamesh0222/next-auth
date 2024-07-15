
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
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
    ]
});

export const GET = handler;
export const POST = handler;