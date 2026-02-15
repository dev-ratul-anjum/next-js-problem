"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <div>
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
