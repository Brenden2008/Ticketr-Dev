import Head from 'next/head';
import Script from 'next/script';

export default function Home() {
  return (
    <div>
      <body className="bg-dark">
        <div className="container">
          <section className="bg-dark pb-5 pt-5 text-center">
            <div className="container pb-5 pt-5">
              <div className="pb-5 pt-5 row">
                <div className="col-lg-9 col-xl-8 ms-auto me-auto pb-5 pt-5">
                  <h1 className="display-4 fw-bold mb-3 text-white">
                    Add booking to your events in minutes using Ticketr
                  </h1>
                  <p className="fw-light lead mb-4 text-white">
                    Ticketr is a free booking and registration solution for
                    events of all sizes.
                  </p>{' '}
                  <a href="#" className="btn btn-primary pe-3 ps-3" >
                    Get It Now
                  </a>
                </div>
              </div>
              <section className="pb-5 pt-5">
                <div className="bg-dark pb-5 pt-5">
                  <div className="align-items-center mb-3 row">
                    <div className="col-lg-12">
                      <h2 className="h6 mb-1 text-white" id="features">
                        &nbsp;Features
                      </h2>
                      <h3 className="fw-bold h2 mb-1 text-white">
                        Ticketr is a cost-effective, flexible solution for event
                        registration
                      </h3>
                      <p className="fw-light text-white">
                        Ticketr is built from the ground up to make the event
                        and booking process as simple and painless as possible.
                      </p>
                    </div>
                    <div className="col-lg-auto ms-auto"></div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6 col-xl-3 pb-3 pt-3">
                      <div className="btn-secondary pb-5 ps-4 pe-4 pt-5 shadow">
                        <h4 className="fw-bold h5">
                          Simple Event Registration Pages
                        </h4>
                        <p>
                          Ticketr includes free event pages for a simple booking
                          experience.
                        </p>
                      </div>
                    </div>
                    <div className="col-sm-6 col-xl-3 pb-3 pt-3">
                      <div className="btn-secondary mb-sm-n5 mt-sm-5 pb-5 ps-4 pe-4 pt-5 shadow">
                        <h4 className="fw-bold h5">Booking Process</h4>
                        <p>
                          Ticketr includes a pain free process for booking
                          tickets and events.
                        </p>
                      </div>
                    </div>
                    <div className="col-sm-6 col-xl-3 pb-3 pt-3">
                      <div className="btn-secondary pb-5 ps-4 pe-4 pt-5 shadow">
                        <h4 className="fw-bold h5">Calenders</h4>
                        <p>
                          Ticketr has a built-in calender to manage event dates
                          for your event and events you are attending.
                        </p>
                      </div>
                    </div>
                    <div className="col-sm-6 col-xl-3 pb-3 pt-3">
                      <div className="btn-secondary mt-sm-5 pb-5 ps-4 pe-4 pt-5 shadow">
                        <h4 className="fw-bold h5">
                          Accept credit cards for your event(coming soon)
                        </h4>
                        <p>
                          The user will have the ability to charge their guests
                          online.
                        </p>
                      </div>
                    </div>
                  </div>
                  <section className="pb-5 pt-5" id="abouttheteam">
                    <div className="container">
                      <div className="justify-content-center row">
                        <div className="col-lg-4 col-md-6 py-3">
                          <div className="bg-primary p-3">
                            <img
                              className="img-fluid mb-3 w-100"
                              alt="..."
                              width="350"
                              height="400"
                              src="https://cdn.statically.io/img/techpro864.pw/IMG_0084.png"
                            />
                            <div>
                              <h3 className="fw-bold h4 mb-1">
                                Brenden Stahle
                              </h3>
                              <h4 className="fw-light h6 mb-3">
                                Back-end Developer
                              </h4>
                              <div className="d-inline-flex flex-wrap">
                                <a
                                  href="https://github.com/brenden2008"
                                  aria-label="Github"
                                  className="lh-1 p-1 text-black"
                                >
                                  Github-@Brenden2008
                                </a>{' '}
                                <br />
                                <a
                                  href="mailto:brenden@ticketr.xyz"
                                  aria-label="Email"
                                  className="lh-1 p-1 text-black"
                                >
                                  brenden@ticketr.xyz
                                </a>{' '}
                                <br />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 py-3">
                          <div className="bg-primary p-3">
                            <img
                              src="https://cdn.statically.io/img/techpro864.pw/IMG_0086.png"
                              className="img-fluid mb-3 w-100"
                              alt="..."
                              width="350"
                              height="400"
                            />
                            <div>
                              <h3 className="fw-bold h4 mb-1">Max Olcott</h3>
                              <h4 className="fw-light h6 mb-3">UI Developer</h4>
                              <div className="d-inline-flex flex-wrap">
                                <a
                                  href="https://github.com/molcott"
                                  aria-label="Github"
                                  className="lh-1 p-1 text-black"
                                >
                                  Github-@Molcott
                                </a>{' '}
                                <a
                                  href="mailto:max@ticketr.xyz"
                                  aria-label="Email"
                                  className="lh-1 p-1 text-black"
                                >
                                  max@ticketr.xyz
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 py-3">
                          <div className="bg-primary p-3">
                            <img
                              src="https://cdn.statically.io/img/techpro864.pw/IMG_0077.png"
                              className="img-fluid mb-3 w-100"
                              alt="..."
                              width="350"
                              height="400"
                            />
                            <div>
                              <h3 className="fw-bold h4 mb-1">Ashton Vinson</h3>
                              <h4 className="fw-light h6 mb-3">
                                Quality Control
                              </h4>
                              <div className="d-inline-flex flex-wrap">
                                {' '}
                                <u>Github-None</u>
                                <a
                                  href="mailto:ashton@ticketr.xyz"
                                  aria-label="Email"
                                  className="lh-1 p-1 text-black"
                                >
                                  ashton@ticketr.xyz
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-center text-white"></p>
                    <h6 className="text-white">About The Team</h6>
                    <p className="text-center text-white">
                      We are a team of middle schoolers comprised of 7th &amp;
                      8th graders put together through TSA to develop this site.
                    </p>
                  </section>
                </div>
              </section>
              <h2 className="text-center text-primary" id="about">
                About Ticketr
              </h2>
              <p className="text-white">
                Ticketr is a free open-source utility for booking and
                registration made easy. Ticketr was originally built for the
                2022 Oklahoma TSA Competition but now is generally available for
                use. Ticketr was built for the purpose of having a good, cheap
                alternative to Ticketmaster.
              </p>
              <section className="pb-5 pt-5">
                <div className="container pb-4 pt-4">
                  <div className="align-items-center row">
                    <div className="col-lg-12 py-3">
                      <h2
                        className="fw-bold h4 mb-4 text-uppercase text-white"
                        id="contactus"
                      >
                        Contact Us
                      </h2>
                      <p className="mb-4 text-white">
                        Any questions just contact us using email or text.
                      </p>
                      <div className="mb-4 g-0 row">
                        <div className="col-auto"></div>
                        <div className="col"></div>
                      </div>
                      <div className="mb-4 g-0 row">
                        <div className="col-auto">
                          <svg
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            height="24"
                            width="24"
                            className="me-3 text-primary"
                          >
                            <path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm17 4.238l-7.928 7.1L4 7.216V19h16V7.238zM4.511 5l7.55 6.662L19.502 5H4.511z"></path>
                          </svg>
                        </div>
                        <div className="col">
                          {' '}
                          <a
                            href="mailto:info@ticketr.xyz"
                            className="text-white"
                          >
                            hello@ticketr.xyz
                          </a>{' '}
                          <br />{' '}
                          <a
                            href="mailto:help@ticketr.xyz"
                            className="text-white"
                          >
                            help@ticketr.xyz
                          </a>
                        </div>
                      </div>
                      <div className="mb-4 g-0 row">
                        <div className="col-auto">
                          <svg
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            height="24"
                            width="24"
                            className="me-3 text-primary"
                          >
                            <path d="M9.366 10.682a10.556 10.556 0 0 0 3.952 3.952l.884-1.238a1 1 0 0 1 1.294-.296 11.422 11.422 0 0 0 4.583 1.364 1 1 0 0 1 .921.997v4.462a1 1 0 0 1-.898.995c-.53.055-1.064.082-1.602.082C9.94 21 3 14.06 3 5.5c0-.538.027-1.072.082-1.602A1 1 0 0 1 4.077 3h4.462a1 1 0 0 1 .997.921A11.422 11.422 0 0 0 10.9 8.504a1 1 0 0 1-.296 1.294l-1.238.884zm-2.522-.657l1.9-1.357A13.41 13.41 0 0 1 7.647 5H5.01c-.006.166-.009.333-.009.5C5 12.956 11.044 19 18.5 19c.167 0 .334-.003.5-.01v-2.637a13.41 13.41 0 0 1-3.668-1.097l-1.357 1.9a12.442 12.442 0 0 1-1.588-.75l-.058-.033a12.556 12.556 0 0 1-4.702-4.702l-.033-.058a12.442 12.442 0 0 1-.75-1.588z"></path>
                          </svg>
                        </div>
                        <div className="col">
                          {' '}
                          <a href="tel:+0 123-456-789" className="text-white">
                            +1 (918) 419-1313
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </section>
          <section className="pb-5 pt-5 text-center" data-pg-collapsed>
            <div className="container  pb-5 pt-5">
              <div className="align-items-center row text-white">
                <div className="col-lg-7 ms-auto me-auto">
                  <h2 className="fw-bold mb-4">Ready to start?</h2>
                  <h2 className="fw-bold mb-4">
                    Start booking with Ticketr in five minutes for free.
                  </h2>
                  <a href="#" className="btn btn-primary">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </section>
          <footer className="pb-3 pt-3 small text-primary">
            <div className="container">
              <div className="align-items-center row">
                <div className="col-md pb-2 pt-2">
                  <p className="mb-0">
                    &copy; 2022. All Rights Reserved - Ticketr
                  </p>
                </div>
                <div className="col-md-auto pb-2 pt-2 text-pri text-primary">
                  {' '}
                  <a href="#" className="text-primary">
                    Privacy Policy
                  </a>{' '}
                  | <a href="#">Terms of Use</a>
                </div>
              </div>
            </div>
          </footer>
        </div>
        <Script src="../assets/js/popper.min.js"></Script>
        <Script src="../node_modules/bootstrap/dist/js/bootstrap.min.js"></Script>
      </body>
    </div>
  );
}
