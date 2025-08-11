// pages/index.js
import React from 'react';
import Head from 'next/head';

const projects = [
  {
    name: 'Webhook Sender',
    description: 'Anlatmaya gerek yok sadece webhook a mesaj gonderir',
    link: 'https://webhook-bomber.vercel.app/'
  },
  {
    name: '8-E',
    description: 'Sınıfımızı en iyi şekilde tanıtmaya çalıştımm',
    link: 'https://8-e-v2.vercel.app'
  },
  {
    name: 'Bu gün ne yesek?',
    description: 'Okuldaki ne yiyecegiz kavgasini cozmek icin.',
    link: 'https://ne-yesek-beta.vercel.app/'
  },
  {
    name: 'Dini Game',
    description: 'eee? milyon tane bug var düzeltmem lazim ama acıkçası üşeniyorum',
    link: 'https://dino-game-tan.vercel.app/'
  },
  {
    name: 'Refleks Testi',
    description: 'reflekslerini test etmek istersen diye.',
    link: 'https://reaksiyon-ivory.vercel.app/'
  },
];

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Emoç</title>
        <meta name="description" content="Aga neden yaptim bilmiyom" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <h1>Merhaba, ben Emir</h1>
        <p>Telefonu Seciyom beabi</p>
      </header>

      <section className="about">
        <h2>Hakkımda</h2>
        <p>
          Ben bir ögrenciyim, web sitesi yapıyorum.
        </p>
        <p>
        Ben lua,Css,Html,Javascript kullanıyorum.
        </p>
      </section>

      <section className="projects">
        <h2>Projeler</h2>
        <ul>
          {projects.map((project, index) => (
            <li key={index}>
              <div className="project-header">
                <h3>{project.name}</h3>
              </div>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                Projeyi incele
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="skills">
        <h2>Yetenekler</h2>
        <div className="skills-container">
          <div className="skill-category">
            <h3>Frontend</h3>
            <ul>
              <li>React.js</li>
              <li>Next.js</li>
              <li>JavaScript/Typescript</li>
              <li>HTML5 & CSS3</li>
              <li>Responsive Tasarım</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Backend</h3>
            <ul>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MongoDB</li>
              <li>RESTful API</li>
              <li>GraphQL</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Araçlar</h3>
            <ul>
              <li>Git & GitHub</li>
              <li>Docker</li>
              <li>CI/CD</li>
              <li>Jest & Testing</li>
              <li>Figma</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="contact">
        <h2>İletişim</h2>
        <p>
        Bugları belirtmek, fikir vermek veya bana yardîm etmek isterseniz Mailden ulaşabilir siniz.(Cevap vermicem ama neyse)
        </p>
        <div className="contact-buttons">
          <a href="mailto:dincemirata@gmail.com" className="contact-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            E-posta Gönder
          </a>
         </div>
      </section>

      <footer>
        <div className="social-links">
          <a href="https://github.com/emirontop" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
         </div>
        <p>© {new Date().getFullYear()} Emir. Tüm hakları saklıdır.</p>
      </footer>
    </div>
  );
}
