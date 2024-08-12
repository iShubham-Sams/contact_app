import z from "zod";
export const loginUserZodSchema = z.object({
    email: z
        .string({
            required_error: "Email is required",
            invalid_type_error: "Please send valid email",
            message: "Email or user name must be require"
        })
        .email(),
    password: z.string({
        required_error: "Password required",

    }).min(8, { message: 'Password must contain 8 character' }),
});
export type LoginUser = z.infer<typeof loginUserZodSchema>