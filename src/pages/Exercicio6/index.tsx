import Link from "next/link";
import { useMemo, useState } from "react";

const users = [
  { id: 1, name: "Ana" },
  { id: 2, name: "Bruno" },
  { id: 3, name: "Carla" },
  { id: 4, name: "Diego" },
];

export default function Ex06() {
  const [search, setSearch] = useState("");

  const filtered = useMemo(
    () => users.filter((user) => user.name.toLowerCase().includes(search.toLowerCase())),
    [search]
  );

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
      <h1 style={{ marginBottom: 16 }}>Exercicio 6</h1>
      <p>Buscador simples com filtro.</p>

      <input
        placeholder="Buscar nome"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        style={{
          width: "100%",
          padding: "10px 12px",
          border: "1px solid #94a3b8",
          borderRadius: 8,
          marginTop: 16,
        }}
      />

      <div style={{ marginTop: 16, border: "1px solid #94a3b8", borderRadius: 10, padding: 14 }}>
        {filtered.length === 0 ? (
          <p style={{ color: "#475569" }}>Nenhum resultado encontrado.</p>
        ) : (
          filtered.map((user) => (
            <div key={user.id} style={{ marginBottom: 10 }}>
              <strong>{user.name}</strong>
            </div>
          ))
        )}
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
