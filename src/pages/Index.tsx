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
    { id: 'volcano', name: 'Вулканы', icon: 'Mountain' },
    { id: 'wildlife', name: 'Дикая природа', icon: 'TreePine' },
    { id: 'geyser', name: 'Гейзеры', icon: 'Droplets' },
    { id: 'adventure', name: 'Приключения', icon: 'Bike' },
  ];

  const tours = [
    {
      id: 1,
      title: 'Вулканы Камчатки',
      location: 'Камчатский край',
      price: 145000,
      oldPrice: 180000,
      duration: '7 дней / 6 ночей',
      rating: 4.9,
      reviews: 156,
      image: 'https://cdn.poehali.dev/projects/7046c516-bd45-4622-876c-7b48ad2b8de6/files/37aee513-9b90-4b01-b917-0224b86e3938.jpg',
      isHot: true,
      category: 'volcano',
      description: 'Восхождение на действующие вулканы',
      includes: ['Перелёт', 'Размещение', 'Гид-вулканолог', 'Питание'],
    },
    {
      id: 2,
      title: 'Медведи Камчатки',
      location: 'Камчатский край',
      price: 165000,
      duration: '5 дней / 4 ночи',
      rating: 4.8,
      reviews: 89,
      image: 'https://cdn.poehali.dev/projects/7046c516-bd45-4622-876c-7b48ad2b8de6/files/94e8c13d-3fd9-42a1-8078-3c7771cd6466.jpg',
      isHot: false,
      category: 'wildlife',
      description: 'Наблюдение за камчатскими медведями',
      includes: ['Перелёт', 'Эко-лагерь', 'Гид-зоолог', 'Фототур'],
    },
    {
      id: 3,
      title: 'Долина Гейзеров',
      location: 'Камчатский край',
      price: 125000,
      oldPrice: 155000,
      duration: '4 дня / 3 ночи',
      rating: 4.7,
      reviews: 234,
      image: 'https://cdn.poehali.dev/projects/7046c516-bd45-4622-876c-7b48ad2b8de6/files/bd22aeb2-7f01-47c3-bfe4-1d3210cc6b8a.jpg',
      isHot: true,
      category: 'geyser',
      description: 'Уникальная долина термальных источников',
      includes: ['Перелёт', 'Вертолёт', 'Проживание', 'Экскурсии'],
    },
    {
      id: 4,
      title: 'Тихоокеанское побережье',
      location: 'Камчатский край',
      price: 95000,
      duration: '6 дней / 5 ночей',
      rating: 4.6,
      reviews: 112,
      image: 'https://cdn.poehali.dev/projects/7046c516-bd45-4622-876c-7b48ad2b8de6/files/3feec38a-af19-40f4-b1f5-6aec7f78b5aa.jpg',
      isHot: false,
      category: 'adventure',
      description: 'Дикие пляжи и скалистые берега',
      includes: ['Перелёт', 'Кемпинг', 'Сёрфинг', 'Рыбалка'],
    },
  ];

  const reviews = [
    {
      id: 1,
      author: 'Анна Петрова',
      rating: 5,
      text: 'Невероятное путешествие! Вулканы Камчатки потрясают своей мощью. Гид-вулканолог рассказал столько интересного!',
      tour: 'Вулканы Камчатки',
      date: '15 ноября 2024',
      avatar: 'АП',
    },
    {
      id: 2,
      author: 'Дмитрий Иванов',
      rating: 5,
      text: 'Видеть медведей в дикой природе — это незабываемо! Безопасность на высшем уровне, фото получились шикарные.',
      tour: 'Медведи Камчатки',
      date: '8 ноября 2024',
      avatar: 'ДИ',
    },
    {
      id: 3,
      author: 'Елена Смирнова',
      rating: 4,
      text: 'Долина Гейзеров — это нечто! Вертолётная экскурсия добавила адреналина. Природа просто космическая.',
      tour: 'Долина Гейзеров',
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