const ArticleList = ({ items }) => (
  <ul>
    {items.map(({ objectID, url, title }) => (
      <li key={objectID}>
        <a href={url} target="_blank" rel="noopener noreferrer">
          {title}
        </a>
      </li>
    ))}
  </ul>
);

export default ArticleList;
