import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="glass-nav sticky top-0 z-[60] w-full">
      <div className="container mx-auto px-6">
        <ul className="flex justify-center gap-8 py-4 text-sm font-medium">
          <li><Link to="/" className="cursor-pointer hover:text-primary transition-colors">Home</Link></li>
          <li><Link to="/study-studio" className="cursor-pointer hover:text-primary transition-colors">Study Studio</Link></li>
          <li><Link to="/productivity-studio" className="cursor-pointer hover:text-primary transition-colors">Productivity Studio</Link></li>
          <li><Link to="/creativity-studio" className="cursor-pointer hover:text-primary transition-colors">Creativity Studio</Link></li>
          <li><Link to="/knowledge-vault" className="cursor-pointer hover:text-primary transition-colors">Knowledge Vault</Link></li>
          <li><Link to="/dashboard" className="cursor-pointer hover:text-primary transition-colors">Dashboard</Link></li>
        </ul>
      </div>
    </nav>
  );
};

