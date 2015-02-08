(function(username) {
  window.open("https://webchat.freenode.net/?channels=meh.com&nick="+ (username || $(".authenticated").attr("title")), "_blank")
})(null);
