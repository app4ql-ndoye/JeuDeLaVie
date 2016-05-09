window.onload = function() {
  var canvas = document.getElementById('can');
  var context = canvas.getContext('2d');
  var a = [];
  var taille = 10;
  var nb= 1000;

  setInterval(anime, nb);
 
  function anime() {
      context.fillStyle = "green";
      context.clearRect(0, 0, canvas.width, canvas.height);
      for (i=0; i<taille; i++) {
          for (j=0; j<taille; j++) {
              if (Math.random() > 0.9) {
                  a[i*taille+j] = 1;
                  context.fillStyle = "green";
              } else {
                  a[i*taille+j] = 0;
                  context.fillStyle = "red";
              }
              context.fillRect(taille*i, taille*j, taille, taille);
          }
      }
  }
}
