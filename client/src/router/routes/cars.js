import Cars from '@/pages/cars/index.vue'
import CreateCar from "@/pages/cars/AddCar.vue";
import Default from "@/layouts/Default.vue";

export default [
    {
        path: '/cars',
        name: 'Cars',
        component: Cars,
        meta: {
            title: 'Cars',
            layout: Default
        },
        children: [
            {
                path: 'add',
                name: 'Add car',
                component: CreateCar,
                meta: {
                    title: 'Cars | Add car',
                },
            }
        ]
    }
]