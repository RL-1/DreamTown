
import { element } from "prop-types"
import img1 from './Svg/img1.jpg';
import img2 from './Svg/img2.jpg';
import img3 from './Svg/img3.jpg';

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
            color:'#ffcd00;'
        },
        {
            title:'ВЫХОДНЫЕ СЕНТЯБРЯ',
            more:'Узнать больше',
            img:img2,
            color:'#7d55c8'
        },
        {
            title:'МАСТЕР-КЛАССЫ СЕНТЯБРЯ',
            more:'Узнать больше',
            img:img2,
            color:'#7d55c8'
        }
    ]

}

export {state}
