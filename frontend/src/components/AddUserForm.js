import { useState, useEffect } from "react";
import axios from "axios";

export default function AddUserForm({ onUserAdded}) {
  const [form, setForm] = useState({ first_name: "", last_name: "", email: "", country: "" });
  const [error, setError] = useState("");

  const [flagUrl, setFlagUrl] = useState(null);
  const [loadingFlag, setLoadingFlag] = useState(false);
  const [flagError, setFlagError] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const countryName = form.country.trim();

    if (!countryName) {
      setFlagUrl(null);
      setFlagError(null);
      return;
    }

    const controller = new AbortController();
    const signal = controller.signal;

    async function fetchFlag() {
      setLoadingFlag(true);
      setFlagError(null);

      try {
        const res = await fetch(
          `https://restcountries.com/v3.1/name/${encodeURIComponent(countryName)}?fields=flags`,
          { signal }
        );

        if (!res.ok) throw new Error("País no encontrado");

        const data = await res.json();

        if (data && data[0]?.flags?.svg) {
          setFlagUrl(data[0].flags.svg);
        } else {
          setFlagUrl(null);
          setFlagError("Error");
        }
      } catch (err) {
        if (err.name === "AbortError") return;
        setFlagUrl(null);
        setFlagError(err.message || "Error");
      } finally {
        setLoadingFlag(false);
      }
    }

    fetchFlag();

    return () => controller.abort();
  }, [form.country]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const dataToSend = { ...form, flagUrl };
      await axios.post("http://localhost:3001/users", dataToSend);
      onUserAdded();

      setForm({
        first_name: "",
        last_name: "",
        email: "",
        country: "",
      });

      setFlagError(null);
    } catch (err) {
      setError(err.response?.data?.error || "Error al agregar usuario");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="first_name"
        placeholder="Nombre"
        onChange={handleChange}
        value={form.first_name}
        required
      />

      <input
        name="last_name"
        placeholder="Apellido"
        onChange={handleChange}
        value={form.last_name}
        required
      />

      <input
        name="email"
        placeholder="Email"
        type="email"
        onChange={handleChange}
        value={form.email}
        required
      />

      <div className="input-flag">
      <input
      name="country"
      placeholder="País"
      onChange={handleChange}
      value={form.country}
      required
      className={flagUrl ? "with-flag" : ""}
      />
      
      {flagUrl && <img src={flagUrl} alt="Bandera" className="flag-inside" />}
      </div>
      {flagError && <p className="error-message">{flagError}</p>}

      


      <button type="submit">Agregar</button>

      {error && <p className="error-message">{error}</p>}
    </form>
  );
}
