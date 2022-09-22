async function newDreamHandler(event){
    event.preventDefault();
    
    const title = document.querySelector('input[name="dream-title"]').value;
    const dreamPost=document.querySelector('textarea[name="dream-story"]').value;
<<<<<<< HEAD:public/javascript/postDream.js

    const response = await fetch('dream_story',{
=======
    
    const response = await fetch('/dream_story',{
>>>>>>> testing-branch:public/javascript/post-dream.js
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
        alert('it worked');
    } else {
        alert(response.statusText);
    }
};
// find the record for dream id (findbyPK), add one to upvote/downvote, then save.
document.querySelector('#post-dream-form').addEventListener('submit', newDreamHandler);












<<<<<<< HEAD:public/javascript/postDream.js
document.querySelector('#post-dream-form').addEventListener('submit', newDreamHandler);
=======
>>>>>>> testing-branch:public/javascript/post-dream.js
