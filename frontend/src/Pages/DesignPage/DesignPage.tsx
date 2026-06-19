import React from 'react'
import Table from '../../Components/Table/Table';
import RadioList from '../../Components/RadioList/RadioList';

type Props = {}

const DesignPage = (props: Props) => {
  return (
    <>
        <h1>FinShark Design Page</h1>
        <RadioList />
        <h2>This is FinShar's design page. 
            This is were e well house varios design aspects of the app.</h2>
        <Table />
    </>
  )
}

export default DesignPage