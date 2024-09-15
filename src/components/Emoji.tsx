import { Image, ImageProps } from "@chakra-ui/react";
import bullsEye from "../assets/Emojis/bulls-eye.webp";
import meh from "../assets/Emojis/meh.webp";
import thumbs from "../assets/Emojis/thumbs-up.webp";

interface Props {
  rating: number;
}

function Emoji({ rating }: Props) {
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: thumbs, alt: "recomanded", boxSize: "25px" },
    5: { src: bullsEye, alt: "exceptional", boxSize: "35px" },
  };
  if (rating < 3) return null;
  return <Image {...emojiMap[rating]} marginTop={1} />;
}

export default Emoji;
