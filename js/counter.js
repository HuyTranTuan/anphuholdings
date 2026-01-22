'use strict';
function counter() {
  // homepage 4
  var h4Counter = document.getElementById('h4-counter');
  var h4TeamMembers = document.getElementById('h4-team-members');
  var h4Clients = document.getElementById('h4-client-reviews');
  var h4Projects = document.getElementById('h4-projects-com');
  var h4WinAward = document.getElementById('h4-win-awards');
  // Counter 4
  var h2Observer = new IntersectionObserver(
    function (entries) {
      for (var _i = 0, entries_2 = entries; _i < entries_2.length; _i++) {
        var entry = entries_2[_i];
        var intersection = entry.isIntersecting;
        if (intersection) {
          setTimeout(function () {
            if (h4TeamMembers && h4Clients && h4Projects && h4WinAward) {
              h4TeamMembers.innerHTML = '2900';
              h4Clients.innerHTML = '23500';
              h4Projects.innerHTML = '500000';
              h4WinAward.innerHTML = '50';
            }
          }, 1000);
        }
      }
    },
    {
      threshold: 1,
    },
  );
  if (h4Counter) {
    h2Observer.observe(h4Counter);
  }
}
