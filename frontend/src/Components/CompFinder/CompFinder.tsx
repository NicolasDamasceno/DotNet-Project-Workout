import React, { useEffect, useState } from 'react'
import { PeerCompany } from '../../company';
import { getCompData } from '../../api';
import CompFinderItem from './CompFinderItem/CompFinderItem';
import Spinner from '../Spinner/Spinner';

type Props = {
    ticker: string;

}

const CompFinder = ({ticker}: Props) => {
    const [peers, setPeers] = useState<PeerCompany[]>([]);
    useEffect(() => {
       const getComps = async() => {
        const value = await getCompData(ticker);
        if (value?.data) {
            setPeers(value.data);
        }

       }
       getComps();
    }, [ticker]);

  return (
    <div className="inline-flex rounded-md shadow-sm m-4">
        {peers.length > 0? (
            peers.map((company) => {
                return <CompFinderItem key={company.symbol} ticker={company.symbol}/>
            })
        ) : (
            <Spinner/>
        )}
    </div>
  )
}

export default CompFinder