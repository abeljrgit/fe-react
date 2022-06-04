import RatingsItem from "./RatingsItem";

function Ratings() {
  return (
    <div className="ratings">
      <RatingsItem typeText="Rated 5 Stars in Reviews" />
      <RatingsItem typeText="Rated 5 Stars in Report Guru" />
      <RatingsItem typeText="Rated 5 Stars in BestTech" />
    </div>
  );
}
export default Ratings;
