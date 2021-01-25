import React, { useState } from 'react';
import { createAccount } from '../../services/api';

import './style.css';

const CreateAccount: React.FC = () => {
  const [accountName, setAccountName] = useState('');
  const [message, setMessage] = useState('');

  const handleNameInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage('');
    setAccountName(event?.target?.value ?? '');
  };

  const generatePage = (name: string = accountName) => {
    window.open(name, '_blank');
  };

  const handleCreateAccountClick = async () => {
    if (!accountName) return setMessage('Please insert a name');
    createAccount(accountName).then((createdAccount) => {
      if (!createdAccount) setMessage('Account already exists');
      else generatePage(createdAccount.name);
      setAccountName('');
    });
  };

  return (
    <div className="flex-column-container">
      <input className="name-input" value={accountName} onChange={handleNameInput} />
      <button onClick={handleCreateAccountClick}>Create account</button>
      <p>{message}</p>
    </div>
  );
};

export default CreateAccount;
