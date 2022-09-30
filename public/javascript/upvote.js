async function upvote() {
    const response = await fetch('/', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' }
    });
  
    if (response.ok) {
      alert('You have upvoted this dream!');
    } 
    else {
        alert(response.statusText);
        }
}
  
  document.querySelector('#upvote').addEventListener('click', upvote);
  