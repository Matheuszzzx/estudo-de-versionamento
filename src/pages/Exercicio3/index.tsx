import Link from "next/link";
import { useState } from "react";

export default function Ex03() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage(`Login enviado: ${email}`);
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
      <h1 style={{ marginBottom: 16 }}>Exercicio 3</h1>
      <p>Formulário de login simples.</p>

      <form onSubmit={handleSubmit} style={{ marginTop: 16, display: "grid", gap: 12 }}>
        <input
          placeholder="E-mail"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          style={{
            padding: "10px 12px",
            border: "1px solid #94a3b8",
            borderRadius: 8,
            width: "100%",
          }}
        />
        <input
          placeholder="Senha"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          style={{
            padding: "10px 12px",
            border: "1px solid #94a3b8",
            borderRadius: 8,
            width: "100%",
          }}
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
          Enviar
        </button>
      </form>

      {message && <p style={{ marginTop: 16 }}>{message}</p>}

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
