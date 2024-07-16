import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from "./app.routes";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { UserComponent } from "./user/user.component";
import { UserModalComponent } from "./user-modal/user-modal.component";
import { Router } from "@angular/router";
import { Location } from "@angular/common";
import { MenuComponent } from "./menu/menu.component";
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";



describe("App Routing", () => {
    let router: Router;
    let fix_app : ComponentFixture<WelcomeComponent>;
    let location : Location;
    let fix_menu : ComponentFixture<MenuComponent>;
    let el: DebugElement;

    beforeEach( waitForAsync( () => {

        TestBed.configureTestingModule({
            imports: [RouterTestingModule.withRoutes(routes),AppComponent,LoginComponent,WelcomeComponent,UserComponent,UserModalComponent],

        }).compileComponents();
    
    } ));

    beforeEach( () => {
        router = TestBed.inject(Router);
        location = TestBed.inject(Location);
        router.initialNavigation();
        fix_app = TestBed.createComponent(WelcomeComponent);
        fix_menu = TestBed.createComponent(MenuComponent);

        el = fix_menu.debugElement;
        fix_menu.detectChanges();
    });

    it("should navigate to the default path ", waitForAsync(    () =>{
        fix_app.detectChanges();
        fix_app.whenStable().then(  () => {
            expect(location.path()).toBe('/');
        });
    }));


    it("should navigate to the user path ", waitForAsync(    () =>{
        fix_menu.detectChanges();
        let links = el.queryAll(By.css('a'));
        links[2].nativeElement.click();
        fix_menu.whenStable().then(  () => {
            expect(location.path()).toBe('/user');
        });
    }));

    it("should navigate to the login path ", waitForAsync(    () =>{
        fix_menu.detectChanges();
        let links = el.queryAll(By.css('a'));
        links[3].nativeElement.click();
        fix_menu.whenStable().then(  () => {
            expect(location.path()).toBe('/login');
        });
    }));

    it("should navigate to the welcome path ", waitForAsync(    () =>{
        fix_menu.detectChanges();
        let links = el.queryAll(By.css('a'));
        links[1].nativeElement.click();
        fix_menu.whenStable().then(  () => {
            expect(location.path()).toBe('/welcome/mazen');
        });
    }));

});