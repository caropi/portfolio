import React from "react";
import Layout from "@common/Layout";
import Query from "@queries/query";

export default function IndexPage() {
  const { sanityHome } = Query();
  console.log(sanityHome);
  return (
    // <Layout seoModule={}>
    <main></main>
    // </Layout>
  );
}
