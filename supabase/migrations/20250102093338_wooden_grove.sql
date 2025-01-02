/*
  # Create Campus Cart table
  
  1. New Table
    - `campus_cart`
      - `id` (uuid, primary key)
      - `name` (text)
      - `phone` (text) 
      - `email` (text)
      - `total_amount` (numeric)
      - `cart_items` (jsonb)
      - `created_at` (timestamptz, IST timezone)
*/

CREATE TABLE campus_cart (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  email text NOT NULL,
  total_amount numeric NOT NULL,
  cart_items jsonb NOT NULL,
  created_at timestamptz DEFAULT (now() AT TIME ZONE 'Asia/Kolkata')
);

-- Enable RLS
ALTER TABLE campus_cart ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Enable insert access for all users" ON campus_cart
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Enable read access for all users" ON campus_cart
    FOR SELECT USING (true);