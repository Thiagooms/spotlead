alter table public.profiles
  add column if not exists trial_ends_at timestamptz;

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, plan, trial_ends_at)
  values (new.id, 'free', now() + interval '7 days')
  on conflict (id) do nothing;
  return new;
end;
$$;
