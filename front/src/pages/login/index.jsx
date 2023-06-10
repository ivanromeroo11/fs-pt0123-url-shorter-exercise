import { useForm } from 'react-hook-form';

export const templates = {
    login: {
        email: {
            validation: {
                required: true,
            },
        },
        username: {
            validation: {
                required: true,
            },
        },
        password: {
            validation: {
                required: true,
                minLength: 4,
            },
        },
        errors: {
            required: 'This field is mandatory',
            minLength: '4 length at least is required',
        }

    }
}


const Login = () => {

    const { register, formState, handleSubmit } = useForm();

    const handleForm = (data) => {
        console.info("> form data: ", data);
    };

    const { errors } = templates.login


    return (
        <section>
            <h1>Login</h1>
            <p>(Protected route)</p>
            <form onSubmit={handleSubmit(handleForm)}>
                <label htmlFor="email">email</label><br />
                <input id="email" placeholder="user@user.com"  {...register("email", { required: true })} />
                <p>{formState.errors && errors[formState.errors?.email?.type]}</p>

                <label htmlFor="password">password</label><br />
                <input id="password" type="password" placeholder="******"  {...register("password", { required: true, minLength: 4 })} />
                <p>{formState.errors && errors[formState.errors?.password?.type]}</p>

                <input type="submit" />
            </form>

        </section>
    )
}
export default Login;