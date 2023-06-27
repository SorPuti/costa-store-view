import ProductsCarousel from './carousel';
import useSwr from 'swr';

const ProductsFeatured = () => {
  const fetcher = (url: string) => fetch(url).then((res) => res.json()).then(json => json.data);
  const { data } = useSwr('/api/product/products', fetcher);

  return (
    <section className="section section-products-featured">
      <div className="container">
        <header className="section-products-featured__header">
          <h3>Selecionado apenas para você</h3>
          <a href="/products" className="btn btn--rounded btn--border">Mostre tudo</a>
        </header>

        <ProductsCarousel products={data} />
      </div>
    </section>
  )
};

export default ProductsFeatured