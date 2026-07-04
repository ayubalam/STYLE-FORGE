import Logo from "./Logo";
import SearchBar from "./SearchBar";
import NavLinks from "./NavLinks";
import NavIcons from "./NavIcons";
import MobileMenu from "./MobileMenu";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-black shadow-lg">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Logo />

        <SearchBar />

        <NavLinks />

        <NavIcons />

        <MobileMenu />
      </div>
    </header>
  );
}

export default Navbar;