import { LayoutPageWrapper } from "@/components/layout";
import "@/styles/globals.css";
import { ToastContainer } from "react-toastify";

export default function App({ Component, pageProps }) {
  return (
    <LayoutPageWrapper>
      <ToastContainer/>
      <Component {...pageProps} /></LayoutPageWrapper>
  );
}
