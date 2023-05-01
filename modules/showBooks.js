export const showBooks = (arrayOfBooks) => {
  const container = document.getElementById('container');
  container.innerHTML = '';

  arrayOfBooks.forEach((book, index) => {
    container.innerHTML += `
        <tr class="">                            
        <td>
            <h5 class="" > Libro : "${book.title}" by "${book.author}"</h5>
        </td>
        <td>
            <button type="button" class="btn btn-primary delete" data-id= ${index} >Delete</button>
        </td>
    </tr>   
        `;
  });
};

export default showBooks;