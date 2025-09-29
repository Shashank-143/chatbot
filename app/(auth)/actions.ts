"use server"

import { auth } from "@/lib/auth"
import { redirect } from "next/navigation";
import { headers } from "next/headers";

export const signUp = async({email, password}: any) => {
    try {
        await auth.api.signUpEmail({
            body: {
                email: email,
                password: password,
                name: email.split('@')[0],
            }
        });
    } catch (e: any) {
        console.error(`Error signing up: ${e}`);
        throw new Error("Error signing up");
    }
};

export const signIn = async({email, password}: any) => {
    try {
        await auth.api.signInEmail({
            body: {
                email,
                password,
            }
        });
    } catch (e: any) {
        console.error(`Error signing in: ${e}`);
        throw new Error("Error signing in");
    }
};
export const signOut = async() => {
    await auth.api.signOut({headers: await headers()});
    redirect("/login");
}; 