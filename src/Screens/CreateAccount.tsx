import React, { useState } from 'react';

function CreateAccount() {
  const [accountName, setAccountName] = useState('');

  console.log(accountName)

  return (
    <div>
      <input onChange={(event) => setAccountName(event.target.value)} />
    </div>
  );
}

export default CreateAccount;
