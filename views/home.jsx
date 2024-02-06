const React = require("react");
const Def = require("./default");

function home() {
  return (
    <Def>
      <main>
        <h1>HOME</h1>
        <div>
            <img src="/images/breadHomePage.jpg" alt="delicious bread" />
            <div>
            Photo by <a href="https://unsplash.com/@wesual?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Wesual Click</a> on <a href="https://unsplash.com/photos/cereal-and-three-buns-rsWZ-P9FbQ4?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
            </div>
        </div>
        <a href="/places">
          <button className="btn btn-primary">Places Page</button>
        </a>
      </main>
    </Def>
  );
}

module.exports = home;
