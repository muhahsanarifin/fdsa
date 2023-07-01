import React, { useState, useEffect } from "react";
import * as Layout from "../components/Layout";
import * as Alert from "../components/Alert";
import { Breadcrumbs } from "../components/Breadcrumbs";
import * as storage from "../utils/storage/local";

const Example = () => {
  const [hideAlert, setHideAlert] = useState(
    storage.get("hideAlert") ? true : false
  );

  const handleCloseAlert = () => {
    setHideAlert(true);
    storage.set("hideAlert", true);
  };

  return (
    <section className="min-h-screen flex flex-col w-[80vw] sm:w-auto sm:px-4">
      {/* Info section */}
      {!hideAlert && <Alert.Info setHandleCloseAlert={handleCloseAlert} />}

      {/* Breadcrumbs section */}
      <Breadcrumbs onELements={["Home", "Example"]} />

      {/* Example section */}
      <Layout.Example />
    </section>
  );
};

export default Example;
