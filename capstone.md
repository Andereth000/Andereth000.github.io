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
    <h2>Enhancement One: Software Engineering and Design</h2>
    <p><strong>Ethan Anderson<br>CS-499: Computer Science Capstone<br>Prof. Alim<br>March 18, 2025</strong></p>

    <p><strong>Briefly describe the artifact. What is it? When was it created?</strong></p>
    <p>The artifact for the first enhancement in software engineering and design is from CS-330: Computer Graphics and Visualization. This artifact is an OpenGL-based rendering engine, and the goal of the original project was to take a reference image of a scene and model the scene in 3D using primitive shapes. This project also includes a Blinn-Phong lighting model, and interactive camera controls. The final submission for CS-330 was completed on April 14, 2024.</p>

    <p><strong>Justify the inclusion of the artifact in your ePortfolio. Why did you select this item? What specific components of the artifact showcase your skills and abilities in software development? How was the artifact improved?</strong></p>
    <p>I chose this artifact for my ePortfolio because it highlights my skills in graphics programming and implementing industry standard software solutions. Furthermore, I am passionate about learning new graphics and rendering techniques, as well as foundational concepts of modern game engines.</p>
    <p>The first improvement to this artifact involved adding an ImGui graphical user interface to make real-time transformations and modifications to primitive meshes in the OpenGL scene. Initially, my goal was to allow users to transform objects already loaded in the scene, but I further refined this enhancement by allowing users to add any of the ten primitive shapes to the scene, adjust their transformations, shader color (rgba), materials, UV Scale, as well as select specific objects populating the scene, all in real-time.</p>
    <p>This enhancement further expands the usability and interactivity of the program and shows my ability to integrate user-friendly and industry standard UI frameworks into graphics applications.</p>

    <p><strong>Did you meet the course outcomes you planned to meet with this enhancement in Module One? Do you have any updates to your outcome-coverage plans?</strong></p>
    <p>With this enhancement, I successfully met the criteria for the following course outcomes:</p>
    <ul>
      <li>Design, develop, and deliver professional-quality oral, written, and visual communications that are coherent, technically sound, and appropriately adapted to specific audiences and contexts.</li>
    </ul>
    <p>The updated artifact uses a clean and interactive UI that allows users to modify elements in the OpenGL scene dynamically. My ability to design a user-friendly UI, and document and present this enhancement demonstrates that I can effectively communicate the necessary skills for this course outcome.</p>
    <ul>
      <li>Demonstrate an ability to use well-founded and innovative techniques, skills, and tools in computing practices for the purpose of implementing computer solutions that deliver value and accomplish industry-specific goals.</li>
    </ul>
    <p>The integration of ImGui into an OpenGL based rendering engine demonstrates my ability to utilize modern software engineering best practices, and industry-standard tools to improve my rendering engine.</p>
    <ul>
      <li>Employ strategies for building collaborative environments that enable diverse audiences to support organizational decision-making in the field of computer science.</li>
    </ul>
    <p>By making the rendering engine more intuitive and user-friendly with the ImGui interface, I have successfully improved the accessibility of the application. This allows potential users, whether they are other developers or someone with less technical knowledge, to interact and build OpenGL scenes.</p>

    <p><strong>Reflect on the process of enhancing and modifying the artifact. What did you learn as you were creating it and improving it? What challenges did you face?</strong></p>
    <p>The biggest challenge when modifying this artifact was refactoring the SceneManager.cpp and SceneManager.h files and building a struct to store all the different properties of meshes to be rendered. This MESH_OBJECT struct can be expanded to add or remove properties and will be useful for managing scene data to be saved and loaded in the future.</p>

    <p><strong>Example 1</strong></p>
    <pre><code>struct MESH_OBJECT
{
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

    <p>MESH_OBJECT holds properties for each primitive mesh, including a tag (name) of the object, rotation vector, position vector, scale vector, material tag, texture tag, UV scale vector, shader color vector (rgba), and finally passes in the mesh’s unique draw function. These properties can then be passed to the ImGui UI for manipulation.</p>

    <p><strong>Example 2</strong></p>
    <pre><code>void SceneManager::RenderMeshes()
{
    for (const auto&amp; mesh : m_meshes)
    {
        SetTransformations(mesh.scale, mesh.rotation.x, mesh.rotation.y, mesh.rotation.z, mesh.position);
        SetShaderMaterial(mesh.materialTag);
        SetShaderTexture(mesh.textureTag);
        SetTextureUVScale(mesh.uvScale.x, mesh.uvScale.y);
        SetShaderColor(mesh.shaderColor.r, mesh.shaderColor.g, mesh.shaderColor.b, mesh.shaderColor.a);

        if (mesh.drawFunction)
        {
            mesh.drawFunction();
        }
    }
}</code></pre>

    <p>To render the meshes stored in the m_meshes vector, the program simply loops through each mesh added to the list, and sets their unique transformation, materials, textures, UV scales, and colors. Then the mesh draw function is called.</p>

    <p>Throughout this process I learned how to build a UI using many useful ImGui functions, and manipulate my MESH_OBJECT struct with sliders, buttons, text fields, and color pickers, and gained a lot of knowledge on the extensive functionality of the ImGui library and the_



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
