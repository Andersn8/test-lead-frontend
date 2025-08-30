import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of, throwError, BehaviorSubject } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userUrl = 'http://localhost:3000/User';

  // BehaviorSubject pour notifier les changements d'état de connexion
  private currentUserSubject = new BehaviorSubject<any>(null);
  public currentUser$ = this.currentUserSubject.asObservable();

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    // Initialiser avec l'utilisateur stocké s'il existe
    if (isPlatformBrowser(this.platformId)) {
      const storedUser = localStorage.getItem('currentUser');
      if (storedUser) {
        this.currentUserSubject.next(JSON.parse(storedUser));
      }
    }
  }

  login(credentials: { username: string; password: string }): Observable<any> {
    let params = new HttpParams()
      .set('username', credentials.username)
      .set('password', credentials.password);

    return this.http.get<any[]>(this.userUrl, { params }).pipe(
      map((users) => {
        if (users.length > 0) {
          const user = users[0];

          // Stocker l'utilisateur
          if (isPlatformBrowser(this.platformId)) {
            localStorage.setItem('currentUser', JSON.stringify(user));
          }

          // Notifier les composants du changement
          this.currentUserSubject.next(user);

          return user;
        } else {
          throw new Error("Nom d'utilisateur ou mot de passe incorrect.");
        }
      }),
      catchError((error) => {
        console.error('Erreur de connexion:', error);
        return throwError(
          () => new Error("Nom d'utilisateur ou mot de passe incorrect.")
        );
      })
    );
  }

  logout(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('currentUser');
    }
    // Notifier la déconnexion
    this.currentUserSubject.next(null);
  }

  isLoggedIn(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      return !!localStorage.getItem('currentUser');
    }
    return false;
  }

  getCurrentUser(): Observable<any> {
    if (isPlatformBrowser(this.platformId) && this.isLoggedIn()) {
      const user = localStorage.getItem('currentUser');
      const parsedUser = user ? JSON.parse(user) : null;
      return of(parsedUser);
    }
    return of(null);
  }

  // Méthode pour obtenir l'utilisateur actuel de façon synchrone
  getCurrentUserSync(): any {
    if (isPlatformBrowser(this.platformId)) {
      const user = localStorage.getItem('currentUser');
      return user ? JSON.parse(user) : null;
    }
    return null;
  }
}
