"use client"
import React, { useActionState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

function AuthForm({active, action}: any) {
  const buttonLabel = active === 'Login' ? 'Login' : 'Sign Up'
  
  const [error, formAction, isPending] = useActionState<Error | null, FormData>(
    async (_: Error | null, formData: FormData) => {
      const data = Object.fromEntries(formData.entries());

      try {
        await action(data);
      } catch (error) {
        if (error instanceof Error) {
          return error;
        }
      } 
      return null;
    },
    null,
  )

  return (
    <div>
      <form action={formAction}className='flex flex-col gap-8'>
        <div className= 'space-y-4'>
          <Label>Email</Label>
          <Input name='email' type='email' placeholder='Enter your email' required />

          <Label>Password</Label>
          <Input name='password' type='password' placeholder='Enter your password' required />
          
          {error && <p className='text-red-500'>{error.message}</p>}
          
          <Button type='submit' disabled={isPending}>
            {buttonLabel}
          </Button>
        </div>
      </form>
    </div>
  )
}

export default AuthForm
