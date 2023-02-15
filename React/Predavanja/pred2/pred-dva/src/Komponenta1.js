import { zbroji as suma, pomnozi } from "./utils/helper";

const osoba = {
  ime: "Pero",
  prezime: "Perić",
};

function Komponenta1() {
  const oduzmi = (a, b) => {
    return a - b;
  };

  return (
    <div>
      <p>Komponenta1</p>
      <p>
        Osoba se zove: {osoba.prezime}, {osoba.ime}
      </p>
      <p>Odnosno: {osoba.ime + ` ` + osoba.prezime}</p>
      <p>45 - 15 = {oduzmi(45, 15)}</p>
      <p>45 + 15 je {suma(45, 15)}</p>
      <p>45 + 15 = {pomnozi(45, 15)}</p>
    </div>
  );
}
export default Komponenta1;
