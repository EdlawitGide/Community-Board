import "./App.css";
import React from "react";
import Restaurant from "./Restaurant";

const App = () => {
  return (
    <div className="app">
      <img
        src="https://images.all-free-download.com/images/graphicwebp/vector_restaurant_menu_cover_design_572854.webp"
        alt="Restaurant"
        className="restaurant-photo"
      />
      <header className="header">
        <h1 className="header-title">
          Best Restaurants by Cuisine in Minneapolis
        </h1>
      </header>
      <div className="card-container">
        <Restaurant
          image="https://th.bing.com/th/id/OIP.PTfrGMcQkbk_aOfhkM9yTwHaHa?rs=1&pid=ImgDetMain"
          title="Ethiopian"
          buttonLink="https://www.theredseampls.com/"
        />
        <Restaurant
          image="https://a.cdn-hotels.com/gdcs/production193/d478/700aa7c7-efa1-4b9d-8d55-3668cf5b520b.jpg"
          title="Mexican"
          buttonLink="https://elsazonmn.com/"
        />
        <Restaurant
          image="https://th.bing.com/th/id/R.aaeed760e193e36a4778c061cc554356?rik=GqUCDrZ%2bce5iLQ&pid=ImgRaw&r=0"
          title="Chinese"
          buttonLink="https://www.teahouseumn.com/"
        />
        <Restaurant
          image="https://th.bing.com/th/id/OIP.WesTr_U82h9VFBrUcrA9FAHaHa?rs=1&pid=ImgDetMain"
          title="Japanese"
          buttonLink="https://www.zenbox.com/"
        />
        <Restaurant
          image="https://th.bing.com/th/id/R.3555eb48eae87d496d8034f612ad02e1?rik=UOy9RmCco%2fUH5A&pid=ImgRaw&r=0"
          title="Indian"
          buttonLink="https://www.gorkhapalace.com/"
        />
        <Restaurant
          image="https://th.bing.com/th/id/R.06e8329b90511579af3a143cb2bb2e0d?rik=Q6Ku9%2fBYIuN6NA&pid=ImgRaw&r=0"
          title="Mediterranean"
          buttonLink="https://holylandbrand.com/"
        />
        <Restaurant
          image="https://www.tiadoestravel.com/wp-content/uploads/2020/04/pasta-329522_1920-1.jpg"
          title="Italian"
          buttonLink="https://www.barlagrassa.com/"
        />
        <Restaurant
          image="https://th.bing.com/th/id/OIP.zvSiECj5h6zq1t32kOvHsgHaFj?rs=1&pid=ImgDetMain"
          title="Mongolian"
          buttonLink="https://www.khansmongolianbbqmn.com/contact"
        />
        <Restaurant
          image="https://www.tripsavvy.com/thmb/XlSXkHO3ATrMZxRHBrah5CaWoME=/2121x1414/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-628747498-2bddba915c114517b0fd39328d4dc9cf.jpg"
          title="Brazilian"
          buttonLink="https://fogodechao.com/location/minneapolis/"
        />
        <Restaurant
          image="https://th.bing.com/th/id/OIP.zNEAJHHeTYcV0ER8BaH6hwHaF7?rs=1&pid=ImgDetMain"
          title="African, Mediterranean and American"
          buttonLink="https://www.afrodeli.com/"
        />
        {/* Add more CardWithButton components here */}
      </div>
    </div>
  );
};

export default App;
