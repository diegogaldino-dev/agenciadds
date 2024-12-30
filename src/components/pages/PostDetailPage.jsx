import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import post1 from '../../img/blog/materia/1.png'
import post2 from '../../img/blog/materia/2.png'
import post3 from '../../img/blog/materia/3.png'
import post4 from '../../img/blog/materia/4.png'
import post5 from '../../img/blog/materia/5.png'

const posts = [
  {
    id: 1,
    title: "A Importância de Ter um Site ou Landing Page Institucional",
    summary: "Ter um site ou landing page institucional é essencial para criar presença online e aumentar a credibilidade da sua empresa.",
    image: post1,
    content: `
      Nos dias de hoje, ter uma presença online é essencial para qualquer tipo de negócio. Um site ou uma landing page institucional é um dos primeiros passos para criar essa presença. Ele funciona como uma vitrine digital onde você pode apresentar sua empresa, missão, valores, produtos ou serviços e entrar em contato diretamente com seus clientes.

      Por que isso é importante?

      1. **Credibilidade**: Um site bem feito transmite confiança e profissionalismo.
      2. **Visibilidade**: Estar na internet aumenta significativamente a visibilidade da sua marca.
      3. **Marketing Digital**: Ter um site é a base para todas as estratégias de marketing digital.

      Como ter uma boa landing page institucional?

      - Design atrativo e intuitivo.
      - Conteúdo claro e objetivo.
      - Formulários de contato visíveis.
    `
  },
  {
    id: 2,
    title: "A Importância de Ter o Botão do WhatsApp no Seu Site",
    summary: "Integrar um botão de WhatsApp no seu site melhora o atendimento ao cliente e aumenta as conversões.",
    image: post2,
    content: `
      O WhatsApp se tornou uma das ferramentas mais poderosas para a comunicação direta com clientes. Integrar um botão de WhatsApp no seu site é uma maneira eficaz de melhorar o atendimento ao cliente, aumentar a conversão de visitantes em clientes e criar um canal de comunicação rápido e acessível.

      Por que incluir o WhatsApp no seu site?

      1. **Atendimento instantâneo**: O WhatsApp permite que você forneça atendimento quase imediato.
      2. **Facilidade de uso**: Todos estão familiarizados com o WhatsApp, então não há necessidade de aprender a usar um sistema novo.
      3. **Aumento de vendas**: Muitas vezes, as dúvidas podem ser resolvidas em tempo real e resultar em uma venda.

      Como colocar o botão no seu site?

      - Adicione um botão visível em todas as páginas, especialmente nas de produto ou serviço.
      - Use ferramentas como o WhatsApp Business API ou plugins específicos para facilitar a integração.
    `
  },
  {
    id: 3,
    title: "Importância de Ter ou Não uma Agência Cuidando do Seu Negócio",
    summary: "Contratar uma agência pode ser uma boa opção para quem precisa de uma estratégia de marketing digital sólida e bem planejada.",
    image: post3,
    content: `
      Ter uma presença online forte é crucial para o sucesso de qualquer empresa. Muitos negócios optam por contratar uma agência para cuidar de sua estratégia de marketing e presença digital, mas será que isso é realmente necessário?

      Vantagens de contratar uma agência:

      1. **Experiência especializada**: Profissionais com experiência em várias áreas, como SEO, design, e marketing de conteúdo.
      2. **Economia de tempo**: Focar no core business da sua empresa enquanto uma equipe cuida da parte digital.
      3. **Visão estratégica**: Agências têm uma visão mais objetiva e estratégica do mercado.

      Desvantagens de não ter uma agência:

      - **Falta de expertise**: A falta de conhecimento técnico pode prejudicar sua presença digital.
      - **Custo de erros**: Erros em campanhas publicitárias podem custar caro.
    `
  },
  {
    id: 4,
    title: "Google Meu Negócio: A Importância de Manter Seu Perfil Atualizado",
    summary: "Manter seu perfil do Google Meu Negócio atualizado ajuda a aumentar a visibilidade e credibilidade da sua empresa.",
    image: post4,
    content: `
      O Google Meu Negócio (GMB) é uma ferramenta gratuita que permite que empresas gerenciem sua presença online no Google, incluindo a pesquisa e o Google Maps.

      Por que manter seu perfil atualizado?

      1. **Aparência nos resultados locais**: O GMB ajuda sua empresa a aparecer nas buscas locais.
      2. **Credibilidade**: Um perfil completo transmite mais confiança aos consumidores.
      3. **Interação com clientes**: O GMB permite responder a avaliações, responder perguntas e até postar novidades.

      Dicas para otimizar seu perfil:

      - **Imagens de qualidade**: Inclua fotos da sua empresa, produtos ou serviços.
      - **Responda às avaliações**: A interação é essencial para construir um bom relacionamento com seus clientes.
    `
  },
  {
    id: 5,
    title: "A Importância de Ter uma Rede Social Bem Programada",
    summary: "Uma rede social bem planejada ajuda a aumentar o engajamento e atrair novos clientes.",
    image: post5,
    content: `
      As redes sociais são uma das maneiras mais eficazes de se comunicar com seu público-alvo. Ter uma presença bem planejada e ativa pode transformar a forma como sua marca é percebida.

      Por que uma rede social bem programada é essencial?

      1. **Engajamento constante**: Postagens regulares mantém seu público engajado.
      2. **Atração de novos clientes**: A estratégia certa pode alcançar novos clientes através de anúncios e conteúdo direcionado.
      3. **Marketing de conteúdo**: Compartilhar conteúdo relevante educa seus clientes e melhora a percepção da sua marca.

      Dicas para uma rede social bem programada:

      - **Calendário de postagens**: Tenha um plano de conteúdo bem definido.
      - **Diversifique o conteúdo**: Varie entre posts informativos, promocionais e interativos.
    `
  }
];

function PostDetailPage() {
  const { id } = useParams();
  const post = posts.find(p => p.id === parseInt(id));

  // Adicionando o código de rastreamento do Google Analytics
  useEffect(() => {
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
  }, []);

  if (!post) {
    return <h2>Post não encontrado</h2>;
  }

  const contentParts = post.content.split('\n').map((part, index) => {
    return <p key={index} style={{ fontSize: '1.2em', lineHeight: '1.8', color: '#555', marginBottom: '20px' }}>{part}</p>;
  });

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2.5em', marginBottom: '20px', color: '#333' }}>{post.title}</h1>
      <img 
        src={post.image} 
        alt={post.title} 
        style={{ 
          width: '100%', 
          height: 'auto', 
          marginBottom: '20px', 
          borderRadius: '8px' 
        }} 
      />
      {contentParts}
    </div>
  );
}

export default PostDetailPage;
