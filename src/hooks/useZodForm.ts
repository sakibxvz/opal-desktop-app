import { zodResolver } from '@hookform/resolvers/zod';
import { DefaultValues, useForm } from 'react-hook-form';
import z from 'zod';

export const useZodForm = <T extends z.ZodType<any>>(
	schema: T,
	defaultValues: DefaultValues<z.TypeOf<T>> | undefined
) => {
	const {
		register,
		formState: { errors },
		handleSubmit,
		watch,
		reset,
	} = useForm<z.infer<T>>({
		resolver: zodResolver(schema),
		defaultValues,
	});

	return { register, errors, handleSubmit, watch, reset };
};
