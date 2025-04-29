import { useState } from 'react';
import { Menu, X, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <nav className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-medium">
          <Leaf className="h-6 w-6 text-primary" />
          <span className="text-xl font-semibold">Спатифиллум</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-foreground/80 hover:text-foreground transition-colors">Главная</Link>
          <Link to="/care" className="text-foreground/80 hover:text-foreground transition-colors">Уход</Link>
          <Link to="/varieties" className="text-foreground/80 hover:text-foreground transition-colors">Разновидности</Link>
          <Link to="/problems" className="text-foreground/80 hover:text-foreground transition-colors">Проблемы</Link>
        </div>
        
        <Button className="hidden md:inline-flex" size="sm">Задать вопрос</Button>
        
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </nav>
      
      {isOpen && (
        <div className="md:hidden absolute inset-x-0 bg-background border-b p-4 shadow-lg animate-fade-in">
          <div className="flex flex-col gap-4">
            <Link to="/" className="px-2 py-1 hover:bg-accent rounded-md transition-colors">Главная</Link>
            <Link to="/care" className="px-2 py-1 hover:bg-accent rounded-md transition-colors">Уход</Link>
            <Link to="/varieties" className="px-2 py-1 hover:bg-accent rounded-md transition-colors">Разновидности</Link>
            <Link to="/problems" className="px-2 py-1 hover:bg-accent rounded-md transition-colors">Проблемы</Link>
            <Button className="w-full mt-2">Задать вопрос</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Nav;
