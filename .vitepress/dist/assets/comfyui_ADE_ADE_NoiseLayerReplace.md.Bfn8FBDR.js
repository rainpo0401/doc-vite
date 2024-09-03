import{_ as e,c as a,o as s,a4 as i}from"./chunks/framework.DpC1ZpOZ.js";const f=JSON.parse('{"title":"Documentation","description":"","frontmatter":{},"headers":[],"relativePath":"comfyui/ADE/ADE_NoiseLayerReplace.md","filePath":"comfyui/ADE/ADE_NoiseLayerReplace.md"}'),n={name:"comfyui/ADE/ADE_NoiseLayerReplace.md"},l=i(`<h1 id="documentation" tabindex="-1">Documentation <a class="header-anchor" href="#documentation" aria-label="Permalink to &quot;Documentation&quot;">​</a></h1><ul><li>Class name: NoiseLayerReplaceNode</li><li>Category: Animate Diff 🎭🅐🅓/noise layers</li><li>Output node: False</li><li>Repo Ref: <a href="https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved.git" target="_blank" rel="noreferrer">https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved.git</a></li></ul><p>NoiseLayerReplaceNode旨在为动画目的在模型中操作和生成噪声层。它根据指定的参数用新的噪声替换现有的噪声，允许动态和多样化的动画效果。</p><h1 id="input-types" tabindex="-1">Input types <a class="header-anchor" href="#input-types" aria-label="Permalink to &quot;Input types&quot;">​</a></h1><h2 id="required" tabindex="-1">Required <a class="header-anchor" href="#required" aria-label="Permalink to &quot;Required&quot;">​</a></h2><ul><li>batch_offset <ul><li>批量偏移参数对于管理动画中的噪声层序列至关重要。它决定了数据批次中的起始点，这对于确保正确操作层非常关键。</li><li>Comfy dtype: INT</li><li>Python dtype: int</li></ul></li><li>noise_type <ul><li>噪声类型参数决定了将创建的噪声层的类型。它是整体噪声生成过程中的一个关键因素，影响噪声的特性和最终动画效果。</li><li>Comfy dtype: NoiseLayerType.LIST</li><li>Python dtype: str</li></ul></li><li>seed_gen_override <ul><li>种子生成覆盖参数允许定制噪声层的种子生成过程。当目标是在动画中实现特定的噪声模式或效果时，这可能特别重要。</li><li>Comfy dtype: SeedNoiseGeneration.LIST_WITH_OVERRIDE</li><li>Python dtype: str</li></ul></li><li>seed_offset <ul><li>种子偏移参数用于调整用于噪声生成的种子值。这可以显著影响生成的噪声模式，提供一种在动画中引入变化的方法。</li><li>Comfy dtype: INT</li><li>Python dtype: int</li></ul></li></ul><h2 id="optional" tabindex="-1">Optional <a class="header-anchor" href="#optional" aria-label="Permalink to &quot;Optional&quot;">​</a></h2><ul><li>prev_noise_layers <ul><li>先前的噪声层参数用于指定将被替换或修改的现有噪声层。它在动画中噪声的连续性和演变中扮演着关键角色。</li><li>Comfy dtype: NOISE_LAYERS</li><li>Python dtype: NoiseLayerGroup</li></ul></li><li>mask_optional <ul><li>掩码可选参数提供了一种方式，可以选择性地将噪声层应用于动画的某些部分。它可以用于引入针对性效果或保护某些区域免受噪声应用的影响。</li><li>Comfy dtype: MASK</li><li>Python dtype: torch.Tensor</li></ul></li><li>seed_override <ul><li>种子覆盖参数允许手动控制用于噪声生成的种子值。这对于微调动画中噪声的特定方面可能特别有用。</li><li>Comfy dtype: INT</li><li>Python dtype: int</li></ul></li></ul><h1 id="output-types" tabindex="-1">Output types <a class="header-anchor" href="#output-types" aria-label="Permalink to &quot;Output types&quot;">​</a></h1><ul><li>noise_layers <ul><li>噪声层输出包含已创建或修改并添加到动画中的噪声层。这些层对于动画序列的视觉外观和行为至关重要。</li><li>Comfy dtype: NOISE_LAYERS</li><li>Python dtype: NoiseLayerGroup</li></ul></li></ul><h1 id="usage-tips" tabindex="-1">Usage tips <a class="header-anchor" href="#usage-tips" aria-label="Permalink to &quot;Usage tips&quot;">​</a></h1><ul><li>Infra type: CPU</li></ul><h1 id="source-code" tabindex="-1">Source code <a class="header-anchor" href="#source-code" aria-label="Permalink to &quot;Source code&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>class NoiseLayerReplaceNode:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @classmethod</span></span>
<span class="line"><span>    def INPUT_TYPES(s):</span></span>
<span class="line"><span>        return {&#39;required&#39;: {&#39;batch_offset&#39;: (&#39;INT&#39;, {&#39;default&#39;: 0, &#39;min&#39;: 0, &#39;max&#39;: BIGMAX}), &#39;noise_type&#39;: (NoiseLayerType.LIST,), &#39;seed_gen_override&#39;: (SeedNoiseGeneration.LIST_WITH_OVERRIDE,), &#39;seed_offset&#39;: (&#39;INT&#39;, {&#39;default&#39;: 0, &#39;min&#39;: BIGMIN, &#39;max&#39;: BIGMAX})}, &#39;optional&#39;: {&#39;prev_noise_layers&#39;: (&#39;NOISE_LAYERS&#39;,), &#39;mask_optional&#39;: (&#39;MASK&#39;,), &#39;seed_override&#39;: (&#39;INT&#39;, {&#39;default&#39;: 0, &#39;min&#39;: 0, &#39;max&#39;: 18446744073709551615, &#39;forceInput&#39;: True})}}</span></span>
<span class="line"><span>    RETURN_TYPES = (&#39;NOISE_LAYERS&#39;,)</span></span>
<span class="line"><span>    CATEGORY = &#39;Animate Diff 🎭🅐🅓/noise layers&#39;</span></span>
<span class="line"><span>    FUNCTION = &#39;create_layers&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def create_layers(self, batch_offset: int, noise_type: str, seed_gen_override: str, seed_offset: int, prev_noise_layers: NoiseLayerGroup=None, mask_optional: Tensor=None, seed_override: int=None):</span></span>
<span class="line"><span>        if prev_noise_layers is None:</span></span>
<span class="line"><span>            prev_noise_layers = NoiseLayerGroup()</span></span>
<span class="line"><span>        prev_noise_layers = prev_noise_layers.clone()</span></span>
<span class="line"><span>        layer = NoiseLayerReplace(noise_type=noise_type, batch_offset=batch_offset, seed_gen_override=seed_gen_override, seed_offset=seed_offset, seed_override=seed_override, mask=mask_optional)</span></span>
<span class="line"><span>        prev_noise_layers.add_to_start(layer)</span></span>
<span class="line"><span>        return (prev_noise_layers,)</span></span></code></pre></div>`,14),t=[l];function o(p,r,d,_,u,c){return s(),a("div",null,t)}const h=e(n,[["render",o]]);export{f as __pageData,h as default};