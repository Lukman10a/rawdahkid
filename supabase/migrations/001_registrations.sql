-- 001_registrations.sql - registrations table (registrations only, payments later)
create extension if not exists "pgcrypto";

create table if not exists registrations (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  full_name text not null,
  phone_e164 text not null,
  city text,
  country_code text,
  child_name text not null,
  child_age int not null check (child_age between 5 and 18),
  programme_interest text not null,
  class_format text not null,
  selected_courses jsonb default '[]'::jsonb,
  additional_info text,
  plan_id text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create index if not exists idx_registrations_email on registrations (email);
create index if not exists idx_registrations_created_at on registrations (created_at desc);

alter table registrations enable row level security;

-- No anon policies: service_role bypasses RLS. Add later for admin dashboard.
-- Example (uncomment when needed):
-- create policy "service can do all" on registrations for all using (true) with check (true);

create or replace function set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists trg_registrations_updated_at on registrations;
create trigger trg_registrations_updated_at
  before update on registrations
  for each row execute function set_updated_at();
