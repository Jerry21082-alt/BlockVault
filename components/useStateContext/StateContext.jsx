"use client";

import { useContext, createContext } from "react";
import { useState, useEffect } from "react";
import { mockDataQuery, wallet } from "@/constants";
import { searchSymbols } from "@/utils/data";

const Context = createContext();

export default function StateContext({ children }) {
  const [toggleBar, setToggleBar] = useState(false);
  const [toggleNotification, setToggleNotification] = useState(false);
  const [lightMode, setLightMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [swap, setSwap] = useState(false);
  const [secondChoice, setSecondChoice] = useState(false);
  const [priceInput, setPriceInput] = useState("");
  const [secondPriceInput, setSecondPriceInput] = useState("");
  const [selectCurrency, setSelectCurrency] = useState(0);
  const [secondCurr, setSecondCurr] = useState(1);
  const [searchInput, setSearchInput] = useState("");
  const [stockSymbol, setStockSymbol] = useState("IBM");
  const [bestMatches, setBestMatches] = useState(mockDataQuery);
  const [showSearch, setShowSearch] = useState(false)
  const [openMobileSearch, setOpenMobileSearch] = useState(false);

  const updateBestMatches = async () => {
    try {
      const searchResult = await searchSymbols(searchInput);
      const result = searchResult.result;
      setBestMatches(result);
    } catch (err) {
      setBestMatches([]);
      console.log(err);
    }
  };

  const selectedCurrency = (index) => {
    const selectedIndex = wallet.indexOf(index);
    setSelectCurrency(selectedIndex);
  };

  const secondSelectedCurr = (index) => {
    const selectedIndex = wallet.indexOf(index);
    setSecondCurr(selectedIndex);
  };
  const handleChange = (e) => {
    setPriceInput(e.target.value);
  };
  const handleSecondChange = (e) => {
    setSecondPriceInput(e.target.value);
  };

  return (
    <Context.Provider
      value={{
        toggleBar,
        setToggleBar,
        setToggleNotification,
        toggleNotification,
        lightMode,
        setLightMode,
        swap,
        setSelectCurrency,
        setSwap,
        handleChange,
        priceInput,
        selectCurrency,
        selectedCurrency,
        setPriceInput,
        secondChoice,
        secondCurr,
        secondSelectedCurr,
        secondPriceInput,
        handleSecondChange,
        setSecondChoice,
        stockSymbol,
        setStockSymbol,
        searchInput,
        setSearchInput,
        bestMatches,
        updateBestMatches,
        isLoading,
        setIsLoading,
        showSearch,
        setShowSearch,
        openMobileSearch,
        setOpenMobileSearch
      }}
    >
      {children}
    </Context.Provider>
  );
}

export const contextFunc = () => useContext(Context);
