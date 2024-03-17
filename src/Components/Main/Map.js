import { useMemo } from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import './Map.css';

import pin from '.././img/svg/pin.svg';
import shadow from '.././img/shadow.png';

function Map  (props) {
  return (
    <section className="map">
      {/* <iframe 
          title='map'
          className="map" 
          id="map" 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2536.8399091071087!2d30.780254615157574!3d50.51854549033778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4d976f550c911%3A0x9b039ae5e1a9ceea!2sKyivska%20St%2C%20249%D0%91%2C%20Brovary%2C%20Kyivs&#39;ka%20oblast%2C%2007400!5e0!3m2!1sen!2sua!4v1636889164885!5m2!1sen!2sua" 
          width="600" 
          height="450" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy">
      </iframe>
      <img className="mark" src={pin} alt="Локация значок"></img>
      <img className="shadow" src={shadow} alt="#"></img> */}
      <div className="address-info">
          <p>Адрес главного офиса<br/>и оффлайн магазина:<br/><b>ул. Большая Конюшенная<br/>19/18, Санкт-Петербург</b></p>
          <p>Для заказов по телефону:<br/><b>8 812 450-25-25</b><br/>(с 10 до 20 ежедневно)</p>
          <button className="form-button" onClick={props.onOpen}>Форма обратной связи</button>
      </div>
    </section>
  );
}

export default Map;