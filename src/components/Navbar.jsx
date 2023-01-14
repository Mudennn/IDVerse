import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ethers } from "ethers";

const Navbar = () => {
    // connect to metamask 
  const [account, setAccount] = useState(false);

  async function signIn() {
    const account = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    console.log("🚀 ~ file: App.js:13 ~ signIn ~ account", account);
    setAccount(account[0]);
  }

  return (
    <div>
      <header className="mb-2 px-4 shadow">
        <div className="relative mx-auto flex max-w-screen-lg flex-col py-4 sm:flex-row sm:items-center sm:justify-between">
          <a className="flex items-center text-2xl font-black" href="/">
            IDVerse
          </a>
          <div className="peer-checked:block hidden pl-2 py-6 sm:block sm:py-0">
            <Link to="/issuer" className="mr-10 font-semibold">
              Issuers
            </Link>
            {account ? (
              <button className="rounded-xl border-2 border-blue-600 bg-blue-600 px-6 py-2 font-medium text-white ">
                {account.substring(0, 4) + "..." + account.substring(38)}
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
    </div>
  );
};

export default Navbar;
