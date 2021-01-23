import React, { useState } from 'react';

const CreateAccount: React.FC = () => {
  const [accountName, setAccountName] = useState('');

  return (
    <div>
      <input onChange={(event) => setAccountName(event.target.value)} />
      <button>Create account</button>
    </div>
  );
};

export default CreateAccount;
