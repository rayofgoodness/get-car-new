import cars from "./cars.js";
import settings from "./settings.js";
import base from "./base.js";
import auth from "@/router/routes/auth.js";


const routes = [
    ...base,
    ...auth,
    ...cars,
    ...settings
];

export default routes