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
  return (
    <div className="search-input" data-testid="search-input">
      <input
        type="search"
        placeholder={placeholder}
        className="search-input__field"
        name={name}
        id={name}
        value={value}
        onChange={(e) => {
          onValueChange && onValueChange(e.target.value);
        }}
      />
      <button
        className="search-input__cta"
        type="button"
        onClick={(e) => {
          if (onSearch) {
            onSearch(value ?? '');
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
