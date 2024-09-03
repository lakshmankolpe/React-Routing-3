import "./Home.css";
import party2 from "./party2.png"
import sofaImg from "./party.png"
import KitchenImg from "./kitchen.png"
import Navabar from "./../../components/Navbar/Navbar"

function Home() {
  return (
    
    <>
    <Navabar/>
    <div>
      <h1 className="heading">Welcome To My Hotel</h1>
      <hr />
      <p className="restaurant-paragraph">
        A restaurant is a place where you can eat a meal and pay for it. In
        restaurants your food is usually served to you at your table by a waiter
        or waitress. They ate in an Italian restaurant in Forth Street. We had
        dinner in the hotel's restaurant. The system includes features like a
        point of sale system, business performance management tools, and a
        restaurant management system. It allows operators to improve customer
        service, automate production, control costs, and share information
        across locations.What Is a Restaurant Concept? A restaurant concept is
        the overall idea or theme that defines the restaurant. Concepts include
        your menu's design, service style, dining room decor, and — of course —
        the style of food. Many restaurants are conceived based on a chef's
        personal experiences or interests
      </p>
      <h3 className="heading">kitchen</h3>
      <img src={KitchenImg}  className="restaurant-image"/>
      <h3 className="heading">Music Hall</h3>
      <img src={party2}  className="restaurant-image"/>
      <h3 className="heading">Seating Hall</h3>
      <img src={sofaImg}  className="restaurant-image"/>
     
    </div>
    </> );
}

export default Home;
