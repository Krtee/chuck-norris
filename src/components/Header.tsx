import Image from "next/image";

const Header = () => {
  return (
    <div className="w-full pb-8">
      <Image
        src="/logo.svg"
        alt="Next.js logo"
        width={101}
        height={66}
        priority
      />
    </div>
  );
};

export default Header;
