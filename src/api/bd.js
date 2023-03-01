import image_1 from "../assets/img/goods/image_1.png";
import image_2 from "../assets/img/goods/image_2.png";
import image_3 from "../assets/img/goods/image_3.png";
import image_4 from "../assets/img/goods/image_4.png";

const desc = `Набор кухонных принадлежностей – все, что может понадобиться Вам во время приготовления пищи. Набор — это прекрасный подарок маме, подруге или любимой. В набор входит 11 предметов и подставка. А именно: удобная лопатка для жарки со сливом для масла, лопатка для выпечки, венчик, щипцы, плоская ложка, лопатка(шпатель) с отверстиями для слива масла, половник, ложка для салата, кисточка для масла, ложка с отверстиями (мини шумовка) и ложка для спагетти.
Набор изготовлен из силикона с антипригарным покрытием, выдерживающим различные температурные нагрузки и бамбуковых ручек, что делает набор полностью безопасным для здоровья человека. Подставка изготовлена из пластика.`

const data = {
    goods: [
        {
            id: 1,
            img: image_1,
            title: "Набор кухонных принадлежностей из 12 предметов",
            cost: "275 000 сум",
            desc,
            isFavourite: true,
            isBuy: true,
            isActive: false,
            number: 1
        },
        {
            id: 2,
            img: image_2,
            title: "Набор кухонных принадлежностей из ...",
            cost: "275 000 сум",
            desc,
            isFavourite:true,
            isBuy: false,
            isAvailability: true,
            isHot: true,
            isActive: false,
            number: 1
        },
        {
            id: 3,
            img: image_3,
            title: "Набор кухонных принадлежностей из ...",
            cost: "275 000 сум",
            desc,
            isFavourite: true,
            isBuy: false,
            isAvailability: true,
            isHot: true,
            isActive: false,
            number: 1
        },
        {
            id: 4,
            img: image_1,
            title: "Набор кухонных принадлежностей из ...",
            cost: "275 000 сум",
            desc,
            isFavourite: false,
            isBuy: true,
            isHot: true,
            isActive: false,
            number: 1
        },
        {
            id: 5,
            img: image_4,
            title: "Набор кухонных принадлежностей из ...",
            cost: "275 000 сум",
            desc,
            isFavourite: false,
            isBuy: false,
            isActive: false,
            number: 1
        },
        {
            id: 6,
            img: image_4,
            title: "Набор кухонных принадлежностей из ...",
            cost: "275 000 сум",
            desc,
            isFavourite: false,
            isBuy: false,
            number: 1
        },
        {
            id: 7,
            img: image_1,
            title: "Набор кухонных принадлежностей из ...",
            cost: "275 000 сум",
            desc,
            isFavourite: true,
            isBuy: false,
            isActive: false,
            number: 1
        },
        {
            id: 8,
            img: image_3,
            title: "Набор кухонных принадлежностей из ...",
            cost: "275 000 сум",
            desc,
            isFavourite: true,
            isBuy: false,
            isHot: true,
            isActive: false,
            number: 1
        },
        {
            id: 9,
            img: image_2,
            title: "Набор кухонных принадлежностей из ...",
            cost: "275 000 сум",
            desc,
            isFavourite: false,
            isBuy: false,
            isActive: false,
            number: 1
        },
        {
            id: 10,
            img: image_1,
            title: "Набор кухонных принадлежностей из ...",
            cost: "275 000 сум",
            desc,
            isFavourite: false,
            isBuy: false,
            isActive: false,
            number: 1
        },
        {
            id: 11,
            img: image_2,
            title: "Набор кухонных принадлежностей из ...",
            cost: "275 000 сум",
            desc,
            isFavourite: false,
            isBuy: false,
            isHot: true,
            isActive: false,
            number: 1
        },
        {
            id: 12,
            img: image_1,
            title: "Набор кухонных принадлежностей из ...",
            cost: "275 000 сум",
            desc,
            isFavourite: true,
            isBuy: false,
            isAvailability: true,
            isHot: true,
            isActive: false,
            number: 1
        },
        {
            id: 13,
            img: image_3,
            title: "Набор кухонных принадлежностей из ...",
            cost: "275 000 сум",
            desc,
            isFavourite: false,
            isBuy: true,
            isAvailability: true,
            isActive: false,
            number: 1
        },
        {
            id: 14,
            img: image_1,
            title: "Набор кухонных принадлежностей из ...",
            cost: "275 000 сум",
            desc,
            isFavourite: false,
            isBuy: false,
            isActive: false,
            number: 1
        },
        {
            id: 15,
            img: image_4,
            title: "Набор кухонных принадлежностей из ...",
            cost: "275 000 сум",
            desc,
            isFavourite: true,
            isBuy: false,
            isActive: false,
            number: 1
        },
        {
            id: 16,
            img: image_1,
            title: "Набор кухонных принадлежностей из ...",
            cost: "275 000 сум",
            desc,
            isFavourite: true,
            isBuy: false,
            isAvailability: true,
            isHot: true,
            isActive: false,
            number: 1
        },
        {
            id: 17,
            img: image_3,
            title: "Набор кухонных принадлежностей из ...",
            cost: "275 000 сум",
            desc,
            isFavourite: false,
            isBuy: false,
            isAvailability: true,
            isHot: true,
            isActive: false,
            number: 1
        },
        {
            id: 18,
            img: image_4,
            title: "Набор кухонных принадлежностей из ...",
            cost: "275 000 сум",
            desc,
            isFavourite: false,
            isBuy: false,
            isAvailability: true,
            isActive: false,
            number: 1
        },
        {
            id: 19,
            img: image_2,
            title: "Набор кухонных принадлежностей из ...",
            cost: "275 000 сум",
            desc,
            isFavourite: false,
            isBuy: false,
            isAvailability: true,
            isActive: false,
            number: 1
        },
        {
            id: 20,
            img: image_1,
            title: "Набор кухонных принадлежностей из ...",
            cost: "275 000 сум",
            desc,
            isFavourite: true,
            isBuy: false,
            isAvailability: true,
            isHot: true,
            isActive: false,
            number: 1
        }
    ],
    catalog: [
        {
            id: 1,
            title: "Тостеры",
            list: [
                {
                    title: "Товары для кухни",
                    href: "kitchenGoods"
                },
                {
                    title: "Винные аксессуары",
                    href: "wineAccessories"
                },
                {
                    title: "Посуда для приготовления",
                    href: "dishesForCooking"
                },
                {
                    title: "Кухонные наборы",
                    href: "kitchenSets"
                },
                {
                    title: "Столовая посуда",
                    href: "tableware"
                },
                {
                    title: "Кухонные аксессуары",
                    href: "kitchenAccessories"
                },
                {
                    title: "Товары для консервирования",
                    href: "canningProducts"
                },
                {
                    title: "Кухонные инструменты",
                    href: "kitchenTools"
                }
            ]
        },
        {
            id: 2,
            title: "Прочая кухонная техника",
            list: [
                {
                    title: "2",
                    href: "9"
                }
            ]
        },
        {
            id: 3,
            title: "Кофемашины и кофеварки",
            list: [
                {
                    title: "3",
                    href: "10"
                }
            ]
        },
        {
            id: 4,
            title: "Товары для кухни",
            list: [
                {
                    title: "4",
                    href: "11"
                }
            ]
        },
        {
            id: 5,
            title: "Техника для приготовления блюд",
            list: [
                {
                    title: "5",
                    href: "12"
                }
            ]
        },
        {
            id: 6,
            title: "Блендеры и миксеры",
            list: [
                {
                    title: "6",
                    href: "13"
                }
            ]
        },
        {
            id: 7,
            title: "Микроволновые печи и грили",
            list: [
                {
                    title: "7",
                    href: "14"
                }
            ]
        },
        {
            id: 8,
            title: "Техника для приготовления десертов",
            list: [
                {
                    title: "8",
                    href: "15"
                }
            ]
        },
        {
            id: 9,
            title: "Настольные плиты",
            list: [
                {
                    title: "9",
                    href: "16"
                }
            ]
        },
        {
            id: 10,
            title: "Электрические чайник",
            list: [
                {
                    title: "10",
                    href: "17"
                }
            ]
        },
        {
            id: 11,
            title: "Соковыжималки",
            list: [
                {
                    title: "11",
                    href: "18"
                }
            ]
        },
        {
            id: 12,
            title: "Кухонные комбайны",
            list: [
                {
                    title: "12",
                    href: "19"
                }
            ]
        }
    ]
}

const findItem = (id, fun, arr = data) => {
    for(let i = 0; i < arr.goods.length; i++){
        if(arr.goods[i].id == id) return fun(arr.goods[i])
    }
}

export const setFavourite = (id) => {
    return findItem(id, (item) => {
        item.isFavourite = !item.isFavourite
        return item.isFavourite
    });
}

export const setBuy = (id, bool) => {
    return findItem(id, (item) => {
        if(typeof bool != "boolean"){
            item.isBuy = !item.isBuy
        }else{
            item.isBuy = bool
        }

        item.number = 1;
        item.isActive = false;

        return item.isBuy
    });
}

export const resetBuy = () => {
    for(let i = 0; i < data.goods.length; i++){
        data.goods[i].isBuy = false;
    }
}

export const getCard = (id) => {
    return findItem(id, (item) => {
        return item
    })
}

export const setActive = (id) => {
    findItem(id, (item) => {
        item.isActive = !item.isActive
    });
}

export const setNumber = (id, number) => {
    findItem(id, (item) => {
        if(item.number + number > 0 && item.number + number < 11){
            item.number += number
        }
    });
}

export default data