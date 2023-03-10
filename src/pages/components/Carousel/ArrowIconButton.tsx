type ArrowIconButtonProps = {
  currentSlide?: number;
  slideCount?: number;
  direction?: "next" | "prev";
  children: JSX.Element;
};

export const ArrowIconButton = ({
  currentSlide,
  slideCount,
  direction,
  children,
  ...props
}: ArrowIconButtonProps) => (
  <button
    className={`w-8 h-8 hover:bg-blue-light rounded-full flex justify-center items-center hover:bg-gradient-to-r hover:from-blue-light hover:to-cyan transition-all ${
      `slick-${direction ?? "prev"} slick-arrow` +
      (currentSlide === (slideCount ?? 1) - 1 ? " slick-disabled" : "")
    }`}
    {...props}
    aria-hidden="true"
    aria-disabled={currentSlide === (slideCount ?? 1) - 1 ? true : false}
  >
    {children}
  </button>
);

export default ArrowIconButton;
