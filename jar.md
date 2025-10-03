---
layout: default
---

<a href="/index.html" class="btn btn-back">⬅️ Go Back</a>

# [JAR]

## [JAR] - Teaser Trailer
Submission for Hawktober Horrors 2025 Game Jam

<a href="https://www.youtube.com/watch?v=hcGIEMXbxlU" target="_blank">
  <img src="https://i.imgur.com/hymeqQ9.png" alt="Play Video"
       style="border: 2px solid #9ddcff; border-radius: 10px; width: 100%; max-width: 500px; box-shadow: 0 4px 8px rgba(0,0,0,1);">
</a>

---

<style>
/*
.hover-zoom {
  transition: transform 0.3s ease;
  cursor: zoom-in;
}

@media (hover: hover) and (pointer: fine) {
  .hover-zoom {
    cursor: zoom-in;
  }

.hover-zoom:hover {
  transform: scale(2.5);
  transform-origin: center center;
  z-index: 10;
}
*/
.modal {
  display: none;
  position: fixed;
  z-index: 99;
  left: 0; top: 0; width: 100%; height: 100%;
  background-color: rgba(0,0,0,0.8);
  overflow: auto;
}
.modal-content {
  background-color: #111;
  margin: 10% auto;
  padding: 2rem;
  border-radius: 10px;
  width: 80%;
  color: #fff;
}
.close {
  float: right;
  font-size: 1.5rem;
  cursor: pointer;
}

.btn {
  display: inline-block;
  padding: 10px 18px;
  background-color: #9ddcff;
  color: #111;
  font-weight: 600;
  text-decoration: none;
  border-radius: 6px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.15);
  transition: background-color 0.3s ease, transform 0.2s ease;
  margin: 20px 0;
}

.btn:hover {
  background-color: #6bcaff;
  transform: translateY(-2px);
}

.btn-back {
  margin-bottom: 40px;
}

.btn-narrative {
  margin-top: 10px;
}

.btn-repo {
  margin-top: 10px;
}
</style>

<script>
function openModal(id) {
  document.getElementById(id).style.display = 'block';
}
function closeModal(id) {
  document.getElementById(id).style.display = 'none';
}
</script>
