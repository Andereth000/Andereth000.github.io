---
layout: default
---

<a href="/index.html" class="btn btn-back">⬅️ Go Back</a>
<a href="[https://github.com/Andereth000/CS-330-Computer-Graphics-And-Visualization]" target="_blank" class="btn btn-repo">📁 View Repository</a>

# CS-499 Capstone

## Week Two
Credenza OpenGL Code Review

<a href="https://youtu.be/4-teGXIMeoE" target="_blank">
  <img src="https://imgur.com/QzFq6PU.png" alt="Play Video"
       style="border: 2px solid #9ddcff; border-radius: 10px; width: 100%; max-width: 500px; box-shadow: 0 4px 8px rgba(0,0,0,1);">
</a>

## Week Three
Enhancement One (ImGUI and Mesh Editor)

<a href="#" onclick="event.preventDefault(); openModal('imgui-narrative');" class="btn btn-narrative">📄 View Full Narrative</a>

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

<a href="#" onclick="event.preventDefault(); openModal('assimp-narrative');" class="btn btn-narrative">📄 View Full Narrative</a>


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

<a href="#" onclick="event.preventDefault(); openModal('json-narrative');" class="btn btn-narrative">📄 View Full Narrative</a>


<div id="json-narrative" class="modal">
  <div class="modal-content">
    <span onclick="closeModal('json-narrative')" class="close">&times;</span>
    <h2>Enhancement Three: Databases</h2>
    <p><strong>Ethan Anderson<br>CS-499: Computer Science Capstone<br>Prof. Alim<br>April 3, 2025</strong></p>

    <p><strong>Briefly describe the artifact. What is it? When was it created?</strong></p>
    <p>The artifact for the second enhancement in algorithms and data structures is from CS-330: Computer Graphics and Visualization. This artifact is an OpenGL-based rendering engine, and the goal of the original project was to take a reference image of a scene and model the scene in 3D using primitive shapes. This project also includes a Blinn-Phong lighting model, and interactive camera controls. The final submission for CS-330 was completed on April 14, 2024.</p>

    <p><strong>Justify the inclusion of the artifact in your ePortfolio. Why did you select this item? What specific components of the artifact showcase your skills and abilities in software development? How was the artifact improved?</strong></p>
    <p>I chose this artifact because it shows a strong understanding of the graphics pipeline in OpenGL, as well as my ability to manage complex data structures using a JSON database. Specifically, I implemented serialization and deserialization (scene saving and loading) using the nlohmann JSON library. This enhancement allows the user to save objects in the scene to JSON format and reload those objects from the file when the program is run again. This can be done both with the standard primitive meshes in the engine, as well as the more complex 3D models like the Stanford bunny, Lucy, Teapot, and Suzanne. This enables users to create and save complex scenes using the mesh editor, and save their work without issue.</p>

    <p><strong>Did you meet the course outcomes you planned to meet with this enhancement in Module One? Do you have any updates to your outcome-coverage plans?</strong></p>
    <ul>
      <li><strong>Develop a security mindset that anticipates adversarial exploits in software architecture and designs to expose potential vulnerabilities, mitigate design flaws, and ensure privacy and enhanced security of data and resources.</strong></li>
    </ul>
    <p>I approached this enhancement with security in mind by using a well regarded third-party library which validates JSON data before passing it into the program. I also made sure that the program can correctly parse the JSON data and avoid incorrectly drawing objects or corrupting scene data.</p>

    <ul>
      <li><strong>Demonstrate an ability to use well-founded and innovative techniques, skills, and tools in computing practices for the purpose of implementing computer solutions that deliver value and accomplish industry-specific goals.</strong></li>
    </ul>
    <p>This database enhancement is industry-specific and delivers value to users, by using JSON serialization and deserialization for scene objects, which is a real-world practice found in modern game engines and graphics applications. The serialization and deserialization system is written to be modular, readable, and works seamlessly with the object structures that I defined in previous enhancements.</p>

    <p><strong>Reflect on the process of enhancing and modifying the artifact. What did you learn as you were creating it and improving it? What challenges did you face?</strong></p>
    <p>In the process of integrating this enhancement, I learned a lot about the nlohmann JSON library, how to effectively use it, and how to refactor my mesh data structures to effectively reload them in my OpenGL scene.</p>

    <p>In the first example, objects and all of their properties are saved with <code>SerializeSceneData()</code> in JSON format by first declaring a JSON array, <code>json jScene</code>. Then, for each mesh in the scene, a separate object <code>json jMesh</code> is defined, which is where the key-value pairs for properties such as tag, position, rotation, scale, etc., are stored. Each jMesh object is appended to the jScene array, effectively representing the scene data. Once these values are assigned the JSON objects are pushed to the file stream, formatted for readability using the <code>dump(4)</code> method, and saved to a file under <code>Saves/scene.json</code> using the “Save Scene” button in the ImGui UI. (Lohmann, N., 2025)</p>

    <p><strong>Example 1</strong></p>
    <pre><code>void SceneManager::SerializeSceneData(std::string filename)
{
    json jScene;

    for (auto&amp; mesh : m_meshes)
    {
        json jMesh;
        jMesh["tag"] = mesh.tag;
        jMesh["position"] = { mesh.position.x, mesh.position.y, mesh.position.z };
        jMesh["rotation"] = { mesh.rotation.x, mesh.rotation.y, mesh.rotation.z };
        jMesh["scale"] = { mesh.scale.x, mesh.scale.y, mesh.scale.z };
        jMesh["materialTag"] = mesh.materialTag;
        jMesh["textureTag"] = mesh.textureTag;
        jMesh["uvScale"] = { mesh.uvScale.x, mesh.uvScale.y };
        jMesh["shaderColor"] = { mesh.shaderColor.r, mesh.shaderColor.g, mesh.shaderColor.b, mesh.shaderColor.a };
        jMesh["isRotating"] = mesh.isRotating;

        jScene.push_back(jMesh);
    }

    std::ofstream file(filename);
    file &lt;&lt; jScene.dump(4);
    file.close();
}</code></pre>

    <p><strong>Example 2 (JSON output)</strong></p>
    <pre><code>{
    "isRotating": false,
    "materialTag": "default",
    "position": [-1.5, 0.0, 12.0],
    "rotation": [0.0, 274.5495910644531, 0.0],
    "scale": [1.2999999523162842, 3.5999999046325684, 1.2999999523162842],
    "shaderColor": [0.0, 0.0, 0.0, 1.0],
    "tag": "cylinder",
    "textureTag": "",
    "uvScale": [1.0, 1.0]
}</code></pre>

    <p>The same process is done in reverse with <code>DeserializeSceneData()</code>, where the <code>scene.json</code> file is read, and all of the object properties are reassigned. For example:</p>

    <p><strong>Example 3</strong></p>
    <pre><code>// Retrieve model data
std::string tag = jMesh["tag"];
glm::vec3 position(jMesh["position"][0], jMesh["position"][1], jMesh["position"][2]);
glm::vec3 rotation(jMesh["rotation"][0], jMesh["rotation"][1], jMesh["rotation"][2]);
glm::vec3 scale(jMesh["scale"][0], jMesh["scale"][1], jMesh["scale"][2]);
std::string materialTag = jMesh["materialTag"];
std::string textureTag = jMesh["textureTag"];
glm::vec2 uvScale(jMesh["uvScale"][0], jMesh["uvScale"][1]);
glm::vec4 shaderColor(jMesh["shaderColor"][0], jMesh["shaderColor"][1], jMesh["shaderColor"][2], jMesh["shaderColor"][3]);
bool isRotating = jMesh["isRotating"];

// Handle re-drawing models
if (tag.find("Stanford Bunny") != std::string::npos)
{
    LoadModel("../../Models/bunny.obj", tag, 
        position, rotation, 
        scale, materialTag, 
        textureTag, uvScale,
        shaderColor, isRotating);
    continue;
}</code></pre>

    <p>One caveat with this approach for re-drawing models, was calling the correct draw method for objects according to their tag (name). For example, if two meshes share a similar tag, then the order in which the tags are checked become really important:</p>

    <p><strong>Example 4</strong></p>
    <pre><code>else if (tag.find("tapered cylinder") != std::string::npos)
{
    AddMeshToScene(tag, position,
        rotation, scale,
        materialTag, textureTag,
        uvScale, shaderColor,
        [this]() { m_basicMeshes-&gt;DrawTaperedCylinderMesh(); });
    continue;
}
else if (tag.find("cylinder") != std::string::npos)
{
    AddMeshToScene(tag, position,
        rotation, scale,
        materialTag, textureTag,
        uvScale, shaderColor,
        [this]() { m_basicMeshes-&gt;DrawCylinderMesh(); });
    continue;
}</code></pre>

    <p>If “cylinder” is checked before “tapered cylinder”, then an object tagged as “tapered cylinder” would be replaced with “cylinder”, and the wrong draw method would be called for that object.</p>

    <p>Finally, in order to correctly re-load the 3D models, I had to refactor their loading method definitions to include more object properties, so the <code>LoadModel()</code> function was refactored from this:</p>
    <pre><code>void LoadModel(std::string filename, std::string tag, 
    glm::vec3 position, glm::vec3 rotation,
    glm::vec3 scale);</code></pre>

    <p>To this:</p>
    <pre><code>void LoadModel(std::string filename, std::string tag, 
    glm::vec3 position, glm::vec3 rotation,
    glm::vec3 scale, std::string materialTag,
    std::string textureTag, glm::vec2 uvScale,
    glm::vec4 shaderColor, bool isRotating);</code></pre>

    <h3>References</h3>
    <ul>
      <li>Lohmann, N. (2025). <em>JSON for Modern C++</em>. Retrieved from <a href="https://json.nlohmann.me/" target="_blank">https://json.nlohmann.me/</a></li>
    </ul>
  </div>
</div>

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
