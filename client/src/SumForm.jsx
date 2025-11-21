import { useState } from 'react'
import { sumar } from './services/operationService'

function SumForm() {
  const [num1, setNum1] = useState('')
  const [num2, setNum2] = useState('')
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    setResult(null)
    setLoading(true)
    try {
      const resp = await sumar(num1, num2)
      setResult(resp.data)
    } catch (err) {
      setError(err.message || 'Error en la petición')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section>
      <h2>Sumar dos números</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Número 1
            <input
              type="number"
              step="any"
              value={num1}
              onChange={(e) => setNum1(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Número 2
            <input
              type="number"
              step="any"
              value={num2}
              onChange={(e) => setNum2(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <button type="submit" disabled={loading}>
            {loading ? 'Calculando...' : 'Sumar'}
          </button>
        </div>
      </form>

      {error && (
        <p style={{ color: 'crimson' }}>Error: {error}</p>
      )}

      {result !== null && (
        <p>Resultado: <strong>{result}</strong></p>
      )}
    </section>
  )
}

export default SumForm
