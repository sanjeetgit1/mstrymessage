import {z} from 'zod';

export const usernamevalidation=z
.string()
.min(2,"Username must be atleast 2 characters")
.max(20,"Username must be no more than 20 characters")
.regex(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,"Username must not contain special character")

export const signUnSchema=z.object({
    username:usernamevalidation,
    email:z.string().email({
        message:'Invalid email address'
    }),
    password:z.string().min(6,{message:"password must be at least 6 characters"})
})