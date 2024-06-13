"use client";
import React, { useState } from "react";
import QuoteView from "../Quote";
import { useAccount } from "wagmi";
import PriceView from "../Price";
import { PriceResponse } from "../api/types";
import Navbar from "@/components/navbar";

function Swap() {
  const [finalize, setFinalize] = useState(false);
  const [price, setPrice] = useState<PriceResponse | undefined>();
  const [quote, setQuote] = useState();
  const { address } = useAccount();
  return (
    <div>
      {finalize && price ? (
        <QuoteView
          takerAddress={address}
          price={price}
          quote={quote}
          setQuote={setQuote}
        />
      ) : (
        <PriceView
          takerAddress={address}
          price={price}
          setPrice={setPrice}
          setFinalize={setFinalize}
        />
      )}
    </div>
  );
}

export default Swap;
