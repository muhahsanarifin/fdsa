import React from "react";
import * as Layout from "../components/Layout";
import * as Alert from "../components/Alert";
import { Breadcrumbs } from "../components/Breadcrumbs";

const Example = () => {
  return (
    <section className="min-h-screen flex flex-col w-screen">
      {/* Info section */}
      {false && <Alert.Info />}

      {/* Breadcrumbs section */}
      <Breadcrumbs onELements={["Home", "Example"]} />

      {/* Example section */}
      <Layout.Example />
    </section>
  );
};

export default Example;
