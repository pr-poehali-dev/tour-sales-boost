import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Slider } from '@/components/ui/slider';
import Icon from '@/components/ui/icon';

interface Tour {
  id: number;
  title: string;
  location: string;
  price: number;
  oldPrice?: number;
  duration: string;
  rating: number;
  reviews: number;
  image: string;
  isHot: boolean;
  category: string;
  description: string;
  includes: string[];
}

interface Category {
  id: string;
  name: string;
  icon: string;
}

interface ToursSectionsProps {
  tours: Tour[];
  categories: Category[];
  filteredTours: Tour[];
  hotDeals: Tour[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  priceRange: number[];
  setPriceRange: (range: number[]) => void;
}

const ToursSections = ({
  tours,
  categories,
  filteredTours,
  hotDeals,
  selectedCategory,
  setSelectedCategory,
  priceRange,
  setPriceRange,
}: ToursSectionsProps) => {
  return (
    <>
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
    </>
  );
};

export default ToursSections;
