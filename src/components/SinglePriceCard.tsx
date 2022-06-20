function SinglePriceCard() {
  return (
    <div className="card">
      <div className="card__row">
        <div className="card__join">
          <h1 className="card__join-title">Join our community</h1>
          <h3 className="card__join-lead">
            30-day, hassle-free money back guarantee
          </h3>
          <div className="card__join-sentences">
            <span>
              Gain access to our full library of tutorials along with expert
              code reviews.
            </span>
            <span>
              {" "}
              Perfect for any developers who are serious about honing their
              skills.
            </span>
          </div>
        </div>
      </div>
      <div className="card__row">
        <div className="card__rate">
          <h3 className="card__rate-lead">Monthly Subscription</h3>
          <div className="card__rate-amount">
            <span>$29</span> permonth
          </div>
          <div className="card__rate-sentences">
            <span>Full access for less than $1 a day</span>
          </div>
          <a href="#" className="card__rate-signup">
            Sign Up
          </a>
        </div>
        <div className="card__reason">
          <h3 className="card__reason-lead">Why Us</h3>
          <div className="card__reason-sentences">
            <span>Tutorials by industry experts</span>
            <span>Peer &amp; expert code review</span>
            <span>Coding exercises</span>
            <span>Access to our GitHub repos</span>
            <span>Community forum</span>
            <span>Flashcard decks</span>
            <span>New videos every week</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePriceCard;
