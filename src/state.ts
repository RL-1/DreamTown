
import { element } from "prop-types"
import img1 from './Svg/img1.jpg';
import img2 from './Svg/img2.jpg';
import img3 from './Svg/img3.jpg';
import imgNews1 from './components/News/Svg/img1.jpg';
import imgNews2 from './components/News/Svg/img2.jpg'
import imgNews3 from './components/News/Svg/img3.jpg'
import imgNews4 from './components/News/Svg/img4.jpg'
import imgNews5 from './components/News/Svg/img5.jpg'
import imgNews6 from './components/News/Svg/img6.jpg'
import imgNews7 from './components/News/Svg/img7.jpg'
import imgNews8 from './components/News/Svg/img8.jpg'
import imgNews9 from './components/News/Svg/img9.png'
import imgStock1 from './components/Stock/Svg/img1.jpg';
import imgStock2 from './components/Stock/Svg/img2.jpg';
import imgStock3 from './components/Stock/Svg/img3.jpg'
import imgStock4 from './components/Stock/Svg/img4.jpg'
import imgStock5 from './components/Stock/Svg/img5.jpg'
import imgStock6 from './components/Stock/Svg/img6.jpg'
import imgStock7 from './components/Stock/Svg/img7.png'
import imgStock8 from './components/Stock/Svg/img8.jpg'
import imgStock9 from './components/Stock/Svg/img9.jpg'

let state = {
    NavbarElement:{
        About:[
            {
            title:"Контакты",
            path:"/contacts",
            cName:"dropdown-link",
            id:0,
        },
        {
            title:"График работы",
            path:"/job",
            cName:"dropdown-link",
            id:0,
        },{
            title:"Арендатор",
            path:"/tenant",
            cName:"dropdown-link",
            id:0,
        }
    ],
    News:[
        {
            title:"Акции",
            path:'/promo',
            cName:"dropdown-link",
            id:1,
        }
    ],
    Shop:[
        {
            title:"Белье",
            path:'/categor1y',
            cName:"dropdown-link",
            id:2,
        },
        {
            title:"Часы",
            path:'/category2',
            cName:"dropdown-link",
            id:2,
        },
        {
            title:"Обувь",
            path:'/category3',
            cName:"dropdown-link",
            id:2,
        }
    ],
    Entertainment:[
        {
            title:"Для детей",
            path:'/forChild',
            cName:"dropdown-link",
            id:3,
        },
        {
            title:"Кинотеарт",
            path:'/cinema',
            cName:"dropdown-link",
            id:3,
        }
    ],
    Food:[
        {
            title:"Кафе",
            path:'/cafe',
            cName:"dropdown-link",
            id:4,
        },
        {
            title:"Рестораны",
            path:'/restoran',
            cName:"dropdown-link",
            id:4,
        }
    ],
    Services:[
        {
            title:"Банковские дела",
            path:'/category5',
            cName:"dropdown-link",
            id:5,
        },
        {
            title:"Обучение",
            path:'/study',
            cName:"dropdown-link",
            id:5,
        },
        {
            title:"Фото услуги",
            path:'/photo',
            cName:"dropdown-link",
            id:5,
        },
    ],
},
    NavbarBlock:[
        {
            link: '/about',
            text:'О НАС',
        },
        {
            link:'/news',
            text:'НОВОСТИ',
        },
        {
            link:'/shop',
            text:"МАГАЗИНЫ",
        },
        {
            link:'/entertainment',
            text:"РАЗВЛЕЧЕНИЕ",
        },
        {
            link:'/food',
            text:'РЕСТОРАНЫ',
        },
        {
            link:'/services',
            text:'УСЛУГИ',
        }
    ],
    SliderElement:[
        {
            title:'СКИДОЧНЫЙ СЕЗОН',
            more:'Узнать больше',
            img:img1,
            color:'#ffcd00'
        },
        {
            title:'ВЫХОДНЫЕ\nСЕНТЯБРЯ',
            more:'Узнать больше',
            img:img2,
            color:'#7d55c8'
        },
        {
            title:'МАСТЕР-КЛАССЫ\nСЕНТЯБРЯ',
            more:'Узнать больше',
            img:img3,
            color:'#7d55c8'
        }
    ],
    NewsCard:{
        FirstCard:[
            {
                img:imgNews1,
                date:'11 сентября 2021',
                title:'АФИГА МЕРОПРИЯТИЙ\nНА ВЫХОДНЫХ СЕНТЯБРЯ'
            },
            {
                img:imgNews2,
                date:'23 июня 2021',
                title:'СКИДОЧНЫЙ СЕЗОН\nВ DREAM TOWN'
            },
            {
                img:imgNews3,
                date:'11 сентября 2021',
                title:'МАСТЕР-КЛАСС ОТ ЛОГОС\nСЕНТЯБРЯ'
            }
        ],
        MidleCard:[
            {
                img:imgNews4,
                date:'01 августа 2021',
                title:'ШКОЛЬНАЯ ЯРМАРКА\nВ DREAM!'
            },
            {
                img:imgNews5,
                date:'07 августа 2021',
                title:'ДРАЙВОВЫЕ ВЫХОДНЫЕ\nВ АВГУСТЕ!'
            },{
                img:imgNews6,
                date:'28 августа 2021',
                title:'ДРІМ&ДРАЙВ\n28.08'
            }
        ],
        LastCard:[
            {
                img:imgNews7,
                date:'01 августа 2021',
                title:'АВГУСТ В\nДРРРРИМЕ'
            },
            {
                img:imgNews8,
                date:'01 марта 2021',
                title:'ОТКРЫТИЕ\nПАРКИНГА'
            },
            {
                img:imgNews9,
                date:'09 сентября 2021',
                title:'DREAM БОКС'
            }
        ]
    },
    StockCard:{
        FirstCard:[
            {
                img:imgStock1,
                date:'09 сентября 2021 - 29 сентября 2021',
                title:'-25% на total denim look от GAP'
            },
            {
                img:imgStock2,
                date:'01 сентября 2021 - 30 сентября 2021',
                title:'до -50% на белье и купальники в Anabel Arto'
            },
            {
                img:imgStock3,
                date:'06 сентября 2021 - 29 сентября 2021',
                title:'20% на все товары в интернет-магазине в M&S'
            }
        ],
        MidleCard:[
            {
                img:imgStock4,
                date:'07 сентября 2021 - 20 сентября 2021',
                title:"Скидка 50% на каждые вторые джинсы в O'STIN'"
            },
            {
                img:imgStock5,
                date:'01 сентября 2021 - 13 сентября 2021',
                title:'Скидки на украшения до - 45% в SOVA'
            },{
                img:imgStock6,
                date:'01 сентября 2021 - 30 сентября 2021',
                title:'осенний ценопад в BROCARD'
            }
        ],
        LastCard:[
            {
                img:imgStock7,
                date:'01 сентября 2021',
                title:'Total Sale -80% в Natali Bolgar'
            },
            {
                img:imgStock8,
                date:'31 августа 2021 - 26 сентября 2021',
                title:'Акциям "Цепная реакция" от AURUM'
            },
            {
                img:imgStock9,
                date:'31 августа 2021 - 06 сентября 2021',
                title:"Скидка 50% на школьную коллекцию в O'STIN"
            }
        ]
    }

}

export {state}
