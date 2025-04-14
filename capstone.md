---
layout: default
---

# CS-499 Capstone

## Week Two
Credenza OpenGL Code Review

<a href="https://youtu.be/4-teGXIMeoE" target="_blank">
  <img src="https://imgur.com/QzFq6PU.png" alt="Play Video"
       style="border: 2px solid #9ddcff; border-radius: 10px; width: 100%; max-width: 500px; box-shadow: 0 4px 8px rgba(0,0,0,1);">
</a>

## Week Three
Enhancement One (ImGUI and Mesh Editor)

<a href="#" onclick="openModal('imgui-narrative')">View Full Narrative →</a>

<div id="imgui-narrative" class="modal">
  <div class="modal-content">
    <span onclick="closeModal('imgui-narrative')" class="close">&times;</span>
    <p>Full narrative content goes here…</p>
  </div>
</div>

<video class ="hover-zoom" autoplay loop muted playsinline
  style="border: 2px solid #9ddcff; border-radius: 10px; width: 100%; max-width: 500px; box-shadow: 0 4px 8px rgba(0,0,0,1);">
  <source src="videos/Enhancement One Web.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

## Week Four
Enhancement Two (Assimp .obj Model Loader)

<video class ="hover-zoom" autoplay loop muted playsinline
  style="border: 2px solid #9ddcff; border-radius: 10px; width: 100%; max-width: 500px; box-shadow: 0 4px 8px rgba(0,0,0,1);">
  <source src="videos/Enhancement Two Loop Web.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

## Week Five
Enhancement Three (Saving and Loading JSON Scenes)

<video class ="hover-zoom" autoplay loop muted playsinline
  style="border: 2px solid #9ddcff; border-radius: 10px; width: 100%; max-width: 500px; box-shadow: 0 4px 8px rgba(0,0,0,1);">
  <source src="videos/Enhancement Three.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

<style>
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
  z-index: 10;
}

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
</style>

<script>
function openModal(id) {
  document.getElementById(id).style.display = 'block';
}
function closeModal(id) {
  document.getElementById(id).style.display = 'none';
}
</script>
