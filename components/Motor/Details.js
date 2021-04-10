import DetailItem from "./DetailItem";
import { motorType } from "../../constants/types";

function Details({ motor }) {
  return (
    <div>
      <p className="font-bold text-lg mt-2 mb-4">Főbb adatok</p>
      <ul className="sm:column-count-2">
        <DetailItem title="Márka" value={motor.marka} />
        <DetailItem title="Típus" value={motor.tipus} />
        <DetailItem title="Kivitel" value={motor.kivitel} />
        <DetailItem
          title="Teljesítmény"
          value={motor.teljesitmenyLE}
          suffix=" LE"
        />
        <DetailItem
          title="Teljesítmény"
          value={motor.teljesitmenyKW}
          suffix=" kW"
        />
        <li className="flex mb-2">
          <span className="w-1/2 text-grey-500">Évjárat</span>
          <span className="w-1/2">
            {motor.gyartas_ev}
            {motor.gyartas_honap ? `. ${motor.gyartas_honap}` : null}
          </span>
        </li>
        <DetailItem title="Sebességváltó" value={motor.sebessegvalto} />
        <DetailItem title="Okmányok" value={motor.okmanyok} />
        <DetailItem title="Üzemanyag" value={motor.uzemanyag} />
      </ul>
      <p className="font-bold text-lg mt-6 mb-4">Felszereltség</p>
      <div>{motor.felszereltseg}</div>
      <p className="font-bold text-lg mt-6 mb-4">Leírás</p>
      <div>{motor.leiras}</div>
    </div>
  );
}

Details.propTypes = {
  motor: motorType,
};

export default Details;
