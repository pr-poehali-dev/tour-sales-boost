import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

interface Review {
  id: number;
  author: string;
  rating: number;
  text: string;
  tour: string;
  date: string;
  avatar: string;
}

interface BottomSectionsProps {
  reviews: Review[];
}

const BottomSections = ({ reviews }: BottomSectionsProps) => {
  return (
    <>
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
                    Мы организуем экспедиции на Камчатку более 15 лет. Знаем каждый вулкан и тропу в этом уникальном крае.
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
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src="https://cdn.poehali.dev/files/1b684fdc-a9b9-409b-ac76-0ecaabeeca94.jpg" 
                  alt="Kamchatka Adventures Logo" 
                  className="h-16 w-auto object-contain"
                />
              </div>
              <p className="text-white/80 text-sm">
                Экспедиции в самое сердце дикой природы
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
    </>
  );
};

export default BottomSections;