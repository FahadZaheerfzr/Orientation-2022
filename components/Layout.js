import { useTheme } from "next-themes";
import Head from "next/head";
import React from "react";
import { useContext } from "react";
import { ClickContext } from "../context/GlobalProvider";
import Footer from "../components/Footer";
import dynamic from "next/dynamic";

const DynamicHeader = dynamic(() => import("./Header/Header"), {
  ssr: false,
});
export default function Layout({ children, title, homePage, hideFooter }) {
  const { click } = useContext(ClickContext);
  const { theme, setTheme } = useTheme();
  return (
    <div
      className={`${
        click & homePage
          ? theme === "dark"
            ? "dark-content"
            : "main-content"
          : null
      }`}
    >
      <Head>
        <title>{title}</title>
      </Head>

      <DynamicHeader homepage={homePage} />

      {children}

      {!hideFooter && <Footer />}
    </div>
  );
}
