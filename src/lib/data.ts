export const navLinks = [
  {
    label: 'Главная',
    href: '/',
  },
  {
    label: 'О колледже',
    href: '/about',
    submenu: [
      { label: 'История', href: '/about#history' },
      { label: 'Администрация', href: '/administration' },
      { label: 'Лицензии и аккредитации', href: '/about#licenses' },
    ],
  },
  {
    label: 'Абитуриентам',
    href: '/applicants',
    submenu: [
      { label: 'Специальности', href: '/specialties' },
      { label: 'Правила приема', href: '/applicants#rules' },
      { label: 'Документы', href: '/applicants#documents' },
      { label: 'Стоимость обучения', href: '/applicants#cost' },
    ],
  },
  {
    label: 'Студентам',
    href: '/students',
    submenu: [
      { label: 'Электронный журнал', href: '#journal' },
      { label: 'Расписание', href: '#schedule' },
      { label: 'Библиотека', href: '#library' },
      { label: 'Трудоустройство', href: '#employment' },
    ],
  },
  {
    label: 'Родителям',
    href: '/parents',
  },
  {
    label: 'Новости',
    href: '/news',
  },
  {
    label: 'Галерея',
    href: '/gallery',
  },
  {
    label: 'Контакты',
    href: '/contacts',
  },
]

export const specialties = [
  {
    id: 1,
    title: 'Сестринское дело',
    description: 'Подготовка высокопрофессиональных медицинских сестер для работы в стационарах и амбулаториях',
    icon: '🏥',
    duration: '3 года',
    students: 150,
  },
  {
    id: 2,
    title: 'Лечебное дело',
    description: 'Обучение фельдшеров для работы в сельских амбулаториях и больницах',
    icon: '⚕️',
    duration: '3 года',
    students: 120,
  },
  {
    id: 3,
    title: 'Акушерское дело',
    description: 'Подготовка акушеров для родильных отделений и женских консультаций',
    icon: '👶',
    duration: '3 года',
    students: 80,
  },
  {
    id: 4,
    title: 'Фармация',
    description: 'Обучение фармацевтов для работы в аптеках и фармацевтических компаниях',
    icon: '💊',
    duration: '3 года',
    students: 100,
  },
  {
    id: 5,
    title: 'Стоматология',
    description: 'Подготовка стоматологических техников и ассистентов',
    icon: '🦷',
    duration: '3 года',
    students: 60,
  },
  {
    id: 6,
    title: 'Лабораторная диагностика',
    description: 'Обучение лабораторных техников для клинических и биохимических анализов',
    icon: '🔬',
    duration: '3 года',
    students: 70,
  },
  {
    id: 7,
    title: 'Медицинская оптика',
    description: 'Подготовка специалистов в области оптометрии и оказания офтальмологической помощи',
    icon: '👁️',
    duration: '3 года',
    students: 50,
  },
  {
    id: 8,
    title: 'Прикладной бакалавриат',
    description: 'Углубленное обучение по специальностям здравоохранения с получением степени бакалавра',
    icon: '📚',
    duration: '4 года',
    students: 90,
  },
]

export const statistics = [
  {
    label: 'Год основания',
    value: 1954,
    description: 'КВМКо основан в 1954 году',
  },
  {
    label: 'Студентов',
    value: 5000,
    suffix: '+',
    description: 'Более 5000 студентов обучаются сейчас',
  },
  {
    label: 'Выпускников',
    value: 25000,
    suffix: '+',
    description: 'Подготовлено более 25000 специалистов',
  },
  {
    label: 'Программ',
    value: 8,
    description: 'Образовательных программ по специальностям',
  },
]

export const news = [
  {
    id: 1,
    title: 'Начало нового учебного года',
    excerpt: 'Торжественное открытие 2026-2027 учебного года',
    description: 'В колледже официально начался новый учебный год с приемом более 800 новых студентов',
    image: 'https://images.unsplash.com/photo-1523289333684-e614ea694237?w=800&h=500&fit=crop',
    date: '2026-09-01',
    category: 'Учебный процесс',
    content: 'Подробное описание торжественного открытия учебного года...',
  },
  {
    id: 2,
    title: 'Международная конференция по медицинскому образованию',
    excerpt: 'КВМКо участвует в конференции с международными партнерами',
    description: 'Студенты и преподаватели колледжа представили научные работы на международной конференции',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop',
    date: '2026-08-15',
    category: 'Научная работа',
    content: 'Подробное описание конференции...',
  },
  {
    id: 3,
    title: 'Открытие новой лаборатории',
    excerpt: 'Современная лаборатория для практических занятий',
    description: 'Открыта новая лаборатория с современным оборудованием для практического обучения студентов',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=500&fit=crop',
    date: '2026-08-01',
    category: 'Инфраструктура',
    content: 'Подробное описание новой лаборатории...',
  },
  {
    id: 4,
    title: 'Выпуск студентов 2026 года',
    excerpt: 'Торжественная церемония выпуска',
    description: 'Более 600 студентов получили дипломы о завершении образования',
    image: 'https://images.unsplash.com/photo-1533928298208-27ff66555d0d?w=800&h=500&fit=crop',
    date: '2026-07-20',
    category: 'Событие',
    content: 'Подробное описание выпуска...',
  },
  {
    id: 5,
    title: 'Стажировка студентов за границей',
    excerpt: 'Программа обмена со странами Европы',
    description: 'Группа студентов проходит стажировку в медицинских учреждениях Европы',
    image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&h=500&fit=crop',
    date: '2026-07-01',
    category: 'Образование',
    content: 'Подробное описание стажировки...',
  },
  {
    id: 6,
    title: 'Олимпиада по медицинским дисциплинам',
    excerpt: 'Студенты колледжа стали призерами',
    description: 'Четверо студентов КВМКо заняли призовые места на республиканской олимпиаде',
    image: 'https://images.unsplash.com/photo-1634242862008-f8d5cf5a2fd4?w=800&h=500&fit=crop',
    date: '2026-06-15',
    category: 'Достижения',
    content: 'Подробное описание олимпиады...',
  },
]

export const staff = [
  {
    id: 1,
    name: 'Дауылбеков Есенкул Маратович',
    position: 'Директор колледжа',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop',
    bio: 'Опытный руководитель с 20-летним стажем в системе образования',
    email: 'director@kzomk.kz',
  },
  {
    id: 2,
    name: 'Абилова Гульнара Сагатовна',
    position: 'Заместитель директора по учебной работе',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop',
    bio: 'Кандидат педагогических наук, специалист в области образовательных технологий',
    email: 'academic@kzomk.kz',
  },
  {
    id: 3,
    name: 'Туленов Мейрамбек Ерланович',
    position: 'Заместитель директора по воспитательной работе',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop',
    bio: 'Организатор студенческой жизни с более чем 15-летним опытом',
    email: 'student@kzomk.kz',
  },
  {
    id: 4,
    name: 'Сейтова Айнур Кызы',
    position: 'Заведующая отделением сестринского дела',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop',
    bio: 'Высокопрофессиональный преподаватель с опытом работы в лучших клиниках',
    email: 'nursing@kzomk.kz',
  },
]

export const contactInfo = {
  phone: '+7 (249) 222-04-46',
  email: 'info@kzomk.kz',
  address: 'г. Кызылорда, ул. Абулкайра, дом 107',
  social: {
    instagram: 'https://instagram.com/kzomk',
    facebook: 'https://facebook.com/kzomk',
    telegram: 'https://t.me/kzomk',
    whatsapp: 'https://wa.me/77249220446',
  },
}

export const programs = [
  {
    id: 1,
    title: 'Электронный журнал',
    description: 'Система для отслеживания успеваемости и посещаемости',
    icon: '📔',
    link: '#journal',
  },
  {
    id: 2,
    title: 'Расписание занятий',
    description: 'Актуальное расписание всех занятий и экзаменов',
    icon: '📅',
    link: '#schedule',
  },
  {
    id: 3,
    title: 'Библиотека',
    description: 'Электронная библиотека с учебными материалами',
    icon: '📚',
    link: '#library',
  },
  {
    id: 4,
    title: 'Трудоустройство',
    description: 'Помощь в поиске работы после окончания обучения',
    icon: '💼',
    link: '#employment',
  },
]
