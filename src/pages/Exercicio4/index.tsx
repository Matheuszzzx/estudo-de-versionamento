import Link from "next/link";
import { useState } from "react";

export default function Ex04() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [registered, setRegistered] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setRegistered(true);
  };

  return (
    <div
      style={{
        padding: 20,
        background: "#fff",
        color: "#111",
        border: "1px solid #cbd5e1",
        borderRadius: 12,
        maxWidth: 520,
        margin: "40px auto",
      }}
    >
      <h1 style={{ marginBottom: 16 }}>Exercicio 4</h1>
      <p>Formulário de cadastro simples.</p>

      <form onSubmit={handleSubmit} style={{ marginTop: 16, display: "grid", gap: 12 }}>
        <input
          placeholder="Nome"
          value={name}
          onChange={(event) => setName(event.target.value)}
          style={{ padding: "10px 12px", border: "1px solid #94a3b8", borderRadius: 8 }}
        />
        <input
          placeholder="E-mail"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          style={{ padding: "10px 12px", border: "1px solid #94a3b8", borderRadius: 8 }}
        />
        <button
          type="submit"
          style={{
            padding: "10px 14px",
            border: "1px solid #94a3b8",
            borderRadius: 8,
            cursor: "pointer",
            background: "#f8fafc",
          }}
        >
          Concluir Cadastro
        </button>
      </form>

      {registered && <p style={{ marginTop: 16 }}>Cadastro enviado para {name || "usuário"}.</p>}

      <Link
        href="/"
        style={{
          display: "inline-block",
          marginTop: 20,
          color: "#1d4ed8",
          textDecoration: "none",
          border: "1px solid #94a3b8",
          borderRadius: 8,
          padding: "8px 12px",
        }}
      >
        Voltar
      </Link>
    </div>
  );
}
