import React, { useEffect, useState } from "react";
import Header from "./Header/Header";
import axios from "axios";

const PaginationExample = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("all");
  const itemsPerPage = 8;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await axios.get(
          "https://www.course-api.com/react-store-products/"
        );
        setData(data.data);
        console.log(data.data);
      } catch (error) {
        console.log(error.message);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [value]);

  const filteredData = data.filter((item) => {
    const sortedItem = category === "all" || item.category === category;
    const searchedItem = item.name.toLowerCase().includes(value.toLowerCase());
    return sortedItem && searchedItem;
  });

  if (loading) return <h1 className="text-2xl">Loading...</h1>;

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const handleClick = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="p-4">
      <Header setValue={setValue} setCategory={setCategory} />
      {/* <Nav /> */}
      <div className="mb-4 justify-between grid grid-cols-4 gap-4">
        {currentItems?.map((item) => (
          <div key={item.id} className="border p-2 mb-1 rounded">
            <img
              className="w-[300px] h-[300px] rounded"
              src={item.image}
              alt=""
            />
            <h1 className="text-2xl font-bold">
              {item.name?.charAt(0).toUpperCase() +
                item.name?.slice(1).toLowerCase()}
            </h1>
            <p>${item.price}</p>
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => handleClick(i + 1)}
            className={`px-4 py-2 rounded ${
              currentPage === i + 1 ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PaginationExample;
