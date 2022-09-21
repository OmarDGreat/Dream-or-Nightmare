async function newDreamHandler(event){
    event.preventDefault();
    
    const title = document.querySelector('input[name="dream-title"]').value;
    const dreamPost=document.querySelector('textarea[name="dream-story"]').value;

    const response = await fetch('api/dream_story',{
        method: 'POST',
        body: JSON.stringify({
            title,
            dreamPost
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    
    if(response.ok){
        document.location.reload();
    } else {
        alert(response.statusText);
    }
};

// find the record for dream id (findbyPK), add one to upvote/downvote, then save. 

documnet.querySelector('#post-dream-form').addEventListener('submit', newDreamHandler);