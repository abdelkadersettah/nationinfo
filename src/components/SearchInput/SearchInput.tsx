import { useRef } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import './SearchInput.scss';

interface IProps {
  name?: string;
  placeholder?: string;
  searchText?: string;
  onSearch?: (searchedKey: string) => void;
  onValueChange?: (searchedKey: string) => void;
  value?: string;
}

const SearchInput: React.FC<IProps> = ({
  name = 'searchKey',
  placeholder = 'Search...',
  searchText = 'Search',
  onValueChange,
  onSearch,
  value,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div className="search-input" data-testid="search-input">
      <input
        type="search"
        placeholder={placeholder}
        className="search-input__field"
        name={name}
        id={name}
        ref={inputRef}
        value={value}
      />
      <button
        className="search-input__cta bg-[#b9d8ff]"
        type="button"
        onClick={(e) => {
          if (onSearch) {
            onSearch(inputRef?.current?.value ?? '');
          }
        }}
        // disabled={!value}
      >
        <AiOutlineSearch style={{ fontSize: '1.4rem' }} />
      </button>
    </div>
  );
};
export default SearchInput;
