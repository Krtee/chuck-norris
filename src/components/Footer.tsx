"use client";

import { incrementVisitorCount } from "@/actions/visitorCountActions";
import { useEffect, useState } from "react";

export interface FooterProps {
  initialVisitorCount: number;
}
const Footer = ({ initialVisitorCount }: FooterProps) => {
  const [visitorCount, setVisitorCount] = useState(initialVisitorCount);

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
