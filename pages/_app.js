import '../node_modules/bootstrap/scss/bootstrap.scss';
import '../styles/var.css';
import '../styles/blocks.css';
import Head from 'next/head';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head data-pg-collapsed>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="description" content="" />
        <meta name="author" content="" />
        <title>Ticketr - Home</title>
        <nav
          className="bg-dark navbar navbar-expand-lg navbar-light py-lg-1 text-uppercase"
          data-pg-collapsed
        >
          <div className="container">
            {' '}
            <a
              className="fw-bold navbar-brand text-capitalize text-primary"
              href="/"
            >
              Ticketr
            </a>
            <button
              className="navbar-toggler bg-primary"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown-3"
              aria-controls="navbarNavDropdown-3"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              {' '}
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarNavDropdown-3">
              <ul className="mb-2 mb-lg-0 ms-auto navbar-nav">
                <li className="nav-item">
                  {' '}
                  <a
                    className="active nav-link px-lg-3 py-lg-4 text-capitalize text-primary"
                    aria-current="page"
                    href="/#"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  {' '}
                  <a
                    className="nav-link px-lg-3 py-lg-4 text-capitalize text-primary"
                    href="/#about"
                  >
                    About
                  </a>
                </li>
                <li className="nav-item">
                  {' '}
                  <a
                    className="nav-link px-lg-3 py-lg-4 text-capitalize text-primary"
                    href="/#abouttheteam"
                  >
                    About the Team
                  </a>
                </li>
                <li className="nav-item">
                  {' '}
                  <a
                    className="nav-link px-lg-3 py-lg-4 text-capitalize text-primary"
                    href="/#features"
                  >
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  {' '}
                  <a
                    className="nav-link px-lg-3 py-lg-4 text-capitalize text-primary"
                    href="/#contactus"
                  >
                    Contact
                  </a>
                </li>
              </ul>
              <div className="ms-lg-3">
                {' '}
                <a
                  className="btn btn-primary pb-2 pe-4 ps-4 pt-2 text-capitalize"
                  href="#"
                >
                  Sign up
                </a>
              </div>
            </div>
          </div>
        </nav>
        <Script src="../node_modules/bootstrap/dist/js/bootstrap.min.js" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
