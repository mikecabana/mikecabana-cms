import * as migration_20250114_032952_initial from './20250114_032952_initial';
import * as migration_20250126_030758_posts_rename_body_to_content from './20250126_030758_posts_rename_body_to_content';
import * as migration_20250128_043056_adds_guests from './20250128_043056_adds_guests';

export const migrations = [
  {
    up: migration_20250114_032952_initial.up,
    down: migration_20250114_032952_initial.down,
    name: '20250114_032952_initial',
  },
  {
    up: migration_20250126_030758_posts_rename_body_to_content.up,
    down: migration_20250126_030758_posts_rename_body_to_content.down,
    name: '20250126_030758_posts_rename_body_to_content',
  },
  {
    up: migration_20250128_043056_adds_guests.up,
    down: migration_20250128_043056_adds_guests.down,
    name: '20250128_043056_adds_guests'
  },
];
