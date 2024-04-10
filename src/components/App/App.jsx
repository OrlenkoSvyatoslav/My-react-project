// import UserForm from "../UserForm/UserForm";
// import TextInput from "../TextInput/TextInput";
// import LangSwitcher from "../LangSwitcher/LangSwitcher";
// import OrderForm from "../OrderForm/OrderForm";
import FeedbackForm from "../FeedbackForm/FeedbackForm";
import css from "./App.module.css";

export default function App() {
  // const handleAddUser = (newUser) => {
  //   console.log(newUser);
  // };

  // const [inputValue, setInputValue] = useState("qwe");

  // const [lang, setLang] = useState("uk");

  return (
    <div className={css.container}>
      <h1>Forms in React</h1>

      {/* <UserForm onAdd={handleAddUser} /> */}

      {/* <TextInput value={inputValue} onChange={setInputValue} />
      <p>{inputValue}</p> */}

      {/* <LangSwitcher value={lang} onChangeLang={setLang} />
      <p>Select lang:{lang}</p> */}

      {/* <OrderForm /> */}
      <FeedbackForm />
    </div>
  );
}
