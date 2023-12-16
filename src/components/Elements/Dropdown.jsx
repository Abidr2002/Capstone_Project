import { useState } from 'react';

// eslint-disable-next-line react/prop-types
const Dropdown = ({ onSortFieldChange, onSortOrderChange }) => {
  const [fieldDropdownOpen, setFieldDropdownOpen] = useState(false);
  const [orderDropdownOpen, setOrderDropdownOpen] = useState(false);
  const [sortField, setSortField] = useState('date');
  const [sortOrder, setSortOrder] = useState('asc');

  const handleFieldMouseEnter = () => {
    setFieldDropdownOpen(true);
  };

  const handleFieldMouseLeave = () => {
    setFieldDropdownOpen(false);
  };

  const handleOrderMouseEnter = () => {
    setOrderDropdownOpen(true);
  };

  const handleOrderMouseLeave = () => {
    setOrderDropdownOpen(false);
  };

  const handleSortFieldClick = (field) => {
    if (field === 'title' || field === 'date') {
      onSortFieldChange(field);
      setSortField(field);
    }
    setFieldDropdownOpen(false);
  };

  const handleSortOrderClick = (order) => {
    onSortOrderChange(order);
    setSortOrder(order);
    setOrderDropdownOpen(false);
  };

  return (
    <div className="flex">
      <div className="relative">
        <div
          id="fieldDropdownButton"
          data-dropdown-toggle="dropdown"
          onMouseEnter={handleFieldMouseEnter}
          onMouseLeave={handleFieldMouseLeave}
          className="text-black border border-black rounded-lg text-xs md:text-sm px-3 py-2 md:px-5 md:py-2.5 text-center inline-flex items-center cursor-pointer"
        >
          {`Sort By ${sortField.charAt(0).toUpperCase() + sortField.slice(1)}`}
          <svg
            className={`w-2.5 h-2.5 ms-3 ${
              fieldDropdownOpen ? 'transform rotate-180' : ''
            }`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </div>

        <div
          id="fieldDropdown"
          className={`z-10 ${
            fieldDropdownOpen ? '' : 'hidden'
          } bg-white divide-y divide-gray-100 rounded-lg shadow w-full absolute`}
          onMouseEnter={handleFieldMouseEnter}
          onMouseLeave={handleFieldMouseLeave}
        >
          <ul
            className="py-2 md:text-sm text-xs text-gray-700"
            aria-labelledby="fieldDropdownButton"
          >
            <li>
              <div
                className={`${
                  sortField === 'date'
                    ? 'hidden'
                    : 'block px-4 py-2 hover:bg-gray-200 cursor-pointer'
                }`}
                onClick={() => handleSortFieldClick('date')}
              >
                Sort By Date
              </div>
            </li>
            <li>
              <div
                className={`${
                  sortField === 'title'
                    ? 'hidden'
                    : 'block px-4 py-2 hover:bg-gray-200 cursor-pointer'
                }`}
                onClick={() => handleSortFieldClick('title')}
              >
                Sort By Title
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative  ml-2 md:ml-4">
        <div
          id="orderDropdownButton"
          data-dropdown-toggle="dropdown"
          onMouseEnter={handleOrderMouseEnter}
          onMouseLeave={handleOrderMouseLeave}
          className="text-black border border-black rounded-lg text-xs md:text-sm px-3 py-2 md:px-5 md:py-2.5 text-center inline-flex items-center cursor-pointer" // Menambahkan cursor-pointer agar tampilan kursor sesuai
        >
          {`Sort ${sortOrder === 'asc' ? 'Ascending' : 'Descending'}`}
          <svg
            className={`w-2.5 h-2.5 ms-3 ${
              orderDropdownOpen ? 'transform rotate-180' : ''
            }`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </div>

        <div
          id="orderDropdown"
          className={`z-10 ${
            orderDropdownOpen ? '' : 'hidden'
          } bg-white divide-y divide-gray-100 rounded-lg shadow w-full absolute`}
          onMouseEnter={handleOrderMouseEnter}
          onMouseLeave={handleOrderMouseLeave}
        >
          <ul
            className="py-2 md:text-sm text-xs text-gray-700"
            aria-labelledby="orderDropdownButton"
          >
            <li>
              <div
                className={`${
                  sortOrder === 'asc'
                    ? 'hidden'
                    : 'block px-4 py-2  hover:bg-gray-200 cursor-pointer'
                }`}
                onClick={() => handleSortOrderClick('asc')}
              >
                Sort Ascending
              </div>
            </li>
            <li>
              <div
                className={`${
                  sortOrder === 'desc'
                    ? 'hidden'
                    : 'block px-4 py-2 hover:bg-gray-200 cursor-pointer'
                }`}
                onClick={() => handleSortOrderClick('desc')}
              >
                Sort Descending
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
