const React = require("react");
const Def = require("./default");

function home() {
  return (
    <Def>
      <main>
        <h1>HOME</h1>
        <div>
            <img src="/images/homePage.jpg" alt="Retro Diner" />
            <div>
            Photo by <a href="https://unsplash.com/@spencerdavis?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Spencer Davis</a> on <a href="https://unsplash.com/photos/red-leather-bench-inside-room-q3ApAZsS1os?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
  
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
