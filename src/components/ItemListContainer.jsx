export const ItemListContainer = ({ greeting, className, ...props }) => {
  return (
    <div className={`text-orange text-center  ${className}`} {...props}>
      Hola {greeting}!
    </div>
  );
};

export default ItemListContainer;
