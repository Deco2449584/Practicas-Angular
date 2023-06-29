import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ImagenComponent } from './components/imagen/imagen.component';
import { ProductComponent } from './components/product/product.component';

@NgModule({
  declarations: [AppComponent, ImagenComponent, ProductComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
