
import { NEXT_AUTH } from "@/app/libs/route";
import NextAuth from "next-auth/next";


const handler = NextAuth(NEXT_AUTH);
    

export const GET = handler;
export const POST = handler;