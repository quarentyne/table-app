import notfound from '../../assets/notfound.png';

export const Notfoundpage = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center"}}>
      <img src={notfound} alt='Page not found' />
    </div>
  );
};