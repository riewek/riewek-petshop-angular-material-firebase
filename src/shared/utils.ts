import en from '../../public/i18n/en.json';

export function getValue(path: string): any {
  // Beispiel: path = 'model.adoptionApplication.status'
  const keys = path.split('.');
  let current: any = en;
  for (const key of keys) {
    current = current?.[key];
    if (current === undefined) return undefined;
  }
  return current;
}

export function getIcon(path: string, value: string): string {
  // Path kann z. B. 'model.adoptionApplication.status' sein
  const keys = path.split('.');
  let current: any = en;
  for (const key of keys) {
    current = current?.[key];
    if (!current) return en.app?.default_icon ?? 'help_outline';
  }

  // z. B. "approved_icon"
  const iconKey = `${value}_icon`;

  return current[iconKey] ?? en.app?.default_icon ?? 'help_outline';
}

export function dateEn(date: Date): string {
  const day = String(date.getDate()).padStart(2, '0'); // Tag mit führender Null
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Monat mit führender Null
  const year = date.getFullYear();
  return `${month}/${day}/${year}`;
}

export function dateDe(date: Date): string {
  const day = String(date.getDate()).padStart(2, '0'); // Tag mit führender Null
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Monat mit führender Null
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
}
