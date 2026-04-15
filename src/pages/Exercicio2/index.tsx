import Link from "next/link";
import { useState } from "react";

export default function Ex02() {
  const [count, setCount] = useState(0);

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
      <h1 style={{ marginBottom: 16 }}>Exercicio 2</h1>
      <p>Contador simples com botões e borda.</p>

      <div
        style={{
          marginTop: 16,
          display: "flex",
          gap: 8,
          alignItems: "center",
          border: "1px solid #94a3b8",
          borderRadius: 10,
          padding: 14,
        }}
      >
        <button
          type="button"
          onClick={() => setCount((value) => value - 1)}
          style={{
            padding: "10px 14px",
            border: "1px solid #94a3b8",
            borderRadius: 8,
            cursor: "pointer",
            background: "#f8fafc",
          }}
        >
          -
        </button>
        <strong style={{ fontSize: 24 }}>{count}</strong>
        <button
          type="button"
          onClick={() => setCount((value) => value + 1)}
          style={{
            padding: "10px 14px",
            border: "1px solid #94a3b8",
            borderRadius: 8,
            cursor: "pointer",
            background: "#f8fafc",
          }}
        >
          +
        </button>
      </div>

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
