import "./styles.css";

const Sidebar = ({ children }) => {
  return (
    <div class="sidebar">
      <a class="active" href="#home">
        Home
      </a>
      <a href="#news">News</a>
      <a href="#contact">Contact</a>
      <a href="#about">About</a>
    </div>
  );
};

export { Sidebar };
