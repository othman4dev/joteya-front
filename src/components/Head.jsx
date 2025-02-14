import React from "react";
import { Helmet } from "react-helmet";
import favicon from "../assets/images/jot-favicon.svg";
XMLDocument;
const Head = () => {
  return (
    <Helmet>
      <title>Joteya</title>
      <meta name="description" content="This is my application" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <link rel="icon" href={favicon} />
      <link href="https://fonts.cdnfonts.com/css/poppins" rel="stylesheet" />
      <link rel="stylesheet" href="../assets/styles/style.css" />
      <link rel="stylesheet" href="../assets/styles/responsive.css" />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/lipis/flag-icons@7.2.3/css/flag-icons.min.css"
      />
      <script src="src/assets/script/script.js" defer></script>
    </Helmet>
  );
};

export default Head;
