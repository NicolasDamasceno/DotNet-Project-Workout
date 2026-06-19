import axios from "axios";
import { CompanyProfile, CompanySearch } from "./company";

interface SearchResponse {
  symbol: string;
  companyName: string;
  price: number;
  beta: number;
  volAvg: string;
  mktCap: string;
  lastDiv: number;
  range: string;
  changes: number;
  ceo: string;
  sector: string;
  industry: string;
  description: string;
  image: string;
}

export const searchCompanies = async (query: string) => {
    try{
        const data = await axios.get<SearchResponse>(
            `https://financialmodelingprep.com/stable/search-symbol?query=${query}&apikey=${process.env.REACT_APP_API_KEY}`
        );
        return data;
    } catch (error) {
        if(axios.isAxiosError(error)) {
            console.log("error message: ", error.message);
            return error.message;
        } else {
            console.log("unexpected error: ", error);
            return "An unxpected error have occured";
        }
    }
}

export const getCompanyProfile = async (query: string) => {
  try {
    const ticker = query.toUpperCase();

    const stockDatabase: Record<string, CompanyProfile> = {
      AAPL: {
        symbol: "AAPL",
        price: 175.42,
        beta: 1.25,
        volAvg: 60000000,
        mktCap: 2900000000000,
        lastDiv: 0.94,
        range: "165-195",
        changes: 1.45,
        companyName: "Apple Inc.",
        currency: "USD",
        cik: "0000320193",
        isin: "US0378331005",
        exchange: "Nasdaq Global Select",
        exchangeShortName: "NASDAQ",
        industry: "Consumer Electronics",
        website: "https://www.apple.com",
        description: "Apple Inc. designs, manufactures, and markets smartphones, personal computers, tablets, wearables, and accessories worldwide.",
        ceo: "Tim Cook",
        sector: "Technology",
        counter: "US",
        fullTimeEmployees: "164000",
        phone: "14089961010",
        address: "One Apple Park Way",
        city: "Cupertino",
        state: "CA",
        zip: "95014",
        dcfDiff: 4.5,
        dcf: 180.20,
        image: "https://financialmodelingprep.com/image-placeholder/AAPL.png",
        ipoDate: "1980-12-12",
        defaultImage: false,
        isEtf: false,
        isActivelyTrading: true,
        isAdr: false,
        isFund: false
      },
      MSFT: {
        symbol: "MSFT",
        price: 420.55,
        beta: 1.10,
        volAvg: 23000000,
        mktCap: 3150000000000,
        lastDiv: 3.00,
        range: "340-430",
        changes: -0.85,
        companyName: "Microsoft Corporation",
        currency: "USD",
        cik: "0000789019",
        isin: "US5949181045",
        exchange: "Nasdaq Global Select",
        exchangeShortName: "NASDAQ",
        industry: "Software—Infrastructure",
        website: "https://www.microsoft.com",
        description: "Microsoft Corporation develops and supports software, services, devices, and solutions worldwide.",
        ceo: "Satya Nadella",
        sector: "Technology",
        counter: "US",
        fullTimeEmployees: "221000",
        phone: "14258828080",
        address: "One Microsoft Way",
        city: "Redmond",
        state: "WA",
        zip: "98052",
        dcfDiff: 2.1,
        dcf: 425.00,
        image: "https://financialmodelingprep.com/image-placeholder/MSFT.png",
        ipoDate: "186-03-13",
        defaultImage: false,
        isEtf: false,
        isActivelyTrading: true,
        isAdr: false,
        isFund: false
      },
      TSLA: {
        symbol: "TSLA",
        price: 179.24,
        beta: 2.42,
        volAvg: 95000000,
        mktCap: 570000000000,
        lastDiv: 0.00,
        range: "138-299",
        changes: 3.12,
        companyName: "Tesla, Inc.",
        currency: "USD",
        cik: "0001318605",
        isin: "US88160R1014",
        exchange: "Nasdaq Global Select",
        exchangeShortName: "NASDAQ",
        industry: "Auto Manufacturers",
        website: "https://www.tesla.com",
        description: "Tesla, Inc. designs, develops, manufactures, leases, and sells electric vehicles, and energy generation and storage systems.",
        ceo: "Elon Musk",
        sector: "Consumer Cyclical",
        counter: "US",
        fullTimeEmployees: "140473",
        phone: "15125168112",
        address: "1 Tesla Road",
        city: "Austin",
        state: "TX",
        zip: "78725",
        dcfDiff: -10.5,
        dcf: 165.00,
        image: "https://financialmodelingprep.com/image-placeholder/TSLA.png",
        ipoDate: "2010-06-29",
        defaultImage: false,
        isEtf: false,
        isActivelyTrading: true,
        isAdr: false,
        isFund: false
      }
    };

    // Fallback dinâmico idêntico para qualquer outra empresa buscada
    const finalData = stockDatabase[ticker] ? stockDatabase[ticker] : {
      symbol: ticker,
      price: 100.00,
      beta: 1.00,
      volAvg: 10000000,
      mktCap: 50000000000,
      lastDiv: 1.20,
      range: "90-110",
      changes: 0.00,
      companyName: `${ticker} Corp`,
      currency: "USD",
      cik: "0000000000",
      isin: "US0000000000",
      exchange: "Nasdaq",
      exchangeShortName: "NASDAQ",
      industry: "Generic Industry",
      website: "https://example.com",
      description: `Simulated data for ${ticker} matching the CompanyProfile type constraints.`,
      ceo: "John Doe",
      sector: "General Business",
      counter: "US",
      fullTimeEmployees: "1000",
      phone: "10000000000",
      address: "123 Street",
      city: "City",
      state: "ST",
      zip: "00000",
      dcfDiff: 0,
      dcf: 100.00,
      image: "https://financialmodelingprep.com/image-placeholder/AAPL.png",
      ipoDate: "2020-01-01",
      defaultImage: true,
      isEtf: false,
      isActivelyTrading: true,
      isAdr: false,
      isFund: false
    };

    return { data: [finalData] };

  } catch (error: any) {
    console.log("Error in Mock Service: ", error.message);
  }
};