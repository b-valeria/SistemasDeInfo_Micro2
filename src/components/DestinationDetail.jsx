"use client";
import React from "react";
import DestinationDetailCard from "./DestinationDetailCard";
import styles from "./DestinationDetail.module.css";

function DestinationDetail() {

  return (
    <main className={styles.mainContainer}>
    
      <DestinationDetailCard />
    </main>
  );
}

export default DestinationDetail;