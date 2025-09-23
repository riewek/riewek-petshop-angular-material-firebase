import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age',
  standalone: true,
})
export class AgePipe implements PipeTransform {
  transform(birthDate: Date | string | null): number | string {
    if (!birthDate) return 'N/A';

    const birth = new Date(birthDate);
    const today = new Date();

    let age = today.getFullYear() - birth.getFullYear();
    const hasHadBirthdayThisYear =
      today.getMonth() > birth.getMonth() ||
      (today.getMonth() === birth.getMonth() && today.getDate() >= birth.getDate());

    if (!hasHadBirthdayThisYear) {
      age--;
    }

    return age;
  }
}
