import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import post1 from "../../img/blog/post1.png";
import post2 from "../../img/blog/post2.png";
import post3 from "../../img/blog/post3.png";
import post4 from "../../img/blog/post4.png";
import post5 from "../../img/blog/post5.png";

const BlogPage = () => {
  const posts = [
    {
      id: 1,
      title: "A Importância de Ter um Site ou Landing Page Institucional",
      summary: "Ter um site ou landing page institucional é essencial...",
      image: post1,
    },
    {
      id: 2,
      title: "A Importância de Ter o Botão do WhatsApp no Seu Site",
      summary: "Integrar o WhatsApp no seu site facilita a comunicação...",
      image: post2,
    },
    {
      id: 3,
      title: "Importância de Ter ou Não uma Agência Cuidando do Seu Negócio",
      summary: "Entenda as vantagens de contar com uma agência...",
      image: post3,
    },
    {
      id: 4,
      title:
        "Google Meu Negócio: A Importância de Manter Seu Perfil Atualizado",
      summary:
        "Manter o Google Meu Negócio atualizado pode melhorar sua visibilidade...",
      image: post4,
    },
    {
      id: 5,
      title: "A Importância de Ter uma Rede Social Bem Programada",
      summary: "Ter uma rede social bem planejada e com postagens regulares...",
      image: post5,
    },
  ];

  const recentNews = [
    {
      id: 1,
      title: "What to do with your Old Blog Posts?",
      image: post1,
      date: "December 12, 2019",
      path: "/noticia/noticia1",
    },
    {
      id: 2,
      title: "How to Improve Your Website’s Performance",
      image: post2,
      date: "January 15, 2020",
      path: "/noticia/noticia2",
    },
    {
      id: 3,
      title: "Understanding the Basics of Digital Marketing",
      image: post3,
      date: "February 10, 2020",
      path: "/noticia/noticia3",
    },
  ];

  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-RHJ8R95WMZ";
    document.head.appendChild(script);

    script.onload = () => {
      const script2 = document.createElement("script");
      script2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-RHJ8R95WMZ');
      `;
      document.head.appendChild(script2);
    };
  }, []);

  return (
    <div
      style={{
        display: "flex",
        padding: "20px",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      {/* Conteúdo principal */}
      <div style={{ flex: 3, paddingRight: "20px" }}>
        <h2 className="mt-5" style={{ marginBottom: "30px" }}>
          Blog
        </h2>
        {posts.map((post) => (
          <div
            key={post.id}
            style={{
              display: "flex",
              marginBottom: "20px",
              border: "1px solid #ddd",
              padding: "20px",
              borderRadius: "8px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              backgroundColor: "#fff",
              transition: "all 0.3s ease",
            }}
          >
            {/* Imagem */}
            <img
              src={post.image}
              alt={post.title}
              style={{
                width: "150px",
                height: "auto",
                objectFit: "cover",
                borderRadius: "8px",
                marginRight: "15px",
              }}
            />

            {/* Conteúdo do post */}
            <div style={{ display: "flex", flexDirection: "column" }}>
              <h2 style={{ fontSize: "20px", color: "#333" }}>{post.title}</h2>
              <p style={{ fontSize: "14px", color: "#555" }}>{post.summary}</p>
              <Link to={`/post/${post.id}`}>
                <button
                  style={{
                    padding: "10px",
                    backgroundColor: "#007BFF",
                    color: "#fff",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                    transition: "background-color 0.3s ease",
                    marginTop: "10px",
                  }}
                >
                  Leia mais
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Sidebar */}
      <div
        style={{
          flex: 1,
          paddingLeft: "20px",
          borderLeft: "3px solid #007BFF",
          backgroundColor: "#f9f9f9",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h3
          style={{
            marginBottom: "15px",
            fontSize: "20px",
            color: "#333",
            borderBottom: "2px solid #007BFF",
            paddingBottom: "5px",
          }}
        >
          Categorias
        </h3>
        <ul
          style={{
            listStyle: "none",
            padding: "0",
          }}
        >
          {[
            { path: "/categoria/sites", label: "Sites e Landing Pages" },
            { path: "/categoria/whatsapp", label: "WhatsApp no Seu Site" },
            { path: "/categoria/marketing", label: "Marketing Digital" },
            {
              path: "/categoria/google-meu-negocio",
              label: "Google Meu Negócio",
            },
          ].map((item, index) => (
            <li key={index} style={{ marginBottom: "10px" }}>
              <Link
                to={item.path}
                style={{
                  textDecoration: "none",
                  fontSize: "16px",
                  fontWeight: "bold",
                  color: "transparent",
                  background:
                    "-webkit-linear-gradient(0deg, #444444, #444444 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#0056b3")}
                onMouseLeave={(e) => (e.target.style.color = "transparent")}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Recent News Section */}
        <h3
          style={{
            marginBottom: "15px",
            fontSize: "20px",
            color: "#333",
            borderBottom: "2px solid #007BFF",
            paddingBottom: "5px",
          }}
        >
          Recent News
        </h3>
        {recentNews.map((news) => (
          <div
            key={news.id}
            style={{
              position: "relative",
              padding: "0px 0px 18px 90px",
              marginBottom: "24px",
              minHeight: "100px",
              borderBottom: "1px solid #e2e2e7",
            }}
          >
            <figure className="post-thumb">
              <Link to={news.path}>
                <img src={news.image} alt={news.title} style={{ width: "60px", height: "60px", objectFit: "cover", borderRadius: "4px", position: "absolute", left: "0", top: "50%", transform: "translateY(-50%)" }} />
              </Link>
            </figure>
            <h6>
              <Link to={news.path} style={{ fontSize: "16px", fontWeight: "bold", color: "#333" }}>
                {news.title}
              </Link>
            </h6>
            <span className="post-date" style={{ fontSize: "14px", color: "#777" }}>
              {news.date}
            </span>
          </div>
        ))}

        {/* Tag Section */}
        <div className="sidebar-widget sidebar-tags">
          <div className="sidebar-title" style={{ marginBottom: "15px" }}>
            <h3 style={{ fontSize: "20px", color: "#333", position: "relative", paddingBottom: "5px" }}>
              Tag
              <span
                style={{
                  position: "absolute",
                  content: "''",
                  width: "40px",
                  height: "3px",
                  left: "0px",
                  bottom: "0px",
                  backgroundColor: "#007BFF",
                }}
              ></span>
            </h3>
          </div>
          <div className="widget-content">
            <ul className="tag-list" style={{ listStyle: "none", padding: "0", margin: "0" }}>
              <li style={{ display: "inline-block", marginRight: "10px" }}>
                <Link
                  to="/tag/marketing"
                  style={{
                    textDecoration: "none",
                    padding: "5px 15px",
                    backgroundColor: "#007BFF",
                    color: "#fff",
                    borderRadius: "50px",
                    fontSize: "14px",
                  }}
                >
                  Marketing
                </Link>
              </li>
              <li style={{ display: "inline-block", marginRight: "10px" }}>
                <Link
                  to="/tag/design"
                  style={{
                    textDecoration: "none",
                    padding: "5px 15px",
                    backgroundColor: "#007BFF",
                    color: "#fff",
                    borderRadius: "50px",
                    fontSize: "14px",
                  }}
                >
                  Design
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
