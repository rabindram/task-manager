const Home = () => {
  return (
    <div className="col-md-9 home-content">
      <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative home-content-1">
        <div className="col p-4 d-flex flex-column position-static">
          <h3 className="home-content-text">
            Manage all your tasks in one place.
          </h3>
        </div>
        <div className="col-auto d-none d-lg-block home-content-2">
          <svg
            className="bd-placeholder-img"
            width="400"
            height="500"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Thumbnail"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <title>Thumbnail</title>
            <image
              href="/images/MSME-sector.jpg"
              x="0"
              y="0"
              width="400"
              height="500"
              preserveAspectRatio="none"
            />
            <text x="50%" y="50%" fill="#eceeef" dy=".3em">
              Thumbnail
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Home;
