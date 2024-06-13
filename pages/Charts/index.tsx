"use client";
import { useState, useEffect, useRef } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";
import { Chart, registerables } from "chart.js";
import { io } from "socket.io-client";
import "chartjs-adapter-date-fns";
Chart.register(...registerables);

const PriceChart = () => {
  const [chartData, setChartData] = useState<any>({
    datasets: [],
  });
  const [timeFrame, setTimeFrame] = useState<string>("day");
  const [cryptos, setCryptos] = useState<any[]>([]);
  const [selectedCrypto, setSelectedCrypto] = useState<string>("bitcoin");
  const socketRef = useRef<any>(null);

  useEffect(() => {
    fetchTopCryptos();
    fetchPriceData(selectedCrypto, timeFrame);
    const interval = setInterval(() => fetchLatestPrice(selectedCrypto), 60000);
    return () => clearInterval(interval);
  }, [selectedCrypto, timeFrame]);

  useEffect(() => {
    setupWebSocket(selectedCrypto);
    return () => {
      if (socketRef.current) {
        socketRef.current.emit("SubRemove", {
          subs: [`5~CCCAGG~${selectedCrypto.toUpperCase()}~USD`],
        });
        socketRef.current.disconnect();
      }
    };
  }, [selectedCrypto]);

  const fetchTopCryptos = async () => {
    try {
      const res = await axios.get(`/api/crypto`, {
        params: {
          vs_currency: "usd",
          order: "market_cap_desc",
          per_page: 10,
          page: 1,
        },
      });
      setCryptos(res.data);
    } catch (error) {
      console.error("Error fetching top cryptocurrencies:", error);
    }
  };

  const fetchPriceData = async (cryptoId: string, timeFrame: string) => {
    try {
      const res = await axios.get(`/api/crypto`, {
        params: {
          id: cryptoId,
          days: timeFrame === "day" ? 1 : timeFrame === "week" ? 7 : 30,
        },
      });

      const prices = res.data.prices.map((price: [number, number]) => ({
        x: new Date(price[0]),
        y: price[1],
      }));

      setChartData({
        datasets: [
          {
            label: `${
              cryptoId.charAt(0).toUpperCase() + cryptoId.slice(1)
            } Price`,
            data: prices,
            borderColor: "rgba(92, 255, 156, 1)",
            fill: false,
          },
        ],
      });
    } catch (error) {
      console.error("Error fetching price data:", error);
    }
  };

  const fetchLatestPrice = async (cryptoId: string) => {
    try {
      const res = await axios.get(
        `https://api.coingecko.com/api/v3/simple/price`,
        {
          params: {
            ids: cryptoId,
            vs_currencies: "usd",
          },
        }
      );

      const latestPrice = res.data[cryptoId].usd;
      const newPriceData = {
        x: new Date(),
        y: latestPrice,
      };

      setChartData((prevData: any) => {
        const updatedData = [...prevData.datasets[0].data, newPriceData];
        return {
          ...prevData,
          datasets: [
            {
              ...prevData.datasets[0],
              data: updatedData,
            },
          ],
        };
      });
    } catch (error) {
      console.error("Error fetching latest price:", error);
    }
  };

  const setupWebSocket = (cryptoId: string) => {
    // Connect to the CryptoCompare websocket
    if (!socketRef.current) {
      socketRef.current = io("wss://streamer.cryptocompare.com/v2", {
        transports: ["websocket"],
      });
    }

    // Subscribe to the crypto's price updates
    socketRef.current.emit("SubAdd", {
      subs: [`5~CCCAGG~${cryptoId.toUpperCase()}~USD`],
    });

    socketRef.current.on("m", (message: string) => {
      const parsedMessage = JSON.parse(message);
      if (
        parsedMessage.PRICE &&
        parsedMessage.FROMSYMBOL.toLowerCase() === cryptoId.toLowerCase()
      ) {
        const newPriceData = {
          x: new Date(),
          y: parsedMessage.PRICE,
        };

        setChartData((prevData: any) => {
          const updatedData = [...prevData.datasets[0].data, newPriceData];
          return {
            ...prevData,
            datasets: [
              {
                ...prevData.datasets[0],
                data: updatedData,
              },
            ],
          };
        });
      }
    });
  };

  return (
    <div>
      <div className="flex w-[1000px] mx-auto px-3 justify-between mt-8 bg-none text-white input-container">
        <select
          className="bg-transparent border-white/50 border-2 rounded-xl px-3 font-semibold"
          onChange={(e) => setSelectedCrypto(e.target.value)}
          value={selectedCrypto}
        >
          {cryptos.map((crypto) => (
            <option
              className="text-white font-semibold p-3 ml-3"
              key={crypto.id}
              value={crypto.id}
            >
              {crypto.name}
            </option>
          ))}
        </select>
        <div className="space-x-3">
          <button
            className={` px-4 py-2 text-sm rounded-xl font-semibold ${
              timeFrame === "day"
                ? "bg-white text-black"
                : "bg-slate-600 text-white"
            }`}
            onClick={() => setTimeFrame("day")}
          >
            Day
          </button>
          <button
            className={` px-4 py-2 text-sm font-semibold rounded-xl ${
              timeFrame === "week"
                ? "bg-white text-black"
                : "bg-slate-600 text-white"
            }`}
            onClick={() => setTimeFrame("week")}
          >
            Week
          </button>
          <button
            className={` px-4 py-2 text-sm  rounded-xl font-semibold ${
              timeFrame === "month"
                ? "bg-white text-black"
                : "bg-slate-600 text-white"
            }`}
            onClick={() => setTimeFrame("month")}
          >
            Month
          </button>
        </div>
      </div>
      <div className="w-[1000px] mx-auto bg-gray-500/45 rounded-2xl p-10 mt-2">
        <Line
          className="text-white border-white"
          data={chartData}
          options={{
            scales: {
              x: {
                type: "time",
                time: {
                  unit: timeFrame === "day" ? "hour" : "day",
                  tooltipFormat: "PPpp",
                  displayFormats: {
                    hour: "MMM d, HH:mm",
                    day: "MMM d",
                  },
                },
                title: {
                  display: true,
                  text: "Date",
                  color: "white",
                },
                ticks: {
                  color: "white",
                },
              },
              y: {
                title: {
                  display: true,
                  text: "Price (USD)",
                  color: "white",
                },
                ticks: {
                  color: "white",
                },
              },
            },
            plugins: {
              legend: {
                labels: {
                  color: "white",
                },
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default PriceChart;
