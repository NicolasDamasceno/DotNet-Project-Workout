import React, { useEffect, useState } from 'react'
import { CompanyTenK } from '../../company';
import TenKFinderItem from './TenkFinderItem/TenKFinderItem';
import Spinner from '../Spinner/Spinner';
import { getTenK } from '../../api';

type Props = {
    ticker: string;
}

const TenKFinder = ({ticker}: Props) => {
    const [companyData, setCompanyData] = useState<CompanyTenK[]>();
    
    useEffect(() => {
        const getTenKData = async() => {
            const value = await getTenK(ticker);
            console.log("Retorno real da API:", value?.data);
            setCompanyData(value?.data);
        };
        getTenKData();
    }, [ticker])
    return (
    <div className="inlime-flex rounded-md shadow-sm m-4">
        {companyData ? (
            companyData?.slice(0,5).map((tenK) => {
                return <TenKFinderItem tenK={tenK}/>
            })
        ): (
            <Spinner/>
        )}
    </div>
  )
}

export default TenKFinder