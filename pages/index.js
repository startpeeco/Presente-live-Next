import React from 'react'
import Head from 'next/head'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Presente live</title>
          <meta property="og:title" content="Presente live" />
        </Head>
        <div className="home-hero">
          <div className="home-hero1">
            <div className="home-container1">
              <h1 className="home-hero-heading heading1">
                Encontramos o presente perfeito!
              </h1>
              <span className="home-hero-sub-heading">
                <span>
                  Idéias para presentes
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>exclusivos e únicos</span>
              </span>
              <div className="home-btn-group">
                <button className="home-hero-button1 button">
                  <img
                    alt="image"
                    src="/logopre-400h.png"
                    className="home-image"
                  />
                  <span className="home-text03">Baixar app</span>
                </button>
                <a
                  href="https://instagram.com/presentelive"
                  className="home-hero-button2 button"
                >
                  Seguir no Insta →
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="home-details">
          <div className="home-details1">
            <div className="home-container2">
              <h2 className="home-details-heading heading2">
                Por que escolher nosso aplicativo?
              </h2>
              <span className="home-details-sub-heading">
                <span className="home-text04">
                  Nosso aplicativo oferece recomendação de presentes e sorteios
                  Cupom da shopee.
                </span>
                <br></br>
                <br></br>
                <span>
                  encontrar o presente perfeito nunca foi tão fácil. Baixe agora
                  e comece a presentear quem você ama.
                </span>
                <br></br>
              </span>
            </div>
            <img
              alt="image"
              src="/logopre-400h.png"
              className="home-details-image"
            />
          </div>
        </div>
        <div className="home-banner">
          <div className="home-banner1">
            <h1 className="home-banner-heading heading2">
              Não perca nenhum sorteio!
            </h1>
            <svg viewBox="0 0 1024 1024" className="home-icon">
              <path d="M873 148.8c-95.8-96-223.2-148.8-359-148.8-279.6 0-507.2 227.6-507.2 507.4 0 89.4 23.4 176.8 67.8 253.6l-72 263 269-70.6c74.2 40.4 157.6 61.8 242.4 61.8h0.2c0 0 0 0 0 0 279.6 0 507.4-227.6 507.4-507.4 0-135.6-52.8-263-148.6-359zM514.2 929.6v0c-75.8 0-150-20.4-214.8-58.8l-15.4-9.2-159.6 41.8 42.6-155.6-10-16c-42.4-67-64.6-144.6-64.6-224.4 0-232.6 189.2-421.8 422-421.8 112.6 0 218.6 44 298.2 123.6 79.6 79.8 123.4 185.6 123.4 298.4-0.2 232.8-189.4 422-421.8 422zM745.4 613.6c-12.6-6.4-75-37-86.6-41.2s-20-6.4-28.6 6.4c-8.4 12.6-32.8 41.2-40.2 49.8-7.4 8.4-14.8 9.6-27.4 3.2s-53.6-19.8-102-63c-37.6-33.6-63.2-75.2-70.6-87.8s-0.8-19.6 5.6-25.8c5.8-5.6 12.6-14.8 19-22.2s8.4-12.6 12.6-21.2c4.2-8.4 2.2-15.8-1-22.2s-28.6-68.8-39-94.2c-10.2-24.8-20.8-21.4-28.6-21.8-7.4-0.4-15.8-0.4-24.2-0.4s-22.2 3.2-33.8 15.8c-11.6 12.6-44.4 43.4-44.4 105.8s45.4 122.6 51.8 131.2c6.4 8.4 89.4 136.6 216.6 191.4 30.2 13 53.8 20.8 72.2 26.8 30.4 9.6 58 8.2 79.8 5 24.4-3.6 75-30.6 85.6-60.2s10.6-55 7.4-60.2c-3-5.6-11.4-8.8-24.2-15.2z"></path>
            </svg>
            <a
              href="https://www.whatsapp.com/channel/0029VaEGIEb3GJOxwiCcch2z"
              className="home-banner-button button"
            >
              Quero participar
            </a>
          </div>
        </div>
        <div className="home-footer">
          <footer className="home-footer1">
            <div className="home-container3">
              <img
                alt="image"
                src="/logopresente1%20(1)-200h.png"
                className="home-image1"
              />
              <nav className="home-nav">
                <span className="home-nav1">Quem somos</span>
                <span className="home-nav2">Sorteios</span>
                <span className="home-nav3">
                  <span>
                    Presente
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>perfeito</span>
                </span>
              </nav>
            </div>
            <div className="home-separator"></div>
            <div className="home-container4">
              <span className="home-text11">
                <span className="home-text12">
                  © 2024 Presentelive, All Rights Reserved
                </span>
                <span>.</span>
              </span>
              <div className="home-icon-group">
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="home-icon2"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
                <a
                  href="https://www.instagram.com/presentelive"
                  className="home-link"
                >
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon4"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/presentelive"
                  className="home-link1"
                >
                  <svg
                    viewBox="0 0 602.2582857142856 1024"
                    className="home-icon6"
                  >
                    <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </footer>
        </div>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .home-hero {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
            background-color: #1dc4e4;
          }
          .home-hero1 {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            min-height: auto;
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sixunits);
            justify-content: center;
            background-color: #ffffff;
          }
          .home-container1 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-hero-heading {
            color: rgb(255, 0, 102);
            max-width: 800px;
            text-align: center;
            font-family: 'Raleway';
            line-height: 1.6;
          }
          .home-hero-sub-heading {
            color: var(--dl-color-gray-black);
            font-size: 18px;
            text-align: center;
            line-height: 1.6;
          }
          .home-btn-group {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-hero-button1 {
            color: var(--dl-color-gray-white);
            display: flex;
            font-size: 18px;
            transition: 0.3s;
            font-weight: bold;
            padding-top: 1.5rem;
            border-color: var(--dl-color-primary1-blue100);
            border-width: 0px;
            padding-left: 3rem;
            border-radius: 45px;
            padding-right: 3rem;
            flex-direction: row;
            padding-bottom: 1.5rem;
            background-color: var(--dl-color-primary1-blue100);
          }
          .home-hero-button1:hover {
            color: var(--dl-color-gray-white);
            border-color: rgba(41, 20, 119, 0.9);
            background-color: rgba(41, 20, 119, 0.9);
          }
          .home-image {
            width: 122px;
            height: 96px;
            object-fit: cover;
          }
          .home-text03 {
            font-size: 22px;
            align-self: center;
          }
          .home-hero-button2 {
            color: #291477;
            transition: 0.3s;
            font-weight: bold;
            padding-top: var(--dl-space-space-unit);
            border-color: transparent;
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
            text-decoration: none;
            background-color: transparent;
          }
          .home-hero-button2:hover {
            border-color: var(--dl-color-gray-white);
          }
          .home-details {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-details1 {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-fourunits);
            justify-content: space-between;
          }
          .home-container2 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-details-heading {
            width: 80%;
            text-align: left;
            font-family: 'Raleway';
            line-height: 1.6;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-details-sub-heading {
            color: var(--dl-color-gray-800);
            font-size: 18px;
            text-align: left;
            line-height: 1.6;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-text04 {
            text-align: left;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-details-image {
            width: 400px;
            height: 400px;
            object-fit: cover;
            margin-left: var(--dl-space-space-fourunits);
            border-radius: var(--dl-radius-radius-round);
          }
          .home-banner {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: var(--dl-color-gray-black);
          }
          .home-banner1 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: var(--dl-size-size-maxwidth);
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sixunits);
            justify-content: flex-start;
            background-color: #123e85;
          }
          .home-banner-heading {
            color: var(--dl-color-gray-white);
            text-align: center;
            font-family: 'Raleway';
            line-height: 1.6;
          }
          .home-icon {
            fill: var(--dl-color-gray-white);
            width: 101px;
            height: 57px;
          }
          .home-banner-button {
            color: var(--dl-color-gray-white);
            font-size: 19px;
            transition: 0.3s;
            font-weight: 700;
            padding-top: 1.5rem;
            border-width: 0px;
            padding-left: 3rem;
            border-radius: 45px;
            padding-right: 3rem;
            padding-bottom: 1.5rem;
            text-decoration: none;
            background-color: rgb(41, 20, 119);
          }
          .home-banner-button:hover {
            border-color: rgba(41, 20, 119, 0.9);
            background-color: rgba(41, 20, 119, 0.9);
          }
          .home-footer {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: var(--dl-color-gray-black);
          }
          .home-footer1 {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fourunits);
            justify-content: space-between;
            background-color: #123e85;
          }
          .home-container3 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-image1 {
            width: 200px;
            object-fit: cover;
          }
          .home-nav {
            flex: 0 0 auto;
            display: flex;
            margin-top: 0px;
            align-items: center;
            flex-direction: row;
          }
          .home-nav1 {
            color: var(--dl-color-secondary-gray500);
            margin-left: 0px;
          }
          .home-nav2 {
            color: var(--dl-color-secondary-gray500);
            margin-left: var(--dl-space-space-unit);
          }
          .home-nav3 {
            color: var(--dl-color-secondary-gray500);
            margin-left: var(--dl-space-space-unit);
          }
          .home-separator {
            flex: 0 0 auto;
            width: 100%;
            height: 0px;
            display: flex;
            margin-top: var(--dl-space-space-twounits);
            align-items: flex-start;
            margin-left: 0px;
            border-color: var(--dl-color-gray-800);
            border-style: solid;
            border-width: 1px;
            margin-right: 0px;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: row;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .home-container4 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-text11 {
            color: var(--dl-color-gray-white);
          }
          .home-icon-group {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-icon2 {
            fill: var(--dl-color-secondary-gray500);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-twounits);
          }
          .home-link {
            display: contents;
          }
          .home-icon4 {
            fill: var(--dl-color-secondary-gray500);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .home-link1 {
            display: contents;
          }
          .home-icon6 {
            fill: var(--dl-color-secondary-gray500);
            width: 24px;
            height: 24px;
            text-decoration: none;
          }
          @media (max-width: 991px) {
            .home-hero1 {
              flex-direction: column;
            }
            .home-container1 {
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
              padding-right: 0px;
            }
            .home-hero-heading {
              text-align: center;
            }
            .home-hero-sub-heading {
              text-align: center;
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
            }
            .home-details-sub-heading {
              text-align: center;
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
            }
            .home-text04 {
              text-align: center;
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
            }
          }
          @media (max-width: 767px) {
            .home-hero1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-hero-sub-heading {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-details1 {
              align-items: center;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              flex-direction: column;
              justify-content: center;
            }
            .home-container2 {
              align-items: center;
              justify-content: flex-start;
            }
            .home-details-heading {
              text-align: center;
            }
            .home-details-sub-heading {
              text-align: center;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-text04 {
              text-align: center;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-details-image {
              margin-top: var(--dl-space-space-threeunits);
              margin-left: 0px;
            }
            .home-banner1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-icon {
              fill: var(--dl-color-gray-white);
            }
            .home-footer1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-separator {
              margin-top: var(--dl-space-space-oneandhalfunits);
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-container4 {
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
            .home-text11 {
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
          }
          @media (max-width: 479px) {
            .home-hero1 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
              background-color: #ffffff;
            }
            .home-container1 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-hero-heading {
              color: rgb(255, 0, 102);
              font-size: 2rem;
              font-family: Raleway;
              line-height: 1.6;
            }
            .home-hero-sub-heading {
              color: var(--dl-color-gray-black);
            }
            .home-btn-group {
              flex-direction: column;
            }
            .home-image {
              width: 50px;
              height: 53px;
            }
            .home-text03 {
              align-self: center;
              text-align: center;
            }
            .home-hero-button2 {
              color: rgb(41, 20, 119);
              font-size: 22px;
              margin-top: var(--dl-space-space-unit);
              font-weight: bold;
              margin-left: 0px;
              text-decoration: none;
              background-color: transparent;
            }
            .home-details-heading {
              font-family: Raleway;
              line-height: 1.6;
            }
            .home-details-sub-heading {
              color: var(--dl-color-gray-800);
              font-size: 18px;
              line-height: 1.6;
            }
            .home-details-image {
              width: 350px;
              height: 313px;
            }
            .home-banner1 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-banner-heading {
              color: #ffffff;
              font-family: Raleway;
              line-height: 1.6;
            }
            .home-icon {
              fill: #ffffff;
              width: 99px;
              height: 66px;
            }
            .home-banner-button {
              color: var(--dl-color-gray-white);
              font-size: 19px;
              font-weight: 700;
              background-color: var(--dl-color-primary1-blue100);
            }
            .home-footer1 {
              padding: var(--dl-space-space-unit);
            }
            .home-nav1 {
              color: var(--dl-color-gray-white);
            }
            .home-nav2 {
              color: var(--dl-color-gray-white);
            }
            .home-nav3 {
              color: var(--dl-color-gray-white);
            }
            .home-separator {
              margin-top: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-container4 {
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
            .home-text11 {
              color: var(--dl-color-gray-white);
              text-align: center;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-text12 {
              color: var(--dl-color-gray-white);
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
