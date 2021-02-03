import { Routes } from "@angular/router";
import { FooterComponent } from "./footer/footer.component";
import { MenuComponent } from "./menu/menu.component";
import { HomeComponent } from "./home/home.component";

export const rootRouterConfig: Routes = [
    // {path: '', component: AppComponent}
    {path: '', redirectTo:'/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'menu', component: MenuComponent},
    {path: 'footer', component: FooterComponent},
]