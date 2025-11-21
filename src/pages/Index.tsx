import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { ScrollArea } from '@/components/ui/scroll-area';

type Product = {
  id: number;
  name: string;
  price: number;
  unit: string;
  seller: string;
  category: string;
  image: string;
  eco: boolean;
};

type Message = {
  id: number;
  sender: string;
  text: string;
  time: string;
  isOwn: boolean;
};

type PickupPoint = {
  id: number;
  name: string;
  address: string;
  type: 'pickup' | 'recycle';
  lat: number;
  lng: number;
};

export default function Index() {
  const [activeTab, setActiveTab] = useState('marketplace');
  const [selectedChat, setSelectedChat] = useState<string | null>(null);

  const products: Product[] = [
    {
      id: 1,
      name: 'Свежие овощи',
      price: 450,
      unit: 'кг',
      seller: 'Фермерское хозяйство "Зелёная долина"',
      category: 'Овощи',
      image: 'https://cdn.poehali.dev/projects/5a4e4594-cabc-45e7-9ad9-16153f18bcf4/files/633d04fc-b6b6-4b7d-8175-a92167338241.jpg',
      eco: true,
    },
    {
      id: 2,
      name: 'Молочные продукты',
      price: 320,
      unit: 'л',
      seller: 'Ферма "Русское поле"',
      category: 'Молоко',
      image: 'https://cdn.poehali.dev/projects/5a4e4594-cabc-45e7-9ad9-16153f18bcf4/files/b0876e6c-82f3-4f0c-a558-da41681b68c4.jpg',
      eco: true,
    },
    {
      id: 3,
      name: 'Натуральный мёд',
      price: 850,
      unit: 'кг',
      seller: 'Пасека "Медовый край"',
      category: 'Мёд',
      image: 'https://cdn.poehali.dev/projects/5a4e4594-cabc-45e7-9ad9-16153f18bcf4/files/5a3638c0-3dff-4e9c-a59c-4c2baaf42a9d.jpg',
      eco: true,
    },
    {
      id: 4,
      name: 'Домашние яйца',
      price: 180,
      unit: '10 шт',
      seller: 'Ферма "Русское поле"',
      category: 'Яйца',
      image: 'https://cdn.poehali.dev/projects/5a4e4594-cabc-45e7-9ad9-16153f18bcf4/files/b0876e6c-82f3-4f0c-a558-da41681b68c4.jpg',
      eco: true,
    },
    {
      id: 5,
      name: 'Свежая зелень',
      price: 120,
      unit: 'пучок',
      seller: 'Фермерское хозяйство "Зелёная долина"',
      category: 'Зелень',
      image: 'https://cdn.poehali.dev/projects/5a4e4594-cabc-45e7-9ad9-16153f18bcf4/files/633d04fc-b6b6-4b7d-8175-a92167338241.jpg',
      eco: true,
    },
    {
      id: 6,
      name: 'Цветочный мёд',
      price: 920,
      unit: 'кг',
      seller: 'Пасека "Медовый край"',
      category: 'Мёд',
      image: 'https://cdn.poehali.dev/projects/5a4e4594-cabc-45e7-9ad9-16153f18bcf4/files/5a3638c0-3dff-4e9c-a59c-4c2baaf42a9d.jpg',
      eco: true,
    },
  ];

  const chats = [
    { seller: 'Фермерское хозяйство "Зелёная долина"', lastMessage: 'Доставка возможна завтра' },
    { seller: 'Ферма "Русское поле"', lastMessage: 'Спасибо за заказ!' },
    { seller: 'Пасека "Медовый край"', lastMessage: 'Новая партия мёда готова' },
  ];

  const messages: Message[] = [
    { id: 1, sender: 'Фермерское хозяйство "Зелёная долина"', text: 'Здравствуйте! Чем могу помочь?', time: '10:30', isOwn: false },
    { id: 2, sender: 'Вы', text: 'Добрый день! Интересуют свежие овощи', time: '10:32', isOwn: true },
    { id: 3, sender: 'Фермерское хозяйство "Зелёная долина"', text: 'У нас есть морковь, томаты и зелень. Всё собрано сегодня утром.', time: '10:33', isOwn: false },
    { id: 4, sender: 'Вы', text: 'Отлично! Когда возможна доставка?', time: '10:35', isOwn: true },
    { id: 5, sender: 'Фермерское хозяйство "Зелёная долина"', text: 'Доставка возможна завтра с 9 до 18 часов', time: '10:36', isOwn: false },
  ];

  const pickupPoints: PickupPoint[] = [
    { id: 1, name: 'Пункт выдачи "Село Ивановское"', address: 'ул. Центральная, 15', type: 'pickup', lat: 55.7558, lng: 37.6173 },
    { id: 2, name: 'Пункт выдачи "Деревня Петрово"', address: 'ул. Советская, 8', type: 'pickup', lat: 55.7658, lng: 37.6273 },
    { id: 3, name: 'Приём вторсырья "ЭкоПункт"', address: 'ул. Полевая, 22', type: 'recycle', lat: 55.7458, lng: 37.6073 },
    { id: 4, name: 'Приём вторсырья "Зелёный двор"', address: 'ул. Садовая, 5', type: 'recycle', lat: 55.7358, lng: 37.5973 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Sprout" className="text-primary" size={32} />
            <h1 className="text-2xl font-bold text-primary">ЭкоМаркет</h1>
          </div>
          <nav className="flex items-center gap-6">
            <button
              onClick={() => setActiveTab('marketplace')}
              className={`flex items-center gap-2 transition-colors ${
                activeTab === 'marketplace' ? 'text-primary font-semibold' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Icon name="ShoppingBag" size={20} />
              Товары
            </button>
            <button
              onClick={() => setActiveTab('chats')}
              className={`flex items-center gap-2 transition-colors ${
                activeTab === 'chats' ? 'text-primary font-semibold' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Icon name="MessageCircle" size={20} />
              Чаты
            </button>
            <button
              onClick={() => setActiveTab('map')}
              className={`flex items-center gap-2 transition-colors ${
                activeTab === 'map' ? 'text-primary font-semibold' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Icon name="MapPin" size={20} />
              Карта
            </button>
          </nav>
        </div>
      </header>

      <main className="container py-8">
        {activeTab === 'marketplace' && (
          <div className="space-y-8 animate-fade-in">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-3xl font-bold">Местные фермерские продукты</h2>
                <p className="text-muted-foreground mt-1">Свежие, натуральные, от проверенных производителей</p>
              </div>
              <div className="flex gap-2">
                <Input placeholder="Поиск товаров..." className="w-full md:w-80" />
                <Button variant="outline" size="icon">
                  <Icon name="Search" size={20} />
                </Button>
              </div>
            </div>

            <Tabs defaultValue="all" className="w-full">
              <TabsList className="mb-6">
                <TabsTrigger value="all">Все товары</TabsTrigger>
                <TabsTrigger value="vegetables">Овощи</TabsTrigger>
                <TabsTrigger value="dairy">Молочное</TabsTrigger>
                <TabsTrigger value="honey">Мёд</TabsTrigger>
                <TabsTrigger value="equipment">Аренда техники</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {products.map((product) => (
                    <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                      <div className="relative overflow-hidden h-64">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        {product.eco && (
                          <Badge className="absolute top-3 right-3 bg-accent text-accent-foreground">
                            <Icon name="Leaf" size={14} className="mr-1" />
                            ЭКО
                          </Badge>
                        )}
                      </div>
                      <CardContent className="p-5">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="font-semibold text-lg">{product.name}</h3>
                          <Badge variant="secondary">{product.category}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">{product.seller}</p>
                        <div className="flex items-baseline gap-1">
                          <span className="text-2xl font-bold text-primary">{product.price} ₽</span>
                          <span className="text-sm text-muted-foreground">/ {product.unit}</span>
                        </div>
                      </CardContent>
                      <CardFooter className="p-5 pt-0 flex gap-2">
                        <Button className="flex-1">
                          <Icon name="ShoppingCart" size={18} className="mr-2" />
                          В корзину
                        </Button>
                        <Button variant="outline" size="icon">
                          <Icon name="Heart" size={18} />
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="equipment" className="space-y-6">
                <Card className="p-8 text-center">
                  <div className="flex flex-col items-center gap-4">
                    <Icon name="Tractor" size={64} className="text-primary opacity-50" />
                    <h3 className="text-xl font-semibold">Аренда сельхозтехники</h3>
                    <p className="text-muted-foreground max-w-md">
                      Здесь фермеры смогут сдавать в аренду технику друг другу: тракторы, культиваторы, комбайны
                    </p>
                    <Button className="mt-4">
                      <Icon name="Plus" size={18} className="mr-2" />
                      Разместить объявление
                    </Button>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        )}

        {activeTab === 'chats' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-12rem)] animate-fade-in">
            <Card className="lg:col-span-1">
              <div className="p-4 border-b">
                <h3 className="font-semibold text-lg">Сообщения</h3>
              </div>
              <ScrollArea className="h-[calc(100%-5rem)]">
                {chats.map((chat) => (
                  <button
                    key={chat.seller}
                    onClick={() => setSelectedChat(chat.seller)}
                    className={`w-full p-4 border-b hover:bg-muted/50 transition-colors text-left ${
                      selectedChat === chat.seller ? 'bg-muted' : ''
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <Avatar>
                        <AvatarFallback className="bg-primary text-primary-foreground">
                          <Icon name="Store" size={20} />
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-sm truncate">{chat.seller}</p>
                        <p className="text-sm text-muted-foreground truncate">{chat.lastMessage}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </ScrollArea>
            </Card>

            <Card className="lg:col-span-2 flex flex-col">
              {selectedChat ? (
                <>
                  <div className="p-4 border-b flex items-center gap-3">
                    <Avatar>
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        <Icon name="Store" size={20} />
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{selectedChat}</p>
                      <p className="text-xs text-muted-foreground">В сети</p>
                    </div>
                  </div>

                  <ScrollArea className="flex-1 p-4">
                    <div className="space-y-4">
                      {messages.map((message) => (
                        <div key={message.id} className={`flex ${message.isOwn ? 'justify-end' : 'justify-start'} animate-fade-in`}>
                          <div
                            className={`max-w-[70%] rounded-lg p-3 ${
                              message.isOwn ? 'bg-primary text-primary-foreground' : 'bg-muted'
                            }`}
                          >
                            <p className="text-sm">{message.text}</p>
                            <p className={`text-xs mt-1 ${message.isOwn ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>
                              {message.time}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>

                  <div className="p-4 border-t">
                    <div className="flex gap-2">
                      <Input placeholder="Написать сообщение..." />
                      <Button size="icon">
                        <Icon name="Send" size={18} />
                      </Button>
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex-1 flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <Icon name="MessageCircle" size={64} className="mx-auto mb-4 opacity-50" />
                    <p>Выберите чат для начала общения</p>
                  </div>
                </div>
              )}
            </Card>
          </div>
        )}

        {activeTab === 'map' && (
          <div className="space-y-6 animate-fade-in">
            <div>
              <h2 className="text-3xl font-bold">Пункты выдачи и приёма вторсырья</h2>
              <p className="text-muted-foreground mt-1">Найдите ближайший пункт на карте</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="p-0 overflow-hidden h-[600px]">
                <div className="w-full h-full bg-muted flex items-center justify-center">
                  <div className="text-center">
                    <Icon name="Map" size={64} className="mx-auto mb-4 text-primary opacity-50" />
                    <p className="text-muted-foreground">Здесь будет интерактивная карта</p>
                    <p className="text-sm text-muted-foreground mt-2">Яндекс.Карты или другой сервис</p>
                  </div>
                </div>
              </Card>

              <div className="space-y-4">
                <Tabs defaultValue="pickup" className="w-full">
                  <TabsList className="w-full">
                    <TabsTrigger value="pickup" className="flex-1">
                      <Icon name="Package" size={16} className="mr-2" />
                      Пункты выдачи
                    </TabsTrigger>
                    <TabsTrigger value="recycle" className="flex-1">
                      <Icon name="Recycle" size={16} className="mr-2" />
                      Приём вторсырья
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="pickup" className="space-y-3 mt-4">
                    {pickupPoints
                      .filter((point) => point.type === 'pickup')
                      .map((point) => (
                        <Card key={point.id} className="p-4 hover:shadow-md transition-all duration-300 cursor-pointer hover:-translate-y-0.5">
                          <div className="flex items-start gap-3">
                            <div className="p-2 rounded-lg bg-primary/10">
                              <Icon name="MapPin" size={24} className="text-primary" />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold">{point.name}</h4>
                              <p className="text-sm text-muted-foreground mt-1">{point.address}</p>
                              <Button variant="link" className="p-0 h-auto mt-2">
                                Показать на карте
                              </Button>
                            </div>
                          </div>
                        </Card>
                      ))}
                  </TabsContent>

                  <TabsContent value="recycle" className="space-y-3 mt-4">
                    {pickupPoints
                      .filter((point) => point.type === 'recycle')
                      .map((point) => (
                        <Card key={point.id} className="p-4 hover:shadow-md transition-all duration-300 cursor-pointer hover:-translate-y-0.5">
                          <div className="flex items-start gap-3">
                            <div className="p-2 rounded-lg bg-accent/10">
                              <Icon name="Recycle" size={24} className="text-accent" />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold">{point.name}</h4>
                              <p className="text-sm text-muted-foreground mt-1">{point.address}</p>
                              <p className="text-xs text-muted-foreground mt-1">Принимаем: пластик, стекло, бумагу</p>
                              <Button variant="link" className="p-0 h-auto mt-2">
                                Показать на карте
                              </Button>
                            </div>
                          </div>
                        </Card>
                      ))}
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        )}
      </main>

      <footer className="mt-16 border-t bg-muted/30">
        <div className="container py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Sprout" className="text-primary" size={28} />
                <h3 className="text-xl font-bold">ЭкоМаркет</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Локальный маркетплейс для поддержки местных фермеров и экологичного производства
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (999) 123-45-67</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <span>info@ecomarket.ru</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Мы в соцсетях</h4>
              <div className="flex gap-3">
                <Button variant="outline" size="icon">
                  <Icon name="MessageCircle" size={18} />
                </Button>
                <Button variant="outline" size="icon">
                  <Icon name="Send" size={18} />
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t text-center text-sm text-muted-foreground">
            <p>© 2024 ЭкоМаркет. Поддержка местного производства и экологии.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}