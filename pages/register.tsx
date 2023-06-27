import Layout from '../layouts/Main';
import Link from 'next/link';

const RegisterPage = () => (
  <Layout>
    <section className="form-page">
      <div className="container">
        <div className="back-button-section">
          <Link href="/products">
            <a><i className="icon-left"></i> De volta à loja</a>
          </Link>
        </div>

        <div className="form-block">
          <h2 className="form-block__title">Crie uma conta e descubra as vantagens</h2>
          <p className="form-block__description">Crie sua conta agora e começa suas compras de forma rápida e segura.</p>
          
          <form className="form">
            <div className="form__input-row">
              <input className="form__input" placeholder="Primeiro Nome" type="text" />
            </div>
            
            <div className="form__input-row">
              <input className="form__input" placeholder="Sobrenome" type="text" />
            </div>
            
            <div className="form__input-row">
              <input className="form__input" placeholder="Email" type="text" />
            </div>
            
            <div className="form__input-row">
              <input className="form__input" type="Password" placeholder="Senha" />
            </div>

            <div className="form__info">
              <div className="checkbox-wrapper">
                <label htmlFor="check-signed-in" className={`checkbox checkbox--sm`}>
                  <input name="signed-in" type="checkbox" id="check-signed-in" />
                  <span className="checkbox__check"></span>
                    <p>Eu concordo com os Termos de Serviço e a Política de Privacidade do Google</p>
                </label>
              </div>
            </div>

            <button type="button" className="btn btn--rounded btn--yellow btn-submit">Criar Conta</button>

            <p className="form__signup-link">
              <Link href="/login">
                <a href="#">Você já possui uma conta?</a>
              </Link>
            </p>
          </form>
        </div>

      </div>
    </section>
  </Layout>
)
  
export default RegisterPage
  