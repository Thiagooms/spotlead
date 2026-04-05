alter table public.profiles
  add column if not exists service text,
  add column if not exists city text,
  add column if not exists onboarding_completed_at timestamptz;
