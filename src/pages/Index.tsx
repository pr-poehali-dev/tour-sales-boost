import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

const Index = () => {
  const [date, setDate] = useState<Date>();
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState([50000, 500000]);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Все туры', icon: 'Globe' },
    { id: 'beach', name: 'Пляжный отдых', icon: 'Waves' },
    { id: 'mountains', name: 'Горы', icon: 'Mountain' },
    { id: 'excursion', name: 'Экскурсии', icon: 'Building2' },
    { id: 'adventure', name: 'Приключения', icon: 'Bike' },
  ];

  const tours = [
    {
      id: 1,
      title: 'Мальдивы - Райский отдых',
      location: 'Мальдивы',
      price: 180000,
      oldPrice: 220000,
      duration: '7 дней / 6 ночей',
      rating: 4.9,
      reviews: 156,
      image: 'https://cdn.poehali.dev/projects/7046c516-bd45-4622-876c-7b48ad2b8de6/files/c54734c4-d8ab-4638-9678-9159defc5ba4.jpg',
      isHot: true,
      category: 'beach',
      description: 'Роскошный отдых на белоснежных пляжах',
      includes: ['Перелёт', 'Отель 5*', 'Питание All Inclusive'],
    },
    {
      id: 2,
      title: 'Альпы - Горные вершины',
      location: 'Швейцария',
      price: 150000,
      duration: '5 дней / 4 ночи',
      rating: 4.8,
      reviews: 89,
      image: 'https://cdn.poehali.dev/projects/7046c516-bd45-4622-876c-7b48ad2b8de6/files/c050a0ec-e658-4c90-bf16-7ba0176a2171.jpg',
      isHot: false,
      category: 'mountains',
      description: 'Захватывающие виды и чистый горный воздух',
      includes: ['Перелёт', 'Отель 4*', 'Завтраки'],
    },
    {
      id: 3,
      title: 'Прага - Сердце Европы',
      location: 'Чехия',
      price: 75000,
      oldPrice: 95000,
      duration: '4 дня / 3 ночи',
      rating: 4.7,
      reviews: 234,
      image: 'https://cdn.poehali.dev/projects/7046c516-bd45-4622-876c-7b48ad2b8de6/files/6634b0c3-145a-4520-945d-245cb18d9fe5.jpg',
      isHot: true,
      category: 'excursion',
      description: 'Старинная архитектура и богатая культура',
      includes: ['Перелёт', 'Отель 3*', 'Экскурсии'],
    },
  ];

  const reviews = [
    {
      id: 1,
      author: 'Анна Петрова',
      rating: 5,
      text: 'Невероятное путешествие! Всё было организовано на высшем уровне. Особенно понравился сервис в отеле.',
      tour: 'Мальдивы',
      date: '15 ноября 2024',
      avatar: 'АП',
    },
    {
      id: 2,
      author: 'Дмитрий Иванов',
      rating: 5,
      text: 'Горы просто волшебные! Гид был очень профессиональным. Обязательно вернёмся снова!',
      tour: 'Альпы',
      date: '8 ноября 2024',
      avatar: 'ДИ',
    },
    {
      id: 3,
      author: 'Елена Смирнова',
      rating: 4,
      text: 'Прага покорила наши сердца. Экскурсии были интересными, но хотелось бы больше свободного времени.',
      tour: 'Прага',
      date: '2 ноября 2024',
      avatar: 'ЕС',
    },
  ];

  const filteredTours = tours.filter((tour) => {
    const matchesSearch = tour.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         tour.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || tour.category === selectedCategory;
    const matchesPrice = tour.price >= priceRange[0] && tour.price <= priceRange[1];
    return matchesSearch && matchesCategory && matchesPrice;
  });

  const hotDeals = tours.filter(tour => tour.isHot);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Icon name="Plane" className="text-white" size={24} />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                ТурМир
              </span>
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

      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Путешествия вашей мечты
            </h1>
            <p className="text-xl text-muted-foreground mb-12">
              Откройте для себя лучшие направления по всему миру
            </p>

            <Card className="backdrop-blur-sm bg-white/90 shadow-2xl animate-scale-in">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <div className="relative">
                      <Icon name="Search" className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                      <Input
                        placeholder="Куда хотите поехать?"
                        className="pl-10 h-12"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </div>
                  </div>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="h-12 px-6">
                        <Icon name="Calendar" size={20} className="mr-2" />
                        {date ? format(date, 'dd MMMM', { locale: ru }) : 'Выберите дату'}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        locale={ru}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <Button className="h-12 px-8 bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
                    Найти туры
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="hot-deals" className="py-16 bg-gradient-to-r from-accent/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-4xl font-bold mb-2">🔥 Горящие путёвки</h2>
              <p className="text-muted-foreground">Успейте купить со скидкой до 40%</p>
            </div>
            <Badge className="bg-gradient-to-r from-accent to-secondary text-white animate-pulse-glow px-4 py-2 text-lg">
              Осталось 3 дня!
            </Badge>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hotDeals.map((tour) => (
              <Card key={tour.id} className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group animate-fade-in">
                <div className="relative h-64 overflow-hidden">
                  <img src={tour.image} alt={tour.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <Badge className="absolute top-4 right-4 bg-accent text-white animate-pulse-glow">
                    Горящий тур
                  </Badge>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-2xl font-bold mb-1">{tour.title}</h3>
                    <div className="flex items-center gap-2">
                      <Icon name="MapPin" size={16} />
                      <span className="text-sm">{tour.location}</span>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-1">
                      <Icon name="Star" className="fill-yellow-400 text-yellow-400" size={16} />
                      <span className="font-semibold">{tour.rating}</span>
                      <span className="text-muted-foreground text-sm">({tour.reviews})</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Icon name="Clock" size={16} />
                      {tour.duration}
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">{tour.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {tour.includes.map((item, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {item}
                      </Badge>
                    ))}
                  </div>
                  <Separator className="my-4" />
                  <div className="flex items-center justify-between">
                    <div>
                      {tour.oldPrice && (
                        <span className="text-sm line-through text-muted-foreground mr-2">
                          {tour.oldPrice.toLocaleString()} ₽
                        </span>
                      )}
                      <span className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        {tour.price.toLocaleString()} ₽
                      </span>
                    </div>
                    <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                      Забронировать
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="tours" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Каталог туров</h2>
            <p className="text-muted-foreground text-lg">Выберите идеальное путешествие для себя</p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle>Фильтры</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <label className="text-sm font-medium mb-3 block">Категория</label>
                    <div className="space-y-2">
                      {categories.map((cat) => (
                        <Button
                          key={cat.id}
                          variant={selectedCategory === cat.id ? 'default' : 'outline'}
                          className="w-full justify-start"
                          onClick={() => setSelectedCategory(cat.id)}
                        >
                          <Icon name={cat.icon as any} size={16} className="mr-2" />
                          {cat.name}
                        </Button>
                      ))}
                    </div>
                  </div>
                  <Separator />
                  <div>
                    <label className="text-sm font-medium mb-3 block">Цена</label>
                    <div className="space-y-4">
                      <Slider
                        value={priceRange}
                        onValueChange={setPriceRange}
                        max={500000}
                        min={10000}
                        step={10000}
                        className="my-6"
                      />
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>{priceRange[0].toLocaleString()} ₽</span>
                        <span>{priceRange[1].toLocaleString()} ₽</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-3">
              <div className="grid md:grid-cols-2 gap-6">
                {filteredTours.map((tour) => (
                  <Card key={tour.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group animate-fade-in">
                    <div className="relative h-48 overflow-hidden">
                      <img src={tour.image} alt={tour.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      {tour.isHot && (
                        <Badge className="absolute top-3 right-3 bg-accent text-white">
                          🔥 Горящий
                        </Badge>
                      )}
                    </div>
                    <CardContent className="p-5">
                      <h3 className="text-xl font-bold mb-2">{tour.title}</h3>
                      <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                        <Icon name="MapPin" size={14} />
                        {tour.location}
                      </div>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="flex items-center gap-1">
                          <Icon name="Star" className="fill-yellow-400 text-yellow-400" size={14} />
                          <span className="text-sm font-semibold">{tour.rating}</span>
                        </div>
                        <div className="flex items-center gap-1 text-muted-foreground text-sm">
                          <Icon name="Clock" size={14} />
                          {tour.duration}
                        </div>
                      </div>
                      <Separator className="my-3" />
                      <div className="flex items-center justify-between">
                        <div>
                          {tour.oldPrice && (
                            <span className="text-xs line-through text-muted-foreground block">
                              {tour.oldPrice.toLocaleString()} ₽
                            </span>
                          )}
                          <span className="text-2xl font-bold text-primary">
                            {tour.price.toLocaleString()} ₽
                          </span>
                        </div>
                        <Button size="sm" className="bg-primary hover:bg-primary/90">
                          Подробнее
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Отзывы наших клиентов</h2>
            <p className="text-muted-foreground text-lg">Более 5000 довольных путешественников</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <Card key={review.id} className="hover:shadow-lg transition-shadow animate-fade-in">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Avatar className="w-12 h-12">
                      <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white">
                        {review.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">{review.author}</CardTitle>
                      <CardDescription>{review.date}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="fill-yellow-400 text-yellow-400" size={16} />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-3">{review.text}</p>
                  <Badge variant="secondary">{review.tour}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="bg-gradient-to-br from-primary to-secondary p-12 text-white flex flex-col justify-center">
                  <h2 className="text-4xl font-bold mb-6">О компании</h2>
                  <p className="text-lg mb-6 opacity-90">
                    Мы работаем на туристическом рынке более 15 лет и предлагаем лучшие туры по всему миру.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                        <Icon name="Shield" size={24} />
                      </div>
                      <div>
                        <div className="font-semibold">Лицензия РТО 123456</div>
                        <div className="text-sm opacity-80">Официальный туроператор</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                        <Icon name="Award" size={24} />
                      </div>
                      <div>
                        <div className="font-semibold">Сертификаты качества</div>
                        <div className="text-sm opacity-80">ISO 9001:2015</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-primary mb-2">15+</div>
                      <div className="text-sm text-muted-foreground">Лет опыта</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-primary mb-2">5000+</div>
                      <div className="text-sm text-muted-foreground">Довольных клиентов</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-primary mb-2">120+</div>
                      <div className="text-sm text-muted-foreground">Направлений</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                      <div className="text-sm text-muted-foreground">Поддержка</div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Свяжитесь с нами</h2>
              <p className="text-muted-foreground text-lg">Мы поможем подобрать идеальный тур для вас</p>
            </div>
            <Card>
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Имя</label>
                      <Input placeholder="Ваше имя" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Телефон</label>
                      <Input placeholder="+7 (___) ___-__-__" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <Input type="email" placeholder="your@email.com" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Сообщение</label>
                    <Textarea placeholder="Расскажите о ваших пожеланиях..." rows={4} />
                  </div>
                  <Button className="w-full h-12 bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity text-lg">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <Icon name="Phone" className="mx-auto mb-3 text-primary" size={32} />
                <div className="font-semibold mb-1">Телефон</div>
                <div className="text-muted-foreground text-sm">+7 (495) 123-45-67</div>
              </Card>
              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <Icon name="Mail" className="mx-auto mb-3 text-primary" size={32} />
                <div className="font-semibold mb-1">Email</div>
                <div className="text-muted-foreground text-sm">info@turmir.ru</div>
              </Card>
              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <Icon name="MapPin" className="mx-auto mb-3 text-primary" size={32} />
                <div className="font-semibold mb-1">Адрес</div>
                <div className="text-muted-foreground text-sm">Москва, ул. Тверская, 1</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-r from-primary to-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <Icon name="Plane" size={24} />
                </div>
                <span className="text-2xl font-bold">ТурМир</span>
              </div>
              <p className="text-white/80 text-sm">
                Ваш надёжный партнёр в мире путешествий
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="#about" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Вакансии</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Партнёрам</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="#tours" className="hover:text-white transition-colors">Туры</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Страхование</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Визы</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li>+7 (495) 123-45-67</li>
                <li>info@turmir.ru</li>
                <li>Москва, ул. Тверская, 1</li>
              </ul>
            </div>
          </div>
          <Separator className="bg-white/20 mb-8" />
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/80">
            <div>© 2024 ТурМир. Все права защищены.</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-white transition-colors">Условия использования</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
