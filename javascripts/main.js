async function renderKing (json, headerid, contentid) {
    if(!json) return;

    const contentElm = document.querySelector(contentid);
	const headerElm = document.querySelector(headerid);

    let strContent = '';
    let strHeader = '';

    strHeader += '<h1 id="project_title">' + json.title + ': ' + json.full_name + ' 😃</h1>';
    strHeader += '<h2 id="project_tagline">- ugens helt i uge '+ json.week +', '+ json.year +'</h2>';
    headerElm.innerHTML = strHeader;

    strContent += '<div id="avatar"><img src="'+ json.avatar_url + '" /></div>';
    strContent += '<div id="votes">';
    strContent += '<h2>Hvad kollegerne siger 👏</h2>';


    Object.entries(json.votes).forEach((entry) => {
        const [key, value] = entry;
        strContent += '<p class="votes">' + value + '</p>';
    });

    strContent += '</div>';

    contentElm.innerHTML = strContent;                
}

