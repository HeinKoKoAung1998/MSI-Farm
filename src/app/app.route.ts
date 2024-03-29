import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ContactComponent } from "./contact/contact.component";
import { ProductComponent } from "./product/product.component";
import { ErrorComponent } from "./error/error.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { Product } from "./product";

export const appRoutes: Routes= [
    {path : 'home' , component: HomeComponent},
    {path : 'contact' , component: ContactComponent},
    {path : 'product' , component: ProductComponent},
    {path : 'product/detail/:id', component: ProductDetailComponent},
    {path : '' , redirectTo: 'home',pathMatch :'full'},
    {path : '**' , component: ErrorComponent}//Wild Card Route
]