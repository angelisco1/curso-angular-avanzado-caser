import { Component } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { NotificationsService } from './services/notifications.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto-angular-pwa';
  languages: Array<string> = ['en', 'es']
  selectedLanguage: string = 'en'


  constructor(
    private swPush: SwPush,
    private notificationsService: NotificationsService,
    private translateService: TranslateService,
  ) {

    this.translateService.addLangs(this.languages)
    this.selectedLanguage = this.translateService.getDefaultLang()

    // const navigatorLang = window.navigator.language.split('-')[0]
    // this.translateService.use(navigatorLang)
    // this.selectedLanguage = navigatorLang

    swPush.requestSubscription({ serverPublicKey: 'BEmnxA3XV5fkXnwWULehUtOsA5TE-aBMIsL7Ctg2RcKX1Ol5RITVowQvWvenzPTkIRTMfD1xpcortcdhZ9Y5TFU' })
      .then((suscripcion: PushSubscription) => {
        this.notificationsService.saveSuscripcion(suscripcion)
          .subscribe(() => {
            console.log('Suscripción OK.')
          })
      })

  }

  changeLang(event: any) {
    const lang = event.target.value
    this.selectedLanguage = lang as string
    this.translateService.use(lang)
  }


}
