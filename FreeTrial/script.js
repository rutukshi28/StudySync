const limits = {
    aiUses: 5,
    notesUses: 3,
    quizUses: 2
  };
  
  function useFeature(id) {
    if (limits[id] > 0) {
      limits[id]--;
      document.getElementById(id).textContent = limits[id];
      alert(`You used one! Remaining: ${limits[id]}`);
    } else {
      alert("Limit reached for today. Upgrade to Pro!");
    }
  }
  

  // video for free trial
  function playVideo(url) {
    document.getElementById("videoFrame").src = url;
    document.getElementById("videoModal").classList.remove("hidden");
  }
  
  function closeVideo() {
    document.getElementById("videoModal").classList.add("hidden");
    document.getElementById("videoFrame").src = ""; // stop video
  }
  
