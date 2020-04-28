import React from 'react'
import './App.css'

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-light static-top marine">
        <div className="container">
          <a className="navbar-brand" href="https://google.com">
            VEB KÜHLAUTOMAT
          </a>
          <a className="btn btn-outline-light btn-sm" href="/login">
            Anmelden
          </a>
        </div>
      </nav>

      <header className="masthead text-white text-center">
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-9 mx-auto">
              <h1 className="mb-5" style={{ color: 'black', marginTop: '25px' }}>
                Marktführer im Bereich Kältemittelkompressoren und Kühlsysteme für See- und Schiffslogistik
              </h1>
            </div>
            <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
              <form>
                <div className="form-row">
                  <div className="col-12 col-md-7 mb-2 mb-md-0">
                    <input type="email" className="form-control " placeholder="Ihre Email-Adresse..." />
                  </div>
                  <div className="col-12 col-md-5">
                    <button type="submit" className="btn btn-block btn-secondary">
                      Newsletter bestellen
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </header>

      <section className="showcase">
        <div className="container-fluid p-0">
          <div className="row no-gutters">
            <div
              className="col-lg-6 order-lg-2 text-white showcase-img1"
              style={{ height: '200px', margin: '20px 0' }}
            ></div>
            <div className="col-lg-6 order-lg-1 my-auto showcase-text">
              <h2>Kältemittelverdichter für alle Anwendungen</h2>
              <p className="lead mb-0">
                When you use a theme created by Start Bootstrap, you know that the theme will look great on any device,
                whether it's a phone, tablet, or desktop the page will behave responsively!
              </p>
            </div>
          </div>
          <div className="row no-gutters">
            <div
              className="col-lg-6 order-lg-2 text-white showcase-img2"
              style={{ height: '200px', margin: '20px 0' }}
            ></div>
            <div className="col-lg-6 my-auto showcase-text">
              <h2>Komplettausrüstungen für Schiffanlagen</h2>
              <p className="lead mb-0">
                Newly improved, and full of great utility classNamees, Bootstrap 4 is leading the way in mobile
                responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 4!
              </p>
            </div>
          </div>
          <div className="row no-gutters">
            <div
              className="col-lg-6 order-lg-2 text-white showcase-img3"
              style={{ height: '200px', margin: '20px 0' }}
            ></div>
            <div className="col-lg-6 order-lg-1 my-auto showcase-text">
              <h2>Engineering Services</h2>
              <p className="lead mb-0">
                Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization
                options. Out of the box, just add your content and images, and your new landing page will be ready to
                go!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials text-center bg-light mt-5">
        <div className="container ">
          <div style={{ height: '30px' }}></div>
          <h2 className="mt-3">Unsere nächsten Ausstellungen</h2>
          <div className="row ">
            <div className="col-lg-4">
              <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                <img className="img-fluid rounded-circle mb-3" src="img/testimonials-1.jpg" alt="" />
                <h5>13.-15. März</h5>
                <p className="font-weight-light mb-0">
                  Industriekongress des Schiffsbauwesens <br /> Karl-Marx-Stadt
                </p>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                <img className="img-fluid rounded-circle mb-3" src="img/testimonials-3.jpg" alt="" />
                <h5>02.-05. September</h5>
                <p className="font-weight-light mb-0">
                  Leipziger Messe <br /> Leipzig
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer  marine">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 h-100 text-center text-lg-left my-auto">
              <ul className="list-inline mb-2 mt-4">
                <li className="list-inline-item">
                  <a href="/ueberuns" style={{ color: 'white' }}>
                    Über Uns
                  </a>
                </li>
                <li className="list-inline-item">&sdot;</li>
                <li className="list-inline-item">
                  <a href="contact" style={{ color: 'white' }}>
                    Kontakt
                  </a>
                </li>
                <li className="list-inline-item">&sdot;</li>
                <li className="list-inline-item">
                  <a href="tocs" style={{ color: 'white' }}>
                    Geschäftsbedingungen
                  </a>
                </li>
                <li className="list-inline-item">&sdot;</li>
                <li className="list-inline-item">
                  <a href="dataprivacy" style={{ color: 'white' }}>
                    Datenschutz
                  </a>
                </li>
              </ul>
              <p className="small mb-4 mb-lg-0">
                &copy; VEB Kühlautomat Berlin, Segelfliegerdamm 34-45, Berlin 1034, DDR
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
