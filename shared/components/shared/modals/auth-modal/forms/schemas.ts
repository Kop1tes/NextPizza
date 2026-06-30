import { z } from "zod";

export const passwordSchema = z.string().min(4, { message: 'Введите корректный пароль' });

export const formLoginSchema = z.object({
    email: z.string().email({ message: 'ВВедите корректную почту' }),
    password: passwordSchema,
});

export const formRegisterSchema = formLoginSchema.merge(
    z.object({
        fullName: z.string().min(2, { message: 'Введите имя и фамилия' }),
        confirmPassword: passwordSchema,
    }),
)
    .refine((data) => data.password === data.confirmPassword, {
        message: 'Пароль не совпадает',
        path: ['confirmPassword'],
    });

export type TFormLoginValues = z.infer<typeof formLoginSchema>;
export type TFormRegisterValues = z.infer<typeof formRegisterSchema>;