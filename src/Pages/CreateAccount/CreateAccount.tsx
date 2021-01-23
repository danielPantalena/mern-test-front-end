import React, { useState } from 'react';
import { createAccount } from '../../services/api';

import './style.css';

const CreateAccount: React.FC = () => {
  const [accountName, setAccountName] = useState<string | undefined>('');
  const [message, setMessage] = useState('');

  const handleNameInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage('');
    setAccountName(event?.target?.value);
  };

  const handleCreateAccountClick = async () => {
    if (!accountName) return setMessage('Please insert a name');
    createAccount(accountName).then((createdAccount) => {
      setMessage(
        createdAccount
          ? `Account created: ${JSON.stringify(createdAccount)}`
          : 'Account already exists',
      );
      setAccountName('');
    });
  };

  return (
    <div className="flex-column-container">
      <h1>Create an Account</h1>
      <input className="name-input" value={accountName} onChange={handleNameInput} />
      <button onClick={handleCreateAccountClick}>Create account</button>
      <p>{message}</p>
    </div>
  );
};

export default CreateAccount;
