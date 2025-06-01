"use client";

import { useState } from "react";
import UserList from "../../components/UserList";
import "../../styles/userlist.css";

export default function ListPage() {
  const [refresh, setRefresh] = useState(false);


  return (
    <div className="p-4 max-w-xl mx-auto space-y-4 text-center">
      <h2 className="text-2xl font-bold mb-4">Lista de Usuarios</h2>
      <UserList refresh={refresh} />
    </div>
  );
}