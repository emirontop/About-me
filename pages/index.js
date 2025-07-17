// pages/index.js
import React from 'react';

const projects = [
  {
    name: 'Proje 1',
    description: 'Bu proje hakkında kısa açıklama.',
    link: 'https://link1.com'
  },
  {
    name: 'Proje 2',
    description: 'Bu proje hakkında kısa açıklama.',
    link: 'https://link2.com'
  },
  {
    name: 'Proje 3',
    description: 'Bu proje hakkında kısa açıklama.',
    link: 'https://link3.com'
  }
];

export default function Home() {
  return (
    <div className="container">
      <header>
        <h1>Emir'in Web Sitesine Hoş Geldiniz!</h1>
        <p>Benim hakkımda daha fazla bilgi edinmek için aşağıya göz atabilirsiniz.</p>
      </header>

      <section className="about">
        <h2>Hakkımda</h2>
        <p>
          Merhaba, ben Emir. Yazılım geliştirme konusunda tutkuluyum ve çeşitli projelerde deneyim kazandım. Her zaman yeni teknolojileri öğrenmeye ve becerilerimi geliştirmeye açığım.
        </p>
      </section>

      <section className="projects">
        <h2>Projelerim</h2>
        <ul>
          {projects.map((project, index) => (
            <li key={index}>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                Projeyi Görüntüle
              </a>
            </li>
          ))}
        </ul>
      </section>

      <footer>
        <p>© 2025 Emir. Tüm hakları saklıdır.</p>
      </footer>
    </div>
  );
}