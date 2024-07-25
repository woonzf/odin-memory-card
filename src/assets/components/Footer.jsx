function Footer() {
  return (
    <footer className="flex justify-center items-center z-[99]">
      <div className="link-wrapper">
        <a
          className="underline"
          href="https://github.com/woonzf/odin-memory-card"
          target="_blank"
          rel="noreferrer"
        >
          <small>Repo</small>
        </a>
      </div>
      <div className="link-wrapper">
        <small>
          &copy; 2024&nbsp;
          <a
            className="underline"
            href="https://github.com/woonzf"
            target="_blank"
            rel="noreferrer"
          >
            WZF
          </a>
        </small>
      </div>
      <div className="link-wrapper">
        <a
          className="underline"
          href="https://pokeapi.co/"
          target="_blank"
          rel="noreferrer"
        >
          <small>PokéAPI</small>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
