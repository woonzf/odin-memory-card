function Footer() {
  return (
    <footer className="h-[30px] text-md lg:text-xl text-white flex justify-center items-center z-[99]">
      <div className="link-wrapper">
        <a
          className="underline"
          href="https://github.com/woonzf/odin-memory-card"
          target="_blank"
          rel="noreferrer"
        >
          Repo
        </a>
      </div>
      <div className="link-wrapper">
        <a
          className="underline"
          href="https://github.com/woonzf"
          target="_blank"
          rel="noreferrer"
        >
          WZF
        </a>
        &nbsp;&copy; 2024
      </div>
      <div className="link-wrapper">
        <a
          className="underline"
          href="https://pokeapi.co/"
          target="_blank"
          rel="noreferrer"
        >
          PokéAPI
        </a>
      </div>
    </footer>
  );
}

export default Footer;
