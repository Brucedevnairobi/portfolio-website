import React from "react";

export default function Layout({ params }: { params:{slug: string } }) {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center">{params.slug}</h1>
    </div>
  );
}
