import { useState } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ToursSections from '@/components/ToursSections';
import BottomSections from '@/components/BottomSections';

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
      <Header />
      <HeroSection 
        date={date}
        setDate={setDate}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <ToursSections 
        tours={tours}
        categories={categories}
        filteredTours={filteredTours}
        hotDeals={hotDeals}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
      />
      <BottomSections reviews={reviews} />
    </div>
  );
};

export default Index;
