
import { Link } from "react-router-dom";

function AgriculturalTrading() {
  const products = [
    "ধান",
    "পাট",
    "গম",
    "সরিষা",
    "ভুট্টা",
  ];

  return (
    <main className="section">
      <div className="container">
        <Link to="/">
          ← MONIR GROUP Homepage
        </Link>

        <div className="section-heading">
          <span>Agricultural Trading Division</span>

          <h1>
            M/S MONIR ENTERPRISE
          </h1>

          <p>
            Agricultural Trading Division
          </p>
        </div>

        <h2>আমাদের কৃষিপণ্য</h2>

        <div className="organization-grid">
          {products.map((product) => (
            <article
              className="vision-box"
              key={product}
            >
              <h3>{product}</h3>
            </article>
          ))}
        </div>

        <p>
          ধান, পাট, গম, সরিষা ও ভুট্টার
          পাইকারি ক্রয়-বিক্রয় ও স্টক ব্যবস্থাপনা।
        </p>

        <p>
          কৃষিপণ্যের ERP Login ও Dashboard
          পরবর্তী ধাপে যুক্ত করা হবে।
        </p>
      </div>
    </main>
  );
}

export default AgriculturalTrading;
