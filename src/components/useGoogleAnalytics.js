import { useEffect } from "react";

const useGoogleAnalytics = (trackingId) => {
  useEffect(() => {
    if (!trackingId) return;

    // Verifica se o script já foi adicionado
    if (!document.querySelector(`script[src="https://www.googletagmanager.com/gtag/js?id=${trackingId}"]`)) {
      const script1 = document.createElement("script");
      script1.async = true;
      script1.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
      document.head.appendChild(script1);

      script1.onload = () => {
        const script2 = document.createElement("script");
        script2.innerHTML = `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${trackingId}');
        `;
        document.head.appendChild(script2);
      };
    }
  }, [trackingId]); // Atualiza apenas se o ID mudar
};

export default useGoogleAnalytics;
