import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { SwalComponent, SweetAlert2Module } from "@sweetalert2/ngx-sweetalert2";
// import { RouterModule, Routes } from "@angular/router";
// const routes: Routes = [
//   {
//     path: "test",
//     component: TestComponent
//   }
// ];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    SweetAlert2Module.forRoot()
    // RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [SwalComponent]
})
export class AppModule {}
