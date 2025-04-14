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

    <p>Throughout this process I learned how to build a UI using many useful ImGui functions, and manipulate my MESH_OBJECT struct with sliders, buttons, text fields, and color pickers, and gained a lot of knowledge on the extensive functionality of the ImGui library and the overall functionality and structure of this OpenGL rendering engine. Finally, I learned a lot about using a vector to track mesh objects in the scene and traversing that vector to add or remove meshes from the scene by index.</p>

    <p><strong>Example 3</strong></p>
    <pre><code>SceneManager::MESH_OBJECT&amp; mesh = g_SceneManager-&gt;GetMesh(curMeshIndex);
ImGui::DragFloat3("Position", &amp;mesh.position.x, 0.1f, -10.0f, 10.0f);</code></pre>
  </div>
</div>


<video class ="hover-zoom" autoplay loop muted playsinline
  style="border: 2px solid #9ddcff; border-radius: 10px; width: 100%; max-width: 500px; box-shadow: 0 4px 8px rgba(0,0,0,1);">
  <source src="videos/Enhancement One Web.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

## Week Four
Enhancement Two (Assimp .obj Model Loader)

<a href="#" onclick="openModal('assimp-narrative')">View Full Narrative →</a>

<div id="assimp-narrative" class="modal">
  <div class="modal-content">
    <span onclick="closeModal('assimp-narrative')" class="close">&times;</span>
    <h2>Enhancement Two: Algorithms and Data Structure</h2>
    <p><strong>Ethan Anderson<br>CS-499: Computer Science Capstone<br>Prof. Alim<br>March 27, 2025</strong></p>

    <p><strong>Briefly describe the artifact. What is it? When was it created?</strong></p>
    <p>The artifact for the second enhancement in algorithms and data structures is from CS-330: Computer Graphics and Visualization. This artifact is an OpenGL-based rendering engine, and the goal of the original project was to take a reference image of a scene and model the scene in 3D using primitive shapes. This project also includes a Blinn-Phong lighting model, and interactive camera controls. The final submission for CS-330 was completed on April 14, 2024.</p>

    <p><strong>Justify the inclusion of the artifact in your ePortfolio. Why did you select this item? What specific components of the artifact showcase your skills and abilities in software development? How was the artifact improved?</strong></p>
    <p>I selected this artifact because it shows my ability to integrate algorithms and data structures using OpenGL and C++. Originally the project included hard-coded primitive shapes to be loaded into the scene. This has limitations, as complex 3D models are made up of a substantial amount of meshes, to form an entire object. For this enhancement, I improved the functionality of the OpenGL engine using Assimp to support loading complex .obj 3D models, allowing users to develop more interesting scenes.</p>

    <p>This enhancement highlights my understanding of complex data structures, and the algorithms required to process complex model data. Also, this shows my ability to utilize industry-standard workflows for handling 3D assets.</p>

    <p><strong>Did you meet the course outcomes you planned to meet with this enhancement in Module One? Do you have any updates to your outcome-coverage plans?</strong></p>
    <ul>
      <li><strong>Design and evaluate computing solutions that solve a given problem using algorithmic principles and computer science practices and standards appropriate to its solution while managing the trade-offs involved in design choices.</strong></li>
    </ul>
    <p>To meet this outcome, I adapted logic from Assimp documentation (Assimp, 2022) and LearnOpenGL tutorials (LearnOpenGL, n.d.), to load and process 3D models and each of the meshes they are made of. This involved using recursion to walk through the model’s node hierarchy, extract mesh data (vertices, normal, indices), and prepare the data to be rendered to the GPU with OpenGL. Efficiently managing these data structures and using an industry standard library, I am successfully able to load complex models in my scene with the press of a button.</p>

    <ul>
      <li><strong>Demonstrate an ability to use well-founded and innovative techniques, skills, and tools in computing practices for the purpose of implementing computer solutions that deliver value and accomplish industry-specific goals.</strong></li>
    </ul>
    <p>To meet this outcome, I used the Assimp model loading library, which is widely used in professional 3D applications, and integrated it into my OpenGL engine. This improves the functionality of the engine, providing value, and accomplishes industry-specific goals seen in modern rendering engines.</p>

    <p><strong>Reflect on the process of enhancing and modifying the artifact. What did you learn as you were creating it and improving it? What challenges did you face?</strong></p>
    <p>Throughout this enhancement, I learned the structure of .obj files and how they organize complex 3D models as nested nodes and meshes. I gained experience using the Assimp API to load and process mesh data, manage OpenGL buffers, and draw that data on the GPU.</p>

    <p>In order to load models made up of multiple meshes, Assimp uses a recursive approach to traverse the model’s scene graph, starting from the root node (top). Nodes can consist of one or multiple meshes, and nodes can have zero or more child nodes, forming a hierarchy. This hierarchy is traversed recursively to ensure the entire mesh is correctly processed.</p>

    <p><strong>Example 1</strong></p>
    <pre><code>for (unsigned int i = 0; i &lt; node-&gt;mNumMeshes; i++)
{
    aiMesh* mesh = scene-&gt;mMeshes[node-&gt;mMeshes[i]];
    ProcessMesh(mesh, scene, tag + std::to_string(i), position, rotation, scale);
}

for (unsigned int i = 0; i &lt; node-&gt;mNumChildren; i++)
{
    ProcessNode(node-&gt;mChildren[i], scene, tag, position, rotation, scale);
}</code></pre>

    <p>There were a few challenges I faced during this enhancement. The first was with the teapot.obj model, which was initially rendered in the scene without any normals, resulting in flat shading of the object. This required me to use Assimp’s post-processing flag <code>aiProcess_GenSmoothNormals</code> to generate this missing normal data.</p>

    <p><strong>Example 2</strong></p>
    <pre><code>// aiProcess_GenSmoothNormals to fix teapot missing normals
const aiScene* scene = importer.ReadFile(filename,
    aiProcess_Triangulate | aiProcess_FlipUVs | aiProcess_GenSmoothNormals);</code></pre>

    <p>The second minor issue was with the models used for this exercise. The models (bunny.obj, lucy.obj, teapot.obj, and suzanne.obj) were processed using Blender and exported as .obj files for use in OpenGL. OpenGL and Blender both use a right-handed coordinate system, but Blender uses Z-up, whereas OpenGL uses Y-up. I had to keep this in mind when exporting models from Blender to OpenGL in order to have a correct default orientation.</p>

    <p>Finally, I learned how to initialize and bind OpenGL buffers in order to pass mesh data to the GPU, and how to draw 3D models to the screen using that data. This includes generating and uploading vertex and index data to Vertex Buffer Objects (VBOs) and Element Buffer Objects (EBOs) and configuring Vertex Array Objects (VAOs) to define how the GPU interprets the 3D model data during rendering.</p>

    <p>For part of this implementation, I intentionally excluded code for processing texture coordinate data, as textures are not currently necessary for my engine. My main goal was to simply load and display 3D models. This required me to modify the stride value passed to OpenGL from <code>8 * sizeof(float)</code> to <code>6 * sizeof(float)</code>, to account for the absence of texture coordinates.</p>

    <p><strong>Example 3</strong></p>
    <pre><code>// Initialize buffers
GLuint VAO, VBO, EBO;
glGenVertexArrays(1, &amp;VAO);
glGenBuffers(1, &amp;VBO);
glGenBuffers(1, &amp;EBO);

glBindVertexArray(VAO);

// Bind vertex buffer
glBindBuffer(GL_ARRAY_BUFFER, VBO);
glBufferData(GL_ARRAY_BUFFER, vertices.size() * sizeof(float), vertices.data(), GL_STATIC_DRAW);

// Bind element buffer
glBindBuffer(GL_ELEMENT_ARRAY_BUFFER, EBO);
glBufferData(GL_ELEMENT_ARRAY_BUFFER, indices.size() * sizeof(unsigned int), indices.data(), GL_STATIC_DRAW);

// Position (stride of 6 without texture coordinates)
glVertexAttribPointer(0, 3, GL_FLOAT, GL_FALSE, 6 * sizeof(float), (void*)0);
glEnableVertexAttribArray(0);

// Normal (stride of 6 without texture coordinates)
glVertexAttribPointer(1, 3, GL_FLOAT, GL_FALSE, 6 * sizeof(float), (void*)(3 * sizeof(float)));
glEnableVertexAttribArray(1);

glBindVertexArray(0);</code></pre>

    <h3>References</h3>
    <ul>
      <li>Assimp. (2022). <em>Open Asset Import Library (Assimp) Documentation</em>. <a href="https://assimp-docs.readthedocs.io/en/latest/" target="_blank">Readthedocs.io</a></li>
      <li>Assimp. (n.d.). <em>Post-processing Flags</em>. <a href="https://github.com/assimp/assimp/blob/master/include/assimp/postprocess.h" target="_blank">GitHub</a></li>
      <li>LearnOpenGL. (n.d.). <em>Assimp</em>. <a href="https://learnopengl.com/Model-Loading/Assimp" target="_blank">LearnOpenGL</a></li>
      <li>LearnOpenGL. (n.d.). <em>Mesh</em>. <a href="https://learnopengl.com/Model-Loading/Mesh" target="_blank">LearnOpenGL</a></li>
      <li>LearnOpenGL. (n.d.). <em>Model</em>. <a href="https://learnopengl.com/Model-Loading/Model" target="_blank">LearnOpenGL</a></li>
    </ul>
  </div>
</div>


<video class ="hover-zoom" autoplay loop muted playsinline
  style="border: 2px solid #9ddcff; border-radius: 10px; width: 100%; max-width: 500px; box-shadow: 0 4px 8px rgba(0,0,0,1);">
  <source src="videos/Enhancement Two Loop Web.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

## Week Five
Enhancement Three (Saving and Loading JSON Scenes)

<a href="#" onclick="openModal('nlohmann-narrative')">View Full Narrative →</a>

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
