import { useState } from "react";
import { useLocation } from "wouter";

const useSearch = () => {
  const [form, setForm] = useState({
    texto: "",
  });
  const { texto } = form;
  const [location, setLocation] = useLocation();

  // =====================================
  const handleChange = (e) => {
    const keyword = e.target.value;
    localStorage.setItem("lastKeywork", JSON.stringify(keyword));
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setForm({
      texto: "",
    });
    setLocation(`/search/${texto}`);
  };

  return {
    form,
    handleChange,
    handleSubmit,
  };
};

export default useSearch;
