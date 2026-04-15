import Link from "next/link";

const users = [
  { id: 1, name: "João Silva", email: "joao@example.com" },
  { id: 2, name: "Maria Santos", email: "maria@example.com" },
  { id: 3, name: "Pedro Lima", email: "pedro@example.com" },
];

export default function Ex05() {
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
      <h1 style={{ marginBottom: 16 }}>Exercicio 5</h1>
      <p>Lista de usuários simples.</p>

      <div style={{ marginTop: 16, border: "1px solid #94a3b8", borderRadius: 10, padding: 14 }}>
        {users.map((user) => (
          <div key={user.id} style={{ marginBottom: 10 }}>
            <strong>{user.name}</strong>
            <div style={{ fontSize: 14, color: "#475569" }}>{user.email}</div>
          </div>
        ))}
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
