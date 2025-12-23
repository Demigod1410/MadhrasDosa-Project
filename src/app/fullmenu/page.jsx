import Image from 'next/image';

export default function FullMenu() {
  const menuImages = [
    { id: 1, src: '/1.jpg', alt: 'Madhras Dosa Cover - Our Menu' },
    { id: 2, src: '/2.jpg', alt: 'Our Story' },
    { id: 3, src: '/3.jpg', alt: 'Sit-In Menu - Soups and Starters' },
    { id: 4, src: '/4.jpg', alt: 'Idli Lab and Extras' },
    { id: 5, src: '/5.jpg', alt: 'Dosa Lab' },
    { id: 6, src: '/6.jpg', alt: 'MD Special Parotta' },
    { id: 7, src: '/7.jpg', alt: 'Curries and Tapas' },
    { id: 8, src: '/8.jpg', alt: 'Dum Biryani and Biryani Platter' },
    { id: 9, src: '/9.jpg', alt: 'Set Meals, Sundries, Rice and Lunch Specials' },
    { id: 10, src: '/10.jpg', alt: 'Drinks and Desserts' }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#febd02' }}>
      <div className="max-w-5xl mx-auto py-8 px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Full Menu
        </h1>
        
        <div className="space-y-6">
          {menuImages.map((menu) => (
            <div key={menu.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src={menu.src}
                alt={menu.alt}
                width={1200}
                height={1600}
                className="w-full h-auto"
                priority={menu.id <= 3}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
