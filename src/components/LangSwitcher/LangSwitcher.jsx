import css from "./LangSwitcher.module.css";

export default function LangSwitcher({ value, onChangeLang }) {
  return (
    <div className={css.wrapper}>
      <span>Lang switcher</span>
      <select
        value={value}
        onChange={(event) => onChangeLang(event.target.value)}
      >
        <option value="UK">UK</option>
        <option value="EN">EN</option>
        <option value="PL">PL</option>
      </select>
    </div>
  );
}
