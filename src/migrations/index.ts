import * as migration_20250114_032952_initial from './20250114_032952_initial';

export const migrations = [
  {
    up: migration_20250114_032952_initial.up,
    down: migration_20250114_032952_initial.down,
    name: '20250114_032952_initial'
  },
];
