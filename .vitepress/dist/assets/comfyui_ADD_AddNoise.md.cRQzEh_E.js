import{_ as s,c as a,o as n,a4 as e}from"./chunks/framework.DpC1ZpOZ.js";const h=JSON.parse('{"title":"Documentation","description":"","frontmatter":{},"headers":[],"relativePath":"comfyui/ADD/AddNoise.md","filePath":"comfyui/ADD/AddNoise.md"}'),l={name:"comfyui/ADD/AddNoise.md"},i=e(`<h1 id="documentation" tabindex="-1">Documentation <a class="header-anchor" href="#documentation" aria-label="Permalink to &quot;Documentation&quot;">​</a></h1><ul><li>Class name: AddNoise</li><li>Category: _for_testing/custom_sampling/noise</li><li>Output node: False</li><li>Repo Ref: <a href="https://github.com/comfyanonymous/ComfyUI" target="_blank" rel="noreferrer">https://github.com/comfyanonymous/ComfyUI</a></li></ul><p>AddNoise节点旨在向潜在图像引入随机噪声，这是生成合成图像过程中的关键步骤。它通过根据指定的sigmas对噪声进行缩放，然后将噪声与潜在图像结合，以产生带噪声的输出。该节点对于模拟图像数据中固有的噪声特性至关重要，从而增强了生成图像的多样性和逼真度。</p><h1 id="input-types" tabindex="-1">Input types <a class="header-anchor" href="#input-types" aria-label="Permalink to &quot;Input types&quot;">​</a></h1><h2 id="required" tabindex="-1">Required <a class="header-anchor" href="#required" aria-label="Permalink to &quot;Required&quot;">​</a></h2><ul><li>model <ul><li>模型参数对于AddNoise节点至关重要，因为它决定了用于采样和处理潜在图像的模型。它是节点执行的基础，直接影响生成的带噪声图像的质量和特性。</li><li>Comfy dtype: MODEL</li><li>Python dtype: torch.nn.Module</li></ul></li><li>noise <ul><li>噪声参数对于AddNoise节点至关重要，因为它提供了将被整合到潜在图像中的随机性来源。噪声的类型和属性可以显著影响输出图像的多样性和不可预测性。</li><li>Comfy dtype: NOISE</li><li>Python dtype: Callable[..., torch.Tensor]</li></ul></li><li>sigmas <ul><li>sigmas参数决定了要添加到潜在图像中的噪声的规模。它在控制噪声水平以及合成图像的视觉外观中起着关键作用。</li><li>Comfy dtype: SIGMAS</li><li>Python dtype: List[float]</li></ul></li><li>latent_image <ul><li>latent_image参数是AddNoise节点的核心输入，代表将通过添加噪声进行修改的图像数据。其结构和内容对节点的功能以及图像合成过程的最终结果至关重要。</li><li>Comfy dtype: LATENT</li><li>Python dtype: Dict[str, torch.Tensor]</li></ul></li></ul><h1 id="output-types" tabindex="-1">Output types <a class="header-anchor" href="#output-types" aria-label="Permalink to &quot;Output types&quot;">​</a></h1><ul><li>latent <ul><li>输出的latent参数代表应用AddNoise节点后得到的带噪声图像。它封装了携带所需噪声特性的合成数据，可供进一步处理或分析。</li><li>Comfy dtype: LATENT</li><li>Python dtype: Dict[str, torch.Tensor]</li></ul></li></ul><h1 id="usage-tips" tabindex="-1">Usage tips <a class="header-anchor" href="#usage-tips" aria-label="Permalink to &quot;Usage tips&quot;">​</a></h1><ul><li>Infra type: CPU</li></ul><h1 id="source-code" tabindex="-1">Source code <a class="header-anchor" href="#source-code" aria-label="Permalink to &quot;Source code&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>class AddNoise:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @classmethod</span></span>
<span class="line"><span>    def INPUT_TYPES(s):</span></span>
<span class="line"><span>        return {&#39;required&#39;: {&#39;model&#39;: (&#39;MODEL&#39;,), &#39;noise&#39;: (&#39;NOISE&#39;,), &#39;sigmas&#39;: (&#39;SIGMAS&#39;,), &#39;latent_image&#39;: (&#39;LATENT&#39;,)}}</span></span>
<span class="line"><span>    RETURN_TYPES = (&#39;LATENT&#39;,)</span></span>
<span class="line"><span>    FUNCTION = &#39;add_noise&#39;</span></span>
<span class="line"><span>    CATEGORY = &#39;_for_testing/custom_sampling/noise&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def add_noise(self, model, noise, sigmas, latent_image):</span></span>
<span class="line"><span>        if len(sigmas) == 0:</span></span>
<span class="line"><span>            return latent_image</span></span>
<span class="line"><span>        latent = latent_image</span></span>
<span class="line"><span>        latent_image = latent[&#39;samples&#39;]</span></span>
<span class="line"><span>        noisy = noise.generate_noise(latent)</span></span>
<span class="line"><span>        model_sampling = model.get_model_object(&#39;model_sampling&#39;)</span></span>
<span class="line"><span>        process_latent_out = model.get_model_object(&#39;process_latent_out&#39;)</span></span>
<span class="line"><span>        process_latent_in = model.get_model_object(&#39;process_latent_in&#39;)</span></span>
<span class="line"><span>        if len(sigmas) &gt; 1:</span></span>
<span class="line"><span>            scale = torch.abs(sigmas[0] - sigmas[-1])</span></span>
<span class="line"><span>        else:</span></span>
<span class="line"><span>            scale = sigmas[0]</span></span>
<span class="line"><span>        if torch.count_nonzero(latent_image) &gt; 0:</span></span>
<span class="line"><span>            latent_image = process_latent_in(latent_image)</span></span>
<span class="line"><span>        noisy = model_sampling.noise_scaling(scale, noisy, latent_image)</span></span>
<span class="line"><span>        noisy = process_latent_out(noisy)</span></span>
<span class="line"><span>        noisy = torch.nan_to_num(noisy, nan=0.0, posinf=0.0, neginf=0.0)</span></span>
<span class="line"><span>        out = latent.copy()</span></span>
<span class="line"><span>        out[&#39;samples&#39;] = noisy</span></span>
<span class="line"><span>        return (out,)</span></span></code></pre></div>`,12),t=[i];function p(o,c,d,r,u,m){return n(),a("div",null,t)}const g=s(l,[["render",p]]);export{h as __pageData,g as default};
