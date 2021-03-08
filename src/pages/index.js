import React from "react";
import Layout from "@common/Layout";
import Query from "@queries/query";

import PageBuilder from "@components/PageBuilder";

export default function IndexPage() {
  const { sanityHome } = Query();
  return (
    <Layout>
      <PageBuilder
        type={sanityHome.type}
        pageBuilder={sanityHome.pageBuilder}
        _rawPageBuilder={sanityHome._rawPageBuilder}
      />
    </Layout>
  );
}
