// pages/index.js
import React from 'react';
import Head from 'next/head';

const projects = [
  {
    name: 'E-Ticaret Platformu',
    description: 'React ve Node.js ile geliştirilmiş tam özellikli e-ticaret uygulaması. Kullanıcı kimlik doğrulama, ürün yönetimi ve ödeme entegrasyonları içerir.',
    link: 'https://link1.com'
  },
  {
    name: 'Hava Durumu Uygulaması',
    description: 'Gerçek zamanlı hava durumu verilerini sunan mobil uyumlu web uygulaması. Kullanıcılar konumlarına göre hava tahminlerini görüntüleyebilir.',
    link: 'https://link2.com'
  },
  {
    name: 'Görev Yönetim Sistemi',
    description: 'Takımlar için geliştirilmiş görev takip uygulaması. Kullanıcılar görev oluşturabilir, atayabilir ve ilerlemeyi takip edebilir.',
    link: 'https://link3.com'
  }
];

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Emir | Yazılım Geliştirici</title>
        <meta name="description" content="Emir'in kişisel web sitesi ve portfolyosu" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <h1>Merhaba, ben Emir</h1>
        <p>Full-stack geliştirici ve modern web teknolojileri tutkunu</p>
      </header>

      <section className="about">
        <h2>Hakkımda</h2>
        <p>
          Ben bir yazılım mühendisiyim, özellikle modern web teknolojileri ve kullanıcı odaklı uygulamalar geliştirme konusunda uzmanlaştım. 
          Temiz kod, etkili çözümler ve sezgisel kullanıcı arayüzleri oluşturmaya tutkuluyum.
        </p>
        <p>
          Çalışmalarımda React, Node.js ve modern JavaScript ekosistemine odaklanıyorum. 
          Her zaman yeni teknolojiler öğrenmeye ve becerilerimi geliştirmeye açığım.
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
          Yeni projeler, işbirlikleri veya sadece merhaba demek için benimle iletişime geçebilirsiniz.
        </p>
        <div className="contact-buttons">
          <a href="mailto:emir@example.com" className="contact-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            E-posta Gönder
          </a>
          <a href="https://linkedin.com/in/emir" target="_blank" rel="noopener noreferrer" className="contact-btn outline">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
            LinkedIn
          </a>
        </div>
      </section>

      <footer>
        <div className="social-links">
          <a href="https://github.com/emir" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
          <a href="https://twitter.com/emir" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
            </svg>
          </a>
          <a href="https://instagram.com/emir" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
        </div>
        <p>© {new Date().getFullYear()} Emir. Tüm hakları saklıdır.</p>
      </footer>
    </div>
  );
}