"use client";

import { useState } from "react";
import AddUserForm from "../components/AddUserForm";
import '../../src/styles/form.css';

export default function Home() {
  const [refresh, setRefresh] = useState(false);

  return (
    <div className="p-4 max-w-xl mx-auto space-y-4 text-center">
      <h2 className="text-2xl font-bold mb-4">Usuarios</h2>
      <AddUserForm onUserAdded={() => setRefresh(!refresh)} />
      <hr className="my-4" />
    </div>
  );
}
