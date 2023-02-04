import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ConfirmDirective } from './attribute.directives/confirm.directive';
import { CounterComponent } from './components/counter/counter.component';
import { HighlightDirective } from './attribute.directives/highlight.directive';
import { NoOpenDirective } from './attribute.directives/noopen.directive';
import { UserProfileComponent } from './components/userprofile/userprofile.component';
import { ModelDirective } from './attribute.directives/model.directive';
import { FormsModule } from '@angular/forms';
import { SetClassesDirective } from './attribute.directives/setclasses.directive';
import { ForceLowerDirective } from './attribute.directives/forcelower.directive';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { CardComponent } from './components/card/card.component';
import { IfDirective } from './structure.directives/if.directive';
import { LoopDirective } from './structure.directives/loop.directive';
import { RepeatDirective } from './structure.directives/repeat.directive';
import { DeclarationComponent } from './components/declaration/declaration.component';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    NoOpenDirective,
    ConfirmDirective,
    UserProfileComponent,
    CounterComponent,
    ModelDirective,
    SetClassesDirective,
    ForceLowerDirective,
    NewsletterComponent,
    CardComponent,
    IfDirective,
    LoopDirective,
    RepeatDirective,
    DeclarationComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
