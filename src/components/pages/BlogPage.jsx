import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import post1 from '../../img/blog/post1.png';
import post2 from '../../img/blog/post2.png';
import post3 from '../../img/blog/post3.png';
import post4 from '../../img/blog/post4.png';
import post5 from '../../img/blog/post5.png';

const BlogPage = () => {
  const posts = [
    {
      id: 1,
      title: 'A Importância de Ter um Site ou Landing Page Institucional',
      summary: 'Ter um site ou landing page institucional é essencial para construir a presença online da sua marca. Descubra como isso pode aumentar sua credibilidade e atrair mais clientes.',
      image: post1,
    },
    {
      id: 2,
      title: 'A Importância de Ter o Botão do WhatsApp no Seu Site',
      summary: 'Integrar o WhatsApp no seu site facilita a comunicação com seus clientes. Saiba por que esse recurso é tão importante e como ele pode melhorar o atendimento.',
      image: post2,
    },
    {
      id: 3,
      title: 'Importância de Ter ou Não uma Agência Cuidando do Seu Negócio',
      summary: 'Entenda as vantagens de contar com uma agência para gerenciar o marketing do seu negócio e as implicações de tentar fazer tudo sozinho.',
      image: post3,
    },
    {
      id: 4,
      title: 'Google Meu Negócio: A Importância de Manter Seu Perfil Atualizado',
      summary: 'Manter o seu Google Meu Negócio atualizado pode melhorar sua visibilidade online. Aprenda como usar essa ferramenta de forma eficaz para atrair mais clientes.',
      image: post4,
    },
    {
      id: 5,
      title: 'A Importância de Ter uma Rede Social Bem Programada',
      summary: 'Ter uma rede social bem planejada e com postagens regulares é essencial para manter o engajamento e a presença de sua marca. Descubra as melhores práticas.',
      image: post5,
    },
  ];

  useEffect(() => {
    // Adiciona o script do Google Analytics
    const script1 = document.createElement("script");
    script1.async = true;
    script1.src = "https://www.googletagmanager.com/gtag/js?id=G-RHJ8R95WMZ";
    document.head.appendChild(script1);

    script1.onload = () => {
      const script2 = document.createElement("script");
      script2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-RHJ8R95WMZ');
      `;
      document.head.appendChild(script2);
    };
  }, []); // O array vazio garante que o efeito seja executado uma vez, quando o componente for montado.

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2 className='mt-5'>Blog</h2>
      {posts.map(post => (
        <div key={post.id} style={{
          display: 'flex',
          width: '80%',
          marginBottom: '20px',
          border: '1px solid #ddd',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          backgroundColor: '#fff'
        }}>
          {/* Imagem do post */}
          <img
            src={post.image}
            alt={post.title}
            style={{
              width: '200px',
              height: '200px',
              objectFit: 'cover',
              marginRight: '20px',
              borderRadius: '8px'
            }}
          />

          {/* Conteúdo do post */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <h2 style={{ fontSize: '24px', color: '#333', marginBottom: '10px' }}>{post.title}</h2>
            <p style={{ fontSize: '16px', color: '#555', marginBottom: '15px' }}>
              {post.summary}
            </p>
            <Link to={`/post/${post.id}`}>
              <button
                style={{
                  padding: '10px 20px',
                  backgroundColor: '#007BFF',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                Leia mais
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
