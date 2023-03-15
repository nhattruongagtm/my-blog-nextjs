import { useMediaQuery } from "react-responsive";

function useResponsive() {
  const bool = useMediaQuery({
    query: `(max-width: 600px)`,
  });
  return {
    isMobile: bool,
  };
}

export default useResponsive;
