const Page = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/secure/set-cookie`,
    {
      method: "POST",
      credentials: "include",
    },
  );
  const result = await res.json();
  console.log(result.success);

  if (!result.success) return <h1>No secure</h1>;
  return (
    <div>
      <h1>{result.message}</h1>
    </div>
  );
};

export default Page;
