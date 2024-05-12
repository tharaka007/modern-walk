"use client";
import { useState, useEffect } from "react";
import Card from "../../components/Card/page";

export default function MensClothing() {
  const [mensClothing, setMensClothing] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        // Filter items for men's clothing
        const mens = json.filter((item) => item.category === "men's clothing");
        setMensClothing(mens);
      });
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between max-w-[1480px] mx-auto px-5 mt-16">
      <section>
        <h2 className="text-[28px] font-bold -tracking-[1.7px]">
          Men's Clothing
        </h2>
        <div className="flex flex-wrap justify-center gap-x-[48px]">
          {mensClothing.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </div>
      </section>
    </main>
  );
}
