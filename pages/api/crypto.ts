import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { setCache, getCache } from "../../utils/cache";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { id, days, vs_currency, order, per_page, page } = req.query;

  if (!id) {
    // Fetch top cryptocurrencies
    const cacheKey = `top-cryptos-${vs_currency}-${order}-${per_page}-${page}`;
    const cachedData = getCache(cacheKey);

    if (cachedData) {
      return res.status(200).json(cachedData);
    }

    try {
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/coins/markets`,
        {
          params: {
            vs_currency,
            order,
            per_page,
            page,
          },
        }
      );

      setCache(cacheKey, response.data, 5 * 60 * 1000); // Cache for 5 minutes
      return res.status(200).json(response.data);
    } catch (error) {
      console.error("Error fetching top cryptocurrencies:", error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  } else {
    // Fetch historical price data
    const cacheKey = `${id}-${days}`;
    const cachedData = getCache(cacheKey);

    if (cachedData) {
      return res.status(200).json(cachedData);
    }

    try {
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${id}/market_chart`,
        {
          params: {
            vs_currency: "usd",
            days,
          },
        }
      );

      setCache(cacheKey, response.data, 5 * 60 * 1000); // Cache for 5 minutes
      return res.status(200).json(response.data);
    } catch (error) {
      console.error("Error fetching price data:", error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
};
