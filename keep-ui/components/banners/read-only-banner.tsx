"use client";
import React from "react";
import InfinitOpsBanner from "@/components/banners/BannerBase";

const ReadOnlyBanner = () => {
  return <InfinitOpsBanner
    bannerId="read-only-banner"
    text="InfinitOps is in read-only mode."
    newWindow={true}
  />
};

export default ReadOnlyBanner;
