# Intooda

## TECH STACK

- Nuxt3
- Nuxt Content
- Tailwind CSS
- Vue 3
- Supabase

## SETUP

### Environment Variables

1. Copy `.env.example` to `.env`
2. Fill in your Supabase credentials:
   - `SUPABASE_URL`: Your Supabase project URL
   - `SUPABASE_ANON_KEY`: Your Supabase anonymous key
   - `SUPABASE_SERVICE_ROLE_KEY`: Your Supabase service role key

### Supabase Setup

1. Create a new Supabase project
2. Run the migration in `supabase/migrations/create_contacts_table.sql` in your Supabase SQL editor
3. Copy your project URL and keys to the `.env` file

### Deployment (Netlify)

When deploying to Netlify, add these environment variables in your Netlify dashboard:
- `SUPABASE_URL`
- `SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`

## ROADMAP

- ✅ Create header and footer components
- ✅ Create genie component
- ✅ Create home page
- ✅ Create about page
- ✅ Create contact page
- ✅ Integrate Supabase for contact form storage