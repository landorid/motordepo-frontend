import { get } from "lodash";
import Image from "next/image";
import { IMAGE_SIZES } from "../constants";

function StrapiImage({ src, ...props }) {
  const name = get(src, "hash", "") + get(src, "ext", "");

  if (!name) {
    return null;
  }

  const imageLoader = ({ src: fileName, width }) => {
    const prefix = IMAGE_SIZES[width];
    const hasActualSize = get(src, `formats[${prefix}].url`, null);

    if (hasActualSize) {
      return `${process.env.NEXT_PUBLIC_IMAGE}/${prefix}_${fileName}`;
    }

    return `${process.env.NEXT_PUBLIC_IMAGE}/${name}`;
  };

  return <Image loader={imageLoader} src={name} {...props} />;
}

export default StrapiImage;
