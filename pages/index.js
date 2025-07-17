// pages/index.js
import React from 'react';
import Head from 'next/head';

const projects = [
  {
    name: 'E-Ticaret Platformu',
    description: 'React ve Node.js kullanılarak geliştirilmiş tam özellikli bir e-ticaret uygulaması. Kullanıcı kimlik doğrulama, ürün yönetimi ve ödeme entegrasyonları içerir.',
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
  },
  {
    name: 'Yapay Zeka Destekli Chatbot',
    description: 'Müşteri hizmetleri için geliştirilmiş yapay zeka destekli chatbot. Doğal dil işleme kullanarak kullanıcı sorularına cevap verir.',
    link: 'https://link4.com'
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
        <h1>Emir'in Portfolyo Sitesine Hoş Geldiniz!</h1>
        <p>Modern web teknolojileri ve yazılım geliştirme konusundaki projelerimi keşfedin</p>
      </header>

      <section className="about">
        <h2>Hakkımda</h2>
        <p>
          Merhaba, ben Emir. Full-stack web geliştirme konusunda uzmanlaşmış bir yazılım mühendisiyim. 
          React, Node.js ve modern JavaScript ekosistemi üzerine yoğunlaşıyorum. 
          Kullanıcı deneyimini ön planda tutan, temiz kod prensiplerine uygun ve ölçeklenebilir uygulamalar geliştirmeye tutkuluyum.
        </p>
        <p>
          Boş zamanlarımda açık kaynak projelere katkıda bulunuyor, yeni teknolojiler öğreniyor ve 
          yazılım topluluklarına mentorluk yapıyorum. Her zaman öğrenmeye ve kendimi geliştirmeye açığım.
        </p>
      </section>

      <section className="projects">
        <h2>Projelerim</h2>
        <ul>
          {projects.map((project, index) => (
            <li key={index}>
              <div className="project-card">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  Projeyi İncele
                </a>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="skills">
        <h2>Yeteneklerim</h2>
        <div className="skills-container">
          <div className="skill-category">
            <h3>Frontend</h3>
            <ul>
              <li>React.js</li>
              <li>Next.js</li>
              <li>JavaScript (ES6+)</li>
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
              <li>Firebase</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Araçlar & Diğer</h3>
            <ul>
              <li>Git & GitHub</li>
              <li>Docker</li>
              <li>CI/CD</li>
              <li>Figma</li>
              <li>Agile Metodolojiler</li>
            </ul>
          </div>
        </div>
      </section>

      <footer>
        <p>© 2025 Emir. Tüm hakları saklıdır. | <a href="mailto:emir@example.com" style={{color: '#4cc9f0'}}>emir@example.com</a></p>
      </footer>
    </div>
  );
}