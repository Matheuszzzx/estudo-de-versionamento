import Link from "next/link";
import { useState } from "react";

export default function Ex07() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState<string[]>([]);

  const addTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!task.trim()) return;
    setTasks((current) => [task.trim(), ...current]);
    setTask("");
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
      <h1 style={{ marginBottom: 16 }}>Exercicio 7</h1>
      <p>Todo list simples com adicionar tarefas.</p>

      <form onSubmit={addTask} style={{ display: "grid", gap: 12, marginTop: 16 }}>
        <input
          placeholder="Nova tarefa"
          value={task}
          onChange={(event) => setTask(event.target.value)}
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
          Adicionar
        </button>
      </form>

      <div style={{ marginTop: 16, border: "1px solid #94a3b8", borderRadius: 10, padding: 14 }}>
        {tasks.length === 0 ? (
          <p style={{ color: "#475569" }}>Nenhuma tarefa ainda.</p>
        ) : (
          tasks.map((taskItem, index) => (
            <div key={`${taskItem}-${index}`} style={{ marginBottom: 10 }}>
              • {taskItem}
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
