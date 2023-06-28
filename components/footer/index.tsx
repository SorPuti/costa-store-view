
const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top">
          <div className="site-footer__description">
            <h6>Costa Store</h6>
            <p>Site desenvolvido por DevChamps Ltda</p>
            <ul className="site-footer__social-networks">
              <li><a href="https://www.facebook.com/people/Costa_store011/100063486133132/"><i className="icon-facebook"></i></a></li>
              <li><a href="https://www.instagram.com/costa_store011/?igshid=Y2I2MzMwZWM3ZA%3D%3D"><i className="icon-instagram"></i></a></li>
            </ul>
          </div>

          <div className="site-footer__links">
            <ul>
              <li>EMPRESA</li>
              <li><a href="#">Sobre nós</a></li>
              <li><a href="#">Contato</a></li>
            </ul>
            <ul>
              <li>JURÍDICO</li>
              <li><a href="#">Termos de uso</a></li>
              <li><a href="#">Política de Privacidade</a></li>
              <li><a href="#">Política de Cookies</a></li>
            </ul>
            <ul>
              <li>Contato</li>
              <li><a href="https://www.instagram.com/costa_store011/?igshid=Y2I2MzMwZWM3ZA%3D%3D">@costa_store011</a></li>
              <li><a href="https://api.whatsapp.com/send/?phone=5511975042880">+55 11 97504-2880</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="site-footer__bottom">
        <div className="container">
          <p>DevChamps Ltda © 2023. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
};


export default Footer