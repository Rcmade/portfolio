const Page = () => {
  return (
    <iframe
      src={process.env.NEXT_PUBLIC_RESUME_URL}
      className="h-screen w-full border-none"
    />
  );
};

export default Page;
