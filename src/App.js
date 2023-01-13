import { ethers } from "ethers";
import { useState } from "react";
import "./App.css";
import Form from "./components/Form";

function App() {
  const [account, setAccount] = useState(false);

  async function signIn() {
    const account = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    setAccount(account[0]);
  }
    
  return (
    <div className="App w-full h-full">
      <>
        <header className="mb-2 px-4 shadow">
          <div className="relative mx-auto flex max-w-screen-lg flex-col py-4 sm:flex-row sm:items-center sm:justify-between">
            <a className="flex items-center text-2xl font-black" href="/">
              IDVerse
            </a>
            <div className="peer-checked:block hidden pl-2 py-6 sm:block sm:py-0">
              {account ? (
                <button className="rounded-xl border-2 border-blue-600 bg-blue-600 px-6 py-2 font-medium text-white ">
                  Connected
                </button>
              ) : (
                <button
                  onClick={signIn}
                  className="rounded-xl border-2 border-blue-600 px-6 py-2 font-medium text-blue-600 hover:bg-blue-600 hover:text-white"
                >
                  Log In
                </button>
              )}
            </div>
          </div>
        </header>

        {/* Digital Data Form  */}
        <Form />
      </>
    </div>
  );
}

export default App;
