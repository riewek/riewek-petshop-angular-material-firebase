import { Component, signal } from '@angular/core';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  form: FormGroup;
  loading = signal(false);
  errorMessage = signal('');
  successMessage = signal('');

  constructor(private fb: FormBuilder, private auth: Auth, private router: Router) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  //FIXME: remove code from production
  loginAsTestUser(email: string, password: string) {
    this.form.patchValue({
      email: email,
      password: password,
    });
    this.login();
  }

  async login() {
    if (this.form.invalid) return;
    this.loading.set(true);
    this.errorMessage.set('');
    this.successMessage.set('');
    const { email, password } = this.form.value;
    try {
      const userCredential = await signInWithEmailAndPassword(this.auth, email, password);
      const user = userCredential.user;
      this.router.navigate(['/dashboard']);
      //this.successMessage.set(`Login erfolgreich! Willkommen, ${user.email}`);
    } catch (error: any) {
      this.errorMessage.set(this.mapFirebaseError(error.code));
    } finally {
      this.loading.set(false);
    }
  }

  private mapFirebaseError(code: string): string {
    switch (code) {
      case 'auth/invalid-email':
        return 'Ungültige E-Mail-Adresse.';
      case 'auth/user-disabled':
        return 'Dieser Benutzer wurde deaktiviert.';
      case 'auth/user-not-found':
        return 'Benutzer nicht gefunden.';
      case 'auth/wrong-password':
        return 'Falsches Passwort.';
      default:
        return 'Unbekannter Fehler. Bitte erneut versuchen. ' + code;
    }
  }
}
