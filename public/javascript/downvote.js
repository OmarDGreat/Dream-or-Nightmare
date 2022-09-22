async function downvote() {
    const response = await fetch('/', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' }
    });
  
    if (response.ok) {
      alert('You have downvoted this dream!');
    } 
    else {
        alert(response.statusText);
        }
  }
  
  document.querySelector('#downvote').addEventListener('click', downvote);
  