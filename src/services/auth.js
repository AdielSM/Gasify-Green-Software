import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient('https://mjkuievufreefjwnvuos.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1qa3VpZXZ1ZnJlZWZqd252dW9zIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkyOTM1OTcsImV4cCI6MjAxNDg2OTU5N30.UAtt6lqV2C3oon0ZbplZEBN9Lp0asxrhMhNi79T1_fk')

export default supabase.auth;