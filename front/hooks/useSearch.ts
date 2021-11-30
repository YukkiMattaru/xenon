import React, { useState } from 'react';

const useSearch = (onChangeCallback?: (searchString: string) => void) => {
  const [search, setSearch] = useState<string>('');

  const handleReset = () => {
    setSearch('');
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const { value } = event.currentTarget;
    onChangeCallback?.(value);
    setSearch(value);
  };

  return { search, handleChange, handleReset };
};

export default useSearch;
