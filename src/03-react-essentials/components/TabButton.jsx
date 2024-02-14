export default function TabButton({ children }) {
  const handleClick = () => {
    console.log("Hello world");
  };

  return (
    <li>
      <button onClick={handleClick}>{children}</button>
    </li>
  );
}
