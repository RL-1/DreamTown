import './banner.css'

const Banner: React.FC = () => {
    return (
        <div className='banner'>
            <div className="banner_box">
                <div className="banner_block">
                    <div className="banner_upBunner">
                        <div className="banner_children">
                            CHILDREN'S CENTER
                        </div>
                        <div className="banner_children">
                            ENTARNAIMENT
                        </div>
                    </div>
                    <div className="banner_title">
                        HAPPY KID'S PARK
                    </div>
                    <div className="banner_text">
                        Happy Kid`s Park - центр детских развлечений, площадью 2800 км. м.
                        Он находится в ТРЦ Dream Town по адресу Оболонский проспект, 1Б, атриум "Франция", 3 этаж.
                        Здесь есть развлечения для детей любого возраста: от совсем маленьких до 15 лет включительно.
                        Самые популярные: лабиринт, интерактивная комната, скалодром, ниндзя-парк,
                        зона для творчества и развития и зона отдыха.
                        Также в Happy Kid`s Park работает большой фуд-корт специально для детей.
                    </div>
                    <div className="banner_line" />
                    <div className="banner_button">
                        Узнать больше
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Banner }