import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <body className="bg-dark">
        <section className="bg-dark pb-5 pt-5 text-center text-secondary">
          <div className="container pb-5 pt-5">
            <div className="pb-5 pt-5 row">
              <div className="col-lg-9 col-xl-8 ms-auto me-auto pb-5 pt-5">
                <h1 className="display-4 fw-bold mb-3 text-white">
                  Add booking to your events in minutes using Ticketr
                </h1>
                <p className="fw-light lead mb-4">
                  Ticketr is a free, open source booking and registration for
                  events of all sizes.
                </p>
                <a href="#" className="btn btn-primary">
                  Get It Now
                </a>
              </div>
            </div>
          </div>
          <section className="pb-5 pt-5">
            <div className="container pb-5 pt-5">
              <div className="align-items-center mb-3 row">
                <div className="col-lg-8 ms-auto me-auto text-center">
                  <h2 className="h6 mb-1 text-primary">Features</h2>
                  <h3 className="fw-bold h2 mb-1">
                    Ticketr is a cost-effective, flexible solution for event
                    registration
                  </h3>
                  <p className="fw-light">
                    Ticketr is built form the ground up to make the event and
                    booking process as simple and painless as possible.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6 col-xl-3 pb-3 pt-3">
                  <div className="pb-3 pt-3 text-center">
                    <h4 className="fw-bold h5">
                      Simple Event Registration Pages
                    </h4>
                    <p className="text-secondary">
                      Ticketr includes a free event man
                    </p>
                  </div>
                </div>
                <div className="col-sm-6 col-xl-3 pb-3 pt-3">
                  <div className="pb-3 pt-3 text-center">
                    <h4 className="fw-bold h5">Product Design</h4>
                    <p className="text-secondary">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nullam vitae congue tortor.
                    </p>
                  </div>
                </div>
                <div className="col-sm-6 col-xl-3 pb-3 pt-3">
                  <div className="pb-3 pt-3 text-center">
                    <h4 className="fw-bold h5">UI/UX Research</h4>
                    <p className="text-secondary">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nullam vitae congue tortor.
                    </p>
                  </div>
                </div>
                <div className="col-sm-6 col-xl-3 pb-3 pt-3">
                  <div className="pb-3 pt-3 text-center">
                    <h4 className="fw-bold h5">Digital Marketing</h4>
                    <p className="text-secondary">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nullam vitae congue tortor.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
        <div className="container"></div>
        <footer className="pb-3 pt-3 small text-primary">
          <div className="container">
            <div className="align-items-center row">
              <div className="col-md pb-2 pt-2">
                <p className="mb-0">
                  &copy; 2002 - 2020. All Rights Reserved - Company Name
                </p>
              </div>
              <div className="col-md-auto pb-2 pt-2">
                <a href="#">Privacy Policy</a> | <a href="#">Terms of Use</a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </div>
  );
}
