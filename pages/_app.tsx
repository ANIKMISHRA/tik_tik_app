// packages
import type { AppProps } from "next/app";
import { useState, useEffect } from "react";

// components
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

// style
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  // state
  const [isSSR, setIsSSR] = useState(true);

  /**
   * Component Did Mount
   */
  useEffect(() => {
    setIsSSR(false);
  }, []);

  if (isSSR) return null;

  return (
    <div>
      <Navbar />
      <div className="flex gap-6 md:gap-20">
        <div className="h-[92vh] overflow-didden xl:hover:overflow-auto">
          <Sidebar />
        </div>
        <div className="mt-4 flex flex-col gap-10 overflow-auto h-[88vh] videos flex-1">
          <Component {...pageProps} />
        </div>
      </div>
    </div>
  );
};
export default MyApp;
