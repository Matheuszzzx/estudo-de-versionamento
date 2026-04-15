import Link from "next/link";
import { useState } from "react";

export default function Ex01() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    /* ESTA DIV É O "CONTAINER PAI" QUE OCUPA A TELA TODA */
    <div
      style={{
        backgroundColor: darkMode ? "#111111" : "#ffffff", // Cor que preenche tudo
        color: darkMode ? "#eeeeee" : "#111111",         // Cor do texto global
        minHeight: "100vh",                              // Altura total da tela
        width: "100%",                                   // Largura total da tela
        transition: "background-color 0.3s ease",        // Transição suave
        margin: 0,
        padding: "40px 20px",
        display: "flex",                                 // Ajuda a centralizar o conteúdo
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* ESTA DIV É O "CARD" COM O CONTEÚDO (LIMITADO A 520px) */}
      <div
        style={{
          padding: 30,
          border: "1px solid #cbd5e1",
          borderRadius: 12,
          maxWidth: 520,
          width: "100%", // Para ser responsivo em celulares
          backgroundColor: darkMode ? "#222222" : "#f8fafc",
          textAlign: "center",
        }}
      >
        <h1 style={{ marginBottom: 16 }}>Exercício 1</h1>
        
        <button
          type="button"
          onClick={() => setDarkMode(!darkMode)}
          style={{
            padding: "12px 20px",
            cursor: "pointer",
            border: "1px solid #94a3b8",
            borderRadius: 8,
            fontWeight: "bold",
            background: darkMode ? "#444" : "#e2e8f0",
            color: darkMode ? "#fff" : "#000",
            transition: "0.2s",
          }}
        >
          {darkMode ? "Ativar Modo Claro " : "Ativar Modo Escuro "}
        </button>

        <p style={{ marginTop: 20, lineHeight: 1.6 }}>
          Clique no botão acima para alternar entre o modo claro e escuro.
        </p>

        <Link
          href="/"
          style={{
            display: "inline-block",
            marginTop: 20,
            color: darkMode ? "#7dd3fc" : "#1d4ed8",
            textDecoration: "none",
            fontSize: "14px",
            fontWeight: "500"
          }}
        >
          ← Voltar
        </Link>
      </div>
    </div>
  );
}