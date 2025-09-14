import { useEffect, type ReactNode } from "react";
import clsx from "clsx";
import { useColorMode } from "@docusaurus/theme-common";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

//Home page is currently being redirected to docs page for now.


function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  console.log(siteConfig.stylesheets);
  
  return (
    <header className={clsx("hero", styles.heroBanner)}>
      <h1>Commit Like a Pro With <br /> CommitWhiz</h1>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();


  useEffect(()=>{
    window.location.href="/docs/category/intoduction"
  },[])

  return 

  return (
    <Layout
      title={`${siteConfig.title} - Your Git Buddy`}
      description="CommitWhiz simplifies your Git workflow by providing AI generated commit messages"
    >
       
      <HomepageHeader />
      <main>{/* <HomepageFeatures /> */}</main>
    </Layout>
  );
}
