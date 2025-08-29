import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  login(credentials: any): Observable<any> {
    // Crée des paramètres de requête pour rechercher l'utilisateur
    let params = new HttpParams()
      .set('username', credentials.username)
      .set('password', credentials.password);

    return this.http.get<any[]>(this.userUrl, { params }).pipe(
      map((users) => {
        if (users.length > 0) {
          // Utilisateur trouvé
          const user = users[0];
          localStorage.setItem('currentUser', JSON.stringify(user));
          return user; // Retourne l'utilisateur
        } else {
          // Aucun utilisateur trouvé, retourne une erreur
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
    // Supprime l'élément 'currentUser' du localStorage
    localStorage.removeItem('currentUser');
  }
  // Permet de vérifier si l'utilisateur est connecté
  isLoggedIn(): boolean {
    return !!localStorage.getItem('currentUser');
  }

  // Récupérer l'utilisateur connecté
  getCurrentUser(): any {
    if (this.isLoggedIn()) {
      const user = localStorage.getItem('currentUser');
      return user ? JSON.parse(user) : null;
    }
  }
}
