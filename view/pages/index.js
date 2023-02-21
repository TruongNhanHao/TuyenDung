import Head from "next/head";
import styled from "styled-components";
import Navbar from "../components/navbar";
import Introduce from "../components/introduce";
import Layout from "../components/layout";
import List_ung_vien from "../components/list_ung_vien";

export default function Home() {
  return (
    <HomePage>
      <Head>
        <title>Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main>
        <Navbar />
        <Layout />
      </main>
      <Introduce />
    </HomePage>
  );
}
const HomePage = styled.div`
  /* color: var(--list-background-color); */
  /* td {
    color: #6f7e98;
  }
  th {
    background-color: #6f7e98;
  } */
`;
