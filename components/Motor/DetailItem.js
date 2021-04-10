import PropTypes from "prop-types";

function DetailItem(props) {
  if (!props.value) return null;

  return (
    <li className="flex mb-2">
      <span className="w-1/2 text-grey-500">{props.title}</span>
      <span className="w-1/2">
        {props.value}
        {props.suffix}
      </span>
    </li>
  );
}

DetailItem.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  suffix: PropTypes.string,
};

export default DetailItem;
