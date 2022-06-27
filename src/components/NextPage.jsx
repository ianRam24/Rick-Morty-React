import './../App.css';
export default function NextPage({ page, setPage }) {
  return (
    <header className="pages">
      <p className="page">Page: {page}</p>
      <button onClick={() => setPage(page++)} className="btn">
        next
      </button>
    </header>
  );
}
