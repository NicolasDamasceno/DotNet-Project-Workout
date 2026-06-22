import React from 'react'
import Table from '../../Components/Table/Table';
import RadioList from '../../Components/RadioList/RadioList';
import { CompanyKeyMetrics } from '../../company';
import { testIncomeStatementData } from '../../Components/Table/testData';

type Props = {};

const tableConfig = [
  {
    label: "Market Cap",
    render: (company: any) => company.marketCapTTM,
    subTitle: "Total value of all a company's shares of stock",
  },
]

const DesignPage = (props: Props) => {
  return (
    <>
        <h1>FinShark Design Page</h1>
        <RadioList data={testIncomeStatementData} config={tableConfig}/>
        <h2>This is FinShar's design page. 
            This is were e well house varios design aspects of the app.</h2>
        <Table data={testIncomeStatementData} config={tableConfig} />
    </>
  )
}

export default DesignPage