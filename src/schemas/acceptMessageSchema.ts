import {z} from 'zod'

export const AccepMessageSchema=z.object({
    acceptMessage:z.boolean(),
})