import { useEffect, useState } from 'react';

type PriceItem = {
  name: string;
  category: string;
  priceYen: number;
  note?: string;
};

type ApiResponse = {
  updated: string;
  items: PriceItem[];
};

function App() {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('http://localhost:4000/api/prices')
      .then((response) => {
        if (!response.ok) throw new Error('Failed to load prices');
        return response.json();
      })
      .then((json: ApiResponse) => {
        setData(json);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="app-container">
      <header>
        <h1>Japan Food Price Tracker</h1>
        <p>Monitor sample food prices across Japanese markets.</p>
      </header>

      {loading && <p>Loading prices...</p>}
      {error && <p className="error">{error}</p>}

      {data && (
        <>
          <section className="summary">
            <strong>Last updated:</strong> {new Date(data.updated).toLocaleString()}
          </section>

          <table>
            <thead>
              <tr>
                <th>Item</th>
                <th>Category</th>
                <th>Price (¥)</th>
                <th>Note</th>
              </tr>
            </thead>
            <tbody>
              {data.items.map((item) => (
                <tr key={item.name}>
                  <td>{item.name}</td>
                  <td>{item.category}</td>
                  <td>{item.priceYen.toLocaleString()}</td>
                  <td>{item.note || '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}

export default App;
