import {z} from 'zod'

export const MessageSchema=z.object({
   contain:z.string()
   .min(10, {message:'Contain must be at least of 10 charaters'})
   .max(300, {message:'Content must be no longer than 300 character'})
})