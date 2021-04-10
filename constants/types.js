import PropTypes from "prop-types";

export const motorType = PropTypes.shape({
  marka: PropTypes.string.isRequired,
  tipus: PropTypes.string.isRequired,
  kivitel: PropTypes.string.isRequired,
  gyartas_ev: PropTypes.number.isRequired,
  gyartas_honap: PropTypes.number,
  hengerurtartalom: PropTypes.number,
  km: PropTypes.number.isRequired,
  munkautem: PropTypes.string,
  sebessegvalto: PropTypes.string,
  allapot: PropTypes.string,
  okmanyok: PropTypes.string.isRequired,
  egyeb: PropTypes.string,
  felszereltseg: PropTypes.string,
  leiras: PropTypes.string,
  teljesitmenyLE: PropTypes.number,
  teljesitmenyKW: PropTypes.number,
  uzemanyag: PropTypes.string,
});

export const eladoType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  isCompany: PropTypes.bool,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.object,
  created_at: PropTypes.string,
  website: PropTypes.string,
  address: PropTypes.string,
});
