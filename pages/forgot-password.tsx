import Layout from '../layouts/Main';
import Link from 'next/link';
import { useForm } from "react-hook-form";
import { server } from '../utils/server'; 
import { postData } from '../utils/services'; 

type ForgotMail = {
  email: string;
}

const ForgotPassword = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async (data: ForgotMail) => {
    const res = await postData(`${server}/api/login`, {
      email: data.email,
    });

    console.log(res);
  };

  return (
    <Layout>
      <section className="form-page">
        <div className="container">
          <div className="back-button-section">
            <Link href="/products">
              <a><i className="icon-left"></i>Voltar para a loja</a>
            </Link>
          </div>

          <div className="form-block">
            <h2 className="form-block__title">Esqueceu sua senha?</h2>
            <p className="form-block__description">Digite seu e-mail ou número de telefone e recupere sua conta</p>
            
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
              <div className="form__input-row">
                <input 
                  className="form__input" 
                  placeholder="email" 
                  type="text" 
                  name="email"
                  ref={register({
                    required: true,
                    pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  })}
                />

                {errors.email && errors.email.type === 'required' && 
                  <p className="message message--error">Este campo é obrigatório</p>
                }

                {errors.email && errors.email.type === 'pattern' && 
                  <p className="message message--error">por favor escreva um e-mail válido</p>
                }
              </div>
              
              <div className="form__input-row">
                <input 
                  className="form__input" 
                  type="password" 
                  placeholder="Password" 
                  name="password"
                  ref={register({ required: true })}
                />
                {errors.password && errors.password.type === 'required' && 
                  <p className="message message--error">Este campo é obrigatório</p>
                }
              </div>

              <button type="submit" className="btn btn--rounded btn--yellow btn-submit">Redefinir senha</button>
            </form>
          </div>

        </div>
      </section>
    </Layout>
  )
}
  
export default ForgotPassword