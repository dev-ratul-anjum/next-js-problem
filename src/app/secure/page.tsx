"use client";

const SecurePage = () => {
  const handleLogin = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/secure/set-cookie`,
      {
        method: "POST",
        credentials: "include",
      },
    );
    const result = await res.json();
    console.log(result.success);
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default SecurePage;
