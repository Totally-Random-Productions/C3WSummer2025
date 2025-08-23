 var animeList = [
    {id:1281, ytLink:"https://youtu.be/kOi5SpwDQR4?si=GYH5xpybjjUJSGzl"},
    {id:6213, ytLink:"https://youtu.be/dKLdA60lUw4?si=BFuNrGrfSlW2N3DR"},
    {id:38000, ytLink:"https://youtu.be/VQGCKyvzIM4?si=PBtKQOlJvweRlBK4"},
    {id:53065, ytLink:"https://youtu.be/w5p-T47FS8Q?si=oJXGbTEqf-o6OMDu"},
    {id:1918, ytLink:""},
    {id:59845, ytLink:"https://youtu.be/1FcVJxxPWh4?si=20aMWnNndcSCc9Ta"},
    {id:59062, ytLink:"https://youtu.be/yeRvDchyo44?si=EI9DWiHdEt8kjgnf"},
    {id:60285, ytLink:"https://youtu.be/-gmCvxwqcsw?si=jRYSzz1owBB9RSCW"},
    {id:59459, ytLink:"https://youtu.be/0OBF29HoV4A?si=gYZBTOzsrXm9buZe"},
    {id:696, ytLink:""},
    {id:20, ytLink:"https://youtu.be/-G9BqkgZXRA?si=X5q4B5Y8sklP6236"},
    {id:2107, ytLink:""},
    {id:22319, ytLink:""},
    {id:11061, ytLink:""},
    {id:31964, ytLink:""},
    {id:32281, ytLink:""},
    {id:49596, ytLink:""},
    {id:47917, ytLink:""},
    {id:48580, ytLink:""},
    {id:33352, ytLink:""},
    {id:16498, ytLink:""},
    {id:199, ytLink:""},
    {id:46352, ytLink:""},
    {id:185, ytLink:""},
    {id:513, ytLink:""},
    {id:4898, ytLink:""},
    {id:523, ytLink:""},
  ];

 
  var jikanAPIURL   = "https://api.jikan.moe/v4/anime/";
  var cardContainer = document.getElementById("card-container");
  var detailViewEl  = document.getElementById("detail-view");
  var detailContent = document.getElementById("detail-content");
  var backBtn       = document.getElementById("back-btn");
  var searchInput   = document.getElementById("search-input");
  var searchClear   = document.getElementById("search-clear");

  
  var animeCache = {};   
  var allItems   = [];   
  var dataReady  = false;

  
  function truncate(txt, n) {
    if (!txt) return "No synopsis available.";
    if (txt.length > n) { return txt.slice(0, n) + "..."; }
    return txt;
  }

  function addToAllItems(obj) {
    var exists = false;
    for (var i = 0; i < allItems.length; i++) {
      if (allItems[i].id === obj.id) {
        exists = true;
        break;
      }
    }
    if (!exists) { allItems.push(obj); }
  }


  function makeCardTemplate(a, animeID) {
    var synopsisID = "synopsis" + animeID;
    var topID      = "top" + animeID;

    var html = ''
      + '<div class="card" data-id="' + animeID + '"'
      + '     onmouseover="showSynopsis(\'' + synopsisID + '\', \'' + topID + '\')"'
      + '     onmouseleave="hideSynopsis(\'' + synopsisID + '\', \'' + topID + '\')">'
      + '  <img src="' + a.image + '" alt="' + a.title + '">'
      + '  <div class="container">'
      + '    <h4><b>' + a.title + '</b></h4>'
      + '    <div id="' + topID + '" style="display:block;">'
      + '      <p>Status: ' + a.status + ' ' + a.from + ' to ' + a.to + ' • Episodes: ' + a.episodes + '</p>'
      + '    </div>'
      + '    <div id="' + synopsisID + '" style="display:none;">'
      + '      <p>' + truncate(a.synopsis, 200) + '</p>'
      + '    </div>'
      + '  </div>'
      + '</div>';
    return html;
  }

  function makeDetailTemplate(a) {
    var trailerHtml;
    if (a.ytLink && a.ytLink !== "") {
      trailerHtml = '<a class="btn" href="' + a.ytLink + '" target="_blank" rel="noopener">Watch Trailer</a>';
    } else {
      trailerHtml = '<span class="btn btn--disabled">No Trailer</span>';
    }

    var html = ''
      + '<div class="detail-card">'
      + '  <h2>' + a.title + '</h2>'
      + '  <p class="meta">Status: ' + a.status + ' • From: ' + a.from + ' • To: ' + a.to + ' • Episodes: ' + a.episodes + '</p>'
      + '  <img src="' + a.image + '" alt="' + a.title + '">'
      + '  <p class="synopsis">' + (a.synopsis ? a.synopsis : 'No synopsis available.') + '</p>'
      + '  <div style="margin-top:10px;">' + trailerHtml + '</div>'
      + '</div>';
    return html;
  }

  // repaint cards from an array (used by search)
  function renderCards(data) {
    cardContainer.innerHTML = "";
    data.map(function(a) {
      var cardHTML = makeCardTemplate(a, a.id);
      var wrap = document.createElement("div");
      wrap.innerHTML = cardHTML;
      cardContainer.appendChild(wrap.firstElementChild);
    });
  }

 
  async function getAnimeData(animeID, ytLink) {
    var response = await fetch(jikanAPIURL + animeID);
    if (response.status != 200) {
      console.log("Error fetching anime ID:", animeID, "status:", response.status);
      return;
    }

    var json = await response.json();
    var anime = json.data;

  
    var title = anime.title_english;
    if (title == null) { title = anime.title; }
    if (title == null) { title = "Untitled"; }

    var image = "";
    if (anime.images) {
      if (anime.images.jpg) {
        if (anime.images.jpg.large_image_url) {
          image = anime.images.jpg.large_image_url;
        } else if (anime.images.jpg.image_url) {
          image = anime.images.jpg.image_url;
        }
      }
    }

    var status = anime.status;
    if (status == null) { status = "Unknown"; }

    var from = "N/A";
    if (anime.aired) {
      if (anime.aired.from) { from = anime.aired.from; }
    }

    var to = "Ongoing";
    if (anime.aired) {
      if (anime.aired.to) { to = anime.aired.to; }
    }

    var episodes = "?";
    if (anime.episodes != null) { episodes = anime.episodes; }

    var synopsis = "No synopsis available.";
    if (anime.synopsis) { synopsis = anime.synopsis; }

    // store for details + search
    var obj = {
      id: animeID,
      title: title,
      image: image,
      status: status,
      from: from,
      to: to,
      episodes: episodes,
      synopsis: synopsis,
      ytLink: ytLink
    };
    animeCache[animeID] = obj;
    addToAllItems(obj);

    // append card now
    var cardHTML = makeCardTemplate(obj, animeID);
    var wrap = document.createElement("div");
    wrap.innerHTML = cardHTML;
    cardContainer.appendChild(wrap.firstElementChild);
  }

  
  async function loadAll() {
    for (var i = 0; i < animeList.length; i++) {
      var item = animeList[i];
      await getAnimeData(item.id, item.ytLink);
      await new Promise(function(resolve){ setTimeout(resolve, 120); });
    }
    dataReady = true;          // allow search now
    renderCards(allItems);     
  }
  loadAll();

  // ===== Card click to see details =====
  cardContainer.addEventListener("click", function (e) {
    var node = e.target;
    while (node && node !== cardContainer && !(node.classList && node.classList.contains("card"))) {
      node = node.parentNode;
    }
    if (!node || node === cardContainer) return;

    var id = node.getAttribute("data-id");
    var a = animeCache[id];
    if (!a) return;

    detailContent.innerHTML = makeDetailTemplate(a);
    cardContainer.style.display = "none";
    detailViewEl.style.display = "block";
    window.scrollTo(0, 0);
  });

  // Back button to list
  backBtn.addEventListener("click", function(){
    detailViewEl.style.display = "none";
    cardContainer.style.display = "grid";
  });

  // ===== SEARCH (filter + map on already-loaded items) =====
  searchInput.addEventListener("input", function (e) {
    if (!dataReady) return;           
    var value = e.target.value;
    if (!value) {
      renderCards(allItems);
      return;
    }

    var q = value.toLowerCase();
    var filtered = allItems.filter(function (a) {
      var t = a.title;
      if (!t) t = "";
      t = t.toLowerCase();

      var s = a.synopsis;
      if (!s) s = "";
      s = s.toLowerCase();

      if (t.indexOf(q) !== -1) return true;
      if (s.indexOf(q) !== -1) return true;
      return false;
    });

    renderCards(filtered);
  });

  // Clear search
  searchClear.addEventListener("click", function () {
    if (!dataReady) return;
    searchInput.value = "";
    renderCards(allItems);
  });

  
  function showSynopsis(sid, tid) {
    var s = document.getElementById(sid);
    var t = document.getElementById(tid);
    if (s) s.style.display = "block";
    if (t) t.style.display = "none";
  }
  function hideSynopsis(sid, tid) {
    var s = document.getElementById(sid);
    var t = document.getElementById(tid);
    if (s) s.style.display = "none";
    if (t) t.style.display = "block";
  }
