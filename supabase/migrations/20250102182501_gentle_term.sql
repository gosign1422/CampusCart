/*
  # Add estimated delivery date column

  1. Changes
    - Add estimated_delivery_date column to campus_cart table
    - Set default value using a function that adds 9 days to the current timestamp
*/

ALTER TABLE campus_cart 
ADD COLUMN estimated_delivery_date timestamptz 
DEFAULT (now() AT TIME ZONE 'Asia/Kolkata' + INTERVAL '9 days');

-- Update existing rows to have an estimated delivery date
UPDATE campus_cart 
SET estimated_delivery_date = created_at + INTERVAL '9 days'
WHERE estimated_delivery_date IS NULL;