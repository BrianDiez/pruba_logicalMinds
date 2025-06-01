import { useEffect, useState } from "react";
import axios from "axios";


export default function UserList({ refresh }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/users").then((res) => setUsers(res.data));
  }, [refresh]);

  const handleDelete = async (id) => {
    const confirm = window.confirm("¿Seguro que querés eliminar este usuario?");
    if (!confirm) return;

    try {
      await axios.delete(`http://localhost:3001/users/${id}`);
      setUsers(users.filter((user) => user.id !== id));
    } catch (error) {
      alert("Error al eliminar el usuario");
    }
  };

  return (
<div className="user-list">
  {users.map((user) => (
    <div key={user.id} className="user-card">
      <div className="user-info">
        
        <div className="user-details">
        Nombre: {user.first_name} | Apellido: {user.last_name} | Email {user.email} | País: {user.country}
        </div>
        <img
          src={`https://flagcdn.com/24x18/${user.country.toLowerCase().slice(0, 2)}.png`}
          onError={(e) => (e.target.style.display = "none")}
          alt=""
        />
      </div>
      <button
        onClick={() => handleDelete(user.id)}
        className="delete-button"
      >
        Eliminar
      </button>
    </div>
  ))}
</div>

  );
}
