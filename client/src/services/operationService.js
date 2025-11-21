const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:8080'

export async function sumar(num1, num2) {
  const dto = { num1: Number(num1), num2: Number(num2) }
  const res = await fetch(`${API_BASE}/api/operation/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dto),
  })

  if (!res.ok) {
    const text = await res.text()
    throw new Error(text || res.statusText)
  }

  const json = await res.json()
  return json
}
