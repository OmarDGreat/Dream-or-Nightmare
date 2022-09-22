async function newDreamHandler(event){
    event.preventDefault();
    
    const title = document.querySelector('input[name="dream-title"]').value;
    const dream_story=document.getElementById('written-down-dream').value;
    
    const response = await fetch('/api/dreams',{
        method: 'POST',
        body: JSON.stringify({
            title,
            dream_story
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if(response.ok){
        document.location.reload();
        alert('it worked');
    } else {
        alert(response.statusText);
    }
};
// find the record for dream id (findbyPK), add one to upvote/downvote, then save.
document.querySelector('#post-dream-form').addEventListener('submit', newDreamHandler);












document.querySelector('#post-dream-form').addEventListener('submit', newDreamHandler);
