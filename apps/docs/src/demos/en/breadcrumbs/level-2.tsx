"use client";

import {Breadcrumbs} from "@khulnasoft/react";

export default function BreadcrumbsLevel2() {
  return (
    <Breadcrumbs>
      <Breadcrumbs.Item href="#">Home</Breadcrumbs.Item>
      <Breadcrumbs.Item>Current Page</Breadcrumbs.Item>
    </Breadcrumbs>
  );
}
