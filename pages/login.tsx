import Layout from '../layouts/Main';
import Link from 'next/link';
import { useForm } from "react-hook-form";
import { login_me } from 'Services/auth';
import Cookies from 'js-cookie';
import { FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUserData } from 'store/reducers/user';
import { useRouter } from 'next/router';

const LoginPage = () => {
  const Router = useRouter()
  const dispatch = useDispatch()
  const { register, errors, setError } = useForm();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {

    event.preventDefault();
    if (!formData.email) {
      setError('email', {
        message: 'O campo de e-mail é obrigatório',
        type: 'required'
      })
      return;
    }
    if (!formData.password) {
      setError('password', {
        message: 'O campo de e-mail é obrigatório',
        type: 'required'
      })
      return;
    }

    console.log(formData);

    const res = await login_me(formData);
    console.log(res);

    if (res.success) {
      Cookies.set('token', res?.finalData?.token);
      localStorage.setItem('user', JSON.stringify(res?.finalData?.user));
      const userData = localStorage.getItem('user');
      const userDataString = typeof userData === 'string' ? userData : '';
      dispatch(setUserData(JSON.parse(userDataString)));
      console.log(userDataString);

      // if (res?.finalData?.user?.role === 'admin') {
      //   Router.push('/Dashboard')
      // }
      // else {
        Router.push('/')
      // }
    }
  };

  return (
    <Layout>
      <section className="form-page">
        <div className="container">
          <div className="back-button-section">
            <Link href="/products">
              <a><i className="icon-left"></i> De volta à loja</a>
            </Link>
          </div>

          <div className="form-block">
            <h2 className="form-block__title">Entrar</h2>
            <p className="form-block__description">Entre na sua conta para conseguir efetuar suas compras de forma rápida.</p>

            <form className="form" onSubmit={onSubmit}>
              <div className="form__input-row">
                <input
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="form__input"
                  type="password"
                  placeholder="Password"
                  name="password"
                // ref={register({ required: true })}
                />
                {errors.password && errors.password.type === 'required' &&
                  <p className="message message--error">Este campo é obrigatório</p>
                }
              </div>

              <div className="form__info">
                <div className="checkbox-wrapper">
                  <label htmlFor="check-signed-in" className={`checkbox checkbox--sm`}>
                    <input
                      type="checkbox"
                      name="keepSigned"
                      id="check-signed-in"
                      ref={register({ required: false })}
                    />
                    <span className="checkbox__check"></span>
                    <p>Mantenha-me conectado</p>
                  </label>
                </div>
                <a href="/forgot-password" className="form__info__forgot-password">Esqueceu sua senha?</a>
              </div>

              <button type="submit" className="btn btn--rounded btn--yellow btn-submit">Entrar</button>

              <p className="form__signup-link">Ainda não possui uma conta?<a href="/register">Criar conta</a></p>
            </form>
          </div>

        </div>
      </section>
    </Layout>
  )
}

export default LoginPage
