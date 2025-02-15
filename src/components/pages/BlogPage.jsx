import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import post1 from "../../img/blog/post1.png";
import post2 from "../../img/blog/post2.png";
import post3 from "../../img/blog/post3.png";
import post4 from "../../img/blog/post4.png";
import post5 from "../../img/blog/post5.png";

const categories = [
  { id: "sites", name: "Sites e Landing Pages" },
  { id: "whatsapp", name: "WhatsApp no Seu Site" },
  { id: "marketing", name: "Marketing Digital" },
  { id: "google-meu-negocio", name: "Google Meu Negócio" },
];

const posts = [
  { id: 1, title: "A Importância de Ter um Site ou Landing Page", summary: "Ter um site institucional é essencial...", image: post1, category: "sites", tags: ["Landing Page", "Negócios", "Web Design"] },
  { id: 2, title: "A Importância de Ter o Botão do WhatsApp", summary: "Integrar o WhatsApp facilita a comunicação...", image: post2, category: "whatsapp", tags: ["WhatsApp", "Atendimento", "Conversões"] },
  { id: 3, title: "Importância de Ter uma Agência", summary: "Vantagens de contar com uma agência...", image: post3, category: "marketing", tags: ["Marketing", "Agências", "Estratégia"] },
  { id: 4, title: "Google Meu Negócio: Mantenha Atualizado", summary: "Melhore sua visibilidade...", image: post4, category: "google-meu-negocio", tags: ["Google", "SEO", "Empresas"] },
  { id: 5, title: "Importância de uma Rede Social Bem Programada", summary: "Planejamento e postagens regulares...", image: post5, category: "marketing", tags: ["Redes Sociais", "Planejamento", "Engajamento"] },
];

const allTags = Array.from(new Set(posts.flatMap(post => post.tags)));

const BlogPage = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-RHJ8R95WMZ";
    document.head.appendChild(script);
    script.onload = () => {
      const script2 = document.createElement("script");
      script2.innerHTML = `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-RHJ8R95WMZ');`;
      document.head.appendChild(script2);
    };
  }, []);

  return (
    <div style={{ display: "flex", flexWrap: "wrap", padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
      <div style={{ flex: "1 1 100%", maxWidth: "100%", marginBottom: "20px" }}>
        <h2 style={{ textAlign: "center" }}>Blog</h2>
      </div>
      <div style={{ flex: "3 1 60%", paddingRight: "20px" }}>
        {posts.map(post => (
          <div key={post.id} style={{ display: "flex", flexWrap: "wrap", alignItems: "center", marginBottom: "20px", border: "1px solid #ddd", padding: "20px", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", backgroundColor: "#fff" }}>
            <img src={post.image} alt={post.title} style={{ width: "150px", height: "auto", objectFit: "cover", borderRadius: "8px", marginRight: "15px" }} />
            <div style={{ flex: "1 1 100%" }}>
              <h2 style={{ fontSize: "20px", color: "#333" }}>{post.title}</h2>
              <p style={{ fontSize: "14px", color: "#555" }}>{post.summary}</p>
              <div style={{ marginTop: "10px" }}>{post.tags.map((tag, index) => (
                <span key={index} style={{ display: "inline-block", backgroundColor: "#007BFF", color: "#fff", fontSize: "12px", padding: "5px 10px", marginRight: "5px", borderRadius: "4px" }}>#{tag}</span>
              ))}</div>
              <Link to={`/post/${post.id}`}>
                <button style={{ padding: "10px", backgroundColor: "#007BFF", color: "#fff", border: "none", borderRadius: "4px", cursor: "pointer", marginTop: "10px" }}>Leia mais</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div style={{ flex: "1 1 35%", paddingLeft: "20px", backgroundColor: "#f9f9f9", padding: "20px", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", marginTop: "20px" }}>
        <h3 style={{ borderBottom: "2px solid #007BFF", paddingBottom: "5px" }}>Categorias</h3>
        <ul style={{ listStyle: "none", padding: "0" }}>{categories.map(category => (
          <li key={category.id} style={{ marginBottom: "10px" }}>
            <Link to={`/categoria/${category.id}`} style={{ textDecoration: "none", fontWeight: "bold", color: "#007BFF" }}>{category.name}</Link>
          </li>
        ))}</ul>
        <h3 style={{ borderBottom: "2px solid #007BFF", paddingBottom: "5px", marginTop: "20px" }}>Tags</h3>
        <div>{allTags.map((tag, index) => (
          <span key={index} style={{ display: "inline-block", backgroundColor: "#007BFF", color: "#fff", fontSize: "12px", padding: "5px 10px", marginRight: "5px", borderRadius: "4px", marginBottom: "5px" }}>#{tag}</span>
        ))}</div>
      </div>
    </div>
  );
};

export default BlogPage;
