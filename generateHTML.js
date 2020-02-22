const colors = {
  red:  {
    background: "#ff3333",
  },
  green:  {
    background: "#33ff33",
  },
  blue:  {
    background: "#3366ff",
  },
  purple:  {
    background: "#9933ff",
  },
  yellow:  {
    background: "#ffff33",
  },
}

function generateHTML(data) { 
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Profile-Generator</title>
    <!--Link to Bootstrap-->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <!--Link to GoogleFonts-->
    <link href="https://fonts.googleapis.com/css?family=GFS+Didot&display=swap" rel="stylesheet">
    
    
    <style>
    .card {
      background: ${colors[data.color].background};
    }
    </style>
</head>
<body>
    <script>
        body 
        {font-family; 'GFS Didot', 
        serif;}</script>
    
    <!--Link to Jumbotron- includes name, bio, links-->
    <div class="jumbotron">
        <h1 class="display-4 text-center">Hello! My name is ${data.name}</h1>
        <div class="d-flex justify-content-center">
          <img src="${data.avatar_url}" alt="profile picture">
        </div>
        <p class="lead text-center"></p>
        <hr class="my-4">
        <p class="text-center">${data.bio}</p>
        <div class="d-flex justify-content-center">
          <a class="btn btn-secondary btn-md" href="https://www.google.com/maps/@?api=1&map_action=map&query=${data.location}" role="button" target="_blank">${data.location}</a>
          <a class="btn btn-secondary btn-md" href="${data.html_url}" role="button" target="_blank">GitHub</a>
          <a class="btn btn-secondary btn-md" href="${data.blog}" role="button" target="_blank">Blog</a>
        </div>
      </div>

    <!--Link to container- includes repositories, followers, stars and following-->  
    <div class="container">
        <div class="row">
          <div class="col-lg-3 d-flex justify-content-center">
            <div class="card text-center" style="width: 18rem; margin-bottom: 5%;">
              <div class="card-body">
                <h5 class="card-title">Public Repositories</h5>
                <p class="card-text">${data.public_repos}</p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 d-flex justify-content-center">
            <div class="card text-center" style="width: 18rem; margin-bottom: 5%;">
              <div class="card-body">
                <h5 class="card-title">Followers</h5>
                <p class="card-text">${data.followers}</p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 d-flex justify-content-center">
            <div class="card text-center" style="width: 18rem; margin-bottom: 5%;">
              <div class="card-body">
                <h5 class="card-title">GitHub Stars</h5>
                <p class="card-text">${data.public_gists}</p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 d-flex justify-content-center">
            <div class="card text-center" style="width: 18rem; margin-bottom: 5%;">
              <div class="card-body">
                <h5 class="card-title">Following</h5>
                <p class="card-text">${data.following}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    
<!--Link to jQuery, Popper and JS-->  
<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>  

</body>
</html>`;
}

module.exports = generateHTML;