import React from "react";
import { lusitana } from "../ui/fonts";
import { Card } from "../ui/dashboard/cards";
import RevenueChart from "../ui/dashboard/revenue-chart";
import { revenue } from "../lib/placeholder-data";
import LatestInvoices from "../ui/dashboard/latest-invoices";

const page = async () => {
  return (
    <main>
      <h1
        className={`${lusitana.className} mb-4 text-xl md:text-2xl font-bold`}
      >
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card title="Collected" value={123} type="collected" />
        <Card title="Pending" value={45} type="pending" />
        <Card title="Total Invoices" value={168} type="invoices" />
        <Card title="Total Customers" value={69} type="customers" />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <RevenueChart revenue={revenue} />
        <LatestInvoices latestInvoices={LatestInvoices} />
      </div>
    </main>
  );
};

export default page;
