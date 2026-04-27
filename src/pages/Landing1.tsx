import heroImg from '../assets/hero-image.png'
import '../App.css'

function Landing1() {
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
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="title-badge">NUEVO MODELO DE NEGOCIO</div>
        <h1 className="main-title">
          TALLER DROPSHIPPING<br/>
          <span className="highlight">Vende en VENEZUELA</span><br/>
          sin INVENTARIO.
        </h1>
        
        <div className="hero-content">
          <div className="hero-image-container">
            <div className="hero-image-glow"></div>
            <img src={heroImg} alt="Dropshipping E-commerce" className="hero-image" />
          </div>
          <a href="#comprar" className="btn btn-primary">COMPRAR ENTRADA</a>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing-section">
        <div className="glass-panel price-card">
          <div className="price-label">Valor de la entrada</div>
          <div className="price-value">$15</div>
          <div className="price-note">A TASA BCV</div>
        </div>
      </section>

      {/* Cities Section */}
      <section className="cities-section">
        <h2 className="section-title">GIRA NACIONAL E INTERNACIONAL</h2>
        <div className="cities-grid">
          {cities.map((city, index) => (
            <div key={index} className={`city-card ${city.status === 'active' ? 'active' : ''}`}>
              <h3 className="city-name">{city.name}</h3>
              <div className={`city-status ${city.status === 'active' ? 'status-active' : 'status-blocked'}`}>
                {city.info}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section glass-panel">
        <div className="benefits-intro">
          <h2>ESTO ES PARA TI SI:</h2>
          <p>
            Dropshipping: el nuevo modelo de negocio en Venezuela. Ya cientos de emprendedores y marcas están vendiendo sin salir de casa.
          </p>
        </div>
        <div className="benefits-list">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-item">
              <div className="benefit-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <div className="benefit-text">{benefit}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Syllabus Section */}
      <section className="syllabus-section">
        <h2 className="section-title">TEMARIO DEL TALLER</h2>
        <div className="syllabus-grid">
          {syllabus.map((item, index) => (
            <div key={index} className="syllabus-item">
              <div className="syllabus-number">0{index + 1}</div>
              <div className="syllabus-content">{item}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Footer */}
      <section id="comprar" className="cta-footer glass-panel">
        <h2>CUPOS LIMITADOS! ASEGURA TU CUPO HOY MISMO</h2>
        <a href="#" className="btn btn-primary">QUIERO ASEGURAR MI CUPO</a>
      </section>
    </div>
  )
}

export default Landing1
