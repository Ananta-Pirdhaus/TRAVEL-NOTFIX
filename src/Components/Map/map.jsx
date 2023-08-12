import React from "react";
import './Map.css'


export default function Map() {
  return (
    <section id="contact" className="contact">
      <div className="row">
        <iframe
          title="Peta Lokasi Blue Fire Banyuwangi"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63222.365038969285!2d112.53764774863282!3d-7.957776399999977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78827dfb328057%3A0xf1c27b74bd7e73b9!2sUniversitas%20Muhammadiyah%20Malang%2C%20Kampus%20II!5e0!3m2!1sid!2sid!4v1686911418089!5m2!1sid!2sid"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="map"
        ></iframe>
      </div>
    </section>
  );
}
