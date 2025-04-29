import { Leaf } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-muted py-12 border-t">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Leaf className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-semibold">Спатифиллум</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Ваш полный гид по выращиванию и уходу за спатифиллумом — одним из самых популярных комнатных растений.
            </p>
          </div>
          
          <div className="space-y-3">
            <h4 className="font-medium">Разделы</h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Главная</Link>
              <Link to="/care" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Уход</Link>
              <Link to="/varieties" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Разновидности</Link>
              <Link to="/problems" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Проблемы</Link>
            </nav>
          </div>
          
          <div className="space-y-3">
            <h4 className="font-medium">Ресурсы</h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Частые вопросы</Link>
              <Link to="/gallery" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Галерея</Link>
              <Link to="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Блог</Link>
              <Link to="/contacts" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Контакты</Link>
            </nav>
          </div>
          
          <div className="space-y-3">
            <h4 className="font-medium">Мы в соцсетях</h4>
            <div className="flex gap-4">
              <a href="#" className="text-foreground/80 hover:text-foreground">Instagram</a>
              <a href="#" className="text-foreground/80 hover:text-foreground">Telegram</a>
              <a href="#" className="text-foreground/80 hover:text-foreground">VK</a>
            </div>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t text-center text-sm text-muted-foreground">
          <p>© 2025 Спатифиллум. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
