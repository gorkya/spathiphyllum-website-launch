import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet";
import { Menu, Flower, MapPin, Info, X } from "lucide-react";
import { useState } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeSheet = () => setIsOpen(false);

  return (
    <nav className="bg-white/95 backdrop-blur-sm sticky top-0 z-50 border-b">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="flex items-center space-x-2">
          <Flower className="h-6 w-6 text-green-600" />
          <span className="font-bold text-lg">СпатиГид</span>
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-sm font-medium hover:text-green-600 transition-colors">
            Главная
          </Link>
          <Link to="/care" className="text-sm font-medium hover:text-green-600 transition-colors">
            Уход
          </Link>
          <Link to="/varieties" className="text-sm font-medium hover:text-green-600 transition-colors">
            Разновидности
          </Link>
          <Link to="/problems" className="text-sm font-medium hover:text-green-600 transition-colors">
            Проблемы
          </Link>
          <Link to="/gallery" className="text-sm font-medium hover:text-green-600 transition-colors">
            Галерея
          </Link>
          <Link to="/sitemap" className="text-sm font-medium hover:text-green-600 transition-colors">
            Карта сайта
          </Link>
          <Link to="/sitemap.xml" className="text-sm font-medium text-muted-foreground hover:text-green-600 transition-colors">
            XML Sitemap
          </Link>
        </div>

        {/* Mobile menu trigger */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Открыть меню</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[85%] sm:w-[350px] pt-12">
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute right-4 top-4"
              onClick={closeSheet}
            >
              <X className="h-5 w-5" />
              <span className="sr-only">Закрыть</span>
            </Button>
            
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="flex items-center py-2 px-3 rounded-md hover:bg-muted transition-colors"
                onClick={closeSheet}
              >
                <Flower className="mr-3 h-5 w-5 text-green-600" />
                Главная
              </Link>
              <Link 
                to="/care" 
                className="flex items-center py-2 px-3 rounded-md hover:bg-muted transition-colors"
                onClick={closeSheet}
              >
                <Flower className="mr-3 h-5 w-5 text-green-600" />
                Уход
              </Link>
              <Link 
                to="/varieties" 
                className="flex items-center py-2 px-3 rounded-md hover:bg-muted transition-colors"
                onClick={closeSheet}
              >
                <Flower className="mr-3 h-5 w-5 text-green-600" />
                Разновидности
              </Link>
              <Link 
                to="/problems" 
                className="flex items-center py-2 px-3 rounded-md hover:bg-muted transition-colors"
                onClick={closeSheet}
              >
                <Flower className="mr-3 h-5 w-5 text-green-600" />
                Проблемы
              </Link>
              <Link 
                to="/gallery" 
                className="flex items-center py-2 px-3 rounded-md hover:bg-muted transition-colors"
                onClick={closeSheet}
              >
                <Flower className="mr-3 h-5 w-5 text-green-600" />
                Галерея
              </Link>
              <Link 
                to="/sitemap" 
                className="flex items-center py-2 px-3 rounded-md hover:bg-muted transition-colors"
                onClick={closeSheet}
              >
                <MapPin className="mr-3 h-5 w-5 text-green-600" />
                Карта сайта
              </Link>
              <Link 
                to="/sitemap.xml" 
                className="flex items-center py-2 px-3 rounded-md hover:bg-muted transition-colors"
                onClick={closeSheet}
              >
                <Info className="mr-3 h-5 w-5 text-gray-500" />
                XML Sitemap
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Nav;
