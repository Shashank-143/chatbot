import AuthForm from "@/components/auth-form";
import React from "react";
import { signUp } from "../actions";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

function SignUp() {
  return (
    <div className="max-w-sm mx-auto mt-32">
      <Card>
        <CardHeader>
            <CardTitle>Sign Up Form</CardTitle>
            <CardDescription>Enter your details to create an account</CardDescription>
        </CardHeader>
        <CardContent>
            <AuthForm active = 'Sign Up' action={signUp}/>
        </CardContent>
        <CardFooter>
            <p>Don't have an account? { " "} 
                <Link href={'/signup'} className="underline">
                    Sign In
                </Link>
            </p>
        </CardFooter>
    </Card>
    </div>
  );
}

export default SignUp;
