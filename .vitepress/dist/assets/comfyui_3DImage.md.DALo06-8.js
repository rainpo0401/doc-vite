import{_ as a,c as s,o as n,a4 as e}from"./chunks/framework.DpC1ZpOZ.js";const _=JSON.parse('{"title":"Documentation","description":"","frontmatter":{},"headers":[],"relativePath":"comfyui/3DImage.md","filePath":"comfyui/3DImage.md"}'),l={name:"comfyui/3DImage.md"},i=e(`<h1 id="documentation" tabindex="-1">Documentation <a class="header-anchor" href="#documentation" aria-label="Permalink to &quot;Documentation&quot;">​</a></h1><ul><li>Class name: Image3D</li><li>Category: ♾️Mixlab/Image</li><li>Output node: True</li><li>Repo Ref: <a href="https://github.com/shadowcz007/comfyui-mixlab-nodes.git" target="_blank" rel="noreferrer">https://github.com/shadowcz007/comfyui-mixlab-nodes.git</a></li></ul><p>Image3D节点旨在处理和操作3D图像。它接受一个base64编码的图像和可选的材料作为输入，将它们转换为适合深度学习模型进一步处理的张量形式。该节点还处理掩码和背景图像的提取，提供一套全面的图像操作功能。</p><h1 id="input-types" tabindex="-1">Input types <a class="header-anchor" href="#input-types" aria-label="Permalink to &quot;Input types&quot;">​</a></h1><h2 id="required" tabindex="-1">Required <a class="header-anchor" href="#required" aria-label="Permalink to &quot;Required&quot;">​</a></h2><ul><li>upload <ul><li>‘upload’参数对于节点至关重要，因为它包含base64编码的图像数据和可选的材料进行处理。它对节点的执行至关重要，因为它提供了图像操作的主要输入。</li><li>Comfy dtype: Dict[str, str]</li><li>Python dtype: Dict[str, Union[str, torch.Tensor]]</li></ul></li><li>material <ul><li>‘material’参数是可选的，允许包含可以用于增强主要图像处理过程的额外图像数据。它通过启用补充视觉元素的使用，增加了节点功能的灵活性。</li><li>Comfy dtype: IMAGE</li><li>Python dtype: Optional[torch.Tensor]</li></ul></li></ul><h1 id="output-types" tabindex="-1">Output types <a class="header-anchor" href="#output-types" aria-label="Permalink to &quot;Output types&quot;">​</a></h1><ul><li>IMAGE <ul><li>‘IMAGE’输出代表以张量形式处理的3D图像，可用于机器学习或计算机视觉应用等下游任务。</li><li>Comfy dtype: IMAGE</li><li>Python dtype: torch.Tensor</li></ul></li><li>MASK <ul><li>‘MASK’输出提供了从输入图像派生的二进制掩码，可用于分割或其他图像分析任务。</li><li>Comfy dtype: IMAGE</li><li>Python dtype: torch.Tensor</li></ul></li><li>BG_IMAGE <ul><li>‘BG_IMAGE’输出是可选的背景图像，它补充了主要图像，为某些应用增强了上下文。</li><li>Comfy dtype: IMAGE</li><li>Python dtype: Optional[torch.Tensor]</li></ul></li><li>MATERIAL <ul><li>‘MATERIAL’输出是处理过的材料图像，可以与主要图像一起用于更复杂的图像处理任务。</li><li>Comfy dtype: IMAGE</li><li>Python dtype: Optional[torch.Tensor]</li></ul></li></ul><h1 id="usage-tips" tabindex="-1">Usage tips <a class="header-anchor" href="#usage-tips" aria-label="Permalink to &quot;Usage tips&quot;">​</a></h1><ul><li>Infra type: CPU</li></ul><h1 id="source-code" tabindex="-1">Source code <a class="header-anchor" href="#source-code" aria-label="Permalink to &quot;Source code&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>class Image3D:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @classmethod</span></span>
<span class="line"><span>    def INPUT_TYPES(s):</span></span>
<span class="line"><span>        return {&#39;required&#39;: {&#39;upload&#39;: (&#39;THREED&#39;,)}, &#39;optional&#39;: {&#39;material&#39;: (&#39;IMAGE&#39;,)}}</span></span>
<span class="line"><span>    RETURN_TYPES = (&#39;IMAGE&#39;, &#39;MASK&#39;, &#39;IMAGE&#39;, &#39;IMAGE&#39;)</span></span>
<span class="line"><span>    RETURN_NAMES = (&#39;IMAGE&#39;, &#39;MASK&#39;, &#39;BG_IMAGE&#39;, &#39;MATERIAL&#39;)</span></span>
<span class="line"><span>    FUNCTION = &#39;run&#39;</span></span>
<span class="line"><span>    CATEGORY = &#39;♾️Mixlab/Image&#39;</span></span>
<span class="line"><span>    INPUT_IS_LIST = False</span></span>
<span class="line"><span>    OUTPUT_IS_LIST = (False, False, False, False)</span></span>
<span class="line"><span>    OUTPUT_NODE = True</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def run(self, upload, material=None):</span></span>
<span class="line"><span>        image = base64_to_image(upload[&#39;image&#39;])</span></span>
<span class="line"><span>        mat = None</span></span>
<span class="line"><span>        if &#39;material&#39; in upload and upload[&#39;material&#39;]:</span></span>
<span class="line"><span>            mat = base64_to_image(upload[&#39;material&#39;])</span></span>
<span class="line"><span>            mat = mat.convert(&#39;RGB&#39;)</span></span>
<span class="line"><span>            mat = pil2tensor(mat)</span></span>
<span class="line"><span>        mask = image.split()[3]</span></span>
<span class="line"><span>        image = image.convert(&#39;RGB&#39;)</span></span>
<span class="line"><span>        mask = mask.convert(&#39;L&#39;)</span></span>
<span class="line"><span>        bg_image = None</span></span>
<span class="line"><span>        if &#39;bg_image&#39; in upload and upload[&#39;bg_image&#39;]:</span></span>
<span class="line"><span>            bg_image = base64_to_image(upload[&#39;bg_image&#39;])</span></span>
<span class="line"><span>            bg_image = bg_image.convert(&#39;RGB&#39;)</span></span>
<span class="line"><span>            bg_image = pil2tensor(bg_image)</span></span>
<span class="line"><span>        mask = pil2tensor(mask)</span></span>
<span class="line"><span>        image = pil2tensor(image)</span></span>
<span class="line"><span>        m = []</span></span>
<span class="line"><span>        if not material is None:</span></span>
<span class="line"><span>            m = create_temp_file(material[0])</span></span>
<span class="line"><span>        return {&#39;ui&#39;: {&#39;material&#39;: m}, &#39;result&#39;: (image, mask, bg_image, mat)}</span></span></code></pre></div>`,12),p=[i];function t(o,r,c,u,m,d){return n(),s("div",null,p)}const g=a(l,[["render",t]]);export{_ as __pageData,g as default};
