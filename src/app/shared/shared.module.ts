import {ModuleWithProviders, NgModule} from '@angular/core';
import {ProfessionalsService} from './http/professionals.service';
import {LoginService} from './http/login.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        ProfessionalsService,
        LoginService
      ]
    };
  }
}
