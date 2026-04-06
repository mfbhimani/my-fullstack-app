"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/health`)
      .then((res) => res.json())
      .then((data) => setMessage(data.status))
      .catch(() => setMessage("error"));
  }, []);

  return <div>Backend status: {message}</div>;
}