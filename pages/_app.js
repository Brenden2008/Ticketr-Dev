import '../node_modules/bootstrap/scss/bootstrap.scss';
import '../styles/var.css';
import Head from 'next/head';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="description" content="" />
        <meta name="author" content="" />
        <title>Ticketr - Home</title>
        <nav className="bg-dark navbar navbar-expand-lg py-lg-1 text-uppercase text-primary">
          <div className="container">
            {' '}
            <a
              className="fw-normal navbar-brand text-capitalize text-primary"
              href="#"
            >
              Ticketr
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown-3"
              href="#navbarNavDropdown-3"
              aria-controls="navbarNavDropdown-3"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              {' '}
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown-3">
              <ul className="mb-2 mb-lg-0 ms-auto navbar-nav">
                <li className="nav-item">
                  {' '}
                  <a
                    className="active nav-link px-lg-3 py-lg-4 text-capitalize text-primary"
                    aria-current="page"
                    href="#"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  {' '}
                  <a
                    className="nav-link px-lg-3 py-lg-4 text-capitalize text-primary"
                    href="#"
                  >
                    About
                  </a>
                </li>
                <li className="nav-item">
                  {' '}
                  <a
                    className="nav-link px-lg-3 py-lg-4 text-capitalize text-primary"
                    href="#"
                  >
                    Features
                  </a>
                </li>
                <li className="nav-item dropdown"></li>
                <li className="nav-item">
                  {' '}
                  <a
                    className="nav-link px-lg-3 py-lg-4 text-capitalize text-primary"
                    href="#"
                  >
                    Contact
                  </a>
                </li>
              </ul>
              <div className="ms-lg-3">
                <a
                  className="btn btn-primary pe-3 ps-3 text-capitalize"
                  href="#"
                >
                  Sign up
                </a>
              </div>
            </div>
          </div>
        </nav>
        <Script src="../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
