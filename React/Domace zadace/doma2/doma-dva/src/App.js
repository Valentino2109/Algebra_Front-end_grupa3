import FuncOne from "./components/FuncOne";
import FuncTwo from "./components/FuncTwo";
import FuncThree from "./components/FuncThree";
import ClassOne from "./components/ClassOne";
import PropTypes from "prop-types";
import "./style.css";

// List of 10 objects which contains name, surname and age
const listOfPeople = [
  { name: `Seljo`, surname: `Musavi`, age: 54 },
  { name: `Mutko`, surname: `Lopatich`, age: 34 },
  { name: `Traktor`, surname: `Blato`, age: 58 },
  { name: `Ashov`, surname: `Drekec`, age: 62 },
  { name: `Grablja`, surname: `Zgodnich`, age: 66 },
  { name: `Krampko`, surname: `Krampich`, age: 48 },
  { name: `Borer`, surname: `Rupich`, age: 41 },
  { name: `Bushich`, surname: `Elektrik`, age: 39 },
  { name: `Izolirko`, surname: `Ljepljivi`, age: 68 },
  { name: `Stolica`, surname: `Bor`, age: 50 },
];

function App() {
  return (
    <div id="div__main">
      <FuncOne />
      <FuncTwo />
      <FuncThree />
      <ClassOne />
    </div>
  );
}

export default App;
export { listOfPeople };

// // Defining Proptypes
listOfPeople.propTypes = {
  name: PropTypes.string,
  surname: PropTypes.string,
  age: PropTypes.number,
};

/*
Zadaća React1
Napraviti react aplikaciju. 
Napraviti 6 komponenti. 3 function i 3 class. 

U app.js napraviti listu od 10 objekata osobe od kojih je svaki objekt takav da ima ime, prezime i godine.

Potom proslijediti svaki od objekata u neku od 6 napravljenih komponenti (koristiti props). 
komponente trebaju svaka na svoj način (6 komponenti, 6 načina) prikazati podatke korisnika (npr, ime i prezime; pa prezime i ime; pa ime i godine; pa unordered lista ime, prezime, godine; upotrijebite maštu). 
Svaka komponenta treba imati definirani propTypes i defaultProps ako isti imaju smisla. 

Dodatno: instalirati barem 3 npm paketa (bilo koja) te svaki od istih upotrijebiti na barem jednom mjestu u aplikaciji.
*/
