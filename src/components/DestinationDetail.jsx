"use client";
import React from "react";
import styles from "./MainContainer.module.css";
import Header from "./Header";
import DestinationDetailCard from "./DestinationDetailCard";
//import styles from "./DestinationDetail.module.css";

function DestinationDetail() {

  return (
    <main className={styles.mainContainer}>
      <Header />
      <DestinationDetailCard />
    </main>
  );
}

export default DestinationDetail;