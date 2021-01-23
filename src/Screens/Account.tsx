import React from 'react';
import { useParams } from 'react-router-dom';

interface IParams {
  name: string;
}

const Account: React.FC = () => {
  const { name } = useParams<IParams>();

  return (
    <div>
      <h1>This page is for {name}</h1>
      <button>SHARE</button>
    </div>
  );
};

export default Account;
