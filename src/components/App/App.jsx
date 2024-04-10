// import UserForm from "../UserForm/UserForm";
// import TextInput from "../TextInput/TextInput";
// import LangSwitcher from "../LangSwitcher/LangSwitcher";
// import OrderForm from "../OrderForm/OrderForm";
// import FeedbackForm from "../FeedbackForm/FeedbackForm";
// import css from "./App.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import ArticleList from "../ArticleList/ArticleList";
export default function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function fetchArticles() {
      const response = await axios.get(
        "https://hn.algolia.com/api/v1/search?query=react"
      );
      setArticles(response.data.hits);
      console.log(response.data.hits[0].author);
    }

    fetchArticles();
  }, []);

  return (
    <div>
      <h1>Latest articles</h1>

      {articles.length > 0 && <ArticleList items={articles} />}
    </div>
  );
}
