import React, { useEffect, useState } from 'react'
import { CompanyBalanceSheet, CompanyCashFlow } from '../../company';
import { useOutletContext } from 'react-router-dom';
import { getBalanceSheet } from '../../api';
import RadioList from '../RadioList/RadioList';

type Props = {}

const config = [
  {
    label: "Date",
    render: (company: CompanyBalanceSheet) => company.date,
  },
  {
    label: "Total Assets",
    render: (company: CompanyBalanceSheet) => company.totalAssets,
  },
  {
    label: "Total Liabilities",
    render: (company: CompanyBalanceSheet) => company.totalLiabilities,
  },
  {
    label: "Total Equity",
    render: (company: CompanyBalanceSheet) => company.totalEquity,
  },
  {
    label: "Cash & Short Term Investments",
    render: (company: CompanyBalanceSheet) => company.cashAndShortTermInvestments,
  },
  {
    label: "Total Debt",
    render: (company: CompanyBalanceSheet) => company.totalDebt,
  },
  {
    label: "Net Debt",
    render: (company: CompanyBalanceSheet) => company.netDebt,
  },
];

const BalanceSheet = (props: Props) => {
    const ticker = useOutletContext<string>();
    const [balanceSheet, setBalanceSheet] = useState<CompanyBalanceSheet>();
    useEffect(()=> {
        const getData = async() => {
            const value = await getBalanceSheet(ticker!);
            setBalanceSheet(value?.data[0]);
        };
        getData();
    }, []);

  return (
    <>
        {balanceSheet ? (
            <RadioList config={config} data={balanceSheet} />

        ): (
            <h1>Company not found!</h1>
        )}
    </>
  )
}

export default BalanceSheet