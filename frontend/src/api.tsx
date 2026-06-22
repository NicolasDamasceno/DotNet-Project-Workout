import axios from "axios";
import { CompanyBalanceSheet, CompanyCashFlow, CompanyIncomeStatement, CompanyKeyMetrics, CompanyKeyRatios, CompanyProfile, CompanySearch } from "./company";

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

export const getKeyMetrics = async (query: string) => {
  try {
      const ticker = query.toUpperCase();
    // Banco de dados simulado com métricas financeiras reais (TTM) para testes de UI
      const stockMetricsDatabase: Record<string, any> = {
      AAPL: {
        marketCapTTM: "2.9T",
        currentRatioTTM: 1.05,
        roeTTM: 1.60,
        returnOnTangibleAssetsTTM: 0.28,
        freeCashFlowPerShareTTM: 6.1,
        bookValuePerShareTTM: 4.35,
        dividendYieldTTM: 0.0055,
        capexPerShareTTM: -0.65,
        grahamNumberTTM: 65.40,
        peRatioTTM: 28.5,
      },
      MSFT: {
        marketCapTTM: "3.1T",
        currentRatioTTM: 1.22,
        roeTTM: 0.38,
        returnOnTangibleAssetsTTM: 0.20,
        freeCashFlowPerShareTTM: 9.2,
        bookValuePerShareTTM: 15.60,
        dividendYieldTTM: 0.0071,
        capexPerShareTTM: -1.20,
        grahamNumberTTM: 145.10,
        peRatioTTM: 35.2,
      },
      TSLA: {
        marketCapTTM: "570B",
        currentRatioTTM: 1.70,
        roeTTM: 0.22,
        returnOnTangibleAssetsTTM: 0.11,
        freeCashFlowPerShareTTM: 1.4,
        bookValuePerShareTTM: 18.20,
        dividendYieldTTM: 0.0,
        capexPerShareTTM: -2.50,
        grahamNumberTTM: 55.80,
        peRatioTTM: 45.0,
      }
    };

    const finalData = stockMetricsDatabase[ticker] ? stockMetricsDatabase[ticker] : {
      marketCapTTM: "50B",
      currentRatioTTM: 1.50,
      roeTTM: 0.15,
      returnOnTangibleAssetsTTM: 0.10,
      freeCashFlowPerShareTTM: 1.5,
      bookValuePerShareTTM: 10.00,
      dividendYieldTTM: 0.01,
      capexPerShareTTM: -0.50,
      grahamNumberTTM: 30.00,
      peRatioTTM: 20.0,
    };

    // Retorna envelopado no formato padrão do Axios (.data como Array)
    return { data: [finalData] };
    } catch (error: any) {
    console.log("Error in Mock KeyMetrics Service: ", error.message);
  }
};

export const getIncomeStatement = async (query: string) => {
  try {
    const ticker = query.toUpperCase();

    // Banco de dados simulado com o histórico anual (Array) para preencher as colunas da tabela
    const incomeDatabase: Record<string, CompanyIncomeStatement[]> = {
      AAPL: [
        {
          date: "2023-09-30",
          symbol: "AAPL",
          reportedCurrency: "USD",
          cik: "0000320193",
          fillingDate: "2023-10-31",
          acceptedDate: "2023-10-31",
          calendarYear: "2023",
          period: "FY",
          revenue: 383285000000,
          costOfRevenue: 214137000000,
          grossProfit: 169148000000,
          grossProfitRatio: 0.4413,
          researchAndDevelopmentExpenses: 29915000000,
          generalAndAdministrativeExpenses: 0,
          sellingAndMarketingExpenses: 0,
          sellingGeneralAndAdministrativeExpenses: 24932000000,
          otherExpenses: 0,
          operatingExpenses: 54847000000,
          costAndExpenses: 268984000000,
          interestIncome: 3750000000,
          interestExpense: 3930000000,
          depreciationAndAmortization: 11519000000,
          ebitda: 125820000000,
          ebitdaratio: 0.3282,
          operatingIncome: 114301000000,
          operatingIncomeRatio: 0.2982,
          totalOtherIncomeExpensesNet: -565000000,
          incomeBeforeTax: 113736000000,
          incomeBeforeTaxRatio: 0.2967,
          incomeTaxExpense: 16741000000,
          netIncome: 96995000000,
          netIncomeRatio: 0.253,
          eps: 6.16,
          epsdiluted: 6.13,
          weightedAverageShsOut: 15744000000,
          weightedAverageShsOutDil: 15812000000,
          link: "https://www.sec.gov",
          finalLink: "https://www.sec.gov"
        },
        {
          date: "2022-09-24",
          symbol: "AAPL",
          reportedCurrency: "USD",
          cik: "0000320193",
          fillingDate: "2022-10-28",
          acceptedDate: "2022-10-28",
          calendarYear: "2022",
          period: "FY",
          revenue: 394328000000,
          costOfRevenue: 223546000000,
          grossProfit: 170782000000,
          grossProfitRatio: 0.4331,
          researchAndDevelopmentExpenses: 26251000000,
          generalAndAdministrativeExpenses: 0,
          sellingAndMarketingExpenses: 0,
          sellingGeneralAndAdministrativeExpenses: 25094000000,
          otherExpenses: 0,
          operatingExpenses: 51345000000,
          costAndExpenses: 274891000000,
          interestIncome: 2825000000,
          interestExpense: 2930000000,
          depreciationAndAmortization: 11104000000,
          ebitda: 130541000000,
          ebitdaratio: 0.331,
          operatingIncome: 119437000000,
          operatingIncomeRatio: 0.3029,
          totalOtherIncomeExpensesNet: -334000000,
          incomeBeforeTax: 119103000000,
          incomeBeforeTaxRatio: 0.302,
          incomeTaxExpense: 19300000000,
          netIncome: 99803000000,
          netIncomeRatio: 0.2531,
          eps: 6.15,
          epsdiluted: 6.11,
          weightedAverageShsOut: 16215000000,
          weightedAverageShsOutDil: 16325000000,
          link: "https://www.sec.gov",
          finalLink: "https://www.sec.gov"
        }
      ],
      MSFT: [
        {
          date: "2023-06-30",
          symbol: "MSFT",
          reportedCurrency: "USD",
          cik: "0000789019",
          fillingDate: "2023-07-27",
          acceptedDate: "2023-07-27",
          calendarYear: "2023",
          period: "FY",
          revenue: 211915000000,
          costOfRevenue: 65863000000,
          grossProfit: 146052000000,
          grossProfitRatio: 0.6892,
          researchAndDevelopmentExpenses: 27195000000,
          generalAndAdministrativeExpenses: 0,
          sellingAndMarketingExpenses: 0,
          sellingGeneralAndAdministrativeExpenses: 30311000000,
          otherExpenses: 0,
          operatingExpenses: 57506000000,
          costAndExpenses: 123369000000,
          interestIncome: 2994000000,
          interestExpense: 1968000000,
          depreciationAndAmortization: 13861000000,
          ebitda: 102384000000,
          ebitdaratio: 0.4831,
          operatingIncome: 88546000000,
          operatingIncomeRatio: 0.4178,
          totalOtherIncomeExpensesNet: 788000000,
          incomeBeforeTax: 89334000000,
          incomeBeforeTaxRatio: 0.4216,
          incomeTaxExpense: 16973000000,
          netIncome: 72361000000,
          netIncomeRatio: 0.3415,
          eps: 9.72,
          epsdiluted: 9.68,
          weightedAverageShsOut: 7446000000,
          weightedAverageShsOutDil: 7472000000,
          link: "https://www.sec.gov",
          finalLink: "https://www.sec.gov"
        }
      ],
      TSLA: [
        {
          date: "2023-12-31",
          symbol: "TSLA",
          reportedCurrency: "USD",
          cik: "0001318605",
          fillingDate: "2024-01-26",
          acceptedDate: "2024-01-26",
          calendarYear: "2023",
          period: "FY",
          revenue: 96773000000,
          costOfRevenue: 79113000000,
          grossProfit: 17660000000,
          grossProfitRatio: 0.1825,
          researchAndDevelopmentExpenses: 3969000000,
          generalAndAdministrativeExpenses: 0,
          sellingAndMarketingExpenses: 0,
          sellingGeneralAndAdministrativeExpenses: 4830000000,
          otherExpenses: 0,
          operatingExpenses: 8799000000,
          costAndExpenses: 87912000000,
          interestIncome: 1009000000,
          interestExpense: 15600000,
          depreciationAndAmortization: 4667000000,
          ebitda: 13551000000,
          ebitdaratio: 0.14,
          operatingIncome: 8891000000,
          operatingIncomeRatio: 0.0919,
          totalOtherIncomeExpensesNet: 1004000000,
          incomeBeforeTax: 9901000000,
          incomeBeforeTaxRatio: 0.1023,
          incomeTaxExpense: 112000000,
          netIncome: 14997000000,
          netIncomeRatio: 0.155,
          eps: 4.34,
          epsdiluted: 4.30,
          weightedAverageShsOut: 3174000000,
          weightedAverageShsOutDil: 3186000000,
          link: "https://www.sec.gov",
          finalLink: "https://www.sec.gov"
        }
      ]
    };

    // Fallback dinâmico para garantir que qualquer outro ticker digitado monte a tabela sem crashar
    const finalData = incomeDatabase[ticker] ? incomeDatabase[ticker] : [
      {
        date: "2023-12-31",
        symbol: ticker,
        reportedCurrency: "USD",
        cik: "0000000000",
        fillingDate: "2024-01-01",
        acceptedDate: "2024-01-01",
        calendarYear: "2023",
        period: "FY",
        revenue: 50000000000,
        costOfRevenue: 30000000000,
        grossProfit: 20000000000,
        grossProfitRatio: 0.40,
        researchAndDevelopmentExpenses: 2000000000,
        generalAndAdministrativeExpenses: 0,
        sellingAndMarketingExpenses: 0,
        sellingGeneralAndAdministrativeExpenses: 3000000000,
        otherExpenses: 0,
        operatingExpenses: 5000000000,
        costAndExpenses: 35000000000,
        interestIncome: 100000000,
        interestExpense: 50000000,
        depreciationAndAmortization: 1000000000,
        ebitda: 16000000000,
        ebitdaratio: 0.32,
        operatingIncome: 15000000000,
        operatingIncomeRatio: 0.30,
        totalOtherIncomeExpensesNet: 0,
        incomeBeforeTax: 15000000000,
        incomeBeforeTaxRatio: 0.30,
        incomeTaxExpense: 3000000000,
        netIncome: 12000000000,
        netIncomeRatio: 0.24,
        eps: 2.50,
        epsdiluted: 2.45,
        weightedAverageShsOut: 5000000000,
        weightedAverageShsOutDil: 5100000000,
        link: "https://www.sec.gov",
        finalLink: "https://www.sec.gov"
      }
    ];

    // Mantém o encapsulamento padrão do Axios (.data como Array)
    return { data: finalData };

  } catch (error: any) {
    console.log("Error in Mock IncomeStatement Service: ", error.message);
  }
};


export const getBalanceSheet = async (query: string) => {
  try {
    const ticker = query.toUpperCase();

    const balanceDatabase: Record<string, CompanyBalanceSheet[]> = {
      AAPL: [
        {
          date: "2023-09-30",
          symbol: "AAPL",
          reportedCurrency: "USD",
          cik: "0000320193",
          fillingDate: "2023-10-31",
          acceptedDate: "2023-10-31",
          calendarYear: "2023",
          period: "FY",
          cashAndCashEquivalents: 29965000000,
          shortTermInvestments: 31590000000,
          cashAndShortTermInvestments: 61555000000,
          netReceivables: 60985000000,
          inventory: 6331000000,
          otherCurrentAssets: 14695000000,
          totalCurrentAssets: 143566000000,
          propertyPlantEquipmentNet: 43715000000,
          goodwill: 0,
          intangibleAssets: 0,
          goodwillAndIntangibleAssets: 0,
          longTermInvestments: 100544000000,
          taxAssets: 0,
          otherNonCurrentAssets: 64758000000,
          totalNonCurrentAssets: 209017000000,
          otherAssets: 0,
          totalAssets: 352583000000,
          accountPayables: 49449000000,
          shortTermDebt: 15816000000,
          taxPayables: 0,
          deferredRevenue: 8081000000,
          otherCurrentLiabilities: 61125000000,
          totalCurrentLiabilities: 145308000000,
          longTermDebt: 95081000000,
          deferredRevenueNonCurrent: 0,
          deferredTaxLiabilitiesNonCurrent: 0,
          otherNonCurrentLiabilities: 49845000000,
          totalNonCurrentLiabilities: 144926000000,
          otherLiabilities: 0,
          capitalLeaseObligations: 0,
          totalLiabilities: 290234000000,
          preferredStock: 0,
          commonStock: 73812000000,
          retainedEarnings: -2141000000,
          accumulatedOtherComprehensiveIncomeLoss: -10527000000,
          othertotalStockholdersEquity: 0,
          totalStockholdersEquity: 62149000000,
          totalEquity: 62149000000,
          totalLiabilitiesAndStockholdersEquity: 352583000000,
          minorityInterest: 0,
          totalLiabilitiesAndTotalEquity: 352583000000,
          totalInvestments: 132134000000,
          totalDebt: 111097000000,
          netDebt: 81132000000,
          link: "https://www.sec.gov",
          finalLink: "https://www.sec.gov"
        }
      ],
      MSFT: [
        {
          date: "2023-06-30",
          symbol: "MSFT",
          reportedCurrency: "USD",
          cik: "0000789019",
          fillingDate: "2023-07-27",
          acceptedDate: "2023-07-27",
          calendarYear: "2023",
          period: "FY",
          cashAndCashEquivalents: 34704000000,
          shortTermInvestments: 76558000000,
          cashAndShortTermInvestments: 111262000000,
          netReceivables: 48688000000,
          inventory: 2500000000,
          otherCurrentAssets: 21807000000,
          totalCurrentAssets: 184257000000,
          propertyPlantEquipmentNet: 95641000000,
          goodwill: 67886000000,
          intangibleAssets: 9366000000,
          goodwillAndIntangibleAssets: 77252000000,
          longTermInvestments: 9879000000,
          taxAssets: 0,
          otherNonCurrentAssets: 44101000000,
          totalNonCurrentAssets: 227713000000,
          otherAssets: 0,
          totalAssets: 411970000000,
          accountPayables: 18095000000,
          shortTermDebt: 5247000000,
          taxPayables: 0,
          deferredRevenue: 50669000000,
          otherCurrentLiabilities: 30421000000,
          totalCurrentLiabilities: 104432000000,
          longTermDebt: 41990000000,
          deferredRevenueNonCurrent: 0,
          deferredTaxLiabilitiesNonCurrent: 0,
          otherNonCurrentLiabilities: 62455000000,
          totalNonCurrentLiabilities: 104445000000,
          otherLiabilities: 0,
          capitalLeaseObligations: 0,
          totalLiabilities: 208877000000,
          preferredStock: 0,
          commonStock: 93753000000,
          retainedEarnings: 118848000000,
          accumulatedOtherComprehensiveIncomeLoss: -9508000000,
          othertotalStockholdersEquity: 0,
          totalStockholdersEquity: 203093000000,
          totalEquity: 203093000000,
          totalLiabilitiesAndStockholdersEquity: 411970000000,
          minorityInterest: 0,
          totalLiabilitiesAndTotalEquity: 411970000000,
          totalInvestments: 86437000000,
          totalDebt: 47237000000,
          netDebt: 12533000000,
          link: "https://www.sec.gov",
          finalLink: "https://www.sec.gov"
        }
      ],
      TSLA: [
        {
          date: "2023-12-31",
          symbol: "TSLA",
          reportedCurrency: "USD",
          cik: "0001318605",
          fillingDate: "2024-01-26",
          acceptedDate: "2024-01-26",
          calendarYear: "2023",
          period: "FY",
          cashAndCashEquivalents: 16358000000,
          shortTermInvestments: 12731000000,
          cashAndShortTermInvestments: 29089000000,
          netReceivables: 4801000000,
          inventory: 13626000000,
          otherCurrentAssets: 3383000000,
          totalCurrentAssets: 50899000000,
          propertyPlantEquipmentNet: 29725000000,
          goodwill: 0,
          intangibleAssets: 457000000,
          goodwillAndIntangibleAssets: 457000000,
          longTermInvestments: 0,
          taxAssets: 0,
          otherNonCurrentAssets: 23628000000,
          totalNonCurrentAssets: 53810000000,
          otherAssets: 0,
          totalAssets: 104709000000,
          accountPayables: 14430000000,
          shortTermDebt: 2333000000,
          taxPayables: 0,
          deferredRevenue: 2795000000,
          otherCurrentLiabilities: 9140000000,
          totalCurrentLiabilities: 28698000000,
          longTermDebt: 2857000000,
          deferredRevenueNonCurrent: 0,
          deferredTaxLiabilitiesNonCurrent: 0,
          otherNonCurrentLiabilities: 11475000000,
          totalNonCurrentLiabilities: 14332000000,
          otherLiabilities: 0,
          capitalLeaseObligations: 0,
          totalLiabilities: 43030000000,
          preferredStock: 0,
          commonStock: 29334000000,
          retainedEarnings: 33498000000,
          accumulatedOtherComprehensiveIncomeLoss: -153000000,
          othertotalStockholdersEquity: 0,
          totalStockholdersEquity: 61679000000,
          totalEquity: 61679000000,
          totalLiabilitiesAndStockholdersEquity: 104709000000,
          minorityInterest: 0,
          totalLiabilitiesAndTotalEquity: 104709000000,
          totalInvestments: 12731000000,
          totalDebt: 5190000000,
          netDebt: -11168000000,
          link: "https://www.sec.gov",
          finalLink: "https://www.sec.gov"
        }
      ]
    };

    const finalData = balanceDatabase[ticker] ? balanceDatabase[ticker] : [
      {
        date: "2023-12-31",
        symbol: ticker,
        reportedCurrency: "USD",
        cik: "0000000000",
        fillingDate: "2024-01-01",
        acceptedDate: "2024-01-01",
        calendarYear: "2023",
        period: "FY",
        cashAndCashEquivalents: 10000000000,
        shortTermInvestments: 5000000000,
        cashAndShortTermInvestments: 15000000000,
        netReceivables: 5000000000,
        inventory: 2000000000,
        otherCurrentAssets: 1000000000,
        totalCurrentAssets: 23000000000,
        propertyPlantEquipmentNet: 10000000000,
        goodwill: 0,
        intangibleAssets: 0,
        goodwillAndIntangibleAssets: 0,
        longTermInvestments: 2000000000,
        taxAssets: 0,
        otherNonCurrentAssets: 1000000000,
        totalNonCurrentAssets: 13000000000,
        otherAssets: 0,
        totalAssets: 36000000000,
        accountPayables: 4000000000,
        shortTermDebt: 1000000000,
        taxPayables: 0,
        deferredRevenue: 1000000000,
        otherCurrentLiabilities: 2000000000,
        totalCurrentLiabilities: 8000000000,
        longTermDebt: 5000000000,
        deferredRevenueNonCurrent: 0,
        deferredTaxLiabilitiesNonCurrent: 0,
        otherNonCurrentLiabilities: 2000000000,
        totalNonCurrentLiabilities: 7000000000,
        otherLiabilities: 0,
        capitalLeaseObligations: 0,
        totalLiabilities: 15000000000,
        preferredStock: 0,
        commonStock: 10000000000,
        retainedEarnings: 12000000000,
        accumulatedOtherComprehensiveIncomeLoss: -1000000000,
        othertotalStockholdersEquity: 0,
        totalStockholdersEquity: 21000000000,
        totalEquity: 21000000000,
        totalLiabilitiesAndStockholdersEquity: 36000000000,
        minorityInterest: 0,
        totalLiabilitiesAndTotalEquity: 36000000000,
        totalInvestments: 7000000000,
        totalDebt: 6000000000,
        netDebt: -4000000000,
        link: "https://www.sec.gov",
        finalLink: "https://www.sec.gov"
      }
    ];

    return { data: finalData };
  } catch (error: any) {
    console.log("Error in Mock BalanceSheet: ", error.message);
  }
};

export const getCashFlowStatement = async (query: string) => {
  try {
    const ticker = query.toUpperCase();

    const cashFlowDatabase: Record<string, CompanyCashFlow[]> = {
      AAPL: [
        {
          date: "2023-09-30",
          symbol: "AAPL",
          reportedCurrency: "USD",
          cik: "0000320193",
          fillingDate: "2023-10-31",
          acceptedDate: "2023-10-31",
          calendarYear: "2023",
          period: "FY",
          netIncome: 96995000000,
          depreciationAndAmortization: 11519000000,
          deferredIncomeTax: 0,
          stockBasedCompensation: 10811000000,
          changeInWorkingCapital: -4679000000,
          accountsReceivables: -1688000000,
          inventory: -1618000000,
          accountsPayables: -1889000000,
          otherWorkingCapital: 516000000,
          otherNonCashItems: 0,
          netCashProvidedByOperatingActivities: 110543000000,
          investmentsInPropertyPlantAndEquipment: -10959000000,
          acquisitionsNet: 0,
          purchasesOfInvestments: -29511000000,
          salesMaturitiesOfInvestments: 37005000000,
          otherInvestingActivites: -110000000,
          netCashUsedForInvestingActivites: -3705000000,
          debtRepayment: -11151000000,
          commonStockIssued: 0,
          commonStockRepurchased: -77550000000,
          dividendsPaid: -15025000000,
          otherFinancingActivites: -4313000000,
          netCashUsedProvidedByFinancingActivities: -108488000000,
          effectOfForexChangesOnCash: 0,
          netChangeInCash: -1650000000,
          cashAtEndOfPeriod: 30739000000,
          cashAtBeginningOfPeriod: 32389000000,
          operatingCashFlow: 110543000000,
          capitalExpenditure: -10959000000,
          freeCashFlow: 99584000000,
          link: "https://www.sec.gov",
          finalLink: "https://www.sec.gov"
        }
      ],
      MSFT: [
        {
          date: "2023-06-30",
          symbol: "MSFT",
          reportedCurrency: "USD",
          cik: "0000789019",
          fillingDate: "2023-07-27",
          acceptedDate: "2023-07-27",
          calendarYear: "2023",
          period: "FY",
          netIncome: 72361000000,
          depreciationAndAmortization: 13861000000,
          deferredIncomeTax: -6023000000,
          stockBasedCompensation: 9611000000,
          changeInWorkingCapital: -2388000000,
          accountsReceivables: -4933000000,
          inventory: 1242000000,
          accountsPayables: 2721000000,
          otherWorkingCapital: 0,
          otherNonCashItems: 0,
          netCashProvidedByOperatingActivities: 87582000000,
          investmentsInPropertyPlantAndEquipment: -28107000000,
          acquisitionsNet: -1670000000,
          purchasesOfInvestments: -37651000000,
          salesMaturitiesOfInvestments: 31317000000,
          otherInvestingActivites: -1522000000,
          netCashUsedForInvestingActivites: -37673000000,
          debtRepayment: -5500000000,
          commonStockIssued: 1866000000,
          commonStockRepurchased: -22203000000,
          dividendsPaid: -19800000000,
          otherFinancingActivites: -1006000000,
          netCashUsedProvidedByFinancingActivities: -46643000000,
          effectOfForexChangesOnCash: -194000000,
          netChangeInCash: 3072000000,
          cashAtEndOfPeriod: 34704000000,
          cashAtBeginningOfPeriod: 31632000000,
          operatingCashFlow: 87582000000,
          capitalExpenditure: -28107000000,
          freeCashFlow: 59475000000,
          link: "https://www.sec.gov",
          finalLink: "https://www.sec.gov"
        }
      ],
      TSLA: [
        {
          date: "2023-12-31",
          symbol: "TSLA",
          reportedCurrency: "USD",
          cik: "0001318605",
          fillingDate: "2024-01-26",
          acceptedDate: "2024-01-26",
          calendarYear: "2023",
          period: "FY",
          netIncome: 14997000000,
          depreciationAndAmortization: 4667000000,
          deferredIncomeTax: -3408000000,
          stockBasedCompensation: 1632000000,
          changeInWorkingCapital: -1372000000,
          accountsReceivables: -527000000,
          inventory: -1211000000,
          accountsPayables: 1541000000,
          otherWorkingCapital: 0,
          otherNonCashItems: 0,
          netCashProvidedByOperatingActivities: 13256000000,
          investmentsInPropertyPlantAndEquipment: -8899000000,
          acquisitionsNet: 0,
          purchasesOfInvestments: -4500000000,
          salesMaturitiesOfInvestments: 2310000000,
          otherInvestingActivites: 0,
          netCashUsedForInvestingActivites: -11089000000,
          debtRepayment: -1813000000,
          commonStockIssued: 0,
          commonStockRepurchased: 0,
          dividendsPaid: 0,
          otherFinancingActivites: -312000000,
          netCashUsedProvidedByFinancingActivities: -2125000000,
          effectOfForexChangesOnCash: 123000000,
          netChangeInCash: 1650000000,
          cashAtEndOfPeriod: 16358000000,
          cashAtBeginningOfPeriod: 14708000000,
          operatingCashFlow: 13256000000,
          capitalExpenditure: -8899000000,
          freeCashFlow: 4357000000,
          link: "https://www.sec.gov",
          finalLink: "https://www.sec.gov"
        }
      ]
    };

    const finalData = cashFlowDatabase[ticker] ? cashFlowDatabase[ticker] : [
      {
        date: "2023-12-31",
        symbol: ticker,
        reportedCurrency: "USD",
        cik: "0000000000",
        fillingDate: "2024-01-01",
        acceptedDate: "2024-01-01",
        calendarYear: "2023",
        period: "FY",
        netIncome: 50000000000,
        depreciationAndAmortization: 5000000000,
        deferredIncomeTax: 0,
        stockBasedCompensation: 2000000000,
        changeInWorkingCapital: -1000000000,
        accountsReceivables: -500000000,
        inventory: -300000000,
        accountsPayables: 400000000,
        otherWorkingCapital: 0,
        otherNonCashItems: 0,
        netCashProvidedByOperatingActivities: 55000000000,
        investmentsInPropertyPlantAndEquipment: -5000000000,
        acquisitionsNet: 0,
        purchasesOfInvestments: -10000000000,
        salesMaturitiesOfInvestments: 12000000000,
        otherInvestingActivites: 0,
        netCashUsedForInvestingActivites: -3000000000,
        debtRepayment: -4000000000,
        commonStockIssued: 0,
        commonStockRepurchased: -25000000000,
        dividendsPaid: -5000000000,
        otherFinancingActivites: 0,
        netCashUsedProvidedByFinancingActivities: -34000000000,
        effectOfForexChangesOnCash: 0,
        netChangeInCash: 18000000000,
        cashAtEndOfPeriod: 28000000000,
        cashAtBeginningOfPeriod: 10000000000,
        operatingCashFlow: 55000000000,
        capitalExpenditure: -5000000000,
        freeCashFlow: 50000000000,
        link: "https://www.sec.gov",
        finalLink: "https://www.sec.gov"
      }
    ];

    return { data: finalData };
  } catch (error: any) {
    console.log("Error in Mock CashFlow: ", error.message);
  }
};