"use client";
import React from "react";
import styles from "./DestinationDetail.module.css";
import DestinationDetailCard from "./DestinationDetailCard";

function DestinationDetail() {

  return (
    <main className={styles.mainContainer}>
      <DestinationDetailCard />
    </main>
  );
}

export default DestinationDetail;