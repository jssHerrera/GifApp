import { useState } from "react";
import { useLocation } from "wouter";

const useSearch = () => {
  const [form, setForm] = useState("");
  const [location, setLocation] = useLocation();

  const handleChange = (e) => {
    setForm(e.target.value);
  };

  // =====================================
  const handleSubmit = (e) => {
    e.preventDefault();
    setForm("");
    setLocation(`/search/${form}`);
    localStorage.setItem('lastKeyword', JSON.stringify(form))
  };

  return {
    form,
    handleChange,
    handleSubmit,
  };
};

export default useSearch;
