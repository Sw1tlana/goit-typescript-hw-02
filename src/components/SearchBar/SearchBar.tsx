import toast from 'react-hot-toast';
import css from './SearchBar.module.css';
import { BsSearch } from "react-icons/bs";
import { FormEvent } from 'react';

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const handleSubmit = (evt: FormEvent<HTMLFormElement>): void => {
      evt.preventDefault();
      const form = evt.target as HTMLFormElement;
      const query = (form.elements.namedItem('query') as HTMLFormElement).value.trim();
  if (query !== '') {
      onSubmit(query); 
    } else {
      toast.error('Please enter a search query!');
    }
    form.reset();
  }

  return (
  <header className={css.header}>
    <form onSubmit={handleSubmit} className={css.form}>
      <div className={css.inputContainer}>
      <input
      className={css.inputSearch}
      type="text"
      name="query"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
          />
          <button className={css.searchButton} type="submit"><BsSearch /></button>
      </div>
  </form>
</header>
  )
}

export default SearchBar