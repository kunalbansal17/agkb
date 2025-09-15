create table if not exists links (
  id uuid primary key default gen_random_uuid(),
  code text not null unique,
  url text not null,
  created_at timestamptz not null default now(),
  created_by text,
  is_active boolean not null default true,
  meta jsonb
);

create table if not exists clicks (
  id bigserial primary key,
  link_id uuid not null references links(id) on delete cascade,
  ts timestamptz not null default now(),
  referrer text,
  ua text,
  ip_hash text,
  country text,
  region text,
  city text,
  device_type text,
  bot boolean not null default false
);

create index if not exists idx_links_code on links (code);
create index if not exists idx_clicks_link_ts on clicks (link_id, ts);
create index if not exists idx_clicks_bot on clicks (bot);
