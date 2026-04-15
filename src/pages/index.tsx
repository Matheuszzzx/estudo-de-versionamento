import Link from "next/link";

const exercises = [
  { id: 1, title: "Exercicio 1" },
  { id: 2, title: "Exercicio 2" },
  { id: 3, title: "Exercicio 3" },
  { id: 4, title: "Exercicio 4" },
  { id: 5, title: "Exercicio 5" },
  { id: 6, title: "Exercicio 6" },
  { id: 7, title: "Exercicio 7" },
];

export default function Home() {
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
      <h1 style={{ marginBottom: 16 }}>Exercícios</h1>
      <p>Use os links abaixo para abrir cada exercício no mesmo estilo simples.</p>

      <ul style={{ marginTop: 16, paddingLeft: 0, listStyle: "none", display: "grid", gap: 10 }}>
        {exercises.map((exercise) => (
          <li key={exercise.id}>
            <Link
              href={`/Exercicio${exercise.id}`}
              style={{
                display: "block",
                padding: "10px 12px",
                border: "1px solid #94a3b8",
                borderRadius: 8,
                textDecoration: "none",
                color: "#1d4ed8",
                background: "#f8fafc",
              }}
            >
              {exercise.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
