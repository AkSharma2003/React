import { useState } from "react";
import "./App.css";
import useCurrencyInfo from "./hook/useCurrenceyinfo";
import { InputBox } from "./Componants";

function App() {
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");

  const currencyInfo = useCurrencyInfo(from) || {};
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);

    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  const convert = () => {
    if (!currencyInfo[to]) return;
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <>
      <div
        className="h-screen w-full flex justify-center items-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/618079/pexels-photo-618079.jpeg')",
        }}
      >
        <div className="w-full flex justify-center">
          <div 
            className="w-full max-w-md max-auto border border-gray-600 rounded-lg backdrop-blur-sm bg-white/30 p-4"
          >
            <form
              onSubmit={(e)=>{
                e.preventDefault();
                convert();
              }}
            >
              <div className="w-full mb-1">
                <InputBox
                  label="From"
                  amount={amount}
                  currencyOptions={options}
                  onCurrencyChange={(currency)=>setFrom(currency)}
                  onAmountChange={(amount)=>setAmount(amount)}
                  selectCurrency={from}
                />
              </div>
              <div>
                <button
                  type="button"
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                  onClick={swap}
                >Swap</button>
              </div>
              <div className="w-full mb-1">
                <InputBox
                  label="To"
                  amount={convertedAmount}
                  currencyOptions={options}
                  onCurrencyChange={(currency)=>setTo(currency)}
                  selectCurrency={to}
                  amountDisable
                />
              </div>
                <button 
                  type="submit"
                  className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
                >
                  convert {from.toUpperCase()} to {to.toUpperCase()}
                </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
