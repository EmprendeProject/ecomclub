import titleImg from '../assets/titulo taller dropshipping.png'
import ecomDropiImg from '../assets/ecom + dropi.png'
import ponentesImg from '../assets/ponentes.png'
import manosImg from '../assets/manos.png'
import EventCarousel from '../components/EventCarousel'
import './Landing2.css'

function Landing2() {
  const cities = [
    { name: 'Caracas', status: 'active', info: '9 DE MAYO - TORRE MOVILNET' },
    { name: 'Valencia', status: 'active', info: '16 DE MAYO' },
    { name: 'Cúcuta', status: 'active', info: '23 DE MAYO' },
    { name: 'Barquisimeto', status: 'blocked', info: 'PRÓXIMAMENTE' },
    { name: 'Barcelona', status: 'blocked', info: 'PRÓXIMAMENTE' },
    { name: 'Maracaibo', status: 'blocked', info: 'PRÓXIMAMENTE' },
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
        <section className="l2-hero" style={{ paddingBottom: '20px' }}>
          <div className="l2-hero-text">
            <div className="l2-badge">
              <span>✦</span> GIRA NACIONAL E INTERNACIONAL
            </div>
            <img
              src={titleImg}
              alt="Taller Dropshipping Vende en Venezuela sin Inventario"
              style={{ width: '100%', maxWidth: '700px', marginBottom: '24px', filter: 'drop-shadow(0 0 20px rgba(157, 78, 221, 0.4))' }}
            />
            <img
              src={manosImg}
              alt="Manos"
              style={{ width: '100%', maxWidth: '800px', marginBottom: '24px', borderRadius: '16px', filter: 'drop-shadow(0 0 20px rgba(157, 78, 221, 0.2))' }}
            />
            <a href="https://wa.me/584220282663?text=Hola!%20Quiero%20comprar%20mi%20entrada%20para%20el%20taller%20de%20dropshipping" target="_blank" rel="noopener noreferrer" className="l2-btn" style={{ marginBottom: '16px' }}>COMPRAR ENTRADA - 15$</a>
            <div style={{ display: 'inline-block', padding: '10px 20px', background: 'rgba(157, 78, 221, 0.1)', borderRadius: '8px', border: '1px solid rgba(157, 78, 221, 0.3)', color: '#e0e0e0', fontSize: '15px', fontWeight: '600', letterSpacing: '1px', textTransform: 'uppercase' }}>
              VALOR DE LA ENTRADA: 15$ BCV
            </div>
            <img
              src={ecomDropiImg}
              alt="Ecom + Dropi"
              style={{ width: '100%', maxWidth: '280px', marginTop: '24px' }}
            />
          </div>
        </section>



        {/* Ponentes Section */}
        <section style={{ textAlign: 'center', margin: '10px 0 40px 0' }}>
          <img
            src={ponentesImg}
            alt="Ponentes"
            style={{ width: '100%', maxWidth: '800px', borderRadius: '16px', filter: 'drop-shadow(0 0 20px rgba(157, 78, 221, 0.2))' }}
          />
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

        {/* Callout Section */}
        <section className="l2-section" style={{ margin: '50px 0', textAlign: 'center' }}>
          <h2 className="l2-section-title" style={{ maxWidth: '800px', margin: '0 auto 20px auto', lineHeight: '1.4', fontSize: 'clamp(28px, 4vw, 40px)' }}>
            ¿Estás listo para montarte en la nueva <span className="l2-highlight">OLA</span> de la economía digital en Venezuela?
          </h2>
          <img
            src="https://i0.wp.com/passporterapp.com/es/blog/wp-content/uploads/2023/06/que-ver-en-Caracas.jpg?w=1621&ssl=1"
            alt="Caracas"
            style={{ width: '100%', maxWidth: '900px', borderRadius: '24px', boxShadow: '0 0 40px rgba(157, 78, 221, 0.3)' }}
          />
        </section>

        {/* Benefits Section */}
        <section className="l2-section">
          <div style={{ fontSize: '80px', marginBottom: '10px', lineHeight: 1, filter: 'drop-shadow(0 0 20px rgba(255,255,255,0.2))' }}>🫵🏼</div>
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
          <h2 className="l2-section-title" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px' }}>
            <span style={{ fontSize: '50px', filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.2))' }}>📝</span> TEMARIO
          </h2>
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
          <a href="https://wa.me/584220282663?text=Hola!%20Quiero%20comprar%20mi%20entrada%20para%20el%20taller%20de%20dropshipping" target="_blank" rel="noopener noreferrer" className="l2-btn" style={{ fontSize: '18px', padding: '20px 50px' }}>QUIERO ASEGURAR MI CUPO</a>
        </section>

        {/* Footer Carousel */}
        <section className="l2-section" style={{ marginTop: '40px', marginBottom: '60px' }}>
          <EventCarousel />
        </section>

      </div>
    </div>
  )
}

export default Landing2
