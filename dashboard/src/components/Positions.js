import axios from "axios";
import { useEffect, useState } from "react";

const Positions = () => {

  const [allPositions, setAllPositions] = useState([]);

  useEffect(() => {
    const fetchAllPositions = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/v1/positions/allPositions",
          { withCredentials: true }
        );
        if (res.data.success) {
          console.log(res.data.message);
          setAllPositions(res.data.allPositions);
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchAllPositions();
  }, []);

  return (
    <>
      <h3 className="title">Positions ({allPositions.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Product</th>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg.</th>
            <th>LTP</th>
            <th>P&L</th>
            <th>Chg.</th>
          </tr>

          {allPositions.map((stock, index) => {
            const curValue = stock.price * stock.qty;
            const isProfit = curValue - stock.avg * stock.qty >= 0.0;
            const profClass = isProfit ? "profit" : "loss";
            const dayClass = stock.isLoss ? "loss" : "profit";

            return (
              <tr key={index}>
                <td>{stock.product}</td>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.avg.toFixed(2)}</td>
                <td>{stock.price.toFixed(2)}</td>
                <td className={profClass}>
                  {(curValue - stock.avg * stock.qty).toFixed(2)}
                </td>
                <td className={dayClass}>{stock.day}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default Positions;
