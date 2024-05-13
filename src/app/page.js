"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Card from "../components/Card/page";

export default function Home() {
  const [allItems, setAllItems] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        // Filter items for men's clothing
        const mens = json.filter((item) => item.category === "men's clothing");

        // Filter items for women's clothing
        const womens = json.filter(
          (item) => item.category === "women's clothing"
        );

        // Combine mens and womens arrays alternatingly
        const combinedItems = mens.reduce((acc, cur, index) => {
          // Add men's item
          acc.push(cur);
          // Add women's item if available
          if (womens[index]) {
            acc.push(womens[index]);
          }
          return acc;
        }, []);

        // Set the combined items array
        setAllItems(combinedItems);
      });
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between max-w-[1480px] mx-auto px-5 mt-16">
      <section>
        <h2 className="text-[28px] font-bold -tracking-[1.7px]">Flash Sale</h2>
        <div className="flex flex-wrap justify-center gap-x-[48px]">
          {allItems.map((item, index) => {
            const dynamic_url =
              item?.category == "men's clothing"
                ? "/mens-clothing"
                : "/womens-clothing";
            return (
              <Link key={index} href={dynamic_url}>
                <Card item={item} />
              </Link>
            );
          })}
        </div>
      </section>
      <section className="w-full mt-[72px]">
        <h2 className="text-[28px] font-bold -tracking-[1.7px]">Categories</h2>
        <div className="flex flex-wrap justify-center sm:gap-x-[48px]">
          <Link
            href="/mens-clothing"
            className="bg-mw-green text-center flex justify-center grow basis-full md:basis-[calc(50%-48px)] items-center rounded-3xl shadow-4xl aspect-[1718/885] text-2xl sm:text-3xl mt-12 xl:text-[64px] text-white xl:-tracking-[4px] font-bold max-w-full"
          >
            Men's Clothing
          </Link>
          <Link
            href="/womens-clothing"
            className="bg-mw-pink text-center flex justify-center grow basis-full md:basis-[calc(50%-48px)] items-center rounded-3xl shadow-4xl aspect-[1718/885] mt-12 text-2xl sm:text-3xl xl:text-[64px] text-white xl:-tracking-[4px] font-bold max-w-full"
          >
            Women's Clothing
          </Link>
        </div>
      </section>
    </main>
  );
}
