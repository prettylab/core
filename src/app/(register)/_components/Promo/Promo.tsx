import Img from "@/components/Layout/Img";
import promo from "@/assets/img/promo.png";
import Flex from "@/components/Layout/Flex";

export default function Promo() {
  return (
    <Flex column>
      <Img
        src={promo.src}
        alt={"Promo card"}
        sx={{
          height: "100%",
          borderTopLeftRadius: "24px",
          borderBottomLeftRadius: "24px",
        }}
      />
    </Flex>
  );
}
