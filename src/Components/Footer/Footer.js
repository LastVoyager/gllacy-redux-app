import  './Footer.css';
import logo from '.././img/svg/logo-htmlacademy.svg';

function Footer () {
  return (
    <footer>
        <div class="container">
            <ul class="social">
              <li>
                  <a class="facebook" href="#"></a>
              </li>
              <li>
                  <a class="instagram" href="#"></a>
              </li>
              <li>
                  <a class="twitter" href="#"></a>
              </li>
            </ul>
            <ul class="all-about">
              <li>
                  <a href="#"><span><b>Для поставщиков</b></span></a>
              </li>
              <li>
                  <a href="#"><span>Наши документы</span></a>
              </li>
              <li>
                  <a href="#"><span>О производстве</span></a>
              </li>
              <li>
                  <a href="#"><span>Экологические стандарты</span></a>
              </li>
            </ul>
            <div class="developer">
              <img src={logo} width="108" height="40" alt="логотип Developer"></img>
              <p>Сделано в <a href="#"><span>HTML Academy</span></a> © 2017</p>
            </div>
        </div>
    </footer>
  );
}

export default Footer;