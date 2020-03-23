import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {SharedModule} from './shared/shared.module';
import {RouterModule, RouterOutlet, Routes} from '@angular/router';
import {ProfessionalsComponent} from './professionals/professionals.component';
import {AdminLoginComponent} from './professionals/admin-login/admin-login.component';
import {AddUpdateProfessionalComponent} from './professionals/add-update-professional/add-update-professional.component';
import {BrowserModule} from '@angular/platform-browser';
import {ErrorsComponent} from './errors/errors.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {ExtendedModule, FlexModule} from '@angular/flex-layout';
import {MatDialogModule} from '@angular/material/dialog';

const routes: Routes = [
  {
    path: '',
    component: ProfessionalsComponent
  }, {
    path: 'login',
    component: AdminLoginComponent
  }, {
    path: 'admin',
    component: ProfessionalsComponent,
  },
  {
    path: 'admin/add',
    component: AddUpdateProfessionalComponent
  }, {
    path: 'admin/update/:id',
    component: AddUpdateProfessionalComponent
  },
  {
    path: '**',
    component: ErrorsComponent
  }];

@NgModule({
  declarations: [
    AppComponent,
    ProfessionalsComponent,
    AddUpdateProfessionalComponent,
    AdminLoginComponent,
    ErrorsComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    SharedModule.forRoot(),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatButtonModule,
    MatMenuModule,
    MatPaginatorModule,
    MatCardModule,
    MatIconModule,
    MatSelectModule,
    FlexModule,
    ExtendedModule,
    MatDialogModule
  ],
  providers: [],
  entryComponents: [AddUpdateProfessionalComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
