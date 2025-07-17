// pages/index.js
import Image from 'next/image';
import profilePic from '../public/images/profile.jpg';

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
      {/* Hero Section */}
      <section className="hero">
        <Image src={profilePic} alt="Emir'in Fotoğrafı" />
        <div>
          <h1>Merhaba, Ben Emir</h1>
          <p>Yazılım Geliştiricisi | Web Tasarımcı</p>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <h2>Hakkımda</h2>
        <p>
          Merhaba, ben Emir. Yazılım geliştirme konusunda tutkuluyum ve çeşitli projelerde deneyim kazandım. Her zaman yeni teknolojileri öğrenmeye ve becerilerimi geliştirmeye açığım.
        </p>
      </section>

      {/* Projects Section */}
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

      {/* Footer */}
      <footer>
        <p>© 2025 Emir. Tüm hakları saklıdır.</p>
      </footer>
    </div>
  );
}