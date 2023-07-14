import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://dmmnjpaetedansqzebob.supabase.co'
const supabaseKey = 'APIKEY'
const supabase = createClient(supabaseUrl, supabaseKey)

async function insertProduct(name, description, price) {
  const { data, error } = await supabase
    .from('products')
    .insert([
      { name, description, price, quantity: 0 }
    ])
  if (error) console.error(error)
  else console.log('Inserted product:', data)
}

async function updateProduct(id, quantity) {
  const { data, error } = await supabase
    .from('products')
    .update({ quantity })
    .eq('id', id)
  if (error) console.error(error)
  else console.log('Updated product:', data)
}

async function deleteProduct(id) {
  const { data, error } = await supabase
    .from('products')
    .delete()
    .eq('id', id)
  if (error) console.error(error)
  else console.log('Deleted product:', data)
}

async function fetchProducts() {
  const { data, error } = await supabase
    .from('products')
    .select('*')
  if (error) console.error(error)
  else console.log('Fetched products:', data)
}

// Use the functions
insertProduct('Test Product', 'This is a test product.', 9.99)
updateProduct(1, 10)
deleteProduct(1)
fetchProducts()
