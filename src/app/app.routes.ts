import { Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { QlProductsComponent } from './admin/ql-products/ql-products.component';
import { QlCategoriesComponent } from './admin/ql-categories/ql-categories.component';

export const routes: Routes = [
    {
        path: 'products',
        component: ProductsComponent 
    },
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'admin',
        component: DashboardComponent
    },
    {
        path: 'ql-products',
        component: QlProductsComponent
    },
    {
        path: 'ql-categories',
        component: QlCategoriesComponent
    }

];
