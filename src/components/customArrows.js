export const CustomLeftArrow = ({ onClick }) => (
  <i onClick={() => onClick()} className="custom-left-arrow" />
);
export const CustomRightArrow = ({ onClick }) => {
  return <i className="custom-right-arrow" onClick={() => onClick()} />;
};
