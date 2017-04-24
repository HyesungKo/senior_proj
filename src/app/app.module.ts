import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

// Import pages
import { HomePage } from '../pages/home/home';
import { EventCreatePage } from '../pages/event-create/event-create';
import { EventDetailPage } from '../pages/event-detail/event-detail';
import { EventListPage } from '../pages/event-list/event-list';
import { LoginPage } from '../pages/login/login';
import { ProfilePage } from '../pages/profile/profile';
import { ResetPasswordPage } from '../pages/reset-password/reset-password';
import { SignupPage } from '../pages/signup/signup';
import { TabsPage } from '../pages/tabs/tabs';
import { UserProfilePage } from '../pages/user-profile/user-profile';
import { BoutiqueRequestPage } from '../pages/boutique-request/boutique-request';


// Import providers
import { AuthData } from '../providers/auth-data';
import { EventData } from '../providers/event-data';
import { ProfileData } from '../providers/profile-data';

// Import Plugin providers.
import { Camera } from '@ionic-native/camera';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { EmailComposer } from '@ionic-native/email-composer';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    EventCreatePage,
    EventDetailPage,
    EventListPage,
    LoginPage,
    ProfilePage,
    ResetPasswordPage,
    SignupPage,
    TabsPage,
    UserProfilePage,
    BoutiqueRequestPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    EventCreatePage,
    EventDetailPage,
    EventListPage,
    LoginPage,
    ProfilePage,
    ResetPasswordPage,
    SignupPage,
    TabsPage,
    UserProfilePage,
    BoutiqueRequestPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthData,
    EventData,
    ProfileData,
    Camera,
    SplashScreen,
    StatusBar,
    EmailComposer
  ]
})
export class AppModule {}
