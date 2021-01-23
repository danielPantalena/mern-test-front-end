import React, { useState } from 'react';
import { createAccount } from '../services/api';

const CreateAccount: React.FC = () => {
  const [accountName, setAccountName] = useState<string | undefined>('');
  const [message, setMessage] = useState('');

  const handleNameInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage('');
    setAccountName(event?.target?.value);
  };

  const handleCreateAccountClick = async () => {
    if (!accountName) return null;
    createAccount(accountName).then((createdAccount) => {
      if (!createdAccount) {
        setMessage('This account already exists');
      } else {
        setMessage(`Account created: ${JSON.stringify(createdAccount)}`);
      }
      setAccountName('');
    });
  };

  return (
    <div>
      <input value={accountName} onChange={handleNameInput} />
      <button onClick={handleCreateAccountClick}>Create account</button>
      <p>{message}</p>
    </div>
  );
};

export default CreateAccount;
