import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getAccount } from '../../services/api';

interface IParams {
  name: string;
}

interface IAccount {
  name: string;
  _id: string;
}

const Account: React.FC = () => {
  const { name: nameParam } = useParams<IParams>();
  const [isLoading, setIsLoading] = useState(true);
  const [accountData, setAccountData] = useState<IAccount | null>(null);

  useEffect(() => {
    getAccount(nameParam).then((accountResponse) => {
      if (!accountResponse) setAccountData(null);
      else setAccountData(accountResponse);
      return setIsLoading(false);
    });
  }, [nameParam]);

  if (isLoading) return <h1>loading...</h1>;

  if (!accountData) return <h1>Account not found</h1>;

  return (
    <div>
      <h3>This page is for </h3>
      <h1>{accountData.name}</h1>
      <p>the owner of the id {accountData._id}</p>
      <button>SHARE</button>
    </div>
  );
};

export default Account;
