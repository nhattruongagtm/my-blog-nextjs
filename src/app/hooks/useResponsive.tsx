import { useMediaQuery } from "react-responsive";

function useResponsive() {
  const bool = useMediaQuery({
    query: `(max-width: 480px)`,
  });
  return {
    isMobile: bool,
  };
}

export default useResponsive;
