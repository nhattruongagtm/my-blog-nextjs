import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import { Nunito_Sans } from "next/font/google";
import Layout from "@/app/components/Layouts/Layout";
import MoveTop from "@/app/components/MoveTop/MoveTop";
import "reflect-metadata";
import { ApolloProvider } from "@apollo/client";
import { client } from "@/app/apollo-client/client";
import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";

const popins = Nunito_Sans({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const queryClient = new QueryClient();

  const getLayout = Component.getLayout ?? ((page: JSX.Element) => page);

  return (
    <main className={popins.className}>
      <ApolloProvider client={client}>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider attribute="class">
            <MoveTop>
              <Layout>{getLayout(<Component {...pageProps} />)}</Layout>
            </MoveTop>
          </ThemeProvider>
        </QueryClientProvider>
      </ApolloProvider>
    </main>
  );
}
