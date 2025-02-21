import { incrementVisitorCount } from "@/utils/visitorCountUtils";

const Footer = async () => {
  const visitorCount: number = await incrementVisitorCount();

  return (
    <footer className="pt-8">
      <p>{`Diese Webseite wurde bereits ${visitorCount} mal besucht.`}</p>
    </footer>
  );
};

export default Footer;
