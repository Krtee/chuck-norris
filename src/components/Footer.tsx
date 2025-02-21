"use client";

import { incrementVisitorCount } from "@/utils/visitorCountUtils";
import { useEffect, useState } from "react";

const Footer = () => {
  const [visitorCount, setVisitorCount] = useState(0);

  /**
   * Updates the visitor count every time the component mounts
   */
  useEffect(() => {
    updateVisitorCount();
  }, []);

  /**
   * Increments the visitor count in the global database file by 1 and updates the state
   */
  const updateVisitorCount = async (): Promise<void> =>
    setVisitorCount(await incrementVisitorCount());

  return (
    <footer className="pt-8">
      <p>{`Diese Webseite wurde bereits ${visitorCount} mal besucht.`}</p>
    </footer>
  );
};

export default Footer;
