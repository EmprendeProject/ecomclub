import heroImg from '../assets/hero-tech.png'
import titleImg from '../assets/titulo taller dropshipping.png'
import ecomDropiImg from '../assets/ecom + dropi.png'
import EventCarousel from '../components/EventCarousel'
import './Landing2.css'

function Landing2() {
  const cities = [
    { name: 'Caracas', status: 'active', info: '25 DE MAYO - HOTEL EUROBUILDING' },
    { name: 'Valencia', status: 'blocked', info: 'PRONTO MÁS INFO' },
    { name: 'Cúcuta', status: 'blocked', info: 'PRONTO MÁS INFO' },
    { name: 'Barquisimeto', status: 'blocked', info: 'PRONTO MÁS INFO' },
    { name: 'Barcelona, Anzoátegui', status: 'blocked', info: 'PRONTO MÁS INFO' },
  ];

  const benefits = [
    "No tienes dinero para invertir en inventario y quieres vender.",
    "Quieres vender productos por internet desde casa.",
    "Eres distribuidor de productos físicos y quieres aumentar tus ventas con un nuevo canal de venta.",
    "Quieres un negocio que funcione 24/7 sin pagar local físico ni empleados.",
    "Deseas emprender pero no sabes qué productos se venden hoy en el mercado venezolano.",
    "Quieres aprender a vender por redes sociales de forma profesional y no solo por estados de WhatsApp."
  ];

  const syllabus = [
    "Cómo hacer dropshipping en Venezuela: metodologías, paso a paso y estructuras rentables.",
    "Encuentra PRODUCTOS GANADORES.",
    "CONTENIDO QUE SÍ FACTURA.",
    "Cómo hacer publicidad y ADS en Meta para triplicar tus ventas.",
    "Automatiza tu negocio sin fallar en el intento.",
    "LOGÍSTICA Y FULLFILMENT, Pago contraentrega y seguimiento de pedidos."
  ];

  return (
    <div className="landing2">
      <div className="l2-star" style={{ top: '10%', left: '15%' }}></div>
      <div className="l2-star" style={{ top: '30%', right: '10%', animationDelay: '1s' }}></div>
      <div className="l2-star" style={{ top: '60%', left: '5%', animationDelay: '0.5s' }}></div>

      <div className="landing2-container">

        {/* Hero Section */}
        <section className="l2-hero">
          <div className="l2-hero-text">
            <div className="l2-badge">
              <span>✦</span> GIRA NACIONAL
            </div>
            <img
              src={titleImg}
              alt="Taller Dropshipping Vende en Venezuela sin Inventario"
              style={{ width: '100%', maxWidth: '700px', marginBottom: '24px', filter: 'drop-shadow(0 0 20px rgba(157, 78, 221, 0.4))' }}
            />
            <EventCarousel />
            <a href="#comprar2" className="l2-btn">COMPRAR ENTRADA</a>
            <img
              src={ecomDropiImg}
              alt="Ecom + Dropi"
              style={{ width: '100%', maxWidth: '280px', marginTop: '24px' }}
            />
          </div>
        </section>

        {/* Pricing Section */}
        <section className="l2-pricing l2-card">
          <div style={{ color: 'var(--l2-secondary)', fontWeight: 600, marginBottom: '10px' }}>VALOR DE LA ENTRADA</div>
          <div className="l2-price-val">$15</div>
          <div style={{ color: '#aaa' }}>A TASA BCV</div>
        </section>

        {/* Cities Section */}
        <section className="l2-section">
          <h2 className="l2-section-title">GIRA NACIONAL E INTERNACIONAL</h2>
          <div className="l2-grid">
            {cities.map((city, index) => (
              <div key={index} className={`l2-grid-item city-card ${city.status === 'active' ? 'active' : ''}`}>
                <h3 className="l2-grid-title">{city.name}</h3>
                <div className={`l2-grid-status ${city.status === 'active' ? 'active' : ''}`}>
                  {city.info}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="l2-section">
          <h2 className="l2-section-title">ESTO ES PARA TI SI:</h2>
          <div className="l2-benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="l2-list-item">
                <div className="l2-list-icon">✦</div>
                <div style={{ fontSize: '15px', color: '#ccc', lineHeight: '1.5' }}>{benefit}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Syllabus Section */}
        <section className="l2-section">
          <h2 className="l2-section-title">TEMARIO</h2>
          <div className="l2-grid">
            {syllabus.map((item, index) => (
              <div key={index} className="l2-grid-item">
                <div className="l2-syllabus-num">0{index + 1}</div>
                <div style={{ fontSize: '16px', color: '#e0e0e0', marginTop: '10px' }}>{item}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Footer */}
        <section id="comprar2" className="l2-card l2-cta">
          <h2 style={{ fontSize: '36px', marginBottom: '30px' }}>CUPOS LIMITADOS! ASEGURA TU CUPO HOY MISMO</h2>
          <a href="#" className="l2-btn" style={{ fontSize: '18px', padding: '20px 50px' }}>QUIERO ASEGURAR MI CUPO</a>
        </section>

      </div>
    </div>
  )
}

export default Landing2
