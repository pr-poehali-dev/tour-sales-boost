import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="https://cdn.poehali.dev/files/1b684fdc-a9b9-409b-ac76-0ecaabeeca94.jpg" 
              alt="Kamchatka Adventures Logo" 
              className="h-12 w-auto object-contain"
            />
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#tours" className="text-sm font-medium hover:text-primary transition-colors">Туры</a>
            <a href="#hot-deals" className="text-sm font-medium hover:text-primary transition-colors">Горящие путёвки</a>
            <a href="#reviews" className="text-sm font-medium hover:text-primary transition-colors">Отзывы</a>
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">О компании</a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
            <Icon name="Phone" size={16} className="mr-2" />
            Связаться
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;