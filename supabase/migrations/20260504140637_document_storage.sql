insert into storage.buckets (id, name, public)
values (
  'document-storage',
  'document-storage',
  true
)
on conflict (id) do update
set public = excluded.public;

create table if not exists documents (
  id uuid primary key default gen_random_uuid(),
  file_name text not null,
  storage_path text not null,
  public_url text not null,
  file_type text,
  file_size bigint,
  memo text,
  uploader text,
  uploaded_at timestamptz default now()
);

alter table documents enable row level security;

drop policy if exists "document public read" on storage.objects;
create policy "document public read"
on storage.objects
for select
to anon, authenticated
using (bucket_id = 'document-storage');

drop policy if exists "document public upload" on storage.objects;
create policy "document public upload"
on storage.objects
for insert
to anon, authenticated
with check (bucket_id = 'document-storage');

drop policy if exists "document public delete" on storage.objects;
create policy "document public delete"
on storage.objects
for delete
to anon, authenticated
using (bucket_id = 'document-storage');

drop policy if exists "documents public read" on documents;
create policy "documents public read"
on documents
for select
to anon, authenticated
using (true);

drop policy if exists "documents public insert" on documents;
create policy "documents public insert"
on documents
for insert
to anon, authenticated
with check (true);

drop policy if exists "documents public delete" on documents;
create policy "documents public delete"
on documents
for delete
to anon, authenticated
using (true);
