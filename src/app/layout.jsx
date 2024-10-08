"use client";

import "./globals.css";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Provider store={store}>
        <body className="bg-gray-100">
          {/* Header (optional) */}
     

          {/* Main content */}
          <main >{children}</main>

          {/* Footer (optional) */}
          <ToastContainer />
        </body>
      </Provider>
    </html>
  );
}
