"use client";

import Link from "next/link";

export default function HomePage() {
  const handleSetCookie = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/fetch/set-cookie`,
      {
        method: "GET",
        credentials: "include",
      },
    );
    const result = await res.json();
  };
  return (
    <div>
      <button onClick={handleSetCookie}>Set cookie</button>
      <hr />
      <br />
      <Link href={`${process.env.NEXT_PUBLIC_BACKEND_URL}/set-cookie`}>
        Set Cookie
      </Link>

      <h1>Anchor {" > "}</h1>

      <a href={`${process.env.NEXT_PUBLIC_BACKEND_URL}/set-cookie`}>
        Set Cookie
      </a>
    </div>
  );
}
