import Layout from '../layouts/Main';
import PageIntro from '../components/page-intro';
import ProductsFeatured from '../components/products-featured';
import Footer from '../components/footer';

const IndexPage = () => {
  return (
    <Layout>
      <PageIntro />

      <section className="featured">
        <div className="container" style={{ textAlign: 'center' }}>
          <article style={{ backgroundImage: 'url(/images/featured-1.jpg)' }} className="featured-item featured-item-large">
            <div className="featured-item__content">
              <h3>Novidades já estão chegando!</h3>
              <a href="#" className="btn btn--rounded">Mostrar coleção</a>
            </div>
          </article>


        </div>
      </section>

      <section className="section">
        <div className="container">
          <header className="section__intro">
            <h4>Por que você deve escolher-nos?</h4>
          </header>

          <ul className="shop-data-items">
            <li>
              <i className="icon-shipping"></i>
              <div className="data-item__content">
                <h4>Entregas rápidas</h4>
                <p>Em estação de trem metrô e via sedex para todo o brasil.</p>
              </div>
            </li>

            <li>
              <i className="icon-payment"></i>
              <div className="data-item__content">
                <h4>Pagamentos facilitados</h4>
                <p>Todos os pagamentos são processados instantaneamente através de um protocolo de pagamento seguro.</p>
              </div>
            </li>

            <li>
              <i className="icon-cash"></i>
              <div className="data-item__content">
                <h4>Garantia de originalidade</h4>
                <p>Produtos 100% originais, efetuar todas as dúvidas no ato do pedido</p>
              </div>
            </li>

            <li>
              <i className="icon-materials"></i>
              <div className="data-item__content">
                <h4>Melhor qualidade</h4>
                <p>Projetado para durar, cada um de nossos produtos foi fabricado com os melhores materiais.</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <ProductsFeatured />
      <Footer />
    </Layout>
  )
}


export default IndexPage