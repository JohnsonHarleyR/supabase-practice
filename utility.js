import { createClient } from 'https://cdn.skypack.dev/@supabase/supabase-js@2.7.1';

async function getBooks() {
    const supabaseUrl = 'https://zgnjoaxrlptqqpuzxalt.supabase.co';
    const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpnbmpvYXhybHB0cXFwdXp4YWx0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE4MzA5NzEsImV4cCI6MjA1NzQwNjk3MX0.ceRJK_3vLyxy4howLY6oA7BxhdiH8XcGcvNWuDRumRc';
    const supabase = createClient(supabaseUrl, supabaseKey);

    let { data: books, error } = await supabase
    .from('books')
    .select('*')

    let tableBody = document.getElementById('book-rows');
    for (let book of books) {
        tableBody.innerHTML += `<tr>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
        </tr>`;
    }
}

getBooks();