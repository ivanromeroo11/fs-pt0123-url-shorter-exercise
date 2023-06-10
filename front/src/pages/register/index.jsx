import { useForm } from 'react-hook-form';
import { templates } from '../login';


const Register = () => {

    const { register, formState, handleSubmit } = useForm();

    const handleForm = (data) => {
        console.info("> form data: ", data);
    };

    const { errors } = templates.login;

    return (
        <section>
            <h1>Create account</h1>
            <p>(Unprotected)</p>
            <form onSubmit={handleSubmit(handleForm)}>
                <label htmlFor="email">email</label><br />
                <input id="email" placeholder="user@user.com" {...register("email", { required: true })} />
                <p>{formState.errors && errors[formState.errors?.email?.type]}</p>

                <label htmlFor="username">username</label><br />
                <input id="username" placeholder="user" {...register("username", { required: true })} />
                <p>{formState.errors && errors[formState.errors?.username?.type]}</p>

                <label htmlFor="password">password</label><br />
                <input id="password" type="password" placeholder="******" {...register("password", { required: true, minLength: 4 })} />
                <p>{formState.errors && errors[formState.errors?.password?.type]}</p>

                <input type="submit" />
            </form>

        </section>
    )
}
export default Register;