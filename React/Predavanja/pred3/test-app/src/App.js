import ShowText from "./Components/ShowText";
import ShowMeTheMoney from "./Components/ShowMeTheMoney";
import ArrowFunc from "./Components/ArrowFunc";
import "./moj.css";

function App() {
  return (
    <div>
      <div>
        <ShowText ime="Pero" pozdrav={`Dobro jutro`} />
        <ShowMeTheMoney money={67} />
        <ArrowFunc />
      </div>
      <ShowMeTheMoney money={104} />
    </div>
  );
}

export default App;

// import PropTypes from "prop-types";
// imeFunkcije.propTypes = {nesto: PropTypes.nesto}
// PropTypes = mogu biti razlicite vrste kao sto su .string, .number, .oneOf, .arrayOf, .shape ()
// defaultProps = defaultni prop, pocetno stanje
