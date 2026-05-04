insert into storage.buckets (id, name, public)
values (
  'file-storage',
  'file-storage',
  true
)
on conflict (id) do update
set public = excluded.public;

create table if not exists file_storage_items (
  id uuid primary key default gen_random_uuid(),
  file_name text not null,
  storage_path text not null,
  public_url text not null,
  file_type text,
  file_size bigint,
  uploader text,
  uploaded_at timestamptz default now()
);

alter table file_storage_items enable row level security;

drop policy if exists "file_storage_items public read" on file_storage_items;
create policy "file_storage_items public read"
on file_storage_items
for select
to anon, authenticated
using (true);

drop policy if exists "file_storage_items public insert" on file_storage_items;
create policy "file_storage_items public insert"
on file_storage_items
for insert
to anon, authenticated
with check (true);

drop policy if exists "file_storage_items public delete" on file_storage_items;
create policy "file_storage_items public delete"
on file_storage_items
for delete
to anon, authenticated
using (true);

drop policy if exists "file-storage public read" on storage.objects;
create policy "file-storage public read"
on storage.objects
for select
to anon, authenticated
using (bucket_id = 'file-storage');

drop policy if exists "file-storage public upload" on storage.objects;
create policy "file-storage public upload"
on storage.objects
for insert
to anon, authenticated
with check (bucket_id = 'file-storage');

drop policy if exists "file-storage public delete" on storage.objects;
create policy "file-storage public delete"
on storage.objects
for delete
to anon, authenticated
using (bucket_id = 'file-storage');
