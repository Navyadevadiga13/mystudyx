import { useState } from "react";

interface MobileSidebarProps {
  isSearch: boolean;
  setIsSearch: (isSearch: boolean) => void;
}

const HeaderSearch = ({ isSearch, setIsSearch }: MobileSidebarProps) => {

  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchValue('');
    setIsSearch(false);
  };

  return (
    <>
      <div className="search-wrap" style={{ display: isSearch ? "block" : "none" }}>
        <div className="search-inner">
          <i onClick={() => setIsSearch(false)} style={{ cursor: "pointer" }} className={`fas fa-times search-close ${isSearch ? "open" : ""}`} id="search-close"></i>
          <div className="search-cell">
            <form onSubmit={handleSubmit}>
              <div className="search-field-holder">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchValue}
                  onChange={handleSearchChange}
                  className="main-search-input"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeaderSearch