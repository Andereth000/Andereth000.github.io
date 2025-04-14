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
    <h2>Enhancement One: ImGui and Mesh Editor</h2>
    <p><strong>Artifact:</strong> This enhancement is based on an OpenGL rendering engine I created for CS-330. The original project modeled a 3D scene with primitive shapes and used the Blinn-Phong lighting model with interactive camera controls.</p>

    <p><strong>Why this artifact?</strong> I chose it because it highlights my graphics programming skills and my passion for rendering techniques and game engine design. I integrated ImGui into the engine to enable real-time mesh manipulation, adding support for transforming, coloring, and scaling shapes—and even adding new ones dynamically.</p>

    <p><strong>Course Outcomes Met:</strong></p>
    <ul>
      <li><em>Professional communication:</em> The UI design demonstrates clear and effective interface communication.</li>
      <li><em>Industry tools and techniques:</em> ImGui integration shows use of industry-standard tools for interactive graphics editing.</li>
      <li><em>Support collaboration and accessibility:</em> A user-friendly UI enables easier scene editing, even for non-programmers.</li>
    </ul>

    <p><strong>What I Learned:</strong> Refactoring my scene management and creating the following structure taught me how to store and update data for each mesh.</p>

    <pre><code>struct MESH_OBJECT {
  std::string tag;
  glm::vec3 rotation;
  glm::vec3 position;
  glm::vec3 scale;
  std::string materialTag;
  std::string textureTag;
  glm::vec2 uvScale;
  glm::vec4 shaderColor;
  std::function&lt;void()&gt; drawFunction;
};</code></pre>

    <p>Rendering now loops over all meshes and applies unique properties before drawing:</p>

    <pre><code>void SceneManager::RenderMeshes() {
  for (const auto&amp; mesh : m_meshes) {
    SetTransformations(mesh.scale, mesh.rotation.x, mesh.rotation.y, mesh.rotation.z, mesh.position);
    SetShaderMaterial(mesh.materialTag);
    SetShaderTexture(mesh.textureTag);
    SetTextureUVScale(mesh.uvScale.x, mesh.uvScale.y);
    SetShaderColor(mesh.shaderColor.r, mesh.shaderColor.g, mesh.shaderColor.b, mesh.shaderColor.a);
    if (mesh.drawFunction) {
      mesh.drawFunction();
    }
  }
}</code></pre>

    <p>Finally, I used ImGui’s widgets to manipulate these mesh properties live:</p>

    <pre><code>SceneManager::MESH_OBJECT&amp; mesh = g_SceneManager-&gt;GetMesh(curMeshIndex);
ImGui::DragFloat3("Position", &amp;mesh.position.x, 0.1f, -10.0f, 10.0f);</code></pre>

    <p>Overall, this enhancement deepened my understanding of scene architecture, vector-based data management, and the power of immediate mode GUIs like ImGui.</p>
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
