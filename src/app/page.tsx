import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <Link href={`${process.env.NEXT_PUBLIC_BACKEND_URL}/set-cookie`}>
        Set Cookie
      </Link>
    </div>
  );
};

export default HomePage;
