"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useRef, useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import "./SearchInput.scss";

interface SearchInputClientProps {
  placeholder?: string;
}

const SearchInputClient: React.FC<SearchInputClientProps> = ({
  placeholder = "Search for a country...",
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const inputRef = useRef<HTMLInputElement>(null);
  const [searchValue, setSearchValue] = useState("");

  // Initialize search value from URL params
  useEffect(() => {
    const search = searchParams.get("search");
    if (search) {
      setSearchValue(search);
      if (inputRef.current) {
        inputRef.current.value = search;
      }
    }
  }, [searchParams]);

  const handleSearch = () => {
    const value = inputRef.current?.value.trim() || "";
    setSearchValue(value);

    // Update URL with search param
    const params = new URLSearchParams();
    if (value) {
      params.set("search", value);
      router.push(`/?${params.toString()}`);
    } else {
      router.push("/");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch();
    }
  };

  return (
    <div className="search-input" data-testid="search-input">
      <input
        type="search"
        placeholder={placeholder}
        className="search-input__field"
        name="search"
        id="search"
        ref={inputRef}
        defaultValue={searchValue}
        onKeyDown={handleKeyDown}
      />
      <button
        className="search-input__cta bg-[#b9d8ff]"
        type="button"
        onClick={handleSearch}
        aria-label="Search"
      >
        <AiOutlineSearch style={{ fontSize: "1.4rem" }} />
      </button>
    </div>
  );
};

export default SearchInputClient;
