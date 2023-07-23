export default function NewsLetter() {
  return (
    <div className="news-letter-container flex-row reverse">
      <div className="news-letter-image">
        <img
          className="illustration-mobile"
          src="/illustration-sign-up-mobile.svg"
          alt="Newsletter sign up image"
        />
        <img
          className="illustration-desktop"
          src="/illustration-sign-up-desktop.svg"
          alt="Newsletter sign up image"
        />
      </div>
      <div className="news-letter-text">
        <h1>Stay Updated</h1>
        <p>Join 60,000+ product managers receiving monthly updates on:</p>
        <ul>
          <li className="list-item">
            <img src="/icon-list.svg" alt="" />
            Product discovery and building what matters
          </li>
          <li className="list-item">
            <img src="/icon-list.svg" alt="" />
            Measuring to ensure updates are a success
          </li>
          <li className="list-item">
            <img src="/icon-list.svg" alt="" />
            And much more!
          </li>
        </ul>

        <div className="input-container">
          <label htmlFor="email">Email address</label>
          <input
            className="sub-text-input"
            type="text"
            name=""
            placeholder="email@company.com"
            id="email"
          />
        </div>

        <button className="sub-btn">Subscribe to monthly newsletter</button>
      </div>
    </div>
  );
}
